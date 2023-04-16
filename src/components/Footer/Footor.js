import React from "react";
import fbIcon from "../../assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import logo from "../../assets/shared/desktop/logo.svg";

function Footor() {
  return (
    <footer className="flex flex-col items-center justify-center gap-10 px-10 py-10 bg-black mt-28 md:items-start md:px-16 lg:px-28">
      <section className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:w-full">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="flex flex-col justify-center gap-4 font-semibold tracking-widest text-center uppercase cursor-pointer text-gray-30 md:flex-row">
          <li className="hover:text-orange-300 ">home</li>
          <li className="hover:text-orange-300">headphones</li>
          <li className="hover:text-orange-300">speakers</li>
          <li className="hover:text-orange-300">earphones</li>
        </ul>
      </section>
      <section>
        <div className="mb-[2.5rem] text-center md:text-start lg:w-1/2">
          <p className="lg:w-full lg:text-start">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="md:flex md:justify-between lg:justify-between">
          <p className="mb-[2.5rem] text-center">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex justify-center gap-4 text-center cursor-pointer social-icons">
            <i>
              <img src={fbIcon} alt="facebook icon" />
            </i>

            <i>
              <img src={twitterIcon} alt="twitter icon" />
            </i>
            <i>
              <img src={instagramIcon} alt="instagram icon" />
            </i>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footor;
