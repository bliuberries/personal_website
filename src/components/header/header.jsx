import React from 'react';
import Icon from './icon/icon.jsx';
import pages from './pages.js';
import SingleHeader from './singleHeader.jsx';
import hStyles from './header.module.scss';

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
        <Icon className={hStyles.icon}/>
        {pages.map((header, index) => {
          return (
            <SingleHeader
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