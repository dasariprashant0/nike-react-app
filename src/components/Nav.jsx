import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger, close } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Nike Logo Image"
            width={130}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden pt-[3px]">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign In</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        <div className="hidden max-lg:block ">
          <img
            src={toggle ? close : hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            className="inver"
            onClick={() => setToggle((toggle) => !toggle)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } bg-black-gradient p-6 absolute top-15 right-0 mx-4 my-2 min-w-[170px] min-h-[200px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-center items-center flex-1 flex-col">
              {navLinks.map((item, index) => (
                <li
                  key={item.label}
                  className={`font-poppins font-medium cursor-pointer text-[16px] p-1.5 text-center ${
                    active === item.label ? "bg-gray-600 rounded-lg w-full" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-2"}`}
                  onClick={() => setActive(item.label)}
                >
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
