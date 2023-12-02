import React from "react";
import BillingDetails from "./BillingDetail";
import PaymentDetails from "./PaymentDetails";
import ShippingInfo from "./ShippingInfo";
import Summary from "./Summary";
import MainLayout from "../../components/Shared/Main/Main";
import { useNavigate } from "react-router-dom";

const CheckoutMain = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      {/* <div className="fixed top-0 bottom-0 left-0 right-0 w-full bg-[#00000055] "></div> */}
      {/* className="bg-[#00000055] h-screen w-screen z-[1000] px-5" */}
      <section className="px-8 md:px-16 lg:px-40 top-50 mb-[10rem]">
        <button className="py-5 " onClick={() => navigate(-1)}>
          <h3 className="capitalize ">go back</h3>
        </button>
        <form action="">
          <div>
            <h3>checkout</h3>
            <BillingDetails />
            <PaymentDetails />
            <ShippingInfo />
          </div>
          <div>
            <Summary />
          </div>
        </form>
      </section>
    </MainLayout>
  );
};

export default CheckoutMain;
