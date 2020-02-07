import React from 'react';
import Icon from './icon/icon.jsx';
import pages from './pages.js';
import SingleHeader from './singleHeader.jsx';

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPage: 'Home'
    };

    this.clicked = this.clicked.bind(this);
  }

  clicked(page) {
    this.setState({currentPage: page})
  }

  render() {
    return (
      <div>
        <Icon />
        {pages.map((header, index) => {
          return (
            <SingleHeader
              onClick={this.clicked}
              key={index}
              headerTitle={header.title}
              alias={header.alias}
              aStyle={
                {color: 
                  this.state.currentPage === header.title 
                  ? '#e1a87a' : '#000'}
                }
            />
          );
        })}
      </div>
    );
  }
};

export default Header;