import { FaArrowRightLong } from "react-icons/fa6";

import image from "../../assets/images/lemon-banner.png";
import Button from "../../ui/button/Button";

function BannerTop() {
  return (
    <section className="relative">
      <img src={image} alt="Top" className="h-[600px] w-full object-cover" />
      <div className="absolute top-1/4 p-12">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-6xl md:w-2/3 lg:text-7xl">
          Fresh & Healthy Organic Food
        </h1>
        <p className="mb-6 border-s-2 border-lime-800 ps-3 text-2xl text-slate-600">
          SALE UP TO <span className="font-semibold text-white">48%</span> OFF
        </p>
        <Button type="primary" to="/shop">
          Shop now <FaArrowRightLong />
        </Button>
      </div>
    </section>
  );
}

export default BannerTop;
