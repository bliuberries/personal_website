import React from 'react';

const style = {
  backgroundColor: 'transparent',
  borderWidth: '1px',
  borderStyle: 'solid',
  textDecoration: 'none',
  color: '#000'

}


const Download = () => {
  return (
    <div className='download-button-container'>
      <a 
      href="https://github.com/bliuberries/resume/raw/master/Brady-Liu-%20Resume.pdf" target="_blank"
      style={style}>DOWNLOAD RESUME →</a>
    </div>
  )
}

export default Download;