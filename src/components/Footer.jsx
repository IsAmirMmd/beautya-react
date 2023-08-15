import { Link } from "react-router-dom";
import rabbit from "../assets/images/bunny vector.svg";
import lamp from "../assets/images/lamp.svg";
import plant from "../assets/images/plant.svg";
import leaf from "../assets/images/leaf.svg";

const Footer = () => {
  return (
    <footer>
      <section id="footer-badge" className="bg-pink-50 w-full">
        <div className="max-w-[1440px] md:flex gap-x-[24px] gap-y-[16px] grid grid-cols-2 lg:px-[108px] px-[20px] lg:py-[24px] py-[16px] justify-between text-pink-600 flex-wrap capitalize">
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
        <div className="max-w-[1440px] text-white px-[108px] flex justify-between">
          <div className="capitalize md:text-24px font-bold py-[80px]">
            <h4 className="mb-[16px]">How can we Help?</h4>
            <ul className="flex flex-col gap-[8px]">
              <li>
                <Link className="text-16px font-normal" to="">
                  Beautya Branches
                </Link>
              </li>
              <li>
                <Link className="text-16px font-normal" to="">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-16px font-normal" to="">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="text-16px font-normal" to="">
                  Our Brand
                </Link>
              </li>
              <li>
                <Link className="text-16px font-normal" to="">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="capitalize md:text-24px font-bold py-[80px]">
            <h4 className="mb-[16px]">Products</h4>
            <ul className="flex flex-col gap-[8px]">
              <li>
                <Link className="text-16px font-normal" to="">
                  Women Make up
                </Link>
              </li>
              <li>
                <Link className="text-16px font-normal" to="">
                  Women Skincare
                </Link>
              </li>
              <li>
                <Link className="text-16px font-normal" to="">
                  Gifts & Sets
                </Link>
              </li>
            </ul>
          </div>
          <div className="capitalize md:text-24px font-bold py-[80px] max-w-[50%]">
            <h4 className="mb-[16px]">keep in touch with beautya</h4>
            <p className="font-normal text-16px mb-[16px]">
              Join the Beautya newsletter and be first to hear about news,
              offers and skincare advice
            </p>
            <form className="">
              <section className="flex gap-4">
                <input
                  type="email"
                  className="bg-transparent border-b font-normal text-20px focus:border-0 focus:border-b outline-none border-neutral-400 w-full px-[16px] py-[8px]"
                  placeholder="Email Address"
                />
                <button
                  type="button"
                  className="px-[16px] py-[8px] font-normal text-16px border-neutral-400 border"
                >
                  Subscribe
                </button>
              </section>
              <section className="flex gap-4 items-start mt-[8px]">
                <input type="checkbox" className="mt-2" />
                <label className="text-14px font-normal">
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
        <div className="max-w-[1440px]"></div>
      </section>
      <section id="footer-copyright" className="bg-pink-950 w-full">
        <div className="max-w-[1440px]"></div>
      </section>
    </footer>
  );
};

export default Footer;
