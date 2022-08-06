import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../public/images/logo.png";
import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../store/states";

function Nav() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cartItems, hamburgerMenu } = useSelector(
    (state) => state.shopReducer
  );

  const handleClick = () => {
    dispatch(action.hamburgerMenuClick());
  };

  useEffect(() => {
    const CloseNav = (e) => {
      if (
        e.target.id !== "hamburger" &&
        e.target.id !== "line1" &&
        e.target.id !== "line2" &&
        e.target.id !== "line3"
      ) {
        dispatch(action.hamburgerMenuCloseClickSpace());
      }
    };
    document.body.addEventListener("click", CloseNav);
    return () => document.body.removeEventListener("click", CloseNav);
  }, [hamburgerMenu]);

  return (
    <>
      <div
        className={`nav sticky top-0 left-0 px-4 py-2 md:px-16 lg:px-24 flex justify-between items-center shadow-md z-10 bg-white`}
      >
        <div
          onClick={handleClick}
          id={"hamburger"}
          className={
            hamburgerMenu
              ? "hamburger md:hidden active_ham z-50"
              : "hamburger md:hidden z-50"
          }
        >
          <div id="line1" className="ham_line"></div>
          <div id="line2" className="ham_line"></div>
          <div id="line3" className="ham_line"></div>
        </div>
        <Link href={"/"}>
          <div className=" relative w-24 h-9 ">
            <Image
              className=" cursor-pointer"
              src={Logo}
              alt={""}
              layout={"fill"}
            ></Image>
          </div>
        </Link>
        <ul className={` hidden md:grid grid-cols-3 gap-x-6 z-30`}>
          <li className="w-full py-2 text-xl text-center md:text-lg font-semibold ">
            <Link href={"/"}>
              <a className={router.pathname == "/" ? "navActive" : ""}>Home</a>
            </Link>
          </li>
          <li className="w-full py-2 text-xl text-center md:text-lg font-semibold">
            <Link href={"/menu"}>
              <a
                className={
                  router.pathname == "/menu" ||
                  router.pathname == "/menu/[recipeSlug]"
                    ? "navActive"
                    : ""
                }
              >
                Menu
              </a>
            </Link>
          </li>
          <li className="w-full py-2 text-xl text-center md:text-lg font-semibold">
            <Link href={"/contact"}>
              <a className={router.pathname == "/contact" ? "navActive" : ""}>
                Contact
              </a>
            </Link>
          </li>
        </ul>

        <ul
          className={
            hamburgerMenu
              ? `navlinks fixed top-0 left-0 bg_black w-full h-screen md:grid grid-cols-3 gap-x-6 z-30`
              : ` hidden `
          }
        >
          <div className=" w-1/2 bg-orange-100 h-full flex flex-col gap-y-5 justify-center items-center">
            <li className="w-full py-2 text-xl text-center md:text-lg font-semibold ">
              <Link href={"/"}>
                <a className={router.pathname == "/" ? "navActive" : ""}>
                  Home
                </a>
              </Link>
            </li>
            <li className="w-full py-2 text-xl text-center md:text-lg font-semibold">
              <Link href={"/menu"}>
                <a
                  className={
                    router.pathname == "/menu" ||
                    router.pathname == "/menu/[recipeSlug]"
                      ? "navActive"
                      : ""
                  }
                >
                  Menu
                </a>
              </Link>
            </li>
            <li className="w-full py-2 text-xl text-center md:text-lg font-semibold">
              <Link href={"/contact"}>
                <a className={router.pathname == "/contact" ? "navActive" : ""}>
                  Contact
                </a>
              </Link>
            </li>
          </div>
        </ul>
        <Link href={"/carts"}>
          <div className=" cursor-pointer relative">
            <BsBag strokeWidth={0.5} size={20} />
            <div className="icon">
              <p>{cartItems.length}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Nav;
