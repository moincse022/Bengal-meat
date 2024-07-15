import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../HeroSection/HeroData";
import Card from "./Card";
import { Link } from "react-router-dom";
// import ShowData from "../../Page/ShowData/ShowData";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  loop: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const HeroSection = ({ onData }) => {
  const handleClick = (menu) => {
    onData(menu);
    console.log(menu);
  };
  return (
    <div className="slider-container -mt-16">
      <Slider {...settings} className="w-3/4 mx-auto ">
        {data?.map((item) => (
          <div
            key={item.id}
            className=""
            onClick={() => handleClick(item.name)}
          >
            <Card item={item} menuId={item.id} />
            {/* <ShowData menuId={menu} /> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
