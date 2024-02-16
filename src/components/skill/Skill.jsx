import React from "react";

const skillValue = [
  {
    name: "C++",
    value: "85%",
  },
  {
    name: "JAVASCRIPT",
    value: "75%",
  },
  {
    name: "PYTHON",
    value: "65%",
  },
  {
    name: "TYPESCRIPT",
    value: "65%",
  },
  {
    name: "NODEJS",
    value: "55%",
  },
  {
    name: "EXPRESSJS",
    value: "50%",
  },
  {
    name: "MONGODB",
    value: "45%",
  },
];
const skillValue2 = [
  {
    name: "REACTJS",
    value: "90%",
  },
  {
    name: "RTK",
    value: "75%",
  },
  {
    name: "TAILWIND",
    value: "80%",
  },
  {
    name: "React-Native",
    value: "90%",
  },
  {
    name: "CSS",
    value: "85%",
  },
  {
    name: "SQL",
    value: "55%",
  },
  {
    name: "GIT&GITHUB",
    value: "80%",
  },
];


const Skill = () => {
  return (
    <div className=" ">
      <h3 className="w-full mb-[0.5rem] text-xl sm:text-xl md:text-2xl xl:text-[3rem] font-semibold py-5 xl:py-10 text-white text-center">
        Technical <span className="text-yellow-500">Skills</span>
      </h3>
      <div className=" flex flex-col lg:flex-row items-center lg:justify-around pb-10">
        <div className="  pb-3 w-[80%] sm:[65%] lg:w-[40%] flex flex-col gap-3">
          {skillValue.map((item, idx) => (
            <div className=" flex gap-2" key={idx}>
              <div className="text-lg sm:text-xl font-semibold text-white w-[12rem]">
                {item.name}
              </div>
              <div className="h-5 w-full bg-neutral-200 rounded-lg overflow-hidden flex mt-1">
                <div
                  className="h-5 bg-red-600 cursor-pointer"
                  style={{ width: item.value }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="  w-[80%] sm:[65%] lg:w-[40%] flex flex-col gap-3">
          {skillValue2.map((item, idx) => (
            <div className=" flex gap-2" key={idx}>
              <div className="text-lg sm:text-xl font-semibold text-white w-[12rem]">
                {item.name}
              </div>
              <div className="h-5 w-full bg-neutral-200 rounded-lg overflow-hidden flex mt-1">
                <div
                  className="h-5 bg-yellow-500 cursor-pointer"
                  style={{ width: item.value }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
