import React from 'react';
import homeStyles from './home.module.scss';

const CenterText = (props) => {
  const { text } = props;
  return (
    <div >
      <strong className={homeStyles.centerText} >{text}</strong>
      <br />
    </div>
  )
}

export default CenterText;