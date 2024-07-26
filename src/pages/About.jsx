import React from "react";
import Banner from "../components/Banner";
import image from "../assets/images/project-one/image-2.webp";

function About() {
  return (
    <>
      <Banner
        pageName="About"
        imageUrl={image}
        objectPosition="object-center"
      />
      <div className="block">
        <h2 className="heading">Chuuups</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad
          fugit provident perspiciatis doloribus iste expedita sapiente
          reiciendis voluptatem, saepe non quos aperiam qui sint fuga? Veritatis
          facilis ratione repellendus itaque, inventore vero architecto animi,
          quod eos rerum adipisci reiciendis numquam corporis beatae quas
          dolorem illum magni quo, atque aut.
        </p>
      </div>
      <div className="block">
        <h2 className="heading">Xablauu</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad
          fugit provident perspiciatis doloribus iste expedita sapiente
          reiciendis voluptatem, saepe non quos aperiam qui sint fuga? Veritatis
          facilis ratione repellendus itaque, inventore vero architecto animi,
          quod eos rerum adipisci reiciendis numquam corporis beatae quas
          dolorem illum magni quo, atque aut. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eligendi ad fugit provident perspiciatis
          doloribus iste expedita sapiente reiciendis voluptatem, saepe non quos
          aperiam qui sint fuga? Veritatis facilis ratione repellendus itaque,
          inventore vero architecto animi, quod eos rerum adipisci reiciendis
          numquam corporis beatae quas dolorem illum magni quo, atque aut.
        </p>
      </div>
      <div className="block">
        <h2 className="heading">AAAHHINNN</h2>
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
