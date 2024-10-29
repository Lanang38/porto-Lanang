/*-------- Components --------*/
import SkillCard from "./SkillCard";
import { animate, delay, motion } from "framer-motion";

const skillItem = [
  {
    imgSrc: "/images/laravel.svg",
    label: "Laravel",
    desc: "PHP Framework",
  },
  {
    imgSrc: "/images/PHP.svg",
    label: "PHP",
    desc: "Server-side Scripting",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/mysql.svg",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/bootstrap.svg",
    label: "Bootstrap",
    desc: "CSS Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="headline-2"
        >
          Essential Tools I use
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="text-zinc-400 mt-3 mb-8 max-w-[50ch]"
        >
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]"
        >
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
