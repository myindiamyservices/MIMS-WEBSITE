import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "../assets/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Header({ openModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktopLayout, setIsDesktopLayout] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  const navigate = useNavigate();
  const location = useLocation();

  // md+ breakpoint — transform + hide-on-scroll only apply here (mobile/tablet portrait always see the bar)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktopLayout(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // SCROLL BEHAVIOR — hide-on-scroll only when desktop layout is active; never auto-hide on narrow viewports
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const desktop = window.matchMedia("(min-width: 768px)").matches;

      if (!desktop) {
        setShowHeader(true);
      } else if (currentScrollY > lastY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setScrolled(currentScrollY > 30);
      lastY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHowItWorksClick = () => {
    setMobileOpen(false);

    if (location.pathname === "/") {
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        document.getElementById("services")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        !isDesktopLayout || showHeader ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white"
          : "bg-gradient-to-r from-[#e6eef2] to-[#dfe8e4]"
      }`}
    >
      <div className={scrolled ? "shadow-md" : ""}>
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 relative">

          {/* TOP BAR */}
          <div className="hidden md:flex justify-end items-center text-sm text-gray-600 py-2 mt-2 gap-6">
            <Link to="/about" className="hover:text-green-600 transition">{t("About Us")}</Link>
            <Link to="/contact" className="hover:text-green-600 transition">{t("Contact Us")}</Link>
            <Link to="/faq" className="hover:text-green-600 transition">{t("FAQs")}</Link>
            <span>{t("Call us on")} : <b>+91 931-1244-755</b></span>
          </div>

          {/* LINE */}
          <div className="w-[720px] ml-auto h-[1px] bg-gray-400 mb-1"></div>

          {/* MAIN NAV */}
          <div className="flex items-center justify-between h-[60px] relative z-10 overflow-visible">

            {/* LEFT */}
            <div className="flex items-center gap-3">

              {/* DESKTOP BRAND */}
              <div className="hidden md:flex items-start">
                <div className="brand-logo-wrap">
                  <img
                    src={logo}
                    alt="My India My Services logo"
                    className="brand-logo h-[170px] md:h-[230px] w-auto object-contain relative -top-5 md:-top-7"
                  />
                </div>

                <div className="flex flex-col leading-tight -ml-14 md:-ml-19 mt-2 md:mt-14">
                  <p className="font-bold text-[#BD3333] text-[18px] md:text-[20px]">
                    MY INDIA
                  </p>
                  <p className="text-green-600 font-bold text-[18px] md:text-[20px]">
                    MY SERVICES
                  </p>
                </div>
              </div>

              {/* MOBILE BRAND */}
              <div className="flex md:hidden items-center gap-2">
                <div className="brand-logo-wrap">
                  <img
                    src={logo}
                    alt="My India My Services logo"
                    className="brand-logo h-[100px] w-auto object-contain"
                  />
                </div>

                <div className="flex flex-col leading-tight">
                  <p className="font-bold text-[#BD3333] text-[14px]">
                    MY INDIA
                  </p>
                  <p className="text-green-600 font-bold text-[14px]">
                    MY SERVICES
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT DESKTOP */}
            <div className="hidden md:flex items-center gap-5 text-[15px] font-medium -mt-2">

              <button onClick={handleHowItWorksClick} className="hover:text-green-600 transition">
                {t("How it Works")}
              </button>

              <Link to="/cod-services?service=purchase" className="hover:text-green-600 transition">
                {t("Cod Purchase")}
              </Link>
              <Link to="/cod-services?service=sale" className="hover:text-green-600 transition">
                {t("Cod Sales")}
              </Link>
              <Link to="/cod-services?service=new_vehicle" className="hover:text-green-600 transition">
                {t("Call for New Vehicle")}
              </Link>

              <Link to="/partners" className="hover:text-green-600 transition">
                {t("Partners")}
              </Link>

              <Link to="/customer-login" className="text-green-600 hover:text-green-700 transition">
                {t("Customer Login")}
              </Link>

              {/* 🌐 ENGLISH / HINDI TOGGLE BUTTON */}
              <div className="flex items-center bg-white/90 p-1 rounded-full border border-gray-300 shadow-sm gap-0.5">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                    language === "en"
                      ? "bg-green-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-black hover:bg-gray-100"
                  }`}
                  aria-label="Switch to English"
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("hi")}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                    language === "hi"
                      ? "bg-green-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-black hover:bg-gray-100"
                  }`}
                  aria-label="हिंदी में बदलें"
                >
                  हिन्दी
                </button>
              </div>

              <button
                onClick={() => {
                  openModal();
                  setMobileOpen(false);
                }}
                className="btn-primary"
              >
                {t("Get Instant Quote")}
              </button>
            </div>

            {/* MOBILE RIGHT CONTROLS: LANGUAGE SWITCH + HAMBURGER */}
            <div className="flex md:hidden items-center gap-2">
              <div className="flex items-center bg-white/90 p-0.5 rounded-full border border-gray-300 shadow-sm">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-0.5 text-xs font-bold rounded-full transition-all ${
                    language === "en" ? "bg-green-600 text-white" : "text-gray-700"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("hi")}
                  className={`px-2 py-0.5 text-xs font-bold rounded-full transition-all ${
                    language === "hi" ? "bg-green-600 text-white" : "text-gray-700"
                  }`}
                >
                  हिं
                </button>
              </div>

              <button
                className="p-1 text-gray-800"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 flex flex-col gap-5 relative z-[60] border-t border-gray-100">

          {/* MOBILE LANGUAGE PICKER */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
              <Globe size={16} className="text-green-600" />
              {language === "hi" ? "भाषा / Language:" : "Language:"}
            </span>
            <div className="flex items-center bg-gray-100 p-0.5 rounded-full border border-gray-300">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  language === "en" ? "bg-green-600 text-white shadow" : "text-gray-700"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage("hi")}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  language === "hi" ? "bg-green-600 text-white shadow" : "text-gray-700"
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          <button onClick={handleHowItWorksClick} className="text-left font-medium">
            {t("How it Works")}
          </button>

          <Link to="/cod-services?service=purchase" onClick={() => setMobileOpen(false)} className="font-medium">
            {t("Cod Purchase")}
          </Link>
          <Link to="/cod-services?service=sale" onClick={() => setMobileOpen(false)} className="font-medium">
            {t("Cod Sales")}
          </Link>
          <Link to="/cod-services?service=new_vehicle" onClick={() => setMobileOpen(false)} className="font-medium">
            {t("Call for New Vehicle")}
          </Link>

          <Link to="/partners" onClick={() => setMobileOpen(false)} className="font-medium">
            {t("Partners")}
          </Link>

          <Link
            to="/customer-login"
            onClick={() => setMobileOpen(false)}
            className="text-green-600 font-semibold"
          >
            {t("Customer Login")}
          </Link>

          <button
            onClick={() => {
              openModal();
              setMobileOpen(false);
            }}
            className="btn-primary"
          >
            {t("Get Instant Quote")}
          </button>

          <div className="border-t pt-4 text-sm text-gray-500 flex flex-col gap-2">
            <Link to="/about" onClick={() => setMobileOpen(false)}>{t("About Us")}</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>{t("Contact Us")}</Link>
            <Link to="/faq" onClick={() => setMobileOpen(false)}>{t("FAQs")}</Link>
            <p>{t("Call:")} +91 931-1244-755</p>
          </div>

        </div>
      )}
    </header>
  );
}

export default Header;
