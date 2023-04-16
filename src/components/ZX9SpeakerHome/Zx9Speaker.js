import zx9Mobile from "../../assets/shared/mobile/image-zx9-speaker.jpg";
import zx9Tablet from "../../assets/shared/tablet/image-zx9-speaker.jpg";
import zx9Desktop from "../../assets/shared/desktop/image-zx9-speaker.jpg";

const Zx9Speaker = () => {
  return (
    <section className="px-8 mt-[2.2rem] md:px-16 lg:px-28">
      <div className="flex flex-col gap-8 px-8 py-12 m-auto bg-orange-300 rounded-lg lg:flex-row lg:items-center lg:px-28">
        <div className="m-auto grow">
          <picture>
            <source media="(min-width: 1024px)" srcset={zx9Desktop} alt="" />
            <source media="(min-width: 768px)" srcset={zx9Tablet} alt="" />
            <img src={zx9Mobile} alt="" />
          </picture>
        </div>
        <div className="flex flex-col gap-8 grow">
          <div className="m-auto text-center md:w-72 md:text-center lg:text-left lg:m-0">
            <h2 className="text-5xl font-semibold text-white uppercase font-monrope md:font-bold md:text-6xl">
              zx9 speaker
            </h2>
          </div>
          <div className="m-auto text-center text-white-30 md:w-72 md:text-center lg:text-left lg:m-0">
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
          </div>
          <div className="text-center lg:text-left">
            <button className="px-6 py-4 tracking-widest text-white uppercase bg-black-10 hover:bg-grayHover">
              see product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zx9Speaker;
