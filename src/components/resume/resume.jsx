import React from 'react';
import Download from './download.jsx';
// import resumeStyles from './resume.scss';

const Resume = () => {
  return (
    <div className='resume'>
      <div className="background" >
        <div className="center-text-container">
          <strong className="center-text">Dig a little</strong>
          <br />
          <strong className="center-text">deeper.</strong>
        </div>
        <Download />
      </div>
      <div className='resume-container'>
      </div>
    </div>
  )
}

export default Resume;