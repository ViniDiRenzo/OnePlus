import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="block py-8 flex justify-between relative ">
      <div className="text-4xl font-bold">
        <Link to="/">+1 Drywall</Link>
      </div>
      <Hamburger open={open} setOpen={setOpen} />
      <div
        className={`bg-white duration-300 p-6 absolute top-16 left-0 right-0 md:p-0 md:static md:translate-x-0 z-10 ${
          open ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <ul className={`flex items-center gap-5 text-2xl flex-col md:flex-row`}>
          <li className="relative">
            <Link className="nav-link" to="/" onClick={() => setOpen(!open)}>
              Home
            </Link>
          </li>
          <li className="relative">
            <Link
              className="nav-link"
              to="/about"
              onClick={() => setOpen(!open)}
            >
              About
            </Link>
          </li>
          <li className="relative">
            <Link
              className="nav-link"
              to="/projects"
              onClick={() => setOpen(!open)}
            >
              Projects
            </Link>
          </li>
          <li className="relative">
            <Link
              className="nav-link"
              to="/contact"
              onClick={() => setOpen(!open)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
