import Data from "../Testimonial/TestimonialData";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
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
  // console.log(Data)
  return (
    <div className="mt-24 bg-[#f4f6f9]">
      <h2 className="text-4xl text-center font-bold py-8">Testimonials</h2>

      <Slider
        {...settings}
        className="w-3/4 mx-auto flex justify-center items-center"
      >
        {Data?.map((item, id) => (
          <div className="" key={id}>
            <TestimonialCard item={item} />;
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
