import React from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { Urlfor } from "../../lib/client";
import { action } from "../../store/states";

function RecipeContent({ Recipes }) {
  const { name, description, price, pngimage, slug } = Recipes;
  const img = Urlfor(pngimage).url();

  let { size, quantity } = useSelector((state) => state.shopReducer);

  const dispatch = useDispatch();
  const sizeChecking = size === 0 ? "Small" : size === 1 ? "Medium" : "Large";
  const addHandler = () => {
    dispatch(
      action.addToCart({ name, price, img, quantity, slug, sizeChecking })
    );
    toast.success(`${name} ${sizeChecking} Is Added To Bag`, {
      duration: 1000,
    });
  };
  return (
    <div className="  px-4 py-16 md:px-16 md:py-14 lg:px-24 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-0 items-center ">
      <div
        data-aos="fade-up"
        className=" relative max-w-xs w-9/12 h-52 md:w-4/5 md:h-full mx-auto"
      >
        <Image
          className=" rounded-lg"
          loader={() => img}
          src={img}
          alt=""
          layout={"fill"}
        />
      </div>
      <div>
        <h1
          data-aos="fade-up"
          className=" text-2xl md:text-4xl font-bold mb-1 md:mb-3"
        >
          {name}
        </h1>
        <p
          data-aos="fade-up"
          className=" text-sm md:text-lg text-gray-600 mb-3 md:mb-4"
        >
          {description}, {description}, {description}
        </p>
        <p
          data-aos="fade-up"
          className=" text-xl md:text-3xl font-semibold mb-4 "
        >
          {price[size]}
          <span className="orange ml-2 ">MMK</span>
        </p>
        <div className="flex justify-between md:gap-x-12 md:items-center md:justify-start mb-3 md:mb-4">
          <h1
            data-aos="fade-up"
            className="hidden lg:block text-3xl font-semibold"
          >
            Size
          </h1>
          <ul
            data-aos="fade-up"
            className=" menu_filter flex items-center gap-x-4"
          >
            <li
              onClick={() => dispatch(action.sizeSmall())}
              className={` ${
                size === 0 && "active"
              }  px-5 py-2 text-sm md:text-base font-bold rounded-full cursor-pointer`}
            >
              Small
            </li>
            <li
              onClick={() => dispatch(action.sizeMedium())}
              className={` ${
                size === 1 && "active"
              }  px-5 py-2 text-sm md:text-base font-bold rounded-full cursor-pointer`}
            >
              Medium
            </li>
            <li
              onClick={() => dispatch(action.sizeLarge())}
              className={` ${
                size === 2 && "active"
              }  px-5 py-2 text-sm md:text-base font-bold rounded-full cursor-pointer`}
            >
              Large
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          className="flex items-center gap-x-5 md:gap-x-12 mb-3 md:mb-4 "
        >
          <h1 className=" text-xl md:text-3xl font-semibold">Quantity</h1>
          <div className="grid grid-cols-3 items-center">
            <MdOutlineNavigateBefore
              onClick={() => dispatch(action.decreseQuantity())}
              className=" cursor-pointer "
              size={40}
              color={"#f64b15"}
            />
            <h1 className=" text-xl md:text-3xl font-semibold flex justify-center">
              {quantity}
            </h1>
            <MdOutlineNavigateNext
              onClick={() => dispatch(action.increseQuantity())}
              className=" cursor-pointer"
              size={40}
              color={"#f64b15"}
            />
          </div>
        </div>
        <button
          data-aos="fade-up"
          onClick={addHandler}
          className="button px-5 py-2 text-base md:text-lg font-bold text-white rounded-full"
        >
          Add To Cart
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default RecipeContent;
