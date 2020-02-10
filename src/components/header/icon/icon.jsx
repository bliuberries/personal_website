import React from 'react';

export default class Icon extends React.Component {


  render() {
    const container = {
      float: "left",
      transform: "translate(45%, 45%)",
    }
    const outerBox = {
      width: "50px",
      height: "50px",
      borderStyle: "solid",
      borderWidth: "2px",
      borderColor: "#fff",
      transform: "rotate(45deg)",
      display: "flex",
      justifyContent: "center",
    }
    const slash = {
      width: ".5px",
      marginTop: "35%",
      marginBottom: "35%",
      backgroundColor: "#fff",
      borderStyle: "solid",
      borderWidth: ".5px",
      borderColor: "#fff",
    }
    
    const firstInit = {
      fontSize: "15px",
      fontWeight: "bold",
      fontFamily: "Tangerine, serif",
      transform: "rotate(-45deg)translate(-65%, 25%)",
      color: "#fff",
      cursor: "default"
    }

    const lastInit = {
      fontSize: "15px",
      fontWeight: "bold",
      fontFamily: "Tangerine, serif",
      transform: "rotate(-45deg)translate(35%, 48%)",
      color: "#fff",
      cursor: "default"
    }
    return (
      <div style={container}>
        <div style={outerBox}>
          <div style={firstInit}>B</div>
          <div style={slash}/>
          <div style={lastInit}>L</div>
        </div>
      </div>
    )
  }
}