import React, { useState } from "react";

import useAuth from "../Hooks/useAuth";
import { FormProvider, useForm } from "react-hook-form";
import Step1 from "../Components/Step1";
import Step2 from "../Components/Step2";
import Step3 from "../Components/Step3";
import Step4 from "../Components/Step4";
import axios from "axios";

const PostArticle = () => {
  const { user } = useAuth();
  const methods = useForm({ mood: "onTouched" });
  const [step, setStep] = useState(0);
  const onSubmit = (data) => {
    // console.log("Final Data:", data);
    console.log(data);
    axios
      .post("http://localhost:3000/insights", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // fetch("http://localhost:3000/insights", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
  };
  const next = async () => {
    const isvalid = await methods.trigger();
    if (isvalid) {
      setStep((prev) => prev + 1);
    }
  };
  const back = () => setStep((prev) => prev - 1);

  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

  return (
    <FormProvider {...methods}>
      <div className="  min-h-[calc(100vh-100px)]  flex justify-center items-center lg:m-0 md:m-6 m-2 ">
        <div className="w-full  lg:max-w-3/4">
          <div>
            <div className=" flex flex-col items-center justify-between gap-2 bg-[#01257D] p-5 text-white  rounded-t-md">
              <h1 className="font-bold md:text-3xl text-2xl text-[#00FFFF]">
                Publish Your Insights
              </h1>
              <p className="text-justify text-sm ">
                Share your unique perspectives and expertise with the
                ClarityInsights community! This is your space to contribute
                valuable knowledge, spark discussions, and empower fellow
                students. Whether it's a research finding, a study tip, or a
                deep dive into a fascinating topic, your article can make a
                difference. Help others learn, and solidify your own
                understanding by putting your thoughts into words. We can't wait
                to see what you'll share!
              </p>
            </div>
            <div className="px-4 bg-[#e9edf6] font-semibold rounded-b-md py-8 ">
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {steps[step]}
                <div className="flex gap-4">
                  {step > 0 && (
                    <button type="button" onClick={back} className="btn">
                      Back
                    </button>
                  )}
                  {step < steps.length - 1 ? (
                    <button type="button" onClick={next} className="btn">
                      Next
                    </button>
                  ) : (
                    <button type="submit" className="btn">
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default PostArticle;
