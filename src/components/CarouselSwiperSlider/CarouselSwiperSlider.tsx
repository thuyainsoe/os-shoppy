import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CarouselSwiperSlider.css";
import sliderImg1 from "@/assets/images/home/sliderimg1.png";
import Button from "../Button";

const sliderData = [
  {
    title: "What is Lorem Ipsum?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
    imgSrc: sliderImg1, // Replace with your image source
  },
  {
    title: "What is Lorem Ipsum?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
    imgSrc: sliderImg1, // Replace with your image source
  },
  {
    title: "What is Lorem Ipsum?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
    imgSrc: sliderImg1, // Replace with your image source
  },
  {
    title: "What is Lorem Ipsum?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
    imgSrc: sliderImg1, // Replace with your image source
  },
];

const CarouselSwiperSlider = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper fullCarouselSwiperContainer"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="sliderContainer flex items-center justify-between gap-[70px]">
              <div className="flex flex-col gap-[20px] w-1/2">
                <h1 className="text-[36px] font-[500] text-headingcolor">
                  {slide.title}
                </h1>
                <p className="text-contentcolor text-[16px]">{slide.content}</p>
                <Button className="bg-violet">More About</Button>
              </div>
              <div className="w-1/2">
                <img
                  className="w-full h-full object-cover"
                  src={slide.imgSrc}
                  alt={slide.title}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselSwiperSlider;
