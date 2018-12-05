import React, { Component } from 'react';
import './firerealm.css';
import './realm.css';
import UppgiftPlus from './uppgiftplus.js';
import App from './app.js';

 class FireRealm extends React.Component {
   constructor() {
    super();
    this.state = {
      selected: null
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(input) {
    console.log(input.target.id);
    this.setState({
      selected: input.target.id
    })
  };

 render() {

    const uppgiftplus = <UppgiftPlus />;
    const app = <App />;
    if (this.state.selected === "ett") {
      return uppgiftplus;
    }
    if (this.state.selected === "nio") {
      return uppgiftplus;
    }
    if (this.state.selected === "abort") {
      return app;
    }


    return(

       <div className="fire">

            <button id = "abort" onClick={this.handleClick}> Abort Mission </button>

            <div className="flex-container">
                <button id='nio' type="button" className="eldknapp" onClick={this.handleClick}> 9</button>
                <div className="empty_half"></div>       
            </div>

            <div className="flex-container2">
                <button type="button" className="eldknapp"> 8 </button>
                <div className="empty_half"></div>
                <div className="empty"></div>
            </div>

            <div className="flex-container">
                <button type="button" className="eldknapp"> 7</button>
            </div>

            <div className="flex-container3">
                <div className="empty"></div>
                <button type="button" className="eldknapp"> 6 </button>
            </div>

            <div className="flex-container3">
                <div className="empty"></div>
                <div className="empty_half"></div>
                <button type="button" className="eldknapp"> 5 </button>
            </div>

            <div className="flex-container">
                <div className="empty"></div>
                <button type="button" className="eldknapp"> 4</button>
            </div>

            <div className="flex-container2">
                <button type="button" className="eldknapp"> 3 </button>
                <div className="empty"></div>
            </div>

            <div className="flex-container">
                <div className="empty_half"></div>
                <button type="button" className="eldknapp"> 2</button>
            </div>

            <div className="flex-container3">
                <div className="empty"></div>
                <button id='ett' type="button" className="eldknapp" onClick={this.handleClick}> 1 </button>
            </div>

       </div>
      )
  }
}
export default FireRealm;