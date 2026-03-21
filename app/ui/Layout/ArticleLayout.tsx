'use client';
import Header from '@/app/ui/Header';
import ArtFooter from '@/app/ui/Footer/ArtFooter';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whenDOMReady } from '@/utils/helper';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function NormalLayout({
  children,
  duration
}: Readonly<{
  children: React.ReactNode;
  duration?: number;
}>) {
  useEffect(() => {
    // create the scrollSmoother before your scrollTriggers
    whenDOMReady().then(() => {
      ScrollSmoother.create({
        ease: 'power4.out',
        smooth: duration || 0.2, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true // looks for data-speed and data-lag attributes on elements
      });
    });
  }, []);

  return (
    <>
      <Header></Header>
      {/* <div className="grain"></div> */}
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
    </>
  );
}
