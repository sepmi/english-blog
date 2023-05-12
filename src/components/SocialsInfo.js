import profile from "../assests/home/profile/profile@2x.png";
import computer from "../assests/home/computer/computer@2x.png";
import store from "../assests/home/Google play/Google play@2x.png";

const SocialsInfo = (props) => {
  return (
    <div className=" w-full h-[226px] md:h-[286px] mt-[40px] md:mt-[56px] mx-auto pt-[16px] md:pt-[24px] bg-[#EFEFEF]">
      <div className="w-full h-[117px] md:h-[148px] mb-[24px] md:mb-[44px] flex flex-row-reverse items-stretch justify-evenly">
        <div className=" h-[117px] md:h-[148px] w-[125px] md:w-[466px]">
          <img
            src={profile}
            alt="profile_image"
            className="w-[48px] h-[48px] md:w-[72px] md:h-[72px] mx-auto"
          />

          <p
            className="text-[17px] md:text-[20px] mx-auto w-fit h-[27px] md:h-[31px] mt-[8px] "
            dir="rtl"
          >
            ۲۵ هزار
          </p>

          <p
            className="text-[11px] md:text-[13px] mx-auto w-fit mt-[8px] text-[#5D5D5D] "
            dir="rtl"
          >
            کاربر فعال
          </p>
        </div>
        <div className="  h-[117px] md:h-[148px]  w-[125px] md:w-[466px]">
          <img
            src={computer}
            alt="computer_image "
            className="w-[48px] h-[48px] md:w-[72px] md:h-[72px] mx-auto"
          />

          <p
            className="text-[17px] md:text-[20px] mx-auto w-fit h-[27px] md:h-[31px] mt-[8px] "
            dir="rtl"
          >
            ۳.۶ امتیاز{" "}
          </p>

          <p
            className="text-[11px] md:text-[13px] mx-auto w-fit mt-[8px] text-[#5D5D5D] "
            dir="rtl"
          >
            ۳ونیم‌تا ستاره:)
          </p>
        </div>
        <div className=" h-[117px] md:h-[148px]  w-[125px] md:w-[466px]">
          <img
            src={store}
            alt="sotre_image"
            className="w-[48px] h-[48px] md:w-[72px] md:h-[72px] mx-auto"
          />

          <p
            className="text-[17px] md:text-[20px] mx-auto w-fit h-[27px] md:h-[31px] mt-[8px] "
            dir="rtl"
          >
            ۳۰ هزار
          </p>

          <p
            className="text-[11px] md:text-[13px] mx-auto w-fit mt-[8px] text-[#5D5D5D] "
            dir="rtl"
          >
            منبع اموزشی{" "}
          </p>
        </div>
      </div>
      <button className="bg-[#E1165E] block w-[196px] h-[48px] md:w-[236px] md:h-[53px] rounded-[10px] mx-auto text-white">
        دانلود اپلیکیشن
      </button>
    </div>
  );
};

export default SocialsInfo;
