// import data from "../HeroSection/HeroData";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const HeroSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   };

//   return (
//     <div>
//       <div className="flex gap-4 mt-8 justify-center slider-container">
//         <Slider {...settings}>
//           {data?.map((item) => (
//             <div className="bg-white text-black p-2 shadow-2xl w-42 h-42" key={item.id}>
//               <img src={item.img} alt="" className="w-24 h-24" />
//               <h1 className="text-center py-2">{item.name}</h1>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../HeroSection/HeroData";
import Card from "./Card";

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

const HeroSection = () => {
  return (
    <div className="slider-container -mt-16">
      <Slider {...settings} className="w-3/4 mx-auto ">
        {data.map((item) => (
          <div className="">
            <Card item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
