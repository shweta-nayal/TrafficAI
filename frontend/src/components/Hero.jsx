import { FaArrowRight } from "react-icons/fa";
import hero from "../assets/hero.jpg";

export default function Hero() {

    return (

        <section className="bg-gradient-to-r from-[#0B1F3A] via-[#0E3A68] to-[#1E81CE]">

            <div className="max-w-7xl mx-auto px-8 py-20">

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    <div>

                        <h1 className="text-6xl font-bold text-white leading-tight">

                            Smarter Traffic

                            <br />

                            Faster Decisions

                        </h1>

                        <p className="mt-8 text-gray-200 text-xl leading-9">

                            Predict traffic congestion before it happens using
                            Machine Learning and Artificial Intelligence.

                            Get manpower recommendations,
                            diversion plans,
                            congestion score,
                            emergency response
                            and resource allocation instantly.

                        </p>

                        <button className="mt-10 bg-cyan-400 hover:bg-cyan-500 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-3">

                            Analyze Traffic Event

                            <FaArrowRight />

                        </button>

                    </div>

                    <div>

                        <img

                            src={hero}
                            className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"

                        />

                    </div>

                </div>

            </div>

        </section>

    )

}