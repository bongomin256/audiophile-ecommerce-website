import rightArrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import headphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";

const SmallScreenMenu = () => {
  return (
    <div className="py-32 lg:hidden">
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:justify-center md:gap-1">
        {/* md:grid md:grid-cols-3 md:gap-12 md:w-full md:items-center md:px-10 */}
        {/* lg:gap-40 */}
        <div className="mb-[20px] md:mb-0 w-[327px] h-[217px] md:w-[327px] md:h-[217px]">
          <div className="flex flex-col items-center justify-center">
            <div className="relative z-10 bottom-20">
              <img src={headphone} className="w-40" alt="headphone" />
            </div>
            <div className="absolute flex flex-col items-center justify-center w-4/5 h-40 gap-3 rounded-lg py-9 bg-gray-30 md:w-1/4 lg:w-1/5">
              <h3 className="text-base font-bold text-black uppercase ">
                headphones
              </h3>
              <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase text-grayHover">
                shop
                <img src={rightArrow} alt="right arrow" />
              </p>
            </div>
          </div>
        </div>
        <div className="mb-[20px] md:mb-0 w-[327px] h-[217px]">
          <div className="flex flex-col items-center justify-center">
            <div className="relative z-10 w-40 bottom-20 ">
              <img src={speaker} alt="speaker" />
            </div>
            <div className="absolute flex flex-col items-center justify-center w-4/5 h-40 gap-3 rounded-lg py-9 bg-gray-30 md:w-1/4 lg:w-1/5">
              <h3 className="text-base font-bold text-black uppercase ">
                speakers
              </h3>
              <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase text-grayHover">
                shop
                <img src={rightArrow} alt="right arrow" />
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[327px] h-[217px]">
          <div className="flex flex-col items-center justify-center">
            <div className="relative z-10 w-40 bottom-20 ">
              <img src={earphone} alt="earphone" />
            </div>
            <div className="absolute flex flex-col items-center justify-center w-4/5 h-40 rounded-lg py-9 bg-gray-30 md:w-1/4 lg:w-1/5">
              <h3 className="text-base font-bold text-black uppercase">
                earphones
              </h3>
              <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase text-grayHover">
                shop
                <img src={rightArrow} alt="right arrow" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenMenu;
