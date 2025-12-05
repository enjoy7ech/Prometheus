import { VFX } from '/npm/@vfx-js/core.mjs';

const vfx = new VFX();
const mask = document.querySelector('.loading-mask');
const el = document.querySelector('#core');
vfx.add(el, { shader: 'glitch', overflow: 1000 });

const fadeTime = 1000;

mask.addEventListener('wheel', (e) => {
  e.preventDefault();
  e.stopPropagation();
});

if (document.readyState == 'complete') {
  document.querySelector('.loading-mask').remove();
} else {
  window.onload = () => {
    document.querySelector('.loading-mask').remove();
  };
}
