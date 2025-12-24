import { Ref, useEffect, useImperativeHandle, useRef, useState } from 'react';
import styles from './index.module.css';
import { gsap } from 'gsap';
import { flushSync } from 'react-dom';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

export type SRCardHandle = {
  show: (p: Photo) => void;
  hide: () => Promise<void>;
};

export default function SRCard({ ref }: { ref: Ref<unknown> }) {
  const maskRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [photo, setPhoto] = useState<Photo>();

  const close = () => {
    return new Promise((resolve) => {
      gsap.to(maskRef.current, {
        autoAlpha: 0,
        duration: 0.6,
        pointerEvents: 'none',
        onComplete() {
          cardRef.current!.dataset.pressed = 'false';
          gsap.to(scaleRef.current, { scale: 1, duration: 0 });
          resolve(1);
        }
      });
    });
  };

  const open = () => {
    return new Promise((resolve) => {
      gsap.to(maskRef.current, {
        autoAlpha: 1,
        duration: 0.6,
        pointerEvents: 'auto',
        onComplete() {
          resolve(1);
        }
      });
    });
  };

  const onSwap = () => {
    if (cardRef.current!.dataset.pressed == 'true') {
      cardRef.current!.dataset.pressed = 'false';
    } else {
      cardRef.current!.dataset.pressed = 'true';
    }
  };

  useImperativeHandle(ref, (): SRCardHandle => {
    return {
      show(p: Photo) {
        flushSync(() => {
          setPhoto(p);
        });

        imgRef.current!.onload = () => {
          const SCALE = 0.8;
          const w = imgRef.current!.naturalWidth;
          const h = imgRef.current!.naturalHeight;
          const r = w / h;
          if (w > window.innerWidth * SCALE) {
            if (window.innerHeight * SCALE * r > window.innerWidth * SCALE) {
              gsap.set(cardRef.current, {
                width: window.innerWidth * SCALE,
                height: (window.innerWidth * SCALE) / r
              });
            } else {
              gsap.set(cardRef.current, {
                width: window.innerHeight * SCALE * r,
                height: window.innerHeight * SCALE
              });
            }
          } else {
            if (window.innerHeight * SCALE * r > window.innerWidth * SCALE) {
              gsap.set(cardRef.current, {
                width: window.innerHeight * SCALE * r,
                height: window.innerHeight * SCALE
              });
            } else {
              gsap.set(cardRef.current, {
                width: window.innerWidth * SCALE,
                height: (window.innerWidth * SCALE) / r
              });
            }
          }
        };

        Draggable.create(scaleRef.current, {
          bounds: maskRef.current,
          onClick: onSwap
        });
        open();
      },
      async hide() {
        await close();
      }
    };
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (scaleRef.current) {
        e.preventDefault();
        e.stopPropagation();

        gsap.to(scaleRef.current, {
          scale: () => {
            const current = gsap.getProperty(scaleRef.current, 'scale') as number;
            const delta = e.deltaY > 0 ? -Math.abs(e.deltaY) / 400 : Math.abs(e.deltaY) / 400;
            return gsap.utils.clamp(0.5, 4, current + delta);
          },
          duration: 0.6,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }
    };

    maskRef.current?.addEventListener('wheel', onWheel);

    document.body.appendChild(maskRef.current!);

    const onPointerMove = ({ x, y }: { x: number; y: number }) => {
      const BOUNDS = imgRef.current?.getBoundingClientRect();
      if (BOUNDS) {
        const posX = x - BOUNDS.x;
        const posY = y - BOUNDS.y;
        const ratioX = posX / BOUNDS.width - 0.5;
        const ratioY = posY / BOUNDS.height - 0.5;
        const pointerX = gsap.utils.clamp(-1, 1, ratioX * 2).toFixed(2);
        const pointerY = gsap.utils.clamp(-1, 1, ratioY * 2).toFixed(2);

        gsap.set(maskRef.current, {
          '--pointer-x': pointerX,
          '--pointer-y': pointerY
        });
      }
    };
    document.addEventListener('pointermove', onPointerMove);

    return () => {
      document.removeEventListener('pointermove', onPointerMove);
      maskRef.current?.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <div ref={maskRef} className={styles.maskLayer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.closeBtn}
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        onClick={close}
      >
        <path
          fill="currentColor"
          d="M20.48 3.512a11.97 11.97 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.97 11.97 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001c0-3.314-1.344-6.315-3.516-8.487m-1.542 15.427a9.8 9.8 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.8 9.8 0 0 1 2.876-6.943a9.8 9.8 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.8 9.8 0 0 1-2.876 6.942z"
        />
        <path
          fill="currentColor"
          d="m13.537 12l3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001l-3.855 3.855l-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001l3.855 3.855l-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001l3.855-3.855l3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z"
        />
      </svg>
      <div ref={scaleRef}>
        <div ref={cardRef} className={styles.cardBox}>
          {photo?.url && (
            <>
              <div className={styles.cardFront}>
                <img ref={imgRef} src={photo?.url} className={styles.img} alt="" />
                {/* <div className={styles.spotlight}></div> */}
              </div>
              <div className={styles.cardRear}>
                <div className={styles.pattern}>
                  <div className={styles.refraction}></div>
                  <div className={styles.refraction}></div>
                </div>

                <div className={styles.backTip}>
                  <div className={styles.tip} id="tipText">
                    {photo?.tip}
                  </div>
                </div>
                <div className={styles.spotlight}></div>
              </div>

              <svg className={styles.srOnly} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="lighting">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"></feGaussianBlur>
                    <feSpecularLighting
                      result="lighting"
                      in="blur"
                      surfaceScale="8"
                      specularConstant="12"
                      specularExponent="120"
                      lightingColor="hsl(0 0% 6%)"
                    >
                      <fePointLight x="50" y="50" z="300"></fePointLight>
                    </feSpecularLighting>
                    <feComposite in="lighting" in2="SourceAlpha" operator="in" result="composite"></feComposite>
                    <feComposite
                      in="SourceGraphic"
                      in2="composite"
                      operator="arithmetic"
                      k1="0"
                      k2="1"
                      k3="1"
                      k4="0"
                      result="litPaint"
                    ></feComposite>
                  </filter>
                  <filter id="sticker">
                    <feMorphology in="SourceAlpha" result="dilate" operator="dilate" radius="2"></feMorphology>
                    <feFlood floodColor="hsl(0 0% 100%)" result="outlinecolor"></feFlood>
                    <feComposite in="outlinecolor" in2="dilate" operator="in" result="outlineflat"></feComposite>
                    <feMerge result="merged">
                      <feMergeNode in="outlineflat"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              <svg style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="watermarkPattern"
                    patternUnits="userSpaceOnUse"
                    width="380"
                    height="300"
                    patternTransform="rotate(-26)"
                  >
                    <image
                      href="/svg/Canon_wordmark.svg"
                      x="0"
                      y="0"
                      width="260"
                      height="160"
                      preserveAspectRatio="xMidYMid meet"
                    ></image>
                  </pattern>
                  <mask id="watermark">
                    <rect width="100%" height="100%" fill="url(#watermarkPattern)" />
                  </mask>
                </defs>
              </svg>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
