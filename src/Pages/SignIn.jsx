import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import InputField from "../Components/InputField";
import Button from "../Components/Button";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser, googleSignIn, setUser } = useAuth();

  const location = useLocation();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state || "/");
        Swal.fire({
          title: "Sign In Successful",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.message}`,
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);

        navigate(location?.state || "/");
        Swal.fire({
          title: "Sign In Successful",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.message}`,
        });
      });
  };
  return (
    <div className="  min-h-[calc(100vh-100px)]  flex justify-center items-center lg:m-0 md:m-6 m-2 ">
      <div className="w-full  lg:max-w-3/4">
        <div>
          <div className=" flex items-center justify-between bg-[#01257D] p-5 text-white font-bold rounded-t-md">
            <p className="text-[#00FFFF]">Sign In to Your Account</p>
            <Link to="/signUp">
              <p className="hover:underline hover:cursor-pointer text-[#00FFFF]">
                SIGN UP ?
              </p>
            </Link>
          </div>
          <div className="px-4 bg-[#e9edf6] font-semibold rounded-b-md py-8 ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6  justify-center "
            >
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

              <div>
                <InputField
                  error={errors.password}
                  label="Password"
                  type="password"
                  placeholder="Enter Your Password"
                  others={{
                    ...register("password", {
                      required: "Password is required",
                    }),
                  }}
                ></InputField>
              </div>

              <div className="flex flex-col gap-2 items-center justify-center">
                <Button type="submit" text="Sign in and Continue"></Button>
                <div onClick={handleGoogleSignIn}>
                  <Button
                    type="button"
                    text="Sign in With Google"
                    google={true}
                  ></Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
