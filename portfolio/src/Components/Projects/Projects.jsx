function Projects() {
  return (
    <div className=" w-full h-auto bg-custom-customGray flex flex-col gap-5">
      <div className="w-3/4 flex m-auto border">
        <p className="font-mono font-semibold text-2xl text-black m-auto">
          Projects
        </p>
      </div>
      <div className="w-3/4  m-auto h-full  flex   ">
        <div className="md:w-3/4 w-full flex m-auto">
          <div className="w-full xl:h-72 lg:h-auto md:h-auto h-auto shadow-xl  flex md:flex-row  flex-col  border">
            <div className="md:w-1/2 flex flex-col border w-full ">
              <div className="h-1/4   flex items-center">
                <p className="font-mono font-semibold m-auto text-lg text-gradient border-b">
                  Real state app
                </p>
              </div>
              <div className="h-auto ">
                <p className="font-mono text-md h-auto w-auto font-semibold">
                  Our real estate app is a comprehensive platform built using
                  React for the frontend, Node.js for the backend, and
                  PostgreSQL for the database. It offers users a seamless
                  experience to browse and search for various types of
                  properties, including apartments, houses, and commercial
                  spaces.
                </p>
              </div>

              <div className="h-1/4 break-words">
                <p className="font-mono text-lg">Description: </p>
              </div>
            </div>
            <div className="border md:w-1/2 w-full">
              <p>jaja</p>
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
                  Smart-Brain App
                </p>
              </div>
              <div className="h-auto ">
                <p className="font-mono text-md h-auto w-auto font-semibold">
                  The app can accurately detect clothing items in images and
                  highlight them all, using an API provided by Clarifai, which
                  utilizes machine learning algorithms. This application is a
                  cutting-edge platform leveraging React for the frontend,
                  Node.js for the backend, and PostgreSQL for the database.
                </p>
              </div>

              <div className="h-1/4 break-words">
                <p className="font-mono text-lg">Description: </p>
              </div>
            </div>
            <div className="border md:w-1/2 w-full">
              <p>jaja</p>
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
              <div className="h-auto ">
                <p className="font-mono text-md h-auto w-auto  font-semibold">
                  This application serves as a platform for sharing used cars,
                  empowering users to list their vehicles for sale while
                  providing the flexibility to edit or delete listings from
                  their accounts. Built with React for the frontend, Node.js for
                  the backend, and PostgreSQL for the database,
                </p>
              </div>

              <div className="h-1/4 break-words">
                <p className="font-mono text-lg"> Description</p>
              </div>
            </div>
            <div className="border md:w-1/2 w-full">
              <p>jaja</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
