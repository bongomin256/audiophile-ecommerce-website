import { useState } from "react";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import logo from "../../assets/shared/desktop/logo.svg";
import mobileMenu from "../../assets/shared/tablet/icon-hamburger.svg";

// import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";

import { NavLink, Link } from "react-router-dom";
import SmallScreenMenu from "../Shared/SmallScreenMenu";

function Nav() {
  const flexBetween = "flex items-center justify-between";
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <header
        className={`top-0 py-10 px-8 fixed z-30 w-full lg:px-40 border-b border-gray-600  `}
      >
        <nav
          className={`${flexBetween}   text-white`}
          // bg-black-10
          // border-b
          // border-gray-600
          // text-white
          // top-0
          // py-10
          // px-8
          // fixed
          // z-30
          // w-full
          // lg:px-28
        >
          <div
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="lg:hidden"
          >
            <img src={mobileMenu} alt="mobile menu" />
          </div>
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul
            className={`${flexBetween} gap-6 uppercase lg:gap-10 
            ${isMobileNavOpen ? "hidden" : "block"}
           
            `}
          >
            <li className="hover:text-orange-300">
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="hover:text-orange-300">
              <NavLink to="/headphones">Headphones</NavLink>
            </li>
            <li className="hover:text-orange-300">
              <NavLink to="/speakers">Speakers</NavLink>
            </li>
            <li className="hover:text-orange-300">
              <NavLink to="/earphones">Earphones</NavLink>
            </li>
          </ul>
          <img src={cart} alt="cart" />
          {/* <SmallScreenMenu /> */}
        </nav>
      </header>

      {/* <header
        className={`${flexBetween} bg-black-10 border-b border-gray-600 text-white top-0 py-10 px-8 fixed z-30 w-full lg:px-28`}
      >
        <div
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="lg:hidden"
        >
          <img src={mobileMenu} alt="mobile menu" />
        </div>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <nav
          className={`${
            isMobileNavOpen ? "block z-50 left-[-50]" : "hidden"
          }  lg:block absolute top-24 bg-red-600 lg:top-0 lg:relative lg:bg-none w-screen left-0 h-[80vh] transition-all duration-500 ease-in-out `}
          // className={`${isMobileNavOpen ? "hidden" : "block"} lg:block`}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <ul
            className={`lg:${flexBetween} gap-6 uppercase lg:gap-10 md:hidden hidden lg:block
           
            `}
            //  ${
            //   isMobileNavOpen ? "hidden" : "block"
            // }
            // onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
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
          <SmallScreenMenu />
        </nav>
        <img src={cart} alt="cart" />
      </header> */}
    </>
  );
}

export default Nav;
