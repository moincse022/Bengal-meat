import React from "react";

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
      <h1>Content goes here</h1>
    </div>
  );
};

export default Banner1;
