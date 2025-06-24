"use client";
import React, { useEffect, useRef } from 'react';
import '../styles/App.scss';
import Typewriter from 'typewriter-effect';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const containerRef = useRef(null);
  const el1 = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);
  const el4 = useRef(null);

  useEffect(() => {
    const elements = [el1.current, el2.current, el3.current];
    elements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 }, // bas vers haut
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%", // déclenchement quand l'élément est 90% visible
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);


  return (
    <div className='container-quote' ref={containerRef}>
      <div>
        <h1 ref={el1}>la force des montagnes,</h1>
        <h2 ref={el2}>la patience du mortier,</h2>
        <h2 ref={el3}>et le mystère de l’ail sauvage.</h2>
      </div>
        <p ref={el4}>
        <Typewriter
          options={{
            strings: ['Depuis ce jour, chaque pot d’aïoli Georges contient un peu de cette légende'],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
    </div>
  );
};

export default Main;
