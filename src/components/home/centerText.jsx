import React from 'react';

const CenterText = (props) => {
  const { text } = props;
  return (
    <div >
      <strong className="center-text" >{text}</strong>
      <br />
    </div>
  )
}

export default CenterText;