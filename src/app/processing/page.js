"use client";


import {
  ChartLine,
  Clock,
  Layout,
  LucideFileText,
  LucideRocket,
  Megaphone,
  PaletteIcon,
  Search,
  Check,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import CircularProgress from "../../components/circularprogress";
import BackgroundParticles from "../../components/BackgroundParticles";


function Page() {
  const [counter, setCounter] = useState(0);

  const list = [
    { text: "Validating Idea", icon: <Search /> },
    { text: "Creating Business Model", icon: <LucideFileText /> },
    { text: "Designing Brand", icon: <PaletteIcon /> },
    { text: "Building Financial Plan", icon: <ChartLine /> },
    { text: "Structuring Website", icon: <Layout /> },
    { text: "Planning Marketing", icon: <Megaphone /> },
    { text: "Preparing Growth Strategy", icon: <LucideRocket /> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const activeStep = Math.min(
    Math.floor(counter / (100 / list.length)),
    list.length - 1,
  );

  return (
    <div className=" w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900">
    <BackgroundParticles  />
    
      <div className="absolute left-10 top-28">
        <div className="flex flex-col">
          {list.map((item, index) => {
            const completed = index < activeStep;
            const active = index === activeStep;

            return (
              <div key={item.text} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`
            h-16 w-16 rounded-full flex items-center justify-center
            transition-all duration-700 shrink-0
            ${
              completed
                ? "bg-green-500 text-white"
                : active
                  ? "bg-cyan-400 text-white shadow-[0_0_35px_#22d3ee] animate-pulse"
                  : "bg-[#614986] text-gray-300"
            }
          `}
                  >
                    {completed ? <Check size={28} /> : item.icon}
                  </div>

                  {index !== list.length - 1 && (
                    <div
                      className={`w-1 h-8 ${
                        completed ? "bg-green-500" : "bg-white/20"
                      }`}
                    />
                  )}
                </div>

                <div className="h-16 flex items-center">
                  <h3
                    className={`font-semibold text-sm whitespace-nowrap ${
                      completed || active ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {item.text}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center p-4">
        <div className="relative flex justify-center items-center m-2">
          
          <div className="absolute w-32 h-32 rounded-full border-2 bg-transparent border-[#0EB0BD] animate-ping bg-[#0EB0BD]"></div>
          <div className="w-32 h-32 bg-[#0EB0BD] flex items-center justify-center rounded-full animate-pulse"></div>
          <img
            src="./images/mlogo.png"
            className="h-16 w-16 z-40 absolute"
          />
        </div>

        <h1 className="font-bold text-white text-5xl pt-8 mb-4">
          Building Your Business...
        </h1>

        <p className="text-gray-300">{list[activeStep]?.text}...</p>

        <CircularProgress percentage={counter} />

        <div className="flex items-center justify-center gap-4 mt-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="h-3 w-3 rounded-full bg-teal-400 animate-bounce"
              style={{
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>

        <div className="mt-10 flex gap-2 justify-center items-center">
          <Clock className="text-teal-400 size-5" />
          <span className="text-gray-400">This usually takes 2-3 minutes</span>
        </div>

        <div className="mt-10 flex gap-2 justify-center items-center">
          <p className="text-gray-400 text-sm">💡</p>
          <p className="text-gray-400 text-sm">
            Did you know? 90% of startups fail due to lack of market research
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
