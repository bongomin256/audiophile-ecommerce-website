import { useNavigate } from "react-router-dom";
import CategoryLayout from "../../components/Shared/Layouts/CategoryLayout";
import data from "../../data.json";
import ProductCategoryPreview from "./ProductCategoryPreview";

const AllCategoriesProductDetailPages = ({ productId }) => {
  const navigate = useNavigate();
  const productDetail = data.find(({ id }) => id === productId);

  return (
    <CategoryLayout>
      <section className="px-8 md:px-16 lg:px-40 top-50 mb-[10rem]">
        <p className="py-5 ">
          <button className="capitalize" onClick={() => navigate(-1)}>
            go back
          </button>
        </p>

        <ProductCategoryPreview productDetail={productDetail} />
      </section>
    </CategoryLayout>
  );
};

export default AllCategoriesProductDetailPages;
