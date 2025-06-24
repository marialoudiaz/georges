"use client";
import React from 'react';
import '../styles/App.scss';
import Image from 'next/image';



const Main = () => {

  return (
    <div className='full-img'>
      <Image src='/img/etiquette-pot.jpg' width={900} height={400} alt="logo" />
    </div>
  );
};

export default Main;
