import { motion } from "framer-motion";
import CigaretteLogo from "./CigaretteLogo";

const Loader = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{
        duration: 2,
      }}
      className="absolute inset-0 touch-none overflow-hidden w-screen h-screen z-[999999] flex
   flex-col justify-center items-center bg-black text-white
   "
    >
      <CigaretteLogo className="w-60 h-60" showText />
    </motion.div>
  );
};

export default Loader;
