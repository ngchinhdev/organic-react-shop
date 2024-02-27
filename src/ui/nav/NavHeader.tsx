import { NavLink } from "react-router-dom";

import { LiaTimesSolid } from "react-icons/lia";

type NavItemProps = {
  to: string;
  hasBorder: boolean;
  label: string;
  isVertical?: boolean;
};

type NavHeaderProps = {
  isVertical?: boolean;
};

function NavItem({ to, hasBorder, label, isVertical }: NavItemProps) {
  return (
    <li
      className={`px-7 font-medium text-[#a3a69d] transition-all  ${hasBorder ? "border-[#546b39]" : ""} ${isVertical ? "border-b border-opacity-15 py-3 text-xl font-normal text-black" : "border-r-2 hover:text-white [&>a.active]:text-white"}`}
    >
      <NavLink to={to} className="block w-full">
        {label}
      </NavLink>
    </li>
  );
}

function NavHeader({ isVertical }: NavHeaderProps) {
  return (
    <ul
      className={`${isVertical ? "fixed top-0 z-50 h-full w-[280px] flex-col bg-white pt-6" : "flex-row items-center"}  nav-control flex `}
    >
      {isVertical && (
        <span className="mb-4 me-7 ms-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-lime-700 leading-10 text-white">
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
    </ul>
  );
}

export default NavHeader;
