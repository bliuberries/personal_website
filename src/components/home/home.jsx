import React from 'react';
import Header from './../header/header.jsx';
import './home.css';

class Home extends React.Component {


  render() {
    return (
      <div>
        <Header props='Home'/>
          <div className="background">
            <div className="center-text-container">
              <span className="center-text">DEVELOPER</span>

          </div>
        </div>
      </div>
    )
  }
}

export default Home;