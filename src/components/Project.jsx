import React, { useState } from "react";
import { ImArrowLeft } from "react-icons/im";
import { ImArrowRight } from "react-icons/im";

function Project({ images, name }) {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  function handleOpenModal(index) {
    setImageIndex(index);
    setOpen(!open);
    document.querySelector("body").style.position = "absolute";
    document.querySelector("body").style.overflow = "hidden";
  }

  function handleCloseModal() {
    setOpen(!open);
    document.querySelector("body").style.position = "";
    document.querySelector("body").style.overflow = "";
  }

  function showPrev() {
    setImageIndex((index) => {
      if (imageIndex == 0) return images.length - 1;
      return imageIndex - 1;
    });
  }

  function showNext() {
    setImageIndex((index) => {
      if (imageIndex == images.length - 1) return 0;
      return imageIndex + 1;
    });
  }

  return (
    <div className="px-4 py-6 shadow-2xl rounded-md mt-12 overflow-hidden">
      <div className="md:flex md:gap-8 mb-4">
        <div
          className="mb-8 md:mb-0 w-80 overflow-hidden cursor-pointer rounded-md"
          onClick={() => handleOpenModal(0)}
        >
          <img
            src={images[0]}
            alt=""
            className="duration-300 hover:scale-[1.03]"
          />
        </div>
        <div>
          <h3 className="font-bold text-3xl mb-4">{name}</h3>
          <p className="max-w-[500px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            nisi soluta corporis magni quos voluptates quasi dolor labore,
            perspiciatis repellat!
          </p>
        </div>
      </div>
      <div className="flex gap-1.5 pt-2 border-slate-300 border-t-2 w-fit">
        {images.map((image, index) => {
          if (index === 0) return;
          return (
            <div
              key={index}
              className="md:w-32 md:h-20 rounded-md overflow-hidden cursor-pointer "
              onClick={() => handleOpenModal(index)}
            >
              <img
                className="w-full h-full duration-300 grayscale hover:scale-110 hover:grayscale-0"
                src={image}
                alt=""
              />
            </div>
          );
        })}
      </div>
      {open && (
        <div
          data-modal
          className="grid items-center fixed inset-0 md:px-20 md:py-20 z-10 bg-primary"
        >
          <p className="text-white absolute top-44 md:top-10 left-[50%] translate-x-[-50%]">
            Click image to Close.
          </p>
          <div className="h-80 md:h-full rounded-md flex overflow-hidden relative shadow-2xl shadow-primary">
            {images.map((image, index) => {
              return (
                <img
                  onClick={() => handleCloseModal()}
                  key={image}
                  src={image}
                  alt=""
                  className={`w-full h-full shrink-0 grow-0 object-cover duration-500 ease-in-out`}
                  style={{ translate: `-${100 * imageIndex}%` }}
                />
              );
            })}
            <button
              onClick={() => showPrev()}
              className="slider-btn left-0 hover:shadow-2xl"
            >
              <ImArrowLeft />
            </button>
            <button onClick={() => showNext()} className="slider-btn right-0">
              <ImArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
