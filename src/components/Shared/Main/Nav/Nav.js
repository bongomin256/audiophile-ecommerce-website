import { useContext, useState, useEffect } from "react";
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

  //adding class to the body to prevent scrolling when the modal cart modal is active
  if (showCart || isMobileNavOpen) {
    document.body.classList.add("active__modal");
  } else {
    document.body.classList.remove("active__modal");
  }

  // if (isMobileNavOpen) {
  //   document.body.classList.add("active__modal");
  // } else {
  //   document.body.classList.remove("active__modal");
  // }

  return (
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
            </Link>
          </div>
        </nav>

        {isMobileNavOpen && (
          <div className="absolute left-0 w-full ">
            <div
              className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-[#00000055] z-[1000] lg:none"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            ></div>
            <ul
              // onClick={() => setIsMobileNavOpen(false)}
              // sticky overflow-y-auto
              className="fixed rounded-b-lg  w-full mt-6   transition-transform duration-500 ease-in-out transform translate-y-0 bg-white z-[1999] overflow-y-scroll"
            >
              {/* <CategoryNavLink
                isMobileNavOpen={isMobileNavOpen}
                setIsMobileNavOpen={setIsMobileNavOpen}
              /> */}

              <div className="py-10 md:py-14">
                <CategoryNavLink
                  isMobileNavOpen={isMobileNavOpen}
                  setIsMobileNavOpen={setIsMobileNavOpen}
                />
              </div>
            </ul>
          </div>
        )}
      </header>

      {showCart && (
        <>
          {/* <div
            onClick={() => setShowCart(!showCart)}
            className="fixed top-0 bottom-0 left-0 right-0 w-full bg-[#00000055] "
          ></div> */}
          <ShoppingCart
            showCart={showCart}
            setShowCart={setShowCart}
            cart={cartSize}
          />
        </>
      )}
    </>
  );
}

export default Nav;
