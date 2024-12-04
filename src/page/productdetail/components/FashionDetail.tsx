import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { starSvg } from "@/components/MultipleCategories/dummyData";
import SvgIcon from "@/components/SvgIcon";
import copyLinkSvgIcon from "@/assets/images/common/copyLinkSvgIcon.svg";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const FashionDetail = () => {
  return (
    <div className="w-full flex items-center gap-[20px] mt-[10px]">
      <div className="detailPageImageGalleryContainer">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          additionalClass="min-h-[530px] w-full"
        />
      </div>
      <div className="w-[48.9795%] h-full  flex flex-col gap-[14px]">
        <h2 className="text-headingcolor text-[18px] font-[500] ">
          Red Shirt - Red Short Sleeve Shirt Red Short Sleeve Shirt
        </h2>
        {/* new row */}
        <div className="flex items-center">
          <SvgIcon svg={starSvg} />
          <SvgIcon svg={starSvg} />
          <SvgIcon svg={starSvg} />
          <SvgIcon svg={starSvg} />
          <SvgIcon svg={starSvg} />
          <span className="text-skyblue text-[14px] font-[400] ml-[10px] mt-[5px]">
            3 Ratings
          </span>
        </div>
        {/* new row */}
        <div className="flex items-center gap-[5px]">
          <span className="text-skyblue text-[14px] font-[400]">
            11 Answered Questions
          </span>
          |
          <span className="text-skyblue text-[14px] font-[400]">3 Reviews</span>
        </div>
        {/* new row */}
        <div className="flex items-center gap-[10px]">
          <span className="w-fit flex items-center justify-center bg-[#F0F2F5] px-[10px] text-[14px] font-bold text-skyblue">
            Posted
          </span>
          <span className="text-content text-[14px] font-[400]">
            24-Sept-2024
          </span>
        </div>
        {/* price */}
        <div className="flex items-center gap-[10px]">
          <span className="text-violet text-[20px] font-[600] ">15000MMK</span>
          <span className="text-contentcolor font-[400] line-through">
            18000MMK
          </span>
          <span className="bg-violet flex items-center justify-center px-[10px] h-[30px] rounded-[5px] text-white">
            -10%{" "}
          </span>
        </div>
        {/* size */}
        <div className="flex flex-col gap-[10px]">
          <label className="font-[500] text-headingcolor">Size</label>
          <div className="flex items-center gap-[10px]">
            <div className="w-[45px] h-[45px]  bg-white border-2 flex items-center justify-center rounded-[50%]">
              <span className="text-[14px] font-[500] w-[35px] h-[35px] flex items-center justify-center  rounded-[50%] ">
                S
              </span>
            </div>
            <div className="w-[45px] h-[45px] border-skyblue bg-white border-2 flex items-center justify-center rounded-[50%]">
              <span className="text-[14px] font-[500] w-[35px] h-[35px] flex items-center justify-center bg-skyblue rounded-[50%] text-white">
                M
              </span>
            </div>
            <div className="w-[45px] h-[45px]  bg-white border-2 flex items-center justify-center rounded-[50%]">
              <span className="text-[14px] font-[500] w-[35px] h-[35px] flex items-center justify-center  rounded-[50%] ">
                L
              </span>
            </div>
            <div className="w-[45px] h-[45px]  bg-white border-2 flex items-center justify-center rounded-[50%]">
              <span className="text-[14px] font-[500] w-[35px] h-[35px] flex items-center justify-center  rounded-[50%] ">
                XL
              </span>
            </div>
            <div className="w-[45px] h-[45px]  bg-white border-2 flex items-center justify-center rounded-[50%]">
              <span className="text-[14px] font-[500] w-[35px] h-[35px] flex items-center justify-center  rounded-[50%] ">
                XXL
              </span>
            </div>
          </div>
        </div>
        {/* color */}
        <div className="flex flex-col gap-[10px]">
          <label className="font-[500] text-headingcolor">Color</label>
          <div className="flex items-center gap-[10px]">
            <div className="w-[45px] h-[45px]  bg-white border-2 border-transparent flex items-center justify-center rounded-[50%]">
              <span className="text-[14px] font-[500] w-[35px] h-[35px] flex items-center justify-center bg-violet  rounded-[50%] "></span>
            </div>
            <div className="w-[45px] h-[45px]  bg-white border-2 border-black flex items-center justify-center rounded-[50%]">
              <span className="text-[14px] font-[500] w-[35px] h-[35px] flex items-center justify-center bg-[#AA223383]  rounded-[50%] "></span>
            </div>
            <div className="w-[45px] h-[45px]  bg-white border-2 border-transparent flex items-center justify-center rounded-[50%]">
              <span className="text-[14px] font-[500] w-[35px] h-[35px] flex items-center justify-center bg-[#EFF0F5]  rounded-[50%] "></span>
            </div>
            <div className="w-[45px] h-[45px]  bg-white border-2 border-transparent flex items-center justify-center rounded-[50%]">
              <span className="text-[14px] font-[500] w-[35px] h-[35px] flex items-center justify-center bg-[#555555]  rounded-[50%] "></span>
            </div>
            <div className="w-[45px] h-[45px]  bg-white border-2 border-transparent flex items-center justify-center rounded-[50%]">
              <span className="text-[14px] font-[500] w-[35px] h-[35px] flex items-center justify-center bg-[#828282]  rounded-[50%] "></span>
            </div>
          </div>
        </div>
        {/* share */}
        <div className="flex flex-col gap-[10px]">
          <label className="font-[500] text-headingcolor">Share</label>
          <div className="flex items-center gap-[5px]">
            <img className="w-[24px] h-[24px]" src={copyLinkSvgIcon} alt="" />
            <span className="text-skyblue font-[500]">Copy link</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionDetail;
