import React, { Component } from 'react';
import './realm.css';

import UppgiftMinus from './uppgiftminus.js';
import App from './app.js';

 class WaterRealm extends React.Component {
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

    const uppgiftminus = <UppgiftMinus />;
    const app = <App />;
    if (this.state.selected === "ett") {
      return uppgiftminus;
    }
    if (this.state.selected === "abort") {
      return app;
    }


    return(

       <div className="water">

       <button id = "abort" onClick={this.handleClick}> Abort Mission </button>
          <div id="knappContainer">
            <div className="flex-container">
            <button type="button" className="vattenknapp"> 9</button>
            <div className="empty_half"></div>       
            </div>

            <div className="flex-container2">
            <button type="button" className="vattenknapp"> 8 </button>
            <div className="empty_half"></div>
            <div className="empty"></div>
            </div>

            <div className="flex-container">
            <button type="button" className="vattenknapp"> 7</button>
            </div>

            <div className="flex-container3">
            <div className="empty"></div>
            <button type="button" className="vattenknapp"> 6 </button>
            </div>

            <div className="flex-container3">
            <div className="empty"></div>
            <div className="empty_half"></div>
            <button type="button" className="vattenknapp"> 5 </button>
            </div>

            <div className="flex-container">
            <div className="empty"></div>
            <button type="button" className="vattenknapp"> 4</button>
            </div>

            <div className="flex-container2">
            <button type="button" className="vattenknapp"> 3 </button>
            <div className="empty"></div>
            </div>

            <div className="flex-container">
            <div className="empty_half"></div>
            <button type="button" className="vattenknapp"> 2</button>
            </div>

            <div className="flex-container3">
            <div className="empty"></div>
            <button id='ett' type="button" className="vattenknapp" onClick={this.handleClick}> 1 </button>
            </div>
          </div>
       </div>
      )
  }
}
export default WaterRealm;