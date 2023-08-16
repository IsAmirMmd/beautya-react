import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo.svg";
import searchIcon from "../assets/images/search.svg";
import language from "../assets/images/language.svg";
import hamburgerMenu from "../assets/images/hamburger.svg";
import { useState } from "react";

const NavBar = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  return (
    <>
      <header className="w-full bg-background border-b border-neutral-300 fixed">
        <nav className="flex max-w-[1440px] mr-auto ml-auto items-end px-6 py-[24px]">
          <div className="order-3 mx-auto md:order-1 md:mx-0">
            <img
              src={logoImage}
              alt="logo"
              className="md:w-[120px] md:h-[60px] w-[80px] h-[40px]"
            />
          </div>
          <div
            className={`md:block 
            ${
              hamburgerClicked
                ? "block fixed top-[88px] left-0 bg-background w-full h-screen px-6 py-5"
                : "hidden"
            }
            ml-auto mr-auto order-2 justify-center`}
          >
            <ul
              className={`flex ${
                hamburgerClicked && "flex-col text-start"
              } md:gap-8 lg:gap-16 font-bold text-center`}
            >
              <li className="hover:text-pink-600 flex justify-between items-center md:border-b-0 border-b border-neutral-400 md:py-0 py-[16px]">
                <Link
                  className="md:text-16px text-12px block w-full"
                  to="/makeup"
                >
                  Women Make UP
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current md:rotate-90"
                >
                  <path d="M9.5 17L14.5 12L9.5 7V17Z" fill="" />
                </svg>
              </li>
              <li className="hover:text-pink-600 flex justify-between items-center md:border-b-0 border-b border-neutral-400 md:py-0 py-[16px]">
                <Link
                  className="md:text-16px text-12px block w-full"
                  to="/skincare"
                >
                  Women Skincare
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="fill-current md:rotate-90"
                >
                  <path d="M9.5 17L14.5 12L9.5 7V17Z" fill="" />
                </svg>
              </li>
              <li className="hover:text-pink-600 flex justify-between items-center md:border-b-0 border-b border-neutral-400 md:py-0 py-[16px]">
                <Link
                  className="md:text-16px text-12px block w-full"
                  to="/gifts"
                >
                  Gifts & Sets
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current md:rotate-90"
                >
                  <path d="M9.5 17L14.5 12L9.5 7V17Z" fill="" />
                </svg>
              </li>
              <li className="hover:text-pink-600 flex justify-between items-center md:border-b-0 border-b border-neutral-400 md:py-0 py-[16px]">
                <Link
                  className="md:text-16px text-12px block w-full"
                  to="/branches"
                >
                  Branches
                </Link>
              </li>
              <li className="hover:text-pink-600 flex justify-between items-center md:border-b-0 border-b border-neutral-400 md:py-0 py-[16px]">
                <Link
                  className="md:text-16px text-12px block w-full"
                  to="/ourbrand"
                >
                  Our Brand
                </Link>
              </li>
            </ul>
          </div>
          <div id="search" className="w-fit px-[8px] pr-0 order-2">
            <img
              src={searchIcon}
              alt="search icon"
              className="pr-[8px] md:border-r md:border-neutral-500 cursor-pointer"
            />
          </div>
          <div
            className="md:hidden block order-1 cursor-pointer"
            onClick={() => setHamburgerClicked(!hamburgerClicked)}
          >
            {hamburgerClicked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="#0C0C0C"
                />
              </svg>
            ) : (
              <img src={hamburgerMenu} alt="hamburger menu" />
            )}
          </div>
          <div
            id="language"
            className="flex items-center ml-[8px] cursor-pointer order-4"
          >
            <img src={language} alt="language" />
            <p className="md:text-16px text-12px ml-[4px]">
              US<span> (EN)</span>
            </p>
          </div>
        </nav>
        {/* {hamburgerClicked ? <OpenedMenu /> : ""} */}
      </header>
      <div className="md:h-[108px] h-[89px]"></div>
    </>
  );
};

export default NavBar;

const OpenedMenu = () => {
  return (
    <div className="fixed top-[88px] border-t border-neutral-300 px-6 py-5 bg-background w-full min-h-screen">
      <p>tes</p>
    </div>
  );
};
