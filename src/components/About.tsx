import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn } from "@utils/motion";
import { SectionWrapper } from "@src/hoc";
import SectionHeader from "./SectionHeader";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      transitionSpeed={450}
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded=[20px] py-5 px-12 min-h-[280px] flex flex-col  justify-evenly items-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <SectionHeader headText="Overview." subText="Introduction" />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a frontend developer with experience in TypeScript and JavaScript,
        and expertise in frameworks like React and Next.js. I'm a quick learner
        and collaborate closely with clients to create efficient, scalable, and
        user-friendly solutions that solve real-world problems.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-1">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
