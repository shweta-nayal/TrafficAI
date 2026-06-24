import { useEffect, useState } from "react";
import axios from "axios";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = [
  "#2563EB",
  "#EF4444",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
];

const API_BASE = "https://trafficai-z765.onrender.com";

export default function Analytics() {

  const [eventData, setEventData] = useState([]);

  const [manpower, setManpower] = useState([]);

  useEffect(() => {

    axios
      .get(`${API_BASE}/analytics`)
      .then((res) => {

        setEventData(res.data.event_distribution);

        setManpower(res.data.manpower);

      })
      .catch((err) => console.log(err));

  }, []);

  return (

<div id="analytics" className="max-w-7xl mx-auto mt-14 px-8">

<h1 className="text-3xl font-bold text-blue-900 mb-8">

📊 Traffic Analytics Dashboard

</h1>

<div className="grid lg:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl shadow-lg p-6">

<h2 className="text-xl font-semibold mb-5">

Event Distribution

</h2>

<div style={{ width: "100%", height: 320 }}>

<ResponsiveContainer>

<PieChart>

<Pie
data={eventData}
dataKey="value"
nameKey="name"
outerRadius={110}
label
>

{eventData.map((entry, index) => (

<Cell
key={index}
fill={COLORS[index % COLORS.length]}
/>

))}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

</div>

<div className="bg-white rounded-2xl shadow-lg p-6">

<h2 className="text-xl font-semibold mb-5">

Police Deployment by Risk

</h2>

<div style={{ width: "100%", height: 320 }}>

<ResponsiveContainer>

<BarChart data={manpower}>

<CartesianGrid strokeDasharray="3 3" />

<XAxis dataKey="risk" />

<YAxis />

<Tooltip />

<Bar
dataKey="officers"
fill="#2563EB"
radius={[8,8,0,0]}
/>

</BarChart>

</ResponsiveContainer>

</div>

</div>

</div>

</div>

  );

}