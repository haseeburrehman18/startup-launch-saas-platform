"use client";
import React, { useEffect, useState } from "react";
import {
  RiMenuFold2Line,
  RiMenuFoldLine,
  RiTaskLine,
  RiMoneyDollarCircleLine,
  RiBillLine,
  RiLayoutLine,
  RiRocketLine,
  RiPriceTag3Line,
} from "react-icons/ri";
import { MdOutlineArrowForward, MdOutlineColorLens, MdOutlineDashboard } from "react-icons/md";
import { TbSpeakerphone, TbUsersGroup } from "react-icons/tb";
import { CgLoadbarSound } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { GrAnnounce, GrDocumentText } from "react-icons/gr";
import { BiLineChart } from "react-icons/bi";
import { Separator } from "../components/ui/separator";
import { IoSettingsOutline } from "react-icons/io5";

function SideNavBar({ setnavOpen, nav }) {
  const [admin, setadmin] = useState(false);

  const path = usePathname();
  const segment = path.split("/").filter(Boolean);
  useEffect(() => {
    if (segment.includes("admin")) {
      setadmin(true);
    }
  }, [path]);
  const menulist = [
    { icon: MdOutlineDashboard, label: "Overview", page: "/admin/Overview" },
    { icon: FiSearch, label: "Idea Validation", page: "/admin/IdeaValidation" },
    { icon: GrDocumentText, label: "Business Plan", page: "/admin/Businessplan" },
    { icon: MdOutlineColorLens, label: "Brand & Design", page: "/admin/Brand&Design" },
    { icon: BiLineChart, label: "Financials", page: "/admin/Financials" },
    { icon: RiLayoutLine, label: "Website", page: "/admin/Website" },
    { icon: TbSpeakerphone, label: "Marketing", page: "/admin/Marketing" },
    { icon: RiRocketLine, label: "Launch Plan", page: "/admin/LaunchPlan" },
    { icon: CgLoadbarSound, label: "Growth & Scaling", page: "/admin/Growth&Scaling" },
  ]


  return (
    <aside
      className={`
    transition-all duration-500 ease-in-out  bg-white border  border-gray-200 dark:bg-gray-800 dark:border-gray-700 min-h-full overflow-hidden z-50
    fixed lg:relative 
    ${nav ? "w-[70%] sm:w-[50%] md:w-[40%] lg:w-[16.6%]" : "w-0 lg:w-[5%]"}
    ${nav ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
  `}
    >
      <div className="flex justify-between  h-18 py-4 px-5  items-center">
        {nav ? (
          <>
            <h1 className="text-3xl text-linear-to-r from-[#15ccbd] to-[#17b7d0] font-bold transition-all duration-500 ease-in-out  ">
              Solve-Sphere
            </h1>
            <RiMenuFoldLine
              className="text-black dark:text-white text-xl  cursor-pointer"
              onClick={() => setnavOpen(false)}
            />
          </>
        ) : (
          <RiMenuFold2Line
            className="text-black dark:text-white text-xl  cursor-pointer "
            onClick={() => setnavOpen(true)}
          />
        )}
      </div>
      <hr className="text-gray-200 my-4"></hr>
      <div className="text-gray-600 dark:text-gray-400 ps-2 pt-2">
        {menulist.map((menu, idx) => (
          <Link
            href={menu.page}
            key={idx}
            className="flex justify-start gap-4 font-semibold text-lg transition-all duration-200 ease-in h-15 ps-4 pe-4 py-4 items-center hover:bg-linear-to-r from-[#15ccbd] to-[#17b7d0] rounded-xl mr-2 hover:border-r-4  hover:text-white "
          >
            <div className="w-6 flex justify-center">
              <menu.icon className="min-w-6" />
            </div>


            {nav && (
              <h2 className="font-sans transition-all duration-500 ease-in-out ">
                {menu.label}
              </h2>
            )}
          </Link>
        ))}
        <Separator />
        <Link
          href={"/admin/set-in"}

          className="mt-7 flex justify-start gap-4 font-semibold text-lg transition-all duration-200 ease-in h-15 ps-4 pe-4 py-4 items-center hover:bg-linear-to-r from-[#15ccbd] to-[#17b7d0] rounded-xl mr-2 hover:border-r-4  hover:text-white "
        >
          <div className="w-6 flex justify-center">
            <RiPriceTag3Line className="min-w-6" />
          </div>


          {nav && (
            <h2 className="font-sans transition-all duration-500 ease-in-out ">
              Pricing
            </h2>
          )}
        </Link>

        <Link
          href={"/admin/set-in"}

          className="flex justify-start gap-4 font-semibold text-lg transition-all duration-200 ease-in h-15 ps-4 pe-4 py-4 items-center hover:bg-linear-to-r from-[#15ccbd] to-[#17b7d0] rounded-xl mr-2 hover:border-r-4  hover:text-white "
        >
          <div className="w-6 flex justify-center">
            <IoSettingsOutline className="min-w-6" />
          </div>


          {nav && (
            <h2 className="font-sans transition-all duration-500 ease-in-out ">
              Settings
            </h2>
          )}
        </Link>
        <Separator />

      </div>
    </aside>
  );
}

export default SideNavBar;