import React from 'react';
import './home.module.scss';

const Home = (props) => {
  let { cText, bgImage, Button} = props;
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
          <br/>
          {Button !== undefined ? <Button /> : null}
        </div>
      </div>
    </div>
  )
}


export default Home;