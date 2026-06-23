import {
  FaExclamationTriangle,
  FaUserShield,
  FaRoad,
  FaClock,
  FaAmbulance,
  FaRoute,
} from "react-icons/fa";

export default function PredictionCard({ prediction }) {

  if (!prediction) return null;

  const riskColor =

    prediction.predicted_risk === "High"
      ? "bg-red-500"

      : prediction.predicted_risk === "Medium"

      ? "bg-yellow-500"

      : "bg-green-500";

  return (

    <div className="max-w-5xl mx-auto mt-10 px-8">

      <h2 className="text-3xl font-bold text-blue-900 mb-6">

        🤖 AI Prediction Result

      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Risk */}

        <div className={`${riskColor} rounded-2xl text-white p-6 shadow-lg`}>

          <FaExclamationTriangle className="text-4xl mb-4"/>

          <p className="text-lg">Predicted Risk</p>

          <h1 className="text-3xl font-bold">

            {prediction.predicted_risk}

          </h1>

        </div>

        {/* Officers */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <FaUserShield className="text-blue-700 text-4xl"/>

          <p className="mt-4 text-gray-500">

            Police Officers

          </p>

          <h1 className="text-3xl font-bold">

            {prediction.officers}

          </h1>

        </div>

        {/* Barricades */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <FaRoad className="text-orange-500 text-4xl"/>

          <p className="mt-4 text-gray-500">

            Barricades

          </p>

          <h1 className="text-3xl font-bold">

            {prediction.barricades}

          </h1>

        </div>

        {/* Delay */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <FaClock className="text-red-600 text-4xl"/>

          <p className="mt-4 text-gray-500">

            Expected Delay

          </p>

          <h1 className="text-2xl font-bold">

            {prediction.delay} mins

          </h1>

        </div>

        {/* Emergency */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <FaAmbulance className="text-green-600 text-4xl"/>

          <p className="mt-4 text-gray-500">

            Emergency Team

          </p>

          <h1 className="text-2xl font-bold">

            {prediction.emergency}

          </h1>

        </div>

        {/* Diversion */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <FaRoute className="text-indigo-600 text-4xl"/>

          <p className="mt-4 text-gray-500">

            Diversion Needed

          </p>

          <h1 className="text-2xl font-bold">

            {prediction.diversion ? "YES" : "NO"}

          </h1>

        </div>

      </div>

    </div>

  );

}