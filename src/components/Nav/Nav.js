import { useState } from "react";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import logo from "../../assets/shared/desktop/logo.svg";
import mobileMenu from "../../assets/shared/tablet/icon-hamburger.svg";

import Category from "../Category/CategoryHome";

import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Link } from "react-router-dom";

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
          className="lg:hidden"
        >
          <img
            src={mobileMenu}
            alt="mobile menu"

            // className="text-3xl "
            // onClick={() => setIsMobileNavOpen(true)}
          />
        </div>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <nav
          className={`${
            isMobileNavOpen ? "hidden" : "block"
          } md:hidden lg:block `}
          // className={`${isMobileNavOpen ? "hidden" : "block"} lg:block`}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <ul className={`${flexBetween} gap-6 uppercase lg:gap-10`}>
            <li className="hover:text-orange-300">
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="hover:text-orange-300">
              <NavLink to="headphones">Headphones</NavLink>
            </li>
            <li className="hover:text-orange-300">
              <NavLink to="speakers">Speakers</NavLink>
            </li>
            <li className="hover:text-orange-300">
              <NavLink to="earphones">Earphones</NavLink>
            </li>
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
