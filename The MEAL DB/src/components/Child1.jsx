import React, { useContext } from "react";
import userInfoContext from "../utils/userDataContext"
const Child1 = ({ text, setText }) => {
  const {firstname , setusername} = useContext(userInfoContext)
  // const userdata = useContext(userInfoContext)
  // console.log(userdata);
  
  // console.log(userName);
  

  // const userinfo = useContext(userInfoContext)
  // console.log(userinfo);
  

//  return(
//   <>
//   <h1>child1</h1>
//   <h1>value of text is :{text}</h1>
//   <input type="text" placeholder="enter the value of text"   />

//   </>
//  )
return(
  <>
  <h1>context section</h1>
  <h1>your username is : {firstname}</h1>
  <input type="text" placeholder="enter your firstname" value={firstname} onChange={(e)=>setusername(e.target.value)} />
  </>
)
 
  // return (
  //   <div>
  //     {/* <h1>Child1</h1> */}
  //     <h1>{userinfo?.firstname}</h1>

  //     <input
  //       type="text"
  //       placeholder="enter a value"
  //       value={text}
  //       onChange={(e) => setText(e.target.value)}
  //     />{" "}
  //     <br />
  //     <input type="text" value={userinfo?.firstname} onChange={(e)=>userinfo.setusername(e.target.value)} />
  //   </div>
  // );
};

export default Child1;
