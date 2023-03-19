"use client";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage"; // will return static version on server and "live" version on client
import { title } from "process";
import Image from "next/image";

function page() {
  const SEL = "custom-section";
  const SECTION_SEL = `.${SEL}`;
  const projects: ProjectData[] = [
    {
      title: "Ecommerce Cart",
      details:
        "A frontend ui for an e commerce product page with some apects of state using the context api",
      oneword: "Frontend Website",
      tags: ["NextJs", "Tailwind "],
      imageOne: "/ecommerce.png",
      imageTwo: "/ecomob.png",
    },
    // { title: "Mzazi App", details: [], imageOne: "", imageTwo: "" },
    // { title: "The Watchlist", details: [], imageOne: "", imageTwo: "" },
  ];

  // @ts-ignore
  return (
    <ReactFullpage
      //fullpage options
        // @ts-ignore
        credits= {{
          enabled: true,
            label: "Levi",
            position: "left"
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
                  <div className="md:grid md:grid-cols-2">
                    <div className="flex justify-center  ">
                      <a href="https://frontend-mastery-3-dreewunuf-levi-opunga.vercel.app/">
                        <Image
                          alt="logo"
                          height="2000"
                          width="1200"
                          className="md:h-[34rem] w-[72] rounded-lg md:w-[98%] md:ml-24"
                          src={project.imageOne}
                        />
                      </a>
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
                            # {tag}
                          </span>
                        ))}
                      </div>
                      <h1 className="text-lg">{project.details}</h1>
                    </div>
                  </div>
                </div>
                <div className="slide ">
                  <div className="md:grid md:grid-cols-2">
                    <div className="flex justify-center items-center ">
                      <a href="https://frontend-mastery-3-dreewunuf-levi-opunga.vercel.app/">
                        <Image
                          alt="logo"
                          height="2000"
                          width="1000"
                          className="h-[34rem] rounded-md md:ml-20 w-72"
                          src={project.imageTwo}
                        />{" "}
                      </a>
                    </div>
                    <div className="col-span-1">
                      {" "}
                      {/* <h1 className="text-4xl md:text-start  text-white/70 font-poppins font-bold">
                        Mobile
                      </h1> */}
                      <div className="flex flex-grow gap-2 pt-4 justify-center ">
                        {project.tags.map((tag) => (
                          <span
                            key={index}
                            className="border-4 rounded-lg p-1  text-lg"
                          >
                            # {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default page;
