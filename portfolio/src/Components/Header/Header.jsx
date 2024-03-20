import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Scene from "../../../public/Scene";
import { Suspense, useEffect, useState } from "react";
import logo from "../../../images/pet.png";
// import github from "../../../images/git.png";
// import linkedin from "../../../images/link.png";

import "./Header.css";

// eslint-disable-next-line react/prop-types
const Typewriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      // eslint-disable-next-line react/prop-types
      setDisplayText(text.substring(0, currentIndex));

      currentIndex++;
      // eslint-disable-next-line react/prop-types
      if (currentIndex > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayText}</span>;
};

function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 600);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className="  w-full m-auto flex justify-between mt-2 mb-10">
        <div className="w-3/4  flex justify-between m-auto">
          <div className="cursor-pointer ">
            <img className="" src={logo} alt=""></img>
          </div>
          <div className="w-auto flex gap-2 ">
            <button className="w-32 border border-black font-mono text-lg font-semibold shadow-xl">
              Resume
            </button>
            <button className="shadow-xl bg-custom-secondary to-custom-secondary w-32 bg-text-gradient   font-mono text-lg font-semibold text-white hover:border-none">
              Projects
            </button>
          </div>
        </div>
      </div>
      <div>
        <Canvas className="bg-white canvas mt-14">
          <ambientLight />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
          <Environment preset="sunset" />
          <ContactShadows />
        </Canvas>
      </div>
      <div className="flex justify-center">
        {show ? (
          <h1 className="font-mono md:text-6xl text-4xl">
            Hi, my name is <span className="text-gradient">Juan Duque</span>
            <br />
            <Typewriter text="I'm a Software Developer." speed={70} />
          </h1>
        ) : (
          <div className="w-1/2 m-auto  h-auto flex flex-col ">
            <div className="h-12 w-full animate-pulse bg-slate-300  rounded-lg"></div>
            <br />
            <div className="h-12 w-full animate-pulse bg-slate-300  rounded-lg"></div>
          </div>
        )}
      </div>
      {show ? (
        <div className="flex justify-center mt-14 w-auto gap-3">
          <button className="hover:bg-custom-secondary border-b text-2xl border-slate-300 w-32 h-12 hover:border-none hover:text-white  hover:shadow-md font-mono">
            Contact
          </button>
        </div>
      ) : (
        <div className="animate-pulse bg-slate-300 rounded-lg h-12 w-28 m-auto mt-5"></div>
      )}
    </div>
  );
}

export default Header;
