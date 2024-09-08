import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function CallToGallery() {
  return (
    <div className="block py-16 bg-primary text-center md:text-left text-white flex flex-col md:flex-row gap-12 items-center justify-between">
      <div>
        <h2 className="heading">Get inspired !</h2>
        <p>See how our experts carry out the work in a timely manner!</p>
      </div>
      <Link
        to="/projects"
        className="flex gap-4 bg-white text-primary font-bold px-4 py-2 rounded-md w-fit"
      >
        See more! <FaArrowRight size={24} />
      </Link>
    </div>
  );
}

export default CallToGallery;
