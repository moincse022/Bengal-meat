import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import HeroSection from "../../Compontens/HeroSection/HeroSection";
import Subscribe from "../../Compontens/Subscribe/Subscribe";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const ProductDetails = () => {
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const item = useLoaderData();
  
  useEffect(() => {
    const savedCard = localStorage.getItem(`product-${id}`);
    if (savedCard) {
      setCard(JSON.parse(savedCard));
      setIsLoading(false);
    } else if (Array.isArray(item)) {
      const findCard = item.find((card) => card.id == id);
      setCard(findCard);
      localStorage.setItem(`product-${id}`, JSON.stringify(findCard));
      setIsLoading(false);
    } else {
      console.error("item is not an array:", item);
      setIsLoading(false);
    }
  }, [item, id]);

  useEffect(() => {
    if (card) {
      localStorage.setItem(`product-${id}`, JSON.stringify(card));
    }
  }, [card, id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!card) {
    return <p>Product not found</p>;
  }

  return (
    <>
    <div className="mt-24">
    <HeroSection/>
    </div>
      <div className="w-full py-24">
      <div className="mx-auto w-1/2">
        <div className="flex justify-center gap-8">
          <div>
            <img src={card.img} alt={card.name} className="" />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold">{card.name}</h2>
            <div>
              <div className="flex gap-4">
                <p>Price:</p>
                <p className="font-bold">Quantity: {card.amount} gm</p>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="py-4 font-bold text-2xl flex items-center "><FaBangladeshiTakaSign /> {card.price}</p>
                </div>
                <div className="flex gap-2 border border-black rounded-full py-1 px-4">
                  <h2 className="mx-2 cursor-pointer" onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</h2>
                  <p>{count}</p>
                  <h2 className="mx-2 cursor-pointer" onClick={() => setCount(count + 1)}>+</h2>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="hover:bg-orange-400 text-black border border-black font-bold px-4 py-1 rounded-full">
                Add to Cart
              </button>
              <button className="hover:bg-orange-400 text-black border border-black font-bold px-4 py-1 rounded-full">
                Add to Favourite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="">
        <Subscribe/>
    </div>
    </>
  
  );
};

export default ProductDetails;
