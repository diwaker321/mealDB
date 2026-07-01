import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { filter_API } from "../utils/constant";
import Categorycard from "./Categorycard";
import MealsCard from "./MealsCard";
import ShimmerUi from "./ShimmerUi";

const Categorymeals = () => {
  const [meals, setmeals] = useState();
  const [searchmeal, setsearchmeal] = useState();
  // console.log("meals: ", meals);
  const searchval = useRef();
  const categoryname = useParams();
  //   console.log("categoryname: ", categoryname.categoryname);

  const getMeal = async () => {
    const response = await fetch(`${filter_API}${categoryname.categoryname}`);
    const data = await response.json();
    // console.log("data: ", data.meals);
    setmeals(data?.meals);
    setsearchmeal(data?.meals);
  };

  const handleSearch = async () => {
    if(!searchval?.current?.value) return
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchval.current.value}`,
      );
      const data = await res.json();
      console.log("data: ", data);
      setsearchmeal(data?.meals);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchClose = () => {
    setsearchmeal(meals);
    searchval.current.value = "";
  };

  useEffect(() => {
    getMeal();
    // setmeals(res);
  }, []);

  if(!meals) return <ShimmerUi/>
  return (
    <div className="">
      <div className="searchbox flex items-center gap-2 ">
        <label className="input mt-4 ms-6">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            ref={searchval}
            type="search"
            required
            placeholder="Search Your meal"
          />
        </label>
        <button className="btn btn-outline mt-4 ms-3 " onClick={handleSearch}>
          Search
        </button>
        {searchval?.current?.value && (
          <>
            <button
              className="btn btn-outline btn-error mt-4 ms-3"
              onClick={handleSearchClose}
            >
              Close
            </button>
          </>
        )}
      </div>
      <div className="flex flex-wrap gap-4 justify-between items-center p-5">
        {searchmeal?.map((res) => {
          return (
            <Link
              key={res?.idMeal}
              to={`/mealdetails/${res?.strMeal}/${res?.idMeal}`}
            >
              {" "}
              <MealsCard category={res} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categorymeals;
