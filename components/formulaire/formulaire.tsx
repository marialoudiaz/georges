import React from 'react';
import ContactForm from './contactForm';
import '../../styles/App.scss';
import '../../app/globals.css';

const Form = () => {
  return (
   <>
      <div className='section2' id="Contact">
        <div className='formulaire'>
          <ContactForm />
        </div>
      </div>
   </>
  )
}

export default Form