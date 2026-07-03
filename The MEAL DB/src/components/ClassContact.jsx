
// import {Component} from "react";
// class ContactClass extends React.Component{
//   constructor(){
//     super()
//     console.log('child constructor');

//   }
//   render(){
//     console.log('child render');

//     return (
//     <div>
//       <p>this is Class component</p>
//     </div>
//   )
//   }
// }

// // render aka mount aka load

// export default ContactClass

//state management

// class ContactClass extends Component{
//   render(){
//     return(
//       <div>
//         <h1>this is class based component</h1>
//       </div>
//     )
//   }
// }

// export default ContactClass




















// import React from "react";
// class ContactClass extends React.Component{
//     render(){
//         return(
//             <>
//                 <p>this is a class based component</p>
//             </>
//         )
//     }
// }

// export default ContactClass;

//how to make state in class

//this

//this.state.score + 1

// import React from "react";
// class ContactClass extends React.Component {
//   state = {
//     score: 0,
//     score2:0,
//   };
//   // setstate({
//   //   score: this.state.score + 1
//   // })
//   render() {

//     return (
//       <>
//         <p>this is a class based component</p>
//         <h1> state variable in class based componenet: {this.state.score}</h1>
//         <button className="btn" onClick={()=>{
//             this.setState({
//                 score:this.state.score+1 // this is how you can increment the values here
//             })
//         }}> Increase</button>

//         <button className="btn" onClick={()=>{
//             this.setState({
//                 score:this.state.score-1 // this is how you can increment the values here
//             })
//         }}> Decrease</button>
//       </>
//     );
//   }
// }

// export default ContactClass;


//how to use props in class based component 

//lifecycle and flow of class based compoment


// import React from "react";
// class ContactClass extends React.Component {

//     constructor(props){
//       console.log('child constructor called');
//         super(props)
//     }

//     componentDidMount(){
//     console.log('children  componentDidMount called'); 
//     //api wale kam
//   }

//   render() {
//       console.log(' child render called');

//     return (
//       <>
//         <p>this is a class based component</p>
//         {/* <h1>{this.props.name}</h1> */}
//       </>
//     );
//   }
// }

// export default ContactClass;

//update state 

import React from "react";

class ContactClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("child constructor called");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("child componentDidMount called");
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate called");
  }

  componentWillUnmount() {
    
    console.log("child componentWillUnmount called");
  }


  render() {
    console.log("child render called");
    const {count} = this.state

    return (
      <>
        <p>This is a class based component</p>

        <h1>Count: {count}</h1>

        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increase
        </button>
      </>
    );
  }
}

export default ContactClass;

