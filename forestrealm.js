import React, { Component } from 'react';
import './realm.css';

import UppgiftMult from './uppgiftmult.js';
import App from './app.js';

 class ForestRealm extends React.Component {
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

    const uppgiftmult = <UppgiftMult />;
    const app = <App />;

    if (this.state.selected === "ett") {
      return uppgiftmult;
    }
    if (this.state.selected === "abort") {
      return app;
    }

    return(

       <div className="forest">

        <button id = "abort" onClick={this.handleClick}> Abort Mission </button>

        <div className="flex-container">
        <button type="button" className="skogsknapp"> 9</button>
        <div className="empty_half"></div>       
        </div>

        <div className="flex-container2">
        <button type="button" className="skogsknapp"> 8 </button>
        <div className="empty_half"></div>
        <div className="empty"></div>
        </div>

        <div className="flex-container">
        <button type="button" className="skogsknapp"> 7</button>
        </div>

        <div className="flex-container3">
        <div className="empty"></div>
        <button type="button" className="skogsknapp"> 6 </button>
        </div>

        <div className="flex-container3">
        <div className="empty"></div>
        <div className="empty_half"></div>
        <button type="button" className="skogsknapp"> 5 </button>
        </div>

        <div className="flex-container">
        <div className="empty"></div>
        <button type="button" className="skogsknapp"> 4</button>
        </div>

        <div className="flex-container2">
        <button type="button" className="skogsknapp"> 3 </button>
        <div className="empty"></div>
        </div>

        <div className="flex-container">
        <div className="empty_half"></div>
        <button type="button" className="skogsknapp"> 2</button>
        </div>

        <div className="flex-container3">
        <div className="empty"></div>
        <button id='ett' type="button" className="skogsknapp" onClick={this.handleClick}> 1 </button>
        </div>

       </div>
      )
  }
}
export default ForestRealm;