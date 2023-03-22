import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-white py-4 font-pirata">
      <div className="hidden md:grid md:grid-cols-3 ">
        <p className=" text-2xl ml-[10%] my-auto">Levi Inc</p>

        <div className="font-roboto">
          <p className="sm:text-center font-pirata text-white">Blog Updates</p>
          <span>
            <form className="flext grid grid-rows-2 md:inline mx-auto ">
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-transparent w-full md:w-[60%] focus:border-blue-500 placeholder:text-white/90 p-2 h-[3rem]
                 text-white font-bold focus:outline-none border-white border-4"
              />
              <button className="text-black font-bold p-0 md:p-2 text-center mx-auto md:mx-0 my-2 
              md:my-0 border-4 bg-white border-white h-10 md:h-[3.0rem] w-fit">
                Subscribe
              </button>
            </form>
          </span>
        </div>
        <Image
          alt="logo"
          height="2000"
          width="2000"
          className="w-10 md:w-20 ml-[70%] my-auto"
          src="/circle.png"
        />
      </div>
      <div className="md:hidden border-4 ">
        <div className="font-roboto">
          <p className="text-center font-pirata text-white">
            Blog <span className="text-blue-500">U</span>pdates
          </p>
          <span>
            <form className="flext grid grid-rows-2 md:inline mx-auto ">
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-transparent place-self-center w-[80%] placeholder:text-white/90 p-2 h-[3rem] text-white font-bold focus:outline-none border-white border-4"
              />
              <button className="text-white  font-pirata font-bold place-self-center md:p-2 text-center mx-auto px-2 my-2 border-4 bg-transparent border-white h-10  w-fit">
                <span className="text-blue-500">S</span>ubscribe
              </button>
            </form>
          </span>
        </div>
        <div className="grid grid-cols-2 mt-3 border-t-4">
          <div className="border-r-4">
            {" "}
            <p className=" text-2xl ml-[30%]">Levi Inc</p>
          </div>
          <Image
            alt="logo"
            height="2000"
            width="2000"
            className="w-10  ml-[50%] "
            src="/circle.png"
          />
        </div>
      </div>
    </footer>
  );
}
