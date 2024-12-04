import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import shopLogo from "@/assets/images/home/shoplogo.png";
import searchLogo from "@/assets/images/common/searchlogo.svg";
import heartLogo from "@/assets/images/common/heartlogo.svg";
import cartLogo from "@/assets/images/common/cartlogo.svg";
import blueCartLogo from "@/assets/images/common/bluecartlogo.svg";
import blueDeleteLogo from "@/assets/images/common/bluedeletelogo.svg";
import navImg1 from "@/assets/images/home/navimg1.png";
import cartImg1 from "@/assets/images/home/cartimg1.png";

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isClickWishlist, setIsClickWishList] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSearchQuery = (searchValue: string) => {
    setSearchQuery(searchValue);
  };

  return (
    <div className="w-full">
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
      <div className="w-full flex items-center justify-between h-[75px] default-container s-box-shadow relative">
        <img
          className="w-[147px] h-[45px] cursor-pointer"
          src={shopLogo}
          alt="OsShoppy Logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="w-[500px] h-[45px] bg-lightgray rounded-[5px] align-center px-[20px] relative">
          <input
            className="w-full bg-transparent focus:outline-none focus:border-none"
            type="text"
            placeholder="What are you looking for"
            value={searchQuery}
            onChange={(e) => {
              handleSearchQuery(e.target.value);
            }}
          />
          <img
            className="w-[20px] h-[20px] absolute top-1/2 translate-y-[-50%] right-[20px]"
            src={searchLogo}
            alt=""
          />

          {searchQuery && (
            <div
              className="w-full scrollbar overflow-y-scroll absolute top-[48px] left-0 max-h-[400px] 
          flex flex-col gap-[15px] bg-white z-[10000] p-[20px] s-box-shadow"
            >
              {[...Array(5)].map((_, index) => (
                <div
                  className="flex flex-row items-center gap-[20px]"
                  key={index}
                >
                  <img
                    className="w-[65px] h-[65px] object-cover rounded-[4px]"
                    src={navImg1}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className="font-[500] text-[16px] text-headingcolor">
                      OMEGA Swiss Watch for sal
                    </h3>
                    <span className="font-[500] text-violet text-[16px]">
                      $222
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="relative">
            <img
              className="w-[30px] h-[30px] cursor-pointer"
              src={heartLogo}
              alt=""
              onClick={() => setIsClickWishList((prev) => !prev)}
            />
            <span
              className="w-[20px] h-[20px] text-white text-[14px] bg-violet
             align-center rounded-[50%] absolute top-[-8px] right-[-8px]"
            >
              2
            </span>
            {/* wishlist container */}
            {isClickWishlist && (
              <div className="w-[540px] h-auto absolute top-[45px] left-[-270px] z-[100] s-box-shadow">
                <div className="w-full bg-white p-[20px] flex justify-between items-center">
                  <span className="text-headingcolor font-[600] text-[16px]">
                    My Wishlist (3)
                  </span>
                  <a className="text-violet font-[600] text-[16px]" href="#">
                    View All
                  </a>
                </div>
                <div className="w-full bg-secondarycolor max-h-[400px] overflow-y-scroll scrollbar">
                  {[...Array(5)].map((item, index) => (
                    <div
                      key={index}
                      className="p-[20px] border border-bordercolor flex flex-col gap-[15px] items-end"
                    >
                      <div className="w-full flex items-center justify-start gap-[20px]">
                        <input className="w-[18px] h-[18px]" type="checkbox" />
                        <div className="flex items-center justify-center p-[10px] border-[2px] border-skyblue rounded-[4px] w-[140px] h-[140px] bg-white">
                          <img
                            src={cartImg1}
                            className="w-[95px] h-[95px] object-cover"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col gap-[7px]">
                          <span className="text-headingcolor font-[600] text-[20px] line-clamp-1">
                            Birkenstock Boston Slippers...
                          </span>
                          <span className="text-violet font-[600] text-[20px]">
                            $78
                          </span>
                          <span className="text-contentcolor font-[400] text-[14px]">
                            Available 60 items
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-[40px]">
                        <div className="flex items-center gap-[5px]">
                          <img
                            className="w-[18px] h-[18px]"
                            src={blueCartLogo}
                          />
                          <span className="text-skyblue font-[500] text-[14px]">
                            Add To Cart
                          </span>
                        </div>
                        <div className="flex items-center gap-[5px]">
                          <img
                            className="w-[18px] h-[18px]"
                            src={blueDeleteLogo}
                          />
                          <span className="text-skyblue font-[500] text-[14px]">
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-[20px] flex items-center gap-[10px] bg-white">
                  <input className="w-[20px] h-[20px]" type="checkbox" />
                  <span className="text-contentcolor font-[500] text-[14px]">
                    Select All (7)
                  </span>
                  <img className="w-[20px] h-[20px]" src={blueDeleteLogo} />
                  <img className="w-[20px] h-[20px]" src={blueCartLogo} />
                </div>
              </div>
            )}
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
