import bestGearMobile from "../../assets/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import bestGearDesktop from "../../assets/shared/desktop/image-best-gear.jpg";

const bestGear = () => {
  return (
    <section className="px-8 mt-24 md:px-16 lg:px-40">
      <article className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
        {/* className="flex flex-col gap-10 lg:items-center lg:flex-row" */}
        <picture className="lg:order-2">
          <source media="(min-width: 1024px)" srcset={bestGearDesktop} alt="" />
          <source media="(min-width: 768px )" srcset={bestGearTablet} alt="" />
          <img
            className="mb-10 rounded-lg  md:mb-12 lg:h-[588px] lg:w-full lg:mb-0"
            // lg:flex-1
            src={bestGearMobile}
            alt=""
          />
        </picture>
        <section className="text-center md:px-24 lg:px-0 lg:text-start lg:w-3/4">
          {/* lg:flex-1 lg:text-start lg:px-0 */}
          <h3 className="mb-10 text-3xl font-semibold text-black uppercase md:text-4xl">
            bring you the <span className="text-orange-300">best</span> audio
            gear
          </h3>
          <article>
            <p className="leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </article>
        </section>
      </article>
    </section>
  );
};

export default bestGear;
