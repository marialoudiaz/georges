"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import '../styles/App.scss';
import Marquee from "react-fast-marquee";



const Message = () => {

  return (
    <div>
      <Marquee speed={30} style={{ marginTop: '1rem', borderTop: '2px solid black', borderBottom: '2px solid black', padding: '1rem' }}>
      <h2 style={{fontSize:'3rem'}}>seulement en France • une recette unique et naturelle • sans gluten, sans lactose, sans sucres raffinés, vegan • rendez-vous en 2026 • </h2>
      </Marquee> 
    </div>
  );
};

export default Message;
