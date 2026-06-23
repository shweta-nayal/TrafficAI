import { FaTrafficLight, FaGithub } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-[#0B1F3A] shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">

          <div className="bg-blue-600 p-3 rounded-xl">
            <FaTrafficLight className="text-white text-2xl" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              TrafficAI
            </h1>

            <p className="text-gray-300 text-xs">
              Bengaluru Smart Traffic Management
            </p>
          </div>

        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          <a
            href="#dashboard"
            className="flex items-center gap-2 hover:text-cyan-400 transition duration-300"
          >
            <MdDashboard />
            Dashboard
          </a>

          <a
            href="#predict"
            className="flex items-center gap-2 hover:text-cyan-400 transition duration-300"
          >
            <RiRobot2Fill />
            AI Predictor
          </a>

          <a
            href="#analytics"
            className="flex items-center gap-2 hover:text-cyan-400 transition duration-300"
          >
            <IoStatsChart />
            Analytics
          </a>

          <a
            href="#map"
            className="flex items-center gap-2 hover:text-cyan-400 transition duration-300"
          >
            <FaMapLocationDot />
            Live Map
          </a>

        </div>

        {/* Optional GitHub Button */}
        {/* <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          <FaGithub />
          GitHub
        </a> */}

        <div className="hidden lg:flex items-center gap-2 bg-green-600 px-4 py-2 rounded-full text-white text-sm font-semibold animate-pulse">
    🟢 Live Monitoring
</div>

      </div>

    </nav>
  );
}