import js from "../../../images/js.png";
import tailwind from "../../../images/tailwindcss.png";
import react from "../../../images/react.png";
import vue from "../../../images/vue.png";
import css from "../../../images/css.png";
import html from "../../../images/html.png";
import python from "../../../images/python.png";
import c from "../../../images/c.png";
import java from "../../../images/java.png";
import node from "../../../images/node.png";
import sql from "../../../images/sql.png";
import postgresql from "../../../images/postgresql.png";
import mongo from "../../../images/mongodb.png";
import git from "../../../images/git2.png";
// import webgl from "../../../images/webgl.png";
import npm from "../../../images/npm.png";
import linux from "../../../images/linux.png";
import { useEffect } from "react";
import "./skills.css";
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

function Skills() {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".esconder");
    hiddenElements.forEach((el) => observer.observe(el));

    // Limpiar el observer cuando el componente se desmonta
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // <- Esto asegura que
  return (
    <div className="m-auto  w-3/4 md:h-96 h-auto flex flex-col mb-10 mt-10">
      <div className="m-auto md:mb-0 mb-4 mt-2 ">
        <p className="text-2xl font-semibold"> Skills </p>
      </div>
      <div className="m-auto w-11/12 flex flex-row md:flex-col h-full ">
        <div className="w-full  h-full  flex ">
          <div className="m-auto border-b shadow-lg esconder h-auto flex flex-col md:gap-3 gap-3 md:flex-row w-3/4">
            <div className="w-full">
              <div className="flex ">
                <img className="w-auto h-auto m-auto" src={react} alt=""></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">React</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex ">
                <img className="w-auto h-auto m-auto" src={vue} alt=""></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">Vue</p>
              </div>
            </div>

            <div className="w-full">
              <div className="flex ">
                <img
                  className="w-auto h-auto m-auto"
                  src={tailwind}
                  alt=""
                ></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">TailwindCSS</p>
              </div>
            </div>

            <div className="w-full">
              <div className="flex ">
                <img className="w-auto h-auto m-auto" src={html} alt=""></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">HTML</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex ">
                <img className="w-auto h-auto m-auto" src={css} alt=""></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">CSS</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex ">
                <img className="w-auto h-auto m-auto" src={linux} alt=""></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">Linux</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex ">
                <img className="w-auto h-auto m-auto" src={npm} alt=""></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">NPM</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex ">
                <img className="w-auto h-auto m-auto" src={git} alt=""></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">Git</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  h-full m-auto flex">
          <div className="m-auto esconder  h-auto border-b shadow-lg w-3/4 md:gap-3 gap-3 flex-col md:flex-row flex">
            <div className="w-full">
              <div className="flex ">
                <img className="w-auto h-auto m-auto" src={python} alt=""></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">Python</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex ">
                <img className="w-auto h-auto m-auto" src={c} alt=""></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">C++</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex ">
                <img className="w-auto h-auto m-auto" src={java} alt=""></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">Java</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex ">
                <img className="w-auto h-auto m-auto" src={js} alt=""></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">Javascript</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex ">
                <img className="w-auto h-auto m-auto" src={node} alt=""></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">Node</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex ">
                <img className="w-auto h-auto m-auto" src={sql} alt=""></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">SQL</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex ">
                <img
                  className="w-auto h-auto m-auto"
                  src={postgresql}
                  alt=""
                ></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">postgreSQL</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex ">
                <img className="w-auto h-auto m-auto" src={mongo} alt=""></img>
              </div>
              <div>
                <p className="text-center font-mono font-medium">MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
