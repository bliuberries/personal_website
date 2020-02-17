import React from 'react';

import hStyles from '../header.module.scss';

const Toolbar = props => (
  <header className={hStyles.toolBar}>
    <nav className={hStyles.toolBarNav}>
      <div></div>
      <div className={hStyles.toolBarLogo}>
        <a href="/">The logo</a>
      </div>
      <div className={hStyles.navItems}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Portfolio</a></li>
          <li><a href="/">Resume</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar