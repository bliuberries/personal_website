import React from 'react';
import ContactSnippet from '../header/contactSnippet.jsx';
import myImage from '../../images/contactSnip.webp';
import Home from '../home/home.jsx';

// import bgImage from '../../images/img6.jp2'

import aboutStyles from './about.module.scss';

const About = () => {
  return (
    <div>
      <Home cText={['My Passions &', 'Personality']} bgImage='about' location='About Me'/>
      <div className={aboutStyles.aboutMeGridContainer}>
        <div>
          <img
            src={myImage}
            className={aboutStyles.myPhoto}
            alt=""
          />
        </div>
        <div className={aboutStyles.textBlock}>
          <div className={aboutStyles.positionTitle}>A few fun facts about myself</div>
          <br />
          <div className={aboutStyles.aboutMeDescription}>
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