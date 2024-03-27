import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Email from "./Components/Email/Email";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <div className=" bg-gradient-to-r from-custom-primary to-custom-secondary">
        <Email />
      </div>
    </>
  );
}

export default App;
