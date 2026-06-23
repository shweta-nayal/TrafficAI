import { useEffect, useState } from "react";
import axios from "axios";

export default function RecentEvents() {

    const [events, setEvents] = useState([]);

    useEffect(() => {

        axios

            .get("https://trafficai-z765.onrender.com/recent-events")

            .then(res => {

                setEvents(res.data);

            })

            .catch(err => {

                console.log(err);

            });

    }, []);

    return (

<div className="max-w-7xl mx-auto mt-16 mb-20 px-8">

<h1 className="text-3xl font-bold text-blue-900 mb-8">

📋 Recent Traffic Events

</h1>

<div className="bg-white rounded-3xl shadow-xl overflow-hidden">

<table className="w-full">

<thead className="bg-blue-900 text-white">

<tr>

<th className="p-4">Event</th>

<th className="p-4">Cause</th>

<th className="p-4">Risk</th>

<th className="p-4">Zone</th>

<th className="p-4">Status</th>

</tr>

</thead>

<tbody>

{

events.map((event,index)=>(

<tr

key={index}

className="border-b hover:bg-gray-100"

>

<td className="p-4">

{event.event}

</td>

<td className="p-4">

{event.cause}

</td>

<td className="p-4">

<span

className={`px-3 py-1 rounded-full text-white

${

event.risk==="High"

?

"bg-red-500"

:

event.risk==="Medium"

?

"bg-yellow-500"

:

"bg-green-500"

}

`}

>

{event.risk}

</span>

</td>

<td className="p-4">

{event.zone}

</td>

<td className="p-4">

{event.status}

</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

    )

}