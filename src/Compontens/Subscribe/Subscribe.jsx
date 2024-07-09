import React from "react";
import image from "../../assets/Image/beef-bacon.png";
const Subscribe = () => {
  return (
    <div className=" w-3/4 mx-auto mt-8">
      <div className=" flex-col lg:flex-row-reverse md:flex md:justify-between items-center md:gap-24">
        <img src={image} className="max-w-sm rounded-lg -mb-6" />
        <div>
          <h1 className="text-4xl font-bold">
            Subscribe and Get <br /> Regular Offer
          </h1>
          <div className="py-4">
            <input
              type="text"
              placeholder="write your email address"
              className="py-2"
            />{" "}
            <br />
          </div>
          <div className="py-4">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
