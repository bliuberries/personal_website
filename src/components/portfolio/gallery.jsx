import React from 'react';
import Carousel from 'react-images';

const customStyles = {
  header: (base, state) => ({
    ...base,
    borderBottom: '1px dotted pink',
    padding: 20,
  }),
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
    minHeight: 42,
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
    color: 'black',
  }),
  navigationNext: (base) => ({
    ...base,
    color: 'black',
  }),
};

const Gallery = (props) => {
  return <Carousel styles={customStyles} views={props.projectImages} />;
  // return <Carousel views={props.projectImages} />;
};

export default Gallery;