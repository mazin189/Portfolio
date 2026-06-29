import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Craft",
    description:
      "Writing clean, maintainable code with long-term readability in mind.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building fast, responsive applications with smooth user experiences.",
  },
  {
    icon: Users,
    title: "Usability",
    description:
      "Designing intuitive interfaces that are simple, accessible, and enjoyable.",
  },
  {
    icon: Lightbulb,
    title: "Growth",
    description:
      "Continuously learning, experimenting, and improving with every project.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Full Stack MERN Developer who enjoys turning ideas into
                web applications. What started as curiosity about how websites
                work has become a drive to build projects that are practical,
                reliable, and easy to use.
              </p>
              <p>
                I work primarily with React, Node.js, Express.js, and MongoDB,
                focusing on building complete web applications from frontend to
                backend. I value simplicity, well-structured code, and solving
                problems with solutions that are easy to maintain.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies,
                improving my skills through hands-on projects, and continuously
                learning new tools and best practices to become a better
                developer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to create software that matters—not just software
                that works, but software that's intuitive, reliable, and built
                to last.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl group animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 ">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <h3 className="text-sm text-muted-foreground">
                  {item.description}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
