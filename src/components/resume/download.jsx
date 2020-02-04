import React from 'react';
import resumeStyles from './resume.module.scss';

const Download = () => {
  return (
      <a 
      className={resumeStyles.downloadButton}
      href="https://github.com/bliuberries/resume/raw/master/Brady-Liu-%20Resume.pdf" target="_blank"
      rel="noopener noreferrer"
      >Download Resume →</a>
  )
}

export default Download;