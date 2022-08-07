import React from "react";
import Image from "next/image";
import Shop1 from "../../public/images/shop1.jpg";
import Shop2 from "../../public/images/shop2.jpg";
import Shop3 from "../../public/images/shop3.jpg";
import Shop4 from "../../public/images/shop4.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const LocationsArray = [
  {
    id: 1,
    imgURL: Shop1,
    title: "Bogyoke Branch",
    address: "NO.45, KyoneTaw Street, Hledan, Yangon",
    phone: "+95 977 8888 333",
  },
  {
    id: 2,
    imgURL: Shop2,
    title: "Hledan Branch",
    address: "NO.45, KyoneTaw Street, Hledan, Yangon",
    phone: "+95 977 8888 222",
  },
  {
    id: 3,
    imgURL: Shop3,
    title: "Latha Branch",
    address: "NO.45, KyoneTaw Street, Hledan, Yangon",
    phone: "+95 977 8888 444",
  },
  {
    id: 4,
    imgURL: Shop4,
    title: "Sanchaung Branch",
    address: "NO.45, KyoneTaw Street, Hledan, Yangon",
    phone: "+95 977 8888 555",
  },
];

function ContactContent() {
  return (
    <div className=" px-4 pt-10 pb-14 md:px-16 md:pt-14 md:pb-16 lg:px-24 lg:pt-10 lg:pb-20">
      <p
        data-aos="fade-up"
        className="orange text-sm md:text-base md:mb-2 font-semibold text-center"
      >
        Contact Us
      </p>
      <h1
        data-aos="fade-up"
        className="  mb-4  text-3xl md:text-4xl font-bold text-center"
      >
        Branches Details
      </h1>

      <div className="mt-6 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-y-5 sm:gap-y-10 sm:gap-x-4 ">
        {LocationsArray.map((location) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              key={location.id}
              className="flex flex-col sm:flex-row sm:items-center gap-y-4 sm:gap-x-4 "
            >
              <div className=" relative w-full h-40 sm:w-1/2  md:h-36">
                <Image src={location.imgURL} alt="" layout={"fill"}></Image>
              </div>
              <div className="hidden sm:block vertical_line_contact"></div>
              <div className=" md:w-1/2">
                <h1 className=" text-xl  font-black mb-2 sm:mb-3 ">
                  {location.title}
                </h1>
                <p className="flex gap-x-3 mb-1 sm:mb-2">
                  <ImLocation2 size={20} />
                  <span className="">
                    No.576, WarTan Street, Latha Township, Yangon
                  </span>
                </p>
                <p className="flex gap-x-3">
                  <FaPhoneAlt size={18} />
                  <span className="">{location.phone}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 sm:mt-20">
        <h1
          data-aos="fade-up"
          className="mb-5 sm:mb-10  text-3xl md:text-4xl font-bold text-center"
        >
          Your Feedbacks Are Always Welcome
        </h1>
        <form data-aos="fade-up" className=" w-full sm:w-3/6 mx-auto" action="">
          <div className="grid grid-cols-1 w-full ">
            <input
              className=" mb-3 border border-gray-600 block rounded py-1 px-2 "
              type={"text"}
              placeholder="Name"
            />
            <input
              className=" mb-3 border border-gray-600 block rounded py-1 px-2 "
              type={"email"}
              placeholder="Email"
            />
            <textarea
              className=" mb-5 border border-gray-600 block rounded py-1 px-2 resize-none "
              name=""
              id=""
              rows="5"
              placeholder="Your Suggestion"
            ></textarea>
          </div>

          <button
            data-aos="fade-up"
            className="button px-6 py-2 sm:text-lg text-white rounded-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactContent;
