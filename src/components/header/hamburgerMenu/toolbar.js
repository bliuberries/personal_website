import React from 'react';

import hStyles from '../header.module.scss';

const Toolbar = props => (
  <header className={hStyles.toolBar}>
    <nav className={hStyles.toolBarNav}>
      <div></div>
      <div className={hStyles.toolBarLogo}>
        <a className={hStyles.logo} href="/">The Logo</a>
      </div>
      <div>
        <ul className={hStyles.toolbarNavUl}> 
          <li><a className={hStyles.navItems} href="/">Home</a></li>
          <li><a className={hStyles.navItems} href="/">About</a></li>
          <li><a className={hStyles.navItems} href="/">Portfolio</a></li>
          <li><a className={hStyles.navItems} href="/">Resume</a></li>
          <li><a className={hStyles.navItems} href="/">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar