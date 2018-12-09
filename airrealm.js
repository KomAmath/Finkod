import React from 'react';

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
    if (this.state.selected === "tva") {
      return uppgiftdiv;
    }
    if (this.state.selected === "tre") {
      return uppgiftdiv;
    }
    if (this.state.selected === "fyra") {
      return uppgiftdiv;
    }
    if (this.state.selected === "fem") {
      return uppgiftdiv;
    }
    if (this.state.selected === "abort") {
      return app;
    }


    return(

       <div className="air">

       <button id = "abort" onClick={this.handleClick}> Tillbaka </button>
        <div id="knappContainer">
          {/*<div className="flex-container">
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
          </div>*/}

          <div className="flex-container3">
          <div className="empty"></div>
          <div className="empty_half"></div>
          <button id='fem' type="button" className="luftknapp" onClick={this.handleClick}> 5 </button>
          </div>

          <div className="flex-container">
          <div className="empty"></div>
          <button id='fyra' type="button" className="luftknapp" onClick={this.handleClick}> 4</button>
          </div>

          <div className="flex-container2">
          <button id='tre' type="button" className="luftknapp" onClick={this.handleClick}> 3 </button>
          <div className="empty"></div>
          </div>

          <div className="flex-container">
          <div className="empty_half"></div>
          <button id='tva' type="button" className="luftknapp" onClick={this.handleClick}> 2</button>
          </div>

          <div className="flex-container3">
          <div className="empty"></div>
          <button id='ett' type="button" className="luftknapp" onClick={this.handleClick}> 1 </button>
          </div>
          </div>
       </div>
      )
  }
}
export default AirRealm;