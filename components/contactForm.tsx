import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import timbre from '../public/img/timbre.png';
import logo from '../public/georges-signature-aioli.png';

const ContactForm = () => {
  const [emailData, setEmailData] = useState({ prenom: '', email: '', message: '' });
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    emailjs
      .sendForm('service_t76tx1l', 'template_w0m0cnq', form.current!, {
        publicKey: 'PF1HJ0vQ3vihAdtYb',
      })
      .then(
        () => {
          setMessage('Message reçu');
          setSubmitting(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage('message non reçu');
          setSubmitting(false);
        }
      );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailData({ ...emailData, [e.target.id]: e.target.value });
  };

  return (
    <div className="form-wrapper">
      <h1>Précommander mon pot d&apos;aïoli pour 2026</h1>

      <div className="form-header">
        <Image src={logo} width={170} height={50} alt="logo" />
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

          <button className="button" type="submit" disabled={submitting}>
            <span className="button__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg button__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            Envoyer
          </button>
          {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
