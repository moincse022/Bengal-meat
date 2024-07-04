import React from 'react';
import { TbCurrencyTaka } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const PopularItemCard = ({item}) => {
    console.log(item);
    const {id, name, img, price, amount,rating} = item;
    return (
        <div className="card card-side bg-base-100 shadow-xl mx-4">
     
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex  justify-between items-center gap-4">
            <p className="">{amount}gm</p>
            <p className="flex items-center"><TbCurrencyTaka className="text-2xl" />{price}</p>
          </div>
          <div className="flex justify-end absolute bottom-0 left-0 gap-8">
            <button className="btn btn-warning"><FaPlus className='w-8 h-8'/></button>
            <button className="btn"><CiStar className='w-6 h-6 text-amber-400'/>{rating}</button>
          </div>
        </div>
        <figure>
          <img
            src={img}
            alt="Movie" 
            className='w-40 h-44'/>
        </figure>
      </div>
    );
};

export default PopularItemCard;