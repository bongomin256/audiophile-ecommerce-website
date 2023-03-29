import { useState } from "react";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import logo from "../../assets/shared/desktop/logo.svg";
import mobileMenu from "../../assets/shared/tablet/icon-hamburger.svg";

import Category from "../Category/Category";

import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const flexBetween = "flex items-center justify-between";
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <header
        className={`${flexBetween} bg-black-10 border-b border-gray-600 text-white py-10 px-8 absolute z-30 w-full lg:px-28`}
      >
        <div
          // className={`${
          //   isMobileNavOpen ? <GiHamburgerMenu /> : <AiOutlineClose />
          // } lg:hidden`}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          // className="lg:hidden"
        >
          <img
            src={mobileMenu}
            alt="mobile menu"

            // className="text-3xl "
            // onClick={() => setIsMobileNavOpen(true)}
          />
        </div>
        <div>
          <img src={logo} alt="logo" />
          {/* <h1 className="text-3xl font-bold font-manrope ">audiophile</h1> */}
        </div>

        <nav
          className={`${isMobileNavOpen ? "hidden" : "block"} lg:block`}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <ul className={`${flexBetween} gap-6`}>
            <li>Home</li>
            <li>Headphones</li>
            <li>Speakers</li>
            <li>Ear Phones</li>
          </ul>
        </nav>
        <img src={cart} alt="cart" />
        {/* <AiOutlineShoppingCart className="text-3xl" /> */}
      </header>
      {/* <div className={isMobileNavOpen ? "block" : "hidden"}>
        <h2>testing</h2>
      </div> */}
    </>
  );
}

export default Nav;
