import React from "react";

const CategoryCard = ({ item }) => {
  // console.log(item)
  const { img, title } = item;
  return (
    <div className="max-w-xs p-6 rounded-md  z-60 dark:bg-gray-900 dark:text-gray-50  shadow-2xl">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500
         hover:scale-110 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
      />
      <div className="mt-6 mb-2">
        <span className="block text-2xl  font-2xl text-center ">{title}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
