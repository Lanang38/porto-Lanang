/*-------- Components --------*/
import ProjectCard from "./ProjectCard";
import { animate, delay, motion } from "framer-motion";

const projects = [
  {
    imgSrc: "/images/Fashion.png",
    title: "Fashion Website",
    tags: ["PHP", "SQL", "Bootstrap"],
    projectLink: "https://github.com/Lanang38/fashion-full",
  },
  {
    imgSrc: "/images/Gudang.jpg",
    title: "Warehouse Management",
    tags: ["C#", "MVC", "SQL"],
    projectLink: "https://github.com/Lanang38/management-app",
  },
  {
    imgSrc: "/images/RFID.jpg",
    title: "RFID Presence",
    tags: ["PHP", "Arduino", "C"],
    projectLink: "https://github.com/Lanang38/absensi-esp",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="headline-2 mb-8"
        >
          My portfolio highlights
        </motion.h2>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]"
        >
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
