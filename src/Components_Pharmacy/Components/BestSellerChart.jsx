import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "vitamin C", value: 20 },
  { name: "vitamin A", value: 15 },
  { name: "vitamin B", value: 8 },
  { name: "vitamin D", value: 11 },
  { name: "vitamin E", value: 30 },
];

export default function BestSellerChart() {
  return (
    <div className="mx-auto" style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4f46e5" barSize={40} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
