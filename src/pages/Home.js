import Category from "../components/Category/Category";
import Hero from "../components/Hero/Hero";
import MainLayout from "../components/Main/Main";
import Zx9Speaker from "../components/ZX9SpeakerHome/Zx9Speaker";
import BestGear from "../components/BestGear/BestGear";
import Yx1Earphones from "../components/YX1EarphoneHome/Yx1Earphones";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Category />
      <Zx9Speaker />
      <Yx1Earphones />
      <BestGear />
    </MainLayout>
  );
}

export default Home;
