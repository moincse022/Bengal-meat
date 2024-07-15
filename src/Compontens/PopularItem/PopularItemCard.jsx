import React, { useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FaPlus } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';

const PopularItemCard = ({ item }) => {
  const { name, img, price, amount, rating } = item;
  const [cart, setCart] = useState(0);

  const cartIncrement = () => setCart(cart + 1);

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
      <div className="p-4 flex items-center">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <span className="text-yellow-500 font-bold flex items-center">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-3.5 2.1 1-4.2-3.3-2.8 4.3-.3L10 5l1.5 4.7 4.3.3-3.3 2.8 1 4.2z"></path></svg>
              Top of the week
            </span>
          </div>
          <h2 className="text-gray-800 text-xl font-bold mt-2">{name}</h2>
          <div className="flex gap-12 items-center mt-2">
            <span className="text-gray-600 flex items-center">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M3 4h18v2H3V4zm1 14h4v4H4v-4zm0-7h4v4H4v-4zm0-7h4v4H4V4zm6 14h4v4h-4v-4zm0-7h4v4h-4v-4zm0-7h4v4h-4V4zm6 14h4v4h-4v-4zm0-7h4v4h-4v-4zm0-7h4v4h-4V4z"></path></svg>
              {amount}
            </span>
            <span className="text-gray-800 font-bold text-lg flex items-center">
              <TbCurrencyTaka className="text-xl" />
              {price}
            </span>
          </div>
          <div className="flex gap-12 items-center mt-4">
            <button 
              onClick={cartIncrement} 
              className="bg-yellow-500 text-white p-2 rounded-full focus:outline-none hover:bg-yellow-600"
            >
              <FaPlus />
            </button>
            <span className="text-gray-600 text-lg flex items-center">
              <CiStar className="text-yellow-500 mr-1" />
              {rating}
            </span>
          </div>
        </div>
        <img className="w-32 h-32 rounded-lg object-cover" src={img} alt={name} />
      </div>
    </div>
  );
};

export default PopularItemCard;


// export default PopularItemCard;
// import React, { useState } from "react";
// import { TbCurrencyTaka } from "react-icons/tb";
// import { FaPlus, FaMinus } from "react-icons/fa6";
// import { CiStar } from "react-icons/ci";

// const PopularItemCard = ({ item }) => {
//   const { name, img, price, amount, rating } = item;
//   const [cart, setCart] = useState(0);

//   const cartIncrement = () => setCart(cart + 1);
//   const cartDecrement = () => setCart(cart > 0 ? cart - 1 : 0);

//   return (
//     <div className="flex bg-white shadow-xl rounded-lg overflow-hidden mx-4 my-6">
     
//       <div className="w-2/3 p-4 flex flex-col justify-between">
//         <div>
//           <h2 className="text-xl font-bold mb-2">{name}</h2>
//           <div className="flex justify-between items-center mb-4">
//             <p className="text-gray-600">{amount}gm</p>
//             <p className="flex items-center text-lg font-semibold">
//               <TbCurrencyTaka className="text-2xl" />
//               {price}
//             </p>
//           </div>
//         </div>
//         <div>
//           <p className="text-2xl font-bold text-center mb-4">{cart}</p>
//           <div className="flex justify-between items-center">
//             <button 
//               onClick={cartIncrement} 
//               className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-10 h-10"
//             >
//               <FaPlus />
//             </button>
//             <button 
//               onClick={cartDecrement} 
//               className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white rounded-full w-10 h-10"
//             >
//               <FaMinus />
//             </button>
//             <button className="flex items-center text-yellow-500">
//               <CiStar className="text-2xl mr-1" />
//               {rating}
//             </button>
//           </div>
//         </div>
//       </div>
//       <figure className="w-1/3">
//         <img src={img} alt={name} className="w-full h-full object-cover" />
//       </figure>
//     </div>
//   );
// };

// export default PopularItemCard;

