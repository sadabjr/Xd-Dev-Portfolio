import React from "react";
import "./style.css";

const About = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div className="w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            Sadab is a{" "}
            <span className="text-[#c778dd]"> front-end developer</span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="border font-medium border-[#c778dd] py-2 px-4 text-white duration-200 hover:bg-[#c778dd33]">
            Contact me!!
          </button>
        </div>
        <div className="mx-auto">
          <div className="">
            <img src={require("../../images/man.png")} alt="" />
          </div>
          <div className="border flex items-center border-[#abb2bf] py-2 text-[#abb2bf] gap-2">
            <div className="w-4 h-4 bg-[#c778dd]"></div>
            <div className="">
              Currently working on <span className="text-white">portfolio</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-10">
        <img
          className="mx-auto"
          src={require("../../images/quote.png")}
          alt=""
        />
      </div>
    </>
  );
};

export default About;
