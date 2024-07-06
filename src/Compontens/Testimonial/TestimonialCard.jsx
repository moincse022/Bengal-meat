import React from 'react';

const TestimonialCard = ({item}) => {
    console.log(item)
    return (
        <div className="mx-2 shadow-2xl  p-4">
        <div className="flex justify-start items-center gap-2 ">
        <div className="">
            <img src={item.image} alt="" className="w-12 h-12" />
          </div>
          <div className="">
            <h2 className="font-bold text-xl">{item.name}</h2>
            <h2>{item.title}</h2>
          </div>
        </div>
        <p className="py-4">{item.desc}</p>
      </div>
    );
};

export default TestimonialCard;