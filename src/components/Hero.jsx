/*-------- Components --------*/
import { ButtonPrimary, ButtonOutline } from "./Button";
import { delay, motion } from "framer-motion";

import React from "react";

const animation = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <motion.div
            variants={animation(0.5)}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3"
          >
            <figure className="img-box w-9 h-9 rounded-lg ">
              <img
                src="/images/cover.jpg"
                width={40}
                height={40}
                alt="Cokorda"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </motion.div>
          <motion.div
          variants={animation(0)}
          initial="hidden"
          animate="visible">
          <h2
            className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10"
          >
            Hello I'm Fullstack Developer
          </h2>

          </motion.div>
          <motion.div
            variants={animation(1)}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 an"
          >
            <div>
              <a href="https://drive.google.com/uc?export=download&id=1PmVTIrLT-QMX0dURbzhTdh_Wb5-k4wEM" target="_blank" rel="noopener noreferrer"><ButtonPrimary label="Download CV" icon="download" /></a>
              
            </div>
            <div>
              <ButtonOutline
                href="#about"
                label="Scroll down"
                icon="arrow_downward"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden lg:block"
        >
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-orange-500 via-25% via-orange-500/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="images/home.png"
              width={656}
              height={800}
              alt="Cokorda"
              className="w-full"
            />
          </figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
