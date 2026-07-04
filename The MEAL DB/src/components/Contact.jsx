// import React from 'react'
// import Functioncontact from './Functioncontact'
// import ContactClass from './ClassContact'

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
//       </>
//     )
//   }
// }

// export default Contact

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

import React, { useRef, useState } from "react";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    const newErrors = {
      name: "",
      email: "",
      phone: "",
    };

    // Name Validation
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Email Validation
    if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone Validation
    if (phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(newErrors);

    // Agar koi error nahi hai
    if (
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.phone
    ) {
      console.log("Form Submitted Successfully");

      console.log({
        name,
        email,
        phone,
      });
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-5">

          <legend className="fieldset-legend text-lg">
            Contact Form
          </legend>

          {/* Name */}
          <label className="label">Name</label>
          <input
            ref={nameRef}
            type="text"
            className="input w-full"
            placeholder="Enter your name"
            onChange={() =>
              setErrors((prev) => ({
                ...prev,
                name: "",
              }))
            }
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name}
            </p>
          )}

          {/* Email */}
          <label className="label mt-2">Email</label>
          <input
            ref={emailRef}
            type="email"
            className="input w-full"
            placeholder="Enter your email"
            onChange={() =>
              setErrors((prev) => ({
                ...prev,
                email: "",
              }))
            }
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}

          {/* Phone */}
          <label className="label mt-2">Phone Number</label>
          <input
            ref={phoneRef}
            type="tel"
            className="input w-full"
            placeholder="Enter your phone number"
            onChange={() =>
              setErrors((prev) => ({
                ...prev,
                phone: "",
              }))
            }
          />

          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-primary mt-4"
          >
            Submit
          </button>

        </fieldset>
      </form>
    </div>
  );
};

export default Contact;
