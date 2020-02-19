import React from 'react';
import ContactSnippet from '../contact/contactSnippet.jsx';
import images from '../images.js';
import Home from '../home/home.jsx';

import aboutStyles from './about.module.scss';

const About = () => {
  return (
    <div className={aboutStyles.about}>
      <Home cText={['My Passions &', 'Personality']} location='About Me'/>
      <div className={aboutStyles.aboutGridContainer}>
        <div className={aboutStyles.imageContainer}>
          <img
            src={images.aboutSnip}
            className={aboutStyles.myPhoto}
            alt=""
          />
        </div>
        <div className={aboutStyles.textBlock}>
          <div className={aboutStyles.positionTitle}>A few fun facts about myself</div>
          <br />
          <div className={aboutStyles.aboutDescription}>
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