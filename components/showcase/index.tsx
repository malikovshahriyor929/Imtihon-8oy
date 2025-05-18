import React from "react";
import { Button } from "../ui/button";

const Showcase = () => {
  return (
    // <div className="bg-[#F2F0F1] py- px-4 md:px-8  lg:px-16">
    //   <div className="container2 flex py-10 w-full justify-between">
    //     <div className="w-[50%]">
    //       <h1 className="text-4xl md:text-5xl font-bold mb-6">
    //         <span className="block">FIND CLOTHES</span>
    //         <span className="block">THAT MATCHES</span>
    //         <span className="block">YOUR STYLE</span>
    //       </h1>
    //       <p className="text-lg mb-8">
    //         Browse through our diverse range of meticulously crafted garments,
    //         designed to bring out your individuality and cater to your sense of
    //         style.
    //       </p>
    //       <Button>Shop Now</Button>

    //       <div className="flex flex-wrap gap-8 mt-12">
    //         <div>
    //           <p className="text-2xl font-bold">200+</p>
    //           <p className="text-gray-600">International Brands</p>
    //         </div>
    //         <div>
    //           <p className="text-2xl font-bold">2,000+</p>
    //           <p className="text-gray-600">High-Quality Products</p>
    //         </div>
    //         <div>
    //           <p className="text-2xl font-bold">30,000+</p>
    //           <p className="text-gray-600">Happy Customers</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-[50%]">
    //       <img
    //         src="./showcase.jpg"
    //         alt="Fashion showcase"
    //         className="object-contain  "
    //       />
    //     </div>
    //   </div>
    // </div>
    <section className="pt-20 bg-gray-100 flex items-center justify-center">
      <div className="w-[90%] max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          {/* Heading */}
          <h1 className="text-5xl max-[390px]:text-4xl md:text-7xl font-extrabold tracking-tight">
            FIND CLOTHES <br /> THAT MATCH <br /> YOUR STYLE
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-md max-[320px]:text-md">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          {/* Button */}
          <Button className="bg-black text-white rounded-full px-8 py-3 text-lg hover:bg-gray-800">
            Shop Now
          </Button>

          {/* Stats */}
          <div className="flex space-x-8 pt-8 max-[460px]:**:text-xl max-[365px]:flex-col max-[365px]:gap-3">
            <div>
              <h3 className="text-2xl font-bold">200+</h3>
              <p className="text-gray-600 max-[460px]:!text-sm">International Brands</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">2,000+</h3>
              <p className="text-gray-600 max-[460px]:!text-sm">High-Quality Products</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">30,000+</h3>
              <p className="text-gray-600 max-[460px]:!text-sm">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="md:w-1/2 mt- md:mt-0 flex items-center justify-center">
            <img
              src="./showcase.jpg"
              alt="Fashion showcase"
              className="object-contain min-h-[550px]   "
            />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
