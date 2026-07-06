import { useEffect, useState } from "react";
import { Category_API } from "./constant";

const useFetch = () => {
  const [category, setCategory] = useState();
  const getCategory = async () => {
    const jsonres = await fetch(Category_API);
    const data = await jsonres.json();
    setCategory(data?.categories);
};
useEffect(() => {
    getCategory();
}, []);
return category;
};

export default useFetch;


