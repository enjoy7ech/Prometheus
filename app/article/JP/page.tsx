'use client';
import { useEffect, useRef } from 'react';
import LoadingMask, { LoadingMaskHandle } from '@/app/ui/LoadingMask';
import { whenDOMReady } from '@/utils/helper';
import styles from './page.module.css';
import PhotoGallery from '@/app/ui/PhotoGallery';

export default function JP() {
  const maskRef = useRef<LoadingMaskHandle>(null);

  useEffect(() => {
    whenDOMReady().then(() => {
      maskRef.current?.hide();
    });
  });

  return (
    <div className={styles.article}>
      <div className={styles.header}>{<PhotoGallery album="jp"></PhotoGallery>}</div>
      <div className={styles.content}></div>
      <LoadingMask ref={maskRef}></LoadingMask>
    </div>
  );
}
