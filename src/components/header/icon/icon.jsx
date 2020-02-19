import React from 'react';

const Icon = (props) => {
  let { color = '#fff', fInit = 'B', lInit = 'L', font = 'Raleway, sans-serif' } = props;
  const container = {
    float: "left",
    transform: "translate(45%, 45%)",
  }

  const outerBox = {
    width: "50px",
    height: "50px",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: color,
    transform: "rotate(45deg)",
    display: "flex",
    justifyContent: "center",
  }

  const slash = {
    width: ".5px",
    marginTop: "35%",
    marginBottom: "35%",
    backgroundColor: color,
    borderStyle: "solid",
    borderWidth: ".5px",
    borderColor: color,
  }

  const firstInit = {
    fontSize: "15px",
    fontWeight: "bold",
    fontFamily: font,
    transform: "rotate(-45deg)translate(-35%, 22%)",
    color: color,
    cursor: "default"
  }

  const lastInit = {
    fontSize: "15px",
    fontWeight: "bold",
    fontFamily: font,
    transform: "rotate(-45deg)translate(55%, 42%)",
    color: color,
    cursor: "default"
  }

  return (
    <div style={container} className='theIcon'>
      <div style={outerBox}>
        <div style={firstInit}>{fInit}</div>
        <div style={slash} />
        <div style={lastInit}>{lInit}</div>
      </div>
    </div>
  )
}

export default Icon;