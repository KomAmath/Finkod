
import React, { Component } from 'react';
import './app.css';

 class TypeApp extends React.Component {
 render() {

    return(
       <div className="fire">

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
        <button type="button" className="lvl"> 1 </button>
        </div>

       </div>
      )
  }
}



export default TypeApp;

