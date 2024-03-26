import github from "../../../images/github.png";
import loginsmart from "../../../images/login-smart.png";
import detectsmart from "../../../images/detect-smart.png";
import dec2smart from "../../../images/dec2-smart.png";
import dec3smart from "../../../images/dec3-smart.png";
import dec1smart from "../../../images/dec1-smart.png";
import { useState } from "react";
import Modal from "./modal";
import "./modal.css";
function Projects() {
  const [isModalOpen, setIsModalOPen] = useState(false);
  const [gallery, setGallery] = useState([]);
  const openModal = (val) => {
    setIsModalOPen(true);
    if (val === "third") {
      console.log(val);
      setGallery([loginsmart, dec2smart, dec3smart, detectsmart, dec1smart]);
    }
  };
  const closeModal = () => {
    setIsModalOPen(false);
  };
  return (
    <div className=" w-full h-auto bg-custom-customGray flex flex-col gap-5">
      <div className="w-3/4 flex m-auto ">
        <p className="font-mono font-semibold text-2xl text-black m-auto">
          Projects
        </p>
      </div>
      <div className="w-3/4  m-auto h-full flex">
        <div className="md:w-3/4 w-full flex m-auto">
          <div className="w-full xl:h-72 lg:h-auto md:h-auto h-auto shadow-xl  flex md:flex-row  flex-col  border">
            <div className="md:w-1/2 flex flex-col border w-full ">
              <div className="h-1/4 flex items-center">
                <p className="font-mono font-semibold m-auto text-lg text-gradient border-b">
                  Real state app
                </p>
              </div>
              <div className="h-auto lg:h-1/2 ">
                <p className="font-mono text-md h-auto w-auto font-semibold text-gray-600">
                  Our real estate app is a comprehensive platform built using
                  React for the frontend, Node.js for the backend, and
                  PostgreSQL for the database. It offers users a seamless
                  experience to browse and search for various types of
                  properties, including apartments, houses, and commercial
                  spaces.
                </p>
              </div>

              <div className="h-1/4 break-words  flex">
                <div className="m-auto  w-1/2 flex justify-center">
                  <div>
                    <img className="w-12 h-12" src={github} alt=""></img>
                  </div>
                  <div className="flex items-center ml-2">
                    <p className="text-custom-secondary font-semibold border-b">
                      Front-End
                    </p>
                  </div>
                </div>
                <div className="m-auto  w-1/2 flex justify-center">
                  <div>
                    <img className="w-12 h-12" src={github} alt=""></img>
                  </div>
                  <div className="flex items-center ml-2">
                    <p className=" font-semibold border-b ">Back-End</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:w-1/2 w-full cursor-pointer">
              <div className="h-1/2 flex ">
                <div className="w-1/2 ">
                  <img className="w-full h-full" src={loginsmart} alt=""></img>
                </div>
                <div className="w-1/2">
                  <img className="w-full h-full" src={detectsmart} alt=""></img>
                </div>
              </div>
              <div className="h-1/2 flex">
                <div className="w-1/2">
                  <img
                    className="object-fill h-full w-full"
                    src={dec2smart}
                    alt=""
                  ></img>
                </div>
                <div className="w-1/2">
                  <img className="w-full h-full" src={dec3smart} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4  m-auto h-full  flex   ">
        <div className="md:w-3/4 w-full  flex m-auto">
          <div className="w-full xl:h-72 lg:h-auto md:h-auto h-auto shadow-xl  flex md:flex-row  flex-col  border">
            <div className="md:w-1/2 flex flex-col border w-full ">
              <div className="h-1/4   flex items-center  ">
                <p className="font-mono font-semibold m-auto text-lg text-gradient border-b ">
                  Accessories Detection System App
                </p>
              </div>
              <div className="h-auto lg:h-1/2">
                <p className="font-mono text-md h-auto w-auto font-semibold text-gray-600">
                  The app can accurately detect clothing items in images and
                  highlight them all, using an API provided by Clarifai, which
                  utilizes machine learning algorithms. This application is a
                  cutting-edge platform leveraging React for the frontend,
                  Node.js for the backend, and PostgreSQL for the database.
                </p>
              </div>

              <div className="h-1/4 break-words  flex">
                <div className="m-auto w-1/2 flex justify-center">
                  <div>
                    <img className="w-12 h-12" src={github} alt=""></img>
                  </div>
                  <div className="flex items-center ml-2">
                    <p className="text-custom-secondary font-semibold border-b">
                      Front-End
                    </p>
                  </div>
                </div>
                <div className="m-auto w-1/2 flex justify-center">
                  <div>
                    <img className="w-12 h-12" src={github} alt=""></img>
                  </div>
                  <div className="flex items-center ml-2">
                    <p className=" font-medium border-b ">Back-End</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border md:w-1/2 w-full  cursor-pointer">
              <div className="h-1/2 flex ">
                <div className="w-1/2 ">
                  <img className="w-full h-full" src={loginsmart} alt=""></img>
                </div>
                <div className="w-1/2">
                  <img className="w-full h-full" src={detectsmart} alt=""></img>
                </div>
              </div>
              <div className="h-1/2 flex">
                <div className="w-1/2">
                  <img
                    className="object-fill h-full w-full"
                    src={dec2smart}
                    alt=""
                  ></img>
                </div>
                <div className="w-1/2">
                  <img className="w-full h-full" src={dec3smart} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4  m-auto h-full  flex   ">
        <div className="md:w-3/4 w-full  flex m-auto">
          <div className="w-full xl:h-72 lg:h-auto md:h-auto h-auto shadow-xl  flex md:flex-row  flex-col  border">
            <div className="md:w-1/2 flex flex-col border w-full">
              <div className="h-1/4  flex items-center ">
                <p className="font-mono font-semibold m-auto text-lg border-b text-gradient">
                  Used Cars app
                </p>
              </div>
              <div className="h-auto lg:h-1/2">
                <p className="font-mono text-md h-auto w-auto  font-semibold text-gray-600">
                  This application serves as a platform for sharing used cars,
                  empowering users to list their vehicles for sale while
                  providing the flexibility to edit or delete listings from
                  their accounts. Built with React for the frontend, Node.js for
                  the backend, and PostgreSQL for the database,
                </p>
              </div>

              <div className="h-1/4 break-words  flex">
                <div className="m-auto  w-1/2 flex justify-center">
                  <div>
                    <img className="w-12 h-12" src={github} alt=""></img>
                  </div>
                  <div className="flex items-center ml-2">
                    <p className="text-custom-secondary font-semibold border-b">
                      Front-End
                    </p>
                  </div>
                </div>
                <div className="m-auto w-1/2 flex justify-center">
                  <div>
                    <img className="w-12 h-12 " src={github} alt=""></img>
                  </div>
                  <div className="flex items-center ml-2">
                    <p className=" font-semibold border-b ">Back-End</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="border md:w-1/2 w-full"
              onClick={() => openModal("third")}
            >
              <div className="h-1/2 flex ">
                <div className="w-1/2 ">
                  <img className="w-full h-full" src={loginsmart} alt=""></img>
                </div>
                <div className="w-1/2">
                  <img className="w-full h-full" src={detectsmart} alt=""></img>
                </div>
              </div>
              <div className="h-1/2 flex">
                <div className="w-1/2">
                  <img
                    className="object-fill h-full w-full"
                    src={dec2smart}
                    alt=""
                  ></img>
                </div>
                <div className="w-1/2">
                  <img className="w-full h-full" src={dec3smart} alt=""></img>
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
