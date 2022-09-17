import React from "react";
import Head from "next/head";
import MenuContent from "../../components/Menu/MenuContent";
import { client } from "../../lib/client";
function Menu({ Pizza, Burger, Noodle, Drink }) {
  return (
    <div>
      <Head>
        <title>Menu | Los Pollos</title>
        <link rel="icon" href="/images/icon.png" />
        <meta
          name="description"
          content="Los Pollos landed in Myanmar in 1977, when the first restaurant opened its doors at Bogyoke Road"
        />
        <meta
          name="keywords"
          content="Los Pollos, los pollos, los pollos myanmar, los pollos vercel"
        />
        <meta property="og:title" content="Menu | Los Pollos" />
        <meta
          property="og:description"
          content="Los Pollos landed in Myanmar in 1977, when the first restaurant opened its doors at Bogyoke Road"
        />
        <meta
          property="og:image"
          content="https://los-pollos.vercel.app/images/icon.png"
        />
        <meta property="og:type" content="food delivery" />
        <meta property="twitter:title" content="Menu | Los Pollos" />
        <meta
          property="twitter:description"
          content="Los Pollos landed in Myanmar in 1977, when the first restaurant opened its doors at Bogyoke Road"
        />
        <meta
          property="twitter:image"
          content="https://los-pollos.vercel.app/images/icon.png"
        />
        <meta name="twitter:card" content="summary" />
      </Head>
      <MenuContent
        Pizza={Pizza}
        Burger={Burger}
        Noodle={Noodle}
        Drink={Drink}
      />
    </div>
  );
}
export const getServerSideProps = async () => {
  const pizzaQuery = `*[_type == "allRecipes" && category == "pizza" ]`;
  const burgerQuery = `*[_type == "allRecipes" && category == "burger" ]`;
  const noodleQuery = `*[_type == "allRecipes" && category == "noodle" ]`;
  const drinkQuery = `*[_type == "allRecipes" && category == "drink" ]`;
  const Pizza = await client.fetch(pizzaQuery);
  const Burger = await client.fetch(burgerQuery);
  const Noodle = await client.fetch(noodleQuery);
  const Drink = await client.fetch(drinkQuery);

  return {
    props: {
      Pizza,
      Burger,
      Noodle,
      Drink,
    },
  };
};

export default Menu;
