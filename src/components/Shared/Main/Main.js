import Footor from "./Footer/Footor";
import Nav from "./Nav/Nav";

const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="">{children}</main>
      <Footor />
    </>
  );
};

export default MainLayout;
