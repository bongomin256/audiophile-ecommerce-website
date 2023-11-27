import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../Shared/Main/Main";
import {
  ActionBtnCategorySolid,
  ActionButtonSolid,
} from "../Shared/ActionButtons";

const ShoppingCart = ({ cart, showCart, setShowCart }) => {
  const closeCart = () => {
    setShowCart(false);
  };
  console.log(cart);

  const totalPrice = (cart) => {
    let overallPrice = 0;
    cart.forEach((product) => {
      overallPrice += product.price * product.quantityCount;
      console.log(overallPrice);
    });
    return overallPrice;
  };

  //   const total = totalPrice(cart);
  //   console.log(total);

  return (
    <section className="mx-6 mt-6">
      {/* bg-[#00000055] fixed h-screen w-screen z-[1000] */}
      {showCart && (
        <>
          <div
            onClick={closeCart}
            className="fixed top-0 bottom-0 left-0 right-0 w-full bg-[#00000055] "
          ></div>

          <div className="p-4 fixed max-w-[327px] bg-white md:max-w-sm md:fixed md:right-16 lg:right-40 z-[1000]">
            {cart.length === 0 && (
              <div>
                <p>
                  Your Cart is currently empty, please continue shopping! Go
                  back to <Link to="/">homepage </Link>
                </p>
              </div>
            )}
            {cart.length > 0 && (
              <div className="">
                <div className="flex justify-between mb-5">
                  <p>
                    Cart (<span>{cart.length}</span>)
                  </p>
                  <button>Remove all</button>
                </div>
                {cart.map((product) => (
                  <div key={product.id} className="grid grid-cols-3 gap-3 mb-5">
                    {/* grid grid-cols-3 gap-3 flex items-center */}
                    <div className="">
                      {/* <img src={product.image.mobile} alt="" /> */}
                      <img
                        src={`./assets/cart/image-${product.slug}.jpg`}
                        alt=""
                      />
                    </div>
                    <div>
                      <h4>{product.name}</h4>
                      <p>$ {product.price.toLocaleString()}</p>
                    </div>
                    <div>
                      <button className="flex gap-5 px-4 py-2 bg-gray-30">
                        <span>-</span>
                        <div>{product.quantityCount}</div>
                        <span>+</span>
                      </button>
                    </div>

                    {/* <div>
                  <div>
                    <span>-</span>
                  </div>
                  <div>{product.quantityCount}</div>
                  <div>
                    <span>+</span>
                  </div>
                </div> */}
                  </div>
                ))}
                <div className="mt-8">
                  <div className="flex justify-between mb-5">
                    <p className="font-medium uppercase text-text-base">
                      total
                    </p>
                    <p className="text-red-600">
                      $ {totalPrice(cart).toLocaleString()}
                    </p>
                  </div>
                  <Link to="/checkout">
                    <button className="w-full px-6 py-4 tracking-widest text-white uppercase transition-all duration-300 ease-in-out bg-orange-300 hover:bg-orange-100">
                      checkout
                    </button>
                    {/* <ActionBtnCategorySolid>checkout</ActionBtnCategorySolid> */}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default ShoppingCart;
