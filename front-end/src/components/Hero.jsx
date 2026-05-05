import { motion as Motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import video from "../assets/MIMS-reel.mp4";

const scrollToServices = () => {
  document.getElementById("services")?.scrollIntoView({
    behavior: "smooth",
  });
};

function Hero({ openModal }) {
  return (
    <section
      id="home"
      className="
      min-h-[90vh]
      flex items-start
      px-4 sm:px-6 md:px-12
      pt-[10px] md:pt-[20px]
      pb-10
      bg-gradient-to-r from-[#e6eef2] to-[#dfe8e4]
    "
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center w-full max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col justify-start"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.2] tracking-tight text-gray-900">
            My India My Services turns your old vehicle into{" "}
            <span className="text-green-600">real value</span> fast.
          </h1>

          <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-xl leading-relaxed">
            MIMS is India's safe and trusted vehicle recycler with a 100% legal
            process, free pickup, and instant documentation.
          </p>

          <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg">
            Free pickup, best price, zero hassle.
          </p>

          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4">
            <button onClick={openModal} className="btn-primary">
              Get Instant Estimate
            </button>

            <button onClick={scrollToServices} className="btn-secondary">
              Check Pickup Availability
            </button>
          </div>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4">
            <div className="flex items-center gap-2 bg-white px-3 md:px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="text-green-600 w-5 h-5 md:w-6 md:h-6" />
              <span className="text-xs md:text-sm font-medium text-gray-700">
                Established Since 2021
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white px-3 md:px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="text-green-600 w-5 h-5 md:w-6 md:h-6" />
              <span className="text-xs md:text-sm font-medium text-gray-700">
                RVSF Authorized
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white px-3 md:px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="text-green-600 w-5 h-5 md:w-6 md:h-6" />
              <span className="text-xs md:text-sm font-medium text-gray-700">
                120+ Locations
              </span>
            </div>
          </div>
        </Motion.div>

        <Motion.div className="flex justify-center md:justify-end mt-6 md:mt-8 overflow-visible">
          <div className="relative w-full md:w-[120%] lg:w-[130%] h-[260px] sm:h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 via-transparent to-green-600/20 blur-lg"></div>

            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default Hero;
