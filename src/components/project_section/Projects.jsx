import React from "react";
import "./style.css";
import Project_card from "../project_card/Project_card";
import first from "../../images/project.png";

const Projects = () => {
  const projects = [
    {
      img: first,
      langs: ["html", "CSS", "JavaScript"],
      title: "ChartNote",
      disc: "Microsoft servers hosting",
    },
    {
      img: first,
      langs: ["html", "CSS", "JavaScript", "reactJs"],
      title: "ChartNote",
      disc: "Microsoft servers hosting",
    },
    {
      img: first,
      langs: ["html", "CSS", "JavaScript", "tailwind"],
      title: "ChartNote",
      disc: "Microsoft servers hosting",
    },
  ];
  return (
    <>
      <div className="px-[15rem] max-w-[1560px] mx-auto mt-10 py-10">
        {/* top */}
        <div className="flex  justify-between items-center gap-5">
          {/* left */}
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#c778dd]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#c778dd]"></div>
          </div>
          {/* right */}
          <div className="text-white font-medium">
            <a>
              <span>view all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {projects.map(({ img, langs, title, disc }) => {
            return (
              <>
                {/* cards */}
                <Project_card
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;



