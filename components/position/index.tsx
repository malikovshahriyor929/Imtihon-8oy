import React from "react";
import { Mail } from "lucide-react";
import { Button } from "../ui/button";

const Position = () => {
  return (
    <div className="bg-black text-white py-6 px-6 rounded-lg flex items-center justify-between max-w-[80%] mx-auto mb-5 max-[1050px]:flex-col gap-4">
      <div>
        <h2 className="text-3xl font-black">
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>
      </div>
      <div className="flex items-center  flex-col gap-4">
        <div className="flex items-center gap-3 bg-white pl-2  py-2 rounded-full border border-gray-300 text-black focus:outline-none">
          <Mail className="\ text-gray-400" size={18} />
          <input
            type="email"
            placeholder="Enter your email address"
            className="max-[400px]:placeholder:text-[12px] w-[70%] outline-none"
          />
        </div>
        <Button className="!bg-white !text-black rounded-full w-full">
          Subscribe to Newsletter
        </Button>
      </div>
    </div>
  );
};

export default Position;
