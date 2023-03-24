import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io";

function Nav() {
  const flexBetween = "flex items-center justify-between";
  return (
    <>
      <header className={`${flexBetween} bg-black text-white py-10 px-8`}>
        <div className="mobile-nav">
          <GiHamburgerMenu />
        </div>
        <div>
          <h1 className="text-3xl">audiophile</h1>
        </div>
        <AiOutlineShoppingCart />
        <nav className="hidden ">
          <ul className={`${flexBetween} gap-6`}>
            <li>Home</li>
            <li>Headphones</li>
            <li>Speakers</li>
            <li>Ear Phones</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
