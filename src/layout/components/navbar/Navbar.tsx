import React from "react";
import { NavLink } from "react-router-dom";
import shopLogo from "@/assets/images/home/shoplogo.png";
import searchLogo from "@/assets/images/common/searchlogo.svg";
import heartLogo from "@/assets/images/common/heartlogo.svg";
import cartLogo from "@/assets/images/common/cartlogo.svg";

const Navbar: React.FC = () => {
  return (
    <div>
      {/* top nav section */}
      <div className="bg-skyblue default-container h-[45px] flex w-full items-center justify-between text-white">
        <p className="text-[16px] font-[500]">Welcome to our OsShoppy shop!</p>
        <ul className="flex items-center gap-[25px]">
          <NavLink to="/" className="text-[16px] font-[500]">
            Home
          </NavLink>
          <NavLink to="/new-arrivals" className="text-[16px] font-[500]">
            New Arrivals
          </NavLink>
          <NavLink to="/about-us" className="text-[16px] font-[500]">
            About Us
          </NavLink>
          <NavLink to="/contact-us" className="text-[16px] font-[500]">
            Contact Us
          </NavLink>
        </ul>
      </div>
      {/* bottom nav section */}
      <div className="w-full flex items-center justify-between h-[75px] default-container s-box-shadow">
        <img
          className="w-[147px] h-[45px]"
          src={shopLogo}
          alt="OsShoppy Logo"
        />
        <div className="w-[500px] h-[45px] bg-lightgray rounded-[5px] align-center px-[20px] relative">
          <input
            className="w-full bg-transparent focus:outline-none focus:border-none"
            type="text"
            placeholder="What are you looking for"
          />
          <img
            className="w-[20px] h-[20px] absolute top-1/2 translate-y-[-50%] right-[20px]"
            src={searchLogo}
            alt=""
          />
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="relative">
            <img className="w-[30px] h-[30px]" src={heartLogo} alt="" />
            <span
              className="w-[20px] h-[20px] text-white text-[14px] bg-violet
             align-center rounded-[50%] absolute top-[-8px] right-[-8px]"
            >
              2
            </span>
          </div>
          <div className="relative">
            <img className="w-[30px] h-[30px]" src={cartLogo} alt="" />
            <span
              className="w-[20px] h-[20px] text-white text-[14px] bg-violet
             align-center rounded-[50%] absolute top-[-8px] right-[-8px]"
            >
              2
            </span>
          </div>
          <button className="w-[100px] h-[38px] bg-violet align-center text-white font-[500] rounded-[5px]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
