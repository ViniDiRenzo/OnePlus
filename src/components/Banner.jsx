import React from "react";

function Banner({ pageName, image }) {
  return (
    <div
      className={`block py-12 bg-[url('${image}')] bg-center text-white text-center md:text-left`}
    >
      <h1 className="header m-0 drop-shadow-xl">{pageName}</h1>
    </div>
  );
}

export default Banner;
