import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  return (
    <nav className="block py-5 bg-blue-100 flex justify-between relative">
      <div>+1 Drywall</div>
      <Hamburger open={open} setOpen={setOpen} screenWidth={screenWidth} />
      <div
        className={`bg-blue-100 duration-300
          ${
            screenWidth <= 768 ? "p-5 absolute top-16 left-0 right-0" : "static"
          }
          ${
            open || screenWidth >= 768 ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <ul
          className={`flex items-center gap-5 text-2xl
            ${screenWidth <= 768 ? "flex-col gap" : ""}`}
        >
          <li>
            <Link to="/" onClick={() => setOpen(!open)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(!open)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setOpen(!open)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(!open)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
