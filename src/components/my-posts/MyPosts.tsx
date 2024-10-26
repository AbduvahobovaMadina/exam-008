import img3 from "../../assets/Avatar-Profile-Pic (5).png";
import img1 from "../../assets/Avatar-Profile-Pic (3).png";
import img2 from "../../assets/Avatar-Profile-Pic (4).png";
import img from "../../assets/Avatar-Profile-Pic  (2).png";
import img4 from "../../assets/Avatar-Profile-Pic.png";
import "../../pages/my-profile/myProfil.css";
const MyPosts = () => {
  return (
    <div className=" gap-[30px] mt-[32px] letter flex items-center">
      <div className=" items-center flex flex-col gap-[6px]">
        <img className=" rounded-full w-[72px] h-[72px]" src={img} alt="" />
        <p className="text-[#EFEFEF] text-[12px]">JSM Pro</p>
      </div>
      <div className="flex flex-col gap-[6px] items-center">
        <img className=" rounded-full w-[72px] h-[72px]" src={img4} alt="" />
        <p className=" text-[12px] text-[#EFEFEF]">JSM Pro</p>
      </div>
      <div className="gap-[6px] items-center flex flex-col ">
        <img className="w-[72px] h-[72px] rounded-full" src={img1} alt="" />
        <p className=" text-[12px] text-[#EFEFEF]">JSM Pro</p>
      </div>
      <div className="flex flex-col gap-[6px] items-center">
        <img className=" rounded-full w-[72px] h-[72px]" src={img2} alt="" />
        <p className=" text-[12px] text-[#EFEFEF]">JSM Pro</p>
      </div>
      <div className="flex flex-col gap-[6px] items-center">
        <img className="w-[72px] h-[72px] rounded-full" src={img3} alt="" />
        <p className=" text-[12px] text-[#EFEFEF]">JSM Pro</p>
      </div>
    </div>
  );
};

export default MyPosts;
