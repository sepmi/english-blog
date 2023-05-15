const AppLinks = (props) => {
  return (
    <div className="max-w-[188px] md:max-w-[1140px] mx-auto pt-[40px] pb-[40px] md:pt-[56px] md:pb-[56px]">
      <div className="w-full flex items-center flex-col md:flex md:flex-row md:justify-between md:items-center md:pr-[5px] md:pl-[5px]">
        <div className="bg-black w-[188px] h-[60px] md:w-[226px] md:h-[72px] rounded-[10px]  text-white font-IranSans-medium flex items-center justify-center">
          Bazar
        </div>
        <div className="bg-black w-[188px] h-[60px] md:w-[226px] md:h-[72px] rounded-[10px]  text-white font-IranSans-medium flex items-center justify-center mt-[32px] md:mt-0 ">
          Google Play
        </div>
        <div className="bg-black w-[188px] h-[60px] md:w-[226px] md:h-[72px] rounded-[10px]  text-white font-IranSans-medium flex items-center justify-center mt-[32px] md:mt-0 ">
          App Store
        </div>
        <div className="bg-black w-[188px] h-[60px] md:w-[226px] md:h-[72px] rounded-[10px]  text-white font-IranSans-medium flex items-center justify-center mt-[32px] md:mt-0 ">
          Web App
        </div>
      </div>
    </div>
  );
};

export default AppLinks;
