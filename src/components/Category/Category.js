import rightArrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import headphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";

const Category = () => {
  return (
    <section className="px-8 mt-[2.2rem] md:mt-[8.5rem] lg:px-28">
      {/* className="px-8 mt-[2.2rem] grid grid-cols-1 gap-28 md:grid-cols-[3] */}
      <div className="flex flex-col gap-28 md:flex-row md:gap-14 md:w-full md:justify-center lg:gap-40">
        <div>
          <div className="flex flex-col items-center justify-center ">
            <div className="relative z-10 w-40 bottom-20">
              <img src={headphone} alt="headphone" />
            </div>
            <div className="absolute flex flex-col items-center justify-center w-4/5 h-40 rounded-lg py-9 bg-gray-30 md:w-1/4 lg:w-1/5">
              <h3 className="text-base font-medium uppercase ">headphones</h3>
              <p className="flex items-center justify-center gap-2 text-sm uppercase">
                shop
                <img src={rightArrow} alt="right arrow" />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative z-10 w-40 bottom-20 ">
            <img src={speaker} alt="speaker" />
          </div>
          <div className="absolute flex flex-col items-center justify-center w-4/5 h-40 rounded-lg py-9 bg-gray-30 md:w-1/4 lg:w-1/5">
            <h3 className="text-base font-medium uppercase ">headphones</h3>
            <p className="flex items-center justify-center gap-2 text-sm uppercase">
              shop
              <img src={rightArrow} alt="right arrow" />
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="relative z-10 w-40 bottom-20 ">
            <img src={earphone} alt="earphone" />
          </div>
          <div className="absolute flex flex-col items-center justify-center w-4/5 h-40 rounded-lg py-9 bg-gray-30 md:w-1/4 lg:w-1/5">
            <h3 className="text-base font-medium uppercase ">headphones</h3>
            <p className="flex items-center justify-center gap-2 text-sm uppercase">
              shop
              <img src={rightArrow} alt="right arrow" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
