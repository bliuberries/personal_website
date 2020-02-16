import React from 'react';
// import Icon from './icon/icon.jsx';
import pages from './pages.js';
import anime from 'animejs';
import SingleMenuItem from './singleMenuItem.jsx';


class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.pos1 = 0;
    this.pos2 = 0;
    this.pos3 = 0;
    this.pos4 = 0;
    this.size = 0;
    this.first = null;
    this.last = null;
    // this.timeOut = null;
    this.expanded = false;
    this.add = this.add.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.click = this.click.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  onMouseUp() {
    this.first.isMoving ? this.first.isMoving = false : this.click();
  }

  add(menuItem) {
    if (this.first === null) {
      this.first = menuItem;
      this.last = menuItem;
    } else {
      this.last.next = menuItem;
      menuItem.prev = this.last;
      this.last = menuItem;
    }
  }

  click() {
    this.expanded ? this.close() : this.open();
  }

  open() {
    this.expanded = !this.expanded;
    let current = this.first.next;
    let iterator = 1;
    let head = this.first;
    let dir = head.element.css('top') < head.element.css('bottom') ? 1 : -1;
    while (current !== null) {
      anime({
        targets: current.element[0],
        top: parseInt(head.element.css("top"), 10) + (dir * (iterator * 50)),
        left: head.element.css("left"),
        duration: 500
      });
      iterator++;
      current = current.next;
    }
  }

  close() {
    this.expanded = !this.expanded;
    let current = this.first.next;
    // let iterator = 1;
    let head = this.first;
    while (current != null) {
      anime({
        targets: current.element[0],
        left: head.element.css("left"),
        top: head.element.css("top"),
        duration: 500
      });
      // iterator++;
      current = current.next;
    }
  }

  render() {
    // pages.map(header => {
    //   this.add();
    // })


    return (
      <div className='menu' onClick={this.click}>
        {/* <Icon /> */}
        {pages.map((header, index) => {
          let Item = new SingleMenuItem(header, this.onMouseUp)
          console.log(Item);
          this.add(Item)
          return (
            Item.render
          );
        })}
      </div>
    );
  }
};

export default Menu;