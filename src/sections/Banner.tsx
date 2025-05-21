const Banner = () => {
  return (
    <section className="min-h-screen w-[80vw] flex items-center mx-auto justify-center relative">
      <div
        id="up"
        className="h-[50vh] flex flex-col items-center justify-center md:justify-evenly"
      >
        <h1 className="font-bold font-henny-penny text-lg md:text-4xl whitespace-nowrap uppercase leading-none my-2 md:my-0">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
            className="block p-3 bg-black text-white  mix-blend-difference"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </h1>

        <h1 className="font-bold font-henny-penny text-lg md:text-4xl whitespace-nowrap uppercase leading-none  my-2 md:my-0">
          <span
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="-4"
            data-scroll-target="#up"
            className="block p-3 bg-black text-white  mix-blend-difference"
          >
            Lorem ipsum dolor sit amet.
          </span>
        </h1>

        <h1 className="font-bold font-henny-penny text-lg md:text-4xl whitespace-nowrap uppercase leading-none  my-2 md:my-0">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="5"
            data-scroll-target="#up"
            className="block p-3 bg-black text-white  mix-blend-difference"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </span>
        </h1>

        <h1 className="font-bold font-henny-penny text-lg md:text-4xl whitespace-nowrap uppercase leading-none  my-2 md:my-0">
          <span
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="4"
            data-scroll-target="#up"
            className="block p-3 bg-black text-white  mix-blend-difference"
          >
            Lorem ipsum dolor sit amet.
          </span>
        </h1>

        <h1 className="font-bold font-henny-penny text-lg md:text-4xl whitespace-nowrap uppercase leading-none  my-2 md:my-0">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="3"
            data-scroll-target="#up"
            className="block p-3 bg-black text-white  mix-blend-difference"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Banner;
