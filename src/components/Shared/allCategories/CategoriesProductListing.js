import { Link } from "react-router-dom";
import { ActionBtnCategorySolid } from "../ActionButtons";

const CategoriesProductListing = ({ productCategoryName }) => {
  return (
    <>
      {productCategoryName.map((product) => {
        const desktopImg = product.categoryImage.desktop;
        const tabletImg = product.categoryImage.tablet;
        const mobileImg = product.categoryImage.mobile;
        const newPro = product.new;
        return (
          <section className="product__name grid gap-[32px] px-8 lg:grid-cols-2 lg:items-center lg:px-40 mt-14">
            <picture className="product__img">
              <source media="(min-width:1024px )" srcSet={desktopImg} />
              <source media="(min-width: 768px)" srcSet={tabletImg} />
              <img className="rounded-lg" src={mobileImg} alt="" />
            </picture>
            <section className="text-center md:px-16 lg:text-start ">
              {newPro && (
                <h4 className="font-[400] uppercase text-orange-300 tracking-[10px]">
                  new product
                </h4>
              )}
              <div className="mt-[20px]  md:text-center  lg:text-start">
                <h2 className="font-[700] uppercase text-4xl font-manrope tracking-[1px] md:px-20 md:tracking-[1.43px] lg:px-0">
                  {product.name}
                </h2>
              </div>
              <div className="mt-[20px] mb-[20px]  ">
                <p className="font-[500] leading-6 text-[15px]">
                  {product.description}
                </p>
              </div>
              <Link to={`/${product.slug}`}>
                <ActionBtnCategorySolid>see product</ActionBtnCategorySolid>
              </Link>
            </section>
          </section>
        );
      })}
      ;
    </>
  );
};
export default CategoriesProductListing;
