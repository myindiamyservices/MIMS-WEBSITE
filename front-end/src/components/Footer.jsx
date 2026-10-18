import logo from "../assets/logo.png";
import { Check, Globe, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-[#dbe7ec] via-[#e6f0ea] to-[#e3ece7] px-6 py-14">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">

          {/* LEFT */}
          <div>
            <div className="flex items-center mb-3 -ml-6">
              <div className="brand-logo-wrap">
                <img
                  src={logo}
                  alt="My India My Services logo"
                  className="brand-logo h-[76px] w-auto object-contain flex-shrink-0"
                />
              </div>

              <h2 className="text-lg md:text-xl font-semibold whitespace-nowrap leading-none flex items-center ml-[-12px]">
                <span className="text-[#BD3333]">My India</span>
                <span className="text-green-600 ml-1">My Services</span>
              </h2>
            </div>
            <p className="text-gray-600 text-sm mb-2">
              {t("India’s largest and most trusted scrap sourcing platform.")}
            </p>

            <p className="text-xs text-gray-600 mb-5">
              {t("A sustainable solution for safe and legal vehicle recycling.")}
            </p>

            {/* CONTACT ICONS */}
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white rounded-md shadow-sm hover:scale-105 transition" aria-label="Website">
                <Globe size={16} />
              </a>

              <a href="mailto:myindiamyservices@gmail.com" className="p-2 bg-white rounded-md shadow-sm hover:scale-105 transition" aria-label="Email">
                <Mail size={16} />
              </a>

              <a href="tel:+91 9311244755" className="p-2 bg-white rounded-md shadow-sm hover:scale-105 transition" aria-label="Phone">
                <Phone size={16} />
              </a>

              <a href="https://www.google.com/maps?q=28.6673497,77.2825524" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-md shadow-sm hover:scale-105 transition" aria-label="Map">
                <MapPin size={16} />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">{t("Company")}</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link to="/about" className="hover:text-black transition">
                  {t("About Us")}
                </Link>
              </li>

              <li className="hover:text-black cursor-pointer transition">
                {t("Reports")}
              </li>

              <li>
                <Link to="/partners" className="hover:text-black transition">
                  {t("Partners")}
                </Link>
              </li>

              <li>
                <Link to="/faq" className="hover:text-black transition">
                  {t("FAQs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">{t("Services")}</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-black cursor-pointer transition">
                {t("Scrap Vehicle")}
              </li>

              <li className="hover:text-black cursor-pointer transition">
                {t("Pickup Service")}
              </li>

              <li className="hover:text-black cursor-pointer transition">
                {t("Inspection")}
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">{t("Legal")}</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link to="/contact" className="hover:text-black transition">
                  {t("Contact Support")}
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="hover:text-black transition">
                  {t("Privacy Policy")}
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:text-black transition">
                  {t("Terms & Conditions")}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* STATS */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-700">
            <div className="flex items-center gap-2">
              <span className="bg-green-100 p-1.5 rounded-full">
                <Check size={12} className="text-green-600" />
              </span>
              {t("Established Since 2021")}
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-green-100 p-1.5 rounded-full">
                <Check size={12} className="text-green-600" />
              </span>
              {t("Rvsf. Authorized", "RVSF अधिकृत")}
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-green-100 p-1.5 rounded-full">
                <Check size={12} className="text-green-600" />
              </span>
              {t("120+ Locations", "120+ स्थान")}
            </div>
          </div>

          {/* COPYRIGHT */}
          <p className="text-gray-500 text-xs text-center">
            {t("© 2026 My India My Services. All Rights Reserved.")}
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
