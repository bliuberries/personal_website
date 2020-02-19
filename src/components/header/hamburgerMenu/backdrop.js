import React from 'react';
import hStyles from '../header.module.scss';

const Backdrop = props => {
  return (
    <div className={hStyles.backDrop} onClick={props.click}/>
  )
}

export default Backdrop;