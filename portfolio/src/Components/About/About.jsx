import profile from "../../../images/juan.jpg";
function About() {
  return (
    <div className="bg-gradient-to-r from-custom-primary to-custom-secondary m-auto w-full h-auto mt-16 ">
      <div className="w-3/4  m-auto h-full flex flex-col">
        <div className=" flex h-14">
          {/* <div className="w-full "></div> */}
          <div className="border-b w-11/12 m-auto">
            <p className="text-white  font-semibold text-2xl font-mono text-center">
              About
            </p>
          </div>
          {/* <div className=" w-full "></div> */}
        </div>
        <div className=" w-full h-full  flex flex-col md:flex-row mt-2 mb-2">
          <div className=" w-1/2 m-auto h-full flex md:border-r ">
            <div className="w-full h-full m-auto   md:mb-0">
              <img
                className="w-full md:h-96 h-80 object-fit md:object-contain rounded-xl m-auto"
                src={profile}
                alt=""
              ></img>
            </div>
          </div>
          <div className="w-10/12 m-auto md:m-0 md:w-1/2 flex items-center ">
            <div className="m-auto md:w-4/5 w-full border-t md:border-t-0">
              <p className="text-white font-mono font-medium">
                Over the last six years, I immersed myself in Computer Science
                and Mathematics studies at the College of Marin before
                transitioning to UC Santa Cruz, where I obtained my
                Bachelor&apos;s degree in Computer Science. Proficient in C++,
                Python, JavaScript, and Java, I thrive on crafting full-stack
                applications using cutting-edge technologies like React, Vue,
                and Node.js. My expertise extends to managing databases such as
                MySQL, PostgreSQL and MongoDB. Currently, I&apos;m broadening my
                horizons by delving into PLC (Allen Bradley) while also delving
                into the exciting realms of Machine Learning and Artificial
                Intelligence.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
