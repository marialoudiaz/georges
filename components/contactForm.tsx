import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

//Images
import Image from 'next/image';
import timbre from '../public/img/timbre.png';
import logo from '../public/georges-signature-aioli.png'

const ContactForm = () => {
  const [emailData, setEmailData] = useState({ prenom: '', email: '', message: '' });
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);
    emailjs
      .sendForm('service_t76tx1l', 'template_dmjecue', form.current, {
        publicKey: 'PF1HJ0vQ3vihAdtYb',
      })
      .then(
        () => {
          setMessage('Message reçu');
          setSubmitting(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage('message non recu');
          setSubmitting(false);
        }
      );
  };
  const handleInputChange = (e) => {
    setEmailData({ ...emailData, [e.target.id]: e.target.value });
  };


  return (
    <div className="form-wrapper">

			 <h1>Précommander mon pot d&apos;aïoli pour 2026</h1>

      <div className="form-header">
					<Image src={logo} width={170} height={50} alt="logo"/>
        <h1 className="form-title">
					<Image src={timbre} width={170} height={50} alt="timbre canigo" />
				</h1>
      </div>

      <form ref={form} onSubmit={sendEmail} className="form-grid">
        <div className="form-group">
          <label>Prénom</label>
          <input
            type="text"
            id="prenom"
            name="user_name"
            value={emailData.prenom}
            onChange={handleInputChange}
            required
          />
        </div>
				<div className="form-group">
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={emailData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-button-wrapper wide">
          <button className="form-button" type="submit" disabled={submitting}>
            Envoyer →
          </button>
          {message && <p className="form-message">{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
