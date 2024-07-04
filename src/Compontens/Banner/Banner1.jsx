import React from "react";
import { IoLogoApple } from "react-icons/io";
// import { FaGooglePlay } from "react-icons/fa";
import googlePlay from '../../assets/Image/googlePlayLogo (1).png'
const Banner1 = () => {
  const backgroundStyle = {
    width: "100%",
    height: "50vh",
    backgroundImage: "url(https://i.ibb.co/QmRpYwp/adv001.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginTop: "40px",
  };
  return (
    <div style={backgroundStyle}>
      <div className="flex justify-start items-center h-full">
        <h1 className="text-3xl font-bold text-black ml-32">
          Download Our
          <br />
          App
        </h1>
      </div>
      <div className="flex items-center gap-2 -mt-20">
            {/* playstore */}
            <div className="flex just-start items-center ml-32 bg-black hover:text-amber-400 text-white p-2 rounded-lg border-2 border-white w-40 -mt-6 gap-4">
                 <img src={googlePlay} alt="" className="w-8 h-8" />
                <div className="">
                    <h2>Get it on</h2>
                    <h2 className=" font-bold">Google Play</h2>
                 
                </div>
            </div>
            {/* appstore */}
            <div className="flex just-start items-center  bg-black hover:text-amber-400 text-white p-2 rounded-lg border-2 border-white w-44 -mt-6 gap-4">
                <IoLogoApple className="w-8 h-8" />
                <div className="">
                    <h2>Download on </h2>
                    <h2 className=" font-bold">App Store</h2>
                </div>
                </div>
                </div>
    </div>
  );
};

export default Banner1;
