'use client';
import './page.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whenDOMReady } from '@/utils/helper';
import { useEffect, useRef, useState } from 'react';
import LoadingMask, { LoadingMaskHandle } from './ui/LoadingMask';
import NormalLayout from '@/app/ui/Layout/NormalLayout';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
  limitCallbacks: true
});

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const maskRef = useRef<LoadingMaskHandle>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && ScrollTrigger.isTouch) {
      ScrollTrigger.normalizeScroll({
        allowClicks: true
      });
    }
  }, []);

  useEffect(() => {
    whenDOMReady()
      .then(() => {
        return new Promise((resolve) => {
          const vd = document.querySelector('#banner-v') as HTMLVideoElement;
          const handleLoaded = () => {
            maskRef.current?.hide().then(() => {
              if (vd && (!vd.duration || isNaN(vd.duration))) {
                // If duration is still not available, wait a bit more or refresh later
                vd.addEventListener('loadedmetadata', () => ScrollTrigger.refresh(), { once: true });
              } else {
                ScrollTrigger.refresh();
              }
              resolve(1);
            });
          };

          if (vd) {
            if (vd.readyState >= 3) {
              handleLoaded();
            } else {
              vd.addEventListener('canplaythrough', handleLoaded, { once: true });
              vd.addEventListener('loadedmetadata', () => ScrollTrigger.refresh());
              // Safe fallback
              setTimeout(handleLoaded, 4000);
            }
          } else {
            handleLoaded();
          }
        });
      })
      .then(() => {
        const vd = document.querySelector('#banner-v') as HTMLVideoElement;
        if (!vd) return;

        const vdStartEl = document.querySelectorAll('[data-vd-start]');
        const vdEndEl = document.querySelectorAll('[data-vd-end]');
        const vdEl = new Set([...vdStartEl, ...vdEndEl]);

        const tl = gsap.timeline();

        // UNLEASHED ENTRANCE: Dramatic video zoom out and fade in
        tl.fromTo(vd,
          { opacity: 0, scale: 1.05, filter: 'blur(10px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.6, ease: 'expo.out' }
        );

        // Set initial state for all targets
        vdEl.forEach((el) => {
          const target = el.querySelector('div') || el;
          gsap.set(target, { opacity: 0, y: 30, filter: 'blur(10px)' });
        });

        vdEl.forEach((el) => {
          const dataset = (el as any).dataset;
          if (dataset) {
            const st = Number(dataset.vdStart);
            const et = Number(dataset.vdEnd);
            // Target the actual content wrapper or paragraphs
            const target = el.querySelector('div') || el;

            tl.to(target, {
              opacity: 1,
              y: -10,
              filter: 'blur(0px)',
              duration: 0.7,
              ease: 'power3.out'
            }, st);

            tl.to(target, {
              opacity: 0,
              y: -60,
              filter: 'blur(10px)',
              duration: 0.6,
              ease: 'power2.in'
            }, et - 0.5);
          }
        });

        tl.to(vd, { opacity: 0, duration: 1, ease: 'power2.inOut' }, vd.duration - 1);
        tl.to('.gallery-container', { opacity: 1, zIndex: 1, duration: 1, ease: 'power2.in' }, vd.duration - 0.5);

        const SECOND_LENGTH = 1000;
        const Y_PIXEL = SECOND_LENGTH * (vd.duration || 10); // fallback if duration is missing

        // Reveal Scroll Hint
        gsap.to('.scroll-hint', { opacity: 1, duration: 0.4, delay: 0 });

        ScrollTrigger.create({
          trigger: '#scroll-trigger-container',
          start: 'top top',
          end: () => (vd.duration || 10) * SECOND_LENGTH,
          pin: true,
          scrub: 1, // Normalized scrub
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress > 0.005) {
              gsap.to('.scroll-hint', { opacity: 0, duration: 0.8, pointerEvents: 'none' });
            }
            if (vd.duration > 0) {
              const targetTime = self.progress * vd.duration;
              vd.currentTime = targetTime;
              tl.seek(targetTime).pause();
            }
          }
        });

        // Ensure refresh once more when everything is definitely ready
        window.addEventListener('load', () => ScrollTrigger.refresh());
      });
  }, []);

  const fixedContent = (
    <>
      <video className="bg-video w-full h-full object-cover fixed inset-0 z-0" id="banner-v" muted playsInline loop preload="auto" poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" style={{ background: '#000' }}>
        <source src="/banner-v.mp4" type="video/mp4" />
        <source src="/banner-v.webm" type="video/webm" />
      </video>
      {/* Cinematic & Oversized Scroll Hint - Centered */}
      <div className="scroll-hint fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-12 z-20 pointer-events-none opacity-0">
        <div className="relative w-20 h-32 border-[3px] border-white/20 rounded-full flex justify-center group scale-110">
          {/* Large Pulsing Halo */}
          <div className="absolute inset-0 border-[3px] border-white/10 rounded-full animate-ping scale-125"></div>
          {/* Weighted Wheel Element */}
          <div className="w-1.5 h-6 bg-white/70 mt-6 rounded-full animate-[wheel-roll_1.5s_infinite]"></div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="text-white/40 text-[9px] md:text-[11px] tracking-[1.8em] uppercase font-light translate-x-[0.9em] animate-pulse whitespace-nowrap">
            Scroll to explore
          </span>
        </div>
      </div>
    </>
  );

  return (
    <NormalLayout duration={1.2} fixedContent={fixedContent}>
      <div id="scroll-trigger-container" ref={container} className="flex flex-col relative bg-transparent">

        <section className="sec sec-1 items-center px-8" data-vd-start="0.3" data-vd-end="2.3">
          <div className="flex flex-col gap-4">
            <p className="text-white text-3xl md:text-6xl font-extralight tracking-[0.4em]">只有失败过的人</p>
            <p className="text-white/60 text-base md:text-2xl font-light tracking-[0.8em] uppercase">才懂得我们为什么需要旅行</p>
          </div>
        </section>

        <section className="sec sec-2 items-center px-8" data-vd-start="2.4" data-vd-end="4.4">
          <div className="flex flex-col gap-4">
            <p className="text-white text-3xl md:text-6xl font-extralight tracking-[0.4em]">旅行是迷失</p>
            <p className="text-white/60 text-base md:text-2xl font-light tracking-[0.8em] uppercase">也是为了找到方向</p>
          </div>
        </section>

        <section className="sec sec-3 items-center px-8" data-vd-start="4.6" data-vd-end="6.3">
          <div className="flex flex-col gap-4">
            <p className="text-white text-3xl md:text-6xl font-extralight tracking-[0.4em]">记住我们为什么出发</p>
            <p className="text-white/60 text-base md:text-2xl font-light tracking-[0.8em] uppercase">也是为了记住我们</p>
          </div>
        </section>

        <section className="sec sec-4 items-center px-8" data-vd-start="6.5" data-vd-end="9.7">
          <div className="flex flex-col gap-4">
            <p className="text-white text-3xl md:text-6xl font-extralight tracking-[0.4em]">为什么活着</p>
          </div>
        </section>
        {/* Placeholder sections to ensure enough scroll depth if needed */}
        <section className="sec-pad h-[20vh]"></section>
      </div>

      <style jsx>{`
        #scroll-trigger-container {
           touch-action: pan-y;
        }
        @keyframes wheel-roll {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .sec p { margin: 0; }
      `}</style>
      <LoadingMask ref={maskRef}></LoadingMask>
    </NormalLayout>
  );
}
