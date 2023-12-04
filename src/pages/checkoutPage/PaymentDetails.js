import { useEffect, useState } from "react";
import cashIcon from "../../assets/checkout/icon-cash-on-delivery.svg";

const ShippingInfo = ({ register }) => {
  const [paymentMethod, setPaymentMethod] = useState("eMoney");

  const handleSelect = (e) => {
    setPaymentMethod(e.target.value);
  };

  useEffect(() => {
    setPaymentMethod("eMoney");
  }, []);
  return (
    <section>
      <h4 className="mb-4 text-sm font-bold text-orange-300 uppercase font-manrope">
        payment details
      </h4>
      <div>
        <div className="flex flex-col gap-4 mb-4">
          <label htmlFor="address" className="text-sm font-bold capitalize">
            payment method
          </label>

          <div className="flex items-center gap-4 border-[1px] border-solid border-[#CFCFCF] rounded-lg  py-3 pl-6">
            <input
              type="radio"
              name="paymentMethod"
              id="eMoney"
              value="eMoney"
              checked={paymentMethod === "eMoney"}
              onChange={handleSelect}
            />
            <label htmlFor="eMoney">e-Money</label>
          </div>
          <div className="flex items-center gap-4 border-[1px] border-solid border-[#CFCFCF] rounded-lg  py-3 pl-6">
            <input
              type="radio"
              name="paymentMethod"
              id="cash"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={handleSelect}
            />
            <label htmlFor="cash">Cash on Delivery</label>
          </div>

          {paymentMethod === "eMoney" && (
            <div>
              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor="eNumber"
                  className="text-sm font-bold capitalize"
                >
                  e-money number
                </label>
                <input
                  type="text"
                  placeholder="238521993"
                  {...register("eNumber", {})}
                  className="border-[1px] border-solid border-[#CFCFCF] rounded-lg py-3 pl-6 focus:border-orange-100 focus:outline-none hover:border-orange-100"
                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="ePin" className="text-sm font-bold capitalize">
                  e-money pin
                </label>
                <input
                  type="number"
                  placeholder="6891"
                  {...register("ePin")}
                  className="border-[1px] border-solid border-[#CFCFCF] rounded-lg py-3 pl-6 focus:border-orange-100 focus:outline-none hover:border-orange-100"
                />
              </div>
            </div>
          )}
          {paymentMethod === "cash" && (
            <div>
              <div>
                <img src={cashIcon} alt="" />
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;
