'use client';
import Header from '@/app/ui/Header';
import Footer from '@/app/ui/Footer';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whenDOMReady } from '@/utils/helper';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function NormalLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // create the scrollSmoother before your scrollTriggers
    whenDOMReady().then(() => {
      ScrollSmoother.create({
        ease: '.power2',
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true // looks for data-speed and data-lag attributes on elements
      });
    });
  }, []);

  return (
    <>
      <Header></Header>
      <div className="grain"></div>
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
      <Footer></Footer>
    </>
  );
}
