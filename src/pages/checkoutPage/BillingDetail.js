// importing useform from react-hook-form
import { useForm } from "react-hook-form";

const BillingDetail = () => {
  // invoking useform function
  const form = useForm();
  return (
    <section>
      <h4>billing details</h4>
      <div>
        <form action="">
          <div>
            <label htmlFor="username">name</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label htmlFor="phone">phone number</label>
            <input type="tel" name="phone" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default BillingDetail;
