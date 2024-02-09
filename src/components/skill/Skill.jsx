import React from "react";

const Skill = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center flex-wrap gap-3 bg-[#FCFAFA] pb-10">
         <h3 className="w-full mb-[0.5rem] text-xl sm:text-xl md:text-2xl xl:text-[3rem] font-semibold pt-5 xl:py-10 text-black">Technical <span className='text-yellow-500'>Skills</span></h3>
      <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center space-x-4 gap-2 sm:gap-0">
        <div></div>
        <div></div>
        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
          <span className="text-xs font-medium text-white mx-auto"></span>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-800">C++</div>
          <div className="text-xs text-gray-500">Intermediate</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-xs font-medium text-white"></span>
        </div>
        <div>
          <div className="text-sm font-medium text-green-700">JAVASCRIPT</div>
          <div className="text-xs text-green-500">Intermediate</div>
        </div>


        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-xs font-medium text-white"></span>
        </div>
        <div>
          <div className="text-sm font-medium text-blue-700">HTML5</div>
          <div className="text-xs text-blue-500">Advanced</div>
        </div>

        <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
          <span className="text-xs font-medium text-white"></span>
        </div>
        <div>
          <div className="text-sm font-medium text-yellow-700">CSS</div>
          <div className="text-xs text-yellow-500">Advanced</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-xs font-medium text-white"></span>
        </div>
        <div>
          <div className="text-sm font-medium text-green-700">TYPESCRIPT</div>
          <div className="text-xs text-green-500">Intermediate</div>
        </div>

        <div className=" flex flex-col sm:flex-row gap-2 items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
          <span className="text-xs font-medium text-white"></span>
        </div>
        <div>
          <div>
            <div className="text-sm font-medium text-pink-700">REACTJS</div>
            <div className="text-xs text-pink-500">Intermediate</div>
          </div>
        </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
          <span className="text-xs font-medium text-white"></span>
        </div>
        <div>
          <div className="text-sm font-medium text-purple-700">RTK</div>
          <div className="text-xs text-purple-500">Intermediate</div>
        </div>
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center space-x-4 gap-2 sm:gap-0">
        <div></div>
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-xs font-medium text-white"></span>
        </div>
        <div>
          <div className="text-sm font-medium text-gray-200">NODEJS</div>
          <div className="text-xs text-gray-500">Intermediate</div>
        </div>

        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-xs font-medium text-white"></span>
        </div>
        <div>
          <div className="text-sm font-medium text-green-700">EXPRESSJS</div>
          <div className="text-xs text-green-500">Intermediate</div>
        </div>

        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-xs font-medium text-white"></span>
        </div>
        <div>
          <div className="text-sm font-medium text-blue-700">MONGODB</div>
          <div className="text-xs text-blue-500">Intermediate</div>
        </div>

        <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
          <span className="text-xs font-medium text-white"></span>
        </div>
        <div>
          <div className="text-sm font-medium text-yellow-700">TAILWINDCSS</div>
          <div className="text-xs text-yellow-500">Intermediate</div>
        </div>

        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-xs font-medium text-white"></span>
        </div>
        <div>
          <div className="text-sm font-medium text-green-700">SQL</div>
          <div className="text-xs text-green-500">Intermediate</div>
        </div>


        <div className=" flex flex-col sm:flex-row gap-2 justify-center items-center">
        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
          <span className="text-xs font-medium text-white"></span>
        </div>
        <div>
          <div>
            <div className="text-sm font-medium text-pink-700">Git&GitHub</div>
            <div className="text-xs text-pink-500">Intermediate</div>
          </div>
        </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
          <span className="text-xs font-medium text-white"></span>
        </div>
        <div>
          <div className="text-sm font-medium text-purple-700">PYTHON</div>
          <div className="text-xs text-purple-500">Intermediate</div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
