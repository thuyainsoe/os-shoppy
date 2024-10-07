import Button from "@/components/Button";
import threeMobile from "@/assets/images/home/threemobile.png";
import threeLaptop from "@/assets/images/home/threelaptop.png";
import threeTablet from "@/assets/images/home/threetablet.png";

const ThreeRowCards = () => {
  return (
    <div className="w-full flex flex-row gap-[20px] h-[212px]">
      <div className="w-1/3 h-full bg-skyblue px-[25px] flex items-center justify-between">
        <div className="flex flex-col gap-[15px]">
          <h1 className="text-[36px] font-[700] text-white">30% OFF</h1>
          <span className="text-white text-[16px] font-[500]">Smart Phone</span>
          <Button className="bg-violet">Shop Now</Button>
        </div>
        <div className="w-[150px]">
          <img src={threeMobile} alt="" className="w-full object-cover" />
        </div>
      </div>
      <div className="w-1/3 h-full bg-secondarycolor px-[25px] flex items-center justify-between">
        <div className="flex flex-col gap-[15px]">
          <h1 className="text-[36px] font-[700] text-headingcolor">20% OFF</h1>
          <span className="text-contentcolor text-[16px] font-[500]">
            Modern Laptop
          </span>
          <Button className="bg-violet">Shop Now</Button>
        </div>
        <div className="w-[150px]">
          <img src={threeLaptop} alt="" className="w-full object-cover" />
        </div>
      </div>
      <div className="w-1/3 h-full bg-violet px-[25px] flex items-center justify-between">
        <div className="flex flex-col gap-[15px]">
          <h1 className="text-[36px] font-[700] text-white">10% OFF</h1>
          <span className="text-white text-[16px] font-[500]">
            Modern Tablet
          </span>
          <Button className="bg-skyblue">Shop Now</Button>
        </div>
        <div className="w-[150px]">
          <img src={threeTablet} alt="" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ThreeRowCards;
