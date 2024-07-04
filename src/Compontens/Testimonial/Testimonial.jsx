import data from "../Testimonial/TestimonialData";

const Testimonial = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto flex justify-center items-center">
        {data?.map((item) => (
          <div key={item.id} className="border-2 border-black mx-2 shadow-2xl  p-2">
            <div className="flex justify-start items-center ">
            <div className="">
                <img src={item.image} alt="" className="w-12 h-12" />
              </div>
              <div className="">
                <h2>{item.name}</h2>
                <h2>{item.title}</h2>
              </div>
            </div>
            <p className="p-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
