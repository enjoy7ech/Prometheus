'use client';
import { useEffect, useImperativeHandle, useRef, Ref } from 'react';
import { gsap } from 'gsap';

import { VFX } from '@vfx-js/core';

export type LoadingMaskHandle = {
  show: () => void;
  hide: () => void;
};

export default function LoadingMask({ ref }: { ref: Ref<unknown> }) {
  const mask = useRef(null);
  useImperativeHandle(ref, (): LoadingMaskHandle => {
    return {
      show() {
        gsap.to(mask.current, { autoAlpha: 1 });
      },
      hide() {
        // gsap.to(mask.current, { autoAlpha: 0 });
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
