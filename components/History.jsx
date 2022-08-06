import React from "react";
import Image from "next/image";
import Woman from "../public/images/history.jpg";
import Shop1 from "../public/images/shop1.jpg";
import Shop2 from "../public/images/shop2.jpg";
import Shop3 from "../public/images/shop3.jpg";
import Shop4 from "../public/images/shop4.jpg";

const Shops = [
  { id: 1, year: 1991, imgURL: Shop1, address: "Bogyoke Branch" },
  { id: 2, year: 2000, imgURL: Shop2, address: "Hleden Branch" },
  { id: 3, year: 2014, imgURL: Shop3, address: "Latha Branch" },
  { id: 4, year: 2020, imgURL: Shop4, address: "Sanchaung Branch" },
];

function History() {
  return (
    <div className="px-4 py-10 md:px-16 md:py-14 lg:px-24 lg:py-20">
      <h1
        data-aos="fade-up"
        className=" mb-6 md:mb-8 text-3xl md:text-4xl font-bold text-center"
      >
        Brief History of <br /> <span className="orange">Los Pollos</span>
      </h1>
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-x-5 lg:gap-x-14 lg:mx-28 ">
        <div data-aos="fade-up" className="history_img ">
          <Image src={Woman} layout={"fill"} alt=""></Image>
        </div>

        <div className=" col-span-2">
          <p
            data-aos="fade-up"
            className=" mb-2 md:mb-1 md:text-sm lg:text-base text-gray-600 "
          >
            Los Pollos landed in Myanmar in 1977, when the first restaurant
            opened its doors at Bogyoke Road
          </p>
          <p
            data-aos="fade-up"
            className=" mb-2 md:mb-1 md:text-sm lg:text-base text-gray-600 "
          >
            Today We serve more than 1 million customers each month through over
            80 stores across Singapore. This makes LOs Pollos one of the largest
            fast food chains in the country.
          </p>
          <p
            data-aos="fade-up"
            className=" mb-3 md:mb-2 md:text-sm lg:text-base text-gray-600 "
          >
            We are passionate about serving our customers freshly prepared great
            tasting food with a key part of this being The Colonel&apos;s
            signature blend of 11 herbs and spices. Even today these remain a
            secret with the original recipe under lock and key in our
            headquarters in Kentucky, USA.
          </p>
          <h1
            data-aos="fade-up"
            className=" orange text-2xl md:text-3xl mb-2 font-bold "
          >
            Branches
          </h1>
          <div data-aos="fade-up" className="grid grid-cols-4">
            {Shops.map((shop) => {
              return (
                <div key={shop.id} className="flex flex-col items-center ">
                  <h1 className="text-xl mb-2 font-black">{shop.year}</h1>
                  <div className="horizonal_line">
                    <div className="vertical_line"></div>
                  </div>
                  <div className="mt-3 relative w-11/12 h-20 rounded">
                    <Image
                      className="rounded"
                      src={shop.imgURL}
                      alt=""
                      layout={"fill"}
                    ></Image>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-gray-600">
                    {shop.address}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
