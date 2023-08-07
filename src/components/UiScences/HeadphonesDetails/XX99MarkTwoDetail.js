import { useParams, Link } from "react-router-dom";

import CategoryLayout from "../../Shared/Layouts/CategoryLayout";

import data from "../../../data.json";
import { ActionBtnCategorySolid } from "../../Shared/ActionButtons";

const XX99MarkTwoDetail = () => {
  const markTwoHeadphones = data[3];
  const { id } = useParams();

  const addToCart = (markTwoHeadphones) => {
    console.log(markTwoHeadphones);
  };

  return (
    <CategoryLayout>
      <section className="px-8 md:px-16 lg:px-40 top-50 mb-[10rem]">
        <p className="py-5 capitalize">
          <Link to="/headphones">go back</Link>
        </p>

        <div className=" mt-14">
          <article className="grid gap-[32px] md:grid-cols-2 gap  g:grid-cols-2 lg:items-center">
            <div>
              <picture>
                <source
                  media="(min-width:1024px )"
                  srcset={markTwoHeadphones.categoryImage.desktop}
                />
                <source
                  media="(min-width: 768px)"
                  srcset={markTwoHeadphones.categoryImage.tablet}
                />
                <img
                  className="rounded-lg"
                  src={markTwoHeadphones.categoryImage.mobile}
                  alt=""
                />
              </picture>
            </div>
            <section>
              <div className="text-start lg:px-16 lg:text-start ">
                {/* text-start md:px-16 lg:text-start */}
                <h4 className="font-[400] uppercase text-orange-300 tracking-[10px] ">
                  new product
                </h4>
                <div className="mt-[20px]  md:text-start  lg:text-start">
                  <h2 className="font-[700] uppercase text-4xl font-manrope tracking-[1px] md:px-20 md:tracking-[1.43px] lg:px-0">
                    xx9 mark ii headphones
                  </h2>
                </div>
                <div className="mt-[20px] mb-[20px]  ">
                  <p className="font-[500] leading-6 text-[15px]">
                    {markTwoHeadphones.description}
                  </p>
                </div>
                <p className="mb-5">$ {markTwoHeadphones.price}</p>
                <div className="flex gap-3">
                  <div className="flex gap-8 px-6 py-4 bg-gray-30">
                    <button className="text-xl font-bold text-grayHover">
                      -
                    </button>
                    <span className="text-xl font-bold text-black">1</span>
                    <button className="text-xl font-bold text-grayHover">
                      +
                    </button>
                  </div>
                  <ActionBtnCategorySolid
                    onClick={() => addToCart(markTwoHeadphones)}
                  >
                    add to cart
                  </ActionBtnCategorySolid>
                </div>
              </div>
            </section>
          </article>

          <article className=" mt-20 grid gap-20 lg:grid-cols-2 lg:justify-between lg:gap-[125px]">
            <div className="">
              <h4 className="mb-5 text-3xl font-bold uppercase">features</h4>
              <p className="text-base font-medium">
                {markTwoHeadphones.features}
              </p>
            </div>
            <div>
              <h4 className="mb-5 text-3xl font-bold uppercase">in the box</h4>
              <div>
                {markTwoHeadphones.includes.map((include) => (
                  <p className="flex gap-6 text-base" key={include.item}>
                    <span className="font-bold text-orange-300">
                      {include.quantity}x
                    </span>
                    <span>{include.item}</span>
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </CategoryLayout>
  );
};

export default XX99MarkTwoDetail;
