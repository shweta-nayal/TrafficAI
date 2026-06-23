import {
    FaRobot,
    FaUserShield,
    FaRoad,
    FaClock,
    FaExclamationTriangle
} from "react-icons/fa";

export default function AIInsights({ prediction }) {

    if (!prediction) return null;

    const riskColor =
        prediction.predicted_risk === "High"
            ? "text-red-600"
            : prediction.predicted_risk === "Medium"
            ? "text-yellow-600"
            : "text-green-600";

    return (

<div className="max-w-7xl mx-auto mt-16 px-8">

<div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-3xl shadow-2xl p-10">

<div className="flex items-center gap-3 mb-8">

<FaRobot className="text-4xl text-cyan-400"/>

<h1 className="text-3xl font-bold">

🚦Bengaluru Traffic Command Center

</h1>

</div>

<div className="grid md:grid-cols-2 gap-10">

{/* Left */}

<div>

<h2 className="text-2xl font-semibold mb-4">

Current Situation

</h2>

<ul className="space-y-4">

<li>

🚧 Event :
<b> {prediction.event}</b>

</li>

<li>

⚠ Cause :
<b> {prediction.cause}</b>

</li>

<li>

<span className={riskColor}>

🚨 Risk :
<b> {prediction.predicted_risk}</b>

</span>

</li>

<li>

⏱ Estimated Delay :
<b> {prediction.delay} Minutes</b>

</li>

<li>

🛑 Road Closure :
<b>

{prediction.road_closure ? " Required" : " Not Required"}

</b>

</li>

</ul>

</div>

{/* Right */}

<div>

<h2 className="text-2xl font-semibold mb-4">

AI Recommended Actions

</h2>

<ul className="space-y-4">

<li>

<FaUserShield className="inline mr-2"/>

Deploy : 

<b> {prediction.officers} </b>

Traffic Officers

</li>

<li>

<FaRoad className="inline mr-2"/>

Install : 

<b> {prediction.barricades} </b>

Barricades

</li>

<li>

🚑

Dispatch : 

<b> {prediction.emergency} </b>

</li>

<li>

<FaClock className="inline mr-2"/>

Expected Resolution : 

<b> {prediction.delay+10} </b>

Minutes


</li>

</ul>

</div>

</div>

<div className="mt-10 border-t border-gray-600 pt-6">

<h2 className="text-xl font-semibold mb-4">

🤖 Traffic Intelligence Report

</h2>

<p className="leading-8 text-gray-200">
TrafficAI analyzed historical Bengaluru traffic events together with the current incident characteristics to estimate 
congestion severity. Based on the predicted traffic impact, the expected delay for the incident is <strong> {prediction.delay} minutes</strong>, indicating the severity
of congestion, the system recommends deploying 
<strong> {prediction.officers} officers</strong>, additional traffic personnel, 
<strong> {prediction.barricades} barricades</strong>, and dispatching 
<strong> {prediction.emergency} </strong> emergency response teams. 

{prediction.diversion
? " Diversion routes should be activated immediately."
: " Traffic can be managed without diversion."}

</p>

</div>

</div>

</div>

    );
}