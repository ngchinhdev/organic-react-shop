import { useEffect, useState } from "react";

import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";

function Header() {
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    function handleStickHeader() {
      if (window.scrollY > 260) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    }

    window.addEventListener("scroll", handleStickHeader);

    return () => window.removeEventListener("scroll", handleStickHeader);
  }, []);

  return (
    <>
      <div
        className={`${stickyHeader ? "block h-[80px] lg:h-[140px]" : "hidden"}`}
      ></div>
      <header
        className={`z-30 transition-all ${stickyHeader ? "animation-header fixed left-0 top-0 w-full" : ""}`}
      >
        {!stickyHeader && <TopHeader />}
        <MiddleHeader isSticky={stickyHeader} />
        <BottomHeader />
      </header>
    </>
  );
}

export default Header;
