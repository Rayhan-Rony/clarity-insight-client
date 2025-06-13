import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../Components/InputField";
import Button from "../Components/Button";
import useAuth from "../Hooks/useAuth";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  const { signUpUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  // console.log(signUpUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    console.log(email, password);
    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(errors);
  return (
    <div className="  min-h-[calc(100vh-100px)]  flex justify-center items-center lg:m-0 md:m-6 m-2 ">
      <div className="w-full  lg:max-w-3/4">
        <div>
          <div className=" flex items-center justify-between bg-[#01257D] p-5 text-white font-bold rounded-t-md">
            <p>Create An Account</p>
            <p className="hover:underline hover:cursor-pointer">SIGN IN ?</p>
          </div>
          <div className="px-4 bg-[#e9edf6] font-semibold rounded-b-md py-8 ">
            <p className="pb-6">
              New to Clarity Insights? Quickly sign up for an account now.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6  justify-center "
            >
              {/* {...register("First name", { required: true, maxLength: 80 })} */}
              <InputField
                error={errors.fullName}
                label="Full Name"
                type="text"
                placeholder="Enter Your Full Name"
                others={{
                  ...register("fullName", {
                    required: "Name is required",
                    maxLength: 100,
                  }),
                }}
              ></InputField>
              <InputField
                error={errors.email}
                label="Email"
                type="text"
                placeholder="Enter Your Email"
                others={{
                  ...register("email", {
                    required: "Email is required",
                    pattern: /^\S+@\S+$/i,
                  }),
                }}
              ></InputField>
              <p>
                All new passwords must contain at least 6 characters, at least
                one capital and one lower-case letter (Aa-Zz).
              </p>
              <div className=" relative">
                <InputField
                  error={errors.password}
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  others={{
                    ...register("password", {
                      required: "Password is required",
                    }),
                  }}
                ></InputField>
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 left-[calc(1/2*113%)]"
                >
                  {showPassword ? (
                    <FaRegEye></FaRegEye>
                  ) : (
                    <FaRegEyeSlash></FaRegEyeSlash>
                  )}
                </span>
              </div>

              <InputField
                error={errors.photo}
                label="Photo URL"
                type="text"
                placeholder="Enter Your Photo Url"
                others={{
                  ...register("photo", { required: "Photo URL is required" }),
                }}
              ></InputField>

              <div className="flex justify-center">
                {/* <input
                className="btn"
                type="submit"
                value="Create Account and Continue"
              /> */}
                <Button type="submit"></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
