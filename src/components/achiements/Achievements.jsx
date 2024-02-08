import React from "react";

const AchievementSection = () => {
  return (
    <div className=" mx-auto px-4 py-8 bg-[#FCFAFA] w-full">
            <h3 className="w-full mb-[1.5rem] text-xl sm:text-xl md:text-2xl xl:text-[3rem] font-semibold py-5 xl:py-10 text-black text-center">Achieve<span className='text-yellow-500'>ments</span></h3>
      <div className="max-w-lg mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">TCS CodeVita - Season 11</h3>
            <h3 class="text-yellow-500">2024</h3>
            <div href="#" className="text-blue-500 hover:underline cursor-pointer">sriman45</div>

            <p className="text-gray-700 mb-4">Accomplished an impressive 141st position in the first round, followed by securing the 334rd rank in the second round.</p>
          </div>
        </div>

        {/* Add more achievements as needed */}
      </div>
    </div>
  );
};

export default AchievementSection;
