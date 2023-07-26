import Nav from "../Nav/Nav";
import Category from "../Category/CategoryHome";
import BestGear from "../BestGear/BestGear";
import Footor from "../Footer/Footor";

const PagesLayout = ({ children }) => {
  return (
    <section>
      <Nav />

      {children}

      <Category />
      <BestGear />
      <Footor />
    </section>
  );
};

export default PagesLayout;
