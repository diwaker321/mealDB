import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status , setStatus] = useState(true);
  const getonlinestatus = () => {
    window.addEventListener("offline", () => {
        setStatus(false)
    });

    window.addEventListener("online", () => {
        setStatus(true)
    });
  };
  useEffect(() => {
    getonlinestatus();
  }, []);

  return status
};
export default useOnlineStatus;
