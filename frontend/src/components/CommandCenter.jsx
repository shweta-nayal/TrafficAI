import {
  FaTrafficLight,
  FaRoad,
  FaUserShield,
  FaAmbulance,
  FaExclamationTriangle,
  FaClock,
  FaRoute
} from "react-icons/fa";

export default function CommandCenter({ prediction }) {

  return (

    <div className="max-w-7xl mx-auto mt-14 px-8">

      <h1 className="text-3xl font-bold text-blue-900 mb-8">

        🚦 Traffic Command Center

      </h1>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Live Status */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <div className="flex items-center gap-3">

            <FaTrafficLight className="text-green-600 text-3xl"/>

            <h2 className="text-xl font-bold">

              Live Traffic Status

            </h2>

          </div>

          <div className="mt-6 space-y-5">

            <div className="flex justify-between">

              <span>Roads Open</span>

              <span className="font-bold text-green-600">

                89%

              </span>

            </div>

            <div className="flex justify-between">

              <span>Congested Roads</span>

              <span className="font-bold text-red-600">

                11%

              </span>

            </div>

            <div className="flex justify-between">

              <span>Average Speed</span>

              <span className="font-bold">

                42 km/h

              </span>

            </div>

          </div>

        </div>

        {/* AI Recommendation */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <div className="flex items-center gap-3">

            <FaExclamationTriangle className="text-orange-500 text-3xl"/>

            <h2 className="text-xl font-bold">

              AI Recommendation

            </h2>

          </div>

          {prediction ? (

            <div className="mt-6 space-y-4">

              <div className="flex justify-between">

                <span>Officers</span>

                <span className="font-bold">

                  {prediction.officers}

                </span>

              </div>

              <div className="flex justify-between">

                <span>Barricades</span>

                <span className="font-bold">

                  {prediction.barricades}

                </span>

              </div>

              <div className="flex justify-between">

                <span>Emergency</span>

                <span className="font-bold">

                  {prediction.emergency}

                </span>

              </div>

              <div className="flex justify-between">

                <span>Delay</span>

                <span className="font-bold">

                  {prediction.delay} min

                </span>

              </div>

            </div>

          ) : (

            <div className="mt-8 text-gray-500">

              Predict an event to see AI recommendations.

            </div>

          )}

        </div>

        {/* Diversion */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <div className="flex items-center gap-3">

            <FaRoute className="text-blue-600 text-3xl"/>

            <h2 className="text-xl font-bold">

              Diversion Status

            </h2>

          </div>

          {prediction ? (

            <div className="mt-8">

              <div className={`text-center text-4xl font-bold rounded-xl py-8 ${
                prediction.diversion
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}>

                {prediction.diversion ? "DIVERSION REQUIRED" : "NORMAL ROUTE"}

              </div>

            </div>

          ) : (

            <div className="mt-8 text-gray-500">

              Waiting for prediction...

            </div>

          )}

        </div>

      </div>

    </div>

  );

}