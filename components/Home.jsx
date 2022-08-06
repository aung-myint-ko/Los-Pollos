import React from "react";
import Link from "next/link";
import Image from "next/dist/client/image";
import Pizza from "../public/images/home.png";

function Home() {
  return (
    <div
      className={`home bg-[url('../public/images/wood.jpg')] px-4 md:px-16 lg:px-24 grid grid-cols-1  sm:grid-cols-2 sm:items-center`}
    >
      <div
        data-aos="fade-right"
        className="flex flex-col justify-end items-center sm:items-start"
      >
        <h1 className=" text-4xl sm:text-6xl lg:mb-2 lg:text-7xl md:tracking-wide lg:tracking-widest text-white font-extrabold">
          Best <span className="orange">Pizza</span>
        </h1>
        <h1 className=" text-4xl sm:text-5xl lg:mb-2 lg:text-7xl md:tracking-wide lg:tracking-widest text-white font-extrabold">
          In The World.
        </h1>
        <p className=" text-lg mb-2 lg:mb-4 lg:text-3xl tracking-wide text-white">
          Have you tasted better?
        </p>
        <button className="button py-2 w-28  text-base md:w-32  md:text-lg text-white rounded-full">
          <Link href={"/menu"}>See Menu</Link>
        </button>
      </div>
      <div className=" flex items-center md:block">
        <div
          data-aos="fade-left"
          className=" relative w-3/5 sm:w-4/5 h-96 max-w-sm max-h-48 sm:max-h-60 lg:max-h-96  mx-auto"
        >
          <Image src={Pizza} alt={""} layout={"fill"}></Image>
        </div>
      </div>
    </div>
  );
}

export default Home;
