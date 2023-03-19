"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Intro from '@/components/intro'
import StackSummary from '@/components/stacksummary'
import Nav from '@/components/nav'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={
        "bg-black min-h-screen md:min-h-full text-white h-[200rem] w-full " +
        inter.className
      }
    >
      <Nav />
      <Intro />
      <StackSummary />
   
    </main>
  );
}
