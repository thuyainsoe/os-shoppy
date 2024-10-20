import homeSvg from "@/assets/images/common/homeicon.svg";
import "./ProductDetail.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { starSvg } from "@/components/MultipleCategories/dummyData";
import SvgIcon from "@/components/SvgIcon";
import copyLinkSvgIcon from "@/assets/images/common/copyLinkSvgIcon.svg";
import CarouselSwiperSlider from "@/components/CarouselSwiperSlider";
import blueDownIcon from "@/assets/images/common/bluedownicon.svg";
import exampleImg from "@/assets/images/home/recommandimg1.png";
import blueCross from "@/assets/images/common/bluecross.svg";
import greyCopyLinkIcon from "@/assets/images/common/copylinkgrey.svg";
import exampleImg2 from "@/assets/images/common/instagram.png";
import { useState } from "react";

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

const ProductDetail = () => {
  const [isSeeMoreClick, setIsSeeMoreClick] = useState(false);

  return (
    <div className="py-[20px]">
      {/* left section */}
      <div className="w-[66.525%]">
        {/* breadcrumb */}
        <div className="flex items-center gap-[10px]">
          <img src={homeSvg} className="w-[24px] h-[24px]" alt="" />
          <ul className="breadcrumbContainer">
            <li>Home</li>
            <li>Fashion & Beauty</li>
            <li>Men’s Fashion</li>
            <li>Men’s Shirt</li>
          </ul>
        </div>
        {/* detail section */}
        <div className="w-full flex items-center gap-[20px] mt-[10px]">
          <div className="detailPageImageGalleryContainer">
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={false}
              additionalClass="min-h-[530px] w-full"
              originalHeight={420}
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
              <span className="text-skyblue text-[14px] font-[400]">
                3 Reviews
              </span>
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
              <span className="text-violet text-[20px] font-[600] ">
                15000MMK
              </span>
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
                <img
                  className="w-[24px] h-[24px]"
                  src={copyLinkSvgIcon}
                  alt=""
                />
                <span className="text-skyblue font-[500]">Copy link</span>
              </div>
            </div>
          </div>
        </div>
        {/* product detail */}
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius reiciendis quidem magnam cumque unde pariatur. Porro
                    quaerat laborum adipisci quas.
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="text-contentcolor mt-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            tenetur impedit perspiciatis eaque labore reprehenderit, asperiores
            repellat. Odio, vel provident, tenetur temporibus aut nobis eveniet
            aliquam error totam perspiciatis similique possimus ipsum itaque
            esse ab, illum odit nesciunt. Explicabo consectetur perferendis vero
            dolorem fuga illo repudiandae debitis, sint fugiat odit.
          </p>
          <div className="my-[20px]">
            <CarouselSwiperSlider />
          </div>
        </div>
        {/* see more button */}
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
        {/* customer questions & reviews */}
        <div className="mt-[30px]">
          <h2 className="text-[20px] font-[600] text-headingcolor">
            Customer Questions & Reviews
          </h2>
          {/* tabs */}
          <div className="flex items-center gap-[20px] my-[20px]">
            <button className="text-skyblue border-b-2  border-skyblue">
              Questions
            </button>
            <button>Product reviews</button>
          </div>
          {/* comment box */}
          <div className="w-full min-h-[230px] border border-black rounded-[5px] p-[20px] flex flex-col justify-between">
            <textarea
              className="w-full min-h-[100px] focus:border-none focus:outline-none"
              name=""
              id=""
              placeholder="Enter Your Questions Here"
            ></textarea>
            <div className="w-full flex items-baseline justify-between">
              {/* images container */}
              <div className="flex gap-[10px]">
                {[...Array(3)].map((_, index) => {
                  return (
                    <div className="relative" key={index}>
                      <img
                        className="w-[70px] h-[70px] object-cover"
                        src={exampleImg}
                        alt=""
                      />
                      <span className="absolute w-[20px] top-0 right-0 h-[20px]  bg-secondarycolor rounded-[50%] flex items-center justify-center">
                        <img
                          className="w-[8px] h-[8px]"
                          src={blueCross}
                          alt=""
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* ask questions  container */}
              <div className="flex items-center gap-[10px]">
                <img src={greyCopyLinkIcon} alt="" />
                <button className="w-[155px] h-[38px] bg-skyblue rounded-[5px] text-white">
                  Ask Questions
                </button>
              </div>
            </div>
          </div>
          {/* questions about this product */}
          <h2 className="text-[16px] font-[600] text-headingcolor  my-[20px]">
            Customer Questions & Reviews
          </h2>
          {/* questions container */}
          <div className="flex flex-col">
            {/* need to loop this one and make seperate component */}
            {[...Array(3)].map((_, index) => {
              return (
                <div
                  key={index}
                  className="flex items-start gap-[15px] py-[20px] border-b border-[#DDDDDD]"
                >
                  <img
                    className="w-[40px] h-[40px] rounded-[50%]"
                    src={exampleImg2}
                    alt=""
                  />
                  <div className="flex flex-col gap-[8px]">
                    <p className="text-headingcolor font-[400]">Keneth Osbrn</p>
                    <span className="text-contentcolor text-[14px] font-[400]">
                      a month ago
                    </span>
                    <p className="text-contentcolor text-[16px]">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout lorem.
                    </p>
                    <div className="flex items-center gap-[10px]">
                      <img
                        className="w-[100px] h-[100px] object-cover"
                        src={exampleImg}
                        alt=""
                      />
                      <img
                        className="w-[100px] h-[100px] object-cover"
                        src={exampleImg}
                        alt=""
                      />
                      <img
                        className="w-[100px] h-[100px] object-cover"
                        src={exampleImg}
                        alt=""
                      />
                    </div>
                    <button className="w-[160px] h-[38px] rounded-[5px] border border-skyblue text-skyblue font-[500]">
                      Answer Questions
                    </button>
                    <span className="text-contentcolor">1 answer</span>
                    <div className="flex flex-col gap-[15px] w-full bg-secondarycolor border-l-2 border-skyblue h-auto px-[10px] py-[20px] rounded-[5px]">
                      <div className="w-full justify-between flex items-center ">
                        <div className="flex items-center gap-[10px]">
                          <img
                            className="w-[30px] h-[30px] rounded-[50%] object-cover"
                            src={exampleImg2}
                            alt=""
                          />
                          <span className="text-headingcolor">Show Owner</span>
                        </div>
                        <span className="text-[14px] text-contentcolor">
                          a month ago
                        </span>
                      </div>
                      <div className="text-contentcolor">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* right section */}
      <div className="w-[33.474%]"></div>
    </div>
  );
};

export default ProductDetail;
