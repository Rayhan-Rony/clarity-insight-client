import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router";
import InputField from "../Components/InputField";
import Button from "../Components/Button";

const SignIn = () => {
  const { signInUser, googleSignIn, setUser } = useAuth();
  // const [showPassword, setShowPassword] = useState(false);
  // console.log(signUpUser);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(errors);
  const handleGoogleSignIn = () => {
    console.log("google");
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="  min-h-[calc(100vh-100px)]  flex justify-center items-center lg:m-0 md:m-6 m-2 ">
      <div className="w-full  lg:max-w-3/4">
        <div>
          <div className=" flex items-center justify-between bg-[#01257D] p-5 text-white font-bold rounded-t-md">
            <p>Sign In to Your Account</p>
            <Link to="/signUp">
              <p className="hover:underline hover:cursor-pointer">SIGN UP ?</p>
            </Link>
          </div>
          <div className="px-4 bg-[#e9edf6] font-semibold rounded-b-md py-8 ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6  justify-center "
            >
              {/* {...register("First name", { required: true, maxLength: 80 })} */}

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
                  // showPassword={showPassword}
                  // setShowPassword={setShowPassword}
                  placeholder="Enter Your Password"
                  others={{
                    ...register("password", {
                      required: "Password is required",
                    }),
                  }}
                ></InputField>
              </div>

              <div className="flex flex-col items-center justify-center">
                {/* <input
                className="btn"
                type="submit"
                value="Create Account and Continue"
              /> */}

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
