'use client';
import { useEffect, useImperativeHandle, useRef, Ref } from 'react';
import { gsap } from 'gsap';

import { VFX } from '@vfx-js/core';

export type LoadingMaskHandle = {
  show: () => void;
  hide: () => Promise<void>;
};

export default function LoadingMask({ ref }: { ref: Ref<unknown> }) {
  const mask = useRef<HTMLDivElement>(null);
  const core = useRef<HTMLImageElement>(null);
  useImperativeHandle(ref, (): LoadingMaskHandle => {
    return {
      show() {
        gsap.to(mask.current, { autoAlpha: 1 });
      },
      hide() {
        return new Promise((resolve) => {
          setTimeout(() => {
            mask.current?.remove();
            resolve();
          }, 1500);
        });
      }
    };
  }, []);
  useEffect(() => {
    const vfx = new VFX();

    if (core.current) vfx.add(core.current, { shader: 'glitch', overflow: 1000 });
    mask.current?.addEventListener('wheel', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  }, []);
  return (
    <div className="loading-mask" ref={mask}>
      <img id="core" ref={core} src="/core.png" alt="" />
    </div>
  );
}
