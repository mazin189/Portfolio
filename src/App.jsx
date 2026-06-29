import Footer from "./layout/Footer.jsx";
import Navbar from "./layout/Navbar.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Education from "./sections/Education.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Certificates from "./sections/Certificates.jsx";
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <main>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
