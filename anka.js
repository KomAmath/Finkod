import React from 'react';
import './app.css';
import App from './app.js';

class Anka extends React.Component {
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
  	 const app = <App />;
  	 if (this.state.selected === "abort") {
      return app;
    }

    return (
    	<div className="wrapper2">
    	<div id="header2">
    	<button id = "abort" onClick={this.handleClick}> Tillbaka </button>
    	<div id="helpMe">
    			<div id="rubrik"> HJÄLP MIG! </div>
    			<p> Hejsan trogne krigare! <br />
    				Jag är matte-Ankan och jag är din nya kompanjon i det spännande landet Mattelandia! <br />
					Det här landet består av 4 mycket speciella platser; <br />
					Plus-Köping, Minus-holm, Gånger-borg och Del-landa. <br />
					På varje plats finns massa spännande uppgifter att lösa. <br />
					Klicka på någon av plats-knapparna för att komma igång. <br />
					Kom igen, det blir kul!
    			</p>
		</div>
		<div id="arrowDown"></div>
    	<div id="duckis"></div>
    	</div>
    	</div>
    	);
  }
}


Anka.types = {
	
}

export default Anka;