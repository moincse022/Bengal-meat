import { Link } from "react-router-dom";

const DealCard = ({ deal }) => {
  console.log(deal);
  const { id, img, title, price } = deal;
  return (
    <div className="max-w-xs p-6 rounded-md  z-60 dark:bg-gray-900 dark:text-gray-50  shadow-2xl">
      <Link to={`/product/${id}`}>
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
      </Link>
      <div className="mt-6 mb-2">
        <span className="block  font-medium tracki ">{title}</span>

        <div className="flex justify-around items-center">
          <p className="text-black font-bold">1kg</p>
          <span className="block text-xl font-semibold text-black">
            {price}
          </span>
          <button className="bg-[#FF6B6B] text-black font-bold py-2 px-4 rounded-full">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
