'use client';

import { ReactNode } from 'react';
import PhotoSlider, { Slide } from '@/app/ui/Article/PhotoSlider';
import TOC from '@/app/ui/Common/TOC';
import styles from './ModernArticleLayout.module.css';

import ArtFooter from '@/app/ui/Footer/ArtFooter';

export interface ModernArticleLayoutProps {
  slides: Slide[];
  articleName: string;
  photoLocation?: string;
  heroDescription?: ReactNode;
  heroLocation?: ReactNode;
  title: string;
  children: ReactNode;
}

export default function ModernArticleLayout({
  slides,
  articleName,
  photoLocation,
  heroDescription,
  heroLocation,
  title,
  children
}: ModernArticleLayoutProps) {
  return (
    <div className={styles.article}>
      {/* Immersive PhotoSlider Hero */}
      <div className={styles.hero}>
        <PhotoSlider
          slides={slides}
          articleName={articleName}
          photoLocation={photoLocation}
          description={heroDescription}
          location={heroLocation}
        />
      </div>

      {/* Structured Article Body */}
      <div className={styles.mainContainer}>
        <TOC />
        <article className={styles.content}>
          <h1>{title}</h1>
          {children}
          
          <div className="mt-20 pt-10 border-t border-gray-100 opacity-50">
            <ArtFooter />
          </div>
        </article>
      </div>
    </div>
  );
}
