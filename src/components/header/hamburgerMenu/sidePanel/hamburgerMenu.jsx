import React from 'react';
import hStyles from '../../header.module.scss';


const Hamburger = props => {
  return (
  <button className={hStyles.hamburgerContainer} onClick={props.click}>
    <div className={hStyles.line}/>
    <div className={hStyles.line}/>
    <div className={hStyles.line}/>
  </button>
  );
}

export default Hamburger;