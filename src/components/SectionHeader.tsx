import { textVariant } from "@src/utils/motion";
import { motion } from "framer-motion";

import { styles } from "@src/styles";

interface SectionHeaderProps {
  headText: string;
  subText: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ headText, subText }) => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>{subText}</p>
      <h2 className={styles.sectionHeadText}>{headText}</h2>
    </motion.div>
  );
};

export default SectionHeader;
