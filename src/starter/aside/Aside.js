import React from "react";
import yoga from "../../assets/icons/yoga.svg";
import swim from "../../assets/icons/swim.svg";
import bike from "../../assets/icons/bike.svg";
import strong from "../../assets/icons/strong.svg";

const Aside = () => {
  return (
    <nav className="aside bg-main-color h-screen flex flex-col items-center justify-end">
      <div className="box-buttons w-full flex flex-col items-center gap-y-xl">
        <button className="w-fit">
          <img src={yoga} alt="" />
        </button>
        <button className="w-fit">
          <img src={swim} alt="" />
        </button>
        <button className="w-fit">
          <img src={bike} alt="" />
        </button>
        <button className="w-fit">
          <img src={strong} alt="" />
        </button>
      </div>
      <span className=" text-white font-medium text-xss">
        Copyright, SportSee 2020
      </span>
    </nav>
  );
};

export default Aside;
