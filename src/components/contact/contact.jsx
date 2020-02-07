import React from 'react';
import ContactModal from './contactModal.jsx';
import contactStyles from './contact.module.scss';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="background" >
        <div className="center-text-container">
          <strong className="center-text">Connect with</strong>
          <br />
          <strong className="center-text">me today.</strong>
        </div>
      </div>
      <div className={contactStyles.contactContainer}>
        <div>
          this will be an image
        </div>
        <ContactModal />
      </div>
    </div>
  )
}

export default Contact;

