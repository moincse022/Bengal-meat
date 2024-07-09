import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../About/AboutData";
import Slider from "react-slick";
import AboutCard from "./AboutCard";
const About = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="mt-24">
      <div className="w-3/4 text-center mx-auto p-4">
        <h2 className="text-2xl font-bold text-center py-2">
          Why Bengal Meat?
        </h2>
        <p className="text-center">
          At Bengal Meat, food safety is always our priority. We maintain a
          strict 8 step value chain starting from animal sourcing and extending
          to ante-mortem, slaughtering, post-mortem, fabrication, chilling and
          distribution .
        </p>
      </div>

      <div className="slider-container mt-8  ">
        <Slider {...settings} className="w-3/4 mx-auto">
          {Data?.map((item) => (
            <div className="">
              <AboutCard item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default About;
