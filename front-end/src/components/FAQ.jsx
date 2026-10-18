import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function FAQ({ showTitle = true }) {
  const { language, t } = useLanguage();

  const faqs = [
    {
      q: t("What is My India My Services?"),
      a: t("My India My Services is India's largest scrap sourcing platform that helps you recycle your vehicle safely, legally, and at the best price."),
    },
    {
      q: t("How does the scrapping process work?"),
      a: t("You get an instant quote, schedule a pickup, receive payment, and get a scrapping certificate — all in a simple 4-step process."),
    },
    {
      q: t("Do you accept vehicles with missing parts?"),
      a: t("Yes, we accept vehicles with minor missing parts such as battery, or small components. However, vehicles without an engine are not accepted. Terms & conditions apply."),
    },
    {
      q: t("Is pickup really free?"),
      a: t("Yes, we provide completely free doorstep pickup in certain cities. Terms & conditions apply."),
    },
    {
      q: t("When will I receive payment?"),
      a: t("Payment is processed instantly at the time of vehicle pickup."),
    },
    {
      q: t("Do I get a legal scrapping certificate?"),
      a: t("Yes, you will receive a government-compliant scrapping certificate."),
    },
    {
      q: t("Do you operate in my city?"),
      a: t("We are available in 120+ cities across India and expanding rapidly."),
    },
    {
      q: t("Is my vehicle required to be in running condition?"),
      a: t("No, both running and non-running vehicles are accepted."),
    },
  ];

  const [active, setActive] = useState(null);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="pt-16 pb-20 px-6 bg-gradient-to-r from-[#e6eef2] to-[#dfe8e4]">

      {/* TITLE */}
      {showTitle && (
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-green-600">{t("Frequently Asked")}</span>{" "}
            <span className="text-blue-600">{t("Questions")}</span>
          </h1>
        </div>
      )}

      {/* FAQ LIST */}
      <div className="max-w-4xl mx-auto space-y-3">

        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl px-5 py-4 cursor-pointer shadow-sm hover:shadow-md transition"
            onClick={() => toggle(i)}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium text-sm md:text-base">
                {item.q}
              </p>

              <motion.div
                animate={{ rotate: active === i ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-gray-500"
              >
                <ChevronDown size={20} />
              </motion.div>
            </div>

            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}

      </div>

      {/* 🔥 SUPPORT BOX */}
      <div className="max-w-4xl mx-auto mt-10 bg-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">

        <div className="flex items-center gap-3">
          <div className="text-2xl">📞</div>
          <div>
            <p className="font-semibold">{t("Still have Questions?")}</p>
            <p className="text-sm text-gray-600">
              {t("Our team is available to help you anytime")}
            </p>
          </div>
        </div>

        <Link to="/contact">
          <button className="btn-primary">
            {t("Contact Support")}
          </button>
        </Link>

      </div>

    </section>
  );
}

export default FAQ;
