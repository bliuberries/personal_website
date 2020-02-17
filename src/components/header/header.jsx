import React from 'react';
import Icon from './icon/icon.jsx';
import pages from './pages.js';
import SingleHeader from './singleHeader.jsx';
import hStyles from './header.module.scss';

import Toolbar from './hamburgerMenu/toolbar.js';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'Home'
    };
  }

  componentDidMount() {
    this.setState({currentPage: this.props.location})
  }

  render() {

    return (
      <div className={hStyles.headerContainer} >
        <Toolbar />
        <Icon className={hStyles.icon}/>
        {pages.map((header, index) => {
          return (
            <SingleHeader
              key={index}
              headerTitle={header.title}
              alias={header.alias}
              css={header.css}
              aStyle={
                {color: 
                  this.state.currentPage === header.title 
                  ? '#e1a87a' : '#fff'}
                }
            />
          );
        })}
      </div>
    );
  }
};

export default Header;