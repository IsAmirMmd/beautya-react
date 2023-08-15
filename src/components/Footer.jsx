import { Link } from "react-router-dom";
import rabbit from "../assets/images/bunny vector.svg";
import lamp from "../assets/images/lamp.svg";
import plant from "../assets/images/plant.svg";
import leaf from "../assets/images/leaf.svg";
import tiktok from "../assets/images/_TikTok.svg";
import instagram from "../assets/images/_Instagram.svg";
import twitter from "../assets/images/_Twitter.svg";
import facebook from "../assets/images/_Facebook.svg";
import pintrest from "../assets/images/_Pinterest.svg";
import reddit from "../assets/images/_Reddit.svg";
import location from "../assets/images/location.svg";
import call from "../assets/images/call.svg";

const Footer = () => {
  return (
    <footer>
      <section id="footer-badge" className="bg-pink-50 w-full">
        <div className="max-w-[1440px] md:flex gap-x-[24px] mx-auto gap-y-[16px] grid grid-cols-2 lg:px-[108px] px-[20px] lg:py-[24px] py-[16px] justify-between text-pink-600 flex-wrap capitalize">
          <div className="flex items-center gap-[16px]">
            <img
              className="md:w-[40px] w-[28px] aspect-square"
              src={rabbit}
              alt=""
            />
            <p className="md:text-16px text-12px">No tests on animals</p>
          </div>
          <div className="flex items-center gap-[16px] ">
            <img
              className="md:w-[40px] w-[28px] aspect-square"
              src={leaf}
              alt=""
            />
            <p className="md:text-16px text-12px">
              No animal-derived ingredients
            </p>
          </div>
          <div className="flex items-center gap-[16px] ">
            <img
              className="md:w-[40px] w-[28px] aspect-square"
              src={plant}
              alt=""
            />
            <p className="md:text-16px text-12px">
              No gluten, or gluten byproducts
            </p>
          </div>
          <div className="flex items-center gap-[16px] ">
            <img
              className="md:w-[40px] w-[28px] aspect-square"
              src={lamp}
              alt=""
            />
            <p className="md:text-16px text-12px">Recyclable packaging</p>
          </div>
        </div>
      </section>
      <section id="footer-main" className="bg-pink-800 w-full">
        <div className="max-w-[1440px] text-white md:px-[108px] mx-auto px-[20px] flex flex-wrap justify-between md:flex-row flex-col py-[24px]  md:py-[80px]">
          <div className="capitalize md:text-24px text-16px font-bold">
            <h4 className="md:mb-[16px] mb-[12px]">How can we Help?</h4>
            <ul className="flex flex-col gap-[8px]">
              <li>
                <Link className="md:text-16px text-14px font-normal" to="">
                  Beautya Branches
                </Link>
              </li>
              <li>
                <Link className="md:text-16px text-14px font-normal" to="">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="md:text-16px text-14px font-normal" to="">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="md:text-16px text-14px font-normal" to="">
                  Our Brand
                </Link>
              </li>
              <li>
                <Link className="md:text-16px text-14px font-normal" to="">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="capitalize md:text-24px text-16px font-bold md:mt-0 mt-[24px]">
            <h4 className="md:mb-[16px] mb-[12px]">Products</h4>
            <ul className="flex flex-col gap-[8px]">
              <li>
                <Link className="md:text-16px text-14px font-normal" to="">
                  Women Make up
                </Link>
              </li>
              <li>
                <Link className="md:text-16px text-14px font-normal" to="">
                  Women Skincare
                </Link>
              </li>
              <li>
                <Link className="md:text-16px text-14px font-normal" to="">
                  Gifts & Sets
                </Link>
              </li>
            </ul>
          </div>
          <div className="capitalize lg:text-24px text-16px font-bold lg:max-w-[50%] lg:mt-0 mt-[24px] lg:block hidden">
            <h4 className="md:mb-[16px] mb-[12px]">
              keep in touch with beautya
            </h4>
            <p className="font-normal md:text-16px text-14px mb-[16px]">
              Join the Beautya newsletter and be first to hear about news,
              offers and skincare advice
            </p>
            <form className="">
              <section className="flex gap-4">
                <input
                  type="email"
                  className="bg-transparent border-b font-normal md:text-20px text-14px focus:border-0 focus:border-b outline-none border-neutral-400 w-full px-[16px] py-[8px]"
                  placeholder="Email Address"
                />
                <button
                  type="button"
                  className="px-[16px] py-[8px] font-normal md:text-16px text-12px border-neutral-400 border"
                >
                  Subscribe
                </button>
              </section>
              <section className="flex gap-4 items-start mt-[8px]">
                <input type="checkbox" className="mt-2" />
                <label className="md:text-14px font-normal text-12px">
                  By submitting your email, you agree to receive advertising
                  emails from Beautya. Please review our Privacy Policy, which
                  includes our Financial Incentive Notice for CA residents.
                </label>
              </section>
            </form>
          </div>
        </div>
      </section>
      <section id="footer-contatc" className="bg-pink-900 w-full">
        <div className="max-w-[1440px] gap-[20px] flex md:flex-row flex-col justify-between mx-auto md:px-[108px] px-[20px] py-[16px]">
          <div
            id="place-details"
            className="flex gap-[20px] md:gap-0 md:flex-row flex-col"
          >
            <p className="flex items-center text-white gap-[8px] md:pr-[16px] md:border-r md:border-pink-300 md:mr-[16px]">
              <img src={location} alt="location" />
              <span className="md:text-16px text-14px font-normal">
                Dr. Richardson, California
              </span>
            </p>
            <p className="flex items-center text-white gap-[8px]">
              <img src={call} alt="call" />
              <span className="md:text-16px text-14px font-normal">
                1-802-526-2463
              </span>
            </p>
          </div>
          <div id="socail-icon" className="flex gap-[24px] justify-between">
            <Link to="/instagram">
              <img src={instagram} alt="instagram" />
            </Link>
            <Link to="/facebook">
              <img src={facebook} alt="facebook" />
            </Link>
            <Link to="/twitter">
              <img src={twitter} alt="twitter" />
            </Link>
            <Link to="/pintrest">
              <img src={pintrest} alt="pintrest" />
            </Link>
            <Link to="/reddit">
              <img src={reddit} alt="reddit" />
            </Link>
            <Link to="/tiktok">
              <img src={tiktok} alt="tiktok" />
            </Link>
          </div>
        </div>
      </section>
      <section id="footer-copyright" className="bg-pink-950 w-full">
        <div className="max-w-[1440px]"></div>
      </section>
    </footer>
  );
};

export default Footer;
