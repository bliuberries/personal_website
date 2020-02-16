import React from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';

import headerStyles from './header.module.scss';

class SingleMenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.icon = props.icon;
    this.prev = null;
    this.next = null;
    this.isMoving = false;
    this.timeOut = undefined;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.moveTo = this.moveTo.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  onMouseUp() {
    
  }

  onMouseMove() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (this.next && this.isMoving) {
        this.next.moveTo(this);
      }
    }, 100);
  }

  moveTo(item) {
    anime({
      targets: this.element[0],
      left: item.element.css("left"),
      top: item.element.css("top"),
      duration: 700,
      elasticity: 500
    });
    if (this.next) this.next.moveTo(item);
  }

  updatePosition() {
    anime({
      targets: this.element[0],
      left: this.prev.element.css("left"),
      top: this.prev.element.css("top"),
      duration: 80
    });

    if (this.next) this.next.updatePosition();
  }

  render() {
    return (
      <div 
      className={headerStyles.menuItem} onMouseMove={this.onMouseMove}>
        <Link to={this.props.alias}>
          <i className={'fi-' + this.icon} />
        </Link>
      </div>
    )
  }
}

export default SingleMenuItem;