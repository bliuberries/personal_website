import React from 'react';
import { Link } from 'react-router-dom';

import headerStyles from './header.module.scss';


const SingleHeader = props => {

  return (
    <div >
      <Link to={props.alias}>
        <strong className={headerStyles.navigationTitle}
          style={props.aStyle}>
          {props.headerTitle}
        </strong>
      </Link>
    </div>
  );
}


export default SingleHeader;