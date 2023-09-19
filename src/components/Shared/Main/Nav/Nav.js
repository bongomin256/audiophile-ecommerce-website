import { useState } from "react";
import cart from "../../../../assets/shared/desktop/icon-cart.svg";
import logo from "../../../../assets/shared/desktop/logo.svg";
import mobileMenu from "../../../../assets/shared/tablet/icon-hamburger.svg";

import { NavLink, Link } from "react-router-dom";
import Category from "../../../Category/CategoryHome";

function Nav({ size }) {
  const flexBetween = "flex items-center justify-between";
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    // <>
    //   <header
    //     className={`top-0 py-10 px-8 sticky z-30 w-full md:px-16 lg:px-40 border-b border-gray-600 bg-[#1a1a1a] `}
    //   >
    //     <nav className={`${flexBetween}   text-white`}>
    //       <div
    //         onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
    //         className="lg:hidden"
    //       >
    //         <img src={mobileMenu} alt="mobile menu" />
    //       </div>
    //       <div>
    //         <Link to="/">
    //           <img src={logo} alt="logo" />
    //         </Link>
    //       </div>
    //       <ul
    //         className={`${flexBetween} gap-6 uppercase lg:gap-10
    //         ${isMobileNavOpen ? "hidden" : "block"}

    //         `}
    //       >
    //         <li className="hover:text-orange-300">
    //           <NavLink to="/" exact>
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className="hover:text-orange-300">
    //           <NavLink to="/headphones">Headphones</NavLink>
    //         </li>
    //         <li className="hover:text-orange-300">
    //           <NavLink to="/speakers">Speakers</NavLink>
    //         </li>
    //         <li className="hover:text-orange-300">
    //           <NavLink to="/earphones">Earphones</NavLink>
    //         </li>
    //       </ul>
    //       <div className={`${flexBetween} relative`}>
    //         <span className="pointer">
    //           <img src={cart} alt="cart" />
    //         </span>
    //         <span className="absolute top-[-1] text-white bg-red-400 rounded-full left-5 p-1">
    //           {size}
    //         </span>
    //       </div>
    //     </nav>
    //   </header>
    // </>

    <>
      <header
        className={`top-0 py-10 px-8 sticky z-50 w-full md:px-16 lg:px-40 border-b border-gray-600 bg-[#1a1a1a] `}
      >
        <nav className={`${flexBetween}   text-white`}>
          <div
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="cursor-pointer lg:hidden"
          >
            <img src={mobileMenu} alt="mobile menu" />
          </div>
          <div>
            {/* onClick={() => window.scrollTo(0, 0)} */}
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul
            className={`hidden 
            
        
            lg:flex lg:items-center lg:uppercase lg:gap-10  `}
          >
            {/* ${flexBetween} gap-6 uppercase lg:gap-10 */}
            {/* ${isMobileNavOpen ? "block" : "hidden"} */}
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
          <div className={`${flexBetween} relative`}>
            <span className="pointer">
              <img src={cart} alt="cart" />
            </span>
            <span className="absolute top-[-1] text-white bg-red-400 rounded-full left-5 p-1">
              {size}
            </span>
          </div>
        </nav>
      </header>
      {/* MOBILE and TABLET MENU */}
      {isMobileNavOpen && (
        <div className="absolute none top-24 z-40 w-full h-fit pb-8 transition-all duration-300  bg-white md:h-[40%] lg:hidden rounded-b-lg">
          {/* <div className="absolute top-0 right-0 p-8">
            <img
              src={mobileMenu}
              alt="mobile menu"
              onClick={() => setIsMobileNavOpen(false)}
              className="cursor-pointer"
            />
          </div> */}
          {/* <ul className="mt-40 text-center text-white">
            <li className="my-4">
              <NavLink to="/" exact onClick={() => setIsMobileNavOpen(false)}>
                Home
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink
                to="/headphones"
                onClick={() => setIsMobileNavOpen(false)}
              >
                Headphones
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink to="/speakers" onClick={() => setIsMobileNavOpen(false)}>
                Speakers
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink
                to="/earphones"
                onClick={() => setIsMobileNavOpen(false)}
              >
                Earphones
              </NavLink>
            </li>
          </ul> */}
          <ul onClick={() => setIsMobileNavOpen(false)} className="mt-40 ">
            <Category />
          </ul>
        </div>
      )}
    </>
  );
}

export default Nav;
