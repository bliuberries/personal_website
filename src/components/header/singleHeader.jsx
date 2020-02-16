import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import hStyles from './header.module.scss';


const SingleHeader = props => {

  return (
    <Link 
    to={'/' + props.alias} 
    className={
      classnames(hStyles.navigationTitle, hStyles[props.css])
    }
    style={props.aStyle}>
        {props.headerTitle}
    </Link>
  );
}


export default SingleHeader;