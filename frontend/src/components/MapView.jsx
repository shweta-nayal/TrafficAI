import { useEffect, useState } from "react";
import axios from "axios";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const API_BASE = "https://trafficai-z765.onrender.com";

export default function MapView() {

  const [events, setEvents] = useState([]);

  useEffect(() => {

    axios
      .get(`${API_BASE}/events?active=true&limit=50`)
    //   .then(res => setEvents(res.data))
    .then(res => setEvents(Array.isArray(res.data) ? res.data : (res.data.events || [])))
      .catch(console.error);

  }, []);

  return (

    <div
      id="map"
      className="max-w-7xl mx-auto mt-16 px-8 mb-20 scroll-mt-24"
    >

      <div className="flex items-center justify-between mb-8">

        <h1 className="text-3xl font-bold text-blue-900">
          🗺 Live Bengaluru Traffic Map
        </h1>

        <div className="flex gap-5 text-sm">

          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-red-500"></span>
            High Risk
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
            Medium Risk
          </div>

          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-green-500"></span>
            Low Risk
          </div>

        </div>

      </div>

      <div className="rounded-3xl overflow-hidden shadow-xl">

        <MapContainer
          center={[12.9716, 77.5946]}
          zoom={12}
          className="z-0"
          style={{
            height: "600px",
            width: "100%"
          }}
        >

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {events.map((event, index) => {

            let color = "green";

            if (event.risk === "High")
              color = "red";
            else if (event.risk === "Medium")
              color = "orange";

            return (

              <CircleMarker
                key={index}
                center={[event.lat, event.lng]}
                radius={8}
                pathOptions={{
                  color,
                  fillColor: color,
                  fillOpacity: 0.8
                }}
              >

                <Popup>

                  <div className="space-y-2">

                    <h2 className="font-bold">
                      {event.cause}
                    </h2>

                    <p>
                      Risk :
                      <b> {event.risk}</b>
                    </p>

                    <p>
                      Status :
                      <b> {event.status}</b>
                    </p>

                    <p>
                      Zone :
                      <b> {event.zone}</b>
                    </p>

                  </div>

                </Popup>

              </CircleMarker>

            );

          })}

        </MapContainer>

      </div>

    </div>

  );

}