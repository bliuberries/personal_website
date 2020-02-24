import React from 'react';
import pages from '../../pages.js';
import hStyles from '../../header.module.scss';
import classnames from 'classnames';
import SingleNavItem from '../singleNavItem.jsx';

const SidePanel = props => {
  let panelClass = hStyles.sidePanel;
  if(props.show) {
    panelClass = classnames(hStyles.sidePanel, hStyles.open);
  }
  return (
    <nav className={panelClass}>
      <ul className={hStyles.sidePanelul}>
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
    </nav>
  );
};

export default SidePanel;