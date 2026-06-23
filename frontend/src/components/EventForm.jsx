import { useState } from "react";
import axios from "axios";
import { FaRobot } from "react-icons/fa";

export default function EventForm({ setPrediction }) {

    const [loading, setLoading] = useState(false);

    // const [prediction, setPrediction] = useState(null);

    const [formData, setFormData] = useState({

        event_type: "unplanned",

        event_cause: "vehicle_breakdown",

        latitude: 12.9716,

        longitude: 77.5946,

        endlatitude: 12.9720,

        endlongitude: 77.5950,

        requires_road_closure: false,

        veh_type: "private_car",

        corridor: "ORR East 1",

        police_station: "Whitefield",

        zone: "East Zone 1",

        start_datetime: "2026-06-21T10:30"

    });

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData({

            ...formData,

            [name]: type === "checkbox" ? checked : value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try{

            const res = await axios.post(

                "http://127.0.0.1:5000/predict",

                formData

            );

            setPrediction(res.data);

        }

        catch(err){

            console.log(err);

            alert("Backend not connected yet");

        }

        setLoading(false);

    };

    return(

<div id="predict" className="max-w-7xl mx-auto mt-12 px-8">

<div className="bg-white rounded-3xl shadow-xl p-10">

<h1 className="text-3xl font-bold text-blue-900 mb-8">

🚦 Event Prediction

</h1>

<form
onSubmit={handleSubmit}
className="grid md:grid-cols-2 gap-6"
>

<div>

<label className="font-semibold">

Event Type

</label>

<select

name="event_type"

value={formData.event_type}

onChange={handleChange}

className="w-full mt-2 border rounded-xl p-3"

>

<option>planned</option>

<option>unplanned</option>

</select>

</div>

<div>

<label className="font-semibold">

Event Cause

</label>

<select

name="event_cause"

value={formData.event_cause}

onChange={handleChange}

className="w-full mt-2 border rounded-xl p-3"

>

<option>vehicle_breakdown</option>

<option>accident</option>

<option>construction</option>

<option>water_logging</option>

<option>public_event</option>

<option>tree_fall</option>

<option>pot_holes</option>

<option>congestion</option>

<option>road_conditions</option>

<option>vip_movement</option>

<option>procession</option>

<option>protest</option>

</select>

</div>

<div>

<label className="font-semibold">

Vehicle Type

</label>

<select

name="veh_type"

value={formData.veh_type}

onChange={handleChange}

className="w-full mt-2 border rounded-xl p-3"

>

<option>private_car</option>

<option>heavy_vehicle</option>

<option>truck</option>

<option>lcv</option>

<option>auto</option>

<option>taxi</option>

<option>bmtc_bus</option>

<option>private_bus</option>

<option>ksrtc_bus</option>

</select>

</div>

<div>

<label className="font-semibold">

Corridor

</label>

<input

name="corridor"

value={formData.corridor}

onChange={handleChange}

className="w-full mt-2 border rounded-xl p-3"

/>

</div>

<div>

<label className="font-semibold">

Police Station

</label>

<input

name="police_station"

value={formData.police_station}

onChange={handleChange}

className="w-full mt-2 border rounded-xl p-3"

/>

</div>

<div>

<label className="font-semibold">

Zone

</label>

<select

name="zone"

value={formData.zone}

onChange={handleChange}

className="w-full mt-2 border rounded-xl p-3"

>

<option>East Zone 1</option>

<option>East Zone 2</option>

<option>West Zone 1</option>

<option>West Zone 2</option>

<option>North Zone 1</option>

<option>North Zone 2</option>

<option>South Zone 1</option>

<option>South Zone 2</option>

<option>Central Zone 1</option>

<option>Central Zone 2</option>

<option>Unknown</option>

</select>

</div>

<div>

<label>Latitude</label>

<input

type="number"

step="0.0001"

name="latitude"

value={formData.latitude}

onChange={handleChange}

className="w-full mt-2 border rounded-xl p-3"

/>

</div>

<div>

<label>Longitude</label>

<input

type="number"

step="0.0001"

name="longitude"

value={formData.longitude}

onChange={handleChange}

className="w-full mt-2 border rounded-xl p-3"

/>

</div>

<div>

<label>Start Time</label>

<input

type="datetime-local"

name="start_datetime"

value={formData.start_datetime}

onChange={handleChange}

className="w-full mt-2 border rounded-xl p-3"

/>

</div>

<div className="flex items-center gap-4 mt-8">

<input

type="checkbox"

name="requires_road_closure"

checked={formData.requires_road_closure}

onChange={handleChange}

/>

<label>

Requires Road Closure

</label>

</div>

<div className="md:col-span-2 mt-8">

<button

className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-3"

>

<FaRobot/>

{

loading ?

"Predicting..."

:

"Predict Traffic"

}

</button>

</div>

</form>

</div>

</div>

    )

}