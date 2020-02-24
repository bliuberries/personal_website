import React from 'react';
import { Link } from 'react-router-dom';
import hStyles from '../header.module.scss';

const SingleNavItem = props => {

  return (
    <Link 
      to={'/' + props.alias} 
      style={props.aStyle}
      className={hStyles.navItem}
    >
      {props.title}
    </Link>
  )
}

export default SingleNavItem;