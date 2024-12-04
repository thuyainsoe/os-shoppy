import "./ProductDetail.css";
import laptop from "@/assets/images/home/threelaptop.png";
import ShopDetail from "@/components/ShopDetail/ShopDetail";
import Button from "@/components/Button";
import ItemCardWithCarousel from "@/components/ItemCardWithCarousel";
import FashionDetail from "./components/FashionDetail";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import CustomerQuestionsAndReviews from "@/components/CustomerQuestionsAndReviews/CustomerQuestionsAndReviews";
import ProductDetailDescription from "@/components/ProductDetailDescription/ProductDetailDescription";

const ProductDetail = () => {
  return (
    <div className="flex flex-col items-start gap-[40px] w-full">
      {/* detail top section */}
      <div className="py-[20px] flex gap-[20px] w-full">
        {/* left section */}
        <div className="w-[66.525%]">
          <BreadCrumb />
          <FashionDetail />
          <ProductDetailDescription />
          <CustomerQuestionsAndReviews />
        </div>
        {/* right section */}
        <div className="w-[33.474%]">
          <ShopDetail />
          {/* promotion section */}
          <div className="w-full max-h-[424px] flex flex-col items-center justify-center py-[20px] shadow mt-[20px] gap-[10px]">
            <img className="w-[195px] object-cover" src={laptop} alt="" />
            <span className="text-[36px] font-bold text-headingcolor block">
              20% OFF
            </span>
            <span className="text-base text-contentcolor font-[500]">
              Modern Laptop
            </span>
            <Button className="bg-violet">Shop Now</Button>
          </div>
          <div className="w-full max-h-[424px] flex bg-violet flex-col items-center justify-center py-[20px] shadow mt-[20px] gap-[10px]">
            <img className="w-[195px] object-cover" src={laptop} alt="" />
            <span className="text-[36px] font-bold text-white block">
              20% OFF
            </span>
            <span className="text-base text-white font-[500]">
              Modern Laptop
            </span>
            <Button className="bg-skyblue">Shop Now</Button>
          </div>
          <div className="w-full max-h-[424px] bg-skyblue text-white flex flex-col items-center justify-center py-[20px] shadow mt-[20px] gap-[10px]">
            <img className="w-[195px] object-cover" src={laptop} alt="" />
            <span className="text-[36px] font-bold  block">20% OFF</span>
            <span className="text-base  font-[500]">Modern Laptop</span>
            <Button className="bg-violet">Shop Now</Button>
          </div>
        </div>
      </div>
      {/* detail from the same shop */}
      <div className="w-full">
        <div className="flex flex-row w-full items-center justify-between">
          <h4 className="font-bold text-[24px] text-headingcolor">
            From The Same Shop
          </h4>
          <button className="border-none text-violet text-[16px] font-bold">
            View More
          </button>
        </div>
        <div className="my-[20px] grid grid-cols-4 gap-[20px] w-full">
          {[...Array(8)].map((_, index) => (
            <ItemCardWithCarousel key={index} />
          ))}
        </div>
      </div>
      {/* you may also like */}
      <div className="w-full">
        <div className="flex flex-row w-full items-center justify-between">
          <h4 className="font-bold text-[24px] text-headingcolor">
            You May Also Like
          </h4>
          <button className="border-none text-violet text-[16px] font-bold">
            View More
          </button>
        </div>
        <div className="my-[20px] grid grid-cols-4 gap-[20px] w-full">
          {[...Array(8)].map((_, index) => (
            <ItemCardWithCarousel key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
