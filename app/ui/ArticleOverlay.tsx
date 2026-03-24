'use client';

import { useMemo, useEffect, useRef } from 'react';
import { useNav } from '@/context/NavContext';

// Import Articles
import NJClient from '@/app/article/NJ/NJClient';
import LBXClient from '@/app/article/LBX/LBXClient';
import JPClient from '@/app/article/JP/JPClient';
import JPFGClient from '@/app/article/JP-FG/JPFGClient';
import XTClient from '@/app/article/XT/XTClient';
import SHClient from '@/app/article/SH/SHClient';

export default function ArticleOverlay() {
  const { activeArticle } = useNav();
  const overlayRef = useRef<HTMLDivElement>(null);

  const ArticleComponent = useMemo(() => {
    switch (activeArticle) {
      case 'NJ': return NJClient;
      case 'LBX': return LBXClient;
      case 'JP': return JPClient;
      case 'JP-FG': return JPFGClient;
      case 'XT': return XTClient;
      case 'SH': return SHClient; // Added ShiHu
      default: return null;
    }
  }, [activeArticle]);

  // Scroll to top and manage body/html overflow when article changes
  useEffect(() => {
    if (activeArticle) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (overlayRef.current) {
        overlayRef.current.scrollTo(0, 0);
      }
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [activeArticle]);

  useEffect(() => {
    if (activeArticle) {
      const titles: Record<string, string> = {
        'NJ': '南京',
        'LBX': '灵白线',
        'JP': '锦溪',
        'JP-FG': '锦溪-番故',
        'XT': '斜塘',
        'SH': '石湖'
      };
      document.title = titles[activeArticle] || '行者无悔';
    } else {
      document.title = '行者无悔';
    }
  }, [activeArticle]);

  if (!ArticleComponent) return null;

  return (
    <div 
      className="fixed inset-0 z-[5000] bg-black overflow-y-auto overflow-x-hidden article-overlay"
      ref={overlayRef}
    >
      <div className="relative min-h-screen">
        <ArticleComponent />
      </div>
      <style jsx global>{`
        .article-overlay {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
