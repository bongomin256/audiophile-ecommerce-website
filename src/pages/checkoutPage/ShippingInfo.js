import React from "react";

const PaymentDetails = ({ register }) => {
  return (
    <section>
      <h4 className="mb-4 text-sm font-bold text-orange-300 uppercase font-manrope">
        shipping info
      </h4>
      <div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="address" className="text-sm font-bold capitalize">
            your address
          </label>
          <input
            className="border-[1px] border-solid border-[#CFCFCF] rounded-lg py-3 pl-6 focus:border-orange-100 focus:outline-none hover:border-orange-100"
            type="text"
            placeholder="1137 Williams Avenue"
            {...register("address")}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="zipCode" className="text-sm font-bold capitalize">
            zip code
          </label>
          <input
            className="border-[1px] border-solid border-[#CFCFCF] rounded-lg py-3 pl-6 focus:border-orange-100 focus:outline-none hover:border-orange-100"
            type="number"
            placeholder="10001"
            {...register("zipCode")}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="city" className="text-sm font-bold capitalize">
            city
          </label>
          <input
            type="text"
            placeholder="New York"
            {...register("city")}
            className="border-[1px] border-solid border-[#CFCFCF] rounded-lg py-3 pl-6 focus:border-orange-100 focus:outline-none hover:border-orange-100"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="country" className="text-sm font-bold capitalize">
            country
          </label>
          <input
            className="border-[1px] border-solid border-[#CFCFCF] rounded-lg py-3 pl-6 focus:border-orange-100 focus:outline-none hover:border-orange-100"
            type="text"
            placeholder="New York"
            {...register("country")}
          />
        </div>
      </div>
      {/* <DevTool control={control} /> */}
    </section>
  );
};

export default PaymentDetails;
