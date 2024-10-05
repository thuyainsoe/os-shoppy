import { Outlet } from "react-router-dom";
import Navbar from "@/layout/components/navbar/Navbar";
import Footer from "@/layout/components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="default-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
