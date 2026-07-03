import "./App.css";
import ExperienceSection from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <SkillsSection />
        <ProjectsSection/>
        <ExperienceSection/>
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
