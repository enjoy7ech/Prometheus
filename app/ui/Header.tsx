'use client';

import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import smoke from '@/utils/UI/smoke';
import { Draggable } from 'gsap/Draggable';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(Draggable, ScrollTrigger, ScrollSmoother);

export default function Header() {
  const planeRef = useRef<SVGSVGElement>(null);
  const goDialogRef = useRef<HTMLDivElement>(null);
  const plRef = useRef<HTMLDivElement>(null);
  const [isAway, setIsAway] = useState(false);
  const [isFlying, setFlying] = useState(false);

  const [photos, setPhotos] = useState<{ url: string; place: string; href: string }[]>([]);

  const onWhereToGo = () => {
    if (isFlying) return;
    setFlying(true);
    const tl = gsap.timeline();
    if (!goDialogRef.current?.querySelector('canvas')) {
      smoke(goDialogRef.current!);
      goDialogRef.current?.addEventListener('wheel', (e) => {
        e.stopPropagation();
        e.preventDefault();
      });
    }
    const size = [planeRef.current!.clientWidth, planeRef.current!.clientHeight];

    if (isAway) {
      tl.to(planeRef.current, {
        x: size[0],
        y: -size[1],
        duration: 1.6
      });
      tl.to(
        goDialogRef.current,
        {
          autoAlpha: 0,
          duration: 0.5
        },
        0.8
      );
      tl.to(goDialogRef.current, {
        top: '-100vh',
        left: '100vw',
        duration: 0
      });
      tl.then(() => {
        gsap.set(planeRef.current, {
          clearProps: 'all'
        });
        setIsAway(false);
        setFlying(false);
        tl.kill();
        goDialogRef.current?.querySelector('canvas')?.remove();
      });
    } else {
      setIsAway(true);

      fetch(`https://trick.dongzx.lol/config/whereToGo.txt`, { cache: 'no-cache' }).then(async (res) => {
        const text = await res.text();
        const arr = text.split('\n');

        const ps: { url: string; place: string; href: string }[] = [];
        const infoSize = 3;
        for (let i = 0; i < arr.length; i += infoSize) {
          const [url, place, href] = arr.slice(i, i + infoSize);
          ps.push({
            url,
            place,
            href
          });
        }

        setPhotos(ps);

        plRef.current?.addEventListener('wheel', (e) => {
          gsap.to(plRef.current, { scrollLeft: plRef.current!.scrollLeft + e.deltaY });
        });
      });

      tl.to(planeRef.current, { color: '#fff', duration: 0 }).to(
        planeRef.current,
        {
          x: size[0] / 2,
          y: -size[1] / 2,
          z: 600,
          rotationX: 90,
          rotationY: 90,
          rotationZ: 45,
          duration: 0.5
        },
        0
      );

      tl.to(
        planeRef.current,
        {
          x: 0,
          y: 0,
          z: 1190,
          rotationX: 180,
          rotationY: 0,
          rotationZ: 90,
          duration: 0.5,
          ease: 'power4.inOut'
        },
        0.5
      );
      // 1s
      tl.to(
        goDialogRef.current,
        {
          top: 0,
          left: 0,
          autoAlpha: 1,
          duration: 1.6,
          ease: 'power4.inOut'
        },
        1
      );
      tl.to(
        planeRef.current,
        {
          x: -size[0],
          y: size[1],
          duration: 1.5,
          ease: 'power4.in'
        },
        1
      );
      tl.to(planeRef.current, {
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        duration: 0
      });
      tl.then(() => {
        setFlying(false);
      });
    }
  };

  return (
    <>
      <header id="nav" className="header">
        <div className="header-content flex items-center">
          <div className="title" onClick={() => (window.location.href = '/')}>
            ESCAPE
          </div>
          <div className="ml-auto where-to-go" onClick={onWhereToGo}>
            <svg id="ticket" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m13.74 9.901l-1.188 1.188a.29.29 0 0 1-.239.072h-.001l-2.688-.624l-.084.084l1.968 1.032a.245.245 0 0 1 .062.392l-.005.005l-1.197 1.197l-.005.005a.24.24 0 0 1-.208.067h-.001l-.612-.084l.672.384a.2.2 0 0 1 .096.097l-.001-.001l.373.661l-.086-.614a.24.24 0 0 1 .067-.211l.005-.005l1.187-1.187l.005-.005a.24.24 0 0 1 .21-.067h.001a.21.21 0 0 1 .18.134l-.001-.001l1.034 1.97l.084-.084l-.626-2.69a.29.29 0 0 1 .072-.239l1.188-1.188a.22.22 0 0 0 .002-.286v-.001c-.044-.07-.192-.071-.264.001z"
              />
              <path
                fill="currentColor"
                d="m13.908 1.213l-1.392 1.392a1.07 1.07 0 0 1-1.514 1.514l-9.79 9.79l-.003.003a1.71 1.71 0 0 0 0 2.417l.004.004l6.456 6.456l.003.003a1.71 1.71 0 0 0 2.417 0l.004-.004l9.79-9.79a1.085 1.085 0 0 1 .06-1.451a1.07 1.07 0 0 1 1.448-.062l.003.003l1.392-1.392l.003-.003a1.71 1.71 0 0 0 0-2.417l-.004-.004l-6.456-6.456l-.003-.003a1.71 1.71 0 0 0-2.417 0l-.002.002zM6.744 12.984l1.92-1.92a.17.17 0 0 1 .248-.009a.17.17 0 0 1-.009.248l-1.92 1.92l-.007.007a.16.16 0 0 1-.227 0l-.007-.008a.17.17 0 0 1 .001-.24zm2.7-1.452a.17.17 0 0 1 .248-.009a.17.17 0 0 1-.009.248l-1.021 1.021a.17.17 0 0 1-.248.009a.17.17 0 0 1 .009-.248zm-1.719 7.911c.099.099.099.261 0 .36s-.261.099-.36 0l-3.168-3.168c-.099-.099-.099-.261 0-.36s.261-.099.36 0zm.06-1.308c.099.099.099.261 0 .36s-.261.099-.36 0l-1.92-1.92c-.099-.099-.099-.261 0-.36s.261-.099.36 0zm5.062-2.878l-1.915 1.915a.17.17 0 0 1-.248.009a.17.17 0 0 1 .009-.248l1.92-1.92l.007-.007a.16.16 0 0 1 .227 0l.007.008a.18.18 0 0 1 0 .239zm-1.531.211a.17.17 0 0 1-.24-.24l1.021-1.021a.17.17 0 0 1 .24.24zm3.084-4.907l-1.092 1.092l.624 2.688a.29.29 0 0 1-.072.239l-.432.432l-.005.005a.24.24 0 0 1-.21.067h-.001a.21.21 0 0 1-.18-.134l.001.001l-1.03-1.966l-.864.864l.084.636a.24.24 0 0 1-.067.211l-.005.005l-.324.324l-.005.005a.24.24 0 0 1-.21.067h-.001a.21.21 0 0 1-.18-.134l.001.001l-.504-.912l-.914-.506a.32.32 0 0 1-.133-.181l.001.002a.24.24 0 0 1 .067-.211l.005-.005l.324-.324l.005-.005a.24.24 0 0 1 .21-.067h.001l.636.084l.864-.864l-1.992-1.056a.245.245 0 0 1-.062-.392l.005-.005l.431-.431a.29.29 0 0 1 .239-.072h.001l2.688.624l1.092-1.092a.717.717 0 0 1 1.008 0a.73.73 0 0 1-.004 1.009zm4.608-.456c.099.099.099.261 0 .36s-.261.099-.36 0l-.12-.12c-.099-.099-.099-.261 0-.36s.261-.099.36 0zm-.84-.84c.099.099.099.261 0 .36s-.261.099-.36 0l-.12-.12c-.099-.099-.099-.261 0-.36s.261-.099.36 0zm-.84-.84c.099.099.099.261 0 .36s-.261.099-.36 0l-.121-.121c-.099-.099-.099-.261 0-.36s.261-.099.36 0zm-.839-.84c.099.099.099.261 0 .36s-.261.099-.36 0l-.121-.121c-.099-.099-.099-.261 0-.36s.261-.099.36 0zm-.84-.84c.099.099.099.261 0 .36s-.261.099-.36 0l-.121-.121c-.099-.099-.099-.261 0-.36s.261-.099.36 0zm-.84-.84c.099.099.099.261 0 .36s-.261.099-.36 0l-.121-.121c-.099-.099-.099-.261 0-.36s.261-.099.36 0zm-.84-.84c.099.099.099.261 0 .36s-.261.099-.36 0l-.121-.121c-.099-.099-.099-.261 0-.36s.261-.099.36 0zm.84-.983l.816-.816l-.289-.289l.192-.192l.804.804l-.192.192l-.288-.288l-.816.816zm.804.804l1.008-1.008l.227.227l-1.008 1.008zm5.601 3.585l-.192.192l-.288-.288l-.815.815l-.227-.227l.816-.816l-.288-.288l.192-.192zm-1.056-1.055l-.18.18l-.442-.442l-.216.216l.397.397l-.18.18l-.397-.397l-.24.24l.454.454l-.18.18l-.681-.681l1.008-1.008l.672.672zm-1.56-1.561l-.454.454l.777-.13l.252.252l-.732.108l-.228.948l-.251-.251l.168-.648l-.302.038l-.252.252l-.227-.227l1.008-1.008l.227.227zm-.732-.3l-.288-.096a.36.36 0 0 0-.093-.357l-.002-.002c-.144-.144-.372-.157-.588.06s-.204.444-.06.588l.002.002a.36.36 0 0 0 .355.093l.002-.001l.096.288a.68.68 0 0 1-.636-.181l-.025-.026l.001.001l-.015-.014a.677.677 0 0 1 0-.958l.04-.037l-.002.002a.67.67 0 0 1 .988-.046l.022.023l-.001-.001a.62.62 0 0 1 .205.66l-.001.003z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              ref={planeRef}
              id="plane"
              style={{ transformOrigin: 'center', pointerEvents: 'none' }}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m13.74 9.901l-1.188 1.188a.29.29 0 0 1-.239.072h-.001l-2.688-.624l-.084.084l1.968 1.032a.245.245 0 0 1 .062.392l-.005.005l-1.197 1.197l-.005.005a.24.24 0 0 1-.208.067h-.001l-.612-.084l.672.384a.2.2 0 0 1 .096.097l-.001-.001l.373.661l-.086-.614a.24.24 0 0 1 .067-.211l.005-.005l1.187-1.187l.005-.005a.24.24 0 0 1 .21-.067h.001a.21.21 0 0 1 .18.134l-.001-.001l1.034 1.97l.084-.084l-.626-2.69a.29.29 0 0 1 .072-.239l1.188-1.188a.22.22 0 0 0 .002-.286v-.001c-.044-.07-.192-.071-.264.001z"
              />
            </svg>
          </div>
        </div>
      </header>
      <div className="where-to-go-dialog" ref={goDialogRef}>
        <div className="photo-list" ref={plRef}>
          {photos.map((photo, index) => (
            <div
              key={index}
              className="photo-item"
              onClick={() => {
                window.open(photo.href, '_blank');
              }}
            >
              <img src={photo.url} alt="photo" />
              <div className="photo-title">{photo.place}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
