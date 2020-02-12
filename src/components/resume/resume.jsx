import React from 'react';

//download button
import Download from './download.jsx';

//Formatting the resume
import Formatter from './formatter.jsx';

//Home component
import Home from '../home/home.jsx';

//Resume content to display
import skills from './resumePoints/skills.js'
import education from './resumePoints/education.js'
import workExperience from './resumePoints/workExperience.js'

import ContactSnippet from '../header/contactSnippet.jsx';

//CSS
import resumeStyles from './resume.module.scss';

const Resume = () => {
  return (
    <div className={resumeStyles.resume}>
      <Home cText={['Dig a little', 'deeper.']} 
      Button={Download} 
      location='Resume'/>
      <div className='resume-container'>
        <Formatter skills={skills} education={education} work={workExperience} />
      </div>
      <ContactSnippet />
    </div>
  )
}

export default Resume;