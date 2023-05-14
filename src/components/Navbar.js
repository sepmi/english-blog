import { Fragment, useState } from "react";
import menu1 from "../assests/menu1.png";
import logo from "../assests/logo.svg";
import menu2 from "../assests/menu2.jpeg";
import menu22 from "../assests/m2.png";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <Fragment>
      <div className="flex justify-between items-center bg-[#00429E] text-white h-[70px] bg-gradient-to-t from-[#00215A]  md:fixed md:w-[100%] md:z-10">
        <img src={logo} alt="navbar_logo" className="ml-4  md:hidden" />

        <button className="bg-[#E1165E] w-[164px] h-[48px] rounded-[10px] md:ml-[87px] text-[16px] md:text-[21px] font-IranSans-bold">
          دانلود اپلیکیشن
        </button>

        {!nav ? (
          <img
            src={menu1}
            alt="menu_image"
            className="mr-4 md:hidden "
            onClick={navHandler}
          />
        ) : (
          <img
            src={menu22}
            alt="logo"
            className="mr-[28px] ml-[16px] w-[20px] "
            onClick={navHandler}
          />
        )}

        <ul className=" hidden md:flex flex-row-reverse mr-[80px]  items-center">
          <img src={logo} alt="logo" className="ml-4 " />

          <li className="h-[31px] text-right text-[20px] text-white mr-[16px] font-IranSans-medium ">
            بلاگ زبانشناس
          </li>
          <li className="h-[31px] text-right text-[20px] text-white mr-[16px] font-IranSans-medium">
            تالار گفتگو
          </li>
        </ul>
      </div>
      {nav && (
        <div>
          <ul className="flex flex-col h-[177px]  bg-[#00429E]">
            <li className="font-IranSans-medium h-[58px] text-right text-[17px] text-white pr-[16px] border-t-[1px] border-t-white pt-[16px] bg-gradient-to-t from-[#00215A]  ">
              خانه
            </li>
            <li className="font-IranSans-medium h-[58px] text-right text-[17px] text-white pr-[16px] border-t-[1px] border-t-white pt-[16px] bg-gradient-to-t from-[#00215A]">
              بلاگ
            </li>
            <li className="font-IranSans-medium h-[58px] text-right text-[17px] text-white pr-[16px] border-t-[1px] border-t-white pt-[16px] bg-gradient-to-t from-[#00215A]">
              تالار گفتگو
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
