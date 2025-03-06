import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "../assets/projects_img/project1.jpg";
import project2 from "../assets/projects_img/project2.jpg";
import project3 from "../assets/projects_img/project3.jpg";
import project4 from "../assets/about1.jpg";
import project5 from "../assets/about2.jpg";

const projects = [
    { id: 0, image: null, title: "" }, // Empty placeholder (before first image)
    { id: 1, image: project1, title: "Interior Design in Jordan" },
    { id: 2, image: project2, title: "Luxury Villa Design" },
    { id: 3, image: project3, title: "Modern Apartment" },
    { id: 4, image: project4, title: "Cozy Home Design" },
    { id: 5, image: project5, title: "Elegant Office" },
    { id: 6, image: null, title: "" }, // Empty placeholder (after last image)
];

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const cardWidth = 260; // Adjust based on actual card size + gap

  const nextProject = () => {
    if (index < projects.length - 3) {
      setIndex(index + 1);
    }
  };

  const prevProject = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section 
      id="projects"  
      className="relative h-[100vh] w-full flex flex-col text-black items-center py-10 bg-[#e6dccf]"
    >
      <p className="text-xl uppercase text-black mb-4">Our Projects</p>

      {/* Scrollable Container */}
      <div className="flex flex-col h-full justify-center items-center w-full max-w-4xl overflow-hidden px-4">
        <div className="relative w-full">
          <motion.div
            className="flex gap-12 md:gap-24"
            animate={{ translateX: `-${index * cardWidth*1.3}px` }}
            transition={{ duration: 0.9 }}
          >
            {projects.map((project, i) => {
              const isCenter = i === index + 1; // Middle image emphasis

              return (
                <motion.div
                  key={project.id}
                  className="flex-shrink-0 w-full sm:w-auto"
                  initial={{ opacity: 1, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: isCenter ? 1.2 : 0.8,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-[250px] h-[200px] sm:w-[250px] sm:h-[200px] object-cover rounded-lg shadow-lg mx-auto"
                    />
                  ) : (
                    <div className="w-[250px] h-[200px] sm:w-[250px] sm:h-[200px]"></div> // Empty div for spacing
                  )}
                  {isCenter && project.image && (
                    <h2 className="text-lg sm:text-xl font-semibold mt-6 text-center">{project.title}</h2>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-1/2 left-2 sm:left-4">
        <button
          onClick={prevProject}
          disabled={index === 0}
          className={`p-2 bg-white rounded-full shadow ${index === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute inset-y-1/2 right-2 sm:right-4">
        <button
          onClick={nextProject}
          disabled={index >= projects.length - 3}
          className={`p-2 bg-white rounded-full shadow ${index >= projects.length - 3 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
