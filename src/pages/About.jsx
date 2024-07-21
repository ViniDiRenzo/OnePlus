import React from "react";
import Banner from "../components/Banner";

function About() {
  return (
    <>
      <Banner
        pageName="About"
        image="./assets/images/project-one/image-2.webp"
      />
      <div className="block">
        <h1 className="header">About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad
          fugit provident perspiciatis doloribus iste expedita sapiente
          reiciendis voluptatem, saepe non quos aperiam qui sint fuga? Veritatis
          facilis ratione repellendus itaque, inventore vero architecto animi,
          quod eos rerum adipisci reiciendis numquam corporis beatae quas
          dolorem illum magni quo, atque aut.
        </p>
      </div>
    </>
  );
}

export default About;
