import React from "react";
import Project from "./Project";
import projectOne from "../assets/images/project-one";
import projectTwo from "../assets/images/project-two";
import projectThree from "../assets/images/project-three";

function Gallery() {
  return (
    <div className="block">
      <h2 className="heading">Check our gallery</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iure
        nostrum autem recusandae officiis rerum tenetur voluptas sint
        consectetur velit.
      </p>
      <Project name={"Projetinho numerinho 1"} images={projectOne} />
      <Project name={"Projetinho numerinho 2"} images={projectTwo} />
      <Project name={"Projetinho numerinho 3"} images={projectThree} />
    </div>
  );
}

export default Gallery;
