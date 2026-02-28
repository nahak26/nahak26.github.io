import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import "./index.css";

export function App() {
  return (
    <div className="min-h-screen bg-tron-bg circuit-grid">
      <Nav />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
