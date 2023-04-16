import yx1Mobile from "../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg";
import yx1Tablet from "../../assets/product-yx1-earphones/tablet/image-gallery-2.jpg";
import yx1Desktop from "../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";

const Yx1Earphones = () => {
  return (
    <section className="px-8 mt-8 md:px-16 lg:px-28">
      <article className="md:grid md:grid-cols-2 md:items-center md:gap-5 ">
        <picture>
          <source media="(min-width: 1024px )" srcset={yx1Desktop} />
          <source media="(min-width:768px )" srcset={yx1Tablet} />
          <img
            className="rounded-lg h-[276px] md:h-[320px] lg:w-full"
            src={yx1Mobile}
            alt=""
          />
        </picture>
        <section className="px-10 py-10 pl-8 mt-8 rounded-lg bg-gray-30 md:mt-0 md:py-24 md:px-12 lg:px-20">
          <h2 className="text-4xl font-semibold text-black uppercase mb-14 md:mb-8 md:text-3xl">
            yx1 earphones
          </h2>
          <button className="px-6 py-4 font-semibold tracking-widest uppercase border text-black-10 border-black-10 hover:bg-black hover:text-white">
            see product
          </button>
        </section>
      </article>
    </section>
  );
};

export default Yx1Earphones;
