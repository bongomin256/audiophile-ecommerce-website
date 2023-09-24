import data from "../../data.json";
import CategoryLayout from "../../components/Shared/Layouts/CategoryLayout";
import CategoriesProductListing from "./CategoriesProductListing";

const CategoriesPages = ({ categoryName }) => {
  const productCategoryName = data
    .filter((product) => product.category === categoryName)
    .reverse();
  return (
    <CategoryLayout>
      <section className="mb-[10rem]">
        <div className="text-center bg-black">
          <h2 className="py-10 text-3xl font-semibold text-white uppercase">
            {categoryName}
          </h2>
        </div>
        {/* <h2>{categoryName}</h2> */}
        <article className="product__listing">
          <CategoriesProductListing productCategoryName={productCategoryName} />
        </article>
      </section>
    </CategoryLayout>
  );
};

export default CategoriesPages;
