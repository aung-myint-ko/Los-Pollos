import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.png";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

function Footer() {
  return (
    <div className="px-4 py-6 md:px-16 md:py-8 lg:px-24 lg:py-10 bg-slate-200">
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-5  md:gap-x-4 lg:gap-x-3 ">
        <div className="flex flex-col items-center md:block">
          <div className=" footer_img relative  w-2/3 h-16  md:w-3/4 md:h-20 mb-3">
            <Image src={Logo} alt="" layout={"fill"}></Image>
          </div>
          <p className="mb-3 w-9/12 text-center md:text-left md:w-full text-sm lg:text-base tracking-wide">
            Just Come And Chills With Pizza, You&apos;ll Love That Vibe...
          </p>
          <div className="flex gap-x-4">
            <FaFacebookF size={25} color={"#ad0303"} />
            <FaInstagramSquare size={25} color={"#ad0303"} />
            <FaTwitter size={25} color={"#ad0303"} />
            <FaYoutube size={25} color={"#ad0303"} />
          </div>
        </div>
        <div className="flex flex-col items-center md:block">
          <h1 className=" text-xl font-black mb-3 ">Main Branch Address</h1>
          <p className="flex gap-x-3 mb-2 text-sm lg:text-base">
            <ImLocation2 size={20} />
            <span className="md:tracking-wider">
              No.576, WarTan Street, <br /> Latha Township, Yangon
            </span>
          </p>
          <p className="flex gap-x-3 text-sm lg:text-base">
            <FaPhoneAlt size={20} />
            <span className="md:tracking-wider">+95 977 8888 333</span>
          </p>
        </div>
        <div className="flex flex-col items-center md:block">
          <h1 className=" text-xl font-black mb-3 ">Opening Hours</h1>
          <p className="mb-2 text-sm lg:text-base">Mon To Fri - 9 AM to 8PM</p>
          <p className=" text-sm lg:text-base">Sat & Sun - 9 AM to 10PM</p>
        </div>
        <ul className="navlinks flex justify-center items-center lg:items-start lg:justify-start lg:flex-col  md:col-span-3 lg:col-auto  gap-x-2 md:gap-x-4 lg:gap-x-0  ">
          <li className=" font-black mb-2 ">
            <Link href={"/"}>Home</Link>
          </li>
          <li className=" font-black mb-2">
            <Link href={"/menu"}>Menu</Link>
          </li>
          <li className=" font-black mb-2">
            <Link href={"/carts"}>Carts</Link>
          </li>
          <li className=" font-black mb-2">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <p className=" mt-2 text-sm text-gray-500 text-center">
        Copyright © 2021 Los Pollos Myanmar. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
