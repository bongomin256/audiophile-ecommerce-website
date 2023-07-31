import { useState } from "react";
import cart from "../../../../assets/shared/desktop/icon-cart.svg";
import logo from "../../../../assets/shared/desktop/logo.svg";
import mobileMenu from "../../../../assets/shared/tablet/icon-hamburger.svg";

import { NavLink, Link } from "react-router-dom";

function Nav() {
  const flexBetween = "flex items-center justify-between";
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <header
        className={`top-0 py-10 px-8 sticky z-30 w-full lg:px-40 border-b border-gray-600 bg-[#1a1a1a] `}
      >
        <nav className={`${flexBetween}   text-white`}>
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
        </nav>
      </header>
    </>
  );
}

export default Nav;
