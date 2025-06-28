"use client";
import React from 'react';
import '../styles/App.scss';


const Main = () => {

  return (
    <video className="hp-video" autoPlay muted playsInline loop>
      <source src="/video/georges-hp-lebon.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas la vidéo HTML5.
    </video>
      
  );
};

export default Main;
