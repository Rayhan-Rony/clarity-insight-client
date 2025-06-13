import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const InputField = ({
  placeholder,
  type,
  others,
  label,
  error,
  // showPassword,
  // setShowPassword,
}) => {
  console.log(typeof placeholder);
  return (
    <div className="relative">
      <label className="grid lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-2 items-center ">
        {label}
        <input
          className="input focus:outline-none border-none"
          type={type}
          placeholder={placeholder}
          {...others}
        />
        {error && (
          <p className="text-yellow-500 font-semibold">
            {error.message || "Enter a valid email"}
          </p>
        )}
      </label>
      {/* <span
        onClick={() => setShowPassword(!showPassword)}
        className="absolute top-3 right-0 "
      >
        {showPassword && placeholder === "Enter Your Password" ? (
          <FaRegEye></FaRegEye>
        ) : (
          <FaRegEyeSlash></FaRegEyeSlash>
        )}
      </span> */}
    </div>
  );
};

export default InputField;
