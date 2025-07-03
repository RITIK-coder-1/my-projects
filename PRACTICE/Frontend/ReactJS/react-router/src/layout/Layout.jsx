import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";
import "../App.css";

function Layout() {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
