import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Testimonials() {

  const data = [
    {
      name: "Rajesh Verma",
      city: "Delhi",
      car: "Hyundai i20",
      text: "Extremely smooth process! Got the best price compared to local dealers. Pickup was on time and payment was instant.",
    },
    {
      name: "Amit Kulkarni",
      city: "Pune",
      car: "Honda City",
      text: "Professional team and hassle-free experience. From quote to pickup, everything was handled perfectly.",
    },
    {
      name: "Sandeep Gupta",
      city: "Noida",
      car: "Maruti Swift",
      text: "Transparent pricing and no hidden charges. Felt safe and trusted throughout the process.",
    },
    {
      name: "Karan Mehta",
      city: "Mumbai",
      car: "Tata Nexon",
      text: "Quick service and great support team. Documentation and payment were seamless.",
    },
  ];

  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir) => {
    setIndex(([prev]) => {
      const newIndex = (prev + dir + data.length) % data.length;
      return [newIndex, dir];
    });
  };

  useEffect(() => {
    const interval = setInterval(() => paginate(1), 4000);
    return () => clearInterval(interval);
  }, []);

  const item = data[index];

  return (
    <section className="pt-16 pb-20 px-6 bg-gradient-to-r from-[#e6eef2] to-[#dfe8e4]">

      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-green-600">See</span>{" "}
          <span className="text-blue-600">MyIndiaMyServices in Action</span>
        </h2>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">

        {/* TESTIMONIAL CARD */}
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">

          <p className="font-semibold text-sm mb-3">Customer Testimonials</p>

          <div className="flex gap-1 text-yellow-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -60 : 60, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-semibold text-base mb-1">
                World-Class Service
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {item.text}
              </p>

              <hr className="my-3" />

              <p className="font-medium text-sm">{item.name}</p>
              <p className="text-gray-500 text-xs">
                {item.city} • {item.car}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ChevronLeft size={18} />
            </button>

            <span className="text-xs text-gray-500">
              {index + 1}/{data.length}
            </span>

            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

        {/* VIDEO 1 */}
        <div className="bg-black rounded-xl overflow-hidden relative h-[260px]">
          <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 rounded-full p-3 hover:scale-110 transition">
              ▶
            </div>
          </div>
        </div>

        
        {/* 🔥 SPECIAL STORY - ROLLS ROYCE */}
        <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">

          <div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">
              A Rolls Royce, Reimagined ♻️
            </h3>

            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              In a remarkable milestone, MyIndiaMyServices successfully handled the
              scrapping of a luxury Rolls Royce — a symbol of prestige transformed into
              sustainability.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Every component was processed with precision, ensuring maximum material
              recovery while following strict environmental norms. This reflects our
              commitment to responsible recycling — where even the most premium vehicles
              contribute to a greener future.
            </p>
          </div>

          <div className="mt-4 text-xs text-gray-400">
            Luxury meets sustainability
          </div>

        </div>

      </div>

      {/* 🔥 NEW SECTION BELOW */}
      <div className="max-w-7xl mx-auto mt-14 bg-white rounded-2xl p-8 shadow-sm text-center">

        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-green-600">India’s Largest</span>{" "}
          <span className="text-blue-600">Scrap Sourcing Partner</span>
        </h3>

        <p className="text-gray-600 text-sm md:text-base mt-2 max-w-2xl mx-auto">
          Trusted by thousands of customers across 120+ cities, we ensure fast,
          transparent, and legally compliant vehicle scrapping with the best
          value in the market.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

          <div>
            <p className="text-2xl font-bold text-green-600">120+</p>
            <p className="text-gray-500 text-sm">Cities Covered</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-green-600">5500+</p>
            <p className="text-gray-500 text-sm">Vehicles Scrapped</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-green-600">5.0</p>
            <p className="text-gray-500 text-sm">Customer Rating</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-green-600">100%</p>
            <p className="text-gray-500 text-sm">Legal Compliance</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;