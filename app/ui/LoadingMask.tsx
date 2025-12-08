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
  useImperativeHandle(ref, (): LoadingMaskHandle => {
    return {
      show() {
        gsap.to(mask.current, { autoAlpha: 1 });
      },
      hide() {
        return new Promise((resolve) => {
          gsap.to(mask.current, {
            duration: 0.5,
            onComplete() {
              mask.current?.remove();
              resolve();
            }
          });
        });
      }
    };
  }, []);
  useEffect(() => {
    const vfx = new VFX();

    if (mask.current) vfx.add(mask.current, { shader: 'glitch', overflow: 1000 });
  });
  return (
    <div className="loading-mask" ref={mask}>
      <img id="core" src="/core.png" alt="" />
    </div>
  );
}
