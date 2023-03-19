"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {MdClose} from "react-icons/all";

function NavSlim() {

  const router = useRouter();

  return (

    <div className=" hidden md:grid grid-rows-7 h-screen  select-none	 font-pirata font-bold text-2xl py-2 md:absolute  md:top-0  md:right-0 px-2 select-none bg-[#f8f9fa]">


        <h2
        className="hover:text-[#8a929a] bg-red  pl-5  text-3xl"
        onClick={() => router.push("/")}
      >
        Levi
      </h2>
      <div className="pl-5 grid grid-rows-6 font-poppins font-normal  gap-4  ">
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
      <span className="border-4 border-black hover:text-[#8a929a]  hover:border-[#8a929a]  font-poppins h-fit font-normal mr-4 flex justify-center items-center rounded">
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
  );
}

export default NavSlim;
