import React from "react";

function Banner({ pageName, imageUrl, objectPosition }) {
  return (
    <div className={`block py-12 text-white text-center md:text-left relative`}>
      <img
        className={`absolute inset-0 w-full h-full object-cover ${objectPosition}`}
        src={imageUrl}
        alt="background image"
      />
      <h1 className="header m-0 drop-shadow-xl">{pageName}</h1>
    </div>
  );
}

export default Banner;
