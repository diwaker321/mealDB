import React from "react";

const Rescard = ({ resdata }) => {
  const {
    strMeal,
    strMealThumb,
    strArea,
    strCountry,
    rating,
    veg,
  } = resdata;

  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure>
        <img
          src={strMealThumb}
          alt={strMeal}
          className="h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {strMeal}
        </h2>

        <p>
          <strong>Area:</strong> {strArea}
        </p>

        <p>
          <strong>Country:</strong> {strCountry}
        </p>

        <div className="card-actions justify-between items-center mt-2">
          <div className="badge badge-warning">
             {rating}
          </div>

          <div className="badge badge-outline">
            {strCountry}
          </div>
        </div>
      </div>
    </div>
  );
};

export const withNonVegLabel = (Rescard)=>{
    return (props)=>{
        return(
            <div className="relative">
            <h1 className="absolute z-10 text-white top-42 left-4 bg-black p-2  text-2xl">Nonveg</h1>
            <Rescard {...props}/>
            </div>
        )
    }

}

export default Rescard;