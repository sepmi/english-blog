import final_image from "../assests/home/final/final@2x.png";

const UserStory = (props) => {
  return (
    <div className="w-full h-[1013px] md:h-[802px] bg-[#00429E]  bg-gradient-to-t from-[#00215A]  pt-[24px] md:pt-[56px]  ">
      <h1 className=" h-[38px] md:h-[51px] text-center mx-auto text-[24px] md:text-[33px] text-white  mb-[24px]">
        داستان کاربران زبانشناس
      </h1>

      {/* main section */}
      <div className=" ml-[24px] mr-[23px] max-w-[1140px] md:mx-auto">
        <div className="w-full flex flex-col justify-center items-center md:flex-row md:items-start">
          <img
            src={final_image}
            alt="phone_image"
            className="w-[203px] h-[414px] md:w-[257px] md:h-[523px] mb-[24px] md:mb-0 md:mr-[72px] "
          />

          <div className="w-[327px] md:w-[811px] h-[404px] md:h-[396px] md:mt-[64px] md:pr-[5px]">
            <h1 className="h-[33px] md:h-39px text-[21px] md:text-[25px] text-white text-right font-IranSans-bold">
              از زبانشناس تا تولید محتوا در یوتیوب
            </h1>
            <p
              className="h-[154px] md:h-[189px] text-[14px] md:text-[17px] font-IranSans-medium text-right text-white mt-[24px] md:mt-[32px]"
              dir="rtl"
            >
              من سالهای زیادی در پی یادگیری زبان انگلیسی بودم کلاس های متعددی
              رفتم، به خاطر این کلاسا سختی های زیادی کشیدم از اینکه باید تایم
              کار و یا تفریحمو با تایم کلاس هماهنگ میکردم یا استرس تعیین سطح
              همیشه باعث میشد از سطح که هستم تو کلاس پایینتری باشم و همه اینها
              باعث شد دلسرد بشم و دیگه تلاش نکنم یک روز دوستم رو در ی...
            </p>
            {/* main flex  */}
            <div className="h-[57px] md:h-[96px] mt-[32px] md:mt-[40px] w-full    flex flex-row-reverse md:justify-between flex-wrap md:flex-nowrap justify-end">
              <div className="h-[57px] md:h-[96px] w-full   flex flex-row-reverse ">
                <div className="bg-[#727272] w-[56px] h-[56px] md:w-[96px] md:h-[96px] rounded-[100%] "></div>
                <div className="w-[107px] h-[27px] md:w-[126px] md:h-[31px] md:mt-[11px] mr-[16px]">
                  <h1 className="text-right font-IranSans-medium text-[17px] md:text-[20px] text-white">
                    نام شرکت‌کننده
                  </h1>
                  <p className="text-right font-IranSans-Regular text-[14px] md:text-[17px] mt-[8px] md:mt-[16px] text-[#AFAFAF]">
                    دانشجو
                  </p>
                </div>
              </div>
              <button className="bg-[#E1165E] w-[126px] h-[48px] md:w-[136px] md:h-[53px] rounded-[10px] mt-[32px] md:mt-[19px] text-white text-[25px] md:text-[21px] font-IranSans-bold ml-[24px] md:ml-0">
                ادامه
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[327px] md:w-[420px] h-[48px] md:h-[68px] mx-auto text-white mt-[30px] md:mt-[24px] text-center">
        {" "}
        should make slider later(js)
      </div>
    </div>
  );
};

export default UserStory;
