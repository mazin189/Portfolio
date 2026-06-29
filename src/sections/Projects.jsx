import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "/src/components/AnimatedBorderButton.jsx";
import ecommerceImg from "../assets/e-commerce.png"
import restaurantImg from "../assets/restaurant.png"
import portfolioWebsiteImg from "../assets/portfolio.png"
import staticWebsiteImg from "../assets/first-proj.png"
import travelWebsiteImg from "../assets/proj2.png"



const projects = [
  {
    title: "E-Commerce Store",
    description:
      "A responsive online store that provides a smooth shopping experience with product browsing, search, filtering, cart management, and real-time total price calculation.",
    image: {ecommerceImg},
    tags: ["React", "Redux", "Tailwind"],
    link: "https://project6-ashen.vercel.app/",
    github: "https://github.com/mazin189/project6",
  },
  {
    title: "Restaurant Website",
    description:
      "A responsive restaurant website with a modern design, showcasing menu items, restaurant information, and a smooth user experience across all devices.",
    image: {restaurantImg},
    tags: ["HTML", "CSS", "Bootstrap", "Javascript"],
    link: "https://mazin189.github.io/project3/",
    github: "https://github.com/mazin189/project3",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects, skills, and contact information.",
    image: {portfolioWebsiteImg},
    tags: ["React", "Tailwind", "Vite"],
    link: "",
    github: "https://github.com/mazin189/Portfolio",
  },
  {
    title: "Static Website",
    description:
      "An HTML & CSS project demonstrating modern layouts, creative styling with pseudo-elements, and smooth hover effects.",
    image: {staticWebsiteImg},
    tags: ["HTML", "CSS"],
    link: "https://mazin189.github.io/project1/",
    github: "https://github.com/mazin189/project1",
  },
  {
    title: "Trips Tour",
    description:
      "A visually engaging travel website with interactive destination cards, animated hover effects, local cuisine highlights, and a clean, modern layout.",
    image: {travelWebsiteImg},
    tags: ["HTML", "CSS"],
    link: "https://mazin189.github.io/project2/",
    github: "https://github.com/mazin189/project2",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, every project represents a step
            forward in my journey as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{
                animationDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                />

                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    target="_blank"
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    target="_blank"
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.link} target="_blank">
                    <ArrowUpRight className="w-5 h-5 cursor-pointer text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
}
