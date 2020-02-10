import React from 'react';
import ContactModal from './contactModal.jsx';
import contactStyles from './contact.module.scss';

import veggie from './../../images/oneVeggie.png';
// const Contact = () => {

class Contact extends React.Component {

  render() {
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
          <img className={contactStyles.image} src={veggie} alt=""/>
          <ContactModal />
        </div>
      </div>
    )
  }
}
export default Contact;

