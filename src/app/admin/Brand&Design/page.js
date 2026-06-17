"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { RiRefreshLine } from "react-icons/ri";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { RiLeafLine } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import { IoFlashOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
function Page() {
  let dummyName = [
    {
      title: "Eco Delivery",
      desc: "Sustainable food, delivered green",
      active: true,
    },
    { title: "GreenBite", desc: "Taste the future of delivery", active: false },
    { title: "EarthEats", desc: "Good food, better planet", active: false },
  ];

  let [brandname, setBrandname] = useState(dummyName);

  let color = [
    { text: "Primary", color: "#10B981" },
    { text: "Secondary", color: "#14B8A6" },
    { text: "Accent", color: "#06B6D4" },
    { text: "Dark", color: "#1F2937" },
    { text: "Light", color: "#F3F4F6" },
  ];

  let BrandVioce = [
    { text: "Eco-Conscious", icon: <RiLeafLine />, color: "from-green-500" },
    { text: "Trustworthy", icon: <GoShieldCheck />, color: "from-teal-500" },
    { text: "Modern", icon: <IoFlashOutline />, color: "from-cyan-500" },
    { text: "Friendly", icon: <FaRegHeart />, color: "from-pink-500" },
  ];

  let BrandApp = [
    {
      img: "/images/img1.jpg",
      title: "Business Cards",
      desc: "Professional contact cards",
    },
    {
      img: "/images/img2.jpg",
      title: "Vehicle Branding",
      desc: "Delivery fleet design",
    },
    {
      img: "/images/img3.jpg",
      title: "Packaging Design",
      desc: "Sustainable containers",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 p-5 sm:p-8 ">
      <div className="flex justify-between items-center mb-8 flex-wrap">
        <div>
          <h2 className="text-gray-900 text-3xl font-bold">Brand & Design </h2>
          <p className="text-gray-600 mt-2">
            Your complete brand identity package
          </p>
        </div>

        <div className="flex md:block justify-end items-end mt-7 sm:mt-0 w-full md:w-auto  ">
          <button className="cursor-pointer  bg-gradient-to-r p-4 gap-3 from-teal-500 to-cyan-500 rounded-2xl font-semibold text-white flex justify-center items-center">
            <FaDownload />
            Download Brand kit
          </button>
        </div>
      </div>

      <Card className={"mt-4 mb-6 p-6 rounded-2xl"}>
        <CardHeader>
          <CardTitle className={"text-xl font-bold text-gray-900 mb-3 "}>
            Brand Name Options
          </CardTitle>
        </CardHeader>
        <CardContent className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 "}>
          {brandname.map((item, idx) => (
            <Card
              key={idx}
              onClick={() =>
                setBrandname(
                  brandname.map((name, i) => ({
                    ...name,
                    active: i === idx,
                  })),
                )
              }
              className={`py-5  sm:p-6  cursor-pointer  transition-all  border-2 border-gray-200 ease-in-out   ${item.active ? "bg-teal-50  border-teal-500  " : "   hover:border-teal-300"}`}
            >
              <CardHeader>
                <CardTitle className={"text-xl font-bold text-gray-900 mb-2 "}>
                  {item.title}
                </CardTitle>
                <CardDescription>{item.desc}</CardDescription>
                <CardAction>
                  {item.active && (
                    <IoCheckmarkCircle className="text-teal-500 size-6" />
                  )}
                </CardAction>
              </CardHeader>
            </Card>
          ))}
        </CardContent>
        <CardFooter className={"border-0 bg-white"}>
          <button className="whitespace-nowrap text-teal-500 px-4 py-2 font-medium transition-all cursor-pointer flex justify-between items-center gap-2 hover:bg-teal-50 rounded-lg">
            <RiRefreshLine />
            Generate More Options
          </button>
        </CardFooter>
      </Card>

      <Card className={"mt-4 mb-6 p-6 rounded-2xl"}>
        <CardHeader>
          <CardTitle className={"text-xl font-bold text-gray-900 mb-3 "}>
            Logo Design
          </CardTitle>
        </CardHeader>
        <CardContent className={"grid  sm:grid-cols-2 gap-4 "}>
          <Card className={`p-6 bg-gradient-to-br from-gray-50 to-white    `}>
            <CardHeader>
              <CardTitle className={"text-xl font-bold text-gray-900 mb-2 "}>
                Light Background
              </CardTitle>
            </CardHeader>

            <CardContent>
                      <div className="rounded-xl p-6 sm:p-12 shadow-inner bg-white flex justify-center items-center">           
         <img src="/images/light-Logo.jpg"  className="max-h-48 max-w-full object-contain"></img>

              </div>
            </CardContent>
          </Card>

          <Card
            className={`p-6 bg-gradient-to-br from-gray-800 to-gray-900   `}
          >
            <CardHeader>
              <CardTitle className={"text-xl font-semibold text-white mb-2 "}>
                Dark Background
              </CardTitle>
            </CardHeader>
            <CardContent>
<div className="rounded-xl p-6 sm:p-12 shadow-inner bg-gray-900 flex justify-center items-center">         <img src="/images/dark-logo.jpg"  className="max-h-48 max-w-full object-contain"></img>
              </div>
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className={"border-0 bg-white gap-5 flex-wrap"}>
          <button className="text-gray-900 px-4 py-2 font-medium transition-all ease-in-out cursor-pointer flex justify-between items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
            <RiRefreshLine />
            Regenerate Logo
          </button>

          <button className="text-gray-900 px-4 py-2 font-medium transition-all ease-in-out cursor-pointer flex justify-between items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
            <FiEdit3 />
            Customize
          </button>
        </CardFooter>
      </Card>

      <Card className={"mt-4 mb-6 p-6 rounded-2xl"}>
        <CardHeader>
          <CardTitle className={"text-xl font-bold text-gray-900 mb-3 "}>
            Color Palette
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {color.map((item, idx) => (
              <div
                key={idx}
                className="justify-center flex items-center flex-col gap-2"
              >
                <div
                  className="rounded-xl h-22 w-22 sm:h-32 sm:w-32 hover:scale-105 transition-transform shadow-md ease-in"
                  style={{ backgroundColor: item.color }}
                ></div>
                <h2 className="text-sm font-semibold">{item.text}</h2>
                <p className="text-xs font-mono  text-gray-600">{item.color}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className={"mt-4 mb-6  py-6 px-3 sm:p-6 rounded-2xl"}>
        <CardHeader>
          <CardTitle className={"text-xl whitespace-nowrap font-bold text-gray-900 mb-3 "}>
            Brand Voice & Personality
          </CardTitle>
        </CardHeader>

        <CardContent className={"grid-cols-2 sm:grid-cols-4 grid gap-4"}>
          {BrandVioce.map((item, idx) => (
            <div key={idx} className=" py-6 px-3 sm:p-6 bg-gray-50 rounded-xl text-center">
              <div
                className={`w-16 h-16 text-white text-2xl bg-gradient-to-br ${item.color}  to-white rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                {item.icon}
              </div>

              <h3 className="font-bold text-gray-900">{item.text}</h3>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className={"mt-4 mb-6 py-6 px-3 sm:p-6  rounded-2xl"}>
        <CardHeader>
          <CardTitle className={"text-xl font-bold text-gray-900 mb-3 "}>
            Typography
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="rounded-xl bg-gray-50  py-6 px-3 sm:p-6 space-y-3">
            <div className=" flex justify-between items-center mb-4">
              <h3 className="text-gray-900 font-semibold ">Primary Font</h3>
              <span className="text-sm  text-gray-600">Inter</span>
            </div>

            <h1 className="text-xl  whitespace-nowrap sm:text-4xl text-gray-900 font-bold">
              The quick brown fox
            </h1>
            <h2 className="text-lg sm:text-2xl text-gray-800 font-semibold">
              The quick brown fox
            </h2>
            <h3 className="text-sm sm:text-lg text-gray-700 ">The quick brown fox</h3>
            <h4 className="text-xs sm:text-sm text-gray-600 ">The quick brown fox</h4>
          </div>
        </CardContent>
      </Card>

      <Card className={"mt-4 mb-6 py-6 px-3 sm:p-6  rounded-2xl"}>
        <CardHeader>
          <CardTitle className={"text-xl font-bold text-gray-900 mb-3 "}>
            Brand Applications
          </CardTitle>
        </CardHeader>

        <CardContent className={"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-4 "}>
          {BrandApp.map((item, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-xl ">
              <div className="aspect-video rounded-lg bg-white shadow-md flex justify-center items-center mb-4">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={item.img}
                ></img>
              </div>

              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600"> {item.desc}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;