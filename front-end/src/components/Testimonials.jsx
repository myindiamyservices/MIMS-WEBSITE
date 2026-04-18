import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import certificate from "../assets/certificate.jpeg"; // ✅ IMPORTANT
import preview from "../assets/preview_certificate.png";

function Testimonials() {

  const [open, setOpen] = useState(false);

    const data = [
    {
      name: "Rajesh Verma",
      city: "Delhi",
      car: "Hyundai i20",
      text: "Extremely smooth process! Got the best price compared to local dealers. Pickup was on time and payment was instant. The team handled everything professionally and I didn’t have to worry about any paperwork.",
    },
    {
      name: "Amit Kulkarni",
      city: "Pune",
      car: "Honda City",
      text: "Professional team and hassle-free experience. From quote to pickup, everything was handled perfectly. I really appreciated the transparency and quick response from the support team.",
    },
    {
      name: "Sandeep Gupta",
      city: "Noida",
      car: "Maruti Swift",
      text: "Transparent pricing and no hidden charges. Felt safe and trusted throughout the process. The entire experience was smooth and I would definitely recommend this service to others.",
    },
    {
      name: "Karan Mehta",
      city: "Mumbai",
      car: "Tata Nexon",
      text: "Quick service and great support team. Documentation and payment were seamless. Everything was done on time and exactly as promised which made the experience stress-free.",
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

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">

        {/* TESTIMONIAL */}
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between min-h-[260px]">
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
            <button onClick={() => paginate(-1)} className="p-2 rounded-full bg-gray-100">
              <ChevronLeft size={18} />
            </button>

            <span className="text-xs text-gray-500">
              {index + 1}/{data.length}
            </span>

            <button onClick={() => paginate(1)} className="p-2 rounded-full bg-gray-100">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 🔥 CERTIFICATE PREVIEW */}
        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col">

          {/* IMAGE FULL COVER */}
          <div className="relative h-[220px] overflow-hidden group cursor-pointer">

            <img
              src={preview}
              onClick={() => setOpen(true)}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            {/* OPTIONAL DARK HOVER (subtle) */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>

            {/* FULLSCREEN BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition"
            >
              Full View
            </button>

            </div>

            {/* TEXT */}
            <div className="p-4">

              <h3 className="font-semibold text-gray-800 mb-1">
                Vehicle COD Certificate
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                This certificate confirms that your vehicle has been officially scrapped 
                in compliance with government regulations. It ensures legal disposal, 
                environmental safety, and eligibility for benefits like registration fee 
                waiver on your next vehicle purchase.
              </p>

            </div>

          </div>

        {/* STORY */}
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

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          <div className="relative max-w-5xl w-full p-4">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              ✕
            </button>

            <img
              src={certificate}
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />

          </div>

        </div>
      )}

    </section>
  );
}

export default Testimonials;