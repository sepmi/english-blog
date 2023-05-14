import insta from "../assests/home/instagram.svg";
import youtube from "../assests/home/youtube.svg";
import telegram from "../assests/home/telegram.svg";
import whatsapp from "../assests/home/whatsapp.svg";

const Footer = (props) => {
  return (
    <div className="w-full bg-[#00429E] bg-gradient-to-t from-[#00215A] pt-[40px] pb-[40px] md:pt-[56px] md:pb-[56px]">
      {/* main section */}
      <div className="max-w-[327px]  mx-auto  md:max-w-[1140px] md:pl-[10px] md:pr-[10px]">
        {/* first part */}
        <div className="w-full flex flex-col items-end mb-[32px]   md:flex md:flex-row-reverse md:justify-between md:items-start">
          {/* 4 col */}
          {/* first */}
          <div className="h-[116px] w-[64px]">
            <h1 className="text-white text-[17px] font-IranSans-medium text-right">
              زبانشناس
            </h1>
            <p className="text-white text-[12px] font-IranSans-medium text-right mt-[16px]">
              درباره ما
            </p>
            <p className="text-white text-[12px] font-IranSans-medium text-right mt-[8px]">
              تماس با ما
            </p>
            <p className="text-white text-[12px] font-IranSans-medium text-right mt-[8px]">
              بلاگ
            </p>
          </div>
          {/* second */}
          <div className="h-[89px] w-[108px] mt-[32px] md:mt-0 ">
            <h1 className="text-white text-[17px] font-IranSans-medium text-right mt-[16px] md:mt-0">
              اطلاعات تکمیلی
            </h1>
            <p className="text-white text-[12px] font-IranSans-medium text-right mt-[8px]">
              قوانین و مقررات
            </p>
            <p className="text-white text-[12px] font-IranSans-medium text-right mt-[8px]">
              فرصت‌های شغلی
            </p>
          </div>
          {/* third */}
          <div className="h-[62px] w-[96px] mt-[32px] md:mt-0">
            <h1 className="text-white text-[17px] font-IranSans-medium text-right">
              لینک‌های مهم
            </h1>
            <p className="text-white text-[12px] font-IranSans-medium text-right mt-[16px]">
              تالار گفتگو
            </p>
          </div>
          {/* forth */}
          <div className="h-[80px] w-[176px] mt-[32px] md:mt-0 flex flex-row justify-between">
            <div className=" w-[80px] h-[80px] bg-gray-400 rounded-[5px]"></div>
            <div className=" w-[80px] h-[80px] bg-gray-400 rounded-[5px]"></div>
          </div>
        </div>
        {/* seprate line tag */}
        <hr className="w-full " />
        {/* second part */}
        <div className=" max-w-[284px] md:max-w-[1140px] mx-auto flex flex-col justify-center mt-[32px] md:mt-[40px] md:flex md:flex-row md:justify-between md:items-center">
          <div className="w-[240px] h-[48px] mx-auto flex flex-row justify-between items-center">
            <img
              src={whatsapp}
              alt="logo"
              className=" w-[48px] h-[48px] md:w-[36px] md:h-[36px]   rounded-[100%]"
            />
            <img
              src={telegram}
              alt="logo"
              className=" w-[48px] h-[48px] md:w-[36px] md:h-[36px]  rounded-[100%]"
            />
            <img
              src={insta}
              alt="logo"
              className=" w-[48px] h-[48px] md:w-[36px] md:h-[36px]  rounded-[100%]"
            />
            <img
              src={youtube}
              alt="logo"
              className=" w-[48px] h-[48px] md:w-[36px] md:h-[36px]  rounded-[100%]"
            />
          </div>
          <div className="w-[284px] md:w-[334px] h-[17px] mt-[24px] mx-auto text-white font-IranSans-Regular text-[11px] text-center md:text-[13px] md:mt-0">
            تمام حقوق مادی و معنوی این وبسایت متعلق به زبانشناس است.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
