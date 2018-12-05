import React, { Component } from 'react';
import types from './types.json';
import './uppgiftplus.css';
import FireRealm from './firerealm.js';
import PopUp from './popup.js';

class UppgiftPlus extends React.Component {
constructor() {
    super();
    this.state = {
      selected: null,
      showPopup: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.togglePopup = this.togglePopup.bind(this)
  }

  handleClick(input) {
    console.log(input.target.id);
    //console.log(this.state.showPopup);
    if (this.refs.facit && (this.state.selected === this.refs.facit.textContent)){
      this.togglePopup();
    }
    //console.log(this.state.showPopup);
    this.setState({
      selected: input.target.id
      //showPopup: false
    })
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
      //showPopup: true
    });
  }



  Random(maxNumber) {
  	var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
  	return randomNumber;
  };
  RandomOp(svar, maxNumber) {
  	let plusminus = this.Random(2);
  	if(plusminus == 1)
  		return (svar + this.Random(maxNumber))
  	else
  		return (svar - this.Random(maxNumber))
  }
 Svar() {

 	return true;
 }
  RandomUpg(max) {
  	let term1 = this.Random(max);
  	let term2 = this.Random(max);
  	let svar = term1 + term2;
  	let alt1 = this.RandomOp(svar, (max/10 + 5));
  	let alt2 = this.RandomOp(svar, (max/10 + 5));
  	let alt3 = this.RandomOp(svar, (max/10 + 5));
  	let alt4 = this.RandomOp(svar, (max/10 + 5));

  	while(alt1==alt2)
  		alt1 = this.RandomOp(svar, (max/10 + 5));
  	while(alt1==alt3)
  		alt1 = this.RandomOp(svar, (max/10 + 5));
  	while(alt1==alt4)
  		alt1 = this.RandomOp(svar, (max/10 + 5));
  	while(alt2==alt3)
  		alt2 = this.RandomOp(svar, (max/10 + 5));
  	while(alt2==alt4)
  		alt2 = this.RandomOp(svar, (max/10 + 5));
  	while(alt3==alt4)
  		alt3 = this.RandomOp(svar, (max/10 + 5));


  	let svarPlace = this.Random(4);
  	if(svarPlace == 1 ) {alt1 = svar;}
  	else if(svarPlace == 2) {alt2 = svar;}
  	else if(svarPlace == 3) {alt3 = svar;}
  	else {alt4 = svar;}
  	let facit = "alt" + svarPlace;
  			// function(event) med this.handleClick hämtar ej this
  	return (
  		<div id= "bru">
      <button id = "abort" onClick={this.handleClick}> Abort Mission </button>
    	<div id ="uppgift"> {term1} + {term2}</div>
    	<button id = "alt1" className = "alternativ" onClick={(event) => {this.handleClick(event);}}>{alt1}</button>
    	<button id = "alt2" className = "alternativ" onClick={(event) => {this.handleClick(event);}}>{alt2}</button>
    	<button id = "alt3" className = "alternativ" onClick={(event) => {this.handleClick(event);}}>{alt3}</button>
    	<button id = "alt4" className = "alternativ" onClick={(event) => {this.handleClick(event);}}>{alt4}</button>
    	<p hidden ref="facit">{facit}</p>
    	</div>
    	);
  }

  render() {
    const test = <FireRealm />;
    const Retry = <PopUp
            text= 'Retry'
            closePopup={this.togglePopup.bind(this)}
          />

    if (this.refs.facit && (this.state.selected === this.refs.facit.textContent)) {
      return (
        <div>
        {this.state.showPopup ? 
          
          <PopUp
            text='Close Me'
            back={this.togglePopup.bind(this)}
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        {
          console.log(this.state.showPopup)
        }
        {
          
          this.RandomUpg(20)
        }
        </div>

        ); 
    }
    else if (this.state.selected === "abort") {
      return (test);
    }
  	
    return (
      this.RandomUpg(20)
    	
      );
  }
}


UppgiftPlus.types = {
	//uppgiftTyp 
	// Difficulty
}

export default UppgiftPlus;