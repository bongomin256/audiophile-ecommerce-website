import { useState } from "react";
import { Link } from "react-router-dom";
import Confirmation from "./Confirmation";

const Summary = ({ cart, totalPrice, toggleSuccessModal }) => {
  //   const summary = cart;
  //   console.log("Cart Summary:", summary);

  if (!cart) {
    return <p>Loading...</p>; // You can display a loading message or handle this case accordingly
  }
  return (
    <section>
      {cart.length > 0 && (
        <div>
          <h4 className="mb-4 text-base font-bold uppercase font-manrope">
            Summary
          </h4>
          {cart.map((product) => (
            <div key={product.name} className="flex justify-between mb-6">
              <div className="flex gap-4">
                <div>
                  <img
                    className="h-[64px] w-[64px] rounded-lg"
                    src={`./assets/cart/image-${product.slug}.jpg`}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold font-[Manrope] text-[#000000]">
                    {product.name.split(" ")[0]}
                  </h3>
                  <p className="text-base font-bold font-[Manrope] text-[#CFCFCF]">
                    $ {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-base font-bold font-[Manrope] text-[#CFCFCF]">
                  X{product.quantityCount}
                </p>
              </div>
            </div>
          ))}
          <div className="grid gap-2 mt-8">
            <div className="flex justify-between">
              <p className="text-base uppercase font-medium font-[Manrope] text-[#CFCFCF]">
                total
              </p>
              <p className="text-[18px] leading-6 uppercase font-bold font-[Manrope] text-[#000000]">
                $ {totalPrice(cart).toLocaleString()}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-base  uppercase font-medium font-[Manrope] text-[#CFCFCF]">
                shipping
              </p>
              <p className="text-[18px] leading-6 uppercase font-bold font-[Manrope] text-[#000000]">
                $ 50
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-base font-medium font-[Manrope] uppercase text-[#CFCFCF]">
                vat (included)
              </p>
              <p className="text-[18px] leading-6 uppercase font-bold font-[Manrope] text-[#000000]">
                $ {(totalPrice(cart) * 0.2).toFixed(2).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-6 mb-8">
            <p className="text-base font-medium font-[Manrope] uppercase text-[#CFCFCF]">
              Grand total
            </p>
            <p className="text-[18px] leading-6 uppercase font-bold font-[Manrope] text-[#D87D4A]">
              $ {(totalPrice(cart) + 50).toLocaleString()}
            </p>
          </div>
          {/* <Link to="/confirmation"> */}
          <button
            type="submit"
            onClick={toggleSuccessModal}
            className="w-full px-6 py-4 tracking-widest text-white uppercase transition-all duration-300 ease-in-out bg-orange-300 hover:bg-orange-100"
          >
            continue & pay
          </button>
          {/* </Link> */}
        </div>
      )}
    </section>
  );
};

export default Summary;
