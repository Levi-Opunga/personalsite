"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {MdClose} from "react-icons/all";

function NavSlim() {

  const router = useRouter();

  return (
    <>
      <div className=" hidden md:grid grid-rows-6 h-screen font-pirata font-bold text-2xl py-2 md:absolute w-[20%] md:top-0  md:left-0  select-none bg-[#f8f9fa]">
        <h2
          className="hover:text-[#8a929a] bg-red  pl-5   text-3xl"
          onClick={() => router.push("/")}
        >
          Levi
        </h2>
        <div className="pl-5 grid grid-rows-6 row-span-4 font-poppins font-normal  gap-4  ">
          <span className="w-fit">
            <p className="peer hover:text-[#8a929a] ">Blog</p>
            <hr className="invisible border-[#8a929a]  peer-hover:transition border-2 my-1 peer-hover:visible peer-hover:ease-in-out peer-hover:duration-[3000ms] " />
          </span>
          <span className="w-fit " onClick={(e) => router.push("/projects")}>
            <p className="peer hover:text-[#8a929a] ">Projects</p>
            <hr className="invisible border-[#8a929a]  peer-hover:transition border-2 my-1  peer-hover:visible peer-hover:ease-in-out peer-hover:duration-[3000ms] " />
          </span>
          <span className="w-fit" onClick={() => router.push("resume")}>
            <p className="peer hover:text-[#8a929a] ">Resume</p>
            <hr className="invisible border-[#8a929a] peer-hover:transition border-2 my-1  peer-hover:visible peer-hover:ease-in-out peer-hover:duration-[3000ms] " />
          </span>
        </div>
        <span className="border-4 border-black hover:text-[#8a929a]  hover:border-[#8a929a]  font-poppins w-fit h-fit ml-2 font-normal mr-2 flex justify-center items-center rounded">
          <p className="p-1">Contacts</p>
        </span>
        <span className="rounded-full w-fit h-fit ml-10 border-black hover:border-[#8a929a] border-4">
          <Image
            alt="logo"
            height="200"
            width="200"
            className="w-10"
            src="/whitecircle.png"
          />
        </span>
      </div>

      <>
        <div className=" md:hidden flex flex-row mx-2 items-center font-pirata bg-[#f8f9fa] font-bold text-sm select-none	 ">
          <h2 className="text-2xl basis-1/6" onClick={() => router.push("/")}>
            Levi
          </h2>
          <div className="mt-3 flex flex-row font-poppins font-normal  gap-3 basis-3/5 ">
            <span>
              <p className="peer">Blog</p>
              <hr className="invisible border-blue-500 peer-hover:transition border-2 my-1 mx-1 peer-hover:visible peer-hover:ease-in-out peer-hover:duration-[3000ms] " />
            </span>
            <span onClick={(e) => router.push("/projects")}>
              <p className="eer">Projects</p>
              <hr className="invisible border-blue-500 peer-hover:transition border-2 my-1 mx-1 peer-hover:visible peer-hover:ease-in-out peer-hover:duration-[3000ms] " />
            </span>
            <span onClick={() => router.push("resume")}>
              <p className="eer">Resume</p>
              <hr className="invisible border-blue-500 peer-hover:transition border-2 my-1 mx-1 peer-hover:visible peer-hover:ease-in-out peer-hover:duration-[3000ms] " />
            </span>
          </div>
          <span className="border-2 font-poppins font-normal mr-4 flex justify-center items-center rounded">
            <p className="p-1">Contacts</p>
          </span>
          <div className="rounded-full border-4">
            <Image
              alt="logo"
              height="200"
              width="200"
              className="w-8"
              src="/circle.png"
            />
          </div>
        </div>
      </>
    </>
  );
}

export default NavSlim;
