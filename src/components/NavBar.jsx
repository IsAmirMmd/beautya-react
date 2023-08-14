import { Link } from "react-router-dom";
import logoImage from "../assets/images/logo.svg";
import searchIcon from "../assets/images/search.svg";
import language from "../assets/images/language.svg";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={logoImage} alt="logo" />
        </div>
        <div>
          <ul>
            <li>
              <Link to="/makeup">Women Make UP</Link>
            </li>
            <li>
              <Link to="/skincare">Women Skincare</Link>
            </li>
            <li>
              <Link to="/gifts">Gifs & Sets</Link>
            </li>
            <li>
              <Link to="/branches">Branches</Link>
            </li>
            <li>
              <Link to="/ourbrand">Our Brand</Link>
            </li>
          </ul>
        </div>
        <div id="search">
          <img src={searchIcon} alt="search icon" />
        </div>
        <div id="language">
          <img src={language} alt="language" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
