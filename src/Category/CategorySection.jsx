import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sellerLogo from "../assets/DealSeller/crown.png";
import CategoryData from "../Compontens/BestSeller/SellerData";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <div className="mt-24 flex  justify-between items-center gap-4 w-3/4 mx-auto">
        <div className="flex items-center gap-4">
          <img src={sellerLogo} alt="" className="" />
          <h1 className="text-4xl font-bold  mt-3">Shop By Category</h1>
          <hr className="w-96 bg-black mt-8 h-1" />
        </div>
        <button className="btn btn-success">View All</button>
      </div>
      <div className="slider-container  ">
        <Slider {...settings} className="w-3/4 mx-auto ">
          {CategoryData?.map((item) => (
            <div className="">
              <CategoryCard item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CategorySection;
