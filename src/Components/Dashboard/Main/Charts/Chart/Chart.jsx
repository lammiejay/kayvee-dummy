import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
        
    const data = [
      { name: "Sun", value: 1110 },
      { name: "Mon", value: 4230 },
      { name: "Tue", value: 6820 },
      { name: "Wed", value: 5325 },
      { name: "Thu", value: 9120 },
      { name: "Fri", value: 3339 },
      { name: "Sat", value: 7131 },
    ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 15, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2d006f" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#2d006f" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip formatter={(value) => `₦${value.toLocaleString()}.00`} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#4c2c92"
            fillOpacity={1}
            fill="url(#colorValue)"
            // dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart
