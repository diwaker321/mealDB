import React from "react";

const MealsCard = (res) => {
    const {strMealThumb , strMeal , strCountry , rating} = res?.category

  return (
    <div  className=" rounded-2xl w-72 p-2 flex flex-col items-center bg-gray-100  cursor-pointer hover:shadow-md transition-all duration-150 ease-linear">
      <img src={strMealThumb} className="w-40 rounded-2xl" alt="" />
      <p className="text-center text-md font-bold w-[100%] p-2 overflow-hidden text-ellipsis whitespace-nowrap ">{strMeal}</p>
      <p>{rating}</p>
    </div>
  );
};

export default MealsCard;
