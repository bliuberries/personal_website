import React from 'react';
import Gallery from './gallery.jsx';

const Project = (props) => {
  return (
    <div className="portfolio-container">
      <div>
        <div className="image-gallery">
          <Gallery projectImages={props.name.images} />
        </div>
      </div>
      <div className="text-block-portfolio">
        <div className="position-title">{props.name.title}</div>
        <br />
        <div className='text-description'>
          {props.name.description}
          <br />
          <br />
          <div className='tech-stack'>Tech: {props.name.techStack}</div>
        </div>
        <br />
        <div className="checkout-box">
          <div className="portfolio-button">
            <a
              href={props.name.url}
              className="checkout-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              CHECK IT OUT
            </a>
          </div>
          <div className="portfolio-button">
            <a
              href={props.name.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/github-square-social-media-512.png"
                alt="github"
                className="checkout-icons"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;