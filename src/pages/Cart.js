import React from "react";
import ShoppingCart from "../components/Cart/ShoppingCart";

const Cart = ({ cart, setCart, emptyCart }) => {
  return <ShoppingCart cart={cart} setCart={setCart} emptyCart={emptyCart} />;
};

export default Cart;
