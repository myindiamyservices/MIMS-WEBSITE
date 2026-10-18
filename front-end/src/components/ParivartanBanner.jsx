import { motion as Motion } from "framer-motion";
import { Award, Heart, Sparkles, CheckCircle2, PhoneCall, ArrowRight } from "lucide-react";
import parivartanBanner from "../assets/parivartan-yojna.png";

function ParivartanBanner({ openModal }) {
  return (
    <section
      id="parivartan-yojna"
      itemScope
      itemType="https://schema.org/GovernmentService"
      className="py-8 sm:py-10 px-4 sm:px-6 md:px-10 bg-white/80 border-y border-emerald-100"
      aria-label="परिवर्तन योजना - कमर्शियल वाहन स्क्रैप योजना Delhi NCR"
    >
      <meta itemProp="serviceType" content="Vehicle Scrappage and Fleet Renewal" />
      <div className="max-w-6xl mx-auto">
        
        {/* BANNER IMAGE - FIXED: full aspect ratio with no cropping/clipping */}
        <Motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-full rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-gray-200/80 bg-white"
        >
          <img
            src={parivartanBanner}
            alt="परिवर्तन योजना - पुरानी बस और ट्रक स्क्रैप योजना Delhi NCR | My India My Services"
            title="परिवर्तन योजना - सुरक्षित सफर, उज्जवल भविष्य | MIMS"
            width={1672}
            height={941}
            className="w-full h-auto block"
            loading="eager"
            itemProp="image"
          />
        </Motion.div>

        {/* CONTENT UNDER BANNER - COMPACT SINGLE-VIEW LAYOUT */}
        <Motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 sm:mt-8"
        >
          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              विशेष पहल • Delhi NCR
            </span>

            <h2 itemProp="name" className="mt-2.5 text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
              परिवर्तन योजना – आज ही स्क्रैप कराएं और कल को बेहतर बनाएं!
            </h2>
            <span className="sr-only">
              Parivartan Yojna - Commercial Vehicle Scrap Scheme in Delhi NCR for old buses, school buses, and trucks.
            </span>
          </div>

          {/* 2-COLUMN BALANCED GRID (ALL CONTENT IN ONE COMPACT VIEW) */}
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            
            {/* LEFT CARD: INITIATIVE & OBJECTIVE */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white to-emerald-50/40 border border-emerald-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-emerald-700 font-bold text-base sm:text-lg">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm shrink-0">
                    <Award className="w-4 h-4" />
                  </span>
                  <span>50+ वाहन स्क्रैप एवं नई शुरुआत</span>
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  <strong className="text-gray-900 font-semibold">My India My Services</strong> की परिवर्तन योजना के तहत{" "}
                  <span className="text-emerald-700 font-semibold">Delhi NCR</span> में अब तक{" "}
                  <strong className="text-emerald-700 font-bold">50+ पुरानी बसों और ट्रकों</strong> को स्क्रैप करवाकर ग्राहकों को{" "}
                  <strong className="text-gray-900">नए वाहन दिलाने*</strong> में महत्वपूर्ण योगदान दिया गया है।
                </p>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-2 border-t border-emerald-100/70">
                  इस पहल का उद्देश्य पुराने वाहनों को स्क्रैप करके ग्राहकों को नए वाहन अपनाने के लिए प्रोत्साहित करना, सुरक्षित परिवहन को बढ़ावा देना और स्वच्छ एवं बेहतर भविष्य की दिशा में सकारात्मक कदम उठाना है।
                </p>
              </div>

              {/* SANKALP BANNER INSIDE LEFT CARD */}
              <div className="mt-4 pt-4 border-t border-emerald-100/90 bg-emerald-50/70 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-2xl">
                <p className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                  हमारा संकल्प — पुराने वाहनों से नए अवसरों तक, और आज के प्रयासों से कल के बेहतर भविष्य तक!
                </p>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-emerald-700">
                  आज स्क्रैप करें, कल को बेहतर कल बनाएं।
                </p>
              </div>
            </div>

            {/* RIGHT CARD: DEALERS GRATITUDE & ACTIONS */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 text-white shadow-md flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm shrink-0">
                    <Heart className="w-4 h-4 text-rose-200 fill-rose-200" />
                  </span>
                  <h3 className="text-base sm:text-lg font-bold leading-tight">
                    दिल से धन्यवाद – Delhi NCR के हमारे सभी डीलर्स और पार्टनर्स को!
                  </h3>
                </div>

                <p className="text-emerald-50 text-xs sm:text-sm leading-relaxed">
                  आप सभी के सहयोग, विश्वास और योगदान के बिना यह उपलब्धि संभव नहीं थी। My India My Services के माध्यम से इस योजना के अंतर्गत ग्राहकों को नए बस और ट्रक उपलब्ध कराने में आपके सहयोग ने इस पहल को सफल बनाने में अहम भूमिका निभाई है।
                </p>

                <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed">
                  हम उन सभी डीलर्स, पार्टनर्स और ग्राहकों के आभारी हैं जिन्होंने इस परिवर्तन का हिस्सा बनकर एक नई शुरुआत की।
                </p>
              </div>

              {/* BRANDING & ACTIONS */}
              <div className="mt-5 pt-4 border-t border-emerald-600/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-center sm:text-left">
                  <div className="text-sm sm:text-base font-extrabold tracking-wide text-white">
                    My India My Services
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-emerald-200 uppercase tracking-wider">
                    Always There For You
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
                  <button
                    type="button"
                    onClick={() => openModal ? openModal("Commercial Vehicle") : null}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white text-emerald-800 hover:bg-emerald-50 font-semibold text-xs sm:text-sm shadow transition"
                  >
                    <span>Get Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="tel:+919311244755"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg border border-emerald-400/50 bg-emerald-900/40 text-emerald-100 hover:bg-emerald-900/60 text-xs sm:text-sm transition"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Call</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </Motion.div>
      </div>
    </section>
  );
}

export default ParivartanBanner;
