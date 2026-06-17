"use client";

import {
  Label,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartContainer } from "@/components/ui/chart";

export default function CircularProgress({ percentage }) {
  const chartData = [
    {
      name: "progress",
      value: percentage,
      fill: "#08B6CD",
    },
  ];

  const chartConfig = {
    progress: {
      label: "Progress",
      color: "#08B6CD",
    },
  };

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto h-[350px] w-[350px]  "
    >
      <RadialBarChart
        data={chartData}
        startAngle={90}
        endAngle={-270}
        innerRadius={120}
        outerRadius={140}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          polarRadius={[140, 120]}
          className="first:fill-[#653592] last:fill-[#581C87]"
        />

        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />

        <RadialBar dataKey="value" fill="#08B6CD" cornerRadius={12} />

        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) {
                return null;
              }

              return (
                <text
                  x={viewBox.cx}
                  y={viewBox.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan
                    x={viewBox.cx}
                    y={viewBox.cy - 5}
                    fill="white"
                    fontSize="48"
                    fontWeight="700"
                  >
                    {percentage}%
                  </tspan>

                  <tspan
                    x={viewBox.cx}
                    y={viewBox.cy + 38}
                    fill="#D1D5DB"
                    fontSize="18"
                  >
                    Complete
                  </tspan>
                </text>
              );
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
