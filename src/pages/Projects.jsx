import React from "react";
import Gallery from "../components/Gallery";
import Banner from "../components/Banner";

function Projects() {
  return (
    <>
      <Banner
        pageName="Projects"
        image="./assets/images/project-two/image-8.webp"
      />

      <div className="block">
        <h1 className="header">Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad
          fugit provident perspiciatis doloribus iste expedita sapiente
          reiciendis voluptatem, saepe non quos aperiam qui sint fuga? Veritatis
          facilis ratione repellendus itaque, inventore vero architecto animi,
          quod eos rerum adipisci reiciendis numquam corporis beatae quas
          dolorem illum magni quo, atque aut.
        </p>
      </div>
      <Gallery />
    </>
  );
}

export default Projects;
