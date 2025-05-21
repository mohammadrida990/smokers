import { motion } from "framer-motion";
import CigaretteLogo from "../components/CigaretteLogo";
import { scrollInstanceRef } from "../components/scrollInstance";

const Footer = () => {
  const handleScroll = (selector: string) => {
    const target = document.querySelector(selector) as HTMLElement;
    const loco = scrollInstanceRef.current;

    if (target && loco) {
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
    <section className=" relative bg-black text-white min-h-screen mx-auto flex flex-col justify-center items-center">
      <div
        data-scroll
        data-scroll-speed="2"
        className="flex flex-col justify-center items-center "
      >
        <CigaretteLogo />

        <h1 className="font-bold font-henny-penny">Smokers</h1>
      </div>

      <motion.div
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
        className="w-[80vw]"
      >
        <ul
          className="flex justify-between items-center flex-wrap m-5 mt-3 p-0 md:p-2 border-t-2 border-b-2 text-white uppercase text-sm md:text-md
       [&>li]:p-4 [&>li]:cursor-pointer [&>li]:transition-all [&>li]:duration-300 [&>li]:ease-in [&>li]:hover:scale-110
        "
        >
          <li onClick={() => handleScroll("#home")} className="">
            home
          </li>
          <li onClick={() => handleScroll(".about")}>about</li>
          <li onClick={() => handleScroll("#shop")}>shop</li>
          <li onClick={() => handleScroll("#arrival")}>arrival</li>
        </ul>

        <div className="font-light  mx-15 p-2 text-[10px] md:text-sm flex justify-between items-center">
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All cigarette reserved
          </span>

          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Made with smoker
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
