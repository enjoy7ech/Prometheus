'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { gsap } from 'gsap';
import { flushSync } from 'react-dom';
import SRCard, { SRCardHandle } from '@/app/ui/SRCard';

// import ExifReader from 'exifreader';

export default function PhotoGallery({ album, onReady }: { album: string; onReady?: () => void }) {
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
  const checkPhoto = (index: number) => {
    if (pEls.current[index]) {
      cardRef.current?.show(photos[index]);
    }
  };

  const switchPhoto = (index: number) => {
    const tl = gsap.timeline();
    tl.to(
      pEls.current[index],
      {
        duration: 0.8,
        top: '0',
        right: '0',
        width: '100%',
        height: '100%',
        boxShadow: 'none',
        backgroundPosition: photos[index].bgPos,
        onStart: () => {},
        onComplete: () => {}
      },
      0
    );

    const others = pEls.current.filter((el) => el !== pEls.current[index]);
    tl.to(
      others,
      {
        duration: 0.6,
        translateX: `-110%`,
        onStart: () => {
          gsap.set(others, {
            clearProps: 'translateX'
          });
        }
      },
      0
    );

    tl.then(() => {
      flushSync(() => {
        setActive(index);
        tl.revert();
        tl.clear();
        tl.kill();
        gsap.set(pEls.current[index], { clearProps: 'width,height,top,right,boxShadow,backgroundPosition' });
        gsap.set(others, { clearProps: 'transform' });
        pEls.current[index].style.zIndex = '1';
      });
    });
  };

  const cardRef = useRef<SRCardHandle>(null);

  useEffect(() => {
    if (album)
      fetch(`https://trick.dongzx.lol/config/${album}.txt`, { cache: 'no-cache' }).then(async (res) => {
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

        onReady?.();
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      switchPhoto((activeRef.current + 1) % photos.length);
    }, 8000);

    return () => {
      clearInterval(timer);
    };
  }, [photos]);

  return photos.length > 0 && active != undefined ? (
    <div
      ref={gallery}
      className={styles.gallery}
      style={{ '--img': `url(${photos[active].url})`, '--bgPos': photos[active].bgPos } as React.CSSProperties}
    >
      <div className={styles.thumbnail}>
        {[...photos.slice(active + 1), ...photos.slice(0, active)].map((p, i) => (
          <div
            ref={(el) => {
              if (el) pEls.current[p.id] = el;
            }}
            key={i}
            className={styles.photo}
            style={{ '--img': `url(${p.url})`, '--idx': i } as React.CSSProperties}
            onClick={() => checkPhoto(p.id)}
          >
            <div className={styles.position}>{p.position}</div>
            <div className={styles.title}>{p.title}</div>
            <div className={styles.title2}>{p.title2}</div>
          </div>
        ))}
      </div>
      <div className={styles.info}>
        <a className={styles.position} href={`https://www.google.com/maps?q=${photos[active].latlng}`} target="_blank">
          <div className={styles.latlng} style={{ marginRight: '1em' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 100 100">
              <path
                fill="currentColor"
                d="M50.001 0C33.65 0 20.25 13.36 20.25 29.666c0 6.318 2.018 12.19 5.433 17.016L46.37 82.445c2.897 3.785 4.823 3.066 7.232-.2l22.818-38.83c.46-.834.822-1.722 1.137-2.629a29.3 29.3 0 0 0 2.192-11.12C79.75 13.36 66.354 0 50.001 0m0 13.9c8.806 0 15.808 6.986 15.808 15.766S58.807 45.43 50.001 45.43c-8.805 0-15.81-6.982-15.81-15.763S41.196 13.901 50 13.901"
              />
              <path
                fill="currentColor"
                d="m68.913 48.908l-.048.126l.042-.115zm-5.065 24.446l-1.383 1.71c1.87.226 3.68.491 5.375.812l-5.479 1.623l7.313 1.945l5.451-1.719c3.348 1.123 7.984 2.496 9.52 4.057h-10.93l1.086 3.176h11.342c-.034 1.79-3.234 3.244-6.29 4.422l-7.751-1.676l-7.303 2.617l7.8 1.78c-4.554 1.24-12.2 1.994-18.53 2.341l-.266-3.64h-7.606l-.267 3.64c-6.33-.347-13.975-1.1-18.53-2.34l7.801-1.781l-7.303-2.617l-7.752 1.676c-3.012-.915-6.255-2.632-6.289-4.422H25.2l1.086-3.176h-10.93c1.536-1.561 6.172-2.934 9.52-4.057l5.451 1.719l7.313-1.945l-5.479-1.623a83 83 0 0 1 5.336-.807l-1.363-1.713c-14.785 1.537-27.073 4.81-30.295 9.979C.7 91.573 19.658 99.86 49.37 99.989c.442.022.878.006 1.29 0c29.695-.136 48.636-8.42 43.501-16.654c-3.224-5.171-15.52-8.445-30.314-9.981"
                color="currentColor"
              />
            </svg>
          </div>
          {photos[active].position}
        </a>
        <div className={styles.title}>{photos[active].title}</div>
        <div className={styles.title2}>{photos[active].title2}</div>
        <div className={styles.description}>{photos[active].description}</div>
      </div>
      <SRCard ref={cardRef}></SRCard>
    </div>
  ) : (
    <div className={`${styles.gallery} ${styles.lost}`}>
      <div className={styles.text}>Oops...</div>
    </div>
  );
}
