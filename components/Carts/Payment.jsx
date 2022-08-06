import React from "react";
import Image from "next/image";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { action } from "../../store/states";
import Success from "../../public/images/success.png";

function Payment(props) {
  const dispatch = useDispatch();
  let { cartItems, finalPrice, charges, customer, payProcess } = useSelector(
    (state) => state.shopReducer
  );
  cartItems.map((item) => (finalPrice = finalPrice + item.total));
  let LastPrice = finalPrice + charges.tax + charges.delivery;

  const [customerInfo, setCustomerInfo] = useState(customer);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCustomerInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClick = () => {
    setError(validation(customerInfo));
    if (customerInfo.name && customerInfo.address && customerInfo.kpay) {
      dispatch(action.payNowPayment());
      toast.custom(
        (t) => (
          <div
            className={
              " w-9/12 md:w-fit px-5 py-7 bg-white border flex flex-col items-center rounded-xl shadow-md"
            }
          >
            <div className="relative w-14 h-14  my-4">
              <Image src={Success} alt="" layout="fill"></Image>
            </div>
            <h1 className="mb-2 text-lg font-bold">Thank You</h1>
            <h1>Your Order Will Get In 3 Hours</h1>
          </div>
        ),
        { duration: 2000 }
      );
    }
  };
  const handleClose = () => {
    dispatch(action.closePayNow());
  };

  const validation = (value) => {
    const err = {};
    if (!value.name) {
      err.name = "* Enter Your Name";
    }
    if (!value.address) {
      err.address = "* Enter Your Address";
    }
    if (!value.kpay) {
      err.kpay = "* Enter Your Kpay";
    }
    return err;
  };

  return (
    <div className=" fixed top-0 left-0 flex justify-center items-center w-full h-screen bg-white z-30">
      <div
        data-aos="fade-up"
        className=" w-11/12 md:w-1/2 px-5 md:px-9 py-5 rounded-md bg-slate-50  border shadow-lg "
      >
        <div className="grid grid-cols-2 mb-5 justify-between items-center">
          <h1 className=" orange  font-bold text-2xl ">Payment Details</h1>
          <div className="flex flex-col items-end">
            <MdClose
              onClickCapture={handleClose}
              className=" cursor-pointer mb-3"
              size={25}
              color={"#f64b15"}
            />
            <h1 className="text-lg font-black">Total</h1>
            <h1 className="text-lg font-black">{LastPrice} MMK</h1>
          </div>
        </div>

        <form className=" flex flex-col " action="">
          <label htmlFor="" className="mb-1 text-gray-600 font-medium">
            Name
          </label>
          <div className="mb-3">
            <input
              className=" bg-gray-200 outline-none px-3 py-1 mb-1 w-full "
              name="name"
              value={customerInfo.name}
              onChange={handleChange}
              type="text"
              placeholder=""
            />
            <p className=" text-xs text-red-600 italic">{error.name}</p>
          </div>

          <label htmlFor="" className="mb-1 text-gray-600 font-medium">
            Address
          </label>
          <div className="mb-3">
            <input
              className=" bg-gray-200 outline-none px-3 py-1 mb-1 w-full "
              name="address"
              value={customerInfo.address}
              onChange={handleChange}
              type="text"
              placeholder=""
            />
            <p className=" text-xs text-red-600 italic">{error.address}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="mb-1 text-gray-600 font-medium">
              Kpay Number
            </label>
            <input
              className=" bg-gray-200 outline-none px-3 py-1 mb-1 w-full "
              name="kpay"
              value={customerInfo.kpay}
              onChange={handleChange}
              type="text"
              placeholder=""
            />
            <p className=" text-xs text-red-600 italic">{error.kpay}</p>
          </div>
        </form>
        <button
          onClick={handleClick}
          className="button mt-3 px-5 py-1 text-lg text-white rounded tracking-wider "
        >
          Pay
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default Payment;
