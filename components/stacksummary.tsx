"use client"
import React, { Component } from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const StackSummary = () => {
 const [ref, inView] = useInView({
   threshold: 0.8, // trigger when 50% of the element is in view
   triggerOnce: true, // only trigger the animation once
 });
  
  return (
    <>
      <div className="md:grid mt-11 hidden  grid-cols-2 md:mx-32">
        <motion.div
          // whileInView={{visibility:"visible"}}
          // transition={{ duration: 0.7 }}
          // initial={{ visibility: "hidden" }}
          ref={ref}
          animate={{ x: inView ? 0 : -200, y: inView ? 0 : 100 }}
          transition={{ duration: 0.7 }}
          className="text-start mx-16 my-auto"
        >
          <h2 className="text-blue-400 font-fira uppercase  text-2xl font-bold">
            My Stack
          </h2>
          <div className="text-3xl pt-2 font-fira font-bold">
            <p>Frontend Development in React and Next JS</p>
            <p>Backend in Spring Boot</p>
            <p>Mobile in Kotlin and React Native</p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          animate={{ x: inView ? 0 : 200, y: inView ? 0 : 100 }}
          transition={{ duration: 0.7 }}
          className="text-lg pb-5  px-6"
        >
          <p className="font-fira pt-10 text-white/50">
            I write backend code in Java and Kotlin using the spring boot
            framework aimed at building sytems using microservices
            architecture.I perfer eventually porting builds to native using{" "}
            <b className="font-poppins">GraalVm</b> to allow for truly cloud
            native microservices. For light backend sevices I use{" "}
            <b className="font-poppins">Ktor</b> to quickly scafold
            functionality.
            <b> Postgresql</b> is my go to database for almost every project
            except on mobile where prefer <b>MongoDb Realm</b> for multiplatform
            builds and RoomDb for native android. Frontend is primarily{" "}
            <b>React </b>using
            <b> Nextjs</b> though I also have experience in <b>Angular</b> .I
            prefer
            <b className="text-blue-400"> Typescript</b> for everthing ,I guess
            I&apos;m a stickler for static typing from the JVM. For
            multiplatform development Kotlin is my favorite for doing android
            and desktop applications with <b>JetPack Compose</b>, I love the
            declarative UI design a much better developer experience than{" "}
            <b>swing</b> or <b>javafx</b>. For mobile on IOs i use React Native
            on Expo for development and <b>Solito</b> when I want to share a
            codebase between mobile and web.
          </p>
        </motion.div>
      </div>
      <div className="md:hidden mt-12  grid-cols-2 md:mx-32">
        <motion.div
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          initial={{ x: -2000 }}
          className="text-start mx-16 my-auto"
        >
          <h2 className="text-blue-400 font-fira uppercase  text-2xl font-bold">
            My Stack
          </h2>
          <div className="text-3xl pt-2 font-fira font-bold">
            <p>Frontend Development in React and Next JS</p>
            <p>Backend in Spring Boot</p>
            <p>Mobile in Kotlin and React Native</p>
          </div>
        </motion.div>
        <motion.div
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          initial={{ x: 2000 }}
          className="text-lg pb-5  px-6"
        >
          <p className="font-fira pt-10 text-white/50">
            I write backend code in Java and Kotlin using the spring boot
            framework aimed at building sytems using microservices
            architecture.I perfer eventually porting builds to native using{" "}
            <b className="font-poppins">GraalVm</b> to allow for truly cloud
            native microservices. For light backend sevices I use{" "}
            <b className="font-poppins">Ktor</b> to quickly scafold
            functionality.
            <b> Postgresql</b> is my go to database for almost every project
            except on mobile where prefer <b>MongoDb Realm</b> for multiplatform
            builds and RoomDb for native android. Frontend is primarily{" "}
            <b>React </b>using
            <b> Nextjs</b> though I also have experience in <b>Angular</b> .I
            prefer
            <b className="text-blue-400"> Typescript</b> for everthing ,I guess
            I&apos;m a stickler for static typing from the JVM. For
            multiplatform development Kotlin is my favorite for doing android
            and desktop applications with <b>JetPack Compose</b>, I love the
            declarative UI design a much better developer experience than{" "}
            <b>swing</b> or <b>javafx</b>. For mobile on IOs i use React Native
            on Expo for development and <b>Solito</b> when I want to share a
            codebase between mobile and web.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default StackSummary;
