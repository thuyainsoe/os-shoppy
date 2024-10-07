import React from "react";
import shopLogo from "@/assets/images/home/shoplogowithoutbg.png";
import facebookLogo from "@/assets/images/common/facebook.png";
import instagramLogo from "@/assets/images/common/instagram.png";
import fakeQr from "@/assets/images/common/fakeqr.svg";
import appleLogo from "@/assets/images/common/apple.png";
import goolePlaylogo from "@/assets/images/common/playstore.png";

const Footer: React.FC = () => {
  return (
    <div className="default-container w-full bg-lightgray h-[300px] flex items-center">
      {/* top section */}
      <div className="w-full flex items-start justify-between gap-[135px]">
        <div className="w-1/4 flex flex-col gap-[10px]">
          <img
            className="w-[147px] h-[45px]"
            src={shopLogo}
            alt="OsShoppy Logo"
          />
          <p className="text-darkgray font-[400]">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed Lorem Ipsum.
          </p>
        </div>
        <div className="w-1/4 flex flex-col gap-[15px]">
          <h4 className="text-[18px] font-[500] text-headingcolor">
            About OsShoppy
          </h4>
          <ul className="flex flex-col gap-[10px] text-darkgray">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="w-1/4 flex flex-col gap-[15px]">
          <h4 className="text-[18px] font-[500] text-headingcolor">
            Follow Us
          </h4>
          <ul className="flex flex-col gap-[10px] text-darkgray">
            <li className="flex items-center gap-[10px]">
              <img
                className="w-[30px] h-[30px] object-cover"
                src={facebookLogo}
                alt=""
              />
              Facebook
            </li>
            <li className="flex items-center gap-[10px]">
              <img
                className="w-[30px] h-[30px] object-cover"
                src={instagramLogo}
                alt=""
              />
              Instagram
            </li>
          </ul>
        </div>
        <div className="w-1/4 flex flex-col gap-[15px]">
          <h4 className="text-[18px] font-[500] text-headingcolor text-nowrap">
            OsShoppy app download
          </h4>
          <div className="flex flex-row items-center gap-[15px]">
            <div>
              <img className="w-[80px] h-[60px]" src={fakeQr} alt="" />
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="flex items-center gap-[5px]">
                <img
                  className="w-[30px] h-[30px] object-cover"
                  src={appleLogo}
                  alt=""
                />
                <span className="text-nowrap">App Store</span>
              </div>
              <div className="flex items-center gap-[5px]">
                <img
                  className="w-[30px] h-[30px] object-cover"
                  src={goolePlaylogo}
                  alt=""
                />
                <span className="text-nowrap">Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div></div>
    </div>
  );
};

export default Footer;
