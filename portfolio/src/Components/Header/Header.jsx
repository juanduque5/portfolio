import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Scene from "../../../public/Scene";
import { Suspense, useEffect, useState } from "react";

import "./Header.css";

const Typewriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayText}</span>;
};

function Header() {
  return (
    <>
      <Canvas className="bg-white canvas mt-10">
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Environment preset="sunset" />
        <ContactShadows />
      </Canvas>
      <div className="flex justify-center">
        <h1 className="font-mono text-6xl">
          Hi, my name is <span className="text-gradient">Juan Duque</span>
          <br />
          <Typewriter text="I'm a Software Developer" speed={80} />
        </h1>
      </div>
    </>
  );
}

export default Header;
