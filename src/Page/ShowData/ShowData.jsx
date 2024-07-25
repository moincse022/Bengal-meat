import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ShowData = () => {
  const [filter, setFilter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();
  const item = useLoaderData();

  useEffect(() => {
    const savedData = localStorage.getItem(`show-${name}`);
    if (savedData) {
      setFilter(JSON.parse(savedData));
      setIsLoading(false);
    } else if (Array.isArray(item)) {
      const filteredData = item.filter((data) =>
        data.category.toLowerCase().includes(name.toLowerCase())
      );
      setFilter(filteredData);
      localStorage.setItem(`show-${name}`, JSON.stringify(filteredData));
      setIsLoading(false);
    } else {
      console.error("item is not an array or is undefined:", item);
      setIsLoading(false);
    }
  }, [item, name]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (filter.length === 0) {
    return <p>No data found</p>;
  }

  return (
    <div className="flex items-center flex-wrap gap-6 mt-10">
      {filter.map((item, index) => (
        <div key={index} className="max-w-xs p-6 rounded-md z-60 dark:bg-gray-900 dark:text-gray-50 shadow-2xl">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block font-medium">{item.name}</span>
            <div className="flex justify-around items-center">
              <p className="text-black font-bold">{item.amount}</p>
              <span className="block text-xl font-semibold text-black">
                {item.rating}
              </span>
              <button className="bg-[#FF6B6B] text-black font-bold py-2 px-4 rounded-full">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowData;
