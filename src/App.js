import React, { Component } from 'react';
import Icon from './icon/icon.jsx';
import './App.css';

export default class App extends Component {


  render() {
    const navStyle = {
      textDecoration: "none",
      color: "#fff",
      cursor: "pointer",
    }
    return (
      <div className="App">
        <div className="Home-page">
          <div className="logo">
            <div></div>
          </div>
          <div>
            <Icon />
            <div>
              <a className="navigation-title" href="/contact" style={navStyle} >
                Contact
              </a>
            </div>
            <div>
              <a className="navigation-title" href="/about" style={navStyle} >
                About
              </a>
            </div>
            <div>
              <a className="navigation-title" href="/resume" style={navStyle} >
                Resume
              </a>
            </div>
            <div>
              <a className="navigation-title" href="/portfolio" style={navStyle} >
                Portfolio
              </a>
            </div>
            <div>
              <a className="navigation-title" href="/" style={navStyle} >
                Home
              </a>
            </div>
          </div>
          <header className="App-header">
            <span className="full-name">DEVELOPER.</span>
          </header>
        </div>
      </div>
    )
  }
} 
