'use client';

import { useEffect } from 'react';

export default function PhotoGallery() {
  useEffect(() => {
    fetch(
      'https://pan.dongzx.lol/api/v4/file/content/7WyS1/0/gallery.list?sign=RmGmv4d1inpcDqM8t-kowSBipm2XzoR-DTjUbfEBbsM%3D%3A0'
    ).then(async (res) => {
      const text = await res.text();
      const photos = text.split('\n');
      console.log(photos);
    });
  });
  return <div>PhotoGallery</div>;
}
