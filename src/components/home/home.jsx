import React from 'react';
import './home.css';

const Home = (props) => {
  const { cText, bgImage } = props;

  return (
    <div>
      <div className="background" style={{backgroundImage: `url(${bgImage}`}}>
        <div className="center-text-container">
          {cText.map((text, index) => {
            return (
              <div key={index}>
                <strong className="center-text" >{text}</strong>
                <br />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


export default Home;