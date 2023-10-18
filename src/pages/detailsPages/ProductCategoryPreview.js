import { useContext, useState } from "react";

// importing buttons from shared components directory
import { ActionBtnCategorySolid } from "../../components/Shared/ActionButtons";
import OtherProducts from "./OtherProducts";
// import { CartContext, UseCartContext } from "../../context/CartContext";

const ProductCategoryPreview = ({
  productDetail,
  addProductToCart,
  quantityCount,
  setQuantityCount,
  alertMessage,
  //   handleAddToCart,
}) => {
  //splitiing the features contents into new line
  const [firstFeature, secondFeature] = productDetail.features.split("\n\n");
  const gallery = productDetail.gallery;
  //   const [quantity, setQuantity] = useState(1);

  //   const { slug } = productDetail;
  //   const { addProductToCart } = useContext(CartContext);

  // function to add to cart

  //   const handleAddToCart = () => {
  //     return addToCart(slug, quantity);
  //   };

  return (
    <section className="mt-14">
      <section className="grid gap-[32px] md:grid-cols-2 md:items-center  g:grid-cols-2 lg:items-center">
        <picture>
          <source
            media="(min-width:1024px )"
            srcSet={productDetail.image.desktop}
          />
          <source
            media="(min-width:768px )"
            srcSet={productDetail.image.tablet}
          />
          <img src={productDetail.image.mobile} alt="" />
        </picture>
        <section>
          {productDetail.new && (
            <h4 className="font-[400] uppercase text-orange-300 tracking-[10px] ">
              new product
            </h4>
          )}
          <div className="mt-[20px]  md:text-start  lg:text-start">
            <h2 className="font-[700] uppercase text-4xl font-manrope tracking-[1px]  md:tracking-[1.43px] lg:px-0">
              {productDetail.name}
            </h2>
          </div>
          <div className="mt-[20px] mb-[20px]  ">
            <p className="font-[500] leading-6 text-[15px]">
              {productDetail.description}
            </p>
          </div>
          <p className="mb-5 text-lg font-bold">$ {productDetail.price}</p>
          <div className="flex gap-3 cursor-pointer">
            <div className="flex gap-8 px-6 py-4 bg-gray-30">
              <span
                onClick={() =>
                  quantityCount > 1 && setQuantityCount(quantityCount - 1)
                }
                // onChange={() => setQuantityCount(quantityCount)}
                className="text-xl font-bold text-grayHover hover:text-orange-300"
              >
                -
              </span>
              <span className="text-xl font-bold text-black">
                {quantityCount}
              </span>
              <span
                onClick={() => setQuantityCount(quantityCount + 1)}
                // onChange={() => setQuantityCount(quantityCount)}
                className="text-xl font-bold text-grayHover hover:text-orange-300"
              >
                +
              </span>
            </div>
            <div onClick={() => addProductToCart(productDetail)}>
              <ActionBtnCategorySolid>add to cart</ActionBtnCategorySolid>
            </div>
          </div>
          {alertMessage && (
            <p className="text-red-300">Item is already added to your cart!</p>
          )}
        </section>
      </section>
      <section className=" mt-20 grid gap-20 lg:grid-cols-2 lg:justify-between lg:gap-[125px]">
        <div className="">
          <h4 className="mb-5 text-3xl font-bold uppercase lg:mb-8">
            features
          </h4>
          <p className="mb-5 text-base font-medium lg:mb-8">{firstFeature}</p>
          <p className="text-base font-medium">{secondFeature}</p>
        </div>
        <div className="md:grid md:grid-cols-2 lg:block">
          <h4 className="mb-5 text-3xl font-bold uppercase lg:mb-8">
            in the box
          </h4>
          <div className="grid lg:gap-3">
            {productDetail.includes.map(({ item, quantity }) => (
              <p className="flex gap-6 text-base" key={item}>
                <span className="font-bold text-orange-300">{quantity}x</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-col-2 ">
          {/* className="gap-5 md:grid md:grid-col-2" */}
          {/* Getting the key value from gallery property inorder to map over the keys */}
          {Object.keys(gallery).map((key, index) => (
            <div
              key={key}
              className={`${index === 2 ? "md:col-span-2 " : "md:col-span-1 "}`}
            >
              <picture>
                <source
                  media="(min-width:1024px )"
                  srcSet={gallery[key].desktop}
                />
                <source
                  media="(min-width:768px )"
                  srcSet={gallery[key].tablet}
                />
                <img className="rounded-lg" src={gallery[key].mobile} alt="" />
              </picture>
            </div>
          ))}
        </div>
      </section>

      <OtherProducts productDetail={productDetail} />
    </section>
  );
};

export default ProductCategoryPreview;
