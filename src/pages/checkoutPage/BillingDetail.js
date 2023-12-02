// importing useform from react-hook-form
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const BillingDetail = () => {
  // invoking useform function
  const form = useForm();

  //   Destructuring the register method from useForm.
  const { register, control } = form; //use for tracking the form state

  // const { name, ref, onChange, onBlur } = register("username");

  return (
    <section>
      <h4>billing details</h4>
      <div>
        <div>
          <label htmlFor="username">name</label>
          <input type="text" {...register("username")} />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="phone">phone number</label>
          <input type="tel" {...register("phone")} />
        </div>
      </div>
      <DevTool control={control} />
    </section>
  );
};

export default BillingDetail;
