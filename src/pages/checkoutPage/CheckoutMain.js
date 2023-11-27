import React from "react";
import BillingDetails from "./BillingDetail";
import PaymentDetails from "./PaymentDetails";
import ShippingInfo from "./ShippingInfo";
import Summary from "./Summary";
import MainLayout from "../../components/Shared/Main/Main";

const CheckoutMain = () => {
  return (
    <MainLayout>
      <div className="fixed top-0 bottom-0 left-0 right-0 w-full bg-[#00000055] "></div>
      {/* className="bg-[#00000055] h-screen w-screen z-[1000] px-5" */}
      <h3>go back</h3>
      <div>
        <BillingDetails />
        <PaymentDetails />
        <ShippingInfo />
      </div>
      <div>
        <Summary />
      </div>
    </MainLayout>
  );
};

export default CheckoutMain;
