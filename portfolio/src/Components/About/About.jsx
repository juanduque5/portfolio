import { useEffect } from "react";
import profile from "../../../images/juan.jpg";

import "./About.css";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
function About() {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".esconder");
    hiddenElements.forEach((el) => observer.observe(el));

    // Limpiar el observer cuando el componente se desmonta
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // <- Esto asegura que

  return (
    <div className="bg-gradient-to-r from-custom-primary to-custom-secondary m-auto w-full h-auto mt-16 ">
      <div className="w-3/4  m-auto h-full flex flex-col">
        <div className=" flex h-14">
          {/* <div className="w-full "></div> */}
          <div className=" w-11/12 m-auto">
            <p className="text-white border-b  font-semibold text-2xl font-mono text-center">
              About
            </p>
          </div>
          {/* <div className=" w-full "></div> */}
        </div>
        <div className=" w-full h-full  flex flex-col md:flex-row mt-2 mb-2">
          <div className="w-3/4 mb-3 md:w-1/2 m-auto h-full flex md:border-r ">
            <div className="w-full h-full m-auto   md:mb-0 esconder">
              <img
                className="w-full md:h-96 h-80  object-contain   rounded-xl m-auto"
                src={profile}
                alt=""
              ></img>
            </div>
          </div>
          <div className="w-10/12 m-auto md:m-0 md:w-1/2 flex items-center ">
            <div className="m-auto md:w-4/5 w-full border-t md:border-t-0 esconder">
              <p className="text-white font-mono font-medium">
                Over the last six years, I immersed myself in Computer Science
                and Mathematics studies at the College of Marin before
                transitioning to Univeristy of California Santa Cruz, where I
                obtained my Bachelor&apos;s degree in Computer Science.
                Proficient in Python, C++, JavaScript, and Java, I thrive on
                crafting full-stack applications using cutting-edge technologies
                like React, Vue, and Node.js. My expertise extends to managing
                databases such as MySQL, PostgreSQL and MongoDB. Currently,
                I&apos;m broadening my horizons by delving into PLC (Allen
                Bradley) while also delving into the exciting realms of Machine
                Learning and Artificial Intelligence.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
