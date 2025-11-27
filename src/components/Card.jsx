import { motion } from "motion/react";
const Card = ({ style, image, containerRef }) => {
  return (
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      alt="image"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  );
};

export default Card;
