'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide the initial static cursor once we hydrate
    const initialCursor = document.getElementById('initial-cursor');
    if (initialCursor) initialCursor.style.display = 'none';

    // Only enable for mouse devices
    if (window.matchMedia('(hover: none)').matches) {
        dot.style.display = 'none';
        ring.style.display = 'none';
        return;
    }

    const mouse = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Immediate dot follow
      gsap.to(dot, {
        x: mouse.x,
        y: mouse.y,
        duration: 0.1,
        opacity: 1
      });

      // Smooth ring follow with lag
      gsap.to(ring, {
        x: mouse.x,
        y: mouse.y,
        duration: 0.7,
        ease: 'power3.out',
        opacity: 1
      });
    };

    const handleHover = (isHovering: boolean) => {
        gsap.to(ring, {
            scale: isHovering ? 1.5 : 1,
            backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            borderColor: isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)',
            duration: 0.4,
            ease: 'expo.out'
        });
        gsap.to(dot, {
            scale: isHovering ? 0.5 : 1,
            duration: 0.4,
            ease: 'expo.out'
        });
    };

    const onMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isClickable = target.closest('a, button, [role="button"], .anchor, .shy-block, img');
        if (isClickable) {
            handleHover(true);
        }
    };

    const onMouseOut = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isClickable = target.closest('a, button, [role="button"], .anchor, .shy-block, img');
        if (isClickable) {
            handleHover(false);
        }
    };

    const onMouseDown = () => {
      gsap.to([dot, ring], {
        scale: 0.7,
        duration: 0.2
      });
    };

    const onMouseUp = () => {
      gsap.to([dot, ring], {
        scale: 1,
        duration: 0.2
      });
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 999998,
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          mixBlendMode: 'difference'
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          backgroundColor: 'white',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 999999,
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          mixBlendMode: 'difference'
        }}
      />
    </>
  );
}
