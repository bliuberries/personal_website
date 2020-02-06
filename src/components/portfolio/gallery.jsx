import React from 'react';
import Carousel from 'react-images';

const customStyles = {
  container: (base) => ({
    ...base,
    backgroundColor: '#fafafa',
    boxShadow:
      '0 1px 10px -1px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.04), 0 1px 0 rgba(0,0,0,0.04)',
    padding: 10,
  }),
  footer: (base, state) => ({
    ...base,
    color: 'black',
    minHeight: 4,
    paddingBottom: 0,

  }),
  footerCount: (base) => ({
    ...base,
    color: '#afafaf',
    fontFamily: 'Raleway',
    margin: '10% 50%',
    fontSize: '20px',
  }),
  navigationPrev: (base) => ({
    ...base,
    backgroundColor: 'transparent',
    color: 'black',
  }),
  navigationNext: (base) => ({
    ...base,
    backgroundColor: 'transparent',
    color: 'black',
  }),
  view: (base, state) => ({
    ...base,
    filter: state.interactionIsIdle ? 'grayscale(100%)' : null,
    paddingBottom: `${10 / 16 * 100}%`,
    overflow: 'hidden',
    position: 'relative',
    transition: 'filter 300ms',
    maxHeight: '60vh',
  }),

};

const Gallery = (props) => {
  return <Carousel styles={customStyles} views={props.projectImages} />;
};

export default Gallery;