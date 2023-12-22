// importing useform from react-hook-form
// import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";

const BillingDetail = ({ register, errors }) => {
  // invoking useform function
  //   const form = useForm();

  //   Destructuring the register method from useForm.
  //   const { register, control } = form; //use for tracking the form state

  // const { name, ref, onChange, onBlur } = register("username");

  return (
    <section>
      <h4 className="mb-4 text-sm font-bold text-orange-300 uppercase font-manrope">
        billing details
      </h4>
      <div>
        {/* className="md:flex-col md:flex-wrap md:justify-between md:flex" */}
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="username" className="text-sm font-bold capitalize">
            name
          </label>
          <input
            className="border-[1px] border-solid border-[#CFCFCF] rounded-lg py-3 pl-6 focus:border-orange-100 focus:outline-none hover:border-orange-100"
            type="text"
            placeholder="Alexei Ward"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          <p className="text-[#CD2C2C]">{errors.username?.message}</p>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email" className="text-sm font-bold capitalize">
            email address
          </label>
          <input
            className="border-[1px] border-solid border-[#CFCFCF] rounded-lg py-3 pl-6 focus:border-orange-100 focus:outline-none hover:border-orange-100"
            type="email"
            placeholder="alexei@mail.com"
            {...register("email", {
              //   pattern: {
              //     value:
              //       /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+(?:\.[a-zA-Z0-9-]+)*$/,
              //     message: "Invalid email format",
              //   },
              //   required: true,
            })}
          />
          <p className="text-[#CD2C2C]">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="phone" className="text-sm font-bold capitalize">
            phone number
          </label>
          <input
            className="border-[1px] border-solid border-[#CFCFCF] rounded-lg py-3 pl-6 focus:border-orange-100 focus:outline-none hover:border-orange-100"
            type="tel"
            placeholder="+1 202-555-0136"
            {...register("phone")}
          />
          <p className="text-[#CD2C2C]">{errors.phone?.message}</p>
        </div>
      </div>
      {/* <DevTool control={control} /> */}
    </section>
  );
};

export default BillingDetail;
