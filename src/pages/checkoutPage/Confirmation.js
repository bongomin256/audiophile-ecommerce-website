import React from "react";
import orderConfirmationIcon from "../../assets/checkout/icon-order-confirmation.svg";

import { Link } from "react-router-dom";

const Confirmation = ({
  cart,
  setCart,
  totalPrice,
  successModal,
  closeSuccessModal,
}) => {
  const firstItemInCart = cart[0];
  console.log("First Item:", firstItemInCart);

  // REMOVING SCROLLING
  if (successModal) {
    document.body.classList.add("active__modal");
  } else {
    document.body.classList.remove("active__modal");
  }
  // const emptyCart = setCart([]);
  return (
    <>
      <section>
        <div
          onClick={closeSuccessModal}
          className="fixed top-0 bottom-0 left-0 right-0 w-full bg-[#00000055] "
        ></div>
        <div className="scroll__modal fixed  top-56 m-auto right-6 left-6 overflow-y-auto bg-white max-w-[327px] md:max-w-[540px] md:max-h-[581px] md:w-full md:top-[222px] md:m-auto max-h-[600px]  p-8 md:p-12 rounded-lg">
          {/* max-h-[600px] h-full */}
          <div className="overflow-y-scroll">
            <div>
              <img
                className="w-16 h-16 mb-6"
                src={orderConfirmationIcon}
                alt=""
              />
              <h3 className="text-[24px] leading-7 font-bold uppercase font-manrope">
                thank you <br />
                for your order
              </h3>
            </div>
            <p className="text-[15px] leading-6 mb-6 mt-4">
              You will receive an email confirmation shortly.
            </p>
            <div className="mb-6 md:flex md:max-w-[444px] md:w-full">
              <div className="bg-[#F1F1F1] px-6 py-6 rounded-t-lg md:w-[246px] md:rounded-l-lg md:rounded-tr-none">
                <div>
                  <div className="flex justify-between lg:mb-6 ">
                    <div className="flex gap-3">
                      <div>
                        <img
                          // h-[32px] w-[28px]
                          className="h-[50px] w-[50px] rounded-lg"
                          src={`./assets/cart/image-${firstItemInCart.slug}.jpg`}
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="text-base  font-bold font-[Manrope] text-[#000000]">
                          {firstItemInCart.name.split(" ")[0]}
                        </h3>
                        <p className="text-base font-bold font-[Manrope] text-[#CFCFCF]">
                          $ {firstItemInCart.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-base font-bold font-[Manrope] text-[#CFCFCF]">
                        X{firstItemInCart.quantityCount}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-3 h-[1px]" />
                {cart.length > 1 && (
                  <div>
                    <p className="font-bold text-[12px] leading-[16px] text-center font-[Manrope]">
                      {" "}
                      and {cart.length - 1} other item(s)
                    </p>
                  </div>
                )}
              </div>
              <div className="pl-6 pt-[15px] pb-5  bg-black rounded-b-lg md:w-[198px] md:rounded-b-none md:rounded-tr-lg md:rounded-br-lg md:pt-10">
                <p className="text-base font-medium font-[Manrope] uppercase text-[#CFCFCF] mb-2  ">
                  Grand total
                </p>
                <p className="text-[18px] leading-6 uppercase font-bold font-[Manrope] text-white">
                  $ {(totalPrice(cart) + 50).toLocaleString()}
                </p>
              </div>
            </div>
            <Link to="/">
              <button
                onClick={() => setCart([])}
                className="w-full px-6 py-4 tracking-widest text-white uppercase transition-all duration-300 ease-in-out bg-orange-300 hover:bg-orange-100"
              >
                back to home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Confirmation;
