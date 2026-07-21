'use client';
import SRCard, { SRCardHandle } from '@/app/ui/SRCard';
import { resolveMediaUrl } from '@/utils/helper';
import { useRef } from 'react';

export default function SRImage({ photo, className }: { photo: Photo; className?: string }) {
  const SRCRef = useRef<SRCardHandle>(null);

  return (
    <>
      <img
        className={className}
        src={resolveMediaUrl(photo.url)}
        alt={photo.title}
        style={{ cursor: 'pointer' }}
        onClick={() => SRCRef.current?.show({ ...photo, url: resolveMediaUrl(photo.url) })}
      />
      <SRCard ref={SRCRef}></SRCard>
    </>
  );
}
