import React from 'react';

const Dropdown = (props) => {
  return (
    <div className='project-list-container'>
      <div className='project-list-title'>
        PROJECTS:
          <select className='project-name' onChange={props.props}>
          <option>Super Mario Clone</option>
          <option>To Do App</option>
          <option>Tetris</option>
        </select>
      </div>
    </div>
  )
}

export default Dropdown;