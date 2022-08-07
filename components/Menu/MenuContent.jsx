import React from "react";
import Link from "next/link";
import { MenuCard } from "../Card";
import { useState } from "react";
import { Urlfor } from "../../lib/client";

function MenuContent({ Pizza, Burger, Noodle, Drink }) {
  const [menu, setMenu] = useState(1);
  return (
    <div className=" px-4 pt-10 pb-14 md:px-16 md:pt-14 md:pb-16 lg:px-24 lg:pt-10 lg:pb-20">
      <p
        data-aos="fade-up"
        className="orange text-sm md:text-base md:mb-2 font-semibold text-center"
      >
        Ready To Order?
      </p>
      <h1
        data-aos="fade-up"
        className=" mb-4 text-3xl md:text-4xl font-bold text-center"
      >
        Here&apos;s Menu
      </h1>
      <ul
        data-aos="fade-up"
        className=" menu_filter mb-7 md:mb-10 flex justify-center md:justify-start items-center gap-x-2 md:gap-x-4"
      >
        <li
          onClick={() => setMenu(1)}
          className={` ${
            menu === 1 && "active"
          } text-sm px-5 py-2 md:text-base font-bold rounded-full cursor-pointer`}
        >
          Pizza
        </li>
        <li
          onClick={() => setMenu(2)}
          className={` ${
            menu === 2 && "active"
          }  text-sm px-5 py-2 md:text-base font-bold rounded-full cursor-pointer`}
        >
          Burger
        </li>
        <li
          onClick={() => setMenu(3)}
          className={` ${
            menu === 3 && "active"
          }  text-sm px-5 py-2 md:text-base font-bold rounded-full cursor-pointer`}
        >
          Noodle
        </li>
        <li
          onClick={() => setMenu(4)}
          className={` ${
            menu === 4 && "active"
          }  text-sm px-5 py-2 md:text-base font-bold rounded-full cursor-pointer`}
        >
          Drink
        </li>
      </ul>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5">
        {menu === 1 && <RenderMenu items={Pizza} />}
        {menu === 2 && <RenderMenu items={Burger} />}
        {menu === 3 && <RenderMenu items={Noodle} />}
        {menu === 4 && <RenderMenu items={Drink} />}
      </div>
    </div>
  );
}
const RenderMenu = ({ items }) => {
  return items.map((item) => {
    const img = Urlfor(item.pngimage).url();
    return (
      <MenuCard
        image={img}
        key={item.slug.current}
        name={item.name}
        price={item.price[0]}
        slug={item.slug.current}
      />
    );
  });
};

export default MenuContent;
