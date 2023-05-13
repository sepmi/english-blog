const UserStory = (props) => {
  return (
    <div className="w-full h-[1013px] md:h-[802px] bg-[#00429E]  bg-gradient-to-t from-[#00215A]  pt-[24px] md:pt-[56px]  mb-[23px]">
      <h1 className=" h-[38px] md:h-[51px] text-center mx-auto text-[24px] md:text-[33px] text-white  mb-[24px]">
        داستان کاربران زبانشناس
      </h1>

      {/* main section */}
      <div className=" ml-[24px] mr-[23px] max-w-[1140px] md:mx-auto bg-purple-500">
        <div className="w-full flex flex-col justify-center items-center md:flex-row md:items-start">
          <div className="w-[203px] h-[414px] md:w-[257px] md:h-[523px] mb-[24px] md:mb-0 md:mr-[72px] bg-slate-400">
            mobile
          </div>

          <div className="w-[327px] md:w-[811px] h-[417px] md:h-[396px] md:mt-[64px] bg-emerald-400">
            detail
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStory;
