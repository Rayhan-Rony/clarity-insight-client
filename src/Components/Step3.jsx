import React from "react";
import { useFormContext } from "react-hook-form";

const Step3 = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();
  const currentTags = watch("tags", []); // Watch the 'tags' field, default to empty array

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const date = new Date().toLocaleDateString("en-US", options);

  const formattedDate = (currentDate) => {
    const formatDate = currentDate.split(",").join("").split(" ");

    const day = formatDate[1];
    const month = formatDate[0];
    const year = formatDate[2];
    return `${day} ${month} ${year}`;
  };

  const handleAddTag = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault(); // Prevent form submission or comma from typing
      const newTag = e.target.value.trim();
      if (newTag && !currentTags.includes(newTag)) {
        // Add if not empty and not a duplicate
        setValue("tags", [...currentTags, newTag]);
        e.target.value = "";
      }
    }
  };
  const handleRemoveTag = (tagToRemove) => {
    setValue(
      "tags",
      currentTags.filter((tag) => tag !== tagToRemove)
    );
  };
  return (
    <div className="space-y-4">
      <div>
        <label className="flex flex-col gap-1">
          Current Date
          <input
            {...register("date", { required: "Date is required" })}
            type="text"
            readOnly
            defaultValue={formattedDate(date)}
            className="input  focus:outline-none border-none w-full"
          />
        </label>
        {errors.category && (
          <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
        )}
      </div>
      <div>
        <label className="flex flex-col gap-1">
          Tags (Separate with Enter or Comma)
          <input
            type="text"
            className="input  focus:outline-none border-none w-full"
            placeholder="e.g., React, AI, Education"
            onKeyDown={handleAddTag}
          />
        </label>

        <input
          type="hidden"
          {...register("tags", {
            validate: (value) =>
              (value && value.length > 0) || "Please add at least one tag.",
          })}
        />
        {errors.tags && currentTags.length === 0 && (
          <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>
        )}
        <div className="mt-2 flex flex-wrap gap-2">
          {Array.isArray(currentTags) &&
            currentTags.map((tag) => (
              <span
                key={tag}
                className="flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-blue-200 transition-colors"
                onClick={() => handleRemoveTag(tag)}
              >
                {tag}
                <svg
                  className="ml-2 w-3 h-3 text-blue-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Step3;
