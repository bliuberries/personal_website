import React from 'react';
import ContactModal from './contactModal.jsx';

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
      <div className='resume-container'>
        content
      <br />
        more content
      <ContactModal />
        </div>
    </div>
  )
}

export default Contact;

