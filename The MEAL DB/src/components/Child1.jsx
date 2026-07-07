import React, { useContext } from "react";
import userInfoContext from "../utils/userDataContext";
const Child1 = ({ text, setText }) => {
  const userinfo = useContext(userInfoContext)
  console.log(userinfo);
  

  return (
    <div>
      {/* <h1>Child1</h1> */}
      <h1>{userinfo?.firstname}</h1>

      <input
        type="text"
        placeholder="enter a value"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <br />
      <input type="text" value={userinfo?.firstname} onChange={(e)=>userinfo.setusername(e.target.value)} />
    </div>
  );
};

export default Child1;
