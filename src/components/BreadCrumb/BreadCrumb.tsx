import homeSvg from "@/assets/images/common/homeicon.svg";

const BreadCrumb = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <img src={homeSvg} className="w-[24px] h-[24px]" alt="" />
      <ul className="breadcrumbContainer">
        <li>Home</li>
        <li>Fashion & Beauty</li>
        <li>Men’s Fashion</li>
        <li>Men’s Shirt</li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
