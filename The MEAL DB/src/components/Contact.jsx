import React from 'react'
import Functioncontact from './Functioncontact'
import ContactClass from './ClassContact'

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
      {/* <ContactClass/> */}
      </>
    )
  }
}

export default Contact

