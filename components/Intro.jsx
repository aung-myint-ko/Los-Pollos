import React from "react";
import Image from "next/image";
import Intro1 from "../public/images/intro1.png";
import Intro2 from "../public/images/intro2.png";
import Intro3 from "../public/images/intro3.png";

function Intro() {
  return (
    <div className=" px-4 pt-10 md:px-16 md:pt-14 lg:px-24 lg:pt-20">
      <p
        data-aos="fade-up"
        className="orange text-sm md:text-base md:mb-2 font-semibold text-center"
      >
        Why We Are Famous?
      </p>
      <h1
        data-aos="fade-up"
        className=" mb-4 md:mb-7 text-2xl md:text-4xl font-bold text-center"
      >
        Delicious Food & Fastest Delivery
      </h1>
      <div className=" grid grid-cols-1 gap-y-2 md:gap-y-0 md:grid-cols-3 md:gap-x-3">
        <div>
          <div
            data-aos="fade-up"
            className=" w-36 h-fit md:w-44 md:h-44 mx-auto "
          >
            <Image src={Intro1} alt="" layout={"responsive"}></Image>
          </div>
          <h1
            data-aos="fade-up"
            className="mb-1 md:mb-2 text-xl md:text-2xl text-center font-bold tracking-wide"
          >
            Easy To Order
          </h1>
          <p data-aos="fade-up" className="text-center text-gray-600">
            You only need a few steps in <br /> ordering foods
          </p>
        </div>
        <div>
          <div
            data-aos="fade-up"
            className=" w-36 h-fit md:w-44 md:h-44 mx-auto "
          >
            <Image src={Intro2} alt="" layout={"responsive"}></Image>
          </div>
          <h1
            data-aos="fade-up"
            className="mb-1 md:mb-2 text-xl md:text-2xl text-center font-bold tracking-wide"
          >
            Fastest Delivery
          </h1>
          <p data-aos="fade-up" className="text-center text-gray-600">
            You only need a few steps in <br /> ordering foods
          </p>
        </div>
        <div>
          <div
            data-aos="fade-up"
            className=" w-36 h-fit md:w-44 md:h-44 mx-auto "
          >
            <Image src={Intro3} alt="" layout={"responsive"}></Image>
          </div>
          <h1
            data-aos="fade-up"
            className="mb-1 md:mb-2 text-xl md:text-2xl text-center font-bold tracking-wide"
          >
            Best Quality
          </h1>
          <p data-aos="fade-up" className="text-center text-gray-600">
            You only need a few steps in <br /> ordering foods
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
