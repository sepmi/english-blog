import icon from "../assests/home/icon.svg";

const UserComments = (props) => {
  return (
    <div className="max-w-[327px] md:max-w-[1140px] h-full mt-[40px] md:mt-[56px] mx-auto  ">
      <h1 className="text-center  mb-[33px] md:mb-[48px] mx-auto  text-[24px] md:text-[27px] ">
        چرا زبانشناس؟
      </h1>

      <div className="flex flex-col w-full">
        {/* first section */}
        <div className="flex flex-col md:flex-row-reverse h-[357px] md:h-[184px] mb-[24px] md:mb-[40px] justify-center items-center border-[3px]">
          {/* image */}
          <div
            className="mx-auto w-[155px] h-[155px] md:w-[184px] md:h-[184px] rounded-[100%] bg-[#727272] flex justify-center items-center 
        mb-[24px] md:mb-[0px] md:ml-[24px] "
          >
            <img
              src={icon}
              alt="comment_image"
              className="w-[62.5px] h-[62.5px] md:w-[71px] md:h-[71px]"
            />
          </div>
          {/* image */}
          <div className="bg-amber-400 h-[181px] md:h-[149px] md:mt-[18px] md:mb-[18px] w-full md:w-[932px]"></div>
        </div>

        {/* first section */}
        <div className="flex flex-col md:flex-row-reverse h-[357px] md:h-[184px] mb-[24px] md:mb-[40px] justify-center items-center border-[3px]">
          {/* image */}
          <div
            className="mx-auto w-[155px] h-[155px] md:w-[184px] md:h-[184px] rounded-[100%] bg-[#727272] flex justify-center items-center 
        mb-[24px] md:mb-[0px] md:ml-[24px] "
          >
            <img
              src={icon}
              alt="comment_image"
              className="w-[62.5px] h-[62.5px] md:w-[71px] md:h-[71px]"
            />
          </div>
          {/* image */}
          <div className="bg-amber-400 h-[181px] md:h-[149px] md:mt-[18px] md:mb-[18px] w-full md:w-[932px]"></div>
        </div>

        {/* first section */}
        <div className="flex flex-col md:flex-row-reverse h-[357px] md:h-[184px] mb-[24px] md:mb-[40px] justify-center items-center border-[3px]">
          {/* image */}
          <div
            className="mx-auto w-[155px] h-[155px] md:w-[184px] md:h-[184px] rounded-[100%] bg-[#727272] flex justify-center items-center 
        mb-[24px] md:mb-[0px] md:ml-[24px] "
          >
            <img
              src={icon}
              alt="comment_image"
              className="w-[62.5px] h-[62.5px] md:w-[71px] md:h-[71px]"
            />
          </div>
          {/* image */}
          <div className="bg-amber-400 h-[181px] md:h-[149px] md:mt-[18px] md:mb-[18px] w-full md:w-[932px]"></div>
        </div>
      </div>
    </div>
  );
};

export default UserComments;
