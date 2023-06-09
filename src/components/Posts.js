import { useEffect } from "react";
import c1 from "../assests/home/c1.jpg";
import c2 from "../assests/home/c2.jpg";
import c3 from "../assests/home/c3.jpg";

const Posts = (props) => {
  useEffect(() => {
    const slider = document.getElementById("slider");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });
  });
  return (
    <div className="flex items-center mt-[40px] md:mt-[56px] ">
      <div
        id="slider"
        className="flex flex-col  mr-[24px] ml-[24px]  bg-white md:block w-full md:max-h-[444px] overflow-y-hidden md:overflow-x-scroll whitespace-nowrap scrollbar-hide md:mr-[128px] md:ml-[128px]"
      >
        <div className="relative w-[327px] h-[325px] mb-[24px]  mx-auto  inline-block md:mr-[41px] md:ml-[-241px] md:w-[353px] md:h-[432px]  md:mt-[2px]">
          <img
            src={c1}
            className=" w-full h-full rounded-[10px]"
            alt="card_image"
          />
          <p className="absolute bottom-0 text-white right-4">
            adsfkjhfas;fjasdf
          </p>
        </div>

        <div className="w-[327px] h-[325px] mb-[24px]  mx-auto  inline-block md:mr-[41px] md:ml-[41px] md:w-[353px] md:h-[432px]  md:mt-[2px]">
          <img
            src={c2}
            className="w-full h-full rounded-[10px]"
            alt="card_image"
          />
        </div>
        <div className="w-[327px] h-[325px] mb-[24px]  mx-auto  inline-block md:mr-[41px] md:ml-[41px] md:w-[353px] md:h-[432px]  md:mt-[2px]">
          <img
            src={c3}
            className="w-full h-full rounded-[10px]"
            alt="card_image"
          />
        </div>
        <div className="w-[327px] h-[325px] mb-[24px]  mx-auto  inline-block md:mr-[41px] md:ml-[41px] md:w-[353px] md:h-[432px]  md:mt-[2px]">
          <img
            src={c1}
            className="w-full h-full rounded-[10px]"
            alt="card_image"
          />
        </div>
        <div className="w-[327px] h-[325px] mb-[24px]  mx-auto  inline-block md:mr-[41px] md:ml-[41px] md:w-[353px] md:h-[432px]  md:mt-[2px]">
          <img
            src={c2}
            className="w-full h-full rounded-[10px]"
            alt="card_image"
          />
        </div>
      </div>
    </div>
  );
};

export default Posts;
