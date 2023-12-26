import React from "react";
import ShoppingCart from "../components/Cart/ShoppingCart";

const Cart = ({
  cart,
  setCart,
  // quantityCount,
  // setQuantityCount,
  // emptyCart,
}) => {
  return (
    <ShoppingCart
      cart={cart}
      setCart={setCart}
      // emptyCart={emptyCart}
      // quantityCount={quantityCount}
      // setQuantityCount={setQuantityCount}
    />
  );
};

export default Cart;
