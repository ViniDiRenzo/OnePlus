import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

function Footer() {
  return (
    <>
      <footer className="block pt-20 pb-12 flex flex-col gap-12 bg-black text-white  md:flex-row md:justify-between">
        <div className="border-b-2 border-color-white w-max h-max pb-3 mx-auto md:mx-0">
          <div className="text-center md:text-left text-4xl mb-8 font-bold">
            <Link to="/">+1 Drywall</Link>
          </div>
          <p className="flex justify-center items-center md:justify-start">
            <span className="w-5 mr-2">
              <MdOutlineEmail />
            </span>
            Email: example@email.com
          </p>
          <p className="flex justify-center items-center md:justify-start">
            <span className="w-5 mr-2">
              <LuPhone />
            </span>
            Phone: 99-9999-999
          </p>
        </div>
        <ul className="text-center text-3xl flex flex-col gap-5">
          <li>
            <Link className="hover:opacity-70" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:opacity-70" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:opacity-70" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="hover:opacity-70" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
