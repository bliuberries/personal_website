import React from 'react';
import Header from './../header/header.jsx';
import './home.css';

class Home extends React.Component {


  render() {
    return (
      <div>
        <Header />
        <div className="home-page-container">
          <div className="background">
            <div className="home-page">
              <span className="full-name">DEVELOPER.</span>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;