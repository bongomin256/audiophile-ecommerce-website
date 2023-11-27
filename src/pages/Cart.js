import React from "react";
import ShoppingCart from "../components/Cart/ShoppingCart";

const Cart = ({ cart, setCart }) => {
  return <ShoppingCart cart={cart} setCart={setCart} />;
};

export default Cart;
