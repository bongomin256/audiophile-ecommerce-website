import Category from "../components/Category/Category";
import Hero from "../components/Hero/Hero";
import MainLayout from "../components/Main/Main";
import Zx9Speaker from "../components/ZX9SpeakerSection/Zx9Speaker";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Category />
      <Zx9Speaker />
    </MainLayout>
  );
}

export default Home;
