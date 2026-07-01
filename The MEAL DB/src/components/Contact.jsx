import React from 'react'
import Functioncontact from './Functioncontact'
import ContactClass from './ClassContact'

// const Contact = () => {

//   return (
//     <div>
//       <h1 className='text-2xl font-bold text-center'>Lets implement Class based component </h1>
//       {/* <Functioncontact name={'lastname'}/> */}
//       <hr />
//       <ContactClass />
      
//       {/* <ContactClass username={'diwaker'}/> */}
//     </div>
//   )
// }

class Contact extends React.Component{
  constructor(){
    super()
    console.log('parent constructor called');
  }

  componentDidMount(){
    console.log('parent  componentDidMount called'); 
    //api wale kam
  }

  render(){
    console.log(' parent render called');

    return(
      <>
      <div>parent contact</div>
      <ContactClass/>
      </>
    )
  }
}

export default Contact

// import React from "react";
// class Contact extends React.Component{
//   constructor(){
//     super()
//     console.log('parent constructor '); 
//   }

//   componentDidMount(){
//     console.log('parent component did mount');
    
//   }
//   render(){
//     console.log('parent render ');

//     return (
//     <div>
//       <p>this is Class component</p>
//       <ContactClass/>
//     </div>
//   )
//   }
// }

// export default Contact

