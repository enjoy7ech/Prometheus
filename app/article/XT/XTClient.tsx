'use client';

import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import styles from './page.module.css';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import SRImage from '@/app/ui/Common/SRImage';

const SLIDES = [
  {
    name: "等风等你",
    title2: "",
    tip: "店头的旗帜随风晃动：‘我在等风，也等一个你。’",
    latlng: "31.306, 120.730",
    color: "#4A453C",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4309.JPG"
  },
  {
    name: "老街旧门",
    title2: "",
    tip: "推开一扇沉重的木门，仿佛能听到明清时期的回音。",
    latlng: "31.306, 120.731",
    color: "#383431",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4310.JPG"
  },
  {
    name: "眺望未来",
    title2: "",
    tip: "远与近，古与今",
    latlng: "31.307, 120.732",
    color: "#2F2E2C",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4311.JPG"
  },
  {
    name: "鸭城",
    title2: "",
    tip: "现代与传统的交织",
    latlng: "31.307, 120.731",
    color: "#423B34",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4312.JPG"
  },
  {
    name: "宜幽亭",
    title2: "",
    tip: "苏式美学的克制",
    latlng: "31.305, 120.730",
    color: "#35312C",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4313.JPG"
  },
  {
    name: "街角一隅",
    title2: "",
    tip: "这是什么花",
    latlng: "31.306, 120.728",
    color: "#31352A",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4314.JPG"
  },
  {
    name: "思齐",
    title2: "",
    tip: "见贤思齐焉，见不贤而内自省也。",
    latlng: "31.308, 120.727",
    color: "#3A3E40",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4315.JPG"
  },
  {
    name: "斜塘老街",
    title2: "",
    tip: "这个地方叫做：斜塘老街",
    latlng: "31.305, 120.729",
    color: "#2B2E33",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4316.JPG"
  },
  {
    name: "越来越好",
    title2: "",
    tip: "没什么好说的，越来越好！",
    latlng: "31.304, 120.731",
    color: "#2C2D2B",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4317.JPG"
  },
  {
    name: "画中旖旎",
    title2: "",
    tip: "写生的老人在画画，我亦在画中",
    latlng: "31.306, 120.732",
    color: "#463A2F",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4320.JPG"
  },
  {
    name: "池杉红叶",
    title2: "",
    tip: "大片的落羽杉染红了半边天，如梦似幻。",
    latlng: "31.307, 120.734",
    color: "#663322",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4321.JPG"
  },
  {
    name: "微光斜照",
    title2: "",
    tip: "阳光穿透红叶，落了一地的碎金，时间在这里按下了暂停键。",
    latlng: "31.305, 120.733",
    color: "#554422",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4322.jpg"
  },
  {
    name: "定格瞬间",
    title2: "",
    tip: "在层林尽染的余韵里，记录下这美好的午后剪影。",
    latlng: "31.306, 120.735",
    color: "#4A4D32",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4327.JPG"
  },
  {
    name: "落叶地毯",
    title2: "",
    tip: "踩在厚厚的落羽杉针叶上，发出嘎吱嘎吱的声响，那是自然的声音。",
    latlng: "31.308, 120.733",
    color: "#5C3D2E",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4330.JPG"
  }
];

