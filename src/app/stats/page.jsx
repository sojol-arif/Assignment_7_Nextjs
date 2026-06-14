"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { useContext } from "react";
import { ThemeContext } from "@/context/TimelineProvider";

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = () => null;

const CustomLegend = ({ payload }) => {
  return (
    <div className="flex items-center justify-center gap-5 mt-4">
      {payload.map((entry) => (
        <div key={entry.value} className="flex items-center gap-1.5">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-gray-500">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function InteractionTypeChart() {
  const { timelineData, setTimelineData } = useContext(ThemeContext);
  console.log(timelineData, 'TimelineData from Charts Stats page');

  const textData = timelineData.filter(t => t.clicked == 'text');
  const callData = timelineData.filter(t => t.clicked == 'call');
  const videoData = timelineData.filter(t => t.clicked == 'video');

  const data = [
    { name: "Text", value: textData.length, color: "#7C3AED" },
    { name: "Call", value: callData.length, color: "#1B4332" },
    { name: "Video", value: videoData.length, color: "#4ADE80" },
  ];

  console.log(data);

  return (
    <div className="max-w-[1150px] mx-auto py-15 md:py-20 px-5 w-full">
      <h1 className="text-[36px] md:text-[48px] font-bold mb-2">Friendship Analytics</h1>
      <div className="bg-white rounded-2xl p-6 shadow-sm w-full w-full">
        <h2 className="text-base font-semibold text-[#1B4332] mb-4">
          By Interaction Type
        </h2>

        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={105}
              paddingAngle={4}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value}%`, name]}
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                fontSize: "13px",
              }}
            />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}