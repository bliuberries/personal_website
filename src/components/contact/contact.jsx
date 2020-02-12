import React from 'react';
import ContactModal from './contactModal.jsx';
import contactStyles from './contact.module.scss';
import myImage from '../../images/contactSnip.webp';
import Home from '../home/home.jsx';
// import bgImage from '../../images/img4.jp2';

// const Contact = () => {

class Contact extends React.Component {

  render() {
    return (
      <div className='contact'>
        <Home cText={['Connect with', 'me today.']} bgImage='contact' location='Contact' />
        <div className={contactStyles.contactContainer}>
          <img className={contactStyles.image} src={myImage} alt=""/>
          <ContactModal />
        </div>
      </div>
    )
  }
}
export default Contact;

