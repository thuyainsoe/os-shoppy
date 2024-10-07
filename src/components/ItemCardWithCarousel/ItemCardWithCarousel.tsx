import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import img1 from "@/assets/images/home/recommandimg1.png";
import blueHeartLogo from "@/assets/images/common/blueheartlogo.svg";
import "./ItemCardWithCarouesl.css";

const ItemCardWithCarousel = () => {
  return (
    <div className="w-[calc((100%-3*20px)/4)] p-[15px] bg-secondarycolor flex flex-col gap-[20px] rounded-[10px] cursor-pointer blue-box-shadow">
      <div className="w-full">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper itemCardWithCarouselContainer"
        >
          <SwiperSlide>
            <img src={img1} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} className="w-full aspect-square" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* content section */}
      <div className="flex flex-col gap-[15px]">
        <span className="w-fit h-[30px] px-[10px] bg-violet rounded-[5px] flex items-center text-white font-[500]">
          20% Off
        </span>
        <p className="text-headingcolor font-[400] line-clamp-2">
          Lorem Ipsum is that it has a more-or-less normal
        </p>
        <div className="w-full flex items-center justify-between">
          <span className="text-violet text-[20px] font-[600]">110$</span>
          <div className="flex items-center gap-[5px]">
            <img src={blueHeartLogo} className="w-[18px]" alt="" />
            <span className="text-skyblue text-[14px] font-[500]">
              Wishlist
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardWithCarousel;
