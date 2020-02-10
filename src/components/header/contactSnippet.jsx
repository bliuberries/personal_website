import React from 'react';
import { Link } from 'react-router-dom';
import contactStyles from './contact.module.scss';

const ContactSnippet = (props) => {
const { area } = props;

  return (
    <div className={contactStyles.contactSnippet}>
      <strong>Hire me today!</strong>
      <p className={contactStyles.p}>
        Now that you have a general idea of my past experience, please feel free to ask me any questions you might have! Or just send a hello!
      </p>
      <Link to='/contact' className={contactStyles.button}>
        <div >
          Contact Me Today 
        </div>
      </Link>
    </div>
  )
}
export default ContactSnippet;