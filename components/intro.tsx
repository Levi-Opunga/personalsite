import Image from "next/image";
import { DiAndroid, DiHaskell, DiJava, DiLinux, DiVim } from "react-icons/di";
import {
  SiAwslambda,
  SiClojure,
  SiOcaml,
  SiReact,
  SiSpring,
} from "react-icons/si";
import intro from "../app/intro.module.css";

function Intro() {
  return (
    <>
      <div className="md:mx-32 hidden md:block">
        <div className="md:grid md:grid-cols-2 relative gap-3">
          <div className="md:hover:border-[0px] md:rounded-md  h-fit md:hover:bg-blue-600	 shadow-2xl">
            <div className="md:col-span-1  md:border-white md:border-[5px] rounded-sm md:hover:translate-y-4 bg-black md:hover:ease-in-out md:duration-[2000ms] md:transition md:hover:-translate-x-4 shadow-2xl">
              <div className="m-3">
                <div className="-z-10 invisible text-8xl q  relative text-gray-50/10">
                  <h1 className="    rounded-2xl font-fira  absolute font-black">
                    Software Engineer
                  </h1>
                </div>
                <div className=" ">
                  <p className="text-4xl font-bold text-left pb-10">
                    Hey there,{" "}
                  </p>
                  <p className="text-[3.4rem] leading-none font-bold font-roboto text-left">
                    I&apos;m Levi Opunga<b className="text-blue-500">.</b>
                  </p>
                </div>
                <div className="font-fira ">
                  <p className=" text-left pt-3 ">
                    An adventurous <b className="font-medium">Fullstack </b>
                    web <SiSpring className="inline " /> developer, Native{" "}
                    <b>
                      <DiAndroid className="inline text-xl" />
                      android{" "}
                    </b>
                    developer,{" "}
                    <b className="font-medium">
                      a JVM
                      <DiJava className="inline text-3xl" />
                    </b>{" "}
                    enthusiast,{" "}
                    <b>
                      <DiLinux className="inline text-3xl" />
                      Linux
                    </b>{" "}
                    nerd and most importantly a{" "}
                    <b className="font-medium inline ">
                      <DiVim className="inline text-3xl" />
                      fluencer
                    </b>{" "}
                    who loves{" "}
                    <b>
                      <SiAwslambda className="inline " /> functional{" "}
                    </b>{" "}
                    programming and enjoys tackling new challenges and learning
                    new paradigms.
                  </p>
                  <p>
                    At my core I think I&apos;m still just that kid who still
                    enjoys staying up late at night playing on his computer.
                  </p>
                </div>
                <a href="https://levi-opunga.github.io/mindscape">
                  <div className="pt-6 ">
                    <p className="peer">More About Me</p>{" "}
                    <hr className="invisible border-y-2 mt-2 w-32 border-blue-500 peer-hover:visible" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="saturate-50 flex justify-center items-center">
            <Image
              alt="logo"
              height="2000"
              width="2000"
              className=" -mt-24"
              src="/mecut.png"
            />
          </div>
        </div>
      </div>
      <div className="relative back md:hidden">
        <Image
          alt="logo"
          height="2000"
          width="2000"
          className="h-[71vh] -mt-14 grayscale brightness-50 saturate-50 blur-[.5px]  -z-10 bg-black"
          src="/mecut.png"
        />
        <div className="text-center absolute top-[23%]  pt-[34%] ">
          <div className=" ">
            <p className="text-4xl font-bold  pb-1">Hey there, </p>
            <p className="text-[3rem] leading-none font-bold font-roboto ">
              I&apos;m Levi Opunga<b className="text-blue-500">.</b>
            </p>
          </div>
          <div className="font-fira px-3 ">
            <p className=" pt-2 ">
              An adventurous{" "}
              <b className="font-medium">
                Fullstack <SiReact className="inline " />
              </b>
              web <SiSpring className="inline " /> developer, Native{" "}
              <b>
                <DiAndroid className="inline text-xl" />
                android{" "}
              </b>
              developer,{" "}
              <b className="font-medium">
                JVM
                <DiJava className="inline text-3xl" />
              </b>{" "}
              enthusiast,{" "}
              <b>
                <DiLinux className="inline text-3xl" />
                Linux
              </b>{" "}
              nerd and most importantly a{" "}
              <b className="font-medium inline ">
                <DiVim className="inline text-3xl" />
                fluencer
              </b>{" "}
              who loves{" "}
              <b>
                <SiAwslambda className="inline " /> functional{" "}
              </b>{" "}
              programming and enjoys tackling new challenges and learning new
              paradigms.
            </p>
            <p>
              At my core I think I&apos;m still just that kid who still enjoys
              staying up late at night playing on his computer.
            </p>
          </div>
          <div className="pt-6 flex justify-center">
            <div className="border-4 rounded-md border-white bg-blue-500 ">
              <a href="https://levi-opunga.github.io/mindscape">
                <button className="border-4 rounded-md  p-2 -translate-x-2 bg-black -translate-y-2">
                  <p> More About Me</p>
                  {/* <div className="flex justify-center ">
                  {/* <hr className="border-y-2 mb-3 w-32 border-blue-500/90 " /> */}
                  {/* </div> */}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
