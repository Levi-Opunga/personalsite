"use client"
import React from 'react'
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {MdClose} from "react-icons/all";
import { motion } from "framer-motion";
function Nav() {

    const router = useRouter()
   
  return (
    <>
      <motion.div 
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
        initial={{ scale: 0 }}
        className=" hidden md:flex flex-row mx-8 items-center font-pirata font-bold text-2xl py-2 px-2 select-none	  pb-20"
      >
        <h2 className="text-8xl basis-1/5" onClick={() => router.push("/")}>
          Levi
        </h2>
        <div className="pl-5 flex flex-row font-poppins font-normal  gap-4 basis-3/5 ">
          <span>
            <p className="peer">Blog</p>
            <hr className="invisible border-blue-500 peer-hover:transition border-2 my-1 mx-1 peer-hover:visible peer-hover:ease-in-out peer-hover:duration-[3000ms] " />
          </span>
          <span onClick={(e) => router.push("/projects")}>
            <p className="peer">Projects</p>
            <hr className="invisible border-blue-500 peer-hover:transition border-2 my-1 mx-1 peer-hover:visible peer-hover:ease-in-out peer-hover:duration-[3000ms] " />
          </span>
          <span onClick={() => router.push("resume")}>
            <p className="peer">Resume</p>
            <hr className="invisible border-blue-500 peer-hover:transition border-2 my-1 mx-1 peer-hover:visible peer-hover:ease-in-out peer-hover:duration-[3000ms] " />
          </span>
        </div>
        <span className="border-4 font-poppins font-normal mr-4 flex justify-center items-center rounded">
          <p className="p-1">Contacts</p>
        </span>
        <div className="rounded-full border-4">
          <Image
            alt="logo"
            height="200"
            width="200"
            className="w-10"
            src="/circle.png"
          />
        </div>
      </motion.div>
    </>
  );
}

export default Nav