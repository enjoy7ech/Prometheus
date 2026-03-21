'use client';
import Header from '@/app/ui/Header';
import Footer from '@/app/ui/Footer/Footer';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whenDOMReady } from '@/utils/helper';

import { useNav } from '@/context/NavContext';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function NormalLayout({
  children,
  duration,
  fixedContent
}: Readonly<{
  children: React.ReactNode;
  duration?: number;
  fixedContent?: React.ReactNode;
}>) {
  const { activeArticle } = useNav();

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
      {fixedContent}
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
      {!activeArticle && <Footer></Footer>}
    </>
  );
}
