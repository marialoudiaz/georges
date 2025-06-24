'use client';
import React from 'react';
import '../../styles/App.scss';
import Image from 'next/image';
import logo from '../../public/georges-signature-aioli.png';

const Header = () => {

  return (
    <>
      {/* Navbar desktop */}
      <div className='navbar'>
        <div className='navbar-container'>
            <Image src={logo} width={170} height={50} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
