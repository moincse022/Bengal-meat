import React from "react";

const AboutCard = ({ item }) => {
  console.log(item);
  return (
    <div className=" mx-2 shadow-xl bg-red-9">
      <img
        src={item.img}
        className=" bg-red-900"
        // src="https://placeimg.com/400/225/arch"
        alt="Shoes"
      />
    </div>
  );
};

export default AboutCard;
