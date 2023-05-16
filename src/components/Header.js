import image2 from "../assests/home/imgage_header.png";

const Header = (props) => {
  return (
    <div
      className="w-full bg-[#00429E] bg-gradient-to-t from-[#00215A] h-[513px]  md:h-[575px] p-[24px] md:mt-[84px] md:pt-[40px] md:pb-[40px] md:mx-auto
    md:border-t-[0.5px] border-solid border-t-white"
    >
      <div className="max-w-[1240px] h-[469px] md:h-[495px]   mx-auto grid md:grid-cols-2 ">
        <img
          src={image2}
          alt="image_logo"
          className="w-[327px] h-[234px]  md:w-[690px] md:h-[495px]"
        />

        <div className=" flex flex-col justify-start h-[235px] md:h-[278px] md:mt-[94px]">
          <h1 className="text-right text-[26px] md:text-[33px]  text-white font-IranSans-bold">
            بلاگ زبانشناس
          </h1>
          <p className="text-white text-[14px] md:text-[17px] text-right mt-[8px] md:mt-[24px] font-IranSans-medium">
            در این بخش توضیح مختصری در ارتباط با بلاگ زبان شناس داد می شود در
            حال حاضر این یک متن اماده است
          </p>
          <button className="bg-[#E1165E] w-[164px] h-[48px] md:w-[182px] md:h-[53px] rounded-[10px] text-white mt-[24px] md:mt-[40px] text-[16px] md:text-[21px] font-IranSans-bold">
            شروع یادگیری
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
