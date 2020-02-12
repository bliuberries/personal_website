import React from 'react';
import ContactModal from './contactModal.jsx';
import contactStyles from './contact.module.scss';
import myImage from '../../images/contactSnip.webp';
import Home from '../home/home.jsx';

const Contact = () => {
  return (
    <div className={contactStyles.contact}>
      <Home cText={['Connect with', 'me today.']} location='Contact' />
      <div className={contactStyles.contactContainer}>
        <img className={contactStyles.image} src={myImage} alt="" />
        <ContactModal />
      </div>
    </div>
  )
}

export default Contact;

