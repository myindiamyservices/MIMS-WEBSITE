import { Leaf, Recycle, Factory, Globe } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

function About() {
  return (
    <section className="pb-20 px-6 ">

      <div className="max-w-7xl mx-auto">

        {/* BREADCRUMB */}
        <div className=" mb-4">
          <Breadcrumb title="About Us" />
        </div>

        {/* HERO */}
        {/* HERO */}
<div className="text-center pt-6 md:pt-8 mb-16">
  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
    About MyIndiaMyServices
  </h1>

  <p className="mt-4 max-w-2xl mx-auto text-gray-600">
    Responsible Recycling for a Better India — turning old vehicles into value while protecting the environment.
  </p>
</div>

        {/* INTRO (FULL RESTORED + PREMIUM) */}
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8fbff] to-[#eef5f9] rounded-2xl p-8 md:p-10 shadow-lg mb-12 border border-gray-100">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.08),_transparent_40%)]"></div>

          <div className="relative">

            <p className="leading-relaxed text-lg text-gray-800">
              “My India My Services”(MIMS)-India’s Largest Scrap Sourcing Company is built on a simple yet powerful idea —
              <span className="font-semibold text-green-700">
                {" "}Responsible Recycling for a Better India.
              </span>
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              At My India My Services, we believe that progress and sustainability must go hand in hand.
              Every vehicle that reaches the end of its life still carries value — not just in materials,
              but in its potential to contribute to a cleaner and greener future.
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed">
              Our mission is to transform that potential into impact by ensuring that every vehicle is
              processed safely, legally, and in an environmentally responsible manner.
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed">
              We follow a structured and compliant approach to vehicle recycling — from doorstep pickup
              and documentation to dismantling and certified disposal. By doing so, we help reduce harmful
              emissions, minimize waste, and promote the reuse of valuable resources.
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed">
              Our services are designed to be seamless and trustworthy, ensuring that customers experience
              convenience while contributing to a larger environmental cause.
            </p>

            {/* QUOTE */}
            <div className="mt-6 text-center">
              <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                “मेरा देश, मेरी सेवा”
              </p>
              <p className="text-sm text-gray-500 mt-1">
                This is not just a slogan — it is the foundation of everything we do.
              </p>
            </div>

            <p className="mt-5 text-gray-700 leading-relaxed">
              It represents a mindset where every action is done with responsibility toward the nation —
              from reducing pollution to making eco-conscious decisions.
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed">
              At My India My Services, this belief means taking ownership of India’s future —
              cleaner air, safer cities, and a sustainable ecosystem.
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed">
              We don’t just recycle vehicles — we contribute to a vision of a better India "myindiamyservices@gmail.com".
            </p>

            <p className="mt-6 text-center font-semibold text-green-700">
              My India My Services — Driven by Responsibility, Dedicated to the Nation 🇮🇳
            </p>

          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            { icon: Leaf, title: "Sustainable India", desc: "Reducing pollution and promoting eco-friendly recycling." },
            { icon: Recycle, title: "Our Impact", desc: "Thousands of vehicles responsibly scrapped." },
            { icon: Factory, title: "Environment Focus", desc: "Saving natural resources through recycling." },
            { icon: Globe, title: "Circular Economy", desc: "Supporting reuse and reducing scrap imports." }
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-white to-[#f8fafc] p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100">
              <item.icon className="text-green-600 mb-3" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
          {[
            { num: "100+", label: "Cities" },
            { num: "5.6K+", label: "Vehicles Scrapped" },
            { num: "5.0", label: "Rating" },
            { num: "100%", label: "Legal" }
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-white to-[#f8fafc] p-6 rounded-xl shadow-md border border-gray-100">
              <p className="text-2xl font-bold text-green-600">{item.num}</p>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CSR */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-lg">

          <div className="w-full md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1592928302636-c83cf1d9b92c"
              className="rounded-xl shadow-lg"
              alt="Tree Plantation"
            />
          </div>

          <div className="text-white md:w-2/3">

            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              🌱 Tree Plantation Initiative
            </h2>

            <p className="text-white/90 mb-3">
              For every vehicle processed, we plant trees every 6 months.
            </p>

            <p className="text-white/80 mb-4 text-sm">
              Helping reduce carbon footprint and build a greener India.
            </p>

            <button className="bg-white text-green-700 px-5 py-2 rounded-lg font-medium hover:scale-105 transition">
              Join Initiative
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;