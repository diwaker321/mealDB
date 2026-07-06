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
          {/* <div className={`badge ${veg ? "badge-success" : "badge-error"}`}>
            {veg ? "Veg" : "Non Veg"}
          </div> */}
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

export default Rescard;