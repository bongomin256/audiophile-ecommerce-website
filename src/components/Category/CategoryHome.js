import rightArrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import headphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";

const Category = () => {
  return (
    <section className="px-8 mt-[2.2rem] md:mt-[8.5rem] md:px-16 lg:px-40 ">
      <div className="grid items-center gap-20 md:grid-cols-3 md:gap-5 lg:gap-8 ">
        <div className=" md:mb-0 relative rounded-lg py-9 bg-gray-30  h-[165px] ">
          <div className="flex flex-col items-center justify-center ">
            <img
              src={headphone}
              className="absolute top-[-3.5rem] w-40"
              alt="headphone"
            />

            <div className="absolute flex flex-col items-center justify-center top-14 py-9 md:w-1/4 lg:w-1/5">
              <h3 className="mb-2 text-base font-bold text-black uppercase">
                headphones
              </h3>
              <p className="flex items-center justify-center gap-2 text-sm uppercase">
                shop
                <img src={rightArrow} alt="right arrow" />
              </p>
            </div>
          </div>
        </div>
        <div className=" md:mb-0 relative rounded-lg py-9 bg-gray-30  h-[165px] ">
          <div className="flex flex-col items-center justify-center ">
            <img
              src={speaker}
              className="absolute top-[-3.5rem] w-40"
              alt="headphone"
            />

            <div className="absolute bottom-0 flex flex-col items-center justify-center top-14 py-9 md:w-1/4 lg:w-1/5">
              <h3 className="mb-2 text-base font-bold text-black uppercase ">
                speakers
              </h3>
              <p className="flex items-center justify-center gap-2 text-sm uppercase">
                shop
                <img src={rightArrow} alt="right arrow" />
              </p>
            </div>
          </div>
        </div>
        <div className=" md:mb-0 relative rounded-lg py-9 bg-gray-30  h-[165px] ">
          <div className="flex flex-col items-center justify-center ">
            <img
              src={earphone}
              className="absolute top-[-3.5rem] w-40"
              alt="headphone"
            />

            <div className="absolute bottom-0 flex flex-col items-center justify-center top-14 py-9 md:w-1/4 lg:w-1/5">
              <h3 className="mb-2 text-base font-bold text-black uppercase ">
                earphones
              </h3>
              <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase font text-grayHover">
                shop
                <img src={rightArrow} alt="right arrow" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
