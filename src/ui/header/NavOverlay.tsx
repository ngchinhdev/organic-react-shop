import { createPortal } from "react-dom";

import NavHeader from "../nav/NavHeader";

export type NavOverlayProps = {
  onHandleShowMobileNav?: () => void;
};

function NavOverlay({ onHandleShowMobileNav }: NavOverlayProps) {
  return createPortal(
    <>
      <div
        className="absolute inset-0 z-40 w-full bg-black opacity-15 lg:hidden"
        onClick={onHandleShowMobileNav}
      ></div>
      <NavHeader
        isVertical={true}
        onHandleShowMobileNav={onHandleShowMobileNav}
      />
    </>,
    document.body,
  );
}

export default NavOverlay;
