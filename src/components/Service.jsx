import React from "react";

function Service({ name, icon, description }) {
  return (
    <div className="flex justify-center items-center border-2 border-black px-4 py-6 rounded-md gap-12 flex-col w-80 md:w-60 text-center hover:scale-105 duration-300">
      {icon}
      <h4 className="font-bold text-2xl">{name}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Service;
