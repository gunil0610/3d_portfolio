import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "@src/utils/motion";
import React, { PropsWithChildren } from "react";

const SectionWrapper =
  <T extends PropsWithChildren>(Component: React.FC<T>, idName: string) =>
  (hocProps: T) =>
    (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component {...hocProps} />
      </motion.section>
    );

export default SectionWrapper;
