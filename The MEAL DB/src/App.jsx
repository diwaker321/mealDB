import { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import userInfoContext from "./utils/userDataContext";
function App() {
  //   const [userinfo, setuserinfo] = useState({
  //   firstname: "diwaker",
  //   lastname: "dwivedi",
  // });

  const [username, setusername] = useState(null);

  useEffect(() => {
    setusername("diwaker dwivedi");
  }, []);

  return (
    <userInfoContext.Provider value={{firstname:username , setusername}}>
    <>
      <Header />
      <Outlet />
    </>
    </userInfoContext.Provider>
  );
}

export default App;
