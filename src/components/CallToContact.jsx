import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function CallToContact() {
  return (
    <div className="block py-16 bg-primary text-white flex flex-col md:flex-row gap-12 text-center md:text-left items-center justify-between">
      <div>
        <h2 className="heading">Get in Touch</h2>
        <p>
          Leave us a message, and we will get back to you as soon as possible!
        </p>
      </div>
      <Link
        to="/contact"
        className="flex gap-4 bg-white text-primary font-bold px-4 py-2 rounded-md w-fit"
      >
        Contact Us <FaArrowRight size={24} />
      </Link>
    </div>
  );
}

export default CallToContact;
