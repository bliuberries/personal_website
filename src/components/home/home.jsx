import React from 'react';
import Header from '../header/header.jsx';
import CenterText from './centerText.jsx';
import homeStyle from './home.module.scss';

const Home = (props) => {
  let { cText, Button, location} = props;
  if(location === undefined) location = 'Home'

  return (
    <div>
      <Header location={location}/>
      <div className="background" >
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