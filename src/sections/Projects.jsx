import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { AnimatedBorderButton } from "/src/components/AnimatedBorderButton.jsx";
import ecommerceImg from "../assets/e-commerce.png";
import restaurantImg from "../assets/restaurant.png";
import portfolioWebsiteImg from "../assets/portfolio.png";
import staticWebsiteImg from "../assets/first-proj.png";
import travelWebsiteImg from "../assets/proj2.png";
import bankImg from "../assets/bankImg.png";
import eCommerceDashboardImg from "../assets/ecom-dashboard.png";

const projects = [
  {
    title: "Full Stack Banking System",
    description:
      "A full-stack banking system built with React, Node.js, Express, and MongoDB, featuring secure JWT authentication, bank card management, money transfers, Stripe-powered deposits, withdrawals, real-time notifications, and a dedicated admin dashboard, all backed by a RESTful API.",
    image: bankImg,
    tags: ["React", "Nodejs", "Express", "MongoDB", "Tailwind"],
    liveLinks: {
      frontend: "https://bank-zeta-eight.vercel.app/register",
      admin: "https://adminbank-three.vercel.app/register",
    },
    github: "https://github.com/mazin189/fullstack-bank",
  },
  {
    title: "E-Commerce Admin Dashboard",
    description:
      "Collaborated with a team to develop a responsive e-commerce platform featuring product browsing, filtering, shopping cart, wishlist, order management, and secure authentication. Integrated RESTful APIs using Axios and built a comprehensive admin dashboard for managing products, users, carts, orders, and store settings.",
    image: eCommerceDashboardImg,
    tags: ["React", "Context API", "Tailwind", "API Integration"],
    liveLinks: {
      frontend: "https://e-commerce-store-ruddy.vercel.app/",
      admin: "https://ecommerce-admin-dashboard-chi-amber.vercel.app/",
    },
    github: "https://github.com/mazin189/E-Commerce-Store-Admin-Dashboard",
  },
  {
    title: "Restaurant Website",
    description:
      "A responsive restaurant website with a modern design, showcasing menu items, restaurant information, and a smooth user experience across all devices.",
    image: restaurantImg,
    tags: ["HTML", "CSS", "Bootstrap", "Javascript"],
    link: "https://mazin189.github.io/restaurant-bootstrap/",
    github: "https://github.com/mazin189/restaurant-bootstrap",
  },
  {
    title: "E-Commerce Frontend Store",
    description:
      "A responsive online store that provides a smooth shopping experience with product browsing, search, filtering, cart management, and real-time total price calculation.",
    image: ecommerceImg,
    tags: ["React", "Redux", "Tailwind"],
    link: "https://project6-ashen.vercel.app/",
    github: "https://github.com/mazin189/ecommerce-frontend",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects, skills, and contact information.",
    image: portfolioWebsiteImg,
    tags: ["React", "Tailwind", "Vite"],
    link: "https://mazin-dev.vercel.app/",
    github: "https://github.com/mazin189/Portfolio",
  },
  {
    title: "Static Website",
    description:
      "An HTML & CSS project demonstrating modern layouts, creative styling with pseudo-elements, and smooth hover effects.",
    image: staticWebsiteImg,
    tags: ["HTML", "CSS"],
    link: "https://mazin189.github.io/static-website/",
    github: "https://github.com/mazin189/static-website",
  },
  {
    title: "E-Commerce Backend API",
    description:
      "RESTful API for an e-commerce store built with Node.js, Express, and MongoDB, supporting JWT authentication, product and category management, user management, and a shopping cart system.",
    image: ecommerceImg,
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://project6-ashen.vercel.app",
    github: "https://github.com/mazin189/backend-ecommerce",
  },
  {
    title: "Trips Tour",
    description:
      "A visually engaging travel website with interactive destination cards, animated hover effects, local cuisine highlights, and a clean, modern layout.",
    image: travelWebsiteImg,
    tags: ["HTML", "CSS"],
    link: "https://mazin189.github.io/Trips-Tour/",
    github: "https://github.com/mazin189/Trips-Tour",
  },
    {
    title: "Trips Tour",
    description:
      "A visually engaging travel website with interactive destination cards, animated hover effects, local cuisine highlights, and a clean, modern layout.",
    image: travelWebsiteImg,
    tags: ["HTML", "CSS"],
    link: "https://mazin189.github.io/Trips-Tour/",
    github: "https://github.com/mazin189/Trips-Tour",
  },
    {
    title: "Trips Tour",
    description:
      "A visually engaging travel website with interactive destination cards, animated hover effects, local cuisine highlights, and a clean, modern layout.",
    image: travelWebsiteImg,
    tags: ["HTML", "CSS"],
    link: "https://mazin189.github.io/Trips-Tour/",
    github: "https://github.com/mazin189/Trips-Tour",
  },
    {
    title: "Trips Tour",
    description:
      "A visually engaging travel website with interactive destination cards, animated hover effects, local cuisine highlights, and a clean, modern layout.",
    image: travelWebsiteImg,
    tags: ["HTML", "CSS"],
    link: "https://mazin189.github.io/Trips-Tour/",
    github: "https://github.com/mazin189/Trips-Tour",
  },
    {
    title: "Trips Tour",
    description:
      "A visually engaging travel website with interactive destination cards, animated hover effects, local cuisine highlights, and a clean, modern layout.",
    image: travelWebsiteImg,
    tags: ["HTML", "CSS"],
    link: "https://mazin189.github.io/Trips-Tour/",
    github: "https://github.com/mazin189/Trips-Tour",
  },
    {
    title: "Trips Tour",
    description:
      "A visually engaging travel website with interactive destination cards, animated hover effects, local cuisine highlights, and a clean, modern layout.",
    image: travelWebsiteImg,
    tags: ["HTML", "CSS"],
    link: "https://mazin189.github.io/Trips-Tour/",
    github: "https://github.com/mazin189/Trips-Tour",
  },
    {
    title: "Trips Tour",
    description:
      "A visually engaging travel website with interactive destination cards, animated hover effects, local cuisine highlights, and a clean, modern layout.",
    image: travelWebsiteImg,
    tags: ["HTML", "CSS"],
    link: "https://mazin189.github.io/Trips-Tour/",
    github: "https://github.com/mazin189/Trips-Tour",
  },
    {
    title: "Trips Tour",
    description:
      "A visually engaging travel website with interactive destination cards, animated hover effects, local cuisine highlights, and a clean, modern layout.",
    image: travelWebsiteImg,
    tags: ["HTML", "CSS"],
    link: "https://mazin189.github.io/Trips-Tour/",
    github: "https://github.com/mazin189/Trips-Tour",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [clicked, setClicked] = useState(true);
  const loadProjects = () => {
    const scrollHeight = window.scrollY;
    const numberOfProjects = projects.length;
    setVisibleProjects(numberOfProjects);
    setClicked(false);
    setTimeout(() => {
      window.scrollTo(0,scrollHeight)
    }, 0);
  };
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
          {projects.slice(0, visibleProjects).map((project, index) => (
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
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                />

                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveLinks ? (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <a
                      target="_blank"
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}

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

                  <div className="flex items-center md:gap-0 gap-4">
                    {project.liveLinks ? (
                      <button onClick={() => setSelectedProject(project)}>
                        <ArrowUpRight className="w-5 h-5 cursor-pointer text-muted-foreground group-hover:text-primary" />
                      </button>
                    ) : (
                      <a href={project.link} target="_blank">
                        <ArrowUpRight className="w-5 h-5 cursor-pointer text-muted-foreground group-hover:text-primary" />
                      </a>
                    )}
                    <a href={project.github} target="_blank">
                      <FaGithub className="w-5 h-5 cursor-pointer block md:hidden text-muted-foreground group-hover:text-primary" />
                    </a>
                  </div>
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

        {clicked && (
          <div
            className="text-center mt-12 animate-fade-in animation-delay-500"
            onClick={loadProjects}
          >
            <AnimatedBorderButton>
              Load More
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </div>
        )}
      </div>

      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl p-6 w-87.5 space-y-4"
          >
            <h2 className="text-2xl font-bold text-center">Choose Live Demo</h2>

            <a
              href={selectedProject.liveLinks.frontend}
              target="_blank"
              className="block p-3 rounded-lg hover:bg-white/10"
            >
              🌐 User Website
            </a>

            <a
              href={selectedProject.liveLinks.admin}
              target="_blank"
              className="block p-3 rounded-lg hover:bg-white/10"
            >
              ⚙️ Admin Dashboard
            </a>
            <button
              onClick={() => setSelectedProject(null)}
              className="w-full mt-2 p-3 rounded-lg bg-red-500 hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
