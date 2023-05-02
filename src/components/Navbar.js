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
      <div className="flex justify-between items-center bg-[#00429E] text-white h-[70px] bg-gradient-to-t from-[#00215A]  ">
        <img src={logo} className="ml-4 " />
        <button className="bg-[#E1165E] w-[164px] h-[48px] rounded-[10px]">
          دانلود اپلیکیشن
        </button>

        {!nav ? (
          <img src={menu1} className="mr-4" onClick={navHandler} />
        ) : (
          <img
            src={menu22}
            className="mr-[28px] ml-[16px] w-[20px] "
            onClick={navHandler}
          />
        )}
      </div>
      {nav && (
        <div>
          <ul className="flex flex-col h-[177px]  bg-[#00429E]">
            <li className="h-[58px] text-right text-[16px] text-white pr-[16px] border-t-[1px] border-t-white pt-[16px] bg-gradient-to-t from-[#00215A]  ">
              خانه
            </li>
            <li className="h-[58px] text-right text-[16px] text-white pr-[16px] border-t-[1px] border-t-white pt-[16px] bg-gradient-to-t from-[#00215A]">
              بلاگ
            </li>
            <li className="h-[58px] text-right text-[16px] text-white pr-[16px] border-t-[1px] border-t-white pt-[16px] bg-gradient-to-t from-[#00215A]">
              تالار گفتگو
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
