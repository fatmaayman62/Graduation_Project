import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const sampleData = [
  { name: "Sat", currentOrders: 45, previousOrders: 30 },
  { name: "Sun", currentOrders: 40, previousOrders: 35 },
  { name: "Mon", currentOrders: 30, previousOrders: 25 },
  { name: "Tue", currentOrders: 50, previousOrders: 40 },
  { name: "Wed", currentOrders: 35, previousOrders: 20 },
  { name: "Thu", currentOrders: 48, previousOrders: 45 },
  { name: "Fri", currentOrders: 42, previousOrders: 38 },
];

export default function WeekOrders() {
  return (
    <div style={{ width: "100%", height: "400px" }} className="mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sampleData}
          margin={{ top: 12, right: 0, left: 0, bottom: 8 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} domain={[0, 50]} />
          <Tooltip formatter={(value) => [`${value} orders`, "Orders"]} separator=" : " />
          <Legend />

          <Line
            type="monotone"
            dataKey="currentOrders"
            name="This Week"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 8 }}
          />

          <Line
            type="monotone"
            dataKey="previousOrders"
            name="Last Week"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}