'use client';
import { useEffect, useImperativeHandle, useRef, useState, Ref } from 'react';
import '@/styles/glitch.css';
import { gsap } from 'gsap';

export type LoadingMaskHandle = {
  hide: () => Promise<void>;
};

export default function LoadingMask({ ref }: { ref: Ref<unknown> }) {
  const mask = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canEnter, setCanEnter] = useState(false);
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const resolveRef = useRef<(() => void) | null>(null);

  useImperativeHandle(ref, (): LoadingMaskHandle => {
    return {
      hide() {
        return new Promise((resolve) => {
          setIsAssetsLoaded(true);
          resolveRef.current = () => {
            if (mask.current) {
              const tl = gsap.timeline({
                onComplete: () => {
                  mask.current?.remove();
                  resolve();
                }
              });
              tl.to('.enter-btn-wrapper', { scale: 1.1, opacity: 0, duration: 0.4, ease: 'expo.in' })
                .to(mask.current, { opacity: 0, duration: 0.6, ease: 'power2.inOut' }, '-=0.2');
            } else {
              resolve();
            }
          };
        });
      }
    };
  }, []);

  // Show button only when progress is 100%
  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCanEnter(true);
      }, 500);
    }
  }, [progress]);

  useEffect(() => {
    if (canEnter) {
      const tl = gsap.timeline();
      tl.fromTo('.enter-btn-wrapper', 
        { opacity: 0, scale: 0.9, filter: 'blur(20px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'expo.out' }
      );
      

      gsap.to('.shimmer', {
        x: '100%',
        duration: 2.5,
        repeat: -1,
        ease: 'none',
        repeatDelay: 1
      });
    }
  }, [canEnter]);

  useEffect(() => {
    if (!mask.current) return;
    
    let start = 0;
    const interval = setInterval(() => {
      if (isAssetsLoaded) {
        start += 5;
      } else {
        start += Math.random() * 1.5;
        if (start > 95) start = 95;
      }

      if (start >= 100) {
        setProgress(100);
        clearInterval(interval);
      } else {
        setProgress(start);
      }
    }, 80);

    mask.current.addEventListener('wheel', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
    document.body.appendChild(mask.current!);

    return () => clearInterval(interval);
  }, [isAssetsLoaded]);

  const handleEnter = () => {
    if (canEnter && resolveRef.current) {
      window.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      resolveRef.current();
    }
  };

  return (
    <div className="loading-mask fixed inset-0 z-[10000] bg-[#030303] flex flex-col items-center justify-center cursor-default overflow-hidden" ref={mask}>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.9)] z-10"></div>
      
      <div className="relative flex flex-col items-center justify-center w-full h-full" ref={containerRef}>
        
        {/* Loading Phase UI */}
        {!canEnter && (
          <div className="relative z-20 flex flex-col items-center gap-12">
            <div className="relative flex flex-col items-center">
               <div className="text-white/20 text-[10px] tracking-[0.8em] uppercase font-light animate-pulse mb-6">
                 Synchronizing Journey
               </div>
               <div className="relative w-64 h-[2px] bg-white/5 overflow-hidden">
                 <div 
                   className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
                   style={{ width: `${progress}%` }}
                 />
               </div>
               <div className="mt-6 font-mono text-white/40 text-[9px] tracking-[0.4em]">
                 LOADING / {Math.floor(progress).toString().padStart(3, '0')}%
               </div>
            </div>
          </div>
        )}

        {/* Entrance Button */}
        {canEnter && (
          <div className="enter-btn-wrapper relative z-30 flex flex-col items-center cursor-pointer" onClick={handleEnter}>
             <div className="absolute inset-0 -m-20 border border-white/5 rounded-full scale-110 animate-[spin_20s_linear_infinite]"></div>
             <div className="absolute inset-0 -m-16 border border-white/10 rounded-full scale-100 animate-[spin_15s_linear_infinite_reverse]"></div>

             <div className="group relative overflow-hidden px-16 py-10 backdrop-blur-3xl transition-all duration-700">
                {/* Minimalist Top/Bottom Double Borders */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-white/40 transition-all duration-700"></div>
                <div className="absolute top-[4px] left-[15%] w-[70%] h-[1px] bg-white/5"></div>
                
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-white/40 transition-all duration-700"></div>
                <div className="absolute bottom-[4px] left-[15%] w-[70%] h-[1px] bg-white/5"></div>

                <div className="shimmer absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none"></div>

                <div className="flex flex-col items-center gap-6 relative">
                  <div className="flex flex-col items-center gap-4 md:gap-6 transition-all duration-700">
                    <div className="flex justify-center">
                      <img 
                        src="/logo.png" 
                        alt="行者无悔" 
                        className="h-12 md:h-16 select-none transition-all duration-700 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                      />
                    </div>
                    {/* Horizontal Divider */}
                    <div className="h-[1px] w-8 bg-white/20 group-hover:w-full transition-all duration-1000"></div>
                    <span className="text-white/40 text-sm md:text-base font-thin tracking-[1.5em] uppercase select-none transition-all duration-700 group-hover:text-white/60 translate-x-[0.75em]">
                      Escape
                    </span>
                  </div>
                </div>
             </div>

             <div className="mt-16 flex flex-col items-center gap-6">
                <div className="h-16 w-[1px] bg-gradient-to-b from-white/40 to-transparent"></div>
                <span className="text-white/20 text-[10px] tracking-[1.2em] uppercase font-thin animate-pulse">
                  Start your journey
                </span>
             </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
