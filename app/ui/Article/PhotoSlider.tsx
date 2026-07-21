'use client';

import { useRef, useState, useEffect, useCallback, ReactNode } from 'react';
import styles from './PhotoSlider.module.css';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import SRImage from '@/app/ui/Common/SRImage';
import { resolveMediaUrl } from '@/utils/helper';

export interface Slide {
  name: string;
  image: string;
  color: string;
  tip?: string;
  latlng?: string;
  title2?: string;
}

export interface PhotoSliderProps {
  slides: Slide[];
  articleName: string;
  description?: ReactNode;
  location?: ReactNode;
  photoLocation?: string;
  className?: string; // Added className
}

export default function PhotoSlider({
  slides,
  articleName,
  description,
  location,
  photoLocation,
  className
}: PhotoSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState(800);
  const total = slides.length;

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

  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    // Set initial title on mount
    document.title = `${articleName} | 行者无悔`;
    return () => { isMountedRef.current = false; };
  }, [articleName]);

  const handleGo = useCallback((direction: 'next' | 'prev') => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);

    const nextIdx = direction === 'next' ? mod(current + 1) : mod(current - 1);
    setCurrent(nextIdx);

    gsap.to(sliderRef.current, {
      backgroundColor: slides[nextIdx].color,
      duration: 1.2,
      ease: 'power2.inOut',
      onComplete: () => {
        if (isMountedRef.current) {
          document.title = `${articleName}：${slides[nextIdx].name} | 行者无悔`;
        }
        isAnimatingRef.current = false;
        setIsAnimating(false);
      }
    });
  }, [current, articleName, slides, total]);

  useEffect(() => {
    gsap.registerPlugin(Observer);

    const obs = Observer.create({
      target: sliderRef.current, // Target internal container
      type: "wheel,touch,pointer",
      onUp: () => handleGo('prev'),
      onDown: () => handleGo('next'),
      wheelSpeed: -1,
      tolerance: 20, // Increased tolerance
      preventDefault: true // BLOCK page scroll when over slider
    });

    return () => obs.kill();
  }, [current, isAnimating, handleGo]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleGo('next');
    }, 5000);
    return () => clearInterval(timer);
  }, [handleGo]);

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <main className={styles.slider} ref={sliderRef} style={{ backgroundColor: slides[current].color }}>
        <div className={styles.body}>
          <div className={styles.left}>
            <div className={styles.footer}>
              <div className={styles.description}>
                {description}
              </div>
              <div className={styles.location}>
                {location}
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.imageGrid}>
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
                        url: resolveMediaUrl(slides[idx].image),
                        bgPos: 'center',
                        position: photoLocation || '',
                        title: slides[idx].name,
                        title2: slides[idx].title2 || '',
                        latlng: slides[idx].latlng || '',
                        description: '',
                        tip: slides[idx].tip || ''
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
