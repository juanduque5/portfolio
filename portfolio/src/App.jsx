import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Email from "./Components/Email/Email";

function App() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const projectsSection = document.getElementById("contacts");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header onClick={scrollToProjects} onClick2={scrollToContact} />
      <About />
      <Skills />
      <Projects />
      <Email />
    </>
  );
}

export default App;
