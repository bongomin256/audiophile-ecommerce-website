import { ActionButtonOuline } from "../../Shared/ActionButtons";

function Zx7Speaker() {
  return (
    <section className="w-full px-8 mt-8 md:px-16 lg:px-40">
      <article className="relative h-[320px] rounded-lg bg-no-repeat bg-contain bg-mobileZx7Home md:bg-tabletZx7Home lg:bg-desktopZx7Home lg:bg-cover">
        <div className="absolute top-[25%] pl-5 md:pl-14 lg:pl-24">
          <h2 className="mb-10 text-4xl font-[500] text-black uppercase">
            Zx7 Speaker
          </h2>
          <ActionButtonOuline>see product</ActionButtonOuline>
        </div>
      </article>
    </section>
  );
}

export default Zx7Speaker;
