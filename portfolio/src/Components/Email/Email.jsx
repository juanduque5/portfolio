import linked from "../../../images/linkedin2.png";
import git2 from "../../../images/github2.png";
import { useEffect } from "react";
import "./Email.css";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("shu");
    }
  });
});
function Email() {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hid");
    hiddenElements.forEach((el) => observer.observe(el));

    // Limpiar el observer cuando el componente se desmonta
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // <- Esto asegura que
  return (
    <div className="">
      <div className="relative  flex items-top justify-center md:h-96 h-auto bg-white dark:bg-gray-900  sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div id="contacts" className="mt-8 overflow-hidden hid">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Fill in the form to start a conversation
                </p>

                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <div className="cursor-pointer">
                    <a
                      href="https://www.linkedin.com/in/juan-duque-085905295"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linked} alt="LinkedIn"></img>
                    </a>
                  </div>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40 cursor-pointer">
                    <a
                      href="https://github.com/juanduque5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={git2} alt="GitHub"></img>
                    </a>
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    (415)-712-8195
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    juanduque525@gmail.com
                  </div>
                </div>
              </div>

              <form
                className="p-6 flex flex-col justify-center"
                action="https://formsubmit.co/48ca77434e5f88ac82ec2e3a709d2b96"
                method="POST"
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input type="hidden" name="_captcha" value="false"></input>
                  <input type="hidden" name="_next" value="false" />
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    required
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold  focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="tel" className="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telephone Number"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold  focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="md:w-32 bg-custom-secondary hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
