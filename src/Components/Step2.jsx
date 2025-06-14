import React from "react";
import { useFormContext } from "react-hook-form";

const Step2 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  //   const {} = useForm();
  return (
    <div className="space-y-4">
      <div>
        <label className="flex flex-col gap-1">
          Select a Category
          <select
            {...register("category", { required: "Please Select a Category" })}
            className="input  focus:outline-none border-none w-full"
          >
            <option value="">Select a Category</option>
            <option value="Technology & Innovation">
              Technology & Innovation
            </option>
            <option value="Science & Research">Science & Research</option>
            <option value="Humanities & Arts">Humanities & Arts</option>
            <option value="Business & Economics">Business & Economics</option>
            <option value="Health & Medicine">Health & Medicine</option>
            <option value="Engineering & Design">Engineering & Design</option>
            <option value="Social Sciences">Social Sciences</option>
            <option value="Education & Pedagogy">Education & Pedagogy</option>
            <option value="Environmental Studies">Environmental Studies</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Literature & Writing">Literature & Writing</option>
            <option value="History & Culture">History & Culture</option>
            <option value="Philosophy & Ethics">Philosophy & Ethics</option>
            <option value="Career Development">Career Development</option>
            <option value="Personal Growth & Well-being">
              Personal Growth & Well-being
            </option>
            <option value="Computer Science">Computer Science</option>
            <option value="Data Science & AI">Data Science & AI</option>
            <option value="Fine Arts & Music">Fine Arts & Music</option>
            <option value="Architecture & Urban Planning">
              Architecture & Urban Planning
            </option>
            <option value="Law & Legal Studies">Law & Legal Studies</option>
            <option value="Psychology">Psychology</option>
            <option value="Astronomy & Space">Astronomy & Space</option>
            <option value="Biology & Life Sciences">
              Biology & Life Sciences
            </option>
            <option value="Chemistry">Chemistry</option>
            <option value="Physics">Physics</option>
            <option value="Sports Science">Sports Science</option>
            <option value="Journalism & Media">Journalism & Media</option>
            <option value="International Relations">
              International Relations
            </option>
            <option value="Culinary Arts">Culinary Arts</option>
            <option value="Gaming & Game Development">
              Gaming & Game Development
            </option>
            <option value="Programming">Programming</option>
          </select>
        </label>
        {errors.category && (
          <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
        )}
      </div>
      <div>
        <label className="flex flex-col gap-1">
          Add a Thumbnail Photo (Only hosted photo)
          <input
            {...register("photo", { required: "Photo URL is required" })}
            placeholder="Add a Photo URL"
            className="input  focus:outline-none border-none w-full"
            type="text"
          />
        </label>
        {errors.photo && (
          <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
        )}
      </div>
    </div>
  );
};

export default Step2;
