import { Leaf, Recycle, Factory, Globe } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { language, t } = useLanguage();

  const isHindi = language === "hi";

  const cards = isHindi
    ? [
        { icon: Leaf, title: "सतत भारत", desc: "प्रदूषण कम करना और पर्यावरण-अनुकूल रीसाइक्लिंग को बढ़ावा देना।" },
        { icon: Recycle, title: "हमारा प्रभाव", desc: "हजारों वाहन जिम्मेदारी और कानूनी रूप से स्क्रैप किए गए।" },
        { icon: Factory, title: "पर्यावरण फोकस", desc: "रीसाइक्लिंग के जरिए प्राकृतिक संसाधनों का संरक्षण।" },
        { icon: Globe, title: "सर्कुलर इकोनॉमी", desc: "पुनः उपयोग को बढ़ावा और नए स्क्रैप आयात में कमी।" }
      ]
    : [
        { icon: Leaf, title: "Sustainable India", desc: "Reducing pollution and promoting eco-friendly recycling." },
        { icon: Recycle, title: "Our Impact", desc: "Thousands of vehicles responsibly scrapped." },
        { icon: Factory, title: "Environment Focus", desc: "Saving natural resources through recycling." },
        { icon: Globe, title: "Circular Economy", desc: "Supporting reuse and reducing scrap imports." }
      ];

  const stats = isHindi
    ? [
        { num: "100+", label: "शहर" },
        { num: "5.6K+", label: "स्क्रैप किए गए वाहन" },
        { num: "5.0", label: "रेटिंग" },
        { num: "100%", label: "कानूनी" }
      ]
    : [
        { num: "100+", label: "Cities" },
        { num: "5.6K+", label: "Vehicles Scrapped" },
        { num: "5.0", label: "Rating" },
        { num: "100%", label: "Legal" }
      ];

  return (
    <section className="pb-20 px-6 ">

      <div className="max-w-7xl mx-auto">

        {/* BREADCRUMB */}
        <div className=" mb-4">
          <Breadcrumb title="About Us" />
        </div>

        {/* HERO */}
        <div className="text-center pt-6 md:pt-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {t("About My India My Services")}
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            {t("Responsible Recycling for a Better India — turning old vehicles into value while protecting the environment.")}
          </p>
        </div>

        {/* INTRO */}
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8fbff] to-[#eef5f9] rounded-2xl p-8 md:p-10 shadow-lg mb-12 border border-gray-100">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.08),_transparent_40%)]"></div>

          <div className="relative">

            {isHindi ? (
              <>
                <p className="leading-relaxed text-lg text-gray-800">
                  “My India My Services”(MIMS) - भारत की सबसे बड़ी स्क्रैप सोर्सिंग कंपनी एक सरल और सशक्त विचार पर आधारित है —
                  <span className="font-semibold text-green-700">
                    {" "}बेहतर भारत के लिए जिम्मेदार रीसाइक्लिंग।
                  </span>
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  माई इंडिया माई सर्विसेज में, हमारा मानना है कि प्रगति और पर्यावरण संरक्षण एक साथ चलने चाहिए।
                  हर वाहन जो अपनी उम्र पूरी कर चुका है, वह अब भी मूल्य रखता है — सिर्फ धातुओं में नहीं, बल्कि एक स्वच्छ और हरित भविष्य में योगदान देने की अपनी क्षमता में।
                </p>

                <p className="mt-3 text-gray-700 leading-relaxed">
                  हमारा मिशन यह सुनिश्चित करना है कि हर वाहन को सुरक्षित, कानूनी और पर्यावरण के प्रति जिम्मेदार तरीके से प्रोसेस किया जाए।
                </p>

                <p className="mt-3 text-gray-700 leading-relaxed">
                  हम वाहन रीसाइक्लिंग के लिए एक संरचित दृष्टिकोण अपनाते हैं — घर से पिकअप और दस्तावेजीकरण से लेकर प्रमाणित निपटान तक।
                </p>

                <p className="mt-3 text-gray-700 leading-relaxed">
                  हमारी सेवाएं पूरी तरह पारदर्शी और भरोसेमंद हैं, जिससे ग्राहकों को बिना किसी परेशानी के पर्यावरण सुरक्षा में योगदान देने का अवसर मिलता है।
                </p>

                {/* QUOTE */}
                <div className="mt-6 text-center">
                  <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    “मेरा देश, मेरी सेवा”
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    यह केवल एक नारा नहीं है — यह हमारे हर कार्य की नींव है।
                  </p>
                </div>

                <p className="mt-5 text-gray-700 leading-relaxed">
                  यह एक ऐसी सोच का प्रतिनिधित्व करता है जहां हर कदम राष्ट्र के प्रति जिम्मेदारी के साथ उठाया जाता है।
                </p>

                <p className="mt-3 text-gray-700 leading-relaxed">
                  माई इंडिया माई सर्विसेज में इस विश्वास का मतलब है भारत के भविष्य की जिम्मेदारी लेना — स्वच्छ हवा, सुरक्षित शहर और एक स्थायी पर्यावरण।
                </p>

                <p className="mt-3 text-gray-700 leading-relaxed">
                  हम केवल वाहनों को रीसायकल नहीं करते — हम एक बेहतर भारत के निर्माण में योगदान देते हैं।
                </p>

                <p className="mt-6 text-center font-semibold text-green-700">
                  माई इंडिया माई सर्विसेज — जिम्मेदारी से प्रेरित, राष्ट्र को समर्पित 🇮🇳
                </p>
              </>
            ) : (
              <>
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
              </>
            )}

          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {cards.map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-white to-[#f8fafc] p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100">
              <item.icon className="text-green-600 mb-3" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
          {stats.map((item, i) => (
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
              🌱 {t("Tree Plantation Initiative")}
            </h2>

            <p className="text-white/90 mb-3">
              {t("For every vehicle processed, we plant trees every 6 months.")}
            </p>

            <p className="text-white/80 mb-4 text-sm">
              {t("Helping reduce carbon footprint and build a greener India.")}
            </p>

            <button className="bg-white text-green-700 px-5 py-2 rounded-lg font-medium hover:scale-105 transition">
              {t("Join Initiative")}
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
