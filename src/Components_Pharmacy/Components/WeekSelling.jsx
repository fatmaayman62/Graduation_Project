import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const data = [
    { name: "Saturday", current: 1200, previous: 900 },
    { name: "Sunday", current: 1500, previous: 1100 },
    { name: "Monday", current: 800, previous: 700 },
    { name: "Tuesday", current: 2100, previous: 1700 },
    { name: "Wednesday", current: 1900, previous: 1800 },
    { name: "Thursday", current: 2500, previous: 2000 },
    { name: "Friday", current: 3000, previous: 2200 }
];

export default function WeekSelling() {
    return (
        <div style={{ width: "100%", height: "400px" }} className="mx-auto">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Legend />
                    
                    <Line
                        type="monotone"
                        dataKey="current"
                        stroke="#4f46e5"
                        strokeWidth={3}
                        activeDot={{ r: 8 }}
                        name="This Week"
                    />

                    <Line
                        type="monotone"
                        dataKey="previous"
                        stroke="#14b8a6"
                        strokeWidth={3}
                        name="Last Week"
                    />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
