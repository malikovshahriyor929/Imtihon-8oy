import Image from "next/image";
import React from "react";

const Brends = () => {
  return (
    <div className="bg-black">
      <div className="container2 !flex !items-center !py-8 justify-between lex-wrap overflow-hidden gap-5 ">
        <Image className="max-[500px]:!h-4 !static  max-[900px]:!h-6 !object-cover !max-w-[150px]" fill src="/1.png" alt="" />
        <Image className="max-[500px]:!h-4 !static  max-[900px]:!h-6 !object-cover !max-w-[100px]" fill src="/2.png" alt="" />
        <Image className="max-[500px]:!h-4 !static  max-[900px]:!h-6 !object-cover !max-w-[150px]" fill src="/3.png" alt="" />
        <Image className="max-[500px]:!h-4 !static  max-[900px]:!h-6 !object-cover !max-w-[150px]" fill src="/4.png" alt="" />
        <Image className="max-[500px]:!h-4 !static  max-[900px]:!h-6 !object-cover !max-w-[150px]" fill src="/5.png" alt="" />
      </div>
    </div>
  );
};

export default Brends;
