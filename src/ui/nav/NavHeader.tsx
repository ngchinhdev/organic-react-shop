import { NavLink } from "react-router-dom";

import { LiaTimesSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { NavOverlayProps } from "../header/NavOverlay";

type NavItemProps = {
  to: string;
  hasBorder: boolean;
  label: string;
  isVertical?: boolean;
};

type NavHeaderProps = {
  isVertical?: boolean;
} & NavOverlayProps;

function NavItem({ to, hasBorder, label, isVertical }: NavItemProps) {
  return (
    <li
      className={`border-[#546b39] px-7 font-medium text-[#a3a69d] transition-all ${isVertical ? "py-3 text-xl font-normal text-black" : "hover:text-white [&>a.active]:text-white"} ${hasBorder ? (isVertical ? "border-b border-opacity-15 py-3 text-xl font-normal text-black" : "border-r-2 ") : ""}`}
    >
      <NavLink to={to} className="block w-full">
        {label}
      </NavLink>
    </li>
  );
}

function NavHeader({ isVertical, onHandleShowMobileNav }: NavHeaderProps) {
  return (
    <ul
      className={`${isVertical ? "fixed bottom-0 top-0 inline-block h-dvh w-[280px] flex-col bg-white pt-6 transition-all lg:hidden" : "flex-row items-center"} nav-control z-50 flex`}
    >
      {isVertical && (
        <span
          className="mb-4 me-7 ms-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-lime-700 leading-10 text-white"
          onClick={onHandleShowMobileNav}
        >
          <LiaTimesSolid size={24} />
        </span>
      )}
      <NavItem to="/" hasBorder={true} label="Home" isVertical={isVertical} />
      <NavItem
        to="/shop"
        hasBorder={true}
        label="Shop"
        isVertical={isVertical}
      />
      <NavItem
        to="/products"
        hasBorder={true}
        label="Products"
        isVertical={isVertical}
      />
      <NavItem
        to="/blogs"
        hasBorder={true}
        label="Blogs"
        isVertical={isVertical}
      />
      <NavItem
        to="/contact"
        hasBorder={false}
        label="Contact"
        isVertical={isVertical}
      />
      <div className="absolute bottom-0 w-full px-10 py-20 lg:hidden">
        <button className="mx-auto flex w-full items-center justify-center rounded-2xl border border-gray-300 py-3">
          <span className="pe-3 text-xl">
            <CiUser />
          </span>
          <span>Login / Register</span>
        </button>
      </div>
    </ul>
  );
}

export default NavHeader;
