import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { Button } from "../components/Button.jsx";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton.jsx";
import portfolioImg from "../assets/my-pic.jpeg";
import heroImg from "../assets/hero-bg.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import horizontalLoop from "../utils/horizontalLoop.jsx";
const skills = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "NODEJS",
  "EXPRESS",
  "MONGODB",
  "TAILWIND CSS",
  "BOOTSTRAP",
  "GIT",
  "GITHUB",
  "VERCEL",
];

export default function Hero() {
const marqueeRef = useRef(null);

useGSAP(() => {
  horizontalLoop(marqueeRef.current.children, {
  repeat: -1,
  speed: 1.2,
  });
});


  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full Stack Developer • MERN Stack
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Where <span className="text-primary glow-text">ideas</span>
                <br />
                turn into
                <br />
                <span className="font-serif italic font-normal text-white">
                  products.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Mazen Ahmed — a Full Stack MERN Developer specializing
                in React, Node.js, Express.js, and MongoDB. I build scalable,
                performant web applications that users love.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                <a href="#projects">View Projects</a>{" "}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <a
                  className="flex items-center gap-2"
                  href="/Mazen-cv.pdf"
                  download
                >
                  <Download className="w-5 h-5" /> Download CV
                </a>
              </AnimatedBorderButton>
            </div>

            <div className="-mt-2 flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: FaGithub, href: "https://github.com/mazin189" },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/mazen-ahmed-3877b3352/",
                },
                {
                  icon: FaFacebookF,
                  href: "https://www.facebook.com/mola.mozo",
                },
              ].map((social, idx) => {
                return (
                  <a
                    target="_blank"
                    key={idx}
                    href={social.href}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={portfolioImg}
                  alt="Mazen Ahmed"
                  className="w-full aspect-4/5 object-cover rounded-2xl "
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      MERN Stack Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
              <div className="flex " ref={marqueeRef}>
                {[...skills, ...skills].map((skill, index) => (
                  <div key={index} className="shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
