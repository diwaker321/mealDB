// import React from 'react'
// import Functioncontact from './Functioncontact'
// import ContactClass from './ClassContact'

// class Contact extends React.Component{
//   constructor(){
//     super()
//     console.log('parent constructor called');
//   }

//   componentDidMount(){
//     console.log('parent  componentDidMount called'); 
//     //api wale kam
//   }

//   render(){
//     console.log(' parent render called');

//     return(
//       <>
//       <div>parent contact</div>
//       <ContactClass/>
//       {/* <ContactClass/> */}
//       </>
//     )
//   }
// }

// export default Contact


import React, { useRef, useState } from "react";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    const newErrors = {};

    // Name validation
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation
    if (phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    console.log(newErrors);
    setErrors(newErrors);
    

    // Agar koi error nahi hai
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted");
      console.log({ name, email, phone });
    }
  };

  return (
    <div className="flex justify-center p-10">
      {/* <h1>Contact Section</h1> */}

      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

          <legend className="fieldset-legend text-2xl">
            Contact Form
          </legend>

          {/* Name */}
          <label className="label">Name</label>
          <input
            ref={nameRef}
            type="text"
            className="input"
            placeholder="Enter your name"
          />

          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name}
            </p>
          )}

          {/* Email */}
          <label className="label">Email</label>
          <input
            ref={emailRef}
            type="email"
            className="input"
            placeholder="Enter your email"
          />

          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email}
            </p>
          )}

          {/* Phone */}
          <label className="label">Phone Number</label>
          <input
            ref={phoneRef}
            type="tel"
            className="input"
            placeholder="Enter your phone number"
          />

          {errors.phone && (
            <p className="text-red-500 text-sm">
              {errors.phone}
            </p>
          )}

          <button className="btn btn-primary mt-4">
            Submit
          </button>

        </fieldset>
      </form>
    </div>
  );
};

export default Contact;
