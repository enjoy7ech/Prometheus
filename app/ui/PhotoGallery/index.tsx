'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import ExifReader from 'exifreader';
import { flushSync } from 'react-dom';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollTrigger.config({
  ignoreMobileResize: true, // 第1杀手锏
  limitCallbacks: true // 防止快速滚动回调爆炸
});
export default function PhotoGallery() {
  interface Photo {
    id: number;
    url: string;
    bgPos: string;
    position: string;
    title: string;
    title2: string;
    latlng: string;
    description: string;
    tip: string;
  }
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [active, setActive] = useState<number>(0);
  // 创建 ref 来保存最新状态
  const activeRef = useRef(active);

  // 同步状态到 ref（每次渲染后更新）
  useEffect(() => {
    activeRef.current = active;
  });

  const gallery = useRef<HTMLDivElement>(null);
  const pEls = useRef<HTMLDivElement[]>([]);
  const switchPhoto = (index: number) => {
    if (pEls.current[index]) {
      const tl = gsap.timeline();
      tl.to(
        pEls.current[index],
        {
          duration: 0.6,
          top: '10vh',
          right: 0,
          width: '100vw',
          height: '80vh',
          boxShadow: 'none',
          backgroundPosition: photos[index].bgPos,
          onStart: () => {
            pEls.current[index].style.zIndex = '0';
          },
          onComplete: () => {}
        },

        0
      );
      tl.then(() => {
        flushSync(() => {
          setActive(index);
        });
        tl.revert();
        pEls.current[index].style.zIndex = '1';
      });
    }
  };

  useEffect(() => {
    fetch('https://trick.dongzx.lol/config/gallery.txt').then(async (res) => {
      const text = await res.text();
      const arr = text.split('\n');

      const ps = [];
      const infoSize = 8;
      for (let i = 0; i < arr.length; i += infoSize) {
        const [url, bgPos, position, title, title2, latlng, description, tip] = arr.slice(i, i + infoSize);
        ps.push({
          id: i / infoSize,
          url,
          bgPos,
          position,
          title,
          title2,
          latlng,
          description,
          tip
        });
      }
      setPhotos(ps);
    });
  }, []);

  return (
    photos.length > 0 &&
    active != undefined && (
      <div
        ref={gallery}
        className={styles.gallery}
        style={{ '--img': `url(${photos[active].url})`, '--bgPos': photos[active].bgPos } as React.CSSProperties}
      >
        <div className={styles.info}>
          <div className={styles.position}>
            {photos[active].position}

            <a
              className={styles.latlng}
              style={{ marginLeft: '1em' }}
              href={`https://www.google.com/maps?q=${photos[active].latlng}`}
              target="_blank"
            >
              @ {photos[active].latlng}
            </a>
          </div>
          <div className={styles.title}>{photos[active].title}</div>
          <div className={styles.title2}>{photos[active].title2}</div>
          <div className={styles.description}>{photos[active].description}</div>
        </div>
        <div className={styles.thumbnail}>
          {[...photos.slice(active + 1), ...photos.slice(0, active)].map((p, i) => (
            <div
              ref={(el) => {
                if (el) pEls.current[p.id] = el;
              }}
              key={i}
              className={styles.photo}
              style={{ '--img': `url(${p.url})`, '--idx': i } as React.CSSProperties}
              onClick={() => switchPhoto(p.id)}
            >
              <div className={styles.position}>{p.position}</div>
              <div className={styles.title}>{p.title}</div>
              <div className={styles.title2}>{p.title2}</div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
