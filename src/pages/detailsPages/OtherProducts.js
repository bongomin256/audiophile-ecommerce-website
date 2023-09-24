import React from "react";
import { ActionBtnCategorySolid } from "../../components/Shared/ActionButtons";
import { Link } from "react-router-dom";

const OtherProducts = ({ productDetail }) => {
  return (
    <section className="mt-28">
      <h4 className="text-black mb-8 text-xl font-semibold text-center uppercase md:mb-14 md:text-[32px] md:font-medium lg:text-3xl lg:font-bold lg:mb-16">
        You may also like
      </h4>
      <section className="grid gap-14 md:grid-cols-3 md:gap-3 lg:gap-8">
        {productDetail.others.map(({ slug, name, image }) => (
          <article key={name}>
            <div>
              <picture>
                <source media="(min-width:1024px )" srcSet={image.desktop} />
                <source media="(min-width:768px )" srcSet={image.tablet} />
                <img className="rounded-lg" src={image.mobile} alt="" />
              </picture>
            </div>
            <div className="mt-10 text-center">
              <h4 className="text-black mb-8 text-xl font-semibold uppercase md:text-[24px] md:font-medium lg:text-2xl lg:font-bold">
                {name}
              </h4>
              <Link to={`/${slug}`}>
                <ActionBtnCategorySolid>see product</ActionBtnCategorySolid>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default OtherProducts;
