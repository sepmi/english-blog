import icon from "../assests/home/icon.svg";

const Skills = (props) => {
  return (
    <div className="items-center max-w-[327px] h-full  mx-auto mt-[20px] md:max-w-[1140px] md:mt-[56px]">
      <h1 className=" text-[24px] mb-[33px] text-center md:text-[27px] font-IranSans-bold">
        محتوای خود را وارد کنید
      </h1>
      <div className="flex flex-col text-right h-full mt-[48px] md:flex-wrap md:justify-start md:flex-row-reverse md:mt-[32px]">
        <div className="h-[92px] md:max-w-[538px] md:mb-[24px] md:h-[126px]">
          <div>
            <h1 className="font-IranSans-bold h-[30px] text-[19px] w-[283px] mr-[8px] inline-block md:text-[23px] md:h-[36px] md:mb-[16px] md:mr-[16px] md:mt-[9px]">
              محتوای خودرا وارد کنید
            </h1>
            <img
              src={icon}
              alt="icon"
              className=" box-content bg-[#8D8D8D] p-[7px] rounded-[5px] inline-block md:w-[27px] md:p-[14.5px]"
            />
          </div>
          <p className="font-IranSans-medium h-[44px] mt-[17px] mr-[40px] text-[14px] md:text-[17px] md:h-[54px] md:mr-[72px] md:mt-[16px]">
            مطالعه‌ی آزاد کتاب، یکی از بهترین روش‌ها برای یادگیری زبان انگلیسی
            است
          </p>
        </div>

        <div className="h-[92px] mt-[25px] md:max-w-[538px] md:mb-[24px] md:h-[126px]">
          <div>
            <h1 className="font-IranSans-bold h-[30px] text-[19px] w-[283px] mr-[8px] inline-block md:text-[23px] md:h-[36px] md:mb-[16px] md:mr-[16px] md:mt-[9px]">
              محتوای خودرا وارد کنید
            </h1>
            <img
              src={icon}
              alt="icon"
              className=" box-content bg-[#8D8D8D] p-[7px] rounded-[5px] inline-block md:w-[27px] md:p-[14.5px]"
            />
          </div>
          <p className="font-IranSans-medium h-[44px] mt-[17px] mr-[40px] text-[14px] md:text-[17px] md:h-[54px] md:mr-[72px] md:mt-[16px]">
            مطالعه‌ی آزاد کتاب، یکی از بهترین روش‌ها برای یادگیری زبان انگلیسی
            است
          </p>
        </div>

        <div className="h-[92px] mt-[25px] md:max-w-[538px] mb-[24px] md:h-[126px]">
          <div>
            <h1 className="font-IranSans-bold h-[30px] text-[19px] w-[283px] mr-[8px] inline-block md:text-[23px] md:h-[36px] md:mb-[16px] md:mr-[16px] md:mt-[9px]">
              محتوای خودرا وارد کنید
            </h1>
            <img
              src={icon}
              alt="icon"
              className=" box-content bg-[#8D8D8D] p-[7px] rounded-[5px] inline-block md:w-[27px] md:p-[14.5px]"
            />
          </div>
          <p className="font-IranSans-medium h-[44px] mt-[17px] mr-[40px] text-[14px] md:text-[17px] md:h-[54px] md:mr-[72px] md:mt-[16px]">
            مطالعه‌ی آزاد کتاب، یکی از بهترین روش‌ها برای یادگیری زبان انگلیسی
            است
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
