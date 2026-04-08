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
        'NJ': '莫愁，莫愁',
        'LBX': '灵白线：在巨石与山脊间寻找自由',
        'JP': '日本行：玫瑰下的 Stille Nacht',
        'JP-FG': '上海到福冈：一次惊心动魄的海上冒险',
        'XT': '斜塘：重拾旧时的街道记忆',
        'SH': '石湖：越堤之上的湖光山色'
      };
      const baseTitle = titles[activeArticle] || '行者无悔';
      document.title = `${baseTitle} | 行者无悔`;
    } else {
      // Try to restore original title based on pathname if possible, fallback to default
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
