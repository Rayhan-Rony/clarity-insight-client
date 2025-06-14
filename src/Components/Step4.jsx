import React from "react";
import { useFormContext } from "react-hook-form";
import useAuth from "../Hooks/useAuth";

const Step4 = () => {
  const { user } = useAuth();
  console.log(user);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  //   const {} = useForm();
  return (
    <div className="space-y-4">
      <div>
        <label className="flex flex-col gap-1">
          Email
          <input
            {...register("email")}
            readOnly
            className="input  focus:outline-none border-none w-full"
            type="text"
            defaultValue={user?.email}
          />
        </label>
      </div>
      <div>
        <label className="flex flex-col gap-1">
          User Name
          <input
            {...register("name")}
            readOnly
            className="input  focus:outline-none border-none w-full"
            type="text"
            defaultValue={user?.displayName}
          />
        </label>
      </div>
    </div>
  );
};

export default Step4;
