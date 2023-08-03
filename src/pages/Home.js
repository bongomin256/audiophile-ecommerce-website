import Category from "../components/Category/CategoryHome";

import Hero from "../components/HomeComponents/Hero/Hero";
import MainLayout from "../components/Shared/Main/Main";
import Zx9Speaker from "../components/HomeComponents/ZX9SpeakerHome/Zx9Speaker";

import BestGear from "../components/Shared/BestGear/BestGear";
import Yx1Earphones from "../components/HomeComponents/YX1EarphoneHome/Yx1Earphones";
import Zx7Speaker from "../components/HomeComponents/ZX7SpeakerHome/Zx7Speaker";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Category />
      <Zx9Speaker />
      <Zx7Speaker />
      <Yx1Earphones />
      <BestGear />
    </MainLayout>
  );
}

export default Home;
