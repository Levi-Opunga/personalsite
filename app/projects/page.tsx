"use client";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage"; // will return static version on server and "live" version on client
import { title } from "process";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGithub,FaWeibo } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

function page() {
  const SEL = "custom-section";
  const SECTION_SEL = `.${SEL}`;
  const projects: ProjectData[] = [
    {
      category: "Ecommerce Cart",
      firstdetails:
        "A frontend ui for an e commerce product page with some apects of state using the context api",
      seconddetails: "A Mobile view of the site showing responsive design",
      oneword: "Ecommerce Site",
      tags: ["NextJs", "Tailwind "],
      imageOne: "/ecommerce.png",
      imageTwo: "/ecomob.png",
      link: "https://frontend-mastery-3-dreewunuf-levi-opunga.vercel.app/",
      github: "https://github.com/Levi-Opunga/Frontend-Mastery-3",
      view:"both"
    },
    
    {
      category: "Text Editor",
      firstdetails:
        "A simple text editor I built using java swing components tha provide the basic editing functionality (theme changing,delete files,create files,java starter code ) in a 12mb package and also includes auto save",
      seconddetails: "The Dark theme view of the website",
      oneword: "Text Editor",
      tags: ["Java", "Swing", "Editor"],
      imageOne: "/editor.png",
      imageTwo: "/lighteditor.png",
      link: "",
      github: "https://github.com/Levi-Opunga/TextEditor",
      view:"desktop"
    },
  ];

  // @ts-ignore
  return (
    <ReactFullpage
      //fullpage options
      // @ts-ignore
      credits={{
        enabled: true,
        label: "fullpageJs",
        position: "left",
      }}
      licenseKey=""
      scrollingSpeed={1000} /* Options here */
      navigation
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {projects.map((project, index) => (
              <div
                className={
                  "section text-center bg-black text-white text-poppins"
                }
                key={index}
              >
                <div className="md:hidden text-white/70 text-xl animate-bounce font-bold pt-4">
                  <p>Swipe </p>
                </div>
                <div className="slide h-full">
                  <div
                    className={`md:grid md:grid-cols-${
                      project.view === "mobile" ? 2 : 3
                    }`}
                  >
                    <div
                      className={`flex justify-center ${
                        project.view === "both" || project.view === "desktop"
                          ? "col-span-2"
                          : "col-span-1"
                      }`}
                    >
                      <Image
                        alt="logo"
                        height="2000"
                        width="1200"
                        className="md:h-[34rem] w-[72] rounded-lg md:w-[98%] md:ml-24"
                        src={project.imageOne}
                      />
                    </div>
                    <div className="col-span-1 mx-4 text-start md:mx-[20%]">
                      {" "}
                      <h1 className="text-4xl md:text-blue-400/95 pb-2 text-white/70 font-poppins font-bold">
                        {project.oneword}
                      </h1>{" "}
                      <div className="flex  flex-grow gap-2 pb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={index}
                            className="border-4 rounded-lg p-1  text-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h1 className="text-lg">{project.firstdetails}</h1>
                      <div>
                        <a href={project.github}>
                          <Button className="text-white" variant="link">
                            <FaGithub className="mr-1"></FaGithub>View On GitHub
                          </Button>
                        </a>
                        {project.link != "" ? (
                          <a href={project.link}>
                            <Button className="text-white" variant="link">
                              <TbWorldWww className="mr-1"></TbWorldWww>View
                              Site
                            </Button>
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide h-full">
                  <div
                    className={`md:grid ${
                      project.view === "mobile"
                        ? "md:grid-cols-2"
                        : "md:grid-cols-3"
                    }`}
                  >
                    <div
                      className={`flex justify-center ${
                        project.view === "both" || project.view === "desktop"
                          ? "col-span-2"
                          : "col-span-1"
                      }`}
                    >
                      {" "}
                      {project.view === "desktop" ? (
                        <Image
                          alt="logo"
                          height="2000"
                          width="1200"
                          className="md:h-[34rem] w-[72] rounded-lg md:w-[98%] md:ml-24"
                          src={project.imageTwo}
                        />
                      ) : (
                        <Image
                          alt="logo"
                          height="2000"
                          width="1200"
                          className="md:h-[34rem] h-[26rem] rounded-md md:ml-24 md:w-[32%] w-72"
                          src={project.imageTwo}
                        />
                      )}
                    </div>
                    <div className="mx-5 mt-2 text-start md:mx-[20%]">
                      {" "}
                      {/* <h1 className="text-4xl md:text-start  text-white/70 font-poppins font-bold">
                        Mobile
                      </h1> */}
                      <div className="flex flex-grow gap-2 pb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={index}
                            className="border-4 rounded-lg p-1  text-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h1 className="text-lg">{project.seconddetails}</h1>
                      <div>
                        <a href={project.github}>
                          <Button className="text-white" variant="link">
                            <FaGithub className="mr-1"></FaGithub>View On GitHub
                          </Button>
                        </a>
                        {project.link != "" ? (
                          <a href={project.link}>
                            <Button className="text-white" variant="link">
                              <TbWorldWww className="mr-1"></TbWorldWww>View
                              Site
                            </Button>
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="slide bg-slate-500"></div> */}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default page;
