import CarouselSwiperSlider from "@/components/CarouselSwiperSlider";
import ItemCardWithCarousel from "@/components/ItemCardWithCarousel";
import MultipleCategories from "@/components/MultipleCategories";
import ThreeRowCards from "@/components/ThreeRowCards";

const Home = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <CarouselSwiperSlider />
      <ThreeRowCards />
      <MultipleCategories />
      <div>
        <div className="flex flex-row w-full items-center justify-between">
          <h4 className="font-bold text-[24px] text-headingcolor">
            Recommended For You
          </h4>
          <button className="border-none text-violet text-[16px] font-bold">
            View More
          </button>
        </div>
        <div className="my-[20px] grid grid-cols-4 gap-[20px]">
          {[...Array(8)].map((_, index) => (
            <ItemCardWithCarousel key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
