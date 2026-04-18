import { IndianRupee, Truck, FileText, Receipt } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <IndianRupee size={28} />,
      title: "Instant Estimate",
      desc: "Discover your vehicle’s true value instantly",
    },
    {
      icon: <Truck size={28} />,
      title: "Free Pickup",
      desc: "Seamless doorstep pickup, scheduled your way",
    },
    {
      icon: <FileText size={28} />,
      title: "Prompt Payment",
      desc: "Instant payment, right on the spot",
    },
    {
      icon: <Receipt size={28} />,
      title: "Certificate Issued",
      desc: "Government-authorized scrapping certificate guaranteed",
    },
  ];

  return (
    <section
      id="services"  // ✅ 🔥 THIS FIXES EVERYTHING
      className="pt-16 pb-20 px-6 bg-gradient-to-r from-[#e6eef2] to-[#dfe8e4]"
    >

      {/* TITLE */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="text-green-600">Here’s</span>{" "}
          <span className="text-blue-600">How It Works</span>
        </h2>

        <p className="text-gray-600 text-sm md:text-base">
          From price quote to scrapping certificate — a simple, transparent 4-step journey.
        </p>
      </div>

      {/* STEPS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-5 relative">

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition duration-200"
          >

            {/* CONNECTOR LINE */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-[-20px] w-10 h-[2px] bg-gray-300"></div>
            )}

            {/* ICON */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full 
                            bg-gradient-to-br from-green-500 to-blue-500 
                            flex items-center justify-center text-white shadow-md">
              {step.icon}
            </div>

            {/* STEP */}
            <p className="text-gray-400 text-xs mb-1 tracking-wide">
              STEP {index + 1}
            </p>

            <h3 className="font-semibold text-base mb-1">
              {step.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {step.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HowItWorks;