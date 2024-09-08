import React from "react";
import ContactForm from "../components/ContactForm";
import Banner from "../components/Banner";
import image from "../assets/images/project-three/image-6.webp";

function Contact() {
  return (
    <>
      <Banner
        pageName="Contact"
        imageUrl={image}
        objectPosition="object-center"
      />

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
      {/* <div className="block">
        <h2 className="heading">Heading</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          omnis modi, qui sit vitae odit expedita quisquam asperiores voluptatem
          ducimus beatae itaque quidem, soluta corrupti nulla esse praesentium
          nobis quod aspernatur, sint voluptas delectus! Quos unde et a, odit
          veritatis id doloremque eaque distinctio tempora, sapiente modi
          quisquam sit corrupti tenetur necessitatibus eligendi ex. Odio soluta,
          iusto corporis nobis porro, alias omnis deleniti tempore quod esse
          nesciunt culpa? Blanditiis beatae ipsa soluta delectus quas
          perspiciatis doloremque totam, maxime ipsam recusandae.
        </p>
      </div> */}
      <div className="block">
        <h2 className="heading">Where to find us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.8247653771837!2d-75.76465452399937!3d45.27155294627217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdfd88e088cc5b%3A0xc8b72dfb50035d7f!2s%2B1%20Drywall%20Inc!5e0!3m2!1sen!2suk!4v1720305096244!5m2!1sen!2suk"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
      <ContactForm />
    </>
  );
}

export default Contact;
