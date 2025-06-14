import React from "react";
import { useFormContext } from "react-hook-form";
import InputField from "./InputField";

const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <div className="space-y-4">
        <div>
          <label className="flex flex-col gap-1">
            Title
            <input
              {...register("title", { required: "Title is required" })}
              placeholder="Add a Title"
              className="input  focus:outline-none border-none w-full"
              type="text"
            />
          </label>
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* <div>
          <input
            {...register("content")}
            placeholder="Add Your Insights in Detail"
            className="input  focus:outline-none border-none"
          />
        </div> */}
        <div>
          <label className="flex flex-col gap-1">
            Your Insights
            <textarea
              {...register("content", { required: "Insights is required" })}
              //   rows="20"
              //   cols="90"
              className="input  focus:outline-none border-none p-4 w-full resize-y min-h-[300px] whitespace-normal"
              placeholder="Add Your Insights in Detail Here"
            ></textarea>
          </label>
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step1;
