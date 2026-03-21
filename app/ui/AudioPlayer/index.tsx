'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

// Global singletons to persist across route changes and potential remounts
let audioCtxGlobal: AudioContext | null = null;
let analyzerGlobal: AnalyserNode | null = null;
let dataArrayGlobal: Uint8Array | null = null;
let sourceGlobal: MediaElementAudioSourceNode | null = null;

export default function AudioPlayer() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const animationRef = useRef<number>(0);

  // Monitor route changes to ensure audio keeps playing
  useEffect(() => {
    if (isPlaying) {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(err => console.warn('Navigation audio resume failed:', err));
      }
      if (audioCtxGlobal?.state === 'suspended') {
        audioCtxGlobal.resume().catch(err => console.warn('Navigation ctx resume failed:', err));
      }
    }
  }, [pathname, isPlaying]);

  const initAudio = () => {
    if (audioCtxGlobal) return;

    audioCtxGlobal = new (window.AudioContext || (window as any).webkitAudioContext)();
    analyzerGlobal = audioCtxGlobal.createAnalyser();

    if (audioRef.current) {
      sourceGlobal = audioCtxGlobal.createMediaElementSource(audioRef.current);
      sourceGlobal.connect(analyzerGlobal);
      analyzerGlobal.connect(audioCtxGlobal.destination);
    }

    analyzerGlobal.fftSize = 256;
    const bufferLength = analyzerGlobal.frequencyBinCount;
    dataArrayGlobal = new Uint8Array(bufferLength);
  };

  const playAudio = async () => {
    if (!audioRef.current) return;
    try {
      initAudio();
      if (audioCtxGlobal?.state === 'suspended') {
        await audioCtxGlobal.resume();
      }
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.warn('Autoplay failed, waiting for user interaction:', err);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      playAudio();
    }
  };

  const toggleRef = useRef(togglePlay);
  toggleRef.current = togglePlay;

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        playAudio();
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('touchstart', handleFirstInteraction);
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      animationRef.current = requestAnimationFrame(render);
      if (!analyzerGlobal || !dataArrayGlobal) return;

      analyzerGlobal.getByteFrequencyData(dataArrayGlobal as any);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const bufferLength = analyzerGlobal.frequencyBinCount;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 12;

      const avg = Array.from(dataArrayGlobal).reduce((a, b) => a + b, 0) / bufferLength;
      const pulse = (avg / 255) * 10;

      ctx.beginPath();
      const gradient = ctx.createRadialGradient(centerX, centerY, radius, centerX, centerY, radius + 20 + pulse);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.arc(centerX, centerY, radius + 20 + pulse, 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i < bufferLength; i += 2) {
        const barHeight = (dataArrayGlobal[i] / 255) * 15;
        const angle = (i / bufferLength) * Math.PI * 2;

        const x1 = centerX + Math.cos(angle) * radius;
        const y1 = centerY + Math.sin(angle) * radius;
        const x2 = centerX + Math.cos(angle) * (radius + barHeight + pulse);
        const y2 = centerY + Math.sin(angle) * (radius + barHeight + pulse);

        ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 + (dataArrayGlobal[i] / 255) * 0.7})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius - 2, 0, Math.PI * 2);
      ctx.fillStyle = isPlaying ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)';
      ctx.fill();
      if (isPlaying) {
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#fff';
      } else {
        ctx.shadowBlur = 0;
      }
    };

    render();
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPlaying]);

  return (
    <div
      ref={containerRef}
      role="button"
      onClick={(e) => {
        e.stopPropagation();
        toggleRef.current();
      }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col items-center gap-2 group cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
      style={{ zIndex: 2147483647, mixBlendMode: 'exclusion' }}
    >
      <div className="relative w-16 h-16 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-500 hover:bg-white/10 flex items-center justify-center">
        <canvas
          ref={canvasRef}
          width={64}
          height={64}
        />
        {!isPlaying && !hasInteracted && (
          <div className="absolute -top-12 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap animate-bounce pointer-events-none">
            CLICK TO UNMUTE
          </div>
        )}
      </div>
      <audio 
        ref={audioRef} 
        src="/audio/NoFearInMyHeart.mp3" 
        loop 
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}
