"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courses from "../data/courses.json"

console.log(courses);
courses.map((ele) => console.log(ele))

interface Props {
    heading: string;
    desc: string;
    price: number
}
  


  const CardSection: React.FC<Props> = ({ heading, desc, price }) => {
    return (
      <div>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-center">{heading}</h1>
            <p className="text-center">{desc}</p>
            <span className="border border-solid border-red-600 rounded-3xl p-3 cursor-pointer">{`$${price}`}</span>
        </BackgroundGradient>
      </div>
    );
  };

export default CardSection