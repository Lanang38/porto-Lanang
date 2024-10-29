/*-------- Node Modules --------*/
import { delay, motion } from "framer-motion";

const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-zinc-800/50 p-7 rounded-2xl md:p-12"
        >
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Lanang, a professional web developer who specializes in creating visually stunning and highly functional websites. By combining creativity and technical expertise, I transform your visuals into a digital masterpiece according to your wishes.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-orange-500 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/Menu.png"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
