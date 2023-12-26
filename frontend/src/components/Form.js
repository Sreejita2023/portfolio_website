import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const schema = yup.object({
  name: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  company: yup.string().required("Department is not mentioned"),
  message: yup.string().required("Role is not mentioned"),
});




function Form() {


  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const { register, formState, handleSubmit, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const submitHandler = async (data) => {
    console.log("data get submit", data);
    console.log(`${process.env.REACT_APP_BASE_URL}/getinfo`);
    let result = await fetch("http://localhost:4000/api/v1/createinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    })
      .then((data) => {
        toast.success("Form is submitted", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(result);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);



  return (
    <div className="w-full flex flex-row justify-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-10/12 flex flex-col gap-y-4 items-center"
      >


        <label for="name" className="w-10/12">
          <input
            name="name"
            className=" w-full py-3 bg-white rounded-md border border-red-200 placeholder:text-orange-950 placeholder:text-opacity-60 placeholder:text-base placeholder:font-normal placeholder:font-['Epilogue'] placeholder:leading-loose px-3 focus:border-red-500 focus:outline-none focus:ring-red-500 focus:ring-1"
            type="text"
            placeholder="Your name..."
            {...register("name")}
          />
          <br />
          <p className=" text-sm  text-red-400 font-['Epilogue'] leading-loose px-3">
            {errors.name ? "*" : ""}
            {errors.name?.message}
          </p>
        </label>


        <label for="email" className="w-10/12">
          <input
            name="email"
            className=" w-full py-3 bg-white rounded-md border border-red-200 placeholder:text-orange-950 placeholder:text-opacity-60 placeholder:text-base placeholder:font-normal placeholder:font-['Epilogue'] placeholder:leading-loose px-3 focus:border-red-500 focus:outline-none focus:ring-red-500 focus:ring-1"
            type="text"
            placeholder="Your Email..."
            {...register("email")}
          />
          <br />
          <p className=" text-sm  text-red-400 font-['Epilogue'] leading-loose px-3">
            {errors.email ? "*" : ""}
            {errors.email?.message}
          </p>
        </label>


        <label for="company" className="w-10/12">
          <input
            name="company"
            className=" w-full py-3 bg-white rounded-md border border-red-200 placeholder:text-orange-950 placeholder:text-opacity-60 placeholder:text-base placeholder:font-normal placeholder:font-['Epilogue'] placeholder:leading-loose px-3 focus:border-red-500 focus:outline-none focus:ring-red-500 focus:ring-1"
            type="text"
            placeholder="Your Company..."
            {...register("company")}
          />
          <br />
          <p className=" text-sm  text-red-400 font-['Epilogue'] leading-loose px-3">
            {errors.company ? "*" : ""}
            {errors.company?.message}
          </p>
        </label>

        <label for="message" className="w-10/12">
          <textarea
            name="message"
            className=" w-full py-3 bg-white rounded-md border border-red-200 placeholder:text-orange-950 placeholder:text-opacity-60 placeholder:text-base placeholder:font-normal placeholder:font-['Epilogue'] placeholder:leading-loose px-3 focus:border-red-500 focus:outline-none focus:ring-red-500 focus:ring-1"
            type="text"
            placeholder="Your message..."
            {...register("message")}
          ></textarea>
          <br />
          <p className=" text-sm  text-red-400 font-['Epilogue'] leading-loose px-3">
            {errors.message ? "*" : ""}
            {errors.message?.message}
          </p>
        </label>

        <button className='bg-red-400 rounded-md text-center text-white text-sm font-black font-["Epilogue"] uppercase px-7 py-2'>
          Submit Now
        </button>
      </form>

      
    </div>
  );
}

export default Form;
