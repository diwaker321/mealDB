import React, { useEffect, useState } from "react";
import Categorycard from "./Categorycard";
import { Category_API } from "../utils/constant";
import { Link } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [category, setCategory] = useState();
  console.log('category: ', category);
  const getcategory = async () => {
    const jsonres = await fetch(Category_API);
    const data = await jsonres.json();
    setCategory(data?.categories);
  };

  useEffect(() => {
    getcategory();
  }, []);

  if(!category) return <ShimmerUi/>
  return (
    <div className="bodySection">
      <h1 className="text-4xl font-extrabold text-center p-5">
        Select Your Category
      </h1>
      <div className="categoryCardsection flex items-center justify-center flex-wrap gap-3">
        {category?.map((res) => {
          return (
            <Link key={res?.idCategory} to={`/category/${res?.strCategory}`}><Categorycard  category={res} /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
