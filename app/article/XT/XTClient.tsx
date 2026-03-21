'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import styles from './page.module.css';
import { gsap } from 'gsap';

const SLIDES = [
  {
    name: "暮色斜塘",
    color: "#2C2A28",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4309.JPG"
  },
  {
    name: "古镇光影",
    color: "#3D3833",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4312.JPG"
  },
  {
    name: "河畔漫步",
    color: "#2B2E33",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4316.JPG"
  },
  {
    name: "斜塘旧梦",
    color: "#38312C",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4320.JPG"
  },
  {
    name: "宁静午后",
    color: "#3B3B36",
    image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4330.JPG"
  },
  {
      name: "街巷深处",
      color: "#2F2F2F",
      image: "https://io.dongzx.lol/blog/SuZhou/XieTang/IMG_4318.JPG"
  }
];

export default function XTClient() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const total = SLIDES.length;

  // Track mouse for custom cursor
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out',
        opacity: 1
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const mod = (n: number) => ((n % total) + total) % total;

  const getSlideProps = (step: number, containerH: number) => {
    const h = containerH || 800;
    const absStep = Math.abs(step);
    const positions = [
        { x: -0.35, y: -0.95, rot: -30, s: 1.35, b: 16, o: 0 },
        { x: -0.18, y: -0.5, rot: -15, s: 1.15, b: 8, o: 0.55 },
        { x: 0, y: 0, rot: 0, s: 1.1, b: 0, o: 1 },
        { x: -0.06, y: 0.5, rot: 15, s: 0.75, b: 6, o: 0.55 },
        { x: -0.12, y: 0.95, rot: 30, s: 0.55, b: 14, o: 0 }
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

  const handleGo = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);

    const nextIdx = direction === 'next' ? mod(current + 1) : mod(current - 1);
    
    // Animate Colors & Background
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
                oldLine.remove();
                newLine.style.cssText = "";
                gsap.set(newChars, { clearProps: "all" });
                setCurrent(nextIdx);
                document.title = `斜塘：${SLIDES[nextIdx].name}`;
                setIsAnimating(false);
            }
        });

        tl.to(oldChars, { y: -h * dir, stagger: 0.04, duration: 1, ease: "expo.inOut" }, 0);
        tl.to(newChars, { y: 0, stagger: 0.04, duration: 1, ease: "expo.inOut" }, 0);
    } else {
        setCurrent(nextIdx);
        setIsAnimating(false);
    }
  };

  // Wheel handling
  useEffect(() => {
    let lastTime = 0;
    const onWheel = (e: WheelEvent) => {
        const now = Date.now();
        if (now - lastTime < 1500) return;
        if (Math.abs(e.deltaY) < 10) return;
        lastTime = now;
        handleGo(e.deltaY > 0 ? 'next' : 'prev');
    };
    window.addEventListener('wheel', onWheel);
    return () => window.removeEventListener('wheel', onWheel);
  }, [current, isAnimating]);

  return (
    <div className={styles.container}>
      <div className={styles.cursor} ref={cursorRef}>+</div>
      
      <main className={styles.slider} ref={sliderRef} style={{ backgroundColor: SLIDES[current].color }}>
        <header className={styles.header}>
            <button className={styles.menu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <span className={styles.label}>PROMETHEUS — XIETANG</span>
        </header>

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
                    const props = getSlideProps(step, 800); // Assume 800h for calc
                    return (
                        <div 
                            key={`${idx}-${step}`}
                            className={styles.slide}
                            style={{
                                transform: `translate(-50%, -50%) translate(${props.x}px, ${props.y}px) rotate(${props.rotation}deg) scale(${props.scale})`,
                                opacity: props.opacity,
                                filter: `blur(${props.blur}px)`,
                                zIndex: props.zIndex,
                                transition: isAnimating ? 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
                            }}
                        >
                            <img src={SLIDES[idx].image} alt={SLIDES[idx].name} />
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
