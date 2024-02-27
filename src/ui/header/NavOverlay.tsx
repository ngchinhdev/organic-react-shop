import { createPortal } from "react-dom";
import NavHeader from "../nav/NavHeader";

function NavOverlay() {
  return createPortal(
    <div className="absolute inset-0 h-full w-full">
      <div className="absolute h-full w-full bg-black opacity-15"></div>
      <NavHeader isVertical={true} />
    </div>,
    document.body,
  );
}

export default NavOverlay;
