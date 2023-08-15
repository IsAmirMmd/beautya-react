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
            <img className="md:w-[40px] w-[28px] aspect-square" src={rabbit} alt="" />
            <p className="md:text-16px text-12px">No tests on animals</p>
          </div>
          <div className="flex items-center gap-[16px] ">
            <img className="md:w-[40px] w-[28px] aspect-square" src={leaf} alt="" />
            <p className="md:text-16px text-12px">No animal-derived ingredients</p>
          </div>
          <div className="flex items-center gap-[16px] ">
            <img className="md:w-[40px] w-[28px] aspect-square" src={plant} alt="" />
            <p className="md:text-16px text-12px">No gluten, or gluten byproducts</p>
          </div>
          <div className="flex items-center gap-[16px] ">
            <img className="md:w-[40px] w-[28px] aspect-square" src={lamp} alt="" />
            <p className="md:text-16px text-12px">Recyclable packaging</p>
          </div>
        </div>
      </section>
      <section id="footer-main" className="bg-pink-800 w-full">
        <div className="max-w-[1440px]"></div>
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
