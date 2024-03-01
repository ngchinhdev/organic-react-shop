import { ReactNode, useState } from "react";

import { BiPhoneCall } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { TbShoppingCart } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";

import logo from "../../assets/images/logo-header.png";
import NavOverlay from "./NavOverlay";
import { Link } from "react-router-dom";

type ItemType = {
  icon: ReactNode;
  heading: ReactNode;
  content: ReactNode;
};

function Item({ icon, heading, content }: ItemType) {
  return (
    <div className="flex items-center">
      <span className="pe-4 text-3xl">{icon}</span>
      <span>
        <b className="xl:text-xl">{heading}</b>
        <br />
        <span>{content}</span>
      </span>
    </div>
  );
}

function MiddleHeader() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  const handleShowMobileNav = () => {
    setShowMobileNav((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between bg-lime-700 p-4 text-white lg:p-8">
      <div
        className="cursor-pointer text-3xl lg:hidden"
        onClick={handleShowMobileNav}
      >
        <IoMenu />
      </div>
      {showMobileNav && (
        <NavOverlay onHandleShowMobileNav={handleShowMobileNav} />
      )}
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20 xl:w-24" />
        </Link>
      </div>
      <div className="hidden lg:flex lg:items-center lg:gap-10 xl:gap-16">
        <Item
          icon={<BiPhoneCall />}
          heading="Need help"
          content={<a href="tel:0916512235">0916512235</a>}
        />
        <div className="flex items-center overflow-hidden rounded-xl bg-white px-3 text-black">
          <span className="pe-3 text-2xl">
            <BiSearch />
          </span>
          <input
            type="text"
            placeholder="Search now..."
            className="w-96 border-none leading-10 outline-none"
          />
        </div>
        <Item
          icon={<TbTruckDelivery />}
          heading="Free Shipping"
          content="From $100 and up"
        />
      </div>
      <Item icon={<TbShoppingCart />} heading="My Cart" content="$00.0" />
    </div>
  );
}

export default MiddleHeader;
