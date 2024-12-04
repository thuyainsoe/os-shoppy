import shopImage1 from "@/assets/images/shopdetail/image1.png";
import map from "@/assets/images/shopdetail/map.png";
import jcb from "@/assets/images/common/jcb.png";
import visa from "@/assets/images/common/visa.png";
import master from "@/assets/images/common/master.png";
import shopowner from "@/assets/images/shopdetail/shopowner.png";
import {
  BlueShopIcon,
  LocationIcon,
  PhoneIcon,
  StarIcon,
  TelegramIcon,
  ViberIcon,
  WhiteChatIcon,
} from "../Icon";

const ShopDetail = () => {
  return (
    <div className="w-full flex flex-col items-start bg-white rounded-[5px] overflow-hidden shadow">
      {/* top section */}
      <div className="h-[108px] w-full">
        <img
          className="w-full h-full object-cover object-center"
          src={shopImage1}
          alt=""
        />
      </div>
      {/* detail section */}
      <div className="flex w-full flex-col items-start gap-[5px] p-[15px] relative">
        <h3 className="text-headingcolor text-[18px] font-[500]">Shop Name</h3>
        <span className="text-contentcolor text-sm font-[500]">
          3854 Followers
        </span>
        <span className="text-skyblue text-sm font-[500]">
          Last Active 1 min ago
        </span>
        <div className="flex items-center gap-[5px]">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} />
          ))}
          <span className="text-contentcolor font-[500] text-base">5</span>
        </div>
        <div className="flex items-start gap-[8px] mt-[10px]">
          <BlueShopIcon />
          <span className="text-contentcolor text-base">
            https://www.osshopy.com/shop-name- osshopy
          </span>
        </div>
        <img
          className="max-w-[85px] aspect-square object-cover rounded-[50%] absolute right-[15px] top-[-42px]"
          src={shopowner}
          alt=""
        />
      </div>
      {/* line */}
      <span className="block h-[1px] w-full bg-[#d9d9d9] mx-[15px]"></span>
      {/* map section */}
      <div className="flex flex-col items-start p-[15px] gap-[10px]">
        <div className="flex items-center gap-[8px]">
          <LocationIcon />
          <span className="text-contentcolor text-base">
            Moscow, Lenin Street BlockA1
          </span>
        </div>
        <div className="w-full h-[105px]">
          <img
            className="w-full h-full object-cover object-center"
            src={map}
            alt=""
          />
        </div>
        <div className="flex flex-col items-start gap-[7px] text-base text-contentcolor">
          <div className="flex items-center gap-[8px]">
            <PhoneIcon />
            <span>09-781416923</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <TelegramIcon />
            <span>https://t.me/black_white_library</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <ViberIcon />
            <span>09-781416923</span>
          </div>
        </div>
      </div>
      {/* chat button */}
      <button
        className="w-[calc(100%-30px)] h-[43px] bg-skyblue rounded-[5px] text-white 
      flex items-center justify-center gap-[8px] font-[500] text-base mx-[15px]"
      >
        <WhiteChatIcon />
        Chat
      </button>
      {/* we accept section */}
      <div className="p-[15px] flex flex-col items-start gap-[10px]">
        <span className="text-headingcolor font-[500] text-base">
          We Accept
        </span>
        <div className="flex items-center">
          <img className="max-w-[65px]" src={visa} alt="" />
          <img className="max-w-[65px]" src={jcb} alt="" />
          <img className="max-w-[65px]" src={master} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
