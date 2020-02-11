import React from 'react';
import Icon from './icon/icon.jsx';
import pages from './pages.js';
import SingleHeader from './singleHeader.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'Home'
    };

    // this.clicked = this.clicked.bind(this);
  }

  componentDidMount() {
    this.setState({currentPage: this.props.location})
  }

  render() {

    return (
      <div>
        <Icon />
        {pages.map((header, index) => {
          return (
            <SingleHeader
              // onClick={this.clicked}
              key={index}
              headerTitle={header.title}
              alias={header.alias}
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