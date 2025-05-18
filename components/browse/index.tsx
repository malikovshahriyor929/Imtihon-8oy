import React from "react";

const Browse = () => {
  return (
    <div className="container2 !px-12 !py-12  bg-[#f0f0f0] !mt-12 rounded-[40px] max-[400px]:!px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 max-[400px]:text-[20px]">
        BROWSE BY DRESS STYLE
      </h1>

      <div>
        <div className="grid grid-cols-[1fr_2fr] gap-4 mt-5 max-[800px]:grid-cols-1">
          {/* Casual */}
          <div className="relative rounded-lg overflow-hidden h-64 hover:shadow-xl transition-shadow duration-300">
            <div
              className="bg-cover bg-center h-full w-full"
              style={{ backgroundImage: `url('/s1.png')` }}
            >
              <div className="absolute flex items-start p-6 transition-all duration-300">
                <h2 className=" text-2xl font-bold">Casual</h2>
              </div>
            </div>
          </div>
          {/* Formal */}
          <div className="relative rounded-lg overflow-hidden h-64 hover:shadow-xl transition-shadow duration-300">
            <div
              className="bg-cover bg-center h-full w-full"
              style={{ backgroundImage: `url('/s2.png')` }}
            >
              <div className="absolute flex items-start p-6 transition-all duration-300">
                <h2 className=" text-2xl font-bold">Formal</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[2fr_1fr] gap-4 mt-5 max-[800px]:grid-cols-1">
          {/* Party */}
          <div className="relative rounded-lg overflow-hidden h-64 hover:shadow-xl transition-shadow duration-300">
            <div
              className="bg-cover bg-center h-full w-full"
              style={{ backgroundImage: `url('/s3.png')` }}
            >
              <div className="absolute flex items-start p-6 transition-all duration-300">
                <h2 className=" text-2xl font-bold">Party</h2>
              </div>
            </div>
          </div>

          {/* Gym */}
          <div className="relative rounded-lg overflow-hidden h-64 hover:shadow-xl transition-shadow duration-300">
            <div
              className="bg-cover bg-center h-full w-full"
              style={{ backgroundImage: `url('/s4.png')` }}
            >
              <div className="absolute flex items-start p-6 transition-all duration-300">
                <h2 className=" text-2xl font-bold">Gym</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
