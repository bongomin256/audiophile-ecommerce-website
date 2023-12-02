import { useContext, useState } from "react";
import cartIcon from "../../../../assets/shared/desktop/icon-cart.svg";
import logo from "../../../../assets/shared/desktop/logo.svg";
import mobileMenu from "../../../../assets/shared/tablet/icon-hamburger.svg";

import { NavLink, Link } from "react-router-dom";
import Category from "../../../Category/CategoryHome";
import ShoppingCart from "../../../Cart/ShoppingCart";
import CheckoutMain from "../../../../pages/checkoutPage/CheckoutMain";
import CategoryNavLink from "./CategoryNavLink";
// import { CartContext } from "../../../../context/CartContext";

function Nav({ cartSize }) {
  // const { cartItem } = useContext(CartContext);
  // console.log(cartItem);
  // console.og(cartItem.length);

  const flexBetween = "flex items-center justify-between";
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // console.log(cartSize.length);

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

          <div
            // className={`${flexBetween} relative cursor-pointer`}
            onClick={() => setShowCart(!showCart)}
          >
            <Link
              className={`${flexBetween} relative cursor-pointer`}
              // to="/cart"
            >
              <span className="pointer">
                <img src={cartIcon} alt="cart" />
              </span>
              {cartSize.length > 0 && (
                <span className="absolute top-[-1] text-white bg-red-400 rounded-full left-5 p-1">
                  {cartSize.length}
                </span>
              )}
              {/* {cartItem.length > 0 && (
              <span className="absolute top-[-1] text-white bg-red-400 rounded-full left-5 p-1">
                {cartItem.length}
              </span>
            )} */}
            </Link>
          </div>
        </nav>
        {/* {isMobileNavOpen && (
          <div
            className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-[#00000055] z-[1000]"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          ></div>
        )} */}
        {isMobileNavOpen && (
          <div className="absolute left-0 w-full ">
            <div
              className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-[#00000055] z-[1000] lg:none"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            ></div>
            <ul
              // onClick={() => setIsMobileNavOpen(false)}
              className="sticky rounded-b-lg  w-full mt-6  overflow-y-auto transition-transform duration-500 ease-in-out transform translate-y-0 bg-white z-[1999]"
            >
              <div className="py-10 overflow-y-scroll md:py-14">
                <CategoryNavLink isMobileNavOpen={isMobileNavOpen} />
              </div>
            </ul>
          </div>
        )}
      </header>
      {/* MOBILE and TABLET MENU */}
      {/* {isMobileNavOpen && (
        <div className="absolute none top-24 z-40 w-full h-fit pb-8 transition-all duration-300  bg-[#00000055] md:h-[40%] lg:hidden rounded-b-lg"> */}
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
      {/* <ul onClick={() => setIsMobileNavOpen(false)} className="mt-40">
            <Category />
          </ul>
        </div>
      )} */}
      {showCart && (
        <ShoppingCart
          showCart={showCart}
          setShowCart={setShowCart}
          cart={cartSize}
        />
      )}
    </>
  );
}

export default Nav;
