import { motion } from "framer-motion";
import { useState } from "react";
import { scrollInstanceRef } from "./scrollInstance";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (selector: string) => {
    const target = document.querySelector(selector) as HTMLElement;
    const loco = scrollInstanceRef.current;

    if (target && loco) {
      setIsOpen(!isOpen);
      loco.scrollTo(target, {
        offset: -100,
        duration: 2000,
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    } else {
      // fallback
      target?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.div
      drag="y"
      dragConstraints={{
        top: 0,
        bottom: 70,
      }}
      dragElastic={0.05}
      dragSnapToOrigin
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 5, delay: 2, ease: "anticipate" }}
      className={`absolute justify-center items-center flex text-white z-20 flex-col w-full duration-300 transition-all ease-in-out ${
        isOpen ? "top-0" : "-top-[50vh] md:-top-20"
      }`}
    >
      <nav className="w-full  bg-black h-[50vh] md:h-20 px-30 font-bold uppercase">
        <ul className="flex flex-col md:flex-row justify-between items-center relative h-[40vh] md:h-20 text-white font-bold [&>li]:cursor-pointer  gap-0">
          <li />
          <motion.li
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={() => handleScroll("#home")}
          >
            home
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={() => handleScroll(".about")}
          >
            about
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={() => handleScroll("#shop")}
          >
            shop
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={() => handleScroll("#arrival")}
          >
            new
          </motion.li>
        </ul>
      </nav>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-50 h-10 bg-stone-400/50 flex items-center justify-center font-bold  top-full left-1/2
        [clip-path:polygon(0_0,100%_0%,80%_100%,20%_100%)] uppercase cursor-pointer text-amber-200"
      >
        menu
      </div>
    </motion.div>
  );
};

export default Navbar;
