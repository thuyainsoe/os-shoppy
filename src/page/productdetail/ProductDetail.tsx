import homeSvg from "@/assets/images/common/homeicon.svg";
import "./ProductDetail.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Detail from "@/components/Product/Detail";
import FashionAndBeauty from "@/components/Product/FashionAndBeauty";
import QuestionAndReview from "@/components/Product/QuestionAndReview";

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
  return (
    <div className="py-[20px]">
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
      <div className="flex">
        {/* left section */}
        <div className="w-[66.525%]">
          {/* detail section */}
          <div className="w-full flex gap-[20px] mt-[10px]">
            <div className="detailPageImageGalleryContainer">
              <ImageGallery
                items={images}
                showPlayButton={false}
                showFullscreenButton={false}
                additionalClass="min-h-[530px] w-full"
              />
            </div>
            {/* This Section Will Replace with Categories */}
            <FashionAndBeauty />
          </div>
          {/* Product Description */}
          <Detail />
          {/* customer questions & reviews */}
          <QuestionAndReview />
        </div>
        {/* right section */}
        <div className="w-[33.474%] mt-[10px]">Right Section</div>
      </div>
    </div>
  );
};

export default ProductDetail;
