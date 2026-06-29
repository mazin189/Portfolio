import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import backendImg from "../assets/back-sef.jpg";
import frontendImg from "../assets/front-sef.jpg";
import frontAfaaq from "../assets/front-afaaq.jpg";
import machineLearningImg from "../assets/nti-ml.jpg";

const certifications = [
  {
    avatar: backendImg,
    desc: "Backend sef academy course",
  },
  {
    avatar: frontendImg,
    desc: "Frontend sef academy course",
  },
  {
    avatar: frontAfaaq,
    desc: "Frontend afaaqware training",
  },
  {
    avatar: machineLearningImg,
    desc: "NTI machine learning training",
  },
];

const Images = [
  {
    src: backendImg,
  },
  {
    src: frontendImg,
  },
  {
    src: frontAfaaq,
  },
  {
    src: machineLearningImg,
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = Images[activeIdx].src;
  }, [activeIdx]);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % certifications.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + certifications.length) % certifications.length,
    );
  };

  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 " />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certifications & Training
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Technical training{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              and skill development.
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={certifications[activeIdx].avatar}
                  alt={certifications[activeIdx].desc}
                  className="rounded-2xl max-w-2xl mx-auto object-cover ring-2 ring-primary/20"
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={previous}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {certifications.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
