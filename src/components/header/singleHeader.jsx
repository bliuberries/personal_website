import React from 'react';
import { Link } from 'react-router-dom';

import hStyles from './header.module.scss';


const SingleHeader = props => {

  let navCss =
    props.css === 'home' ? hStyles.home :
      props.css === 'about' ? hStyles.about :
        props.css === 'contact' ? hStyles.contact :
          props.css === 'resume' ? hStyles.resume :
            props.css === 'portfolio' ? hStyles.portfolio : null
  return (
    <Link 
    to={'/' + props.alias} 
    className={
      hStyles.navigationTitle
    }
    style={props.aStyle}>
        {props.headerTitle}
    </Link>
  );
}


export default SingleHeader;