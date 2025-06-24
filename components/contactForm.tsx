import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

//Images
import Image from 'next/image';
import timbre from '../public/img/timbre.png';
import logo from '../public/georges-signature-aioli.png'

const ContactForm = () => {
  const yesmessage = ['See you soon ! 🌟', 'Au plaisir de vous rencontrer ! 🌟'];
  const nomessage = ['Please, try again soon :)', 'Veuillez réessayer ultérieurement :)'];
  const [emailData, setEmailData] = useState({ prenom: '', email: '', message: '' });
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [question, setQuestion] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const isEnglish = 'EN'; // ou 'FR'

  const id = location.pathname.split('/').pop();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);
    emailjs
      .sendForm('service_ivm0jcp', 'template_9e5o1we', form.current, {
        publicKey: 'B1zXmJt5Z5YABJKhe',
      })
      .then(
        () => {
          setMessage(isEnglish === 'EN' ? yesmessage[0] : yesmessage[1]);
          setSubmitting(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage(isEnglish === 'EN' ? nomessage[0] : nomessage[1]);
          setSubmitting(false);
        }
      );
  };
  const handleInputChange = (e) => {
    setEmailData({ ...emailData, [e.target.id]: e.target.value });
  };
  const handleChange = (e) => {
    const valueC = e.target.value;
    setQuestion(valueC);
    handleSubmitQuestion(valueC);
  };

  return (
    <div className="form-wrapper">

			 <h1>Précommander mon pôt d'aïoli pour 2026</h1>

      <div className="form-header">
					<Image src={logo} width={170} height={50} alt="logo"/>
        <h1 className="form-title">
					<Image src={timbre} width={170} height={50} alt="timbre canigo" />
				</h1>
      </div>

      <form ref={form} onSubmit={sendEmail} className="form-grid">
        <div className="form-group">
          <label>Nom</label>
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
          <label>Prénom</label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={emailData.email}
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
