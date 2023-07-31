import Category from "../Category/CategoryHome";
import BestGear from "../Shared/BestGear/BestGear";
import MainLayout from "../Shared/Main/Main";
// import PagesLayout from "../PagesLayout/PagesLayout";

const HeadphoneScence = () => {
  return (
    <MainLayout>
      <section className="top-50">
        <div className="">
          <h2 className="uppercase ">Headphones</h2>
        </div>
      </section>
      <Category />
      <BestGear />
      {/* <BestGear /> */}
    </MainLayout>
  );
};

export default HeadphoneScence;
