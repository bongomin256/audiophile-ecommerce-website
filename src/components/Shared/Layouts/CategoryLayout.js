// import Category from "../Category/CategoryHome";
import BestGear from "../../Shared/BestGear/BestGear";
import MainLayout from "../../Shared/Main/Main";
import Category from "../../Category/CategoryHome";

const CategoryLayout = ({ children }) => {
  return (
    <MainLayout>
      {children}
      <Category />
      <BestGear />
    </MainLayout>
  );
};

export default CategoryLayout;
