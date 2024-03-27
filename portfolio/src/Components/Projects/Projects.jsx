import github from "../../../images/github.png";
import loginsmart from "../../../images/smart.png";
import detectsmart from "../../../images/smart0.png";
import dec2smart from "../../../images/smart1.png";
import dec3smart from "../../../images/smart2.png";
import dec1smart from "../../../images/smart3.png";
import proper from "../../../images/proper.png";
import proper0 from "../../../images/proper0.png";
import proper1 from "../../../images/proper1.png";
import proper2 from "../../../images/proper2.png";
import proper4 from "../../../images/proper4.png";
import proper5 from "../../../images/proper5.png";
import car0 from "../../../images/car0.png";
import car1 from "../../../images/car1.png";
import car2 from "../../../images/car2.png";
import car3 from "../../../images/car3.png";
import car4 from "../../../images/car4.png";

import { useEffect, useState } from "react";
import Modal from "./modal";
import "./modal.css";
import "./Projects.css";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show0");
    }
  });
});
function Projects() {
  const [isModalOpen, setIsModalOPen] = useState(false);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".esconder0");
    hiddenElements.forEach((el) => observer.observe(el));

    // Limpiar el observer cuando el componente se desmonta
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // <- Esto asegura que
  const openModal = (val) => {
    setIsModalOPen(true);
    if (val === "second") {
      console.log(val);
      setGallery([loginsmart, detectsmart, dec2smart, dec3smart, dec1smart]);
    } else if (val === "first") {
      console.log(val);
      setGallery([proper0, proper1, proper2, proper4, proper5, proper]);
    } else {
      setGallery([car1, car0, car2, car3, car4]);
    }
  };
  const closeModal = () => {
    setIsModalOPen(false);
  };
  return (
    <div className=" w-full h-auto bg-custom-customGray flex flex-col gap-10 ">
      <div id="projects" className="w-3/4 flex m-auto ">
        <p className="font-mono font-semibold text-2xl text-black m-auto">
          Projects
        </p>
      </div>
      <div className="w-3/4  m-auto h-full flex esconder0">
        <div className="md:w-3/4 w-full flex m-auto">
          <div className="w-full xl:h-72 lg:h-auto md:h-auto h-auto shadow-2xl  flex md:flex-row  flex-col  ">
            <div className="md:w-1/2 flex flex-col  w-full bg-slate-50 ">
              <div className="h-1/4 flex items-center">
                <p className="font-mono font-semibold m-auto text-lg text-gradient border-b">
                  Real state app
                </p>
              </div>
              <div className="h-auto lg:h-1/2 ">
                <p className="font-mono text-md h-auto w-auto font-medium">
                  Our real estate app is a comprehensive platform built using
                  React for the frontend, Node.js for the backend, and
                  PostgreSQL for the database. It offers users a seamless
                  experience to browse and search for various types of
                  properties, including apartments, houses, and commercial
                  spaces.
                </p>
              </div>

              <div className="h-1/4 break-words  flex">
                <div className="m-auto  w-1/2 flex justify-center border-r">
                  <div>
                    <a
                      href="https://github.com/juanduque5/g-ahora"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="GitHub"></img>
                    </a>
                  </div>
                  <div className="flex items-center ml-2">
                    <p className="text-custom-secondary font-semibold border-b">
                      <a
                        href="https://github.com/juanduque5/g-ahora"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Front-End
                      </a>
                    </p>
                  </div>
                </div>
                <div className="m-auto  w-1/2 flex justify-center">
                  <div>
                    <a
                      href="https://github.com/juanduque5/G-Back"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="GitHub"></img>
                    </a>
                  </div>
                  <div className="flex items-center ml-2">
                    <p className=" font-semibold border-b ">
                      <a
                        href="https://github.com/juanduque5/G-Back"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Back-End
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" md:w-1/2 w-full cursor-pointer"
              onClick={() => openModal("first")}
            >
              <div className="h-full w-full flex">
                <div className="w-full relative">
                  <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
                  <img
                    className="w-full h-full bg-gray-700"
                    src={proper0}
                    alt=""
                  ></img>
                  <div className="absolute bottom-2 right-2  text-black px-2 py-1 rounded-full flex">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white ml-1">+ 4</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4  m-auto h-full  flex  esconder0 ">
        <div className="md:w-3/4 w-full  flex m-auto">
          <div className="w-full xl:h-72 lg:h-auto md:h-auto h-auto shadow-2xl  flex md:flex-row  flex-col  ">
            <div className="md:w-1/2 flex flex-col  w-full bg-slate-50">
              <div className="h-1/4   flex items-center  ">
                <p className="font-mono font-semibold m-auto text-lg text-gradient border-b ">
                  Accessories Detection System App
                </p>
              </div>
              <div className="h-auto lg:h-1/2">
                <p className="font-mono text-md h-auto w-auto">
                  The app can accurately detect clothing items in images and
                  highlight them all, using an API provided by Clarifai, which
                  utilizes machine learning algorithms. This application is a
                  cutting-edge platform leveraging React for the frontend,
                  Node.js for the backend, and PostgreSQL for the database.
                </p>
              </div>

              <div className="h-1/4 break-words  flex">
                <div className="m-auto w-1/2 flex justify-center border-r">
                  <div>
                    <a
                      href="https://github.com/juanduque5/DetectionSystem-Front"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="GitHub"></img>
                    </a>
                  </div>
                  <div className="flex items-center ml-2">
                    <p className="text-custom-secondary font-semibold border-b">
                      Front-End
                    </p>
                  </div>
                </div>
                <div className="m-auto w-1/2 flex justify-center">
                  <div>
                    <a
                      href="https://github.com/juanduque5/DetectionSystem-BackEnd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="GitHub"></img>
                    </a>
                  </div>
                  <div className="flex items-center ml-2">
                    <p className=" font-medium border-b ">
                      <a
                        href="https://github.com/juanduque5/DetectionSystem-BackEnd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Back-End
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="border md:w-1/2 w-full  cursor-pointer"
              onClick={() => openModal("second")}
            >
              <div className="h-full w-full flex">
                <div className="w-full relative">
                  <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
                  <img
                    className="w-full h-full bg-gray-700"
                    src={detectsmart}
                    alt=""
                  ></img>
                  <div className="absolute bottom-2 right-2  text-black px-2 py-1 rounded-full flex">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white ml-1">+ 4</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4  m-auto h-full  flex esconder0  mb-8">
        <div className="md:w-3/4 w-full  flex m-auto">
          <div className="w-full xl:h-72 lg:h-auto md:h-auto h-auto shadow-2xl  flex md:flex-row  flex-col  bg-slate-50">
            <div className="md:w-1/2 flex flex-col  w-full">
              <div className="h-1/4  flex items-center ">
                <p className="font-mono font-semibold m-auto text-lg border-b text-gradient">
                  Used Cars app
                </p>
              </div>
              <div className="h-auto lg:h-1/2 ">
                <p className="font-mono text-md h-auto w-auto  ">
                  This application serves as a platform for sharing used cars,
                  empowering users to list their vehicles for sale while
                  providing the flexibility to edit or delete listings from
                  their accounts. Built with React for the frontend, Node.js for
                  the backend, and PostgreSQL for the database.
                </p>
              </div>

              <div className="h-1/4 break-words  flex">
                <div className="m-auto  w-1/2 flex justify-center border-r">
                  <div>
                    <a
                      href="https://github.com/juanduque5/UsedCars-FrontEnd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="GitHub"></img>
                    </a>
                  </div>
                  <div className="flex items-center ml-2 ">
                    <p className="text-custom-secondary font-semibold border-b">
                      <a
                        href="https://github.com/juanduque5/UsedCars-FrontEnd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Front-End
                      </a>
                    </p>
                  </div>
                </div>
                <div className="m-auto w-1/2 flex justify-center">
                  <div>
                    <a
                      href="https://github.com/juanduque5/usedCars-BackEnd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="GitHub"></img>
                    </a>
                  </div>
                  <div className="flex items-center ml-2">
                    <p className=" font-semibold border-b ">
                      <a
                        href="https://github.com/juanduque5/usedCars-BackEnd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Back-End
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="border md:w-1/2 w-full cursor-pointer"
              onClick={() => openModal("third")}
            >
              <div className="h-full w-full flex">
                <div className="w-full relative">
                  <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
                  <img
                    className="w-full h-full bg-gray-700"
                    src={car1}
                    alt=""
                  ></img>
                  <div className="absolute bottom-2 right-2  text-black px-2 py-1 rounded-full flex">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white ml-1">+ 4</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal open={isModalOpen} close={closeModal} gallery={gallery} />
      </div>
    </div>
  );
}

export default Projects;
