import React from "react";
import Tick from "../../public/images/tick.svg";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { action } from "../../store/states";

function OrderSuccess(props) {
  const dispatch = useDispatch();
  const orderReturn = () => {
    setTimeout(() => {
      dispatch(action.orderReturn());
      dispatch(action.payNowPayment());
    }, 2000);
  };
  return (
    <div className=" fixed top-0 left-0 flex justify-center items-center w-full h-screen bg-white z-30">
      <div className="orderSuccess w-3/4 p-5 flex flex-col items-center rounded-xl border shadow-md  bg-slate-50 ">
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 my-4">
          <Image src={Tick} alt="" layout="fill"></Image>
        </div>
        <h1 className="mb-2 text-3xl font-bold">Thank You</h1>
        <h1 className="mb-4 text-center">Your Order Will Get In 3 Hours</h1>
        <button className="button py-2 w-32 text-base  md:text-lg text-white rounded-full">
          <Link onClick={orderReturn} href={"/"}>
            Back Home
          </Link>
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;
