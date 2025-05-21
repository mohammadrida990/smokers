import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Shop = () => {
  const ref = useRef(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref || !horizontalRef) return;
    const element = ref.current;
    const scrollingElement = horizontalRef.current;
    if (!element || !scrollingElement) return;

    const pinWrap = scrollingElement?.offsetWidth;

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top top",
        scroller: "[data-scroll-container]",
        end: pinWrap,
        scrub: true,
        pin: true,
      },
      ease: "none",
    });

    t1.to(scrollingElement, {
      scrollTrigger: {
        trigger: scrollingElement,
        start: "top top",
        end: pinWrap,
        scroller: "[data-scroll-container]",
        scrub: true,
      },
      x: -pinWrap,
      ease: "none",
    });

    ScrollTrigger.refresh();
    // ScrollTrigger.defaults({ scroller: ".app" });

    return () => {
      t1.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={ref}
      id="shop"
      className="min-h-screen w-screen mx-auto items-start justify-start relative flex z-20 overflow-hidden"
    >
      <h1
        data-scroll
        data-scroll-speed="-2"
        className="font-bold uppercase font-henny-penny text-5xl md:text-9xl absolute z-20 left-10 md:left-[5%] top-5 "
      >
        news
      </h1>

      <div className="z-10  w-[180px] md:w-1/3 bg-gray-300 h-screen fixed left-0 flex justify-center items-center">
        <p className="w-[80%] mx-auto text-sm md:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, quis.
          Eius laborum magnam temporibus sequi commodi itaque excepturi? Autem
          blanditiis provident iusto culpa magnam, inventore minus facilis ipsam
          odit laborum voluptatum a.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          perferendis distinctio voluptates. Nostrum cumque consequuntur eius
          molestias incidunt facere eos quibusdam
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          voluptatibus fugiat itaque magnam praesentium. Sint,
        </p>
      </div>

      <div
        ref={horizontalRef}
        className="
        absolute left-[33%] h-screen bg-black  flex 
        justify-start items-center pl-[35%] w-auto"
      >
        {[
          "/assets/smoke1.jpg",
          "/assets/smoke2.jpg",
          "/assets/smoke3.jpg",
          "/assets/smoke5.jpg",
          "/assets/smoke1.jpg",
          "/assets/smoke2.jpg",
          "/assets/smoke3.jpg",
          "/assets/smoke5.jpg",
        ].map((item, index) => (
          <motion.div
            initial={{ filter: "grayscale(100%)" }}
            whileInView={{ filter: "grayscale(0%)" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: "all" }}
            key={index}
            className="flex w-[13rem] md:w-[20rem] mr-10 justify-center items-center flex-col "
          >
            <img
              src={item}
              className="w-[100%] md:h-auto h-[400px]  drop-shadow-[0_4px_6px_rgba(255,191,0,0.9)]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
