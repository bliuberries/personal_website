import React from 'react';
import Navbar from '../header/hamburgerMenu/navbar.jsx';
import CenterText from './centerText.jsx';
import homeStyles from './home.module.scss';
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
    this.setState(() => {
      return {
        cText: this.props.cText,
        Button: this.props.Button,
        location: this.props.location
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
        <Navbar location={this.state.location} click={this.openCloseSidePanel}/>
        <SidePanel show={this.state.sidePanelOpen} location={this.state.location}/>
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
        </div>
      </div>
    )
  }
}

export default Home;