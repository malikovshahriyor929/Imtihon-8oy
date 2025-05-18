import React from "react";

const UnderHeader = () => {
  return (
    <div className="bg-black py-2 px-4 max-[380px]:py-2 max-[380px]:px-3 text-primary-foreground text-center flex justify-center">
      <div className="w-full  mx-auto flex max-[400px]:items-stretch justify-center items-center  gap-2 max-[500px]:gap-1.5">
        <p className="text-sm max-[400px]:text-xs max-[500px]:text-[13px] max-[350px]:text-[12px] font-medium">
          Sign up and get <span className="font-bold">20% off</span> your first
          order.
        </p>
        <p className="text-xs underline max-[400px]:text-[11px] max-[500px]:px-3 max-[350px]:px-2 whitespace-nowrap hover:bg-secondary/90 py-1 h-auto">
          Sign Up Now
        </p>
      </div>
    </div>
  );
};

export default UnderHeader;
