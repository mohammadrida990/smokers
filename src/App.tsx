import { useRef, useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Shop from "./sections/Shop";
import Banner from "./sections/Banner";
import Arrival from "./sections/Arrival";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./sections/Footer";
import { scrollInstanceRef } from "./components/scrollInstance";
import Loader from "./components/Loader";

function App() {
  const containerRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      setLoaded(true);
    }, 3000);

    if (!containerRef.current) return;

    scrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
      smartphone: {
        smooth: true,
        // direction: "vertical",
      },
      tablet: {
        breakpoint: 768, // Breakpoint where tablet settings apply
        smooth: true,
        // direction: "vertical", // 'vertical' or 'horizontal'
      },
      reloadOnContextChange: true,
      // getDirection: true, // Track scroll direction (adds `data-scroll-direction`)
      // getSpeed: true, // Track scroll speed (adds `data-scroll-speed`)
      // lerp: 0.1,
    });

    scrollInstanceRef.current = scrollRef.current;

    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return value !== undefined
          ? scrollRef.current?.scrollTo(value)
          : // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (scrollRef.current as any)?.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: containerRef.current?.style.transform ? "transform" : "fixed",
    });

    scrollRef.current.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh();

    return () => {
      scrollRef.current?.destroy();
      scrollRef.current = null;
    };
  }, [setLoaded]);

  return (
    <AnimatePresence key="main">
      <AnimatePresence key="loader">
        {loaded ? null : <Loader />}
      </AnimatePresence>

      <main
        className="app overflow-hidden min-h-screen"
        ref={containerRef}
        data-scroll-container
      >
        <Home />

        <About />

        <Shop />

        <Banner />

        <Arrival />

        <Footer />
      </main>
    </AnimatePresence>
  );
}

export default App;
