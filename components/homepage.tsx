"use client";
import React from 'react';
import '../styles/App.scss';


const Main = () => {

  return (
    <>
    <video className='hp-video' autoPlay muted playsInline>
        <source src="/video/georges-hp-lebon.mp4" type='video/mp4' />
      </video>
    </>
      
  );
};

export default Main;
