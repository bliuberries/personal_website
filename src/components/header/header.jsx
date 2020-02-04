import React from 'react';
import Icon from './icon/icon.jsx';
import { Link } from 'react-router-dom';
import './header.css';

const pages = [
  {
    title: 'Contact',
    alias: '/contact',
  },
  {
    title: 'Resume',
    alias: '/resume',
  },
  {
    title: 'Portfolio',
    alias: '/portfolio',
  },
  {
    title: 'About Me',
    alias: '/about',
  },
  {
    title: 'Home',
    alias: '/',
  },
];

const Header = (title) => {
  return (
    <div>
      <Icon />
      {pages.map((header, index) => {
        return (
          <SingleHeader
            title={title.props}
            key={index}
            headerTitle={header.title}
            alias={header.alias}
          />
        );
      })}
      
    </div>
  );
};

class SingleHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoverOver: false,
      currentPage: props.title
    };
    this.onUserHover = this.onUserHover.bind(this);
  }

  onUserHover() {
    this.setState({
      isHoverOver: !this.state.isHoverOver,
    });
  }

  render() {
    const style = {
      cursor: this.state.isHoverOver ? 'pointer' : 'default',
    };
    const linkStyle = {
      textDecoration: 'none',
      color: this.state.currentPage === this.props.headerTitle ? '#fff': '#000'
    };
    return (
      <div>
        
        <Link to={this.props.alias} style={linkStyle}>
          <div
            className='navigation-title'
            style={style}
            onMouseOver={this.onUserHover}
            onMouseOut={this.onUserHover}
          >
            {this.props.headerTitle}
          </div>
        </Link>
      </div>
    );
  }
}

export default Header;