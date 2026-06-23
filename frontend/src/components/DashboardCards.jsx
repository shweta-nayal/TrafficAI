import {
    FaCarCrash,
    FaTrafficLight,
    FaRoad,
    FaUserShield
} from "react-icons/fa";

export default function DashboardCards() {

    // const cards = [

    //     {
    //         title: "Today's Events",
    //         value: "156",
    //         icon: <FaTrafficLight />,
    //         color: "bg-blue-600"
    //     },

    //     {
    //         title: "High Risk Events",
    //         value: "42",
    //         icon: <FaCarCrash />,
    //         color: "bg-red-600"
    //     },

    //     {
    //         title: "Congestion Alerts",
    //         value: "28",
    //         icon: <FaRoad />,
    //         color: "bg-orange-500"
    //     },

    //     {
    //         title: "Police Deployed",
    //         value: "314",
    //         icon: <FaUserShield />,
    //         color: "bg-green-600"
    //     }

    // ];

    axios.get("/dashboard")
    
    return (

        <div id="dashboard" className="max-w-7xl mx-auto px-8 mt-10">

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                {cards.map((card) => (

                    <div
                        key={card.title}
                        className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition"
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

    )

}