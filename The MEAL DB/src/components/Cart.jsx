import React from "react";
import { res } from "../utils/constant";
import Rescard, { withNonVegLabel } from "./Rescard";
const NonvegCard = withNonVegLabel(Rescard);

const Cart = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-5">
      {res.map((data) =>
        data.veg ? (
          <Rescard key={data.idMeal} resdata={data} />
        ) : (
          <NonvegCard key={data.idMeal} resdata={data} />
        ),
      )}
    </div>
  );
};

export default Cart;
