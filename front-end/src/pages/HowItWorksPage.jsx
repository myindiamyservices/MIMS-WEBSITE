import { IndianRupee, Truck, FileText, Receipt } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <IndianRupee />,
      title: "Instant Estimate",
      desc: "Provide your vehicle details and get a fair estimate instantly.",
    },
    {
      icon: <Truck />,
      title: "Free Pickup",
      desc: "Choose a convenient time and we’ll pick up your vehicle.",
    },
    {
      icon: <FileText />,
      title: "Prompt Payment",
      desc: "Receive your payment quickly after inspection.",
    },
    {
      icon: <Receipt />,
      title: "Certificate Issued",
      desc: "Get your official vehicle scrapping certificate.",
    },
  ];

  return (
    <div className="bg-white">

      {/* ✅ Breadcrumb */}
      <div className="pt-24">
        <Breadcrumb title="How It Works" />
      </div>

      {/* HEADER */}
      <section className="text-center py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <p className="text-gray-500 mb-2">Recycling Process</p>

        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-green-600">How</span>{" "}
          <span className="text-blue-600">It Works</span>
        </h1>
      </section>

      {/* INTRO */}
      <section className="px-6 md:px-12 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
          alt="recycling"
          className="rounded-xl shadow-md w-full h-[300px] object-cover"
        />

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-green-600">
            Our Vehicle Recycling Process
          </h2>

          <p className="mt-4 text-gray-600">
            We ensure a smooth and transparent journey from price estimation to
            final certification, making the entire vehicle scrapping process
            simple and hassle-free.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="px-6 md:px-12 py-16 bg-gradient-to-r from-[#e6eef2] to-[#dfe8e4]">

        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Key Steps
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">

          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 md:p-8 rounded-xl shadow flex gap-6 items-start hover:shadow-lg transition"
            >
              {/* ICON */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white shrink-0">
                {step.icon}
              </div>

              {/* TEXT */}
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  STEP {i + 1}
                </p>

                <h3 className="text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}