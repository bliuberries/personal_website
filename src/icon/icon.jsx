import React from 'react';

export default class Icon extends React.Component {


  render() {
    const container = {
      float: "left",
      transform: "translate(25%, 25%)",
      
    }
    const outerBox = {
      width: "50px",
      height: "50px",
      borderStyle: "solid",
      borderWidth: "2px",
      borderColor: "white",
      transform: "rotate(45deg)",
      display: "flex",
      justifyContent: "center",
    }
    const slash = {
      width: ".5px",
      marginTop: "35%",
      marginBottom: "35%",
      backgroundColor: "white",
      borderStyle: "solid",
      borderWidth: ".5px",
      borderColor: "white",
    }
    
    const firstInit = {
      fontSize: "15px",
      fontFamily: "Tangerine, serif",
      transform: "rotate(-45deg)translate(-65%, 25%)",
      color: "white"
    }

    const lastInit = {
      fontSize: "15px",
      fontFamily: "Tangerine, serif",
      transform: "rotate(-45deg)translate(40%, 45%)",
      color: "white"
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