import React, { useEffect, useState } from "react";
import { mealDetails_API } from "../utils/constant";
import { useParams } from "react-router-dom";
import useMealDetails from "../utils/useMealDetails";

const MealDetail = () => {
  // const [meal, setmeal] = useState();
  const mealParams = useParams();
  const meal = useMealDetails(mealParams)

  // const getMealDetails = async () => {
  //   const res = await fetch(`${mealDetails_API}${mealParams?.mealId}`);
  //   const data = await res.json();
  //   console.log("data: ", data?.meals[0]);
  //   setmeal(data?.meals[0]);
  // };

  // useEffect(() => {
  //   getMealDetails();
  // }, []);

  let ingredients = [];
  for (let i = 0; i < 20; i++) {
    let ingredient = meal?.[`strIngredient${i}`];
    let measure = meal?.[`strMeasure${i}`];
    
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ ingredient, measure });
    }
  }
  // console.log('ingredients: ', ingredients);

  return (
    <div className="mealDetails p-5">
      <div className="uppersection  flex items-center justify-around ">
        <div className="mealimg w-3/11 ">
          <p className="text-center font-semibold text-3xl pb-3">
            {mealParams?.mealname}
          </p>
          <img src={meal?.strMealThumb} className="w-90 rounded-xl" alt="" />
        </div>
        <div className="ingredients  w-7/11 ">
          <h1 className="text-center font-semibold text-3xl pb-3">
            Instructions
          </h1>
          <hr className="pb-3" />
          <p className="leading-8 font-semibold text-lg">
            {meal?.strInstructions}
          </p>
        </div>
      </div>

      <div className="midsection">
        <p className="text-center font-semibold text-2xl pt-6 pb-4">
          You will need the following ingredients:
        </p>
        <hr />
        <div className="flex flex-wrap justify-center items-center">
          {ingredients?.map((res) => {
            return (
              <>
                <div className="">
                  <img
                  className="w-60"
                    src={`https://www.themealdb.com/images/ingredients/${res?.ingredient}-medium.png`}
                    alt=""
                  />
                  <p className="text-center">{`${res?.ingredient} ${res?.measure}`}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
