import MainLayout from "../Main/Main";
import Category from "../Category/CategoryHome";
import BestGear from "../BestGear/BestGear";
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
    </MainLayout>
    // <PagesLayout>
    //   <section className="relative h-screen mb-32 top-30">
    //     {/* className="px-8 mt-8 md:px-16 lg:px-40" */}
    //     <div className="">
    //       <h2 className="z-40 text-2xl font-bold text-black uppercase">
    //         Headphones
    //       </h2>
    //     </div>
    //   </section>
    // </PagesLayout>
  );
};

export default HeadphoneScence;
