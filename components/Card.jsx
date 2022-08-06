import React from "react";
import Link from "next/link";
import Image from "next/dist/client/image";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineNavigateNext, MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../store/states";

export const IntroCard = ({ slug, image, name, price }) => {
  return (
    <Link href={`/menu/${slug}`}>
      <div className=" relative w-full h-40 rounded cursor-pointer">
        <Image
          className="rounded"
          unoptimized={true}
          loader={() => image}
          src={image}
          alt=""
          layout={"fill"}
        />
        <div className="overlay rounded">
          <div className="mx-3 flex flex-col justify-end w-full h-full">
            <h1 className="leading-8 text-xl font-extrabold text-white">
              {name}
            </h1>
            <p className="leading-4 text-lg font-medium text-white">
              {price}
              <span className=" ml-2 orange">MMK</span>
            </p>
            <Link href={`/menu/${slug}`}>
              <p className="text-white flex items-center cursor-pointer">
                Order Now
                <span>
                  <MdOutlineNavigateNext size={28} />
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const MenuCard = ({ slug, image, name, price }) => {
  const dispatch = useDispatch();
  return (
    <Link href={`/menu/${slug}`}>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        onClick={() => dispatch(action.returnOriginal())}
        className="bg_pale md:block p-3 sm:p-5 md:p-3 lg:p-5 menu_card border rounded-lg shadow-lg cursor-pointer"
      >
        <div className="menu_img relative w-full h-28 sm:h-36  md:w-32 md:h-32 mx-auto rounded-full ">
          <Image
            className="rounded-full"
            priority={true}
            loader={() => image}
            unoptimized={true}
            src={image}
            alt=""
            layout={"fill"}
          ></Image>
        </div>
        <h1 className=" text-sm sm:text-xl  mt-4 font-bold ">{name}</h1>
        <div className="flex justify-between items-center">
          <p className=" text-sm sm:text-base sm:text-center  lg:text-lg font-medium ">
            {price}
            <span className=" ml-1 orange">MMK</span>
          </p>
          <Link href={`/menu/${slug}`}>
            <p className="orange hidden md:text-sm sm:flex md:items-center font-bold cursor-pointer">
              Order Now
            </p>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export const CartCard = ({ id, image, name, price, total, quantity, size }) => {
  const Quantity = useSelector((state) => state.shopReducer.quantity);
  const dispatch = useDispatch();
  const HandleRemove = () => {
    dispatch(action.removeFromCart({ id }));
    toast.error(`${name} ${size} Is Removed`, { duration: 1000 });
  };
  return (
    <div className=" relative mb-2 w-full grid grid-cols-4 md:grid-cols-7 items-center py-2 gap-x-2 bg-gray-100 rounded-md shadow ">
      <div className=" relative mx-auto w-9/12 max-h-14 h-full  md:h-16">
        <Image
          loader={() => image}
          unoptimized={true}
          src={image}
          alt=""
          layout={"fill"}
        ></Image>
      </div>
      <div className=" col-span-3 grid grid-cols-4 gap-y-2 md:hidden">
        <div className=" col-span-4 md:w-44">
          <h1 className=" font-black">{name}</h1>
          <p className="text-xs md:text-base text-gray-600">
            <span className="orange font-semibold ">Size</span> - {size}
          </p>
        </div>
        <div className="md:w-20 lg:w-24">
          <h1 className=" text-xs md:text-base font-black">Each</h1>
          <p className="text-xs md:text-base">{price} Ks</p>
        </div>
        <div className="text-center">
          <h1 className="text-xs md:text-base font-black">Quantity</h1>
          <p className="text-xs md:text-base md:text-center">{quantity}</p>
        </div>
        <div className=" md:w-24 lg:w-28 text-center md:text-end">
          <h1 className="text-xs md:text-base font-black">Total</h1>
          <p className="text-xs md:text-base">{total} Ks</p>
        </div>
      </div>
      <div className="hidden md:block md:col-span-2 ">
        <h1 className=" text-xs md:text-base font-black">{name}</h1>
        <p className="text-xs md:text-base text-gray-600">
          <span className="orange font-semibold ">Size</span> - {size}
        </p>
      </div>
      <div className="hidden md:block ">
        <h1 className=" text-xs md:text-base font-black">Each</h1>
        <p className="text-xs md:text-base">{price} Ks</p>
      </div>
      <div className="hidden md:block">
        <h1 className="text-xs md:text-base font-black">Quantity</h1>
        <p className="text-xs md:text-base text-center">{quantity}</p>
      </div>
      <div className="hidden md:block  text-end">
        <h1 className="text-xs md:text-base font-black">Total</h1>
        <p className="text-xs md:text-base">{total} Ks</p>
      </div>
      <MdClose
        onClick={HandleRemove}
        className=" cursor-pointer absolute top-1/2 right-3 md:right-5 -translate-y-1/2"
        size={25}
        color={"#f64b15"}
      />
    </div>
  );
};
