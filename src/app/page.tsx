import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}
