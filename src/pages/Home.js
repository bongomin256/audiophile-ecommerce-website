import Category from "../components/Category/Category";
import Hero from "../components/Hero/Hero";
import MainLayout from "../components/Main/Main";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Category />
    </MainLayout>
  );
}

export default Home;
