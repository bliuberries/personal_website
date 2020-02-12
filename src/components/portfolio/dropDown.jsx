import React from 'react';
import portStyles from './portfolio.module.scss';

const Dropdown = (props) => {
  const { fn } = props;

  return (
    <div className={portStyles.projectListContainer}>
      <div className={portStyles.projectListTitle}>
        PROJECTS:
          <select className={portStyles.projectName} onChange={fn}>
          <option>Super Mario Clone</option>
          <option>To Do App</option>
          <option>Tetris</option>
        </select>
      </div>
    </div>
  )
}

export default Dropdown;