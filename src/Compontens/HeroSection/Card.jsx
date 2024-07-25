import { Link } from "react-router-dom";

const Card = ({ item }) => {
  // console.log(menuId);

  return (
    <div>
      <Link to={`/show/${item.name}`}>
        <div
          className="mx-2 bg-slate-300 hover:bg-orange-500 rounded-2xl"
          key={item.id}
        >
          <img src={item.img} alt={item.name} className="w-24 h-28 mx-auto" />
          <h1 className="text-center py-2 font-bold">{item.name}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Card;
