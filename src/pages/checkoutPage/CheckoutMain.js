// importing useform from react-hook-form
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import BillingDetails from "./BillingDetail";
import PaymentDetails from "./PaymentDetails";
import ShippingInfo from "./ShippingInfo";
import Summary from "./Summary";
import MainLayout from "../../components/Shared/Main/Main";
import { useNavigate } from "react-router-dom";

const CheckoutMain = ({ cart }) => {
  const navigate = useNavigate();
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  //   total price of the cart
  const totalPrice = (cart) => {
    let overallPrice = 0;
    cart.forEach((product) => {
      overallPrice += product.price * product.quantityCount;
      console.log(overallPrice);
    });
    return overallPrice;
  };
  return (
    <MainLayout>
      {/* <div className="fixed top-0 bottom-0 left-0 right-0 w-full bg-[#00000055] "></div> */}
      {/* className="bg-[#00000055] h-screen w-screen z-[1000] px-5" */}
      <section className="px-8 md:px-16 lg:px-40 top-50 mb-[10rem] bg-[#F1F1F1]">
        <button className="py-5 " onClick={() => navigate(-1)}>
          <h3 className="capitalize ">go back</h3>
        </button>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="p-6 bg-white"
          action=""
          noValidate
        >
          <div>
            <h3 className="mb-8 text-2xl font-bold uppercase">checkout</h3>
            <BillingDetails register={register} errors={errors} />
            <ShippingInfo register={register} errors={errors} />
            <PaymentDetails register={register} errors={errors} />
          </div>
          <div>
            <Summary cart={cart} totalPrice={totalPrice} />
          </div>
          {/* <button type="submit">submit</button> */}
        </form>
        <DevTool control={control} />
      </section>
    </MainLayout>
  );
};

export default CheckoutMain;
