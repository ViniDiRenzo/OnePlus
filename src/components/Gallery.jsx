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
      <Project name={"Project One"} images={projectOne} />
      <Project name={"Project Two"} images={projectTwo} />
      <Project name={"Project Three"} images={projectThree} />
    </div>
  );
}

export default Gallery;
