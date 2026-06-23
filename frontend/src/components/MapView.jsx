import { useEffect, useState } from "react";
import axios from "axios";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function MapView() {

    const [events, setEvents] = useState([]);

    useEffect(()=>{

        axios
            .get("https://trafficai-z765.onrender.com/events")
            .then(res=>setEvents(res.data))
            .catch(console.error);

    },[]);

    return(

<div
id="map"
className="scroll-mt-24 ..."
className="max-w-7xl mx-auto mt-16 px-8 mb-20"
>

<h1 className="text-3xl font-bold text-blue-900 mb-8">

🗺 Live Bengaluru Traffic Map

</h1>

<div className="rounded-3xl overflow-hidden shadow-xl">

<MapContainer className="z-0"

center={[12.9716,77.5946]}

zoom={12}

style={{

height:"600px",

width:"100%"

}}

>

<TileLayer

url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

/>

{

events.map((event,index)=>{

let color="green";

if(event.risk==="High")
color="red";

else if(event.risk==="Medium")
color="orange";

return(

<CircleMarker

key={index}

center={[event.lat,event.lng]}

radius={12}

pathOptions={{

color:color,

fillColor:color,

fillOpacity:0.8

}}

>

<Popup>

<h2>

{event.cause}

</h2>

<p>

Risk : {event.risk}

</p>

</Popup>

</CircleMarker>

)

})

}

</MapContainer>

</div>

</div>

    )

}