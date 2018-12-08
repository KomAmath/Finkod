import React, { Component } from 'react';

import './realm.css';
import UppgiftDiv from './uppgiftdiv.js';
import App from './app.js';

 class AirRealm extends React.Component {
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

    const uppgiftdiv = <UppgiftDiv />;
    const app = <App />;

    if (this.state.selected === "ett") {
      return uppgiftdiv;
    }
    if (this.state.selected === "abort") {
      return app;
    }


    return(

       <div className="air">

       <button id = "abort" onClick={this.handleClick}> Abort Mission </button>

        <div className="flex-container">
        <button type="button" className="luftknapp"> 9</button>
        <div className="empty_half"></div>       
        </div>

        <div className="flex-container2">
        <button type="button" className="luftknapp"> 8 </button>
        <div className="empty_half"></div>
        <div className="empty"></div>
        </div>

        <div className="flex-container">
        <button type="button" className="luftknapp"> 7</button>
        </div>

        <div className="flex-container3">
        <div className="empty"></div>
        <button type="button" className="luftknapp"> 6 </button>
        </div>

        <div className="flex-container3">
        <div className="empty"></div>
        <div className="empty_half"></div>
        <button type="button" className="luftknapp"> 5 </button>
        </div>

        <div className="flex-container">
        <div className="empty"></div>
        <button type="button" className="luftknapp"> 4</button>
        </div>

        <div className="flex-container2">
        <button type="button" className="luftknapp"> 3 </button>
        <div className="empty"></div>
        </div>

        <div className="flex-container">
        <div className="empty_half"></div>
        <button type="button" className="luftknapp"> 2</button>
        </div>

        <div className="flex-container3">
        <div className="empty"></div>
        <button id='ett' type="button" className="luftknapp" onClick={this.handleClick}> 1 </button>
        </div>

       </div>
      )
  }
}
export default AirRealm;