export default function XTClient() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState(800);
  const total = SLIDES.length;

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const mod = (n: number) => ((n % total) + total) % total;

  const getSlideProps = (step: number, containerH: number) => {
    const h = containerH || 800;
    const absStep = Math.abs(step);
    const positions = [
      { x: -0.25, y: -0.7, rot: -25, s: 1.25, b: 12, o: 0 },
      { x: -0.12, y: -0.35, rot: -15, s: 1.15, b: 6, o: 0.65 },
      { x: 0, y: 0, rot: 0, s: 1.1, b: 0, o: 1 },
      { x: -0.04, y: 0.35, rot: 15, s: 0.85, b: 6, o: 0.65 },
      { x: -0.1, y: 0.7, rot: 25, s: 0.65, b: 10, o: 0 }
    ];
    const idx = Math.max(0, Math.min(4, step + 2));
    const p = positions[idx];

    return {
      x: p.x * h,
      y: p.y * h,
      rotation: p.rot,
      scale: p.s,
      blur: p.b,
      opacity: p.o,
      zIndex: absStep === 0 ? 3 : absStep === 1 ? 2 : 1
    };
  };

  const handleGo = useCallback((direction: 'next' | 'prev') => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);

    const nextIdx = direction === 'next' ? mod(current + 1) : mod(current - 1);
    setCurrent(nextIdx); // Trigger carousel and background update immediately

    // Animate Colors & Background (via GSAP for smooth gradient transition)
    gsap.to(sliderRef.current, {
      backgroundColor: SLIDES[nextIdx].color,
      duration: 1.2,
      ease: 'power2.inOut'
    });

    // We'll perform Title animation here
    if (titleRef.current) {
      const h = titleRef.current.offsetHeight;
      const dir = direction === 'next' ? 1 : -1;

      // 1. Prepare new title line
      const newLine = document.createElement('div');
      newLine.style.cssText = "position:absolute;top:0;left:0;width:100%";
      [...SLIDES[nextIdx].name].forEach(ch => {
        const span = document.createElement('span');
        span.textContent = ch === " " ? "\u00A0" : ch;
        newLine.appendChild(span);
      });
      titleRef.current.appendChild(newLine);
      const newChars = Array.from(newLine.querySelectorAll('span'));
      gsap.set(newChars, { y: h * dir });

      // 2. Animate old line
      const oldLine = titleRef.current.children[0] as HTMLElement;
      const oldChars = Array.from(oldLine.querySelectorAll('span'));

      const tl = gsap.timeline({
        onComplete: () => {
          if (oldLine.parentNode) {
            oldLine.remove();
          }
          // Double check: remove any other possible leftovers
          if (titleRef.current) {
            while (titleRef.current.children.length > 1) {
              titleRef.current.removeChild(titleRef.current.firstChild!);
            }
          }
          newLine.style.cssText = "";
          gsap.set(newChars, { clearProps: "all" });
          document.title = `斜塘：${SLIDES[nextIdx].name}`;
          isAnimatingRef.current = false;
          setIsAnimating(false);
        }
      });

      tl.to(oldChars, { y: -h * dir, stagger: 0.04, duration: 1, ease: "expo.inOut" }, 0);
      tl.to(newChars, { y: 0, stagger: 0.04, duration: 1, ease: "expo.inOut" }, 0);
    } else {
      setCurrent(nextIdx);
      setIsAnimating(false);
    }
  }, [current, isAnimating, total]);

  // Input handling (Wheel, Touch, Pointer)
  useEffect(() => {
    gsap.registerPlugin(Observer);

    const obs = Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      onUp: () => handleGo('prev'),
      onDown: () => handleGo('next'),
      onChangeY: (self) => {
        // Optional: can add some progress tracking here
      },
      wheelSpeed: -1,
      tolerance: 10,
      preventDefault: true
    });

    return () => obs.kill();
  }, [current, isAnimating]);

  return (
    <div className={styles.container}>

      <main className={styles.slider} ref={sliderRef} style={{ backgroundColor: SLIDES[current].color }}>

        <div className={styles.body}>
          <div className={styles.left}>
            <h2 className={styles.title} ref={titleRef}>
              <div>
                {[...SLIDES[current].name].map((ch, i) => (
                  <span key={i}>{ch === " " ? "\u00A0" : ch}</span>
                ))}
              </div>
            </h2>
            <div className={styles.footer}>
              <div className={styles.description}>
                AN URBAN EXPLORATION<br />IN SUZHOU INDUSTRIAL PARK<br />XIE TANG OLD STREET
              </div>
              <div className={styles.location}>
                2026.03.21<br />CRAFTED WITH GSAP.
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.imageGrid}>
              {/* We render a carousel of 5 items around 'current' */}
              {[-2, -1, 0, 1, 2].map(step => {
                const idx = mod(current + step);
                const props = getSlideProps(step, windowHeight);
                return (
                  <div
                    key={idx}
                    className={styles.slide}
                    style={{
                      transform: `translate(-50%, -50%) translate(${props.x}px, ${props.y}px) rotate(${props.rotation}deg) scale(${props.scale})`,
                      opacity: props.opacity,
                      filter: `blur(${props.blur}px)`,
                      zIndex: props.zIndex,
                      transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <SRImage
                      photo={{
                        id: idx,
                        url: SLIDES[idx].image,
                        bgPos: 'center',
                        position: '苏州·斜塘老街',
                        title: SLIDES[idx].name,
                        title2: (SLIDES[idx] as any).title2,
                        latlng: (SLIDES[idx] as any).latlng,
                        description: '',
                        tip: (SLIDES[idx] as any).tip
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
