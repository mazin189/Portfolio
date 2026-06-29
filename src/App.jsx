import { lazy, Suspense } from "react";
import Navbar from "./layout/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import Loader from "./components/Loader.jsx"
const About = lazy(() => import ("./sections/About.jsx"))
const Contact = lazy(() => import ("./sections/Contact.jsx"))
const Education = lazy(() => import ("./sections/Education.jsx"))
const Footer = lazy(() => import ("./layout/Footer.jsx"))
const Projects = lazy(() => import ("./sections/Projects.jsx"))
const Certificates = lazy(() => import ("./sections/Certificates.jsx"))



function App() {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <main>
        <Navbar />
        <Hero />
        <Suspense fallback={<Loader />}>
        <About />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
        <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
