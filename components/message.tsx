"use client";
import React from 'react';
import '../styles/App.scss';
import Marquee from "react-fast-marquee";



const Message = () => {

  return (
    <div>
      <Marquee speed={30} style={{ marginTop: '1rem', borderTop: '2px solid black', borderBottom: '2px solid black', padding: '1rem' }}>
      <h2 id='msg'>seulement en France • une recette unique et naturelle • sans gluten, sans lactose, sans sucres raffinés, vegan • rendez-vous en 2026 • </h2>
      </Marquee> 
    </div>
  );
};

export default Message;
