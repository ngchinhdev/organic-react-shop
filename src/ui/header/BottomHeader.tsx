import { Link } from "react-router-dom";
import { useState } from "react";

import { IoMenu } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

import NavHeader from "../nav/NavHeader";

function BottomHeader() {
  const [showCategory, setShowCategory] = useState(false);

  const handleShowCategory = () => {
    setShowCategory((prev) => !prev);
  };

  return (
    <nav className="hidden items-center justify-between bg-lime-900 px-8 py-3 text-xl text-white lg:flex ">
      <div
        className="relative flex cursor-pointer items-center"
        onClick={handleShowCategory}
      >
        <span className="pe-4 text-2xl">
          <IoMenu />
        </span>
        <span className="flex items-center">
          All Categories
          <span className="ps-2">
            <IoIosArrowUp
              className={`${showCategory ? "rotate-180" : ""} transition-all`}
            />
          </span>
        </span>
        {showCategory && (
          <ul className="absolute top-12 w-[110%] cursor-default rounded-md bg-white text-black shadow-lg">
            <li className="px-6">
              <Link to={"/category/:cateName"} className="block py-3">
                Vegetables
              </Link>
              <Link to={"/category/:cateName"} className="block py-3">
                Fruits
              </Link>
              <Link to={"/category/:cateName"} className="block py-3">
                Meats
              </Link>
              <Link to={"/category/:cateName"} className="block py-3">
                Drinks
              </Link>
            </li>
          </ul>
        )}
      </div>
      <NavHeader isVertical={false} />
      <div className="rounded-xl bg-[#d59000] px-4 py-1">Track your order</div>
    </nav>
  );
}

export default BottomHeader;
