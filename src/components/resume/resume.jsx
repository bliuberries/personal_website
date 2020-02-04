import React from 'react';
import Header from './../header/header.jsx';

const Resume = () => {
  return (
    <div className='resume'>
      <Header props='Resume'/>
      <div className="background" >
        <div className="center-text-container">
          <strong className="center-text">Dig a little</strong>
          <br/>
          <strong className="center-text">deeper.</strong>
        </div>
      </div>
      <div className='resume-container'>
      {/* <a href="" target="blank"></a> */}
      </div>
    </div>
  )
}

export default Resume;