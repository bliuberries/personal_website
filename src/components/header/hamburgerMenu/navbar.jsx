import React from 'react';
import Icon from '../icon/icon.jsx';
import pages from '../pages.js';
import SingleNavItem from './singleNavItem.jsx';
import Hamburger from './sidePanel/hamburgerMenu.jsx';
import hStyles from '../header.module.scss';

const Navbar = props => {

  return (
    <header className={hStyles.toolBar}>
      <nav className={hStyles.toolBarNav}>
        <Icon />
        <div className={hStyles.spacer} />
        <div className={hStyles.navItems}>
          <ul className={hStyles.toolbarNavUl}>
            {pages.map((page, index) => {
              return (
                <SingleNavItem
                  key={index}
                  alias={page.alias}
                  title={page.title}
                  aStyle={
                    {
                      color:
                        props.location === page.title
                          ? '#e1a87a' : '#fff'
                    }
                  }
                />
              )
            })}
          </ul>
        </div>
        <div className={hStyles.hamburgerMenu}>
          <Hamburger click={props.click} />
        </div>
      </nav>
    </header>
  )
}


export default Navbar