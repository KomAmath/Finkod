import React from 'react';
import './uppgift.css';
import AirRealm from './airrealm.js';
import PopUp from './popup.js';
import './popup.css';
import './uppgift.css';

class UppgiftDiv extends React.Component {
constructor() {
    super();
    this.state = {
      selected: null,
      showPopup: null,
      triesCounter: 0,
      rightsCounter: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }
  handleClick(input) {
      //if (this.refs.facit && (this.state.selected === this.refs.facit.textContent)) {
       this.togglePopup();
        this.triesCounterIncrement();
        if (this.refs.facit && (input.target.id === this.refs.facit.textContent)) {
          this.rightsCounterIncrement();
        }
     //}
     //}
      //console.log(this.state.showPopup);
      this.setState({
        selected: input.target.id
        //showPopup: false
      })
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  triesCounterIncrement() {
      this.setState({
        triesCounter: this.state.triesCounter + 1
      })
  }

  rightsCounterIncrement() {

    //if(this.refs.facit && (this.state.selected === this.refs.facit.textContent)){
      this.setState({
        rightsCounter: this.state.rightsCounter + 1
      })
    //}
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
        term1 = this.Random(max);
        term2 = this.Random(max);
        svar = term1 / term2;
        let reminder = term1 % term2;
        if (reminder === 0 && term1 !== term2 && term2 !== 1) {
          validate = true;
        }
    }

  	let alt1 = this.RandomOp(svar, (max/10 + 5));
  	let alt2 = this.RandomOp(svar, (max/10 + 5));
  	let alt3 = this.RandomOp(svar, (max/10 + 5));
  	let alt4 = this.RandomOp(svar, (max/10 + 5));


    while(alt4 < 1)
      alt4 = this.RandomOp(svar, (max/10 + 5));
    while(alt3===alt4 || alt3<1)
      alt3 = this.RandomOp(svar, (max/10 + 5));
    while(alt2===alt4 || alt2===alt3 || alt2<1)
      alt2 = this.RandomOp(svar, (max/10 + 5));
    while(alt1===alt2 || alt1===alt3 || alt1===alt4 || alt1<1)
      alt1 = this.RandomOp(svar, (max/10 + 5));


  	let svarPlace = this.Random(4);
  	if(svarPlace === 1 ) {alt1 = svar;}
  	else if(svarPlace === 2) {alt2 = svar;}
  	else if(svarPlace === 3) {alt3 = svar;}
  	else {alt4 = svar;}
  	let facit = "alt" + svarPlace;
  		
return (
      <div id = "bakgrundsbildAir">
        <div id= "container">
          <button id = "abort" onClick={this.handleClick}> Tillbaka </button>
          <div id = "graphicsAirUpg"><div id ="uppgift"> Vad är <br /> {term1} / {term2} ? </div></div>
          <button id = "alt1" ref = "alt1" className = "graphicsAirAlt" onClick={(event) => {this.handleClick(event);}}>{alt1}</button>
          <button id = "alt2" ref = "alt2" className = "graphicsAirAlt" onClick={(event) => {this.handleClick(event);}}>{alt2}</button>
          <button id = "alt3" ref = "alt3" className = "graphicsAirAlt" onClick={(event) => {this.handleClick(event);}}>{alt3}</button>
          <button id = "alt4" ref = "alt4" className = "graphicsAirAlt" onClick={(event) => {this.handleClick(event);}}>{alt4}</button>
          <p hidden ref="facit">{facit}</p>
        </div>
      </div>
      )
  }

   render() {
    const test = <AirRealm />;

    if(this.state.triesCounter === 6) {
      return (test)
    }
    
    if (this.state.triesCounter === 5) {
      return (
        <div>
        {      
          console.log(this.state.triesCounter)
        }
        { 
          <PopUp
            text={'Bra jobbat! Resultat: ' + this.state.rightsCounter + ' av ' + this.state.triesCounter}
            back={this.togglePopup}
            closePopup={this.handleClick}
          />
         

        }
        {
          this.RandomUpg(20)
        }
        </div>
        )
    }

    console.log(this.state.showPopup)
    if (this.refs.facit && (this.state.selected === this.refs.facit.textContent)) {
      return (
        <div>
        {
          console.log(this.state.showPopup)
        }
        {this.state.showPopup ? 
          <PopUp
            text='Rätt svar, bra jobbat!'
            back={this.togglePopup}
            closePopup={this.togglePopup}
          />
          : null

        }
        {
          console.log(this.state.showPopup)
        }
        {
          console.log(this.state.selected)
        }
        {
          console.log(this.refs.facit.textContent)
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
    else if (this.refs.facit && ((this.state.selected !== this.refs.facit.textContent))){
      let rightanswer = "";
      if(this.refs.facit.textContent === "alt1"){
        rightanswer = this.refs.alt1.textContent;
      } else if(this.refs.facit.textContent === "alt2") {
        rightanswer = this.refs.alt2.textContent;
      } else if(this.refs.facit.textContent === "alt3") {
        rightanswer = this.refs.alt3.textContent;
      } else {
        rightanswer = this.refs.alt4.textContent;
      }
        return(
        <div>
       {this.state.showPopup ? 
          <PopUp
            text={'Fel svar. Rätt svar är ' + rightanswer}
            back={this.togglePopup}
            closePopup={this.togglePopup}
          /> : null
        }
        {
          
          this.RandomUpg(20)
        }
      </div>
        ); 
    }
    return (
      this.RandomUpg(20)
      );
  }
}


UppgiftDiv.types = {
	//uppgiftTyp 
	// Difficulty
}

export default UppgiftDiv;