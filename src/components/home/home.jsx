import React from 'react';
import Header from '../header/header.jsx';
import CenterText from './centerText.jsx';
import homeStyles from './home.module.scss';

const Home = (props) => {
  let { cText, Button, location} = props;
  if(location === undefined) location = 'Home'

  return (
    <div>
      <Header location={location}/>
      <div className="background" >
        <div className={homeStyles.centerTextContainer}>
          {cText.map((text, index) => {
            return (
              <CenterText text={text} key={index}/>
            )
          })}
          <br/>
          {Button !== undefined ? <Button className={homeStyles.button}/> : null}
        </div>
      </div>
    </div>
  )
}


export default Home;