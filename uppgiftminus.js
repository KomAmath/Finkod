import React, { Component } from 'react';
import types from './types.json';
import './uppgift.css';
import WaterRealm from './waterrealm.js';
import PopUp from './popup.js';

class UppgiftMinus extends React.Component {
constructor() {
    super();
    this.state = {
      selected: null,
      showPopup: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.togglePopup = this.togglePopup.bind(this)
  }
  handleClick(input) {
    console.log(input.target.id);
    this.setState({
      selected: input.target.id,
      showPopup: false
    })
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  Random(maxNumber) {
  	var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
  	return randomNumber;
  };
  RandomOp(svar, maxNumber) {
  	let plusminus = this.Random(2);
  	if(plusminus === 1)
  		return (svar + this.Random(maxNumber))
  	else
  		return (svar - this.Random(maxNumber))
  }
 Svar() {

 	return true;
 }
  RandomUpg(max) {

    let svar = 0;
    let term1 = 0;
    let term2 = 0;
    let validate = false;

    while(validate === false) {
        term1 = this.Random(max+5);
        term2 = this.Random(max-5);
        svar = term1 - term2;
        if (svar > -1) {
          validate = true;
        }
    }

  	let alt1 = this.RandomOp(svar, (max/10 + 5));
  	let alt2 = this.RandomOp(svar, (max/10 + 5));
  	let alt3 = this.RandomOp(svar, (max/10 + 5));
  	let alt4 = this.RandomOp(svar, (max/10 + 5));

    while(alt4 < 0)
      alt4 = this.RandomOp(svar, (max/10 + 5));
    while(alt3===alt4 || alt3<0)
      alt3 = this.RandomOp(svar, (max/10 + 5));
    while(alt2===alt4 || alt2===alt3 || alt2<0)
      alt2 = this.RandomOp(svar, (max/10 + 5));
    while(alt1===alt2 || alt1===alt3 || alt1===alt4 || alt1<0)
      alt1 = this.RandomOp(svar, (max/10 + 5));


  	let svarPlace = this.Random(4);
  	if(svarPlace === 1 ) {alt1 = svar;}
  	else if(svarPlace === 2) {alt2 = svar;}
  	else if(svarPlace === 3) {alt3 = svar;}
  	else {alt4 = svar;}
  	let facit = "alt" + svarPlace;
  			
  	
    return (
        <div id = "bakgrundsbildWater">
          <div id= "container">
            <button id = "abort" onClick={this.handleClick}> Abort Mission </button>
            <div id = "graphicsWaterUpg"><div id ="uppgift"> {term1} - {term2}</div></div>
            <button id = "alt1" className = "graphicsWaterAlt" onClick={(event) => {this.handleClick(event);}}>{alt1}</button>
            <button id = "alt2" className = "graphicsWaterAlt" onClick={(event) => {this.handleClick(event);}}>{alt2}</button>
            <button id = "alt3" className = "graphicsWaterAlt" onClick={(event) => {this.handleClick(event);}}>{alt3}</button>
            <button id = "alt4" className = "graphicsWaterAlt" onClick={(event) => {this.handleClick(event);}}>{alt4}</button>
            <p hidden ref="facit">{facit}</p>
          </div>
        </div>
        )

    /*return (
  		<div id= "vattenwrap">
      <button id = "abort" onClick={this.handleClick}> Abort Mission </button>
    	<div id ="uppgift"> {term1} - {term2}</div>
    	<button id = "alt1" className = "alternativ" onClick={this.handleClick}>{alt1}</button>
    	<button id = "alt2" className = "alternativ" onClick={() => { this.handleClick(); this.togglePopup() }}>{alt2}</button>
    	<button id = "alt3" className = "alternativ" onClick={function(event){this.handleClick(); this.togglePopup()}}>{alt3}</button>
    	<button id = "alt4" className = "alternativ" onClick={function(event){this.handleClick(); this.togglePopup()}}>{alt4}</button>
    	<p hidden ref="facit">{facit}</p>
    	</div>
    	);*/
  }

  render() {
    const test = <WaterRealm />;
    if (this.refs.facit && (this.state.selected === this.refs.facit.textContent)) {
      return (
        test
        ); 
    }
    else if (this.state.selected === "abort") {
      return (test);
    }
  	
    return (
      this.RandomUpg(30)
    	
      );
  }
}


UppgiftMinus.types = {
	//uppgiftTyp 
	// Difficulty
}

export default UppgiftMinus;