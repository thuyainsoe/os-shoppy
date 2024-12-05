import exampleImg from "@/assets/images/home/recommandimg1.png";
import blueCross from "@/assets/images/common/bluecross.svg";
import greyCopyLinkIcon from "@/assets/images/common/copylinkgrey.svg";
import exampleImg2 from "@/assets/images/common/instagram.png";
import { useState } from "react";
import { StarIcon } from "../Icon";

const CustomerQuestionsAndReviews = () => {
  const [isQuestionClick, setIsQuestionClick] = useState<boolean>(true);

  return (
    <div className="mt-[30px]">
      <h2 className="text-[20px] font-[600] text-headingcolor">
        Customer Questions & Reviews
      </h2>
      {/* tabs */}
      <div className="flex items-center gap-[20px] my-[20px]">
        <button
          className={`${
            isQuestionClick
              ? "text-skyblue border-b-2  border-skyblue"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => setIsQuestionClick(true)}
        >
          Questions
        </button>
        <button
          className={`${
            !isQuestionClick
              ? "text-skyblue border-b-2  border-skyblue"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => setIsQuestionClick(false)}
        >
          Product reviews
        </button>
      </div>
      {/* comment box */}
      {isQuestionClick ? (
        // Questions
        <>
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
        </>
      ) : (
        <>
          <div className="flex flex-col items-start gap-[20px]">
            {/* top section */}
            <div className="flex items-start justify-between gap-[40px] w-full">
              <div className="w-[22.0127%] flex flex-col items-center gap-[8px]">
                <div className="flex items-center gap-[10px]">
                  <span className="text-[54px] text-headingcolor font-bold">
                    4.5
                  </span>
                  <span className="text-skyblue text-base font-[500]">
                    Out of 5 Stars
                  </span>
                </div>
                <div className="flex items-center gap-[5px]">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
                <span className="text-headingcolor text-base font-medium">
                  Overall rating & review
                </span>
                <span className="text-contentcolor text-sm font-medium">
                  (300 Ratings)
                </span>
                <span className="text-contentcolor text-sm font-medium">
                  (3 Reviews)
                </span>
              </div>
              <div className="w-[77.9873%] flex flex-col items-start gap-[6px]">
                <div className="w-full flex items-center justify-between gap-[15px]">
                  <div className="flex items-center gap-[8px] w-[84.9315%]">
                    <span>5</span>
                    <StarIcon color={"#828282"} width={19} />
                    <span className="block w-[78.9%] h-[15px] bg-skyblue rounded-[3px]"></span>
                  </div>
                  <div className="w-[15.0684%] text-headingcolor text-base font-medium text-nowrap">
                    100 (78.9%)
                  </div>
                </div>
                <div className="w-full flex items-center justify-between gap-[15px]">
                  <div className="flex items-center gap-[8px] w-[84.9315%]">
                    <span>4</span>
                    <StarIcon color={"#828282"} width={19} />
                    <span className="block w-[13%] h-[15px] bg-skyblue rounded-[3px]"></span>
                  </div>
                  <div className="w-[15.0684%] text-headingcolor text-base font-medium text-nowrap">
                    200 (13)
                  </div>
                </div>
                <div className="w-full flex items-center justify-between gap-[15px]">
                  <div className="flex items-center gap-[8px] w-[84.9315%]">
                    <span>3</span>
                    <StarIcon color={"#828282"} width={19} />
                    <span className="block w-[5.2%] h-[15px] bg-skyblue rounded-[3px]"></span>
                  </div>
                  <div className="w-[15.0684%] text-headingcolor text-base font-medium text-nowrap">
                    25 (5.2%)
                  </div>
                </div>
                <div className="w-full flex items-center justify-between gap-[15px]">
                  <div className="flex items-center gap-[8px] w-[84.9315%]">
                    <span>2</span>
                    <StarIcon color={"#828282"} width={19} />
                    <span className="block w-[1.2%] h-[15px] bg-skyblue rounded-[3px]"></span>
                  </div>
                  <div className="w-[15.0684%] text-headingcolor text-base font-medium text-nowrap">
                    10 (1.2%)
                  </div>
                </div>
                <div className="w-full flex items-center justify-between gap-[15px]">
                  <div className="flex items-center gap-[8px] w-[84.9315%]">
                    <span>1</span>
                    <StarIcon color={"#828282"} width={19} />
                    <span className="block w-[1.6%] h-[15px] bg-skyblue rounded-[3px]"></span>
                  </div>
                  <div className="w-[15.0684%] text-headingcolor text-base font-medium text-nowrap">
                    15 (1.6%)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerQuestionsAndReviews;
