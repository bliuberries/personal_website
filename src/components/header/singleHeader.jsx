import React from 'react';
import { Link } from 'react-router-dom';

import headerStyles from './header.module.scss';


const SingleHeader = props => {

  const onClick = () => {
    props.onClick(props.headerTitle);
  }

  return (
    <div onClick={onClick} >
      <Link to={props.alias}>
        <div className={headerStyles.navigationTitle}
          style={props.aStyle}>
          {props.headerTitle}
        </div>
      </Link>
    </div>
  );
}


export default SingleHeader;