import React from 'react';
import Dropdown from './dropDown.jsx';
import Project from './singleProject';
import './portfolio.css';

import Tetris from './projects/tetris.js';
import superMario from './projects/superMario.js';

class Portfolio extends React.Component {

  constructor() {
    super();
    this.state = {
      projectName: 'Super Mario Clone',
    }
  }

  getCurrentValue(event) {
    this.setState({
      projectName: event.target.value,
    })
  }

  render() {
    const project = 
    this.state.projectName === 'Super Mario Clone' ? superMario : 
    this.state.projectName === 'Tetris' ? Tetris : superMario;
    return (
      <div>
        {/* <Header props='Portfolio'/> */}
        <div className="background" >
          <div className="center-text-container">
            <span className="center-text">My Projects</span>
          </div>
        </div>
        <Dropdown fn={this.getCurrentValue.bind(this)} />
        <Project name={project} />
      </div>
    );
  }
};

export default Portfolio;