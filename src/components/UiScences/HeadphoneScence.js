import { Link } from "react-router-dom";

// import Category from "../Category/CategoryHome";
// import { ActionButtonSolid } from "../Shared/ActionButtons";
// import BestGear from "../Shared/BestGear/BestGear";

import { ActionBtnCategorySolid } from "../Shared/ActionButtons";
// IMPORTING IMAGES
import markTwoHeadphonesDesktop from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import markTwoHeadphonesTablet from "../../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import markTwoHeadphonesMobile from "../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";

//IMPORTING LAYOUT
import CategoryLayout from "../Shared/Layouts/CategoryLayout";

const HeadphoneScence = () => {
  return (
    <CategoryLayout>
      <section className="top-50 mb-[10rem]">
        <div className="text-center bg-black">
          <h2 className="py-10 text-3xl font-semibold text-white uppercase">
            Headphones
          </h2>
        </div>
        <section className="mt-14">
          <article className="grid gap-[32px] px-8 lg:grid-cols-2 lg:items-center lg:px-40">
            <div className="">
              <picture>
                <source
                  media="(min-width:1024px )"
                  srcset={markTwoHeadphonesDesktop}
                />
                <source
                  media="(min-width: 768px)"
                  srcset={markTwoHeadphonesTablet}
                />
                <img
                  className="rounded-lg"
                  src={markTwoHeadphonesMobile}
                  alt=""
                />
              </picture>
            </div>
            <section className="text-center md:px-16 lg:text-start ">
              <h4 className="font-[400] uppercase text-orange-300 tracking-[10px]">
                new product
              </h4>
              <div className="mt-[20px]  md:text-center  lg:text-start">
                <h2 className="font-[700] uppercase text-4xl font-manrope tracking-[1px] md:px-20 md:tracking-[1.43px] lg:px-0">
                  xx9 mark ii headphones
                </h2>
              </div>
              <div className="mt-[20px] mb-[20px]  ">
                <p className="font-[500] leading-6 text-[15px]">
                  The new XX99 Mark II headphones is the pinnacle of pristine
                  audio. It redefines your premium headphone experience by
                  reproducing the balanced depth and precision of studio-quality
                  sound.
                </p>
              </div>
              <Link to="/headphones/xx99-mark-two-headphones">
                <ActionBtnCategorySolid>see product</ActionBtnCategorySolid>
              </Link>
            </section>
          </article>
        </section>
      </section>
    </CategoryLayout>
  );
};

export default HeadphoneScence;
