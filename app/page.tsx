"use client"
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from './page.module.css'
import Intro from '@/components/intro'
import StackSummary from '@/components/stacksummary'
import Nav from '@/components/nav'
import NavMobile from "@/components/navmobile";
import React, {useState} from "react";
import {FiMenu} from "react-icons/fi";
import "./page.module.css"
import Footer from '@/components/footer'


const inter = Inter({subsets: ['latin']})

export default function Home() {
    const [mobileNavShown, setMobileNavShown] = useState(false);

    return (
      <main
        className={
          "bg-black min-h-screen md:min-h-full select-none text-white w-full " +
          inter.className
        }
      >
        <FiMenu
          className="md:hidden text-white z-20 absolute main top-3 left-3 text-3xl"
          onClick={() => setMobileNavShown(!mobileNavShown)}
        />

        {/*<div className="md:hidden  left-0 bg-black pb-2 top-0 z-30 ">*/}

        {/*        <span className="rounded-full  ">*/}
        {/*<Image*/}
        {/*    alt="logo"*/}
        {/*    height="200"*/}
        {/*    width="200"*/}
        {/*    className="w-10 m-2"*/}
        {/*    src="/whitecircle.png"*/}
        {/*/>*/}
        {/*</span>*/}
        {/*      </div>*/}
        {mobileNavShown && <NavMobile setShown={setMobileNavShown} />}
        <Nav />
        <Intro />
        <StackSummary />
        <Footer/>
      </main>
      
    );
}
