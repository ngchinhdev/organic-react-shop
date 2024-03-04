import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";

function AppLayout() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScrollProgress() {
      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollValue = Math.round((pos * 100) / calcHeight);
      console.log(document.documentElement.offsetHeight);
    }

    window.addEventListener("scroll", handleScrollProgress);

    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
