import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../Shared/Main/Main";

const ShoppingCart = ({ cart }) => {
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
    <section className="bg-[#00000055] fixed  h-screen w-screen z-[1000] px-5">
      <div className="p-4 bg-white">
        {cart.length === 0 && (
          <div>
            <p>
              Your Cart is currently empty, please continue shopping! Go back to{" "}
              <Link to="/">homepage </Link>
            </p>
          </div>
        )}
        {cart.length > 0 && (
          <div className="">
            <div className="flex justify-between ">
              <p>
                Cart (<span>{cart.length}</span>)
              </p>
              <button>remove all</button>
            </div>
            {cart.map((product) => (
              <div key={product.id} className="grid grid-cols-3">
                <div>
                  {/* <img src={product.image.mobile} alt="" /> */}
                  <img src={`./assets/cart/image-${product.slug}.jpg`} alt="" />
                </div>
                <div>
                  <h4>{product.name}</h4>
                  <p>$ {product.price.toLocaleString()}</p>
                </div>
                <div>
                  <div>
                    <span>-</span>
                  </div>
                  <div>{product.quantityCount}</div>
                  <div>
                    <span>+</span>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <p className="text-red-600">total</p>
              <p className="text-red-600">
                $ {totalPrice(cart).toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShoppingCart;
