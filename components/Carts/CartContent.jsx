import Link from "next/link";
import React from "react";
import { Toaster } from "react-hot-toast";
import { BsBag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { CartCard } from "../Card";
import EmptyCart from "../../public/images/empty-cart.png";
import Image from "next/image";
import { action } from "../../store/states";

function CartContent(props) {
  const dispatch = useDispatch();
  let { cartItems, finalPrice, charges } = useSelector(
    (state) => state.shopReducer
  );
  cartItems.map((item) => (finalPrice = finalPrice + item.total));
  let LastPrice = finalPrice + charges.tax + charges.delivery;

  const HandlePayment = () => {
    dispatch(action.payNow());
  };
  return (
    <>
      <div className="px-4 pt-10 pb-14 md:px-16 md:pt-14 md:pb-16 lg:px-24 lg:pt-10 lg:pb-20">
        <h1
          data-aos="fade-up"
          className=" flex items-center justify-center gap-x-4 mb-5 text-3xl md:text-4xl font-bold "
        >
          <BsBag strokeWidth={0.5} size={35} />
          My Carts
        </h1>
        {cartItems.length === 0 ? (
          <Empty />
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            <div data-aos="fade-up" className=" w-full lg:w-3/5">
              <div className=" mb-3 h-1 w-full bg-slate-500"></div>
              <div className=" cart h-48 md:h-60 overflow-y-scroll">
                {cartItems.map((item) => {
                  return (
                    <CartCard
                      id={item.id}
                      key={item.slug.current}
                      image={item.image}
                      name={item.name}
                      size={item.size}
                      price={item.price}
                      quantity={item.quantity}
                      total={item.total}
                    />
                  );
                })}
              </div>
              <div className=" mt-3 h-1 w-full bg-slate-500"></div>
            </div>
            <div
              data-aos="fade-up"
              className=" flex flex-col justify-center mx-auto p-5 rounded-md bg-gray-100 shadow-md"
            >
              <h1 className="mb-3 font-black text-xl">Charges & Discount</h1>
              <div className=" grid grid-cols-2 md:grid-cols-2 gap-x-3 md:gap-x-10 mb-7">
                <h1 className="  text-sm md:text-base text-gray-600">
                  Delivery Charges
                </h1>
                <h1 className="text-sm md:text-base font-black text-end">
                  {charges.delivery} MMK
                </h1>
                <h1 className="text-sm md:text-base text-gray-600">
                  Commercial Taxes
                </h1>
                <h1 className="text-sm md:text-base font-black text-end">
                  {charges.tax} MMK
                </h1>
                <h1 className="text-sm md:text-base text-gray-600">Discount</h1>
                <h1 className="text-sm md:text-base font-black text-end">
                  0.0 %
                </h1>
              </div>
              <div className="grid grid-cols-2 mb-5">
                <h1 className="font-black text-xl">Total Price</h1>
                <h1 className="font-black text-xl text-end">{LastPrice} MMK</h1>
              </div>
              <h1
                onClick={HandlePayment}
                className=" button text-center  py-1 text-lg text-white rounded-full"
              >
                Pay Now
              </h1>
            </div>
          </div>
        )}
        <Toaster />
      </div>
    </>
  );
}

const Empty = () => {
  return (
    <div className="flex flex-col items-center  ">
      <div data-aos="fade-up" className=" w-40 h-40 md:w-52 md:h-52 relative">
        <Image src={EmptyCart} alt={""} layout={"fill"}></Image>
      </div>
      <h1 data-aos="fade-up" className=" font-black text-2xl mt-5">
        Your Bag Is Empty{" "}
      </h1>
      <p
        data-aos="fade-up"
        className=" w-4/5  md:w-4/6 max-w-sm text-center mt-2"
      >
        Looks like you have not added anything to your cart. Go ahead and
        explore food menu
      </p>
      <button
        data-aos="fade-up"
        className="button px-5 py-2 mt-3 text-lg text-white rounded-full"
      >
        <Link href={"/menu"}>Go To Menu</Link>
      </button>
    </div>
  );
};

export default CartContent;
