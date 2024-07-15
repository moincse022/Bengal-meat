import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";

const DealCard = ({ deal }) => {
  const { id, img, title, price } = deal;
  return (
    <div className="max-w-xs p-4 rounded-lg bg-white shadow-lg dark:bg-gray-800 dark:text-gray-50">
      <Link to={`/product/${id}`}>
        <img
          src={img}
          alt={title}
          className="object-cover object-center w-full rounded-md h-56 dark:bg-gray-500"
        />
      </Link>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
        <div className="flex justify-between items-center mt-2">
          <p className="flex items-center text-gray-600 dark:text-gray-300 font-medium">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M3 4h18v2H3V4zm1 14h4v4H4v-4zm0-7h4v4H4v-4zm0-7h4v4H4V4zm6 14h4v4h-4v-4zm0-7h4v4h-4v-4zm0-7h4v4h-4V4zm6 14h4v4h-4v-4zm0-7h4v4h-4v-4zm0-7h4v4h-4V4z"></path></svg>
            1kg
          </p>
          <span className="flex items-center text-xl font-bold text-gray-900 dark:text-gray-100">
            <TbCurrencyTaka className="text-xl" />
            {price}
          </span>
        </div>
        <button className="mt-4 w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-full transition-colors hover:bg-yellow-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DealCard;
