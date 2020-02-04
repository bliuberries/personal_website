import React from 'react';
import Header from './../header/header.jsx';
import Download from './download.jsx';

const Resume = () => {
  return (
    <div className='resume'>
      <Header props='Resume'/>
      <div className="background" >
        <div className="center-text-container">
          <strong className="center-text">Dig a little</strong>
          <br/>
          <strong className="center-text">deeper.</strong>
          <Download />
        </div>
      </div>
      <div className='resume-container'>
      </div>
    </div>
  )
}

export default Resume;