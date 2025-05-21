import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CigaretteLogo from "../components/CigaretteLogo";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home" className="w-screen h-screen relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover z-0 "
      >
        <source src="/src/assets/smoking.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black/70" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute inset-0 z-20 gap-5 justify-center items-center flex flex-col"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 5,
                staggerChildren: 0.3,
              },
            },
          }}
          className="flex font-henny-penny text-white"
        >
          <motion.span
            initial={{ opacity: 0, rotateZ: 180, scale: 5 }}
            animate={{ opacity: 1, rotateZ: 10, scale: 1.1 }}
            transition={{ duration: 8, ease: "anticipate", delay: 3 }}
            className="text-6xl md:text-9xl text-amber-200  drop-shadow-[0_4px_6px_rgba(10,191,0,0.5)]"
          >
            Smoking
          </motion.span>
          {[
            { char: "V", delay: 0.15 },
            { char: "i", delay: 0.13 },
            { char: "b", delay: 0.11 },
            { char: "e", delay: 0.9 },
            { char: "s", delay: 0.7 },
          ].map((char, idx) => (
            <motion.h1
              key={idx}
              data-scroll
              data-scroll-speed="4"
              data-scroll-delay={char.delay}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-white font-henny-penny text-6xl md:text-9xl font-bold drop-shadow-[0_4px_6px_rgba(255,191,0,0.5)]"
            >
              {char.char}
            </motion.h1>
          ))}
        </motion.div>

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 8, duration: 8 }}
          data-scroll
          data-scroll-speed="5"
          data-scroll-delay="0.5"
          className="text-white capitalize font-henny-penny mt-10  drop-shadow-[0_4px_6px_rgba(255,191,0,0.8)]"
        >
          Lorem ipsum dolor sit amet consectetur.
        </motion.h2>
      </motion.div>

      <div className="absolute z-50 inset-0 w-fit h-fit top-1 left-4">
        <Link to="/">
          <CigaretteLogo />
        </Link>
      </div>

      <Navbar />
    </section>
  );
};

export default Home;
