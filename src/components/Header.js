/* eslint-disable jsx-a11y/alt-text */
import image1 from "../assests/home/header.png";

const Header = (props) => {
  return (
    <div className="w-full bg-[#00429E] bg-gradient-to-t from-[#00215A] h-[546px] p-[24px]">
      <div className="max-w-[1240px] max-h-[495px]   mx-auto grid md:grid-cols-2 ">
        <img
          src={image1}
          className="w-[327px] h-[234px]  md:w-[690px] md:h-[495px]"
        />

        <div className=" mt-[24px] flex flex-col justify-center">
          <h1 className="text-right text-[26px]  text-white">بلاگ زبانشناس</h1>
          <p className="text-white text-[14px] text-right mt-[8px] ">
            در این بخش توضیح مختصری در ارتباط با بلاگ زبان شناس داد می شود در
            حال حاضر این یک متن اماده است
          </p>
          <button className="bg-[#E1165E] w-[164px] h-[48px] rounded-[10px] text-white mt-[24px] md:mt-[40px]">
            شروع یادگیری
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
