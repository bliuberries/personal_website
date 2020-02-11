import React from 'react';
import ContactSnippet from '../header/contactSnippet.jsx';
import myImage from '../../images/img2.jpg';
import Home from '../home/home.jsx';

import bgImage from '../../images/sunflowerStars.jpg'

import './about.css';

const About = () => {
  return (
    <div>
      {/* <div className="background" >
        <div className="center-text-container">
          <strong className="center-text">My Passions & </strong>
          <br />
          <strong className="center-text">Personality</strong>
        </div>
      </div> */}
      <Home cText={['My Passions &', 'Personality']} bgImage={bgImage}/>
      <div className="about-me-grid-container">
        <div>
          <img
            src={myImage}
            className="my-photo"
            alt=""
          />
        </div>
        <div className="text-block">
          <div className="position-title">A few fun facts about myself</div>
          <br />
          <div className="about-me-description">
            I work out of San Jose CA, I enjoy french press medium roast, I play volleyball, I'm not a fan of IPAs, my favorite food is Black Garlic Tonkotsu Ramen, I practice piano, and I like to unwind with video games.
            <br />
            <br />
            I'm currently looking for work as a front-end developer, working on
            projects and algorithms in the interim. Thanks for taking the time
            to visit, I'd love to hear from you regarding job opportunities,
            critique, or anything at all!
            <br />
          </div>
          <br />
        </div>
      </div>
      <ContactSnippet />
    </div>
  );
};

export default About;