import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DashboardCards from "../components/DashboardCards";
import EventForm from "../components/EventForm";
import PredictionCard from "../components/PredictionCard";
import AIInsights from "../components/AIInsights";
import CommandCenter from "../components/CommandCenter";
import Analytics from "../components/Analytics";
import MapView from "../components/MapView";
import RecentEvents from "../components/RecentEvents";

export default function Home() {

    const [prediction, setPrediction] = useState(null);

    return (

        <>

            <Navbar/>

            <Hero/>

            <DashboardCards/>

            <EventForm
                setPrediction={setPrediction}
            />

            <PredictionCard
                prediction={prediction}
            />

            <AIInsights
                prediction={prediction}
            />

            <CommandCenter
                prediction={prediction}
            />

            <Analytics/>

            <MapView
                prediction={prediction}
            />

            <RecentEvents/>

        </>

    )

}