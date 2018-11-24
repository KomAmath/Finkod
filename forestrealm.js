import React, { Component } from 'react';
import './forestrealm.css';
import UppgiftPlus from './uppgiftplus.js';

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

    const uppgiftplus = <UppgiftPlus />;
    if (this.state.selected === "ett") {
      return uppgiftplus;
    }


    return(

       <div className="forest">

        <div className="flex-container">
        <button type="button" className="lvl"> 9</button>
        <div className="empty_half"></div>       
        </div>

        <div className="flex-container2">
        <button type="button" className="lvl"> 8 </button>
        <div className="empty_half"></div>
        <div className="empty"></div>
        </div>

        <div className="flex-container">
        <button type="button" className="lvl"> 7</button>
        </div>

        <div className="flex-container3">
        <div className="empty"></div>
        <button type="button" className="lvl"> 6 </button>
        </div>

        <div className="flex-container3">
        <div className="empty"></div>
        <div className="empty_half"></div>
        <button type="button" className="lvl"> 5 </button>
        </div>

        <div className="flex-container">
        <div className="empty"></div>
        <button type="button" className="lvl"> 4</button>
        </div>

        <div className="flex-container2">
        <button type="button" className="lvl"> 3 </button>
        <div className="empty"></div>
        </div>

        <div className="flex-container">
        <div className="empty_half"></div>
        <button type="button" className="lvl"> 2</button>
        </div>

        <div className="flex-container3">
        <div className="empty"></div>
        <button id='ett' type="button" className="lvl" onClick={this.handleClick}> 1 </button>
        </div>

       </div>
      )
  }
}
export default ForestRealm;