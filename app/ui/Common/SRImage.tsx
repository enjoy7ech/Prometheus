'use client';
import SRCard, { SRCardHandle } from '@/app/ui/SRCard';
import { useRef } from 'react';

export default function SRImage({ photo, className }: { photo: Photo; className?: string }) {
  const SRCRef = useRef<SRCardHandle>(null);

  return (
    <>
      <img
        className={className}
        src={photo.url}
        alt={photo.title}
        style={{ cursor: 'pointer' }}
        onClick={() => SRCRef.current?.show(photo)}
      />
      <SRCard ref={SRCRef}></SRCard>
    </>
  );
}
