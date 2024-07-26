import React from "react";
import images from "../assets/images/project-one";

function Hero() {
  return (
    <div className="block py-32 bg-[url('./assets/images/project-three/image-2.webp')] bg-left text-white text-center md:text-left">
      <div className="md:max-w-[50%] mx-auto md:mx-0">
        <h1 className="header">Drywall Solutions</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          nobis recusandae eos nam dolor velit est! Vitae eligendi aliquam
          ducimus!
        </p>
      </div>
    </div>
  );
}

export default Hero;
