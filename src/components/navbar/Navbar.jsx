import React, { useState } from "react";
import "./style.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#282C33]">
      <div className="px-5 max-w-[1560px] mx-[3rem] flex items-center justify-between pt-6 my-2">
        <div className="left flex gap-2 items-center font-bold text-base text-[#FFFFFF]">
          {/* logo */}
          <div>
            <img src={require("../../images/logo.png")} alt="" />
          </div>
          Sadab
        </div>
        <div className="right flex items-center">
          <div
            className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${
              !toggle
                ? `right-[-100%] top-0 bottom-0`
                : `right-0 top-0 bottom-0`
            }  md:static bg-[#282C33]`}
          >
            <a href="#">
              <li className=" text-[18px] md:text-center my-4 md:my-auto text-[#abb2bf] list-none mx-4">
                <span className="text-[#c778dd] font-medium">#</span>home
              </li>
            </a>
            <a href="#">
              <li className=" text-[18px] md:text-center my-4 md:my-auto text-[#abb2bf] list-none mx-4">
                <span className="text-[#c778dd] font-medium">#</span>works
              </li>
            </a>
            <a href="#">
              <li className=" text-[18px] md:text-center my-4 md:my-auto text-[#abb2bf] list-none mx-4">
                <span className="text-[#c778dd] font-medium">#</span>about-me
              </li>
            </a>
            <a href="#">
              <li className=" text-[18px] md:text-center my-4 md:my-auto text-[#abb2bf] list-none mx-4">
                <span className="text-[#c778dd] font-medium">#</span>contacts
              </li>
            </a>
            <div
              onClick={() => setToggle(false)}
              className="cursor-pointer close absolute block md:hidden right-3 top-3"
            >
              <img src={require("../../images/clsoeBtn.png")} alt="" />
            </div>
          </div>
          {/* close and open button */}
          <div onClick={() => setToggle(true)}>
            <div className="open block md:hidden w-8 cursor-pointer">
              <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#d9d9d9]"></div>
              <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#d9d9d9]"></div>
              <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#694848]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
