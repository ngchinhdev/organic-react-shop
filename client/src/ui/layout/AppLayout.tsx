import { Outlet } from "react-router-dom";

import Header from "../header";
import Footer from "../footer/Footer";
import CircleProgress from "./CircleProgress";

function AppLayout() {
  return (
    <>
      <CircleProgress />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
