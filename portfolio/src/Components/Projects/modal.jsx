/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactDOM from "react-dom";

import "./modal.css"; // Importa tus estilos CSS

// eslint-disable-next-line react/prop-types
export default function Modal({ open, close, gallery }) {
  if (!open) return null;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  return ReactDOM.createPortal(
    <>
      <div className="overlay-modal">
        <div className="modal-content">
          <div className="h-auto mb-2">
            <button className=" ml-auto flex w-7 bg-red-500" onClick={close}>
              <p className="m-auto text-white"> X</p>
            </button>
          </div>

          <div className="h-full w-full flex items-center flex-col ">
            <div className="mb-10">
              <p className="font-mono font-semibold text-xl border-b ">
                Gallery
              </p>
            </div>
            <button
              className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black opacity-60 text-white h-12 w-12 rounded-xl"
              onClick={prevImage}
            >
              Prev
            </button>
            {/* Renderizar la imagen actual */}
            <img
              className="h-5/6 w-full  object-fit "
              src={gallery[currentImageIndex]}
              alt={`Image ${currentImageIndex}`}
            />
            {/* Botón para mostrar la imagen siguiente */}
            <button
              className="absolute top-1/2 right-6 transform -translate-y-1/2  opacity-60 bg-black   rounded-xl h-12 w-12"
              onClick={nextImage}
            >
              <span className="relative  text-white opacity-100">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
