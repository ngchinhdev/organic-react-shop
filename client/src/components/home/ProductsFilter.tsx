import { ReactNode, useRef, useState } from "react";

import { CiHeart } from "react-icons/ci";

import productImage from "../../assets/images/products1.jpg";
import { Link } from "react-router-dom";
import Button from "../../ui/button/Button";
import { BsCart } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import { VscArrowSwap } from "react-icons/vsc";

import Slider, { type Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

type TabProps = {
  tabIndex: number;
  activeTab: number;
  children: ReactNode;
  onClick: (tabIndex: number) => void;
};

function Tab({ tabIndex, activeTab, children, onClick }: TabProps) {
  return (
    <li
      onClick={() => onClick(tabIndex)}
      className={`active:opacity-1 cursor-pointer text-3xl font-medium text-lime-700 ${activeTab === tabIndex ? "opacity-1" : "opacity-45"}`}
    >
      {children}
    </li>
  );
}

type IconButtonProps = {
  children: ReactNode;
  hideMobile?: boolean;
  size?: "big" | "small";
};

function IconButton({
  children,
  size = "small",
  hideMobile = true,
}: IconButtonProps) {
  return (
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow-md ${size === "big" ? "text-2xl" : "text-lg"} ${!hideMobile ? "" : "hidden lg:flex"} transition-all hover:bg-lime-800 hover:text-white`}
    >
      {children}
    </span>
  );
}

function ProductsFilter() {
  const [activeTab, setActiveTab] = useState(0);

  let sliderRef = useRef<typeof Slider>(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings: Settings = {
    slidesToShow: 5,
    infinite: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.3,
        },
      },
    ],
  };

  return (
    <section className="mt-10 px-4 lg:px-8">
      <div className="flex items-center justify-between">
        <ul className="sm:no-scrollbar flex gap-8 overflow-x-scroll text-nowrap pb-4">
          <Tab
            activeTab={activeTab}
            tabIndex={0}
            key={0}
            onClick={setActiveTab}
          >
            Hot Products
          </Tab>
          <Tab
            activeTab={activeTab}
            tabIndex={2}
            key={2}
            onClick={setActiveTab}
          >
            New Products
          </Tab>
          <Tab
            activeTab={activeTab}
            tabIndex={1}
            key={1}
            onClick={setActiveTab}
          >
            Best Selling
          </Tab>
        </ul>
        <div className="hidden pb-4 text-5xl sm:flex">
          <span>
            <IoIosArrowDropleftCircle
              className="me-1 cursor-pointer fill-lime-700 [&_path]:pointer-events-none"
              onClick={previous}
            />
          </span>
          <span>
            <IoIosArrowDroprightCircle
              className="cursor-pointer fill-lime-700 [&_path]:pointer-events-none"
              onClick={next}
            />
          </span>
        </div>
      </div>
      <div className="mt-5 overflow-hidden">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          <div className="w-60 rounded-xl border border-gray-200 hover:border hover:border-lime-800 lg:[&:hover_.buttons]:translate-x-0 lg:[&:hover_.buttons]:opacity-100">
            <Link to="/">
              <div className="relative overflow-hidden">
                <img src={productImage} alt="" className="w-full rounded-xl" />
                <span className="absolute left-3 top-3 rounded-xl bg-lime-700 px-3 py-1 text-xs text-white">
                  Hot
                </span>
                <span className="absolute right-3 top-3 rounded-xl bg-[#d59000] px-3 py-1 text-xs text-white">
                  -38%
                </span>
                <div className="buttons absolute bottom-3 right-3 flex flex-col gap-4 transition duration-300 lg:translate-x-[120%] lg:opacity-0">
                  <IconButton size="big" hideMobile={false}>
                    <CiHeart />
                  </IconButton>
                  <IconButton>
                    <FaRegEye />
                  </IconButton>
                  <IconButton>
                    <VscArrowSwap />
                  </IconButton>
                  <IconButton>
                    <BsCart />
                  </IconButton>
                </div>
              </div>
              <div className="mt-3 pb-3 text-center">
                <h3 className="mb-1 text-xl">Lettuce</h3>
                <p>
                  <del className="pe-2 text-sm">$80.00</del>
                  <span>$50.00</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="w-60 rounded-xl border border-gray-200 hover:border hover:border-lime-800 lg:[&:hover_.buttons]:translate-x-0 lg:[&:hover_.buttons]:opacity-100">
            <Link to="/">
              <div className="relative overflow-hidden">
                <img src={productImage} alt="" className="w-full rounded-xl" />
                <span className="absolute left-3 top-3 rounded-xl bg-lime-700 px-3 py-1 text-xs text-white">
                  Hot
                </span>
                <span className="absolute right-3 top-3 rounded-xl bg-[#d59000] px-3 py-1 text-xs text-white">
                  -38%
                </span>
                <div className="buttons absolute bottom-3 right-3 flex flex-col gap-4 transition duration-300 lg:translate-x-[120%] lg:opacity-0">
                  <IconButton size="big" hideMobile={false}>
                    <CiHeart />
                  </IconButton>
                  <IconButton>
                    <FaRegEye />
                  </IconButton>
                  <IconButton>
                    <VscArrowSwap />
                  </IconButton>
                  <IconButton>
                    <BsCart />
                  </IconButton>
                </div>
              </div>
              <div className="mt-3 pb-3 text-center">
                <h3 className="mb-1 text-xl">Lettuce</h3>
                <p>
                  <del className="pe-2 text-sm">$80.00</del>
                  <span>$50.00</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="w-60 rounded-xl border border-gray-200 hover:border hover:border-lime-800 lg:[&:hover_.buttons]:translate-x-0 lg:[&:hover_.buttons]:opacity-100">
            <Link to="/">
              <div className="relative overflow-hidden">
                <img src={productImage} alt="" className="w-full rounded-xl" />
                <span className="absolute left-3 top-3 rounded-xl bg-lime-700 px-3 py-1 text-xs text-white">
                  Hot
                </span>
                <span className="absolute right-3 top-3 rounded-xl bg-[#d59000] px-3 py-1 text-xs text-white">
                  -38%
                </span>
                <div className="buttons absolute bottom-3 right-3 flex flex-col gap-4 transition duration-300 lg:translate-x-[120%] lg:opacity-0">
                  <IconButton size="big" hideMobile={false}>
                    <CiHeart />
                  </IconButton>
                  <IconButton>
                    <FaRegEye />
                  </IconButton>
                  <IconButton>
                    <VscArrowSwap />
                  </IconButton>
                  <IconButton>
                    <BsCart />
                  </IconButton>
                </div>
              </div>
              <div className="mt-3 pb-3 text-center">
                <h3 className="mb-1 text-xl">Lettuce</h3>
                <p>
                  <del className="pe-2 text-sm">$80.00</del>
                  <span>$50.00</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="w-60 rounded-xl border border-gray-200 hover:border hover:border-lime-800 lg:[&:hover_.buttons]:translate-x-0 lg:[&:hover_.buttons]:opacity-100">
            <Link to="/">
              <div className="relative overflow-hidden">
                <img src={productImage} alt="" className="w-full rounded-xl" />
                <span className="absolute left-3 top-3 rounded-xl bg-lime-700 px-3 py-1 text-xs text-white">
                  Hot
                </span>
                <span className="absolute right-3 top-3 rounded-xl bg-[#d59000] px-3 py-1 text-xs text-white">
                  -38%
                </span>
                <div className="buttons absolute bottom-3 right-3 flex flex-col gap-4 transition duration-300 lg:translate-x-[120%] lg:opacity-0">
                  <IconButton size="big" hideMobile={false}>
                    <CiHeart />
                  </IconButton>
                  <IconButton>
                    <FaRegEye />
                  </IconButton>
                  <IconButton>
                    <VscArrowSwap />
                  </IconButton>
                  <IconButton>
                    <BsCart />
                  </IconButton>
                </div>
              </div>
              <div className="mt-3 pb-3 text-center">
                <h3 className="mb-1 text-xl">Lettuce</h3>
                <p>
                  <del className="pe-2 text-sm">$80.00</del>
                  <span>$50.00</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="w-60 rounded-xl border border-gray-200 hover:border hover:border-lime-800 lg:[&:hover_.buttons]:translate-x-0 lg:[&:hover_.buttons]:opacity-100">
            <Link to="/">
              <div className="relative overflow-hidden">
                <img src={productImage} alt="" className="w-full rounded-xl" />
                <span className="absolute left-3 top-3 rounded-xl bg-lime-700 px-3 py-1 text-xs text-white">
                  Hot
                </span>
                <span className="absolute right-3 top-3 rounded-xl bg-[#d59000] px-3 py-1 text-xs text-white">
                  -38%
                </span>
                <div className="buttons absolute bottom-3 right-3 flex flex-col gap-4 transition duration-300 lg:translate-x-[120%] lg:opacity-0">
                  <IconButton size="big" hideMobile={false}>
                    <CiHeart />
                  </IconButton>
                  <IconButton>
                    <FaRegEye />
                  </IconButton>
                  <IconButton>
                    <VscArrowSwap />
                  </IconButton>
                  <IconButton>
                    <BsCart />
                  </IconButton>
                </div>
              </div>
              <div className="mt-3 pb-3 text-center">
                <h3 className="mb-1 text-xl">Lettuce</h3>
                <p>
                  <del className="pe-2 text-sm">$80.00</del>
                  <span>$50.00</span>
                </p>
              </div>
            </Link>
          </div>
          <div className="w-60 rounded-xl border border-gray-200 hover:border hover:border-lime-800 lg:[&:hover_.buttons]:translate-x-0 lg:[&:hover_.buttons]:opacity-100">
            <Link to="/">
              <div className="relative overflow-hidden">
                <img src={productImage} alt="" className="w-full rounded-xl" />
                <span className="absolute left-3 top-3 rounded-xl bg-lime-700 px-3 py-1 text-xs text-white">
                  Hot
                </span>
                <span className="absolute right-3 top-3 rounded-xl bg-[#d59000] px-3 py-1 text-xs text-white">
                  -38%
                </span>
                <div className="buttons absolute bottom-3 right-3 flex flex-col gap-4 transition duration-300 lg:translate-x-[120%] lg:opacity-0">
                  <IconButton size="big" hideMobile={false}>
                    <CiHeart />
                  </IconButton>
                  <IconButton>
                    <FaRegEye />
                  </IconButton>
                  <IconButton>
                    <VscArrowSwap />
                  </IconButton>
                  <IconButton>
                    <BsCart />
                  </IconButton>
                </div>
              </div>
              <div className="mt-3 pb-3 text-center">
                <h3 className="mb-1 text-xl">Lettuce</h3>
                <p>
                  <del className="pe-2 text-sm">$80.00</del>
                  <span>$50.00</span>
                </p>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
      <div className="mt-8 text-center">
        <Button type="secondary" to="/shop">
          Shop now
        </Button>
      </div>
    </section>
  );
}

export default ProductsFilter;
