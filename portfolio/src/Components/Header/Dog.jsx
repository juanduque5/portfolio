import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Dog() {
  const group = useRef(); // Usamos useRef para acceder al grupo de objetos del modelo cargado
  const gltf = useLoader(GLTFLoader, "../../assets/models/dog/scene.gltf");

  return <primitive object={gltf.scene} ref={group} />;
}

export default Dog;
