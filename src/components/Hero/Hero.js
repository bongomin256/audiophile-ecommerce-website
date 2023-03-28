function Hero() {
  const flexBetween = "flex items-center justify-center ";
  return (
    <>
      <section className="relative h-screen px-8 bg-no-repeat bg-contain bg-mobileHeader md:px-10 md:bg-tabletHeader lg:bg-desktopHeader lg:px-28 ">
        <div
          className={`${flexBetween} flex-col gap-5 h-full text-center lg:w-1/3 lg:text-start`}
        >
          <h3 className="tracking-widest text-gray-500 uppercase">
            New product
          </h3>
          <div>
            <h2 className="text-5xl font-medium text-white uppercase font-manrope md:text-6xl">
              XX99 Mark II Headphones
            </h2>
          </div>
          <div className="md:w-3/5">
            <p className="text-base tracking-wider text-gray-400">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>

          <button className="px-6 py-4 tracking-widest text-white uppercase bg-orange-300 hover:bg-orange-100">
            see product
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
