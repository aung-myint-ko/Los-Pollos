import React, { useEffect, useState } from "react";
import { IntroCard } from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Urlfor } from "../lib/client";

function Popular({ popularRecipes }) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <div className=" px-4 pt-10 md:px-16 md:pt-14 lg:px-24 lg:pt-20">
      <p
        data-aos="fade-up"
        className="orange text-sm md:text-base md:mb-2 font-semibold "
      >
        Popular Recepies
      </p>
      <h1
        data-aos="fade-up"
        className=" mb-6 md:mb-8 text-3xl md:text-4xl font-bold"
      >
        Hot Menu That Will <br /> Make You Hungry
      </h1>
      <Swiper
        data-aos="fade-up"
        slidesPerView={
          windowSize.width <= 425 ? 2 : windowSize.width <= 800 ? 3 : 4
        }
        spaceBetween={
          windowSize.width <= 425 ? 10 : windowSize.width <= 800 ? 20 : 30
        }
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {popularRecipes.map((recipe) => {
          const JPGsrc = Urlfor(recipe.image).url();
          return (
            <SwiperSlide key={recipe.slug.current}>
              <IntroCard
                image={JPGsrc}
                name={recipe.name}
                price={recipe.price[0]}
                slug={recipe.slug.current}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Popular;
