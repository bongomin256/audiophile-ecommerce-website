import yx1Mobile from "../../assets/home/mobile/image-earphones-yx1.jpg";
import yx1Tablet from "../../assets/home/tablet/image-earphones-yx1.jpg";
import yx1Desktop from "../../assets/home/desktop/image-earphones-yx1.jpg";
import { ActionButtonOuline } from "../Shared/ActionButtons";

const Yx1Earphones = () => {
  return (
    <section className="px-8 mt-8 md:px-16 lg:px-40">
      <article className="md:grid md:grid-cols-2 md:items-center md:gap-5 ">
        <picture>
          <source media="(min-width: 1024px )" srcset={yx1Desktop} />
          <source media="(min-width:768px )" srcset={yx1Tablet} />
          <img
            className="rounded-lg h-[200px] w-[320px] md:h-[320px] md:w-[339px] lg:w-full "
            src={yx1Mobile}
            alt=""
          />
        </picture>
        <section className="py-10 mt-8 h-[200px]   md:h-[320px] md:w-[339px] lg:w-full  rounded-lg bg-gray-30 md:mt-0 md:py-24 md:px-12 lg:px-20">
          <div className="pl-5">
            <h2 className="text-4xl text-black uppercase font-[500] mb-6 md:mb-8 md:text-3xl">
              yx1 earphones
            </h2>
            {/* <button className="px-6 py-4 font-semibold tracking-widest uppercase border text-black-10 border-black-10 hover:bg-black hover:text-white">
            see product
          </button> */}
            <ActionButtonOuline>see product</ActionButtonOuline>
          </div>
        </section>
        <img src="" alt="" />
      </article>
    </section>
  );
};

export default Yx1Earphones;
