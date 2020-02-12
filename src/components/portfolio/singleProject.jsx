import React from 'react';
import Gallery from './gallery.jsx';
import portStyles from './portfolio.module.scss';


const Project = (props) => {
  return (
    <div className={portStyles.portfolioContainer}>
      <div>
        <div className={portStyles.imageGallery}>
          <Gallery projectImages={props.name.images} />
        </div>
      </div>
      <div className={portStyles.textBlockPortfolio}>
        <div className={portStyles.positionTitle}>{props.name.title}</div>
        <br />
        <div className={portStyles.textDescription}>
          {props.name.description}
          <br />
          <br />
          <div className={portStyles.techStack}>Tech: {props.name.techStack}</div>
        </div>
        <br />
        <div className={portStyles.checkoutBox}>
          <div className={portStyles.portfolioButton}>
            <a
              href={props.name.url}
              className={portStyles.checkoutButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              CHECK IT OUT
            </a>
          </div>
          <div className={portStyles.portfolioButton}>
            <a
              href={props.name.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/github-square-social-media-512.png"
                alt="github"
                className={portStyles.checkoutIcons}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;