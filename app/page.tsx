"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import '../styles/App.scss';


// Importations dynamiques pour le lazy loading
const Header = dynamic(() => import('../components/navbar/header'), {
  loading: () => <p>Loading Header...</p>,
});
const HP = dynamic(() => import('../components/homepage'), {
  loading: () => <p>Loading HP...</p>,
});
const Quote = dynamic(() => import('../components/quote'), {
  loading: () => <p>Loading quote...</p>,
});
const Histoire = dynamic(() => import('../components/histoire'), {
  loading: () => <p>Loading Histoire...</p>,
});
const Etiquette = dynamic(() => import('../components/etiquette'), {
  loading: () => <p>Loading etiquette...</p>,
});
const Message = dynamic(() => import('../components/message'), {
  loading: () => <p>Loading message...</p>,
});
const Formulaire = dynamic(() => import('../components/formulaire'), {
  loading: () => <p>Loading Formulaire...</p>,
});

const Homepage = () => {

  return (
    <div className='scrollable-container'>
        <Header/>
        <HP/>
        <Quote/>
        <Histoire/>
        <Etiquette/>
        <Message />
        <Formulaire/>
    </div>    
  );
};

export default Homepage;
