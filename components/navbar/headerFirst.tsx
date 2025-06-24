'use client';
import React from 'react';
import '../../styles/App.scss';
import Image from 'next/image';
import logo from '../../public/logo/logo-nav.png';
 


const HeaderFirst = () => {

  return (
    <>
      {/* Navbar desktop */}
      <div className="navbar-first"> {/* Media query via Tailwind CSS or your CSS file */}
        <div>
          <Image src={logo} width={220} height={70} alt="logo" />
        </div>   
      </div>
    </>
  );
};

export default HeaderFirst;
