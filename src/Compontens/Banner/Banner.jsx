import React from 'react';

const Banner = () => {
    return (
        <div className='-z-2'>
            <div
  className="hero min-h-screen  "
  style={{
    backgroundImage: "url(https://i.ibb.co/nB41Fk9/barger.webp)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold text-amber-500">BANGLADESH’S</h1>
      <p className="mb-5 text-3xl font-bold text-amber-500 ">First & Only</p>
      <p className="mb-5 text-4xl font-bold text-white flex">   International Standard Abattoir
   
      </p>
      <button className="btn bg-amber-500 text-black w-48">Start Shopping Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;