import React from "react";
import "./getInTouch.css";
import FormSection from "./formSection/FormSection";

const GetInTouch = () => {
  return (
    <div className="  lg:mt-[4rem] pb-3 flex flex-col items-center justify-center">
      <h3 className=" text-xl sm:text-xl md:text-2xl xl:text-[3rem] font-semibold py-5 xl:py-10 text-white">
        Get In <span className=" text-yellow-500">Touch</span>{" "}
      </h3>
      <div className=" flex flex-col md:flex-row px-4 w-full justify-center items-center ">
        <div className=" md:w-1/2 text-center bg-white sm:bg-transparent bg-opacity-70 max-h-[700px]">
          <img
            className={`w-[100%] object-fill rounded-xl h-full xl:max-h-[770px]`}
            src="/image2.png"
            alt="image2-img"
          />
        </div>
        <div className="w-full md:w-1/2">
          <FormSection />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
