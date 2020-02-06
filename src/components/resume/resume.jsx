import React from 'react';

//download button
import Download from './download.jsx';

//Formatting the resume
import Formatter from './formatter.jsx';

//Resume content to display
import skills from './resumePoints/skills.js'
import education from './resumePoints/education.js'
import workExperience from './resumePoints/workExperience.js'


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
        <Formatter skills={skills} education={education} work={workExperience}/>
      </div>
    </div>
  )
}

export default Resume;