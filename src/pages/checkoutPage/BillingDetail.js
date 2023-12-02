// importing useform from react-hook-form
import { useForm } from "react-hook-form";

const BillingDetail = () => {
  // invoking useform function
  const form = useForm();

  //   Destructuring the register method from useForm.
  const { register } = form; //use for tracking the form state

  // const { name, ref, onChange, onBlur } = register("username");

  return (
    <section>
      <h4>billing details</h4>
      <div>
        <form action="">
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
        </form>
      </div>
    </section>
  );
};

export default BillingDetail;
