import React from "react";
import Hero from "../components/Hero";
import CallToContact from "../components/CallToContact";
import CallToGallery from "../components/CallToGallery";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Hero />
      <div className="block">
        <h2 className="heading">Heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad
          fugit provident perspiciatis doloribus iste expedita sapiente
          reiciendis voluptatem, saepe non quos aperiam qui sint fuga? Veritatis
          facilis ratione repellendus itaque, inventore vero architecto animi,
          quod eos rerum adipisci reiciendis numquam corporis beatae quas
          dolorem illum magni quo, atque aut.
        </p>
      </div>
      <Services />
      <CallToContact />
      <div className="block">
        <h2 className="heading">Another Heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad
          fugit provident perspiciatis doloribus iste expedita sapiente
          reiciendis voluptatem, saepe non quos aperiam qui sint fuga? Veritatis
          facilis ratione repellendus itaque, inventore vero architecto animi,
          quod eos rerum adipisci reiciendis numquam corporis beatae quas
          dolorem illum magni quo, atque aut.
        </p>
      </div>
      <CallToGallery />
    </>
  );
}

export default Home;
