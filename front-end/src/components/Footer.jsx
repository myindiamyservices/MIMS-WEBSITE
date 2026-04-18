import logo from "../assets/logo.png";
import { Check, Globe, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#dbe7ec] via-[#e6f0ea] to-[#e3ece7] px-6 py-14">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">

          {/* LEFT */}
          <div>
            <div className="flex items-center mb-3 -ml-6">
  <img
    src={logo}
    className="h-32 w-auto object-contain flex-shrink-0"
  />

  <h2 className="text-lg md:text-xl font-semibold whitespace-nowrap leading-none flex items-center ml-[-12px]">
    <span className="text-[#BD3333]">MyIndia</span>
    <span className="text-green-600 ml-1">MyServices</span>
  </h2>
</div>
            <p className="text-gray-600 text-sm mb-2">
              India’s largest and most trusted scrap sourcing platform.
            </p>

            <p className="text-xs text-gray-600 mb-5">
              A sustainable solution for safe and legal vehicle recycling.
            </p>

            {/* CONTACT ICONS */}
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white rounded-md shadow-sm hover:scale-105 transition">
                <Globe size={16} />
              </a>

              <a href="mailto:myindiamyservices@gmail.com" className="p-2 bg-white rounded-md shadow-sm hover:scale-105 transition">
                <Mail size={16} />
              </a>

              <a href="tel:+91 9311244755" className="p-2 bg-white rounded-md shadow-sm hover:scale-105 transition">
                <Phone size={16} />
              </a>

              <a href="https://www.google.com/maps?q=28.6673497,77.2825524" target="_blank"  rel="noopener noreferrer" className="p-2 bg-white rounded-md shadow-sm hover:scale-105 transition">
                <MapPin size={16} />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm">

              <li>
                <Link to="/about" className="hover:text-black transition">
                  About Us
                </Link>
              </li>

              <li className="hover:text-black cursor-pointer transition">
                Reports
              </li>

              <li>
                <Link to="/partners" className="hover:text-black transition">
                  Partners
                </Link>
              </li>

              
                <li>
                  <Link to="/faq" className="hover:text-black transition">
                    FAQs
                  </Link>
                </li>
           </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Services</h3>
            <ul className="space-y-2 text-gray-600 text-sm">

              <li className="hover:text-black cursor-pointer transition">
                Scrap Vehicle
              </li>

              <li className="hover:text-black cursor-pointer transition">
                Pickup Service
              </li>

              <li className="hover:text-black cursor-pointer transition">
                Inspection
              </li>

            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Legal</h3>
            <ul className="space-y-2 text-gray-600 text-sm">

              <li>
                <Link to="/contact" className="hover:text-black transition">
                  Contact Support
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="hover:text-black transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:text-black transition">
                  Terms & Conditions
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
              Established Since 2021
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-green-100 p-1.5 rounded-full">
                <Check size={12} className="text-green-600" />
              </span>
              Govt Authorized
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-green-100 p-1.5 rounded-full">
                <Check size={12} className="text-green-600" />
              </span>
              120+ Locations
            </div>

          </div>

          {/* COPYRIGHT */}
          <p className="text-gray-500 text-xs text-center">
            © 2026 MyIndiaMyServices. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;