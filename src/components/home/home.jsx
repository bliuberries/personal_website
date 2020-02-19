import React from 'react';
import Navbar from '../header/hamburgerMenu/navbar.js';
import CenterText from './centerText.jsx';
import homeStyles from './home.module.scss';
import hStyles from '../header/header.module.scss';
import Hamburger from '../header/hamburgerMenu/sidePanel/hamburgerMenu.jsx';
import SidePanel from '../header/hamburgerMenu/sidePanel/sidePanel.jsx';
import Backdrop from '../header/hamburgerMenu/backdrop.js';


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cText: ['Developer'],
      Button: undefined,
      location: 'Home',
      sidePanelOpen: false,
    }
  }

  componentDidMount() {
    this.setState((prevState) => {
      return {
        cText: this.props.cText,
        Button: this.props.Button,
        locat: this.props.location
      }
    })
  }

  openCloseSidePanel = () => {
    this.setState((prevState) => {
      return { sidePanelOpen: !prevState.sidePanelOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sidePanelOpen: false })
  }

  render() {
    let backdrop;
    if (this.state.sidePanelOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div>
        <Navbar />
        <SidePanel show={this.state.sidePanelOpen} />
        {backdrop}
        <div className="background" >
          <div className={homeStyles.centerTextContainer}>
            {this.state.cText.map((text, index) => {
              return (
                <CenterText text={text} key={index} />
              )
            })}
            <br />
            {this.state.Button !== undefined ? <this.state.Button className={homeStyles.button} /> : null}
          </div>
          <div className={hStyles.hamburgerMenu}>
            <Hamburger click={this.openCloseSidePanel} />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;