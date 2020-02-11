import React from 'react';
import Home from '../home/home.jsx';
import Dropdown from './dropDown.jsx';
import Project from './singleProject';

import Tetris from './projects/tetris.js';
import superMario from './projects/superMario.js';

import bgImage from '../../images/redForrest.jpg'

import './portfolio.css';

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
        <Home cText={['My Projects']} bgImage={bgImage}/>
        <Dropdown fn={this.getCurrentValue.bind(this)} />
        <Project name={project} />
      </div>
    );
  }
};

export default Portfolio;