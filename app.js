import React, { Component } from 'react';
import types from './types.json';
import './app.css';



class TypeApp extends React.Component {
  render() {

    return(
      <div className="wrapper">

        <div id="header">
          <img id="donald" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Donald_Duck.svg/220px-Donald_Duck.svg.png"/>
          <div id="arrowLeft"></div>
          <div id="bubble">
            <p id="welcome"> Välkommen hit, skoj </p>
          </div>
        </div>

        <div id="plus" className="ruta">
        <p className="text"> + </p>
        </div>

        <div id="minus" className="ruta">
         <p className="text"> - </p>
        </div>  

        <div id="mult" className="ruta">
         <p className="text"> * </p>
        </div> 

        <div id="division" className="ruta">
         <p className="text"> % </p>
        </div>

      </div>
    )
  }
}


export default TypeApp;
