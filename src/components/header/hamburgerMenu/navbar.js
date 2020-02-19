import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../icon/icon.jsx';

import Hamburger from './sidePanel/hamburgerMenu.jsx';
import hStyles from '../header.module.scss';

const Navbar = props => (
  <header className={hStyles.toolBar}>
    <nav className={hStyles.toolBarNav}>
      <Icon />
      <div className={hStyles.spacer}/>
      <div className={hStyles.navItems}>
        <ul className={hStyles.toolbarNavUl}> 
          <Link to='/' className={hStyles.navItem}>Home</Link>
          <Link to='/about'className={hStyles.navItem}>About</Link>
          <Link to='/portfolio'className={hStyles.navItem}>Portfolio</Link>
          <Link to='/resume'className={hStyles.navItem}>Resume</Link>
          <Link to='/contact'className={hStyles.navItem}>Contact</Link>
        </ul>
      </div>
    </nav>
  </header>
)

export default Navbar