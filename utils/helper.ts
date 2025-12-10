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
