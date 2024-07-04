import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../BestDeals/DealData";
import popularLogo from '../../assets/DealSeller/crown.png'
import PopularItemCard from "./PopularItemCard";
const PopularSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
  return (
    <>
      <div className="mt-72 flex  justify-between items-center gap-4 w-3/4 mx-auto">
        <div className="flex items-center gap-4">
          <img src={popularLogo} alt="" className="w-8 h-8" />
          <h1 className="text-4xl  mt-3">Popular Items</h1>
          <hr className="w-96 bg-black mt-8 h-1" />
        </div>
        <button className="btn btn-success">View All</button>
      </div>
      <div className="slider-container p-4 ">
        <Slider {...settings} className="w-3/4 mx-auto ">
          {data?.map((item) => (
            <div className="">
              <PopularItemCard item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default PopularSection;
