import React from "react";
import Head from "next/head";
import CartContent from "../components/Carts/CartContent";
import { useSelector } from "react-redux";
import Payment from "../components/Carts/Payment";

function Cart() {
  let { payProcess } = useSelector((state) => state.shopReducer);
  return (
    <div>
      <Head>
        <title>Cart | Los Pollos</title>
        <meta
          name="description"
          content="Los Pollos landed in Myanmar in 1977,  when the first restaurant opened its doors at Bogyoke Road"
        />
        <meta
          name="keywords"
          content="Los Pollos, los pollos, los pollos myanmar"
        />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      {payProcess === true ? <Payment /> : <CartContent />}
    </div>
  );
}

export default Cart;
