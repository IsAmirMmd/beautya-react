import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo.svg";
import searchIcon from "../assets/images/search.svg";
import language from "../assets/images/language.svg";

const NavBar = () => {
  return (
    <header className="w-full bg-background">
      <nav className="flex max-w-[1440px] mr-auto ml-auto items-end px-6 py-[24px]">
        <div>
          <img src={logoImage} alt="logo" />
        </div>
        <div className="ml-auto mr-auto">
          <ul className="flex gap-16 font-bold">
            <li>
              <Link className="text-16px" to="/makeup">
                Women Make UP
              </Link>
            </li>
            <li>
              <Link className="text-16px" to="/skincare">
                Women Skincare
              </Link>
            </li>
            <li>
              <Link className="text-16px" to="/gifts">
                Gifts & Sets
              </Link>
            </li>
            <li>
              <Link className="text-16px" to="/branches">
                Branches
              </Link>
            </li>
            <li>
              <Link className="text-16px" to="/ourbrand">
                Our Brand
              </Link>
            </li>
          </ul>
        </div>
        <div id="search" className="w-fit px-[8px] pr-0">
          <img
            src={searchIcon}
            alt="search icon"
            className="pr-[8px] border-r-[1px] border-neutral-500 cursor-pointer"
          />
        </div>
        <div
          id="language"
          className="flex items-center ml-[8px] cursor-pointer"
        >
          <img src={language} alt="language" />
          <p className="text-16px ml-[4px]">
            US<span> (EN)</span>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
