import zx9Mobile from "../../assets/home/mobile/image-speaker-zx9.png";
import zx9Tablet from "../../assets/home/tablet/image-speaker-zx9.png";
import zx9Desktop from "../../assets/home/desktop/image-speaker-zx9.png";
import patternCircle from "../../assets/home/desktop/pattern-circles.svg";
import { ActionButtonSolid } from "../Shared/ActionButtons";
// import circle from "../../assets/home/desktop/pattern-circles.svg";

const Zx9Speaker = () => {
  return (
    <section className="px-8 mt-24 md:px-16 lg:px-40">
      <div className="flex flex-col gap-8 px-8 py-12 m-auto bg-orange-300 rounded-lg md:gap-14 lg:flex-row lg:items-center lg:justify-center lg:gap-24 lg:px-28">
        <div className="m-auto lg:m-0 ">
          <picture className="bg-circlePattern">
            <source media="(min-width: 1024px)" srcset={zx9Desktop} alt="" />
            <source media="(min-width: 768px)" srcset={zx9Tablet} alt="" />
            <img
              className="relative h-[207px] w-[172px] md:h-[237px] md:w-[197px] lg:translate-y-14  lg:h-[490px] lg:w-[410px]"
              src={zx9Mobile}
              alt=""
            />
          </picture>
        </div>
        <div className="flex flex-col gap-8">
          <div className="m-auto text-center md:w-72 md:text-center lg:text-left lg:m-0">
            <h2 className="text-5xl font-semibold text-white uppercase font-monrope md:font-[500] md:text-6xl">
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
            <ActionButtonSolid>see product</ActionButtonSolid>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zx9Speaker;
