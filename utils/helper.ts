export function whenDOMReady() {
  if (document.readyState !== 'loading') {
    return document.fonts.ready;
  }
  return new Promise((resolve) => {
    document.addEventListener(
      'DOMContentLoaded',
      async () => {
        await document.fonts.ready;
        resolve(1);
      },
      { once: true }
    );
  });
}

export function resolveMediaUrl(url?: string) {
  if (!url) return '';
  if (/^(https?:)?\/\//i.test(url) || url.startsWith('data:')) return url;

  const baseUrl = ((process.env && process.env.NEXT_PUBLIC_MEDIA_BASE_URL) || '').replace(/\/$/, '');
  const normalizedPath = url.startsWith('/') ? url : `/${url}`;

  return baseUrl ? `${baseUrl}${normalizedPath}` : normalizedPath;
}
