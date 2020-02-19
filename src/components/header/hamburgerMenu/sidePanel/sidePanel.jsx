import React from 'react';
import { Link } from 'react-router-dom';
import hStyles from '../../header.module.scss';
import classnames from 'classnames';

const SidePanel = props => {
  let panelClass = hStyles.sidePanel;
  if(props.show) {
    panelClass = classnames(hStyles.sidePanel, hStyles.open);
  }
  return (
    <nav className={panelClass}>
      <ul className={hStyles.sidePanelul}>
        <Link to='/' className={hStyles.navItem}>Home</Link>
        <Link to='/about' className={hStyles.navItem}>About</Link>
        <Link to='/portfolio' className={hStyles.navItem}>Portfolio</Link>
        <Link to='/resume' className={hStyles.navItem}>Resume</Link>
        <Link to='/contact' className={hStyles.navItem}>Contact</Link>
      </ul>
    </nav>
  );
};

export default SidePanel;