/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useLayoutEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Banner from "./sections/Banner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./sections/Footer";
import { scrollInstanceRef } from "./components/scrollInstance";
import Shop from "./sections/Shop";
import Loader from "./components/Loader";
import Arrival from "./sections/Arrival";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const containerRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);

    const onLoad = () => {
      if (!containerRef.current) return;
      scrollRef.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        multiplier: 1,
        class: "is-reveal",
        smartphone: { smooth: true },
        tablet: { breakpoint: 768, smooth: true },
        reloadOnContextChange: true,
      });

      scrollInstanceRef.current = scrollRef.current;

      ScrollTrigger.scrollerProxy(containerRef.current, {
        scrollTop(value) {
          return value !== undefined
            ? scrollRef.current?.scrollTo(value)
            : (scrollRef.current as any)?.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: containerRef.current!.style.transform ? "transform" : "fixed",
      });

      scrollRef.current.on("scroll", ScrollTrigger.update);
      // ScrollTrigger.refresh();

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      });
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("load", onLoad);
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
