import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

import {
  FaCarCrash,
  FaTrafficLight,
  FaRoad,
  FaUserShield
} from "react-icons/fa";

const API_BASE = "https://trafficai-z765.onrender.com";

export default function DashboardCards() {
    const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    total_events: 0,
    high_risk: 0,
    road_closure: 0,
    active_events: 0
  });

  useEffect(() => {

    axios
      .get(`${API_BASE}/dashboard`)
        .then(res => {

            setStats(res.data);
            setLoading(false);

        })
        .catch(err => {

            console.log(err);
            setLoading(false);

        });

  }, []);

  const cards = [

    {
      title: "Total Events",
      value: stats.total_events,
      icon: <FaTrafficLight />,
      color: "bg-blue-600"
    },

    {
      title: "High Risk Events",
      value: stats.high_risk,
      icon: <FaCarCrash />,
      color: "bg-red-600"
    },

    {
      title: "Road Closures",
      value: stats.road_closure,
      icon: <FaRoad />,
      color: "bg-orange-500"
    },

    {
      title: "Active Events",
      value: stats.active_events,
      icon: <FaUserShield />,
      color: "bg-green-600"
    }

  ];

  if (loading)
    return <LoadingSpinner />;

  return (

    <div id="dashboard" className="max-w-7xl mx-auto px-8 mt-10">

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {cards.map((card) => (

          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300"
          >

            <div className="flex justify-between">

              <div>

                <p className="text-gray-500">

                  {card.title}

                </p>

                <h1 className="text-4xl font-bold mt-3">

                  {card.value}

                </h1>

              </div>

              <div
                className={`${card.color} w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl`}
              >

                {card.icon}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}