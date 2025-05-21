import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const Arrival = () => {
  const ref = useRef(null);
  const scrollingRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = ref.current;
    const scrollingElement = scrollingRef.current;
    if (!element || !scrollingElement) return;

    const waitForImages = () => {
      const imgs = scrollingElement.querySelectorAll("img");
      const promises = Array.from(imgs).map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete) {
              resolve();
            } else {
              img.addEventListener("load", () => resolve());
              img.addEventListener("error", () => resolve()); // resolve even if error to prevent hang
            }
          })
      );
      return Promise.all(promises);
    };

    waitForImages().then(() => {
      const scrollHeight = scrollingElement.scrollHeight;
      const scrollDistance = scrollHeight - window.innerHeight;

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2,
          scroller: "[data-scroll-container]",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
        ease: "none",
      });

      t1.fromTo(
        scrollingElement,
        { y: 0 },
        { y: -scrollDistance, ease: "none" }
      );
      ScrollTrigger.refresh();

      return () => {
        t1.kill();
        ScrollTrigger.killAll();
      };
    });
  }, []);

  return (
    <section
      ref={ref}
      id="arrival"
      className="relative min-h-screen w-screen mx-auto flex justify-center items-center"
    >
      <div
        className="
          absolute top-[15vh] md:top-7 left-1/2 w-[70vw] h-[70vh] md:w-[30vw] md:h-[93vh] transform -translate-x-1/2 
          z-20 text-black [box-shadow:0_0_0_40vw_white] md:[box-shadow:0_0_0_1vw_white] border-4 border-black
        "
      />
      <h2
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
        className="text-5xl md:text-9xl text-black uppercase font-henny-penny font-bold absolute top-10 left-[5%] z-20"
      >
        arrival
      </h2>

      <div
        ref={scrollingRef}
        className="relative w-[60vw] md:w-[25vw] h-screen flex  flex-col mx-0 z-0 overflow-hidden"
      >
        <img
          data-scroll
          data-scroll-target="#arrival"
          data-scroll-speed="5"
          data-scroll-direction="vertical"
          src="/assets/smoke1.jpg"
          className="w-full h-[100vh] object-contain z-0"
        />
        {/* <img
          data-scroll
          data-scroll-target="#arrival"
          data-scroll-direction="vertical"
          data-scroll-speed="35"
          src="/assets/smoke2.jpg"
          className="w-full h-[100vh] object-contain z-0"
        /> */}
        <img
          data-scroll
          data-scroll-target="#arrival"
          data-scroll-direction="vertical"
          data-scroll-speed="15"
          src="/assets/smoke3.jpg"
          className="w-full h-[100vh] object-contain z-0"
        />
      </div>

      <div
        className="w-[20%] top-10 right-20 absolute p-3 mx-auto z-20 hidden md:block"
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="vertical"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        laudantium consectetur vitae iusto magnam culpa, eaque quisquam sit
        tempora rerum architecto atque, quis eius. Sed a aspernatur expedita
        autem molestiae cumque, et illum minus sint non maiores vitae adipisci
        ipsam soluta recusandae
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odio
        voluptas dolorum sit fuga animi. Dolorum incidunt enim eos magnam
        reiciendis, totam aperiam! Esse ex voluptatum itaque inventore odio,
        atque dolore commodi facilis rem tenetur eos suscipit consequuntur
        asperiores.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        suscipit odit adipisci quae repellat harum laudantium tempore, minus
        dolores quidem nostrum nisi modi perspiciatis rem et quibusdam odio
        repudiandae ullam ipsam facilis non?
      </div>
    </section>
  );
};

export default Arrival;
