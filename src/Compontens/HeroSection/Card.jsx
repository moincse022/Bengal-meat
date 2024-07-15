

const Card = ({ item,menuId }) => {
console.log(menuId);

  return (
    <div>
      <div  
        className={`bg-slate-200 px-2 mx-4 hover:bg-orange-500 w-42 rounded-xl h-42 ${menuId===item.name? " bg-orange-500 p-2 shadow-2xl w-42 rounded-xl h-42":"  "}`}
        key={item.id}
      >
        <img src={item.img} alt={item.name} className="w-24 h-28 mx-auto" />
        <h1 className="text-center py-2 font-bold">{item.name}</h1>
      </div>
    </div>
  );
};

export default Card;
