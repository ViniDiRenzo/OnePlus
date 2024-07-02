import React, { useState } from "react";

function Hamburger({ open, setOpen }) {
  return (
    <div
      className="w-7 h-8 flex flex-col justify-around items-center cursor-pointer overflow-hidden md:hidden"
      onClick={() => setOpen(!open)}
    >
      <div
        className={`line ${
          open && `origin-right -rotate-45 -translate-x-1 scale-x-105 `
        }`}
      ></div>
      <div className={`line ${open && `translate-x-[100%]`}`}></div>
      <div
        className={`line ${
          open && `origin-right rotate-45 -translate-x-1 scale-x-105 `
        }`}
      ></div>
    </div>
  );
}

export default Hamburger;
