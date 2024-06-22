"use client"
import HeroSection from "@/components/HeroSection";
import CardSection from "@/components/CardSection";
import { useState } from "react";

import courses from "../data/courses.json"



export default function Home() {
  return(
    <>
    <main className="h-full felx flex-col justify-center items-center">
        <section className="h-full md:h-[40rem] flex flex-col justify-center items-center gap-5 my-10">
        <HeroSection />
        </section>
        <section className="grid grid-rows-2 grid-cols-3 gap-5 pl-5">
          {courses.map(ele => {
            return <CardSection heading={`${ele.title}`} key={ele.id} desc={ele.desc} price={ele.price}/>
          })}
        </section>
    </main>
    </>
  )
}
