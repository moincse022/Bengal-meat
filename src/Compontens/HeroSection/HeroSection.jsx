import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../HeroSection/HeroData";
import Card from "./Card";
// import ShowData from "../../Page/ShowData/ShowData";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
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

const HeroSection = () => {
  const [selectedName, setSelectedName] = useState('');


  const handleClick = (name) => {
    setSelectedName(name);
    localStorage.setItem('selectedName', name);
    
  }
console.log(selectedName);
  return (
    <div className="slider-container -mt-16">
      <Slider {...settings} className="w-3/4 mx-auto">
        {data?.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.name)}
          >
            <Card item={item} />
          </div>
        ))}
      </Slider>
      {/* {selectedName && (
        <ShowData name={selectedName} />
      )} */}
    </div>
  );
};

export default HeroSection;
