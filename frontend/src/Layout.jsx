import React from "react";
import Header from "./Components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import BottomNav from "./Components/BottomNav/BottomNav";

function Layout() {
  const location = useLocation();
  const shouldRenderHeader =
    location.pathname !== "/Login" && location.pathname !== "/Register";

  return (
    <>
      {shouldRenderHeader && <Header />}
      <Outlet />
      {shouldRenderHeader && <BottomNav />}
    </>
  );
}

export default Layout;
