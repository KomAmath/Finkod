import React, { Component } from 'react';
import types from './types.json';
import './app.css';



class TypeApp extends React.Component {
  render() {

    // const t = this.props.TypeInfo;

    // return <TypeInfo type={t}/>
    return(
      <div>
      <h1>En fin lista</h1>
       {/* {
          types.map((type) => {
            return (<TypeInfo key={type.id} type={type}/>);
          })
        }*/}
      </div>
    )
  }
}

// class TypeInfo extends React.Component {

// constructor(props) {
//   super(props);
//   this.state = {
//     visible: false
//   }
//   this.toggleVisibility = this.toggleVisibility.bind(this); // See (*)
// }

// toggleVisibility() {
//   this.setState({
//     visible: !this.state.visible
//   });
// }

//   render() {
//   if (this.state.visible) {
//     return (<div>
//         <h2>{this.props.type.name}</h2>       
//         <MoreTypeInfo type={this.props.type}/>
//         <button onClick={this.toggleVisibility}>Show less</button>
//       </div>);
//   } else {
//     return (<div>
//       <h2>{this.props.type.name}</h2>   
//       <button onClick={this.toggleVisibility}>Show more</button>
//       </div>);
//   }

//   }
// }

// class MoreTypeInfo extends React.Component {
//   render() {
//   return (<div>
//     <p key={this.props.type.id}>Literal description: {this.props.type.literalDescription}</p>
//     <p key={this.props.type.id}>Literal example: {this.props.type.literalExample}</p>
//     </div>)
//   }
// }

// key={this.props.type.id}

  //    console.log(types);
  //   return (
  //     <div>
  //       <h1>En fin lista</h1>

  //       {

  //         types.map((type) => {
  //           return (<TypeInfo key={type.id} type={type}/>);
  //           }
  //         ) 
  //       }
  //     </div>
  //   );
  // }


export default TypeApp;
