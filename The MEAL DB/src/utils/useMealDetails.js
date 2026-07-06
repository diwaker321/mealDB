import { useEffect, useState } from "react";
import { mealDetails_API } from "./constant";

const useMealDetails = (mealParams) => {
  const [meal, setmeal] = useState();
  
  const getMealDetails = async () => {
      const res = await fetch(`${mealDetails_API}${mealParams?.mealId}`);
      const data = await res.json();
    //   console.log("data: ", data?.meals[0]);
      setmeal(data?.meals[0]);
    };
  
    useEffect(() => {
      getMealDetails();
    }, []);
  

  return meal
};
export default useMealDetails;
