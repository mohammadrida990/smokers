const About = () => {
  return (
    <section
      id="fixed-target"
      className="relative min-h-screen w-[100vw] md:w-[80vw] flex mx-auto z-5 about"
    >
      <h2
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
        className=" uppercase text-5xl md:text-9xl text-black font-henny-penny font-bold absolute top-15 left-5 z-10"
      >
        about us
      </h2>

      <div
        className="w-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto p-5 md:relative md:w-1/2 mt-0 md:mt-50 z-10
         md:top-0 md:left-0 md:-translate-x-0 md:-translate-y-0 md:mx-0 md:p-0 backdrop-blur-[2px] md:backdrop-blur-none bg-amber-300/40 md:bg-inherit rounded-2xl md:rounded-none text-sm md:text-lg"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#fixed-target"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        laudantium consectetur vitae iusto magnam culpa, eaque quisquam sit
        tempora rerum architecto atque, quis eius.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odio
        voluptas dolorum sit fuga animi. Dolorum incidunt enim eos magnam
        reiciendis, totam aperiam! Esse ex voluptatum itaque inventore odio,
        atque dolore commodi facilis
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        suscipit odit adipisci quae repellat harum laudantium tempore, minus
        dolores quidem nostrum nisi modi perspiciatis rem et quibusdam odio
        repudiandae ullam ipsam facilis non?
      </div>

      <div className="md:w-1/2 relative w-[100%] flex justify-center items-center">
        <img
          src="/src/assets/smoke3.jpg"
          className="w-full h-full md:h-full object-cover"
        />

        <img
          data-scroll
          data-scroll-speed="5"
          src="/src/assets/smoke5.jpg"
          className="md:w-[40%] h-auto absolute right-[95%] bottom-[10%] w-[30%] left-[5%] object-cover"
        />

        <img
          data-scroll
          data-scroll-speed="-2"
          src="/src/assets/smoke1.jpg"
          className="h-auto md:left-[80%] md:bottom-[30%] md:w-[40%] absolute w-[30%] left-[60%] bottom-[20%] object-cover"
        />
      </div>
    </section>
  );
};

export default About;
