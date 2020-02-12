import React from 'react';
import Header from '../header/header.jsx';
import CenterText from './centerText.jsx';
import './home.module.scss';

const Home = (props) => {
  let { cText, bgImage, Button, location} = props;
  if(location === undefined) location = 'Home'

  let bgImageWebP = require(`../../images/${bgImage}.webp`);
  let bgImageJp2 = require(`../../images/${bgImage}.jp2`);
  let bgImageJpg = require(`../../images/${bgImage}.jpg`);

  return (
    <div>
      <Header location={location}/>
      <div className="background" style={{backgroundImage: `url(${bgImageWebP})`}}>
        <div className="center-text-container">
          {cText.map((text, index) => {
            return (
              <CenterText text={text} key={index}/>
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