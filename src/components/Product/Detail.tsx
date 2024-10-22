import CarouselSwiperSlider from "@/components/CarouselSwiperSlider";
import { useState } from "react";
import blueDownIcon from "@/assets/images/common/bluedownicon.svg";
const Detail = () => {
  const [isSeeMoreClick, setIsSeeMoreClick] = useState(false);
  return (
    <>
      <div
        className={`flex flex-col mt-[30px] ${
          isSeeMoreClick ? "max-h-auto" : "max-h-[400px] overflow-hidden"
        }`}
      >
        <h2 className="text-[20px] font-[600] mb-[20px]">Product Details</h2>
        <ul>
          {[...Array(5)].map((_, index) => {
            return (
              <li key={index} className="flex gap-[30px]">
                <span className="font-[500] text-headingcolor text-nowrap">
                  Lorem head
                </span>
                <span className="text-contentcolor font-[400]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  reiciendis quidem magnam cumque unde pariatur. Porro quaerat
                  laborum adipisci quas.
                </span>
              </li>
            );
          })}
        </ul>
        <p className="text-contentcolor mt-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          tenetur impedit perspiciatis eaque labore reprehenderit, asperiores
          repellat. Odio, vel provident, tenetur temporibus aut nobis eveniet
          aliquam error totam perspiciatis similique possimus ipsum itaque esse
          ab, illum odit nesciunt. Explicabo consectetur perferendis vero
          dolorem fuga illo repudiandae debitis, sint fugiat odit.
        </p>
        <div className="my-[20px]">
          <CarouselSwiperSlider />
        </div>
      </div>
      <button
        className={`${
          isSeeMoreClick ? "" : "mt-[20px]"
        } flex items-center font-[500] text-skyblue gap-[5px] `}
        onClick={() => setIsSeeMoreClick((prev) => !prev)}
      >
        {isSeeMoreClick ? "See Less" : "See More"}
        <img
          className={`${isSeeMoreClick ? "rotate-[180deg]" : ""}`}
          src={blueDownIcon}
          alt=""
        />
      </button>
    </>
  );
};

export default Detail;
