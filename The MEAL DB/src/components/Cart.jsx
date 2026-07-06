import React from "react";
import { res } from "../utils/constant";
import Rescard from "./Rescard";

const Cart = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-5">
      {res.map((data) => (
        <Rescard key={data.idMeal} resdata={data} />
      ))}
    </div>
  );
};

export default Cart;