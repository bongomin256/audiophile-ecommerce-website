import { Link } from "react-router-dom";

function Hero() {
  const flexBetween = "flex items-center justify-center ";
  return (
    <>
      <section className="relative h-screen px-8 bg-no-repeat bg-contain bg-mobileHeade md:h-[80vh] md:px-10 md:bg-tabletHeader lg:bg-desktopHeader lg:bg-cover lg:px-40 ">
        <div
          className={`${flexBetween} flex-col gap-5 h-full text-center lg:w-1/3 lg:text-left lg:items-start`}
        >
          <h3 className="text-gray-500 uppercase tracking-widestXS ">
            New product
          </h3>
          <div>
            <h2 className="text-5xl font-medium text-white uppercase font-manrope md:text-6xl">
              XX99 Mark II Headphones
            </h2>
          </div>
          <div className="md:w-3/5 lg:w-full">
            <p className="text-base tracking-wider text-gray-400 lg:w-full">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>

          <Link to="/xx99-mark-two-headphones">
            <button className="px-6 py-4 tracking-widest text-white uppercase bg-orange-300 hover:bg-orange-100">
              see product
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Hero;
