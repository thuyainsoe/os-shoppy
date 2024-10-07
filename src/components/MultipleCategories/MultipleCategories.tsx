import { useState } from "react";
import SvgIcon from "../SvgIcon";
import styles from "./MultipleCategories.module.css";
import { categoriesData as data } from "./dummyData";
import laptopImage from "@/assets/images/home/categorylaptop.png";

const MultipleCategories = () => {
  const [categoriesData, setCategoriesData] = useState(data);
  const [itemId, setActiveItemId] = useState<number>(0);

  const handleCategoryItem = (id: number) => {
    setActiveItemId(id);
  };

  return (
    <div className="flex flex-col gap-[15px] w-full">
      <h3 className="text-[24px] text-headingcolor font-[600]">Categories</h3>
      <div className="w-full h-[455px] bg-secondarycolor flex">
        <div className={styles.categoryLeftSectionContainer}>
          {categoriesData.map((data: any) => (
            <div
              className={`flex flex-row w-full justify-between items-center px-[10px] cursor-pointer`}
              onClick={() => {
                handleCategoryItem(data.id);
              }}
            >
              <div className="flex flex-row items-center  gap-[5px]">
                <SvgIcon svg={data.svg} />
                <span
                  className={`text-darkgray font-[500] text-[16px] ${
                    data.id === itemId ? "text-skyblue" : ""
                  }`}
                >
                  {data.name}
                </span>
              </div>
              <SvgIcon svg={data.arrowIcon} />
            </div>
          ))}
        </div>
        <div className="w-[74.5763%] h-full flex flex-col p-[20px] gap-[25px]">
          <h2 className="font-bold text-[20px] text-skyblue">
            {categoriesData[itemId]?.itemsSection?.name}
          </h2>
          <div className="flex flex-row flex-wrap gap-[10px]">
            {categoriesData[itemId]?.itemsSection?.items.map((item) => (
              <div className="w-[calc((100%-10px*4)/5)] p-[10px] h-[152px] flex flex-col items-center justify-start gap-[5px]">
                <div className="h-[80px]">
                  <img
                    className="h-full object-cover"
                    src={item.image}
                    alt=""
                  />
                </div>
                <span className="text-center text-contentcolor text-[14px]">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleCategories;
