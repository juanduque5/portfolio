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
          <button className=" ml-auto flex w-7 border" onClick={close}>
            <p className="m-auto"> X</p>
          </button>
          <div className="h-full w-full flex items-center">
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-xl"
              onClick={prevImage}
            >
              Prev
            </button>
            {/* Renderizar la imagen actual */}
            <img
              className="h-5/6 w-full object-cover border"
              src={gallery[currentImageIndex]}
              alt={`Image ${currentImageIndex}`}
            />
            {/* Botón para mostrar la imagen siguiente */}
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white rounded-xl p-2"
              onClick={nextImage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
