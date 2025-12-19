'use client';
import { useEffect, useImperativeHandle, useRef, Ref } from 'react';
import '@/styles/glitch.css';

export type LoadingMaskHandle = {
  hide: () => Promise<void>;
};

export default function LoadingMask({ ref }: { ref: Ref<unknown> }) {
  const mask = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useImperativeHandle(ref, (): LoadingMaskHandle => {
    return {
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
    mask.current?.addEventListener('wheel', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
    document.body.appendChild(mask.current!);

    if (canvasRef.current) {
      const padding = 50;
      const w = 1489;
      const h = 340;
      const W = w + padding * 2;
      const H = h + padding * 2;
      const wOffset = [15, 0];
      const rgbOffset: [number, number][] = [
        [-5, 5],
        [5, 5],
        [5, -5]
      ];
      const glitchStrength = [
        [10, 4],
        [10, 5],
        [14, 10]
      ];
      const getOffset = ([dx, dy]: [number, number]) => {
        return dy * W * 4 + dx * 4;
      };
      const isWhite = (r: number, g: number, b: number) => r === 255 && g === 255 && b === 255;
      const isBlack = (r: number, g: number, b: number) => r === 0 && g === 0 && b === 0;
      function randomMinusNToN(N: number, type: '-+' | '-' | '+' = '-+') {
        if (type == '-+') return Math.floor(Math.random() * (2 * N + 1)) - N;
        else if (type == '-') return -Math.floor(Math.random() * N);
        else return Math.floor(Math.random() * N);
      }
      const ctx = canvasRef.current.getContext('2d');
      canvasRef.current.width = W;
      canvasRef.current.height = H;

      const img = new Image();
      img.src = '/core.png';
      let tick = 0;
      const updateEvery = 3;
      const draw = () => {
        if (ctx && tick == 0) {
          ctx.clearRect(0, 0, W, H);
          ctx.drawImage(img, padding, padding, w, h);

          const data = ctx.getImageData(0, 0, W, H);
          const pixels = data.data;
          const st = glitchStrength.map(([x, y]) => [randomMinusNToN(x), randomMinusNToN(y)]);
          const st_w = [randomMinusNToN(wOffset[0], '-'), randomMinusNToN(wOffset[1], '-')];

          const isPixelWhite = (i: number) => isWhite(pixels[i], pixels[i + 1], pixels[i + 2]);
          const isPixelBlack = (i: number) => isBlack(pixels[i], pixels[i + 1], pixels[i + 2]);

          for (let i = 0; i < pixels.length; i += 4) {
            if (i % W === 0) {
              st_w[0] = randomMinusNToN(wOffset[0], '-');
            }
            const r = pixels[i];
            const g = pixels[i + 1];
            const b = pixels[i + 2];
            const isWhite = r === 255 && g === 255 && b === 255;
            const offset_w = getOffset([st_w[0], st_w[1]]);
            if (isWhite && isPixelBlack(i + offset_w)) {
              pixels[i] = 0;
              pixels[i + 1] = 0;
              pixels[i + 2] = 0;
              pixels[i + 3] = 0;
              pixels[i + offset_w] = 255;
              pixels[i + offset_w + 1] = 255;
              pixels[i + offset_w + 2] = 255;
              pixels[i + offset_w + 3] = 255;
            }

            const offset = rgbOffset.map((v, i) => getOffset([v[0] + st[i][0], v[1] + st[i][1]]));

            // if (isWhite && isPixelBlack(i + offset[0])) {
            //   pixels[i + offset[0]] = 255;
            //   pixels[i + offset[0] + 3] = 255;
            // }
            // if (isWhite && isPixelBlack(i + offset[1])) {
            //   pixels[i + offset[1] + 1] = 255;
            //   pixels[i + offset[1] + 3] = 255;
            // }
            // if (isWhite && isPixelBlack(i + offset[2])) {
            //   pixels[i + offset[2] + 2] = 255;
            //   pixels[i + offset[2] + 3] = 255;
            // }
          }
          ctx.putImageData(data, 0, 0);
        }
        tick = (tick + 1) % updateEvery;
        requestAnimationFrame(draw);
      };

      img.onload = () => {
        requestAnimationFrame(draw);
      };
    }
  }, []);

  return (
    <div className="loading-mask" ref={mask}>
      <canvas ref={canvasRef} />
    </div>
  );
}
