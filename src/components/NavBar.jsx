import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo.svg";
import searchIcon from "../assets/images/search.svg";
import language from "../assets/images/language.svg";
import hamburgerMenu from "../assets/images/hamburger.svg";

const NavBar = () => {
  return (
    <header className="w-full bg-background border-b border-neutral-300 ">
      <nav className="flex max-w-[1440px] mr-auto ml-auto items-end px-6 py-[24px]">
        <div className="order-3 mx-auto md:order-1 md:mx-0">
          <img
            src={logoImage}
            alt="logo"
            className="md:w-[120px] md:h-[60px] w-[80px] h-[40px]"
          />
        </div>
        <div className="md:block hidden ml-auto mr-auto order-2">
          <ul className="flex gap-16 font-bold">
            <li>
              <Link className="md:text-16px text-12px" to="/makeup">
                Women Make UP
              </Link>
            </li>
            <li>
              <Link className="md:text-16px text-12px" to="/skincare">
                Women Skincare
              </Link>
            </li>
            <li>
              <Link className="md:text-16px text-12px" to="/gifts">
                Gifts & Sets
              </Link>
            </li>
            <li>
              <Link className="md:text-16px text-12px" to="/branches">
                Branches
              </Link>
            </li>
            <li>
              <Link className="md:text-16px text-12px" to="/ourbrand">
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
        <div className="md:hidden block order-1">
          <img src={hamburgerMenu} alt="hamburger menu" />
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
    </header>
  );
};

export default NavBar;
