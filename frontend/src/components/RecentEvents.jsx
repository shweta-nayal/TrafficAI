import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

const API_BASE = "https://trafficai-z765.onrender.com";

export default function RecentEvents() {

    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [riskFilter, setRiskFilter] = useState("All");
    const [zoneFilter, setZoneFilter] = useState("All");

    useEffect(() => {

        setLoading(true);

        axios
            .get(`${API_BASE}/recent-events?page=${page}&limit=10`)
            .then((res) => {

                // setEvents(res.data.events);
                setEvents(Array.isArray(res.data) ? res.data : (res.data.events || []));
                setPage(res.data.page);
                setTotalPages(res.data.total_pages);
                setTotalRecords(res.data.total_records);

                setLoading(false);

            })
            .catch((err) => {

                console.log(err);
                setLoading(false);

            });

    }, [page]);

    if (loading) return <LoadingSpinner />;

    const filteredEvents = events.filter((event) => {

        const matchesSearch =

            event.event.toLowerCase().includes(search.toLowerCase()) ||

            event.cause.toLowerCase().includes(search.toLowerCase());

        const matchesRisk =

            riskFilter === "All" ||

            event.risk === riskFilter;

        const matchesZone =

            zoneFilter === "All" ||

            event.zone.includes(zoneFilter);

        return matchesSearch && matchesRisk && matchesZone;

    });

    const startRecord = (page - 1) * 10 + 1;
    const endRecord = Math.min(page * 10, totalRecords);

    return (

<div className="max-w-7xl mx-auto mt-16 mb-20 px-8">

<h1 className="text-3xl font-bold text-blue-900 mb-8">

📋 Recent Traffic Events

</h1>

{/* Filters */}

<div className="bg-white rounded-2xl shadow-md p-5 mb-6 flex flex-wrap gap-4">

<input

type="text"

placeholder="Search Event or Cause..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="border rounded-lg px-4 py-2 flex-1 min-w-[220px]"

/>

<select

value={riskFilter}

onChange={(e)=>setRiskFilter(e.target.value)}

className="border rounded-lg px-4 py-2"

>

<option>All</option>

<option>High</option>

<option>Medium</option>

<option>Low</option>

</select>

<select

value={zoneFilter}

onChange={(e)=>setZoneFilter(e.target.value)}

className="border rounded-lg px-4 py-2"

>

<option>All</option>

<option>East Zone</option>

<option>West Zone</option>

<option>North Zone</option>

<option>South Zone</option>

<option>Central Zone</option>

</select>

</div>

<div className="flex justify-between items-center mb-3">

<p className="text-gray-600">

{/* Showing

<b> {startRecord}-{endRecord}</b>

of

<b> {totalRecords}</b>

events */}

</p>

<p className="text-gray-600">

Page

<b> {page}</b>

of

<b> {totalPages}</b>

</p>

</div>

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

filteredEvents.length===0?

(

<tr>

<td
colSpan="5"
className="text-center p-10 text-gray-500"
>

No Events Found

</td>

</tr>

)

:

(

filteredEvents.map((event,index)=>(

<tr

key={index}

className="border-b hover:bg-gray-50"

>

<td className="p-4 capitalize">

{event.event.replaceAll("_"," ")}

</td>

<td className="p-4 capitalize">

{event.cause.replaceAll("_"," ")}

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

<span

className={`font-semibold

${

event.status.toLowerCase()==="active"

?

"text-red-600"

:

event.status.toLowerCase()==="resolved"

?

"text-green-600"

:

"text-yellow-600"

}

`}

>

{event.status}

</span>

</td>

</tr>

))

)

}

</tbody>

</table>

</div>

{/* Pagination */}

<div className="flex justify-center items-center gap-2 mt-8">

<button

disabled={page===1}

onClick={()=>setPage(page-1)}

className="px-4 py-2 rounded-lg border bg-white disabled:opacity-40"

>

← Previous

</button>

{

Array.from(

{length:totalPages},

(_,i)=>(

<button

key={i}

onClick={()=>setPage(i+1)}

className={`w-10 h-10 rounded-lg

${

page===i+1

?

"bg-blue-700 text-white"

:

"bg-white border"

}

`}

>

{i+1}

</button>

)

)

}

<button

disabled={page===totalPages}

onClick={()=>setPage(page+1)}

className="px-4 py-2 rounded-lg border bg-white disabled:opacity-40"

>

Next →

</button>

</div>

</div>

    );

}