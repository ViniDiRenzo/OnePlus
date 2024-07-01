import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="block py-4 bg-blue-100 flex justify-between relative">
      <div>+1 Drywall</div>
      <Hamburger open={open} setOpen={setOpen} />
      {open && (
        <div className="bg-blue-100 p-5 absolute left-0 right-0 top-16">
          <ul className="flex flex-col items-left gap-4">
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
      )}
    </nav>
  );
}

export default Navbar;
