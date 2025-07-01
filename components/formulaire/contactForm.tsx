import React, { useState, useRef} from 'react';
import Image from 'next/image';
import timbre from '../../public/img/timbre.png';
import logo from '../../public/georges-signature-aioli.png';

const ContactForm = () => {
  const [emailData, setEmailData] = useState({ prenom: '', nom:'', email: '' });
  const [isOpen, setIsOpen] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });
      if (response.ok) {
        console.log('Email envoyé avec succès');
        setIsOpen(true)
    } else {
        throw new Error('Erreur lors envoi de email');
      }
    } catch (error) {
      console.error('Échec envoi :', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailData({ ...emailData, [e.target.id]: e.target.value });
  };
  const handleCross = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(false);
  };

//   useEffect(() => {
//   setEmailData({ ...emailData });
// }, []);

  return (
    <div className="form-wrapper">
      <h1>Précommander mon pot d&#39;aïoli pour 2026</h1>

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
          <label>Nom</label>
          <input
            type="text"
            id="nom"
            name="user_surname"
            value={emailData.nom}
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

          <button className="button" type="submit">
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
          {/* {message && <p className="form-message">{message}</p>} */}
      </form>

      <div className={`${isOpen ? 'cookies-card' : 'popClose'}`} >
        <p className="cookie-heading">Vous êtes inscrit !</p>
        <p className="cookie-para">
        Vous êtes désormais dans la liste d&#39;attente pour l&#39;aïoli catalan Georges !
        </p>
        <button className="exit-button" onClick={handleCross}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 162 162"
            className="svgIconCross"
          >
            <path
              stroke-linecap="round"
              stroke-width="17"
              stroke="black"
              d="M9.01074 8.98926L153.021 153"
            ></path>
            <path
              stroke-linecap="round"
              stroke-width="17"
              stroke="black"
              d="M9.01074 153L153.021 8.98926"
            ></path>
          </svg>
        </button>
        </div>
    </div>
  );
};

export default ContactForm;
