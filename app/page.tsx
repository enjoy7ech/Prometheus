'use client';
import './page.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { whenDOMReady } from '@/utils/helper';
import { useEffect, useRef } from 'react';
import Footer from './ui/Footer';
import LoadingMask, { LoadingMaskHandle } from './ui/LoadingMask';
import PhotoGallery from './ui/PhotoGallery/index';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    whenDOMReady()
      .then(async () => {
        await document.fonts.ready;
      })
      .then(() => {
        return new Promise((resolve) => {
          const vd = document.querySelector('#banner-v') as HTMLVideoElement;
          if (vd.readyState === 4) {
            resolve(1);
          }
          vd.oncanplaythrough = () => {
            maskRef.current?.hide().then(() => {
              resolve(1);
            });
          };
        });
      })
      .then(() => {
        // create the scrollSmoother before your scrollTriggers
        ScrollSmoother.create({
          ease: '.power2',
          smooth: 1.2, // how long (in seconds) it takes to "catch up" to the native scroll position
          effects: true // looks for data-speed and data-lag attributes on elements
        });

        const vd = document.querySelector('#banner-v') as HTMLVideoElement;

        const vdStartEl = document.querySelectorAll('[data-vd-start]');
        const vdEndEl = document.querySelectorAll('[data-vd-end]');

        const vdEl = new Set([...vdStartEl, ...vdEndEl]);

        if (!vd) return;

        const tl = gsap.timeline();
        tl.to(
          vd,
          {
            opacity: 1,
            ease: '.power1.out'
          },
          '+=0.2'
        );

        vdEl.forEach((el) => {
          const dataset = (el as unknown as { dataset: DOMStringMap }).dataset;
          if (dataset) {
            const st = Number(dataset.vdStart);
            const et = Number(dataset.vdEnd);
            tl.to(
              el.children,
              {
                opacity: 1,
                yPercent: 50,
                duration: 0.5
              },
              st
            );
            tl.to(
              el.children,
              {
                opacity: 0,
                yPercent: -50,
                duration: 0.5
              },
              et - 0.5
            );
          }
        });

        tl.to(
          vd,
          {
            opacity: 0,
            ease: '.bounce.out',
            duration: 0.5
          },
          vd.duration - 1
        );

        tl.to(
          '.gallery-container',
          {
            opacity: 1,
            ease: 'power2.in',
            duration: 0.5
          },
          vd.duration - 0.5
        );

        const SECOND_LENGTH = 1000;
        const Y_PIXEL = SECOND_LENGTH * vd.duration;

        ScrollTrigger.create({
          trigger: '#scroll-trigger-container',
          start: 'top top',
          end: Y_PIXEL,
          pin: true,
          scrub: true,
          // markers: true,
          onUpdate: (self) => {
            if (!isNaN(self.progress * vd.duration)) {
              vd.currentTime = self.progress * vd.duration;

              tl.seek(vd.currentTime).pause();
            }
            if (self.progress > 0.1) {
              if (self.direction > 0) {
                gsap.to('.header', { yPercent: -100 });
              } else {
                gsap.to('.header', { yPercent: 0 });
              }
            }
          }
        });
      });
  });

  const maskRef = useRef<LoadingMaskHandle>(null);

  return (
    <>
      <div className="grain"></div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div id="scroll-trigger-container" ref={container} className="flex flex-col">
            <video className="bg-video" id="banner-v" src="/banner-v.webm" muted preload="auto"></video>

            <section className="sec sec-1" data-vd-start="0.3" data-vd-end="2.3">
              <p>只有失败过的人</p>
              <p>才懂得我们为什么需要旅行</p>
            </section>

            <section className="sec sec-2" data-vd-start="2.4" data-vd-end="4.4">
              <p>旅行是迷失</p>
              <p>也是为了找到方向</p>
            </section>

            <section className="sec sec-3" data-vd-start="4.6" data-vd-end="6.3">
              <p>记住我们为什么出发</p>
              <p>也是为了记住我们</p>
            </section>

            <section className="sec sec-3" data-vd-start="6.5" data-vd-end="9.7">
              <h1>为什么活着</h1>
            </section>
          </div>
          <Footer></Footer>
        </div>
        <div className="gallery-container">
          <PhotoGallery></PhotoGallery>
        </div>
      </div>
      <LoadingMask ref={maskRef}></LoadingMask>
    </>
  );
}
