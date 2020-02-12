import React from 'react';

//download button
import Download from './download.jsx';

//Formatting the resume
import Formatter from './formatter.jsx';

import Home from '../home/home.jsx';
// import bgImage from '../../images/sunflowerStars.jp2';

//Resume content to display
import skills from './resumePoints/skills.js'
import education from './resumePoints/education.js'
import workExperience from './resumePoints/workExperience.js'

import ContactSnippet from '../header/contactSnippet.jsx';
// import resumeStyles from './resume.scss';

const Resume = () => {
  return (
    <div className='resume'>
      <Home cText={['Dig a little', 'deeper.']} 
      bgImage='resume'
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