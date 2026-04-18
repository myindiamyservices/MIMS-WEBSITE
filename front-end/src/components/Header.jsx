import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header({ openModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // ✅ NEW
  const navigate = useNavigate();
  const location = useLocation();

  // SCROLL BEHAVIOR
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setScrolled(window.scrollY > 30);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ❌ OLD FUNCTION NOT USED
  // const scrollToSection = ...

  // ✅ FIXED FUNCTION
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
      className={`fixed top-0 left-0 w-full z-40 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
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
            <Link to="/about" className="hover:text-green-600">About Us</Link>
            <Link to="/contact" className="hover:text-green-600">Contact Us</Link>
            <Link to="/faq" className="hover:text-green-600">FAQs</Link>
            <span>Call us on : <b>+91 931-1244-755</b></span>
          </div>

          {/* LINE */}
          <div className="w-[720px] ml-auto h-[1px] bg-gray-400 mb-1"></div>

          {/* MAIN NAV */}
          <div className="flex items-center justify-between h-[60px] relative z-10 overflow-visible">

            {/* LEFT */}
            <div className="flex items-center gap-3">

            {/* DESKTOP */}
           <div className="hidden md:flex items-start">

              <img
                src={logo}
                alt="logo"
                className="h-[170px] md:h-[230px] w-auto object-contain relative -top-5 md:-top-7"
              />

              <div  className="flex flex-col leading-tight -ml-14 md:-ml-19 mt-2 md:mt-14">
                <p className="font-bold text-[#BD3333] text-[18px] md:text-[20px]">
                  MY INDIA
                </p>
                <p className="text-green-600 font-bold text-[18px] md:text-[20px]">
                  MY SERVICES
                </p>
              </div>

            </div>

            {/* MOBILE */}
            <div className="flex md:hidden items-center ">

              <img
                src={logo}
                alt="logo"
                className="h-[160px] w-auto object-contain"
              />

              <div className="flex flex-col leading-tight -ml-10 -mt-3">
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

              {/* ✅ FIXED */}
              <button onClick={handleHowItWorksClick}>
                How it Works
              </button>

              <span>Buy Spares</span>

              <Link to="/partners">Partners</Link>

              <Link to="/customer-login" className="text-green-600">
                Customer Login
              </Link>

              <button
              onClick={() => {
                openModal();
                setMobileOpen(false);
              }}
              className="btn-primary"
            >
              Get Instant Quote
            </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 flex flex-col gap-5 relative z-10">

          {/* ✅ FIXED */}
          <button onClick={handleHowItWorksClick}>
            How it Works
          </button>

          <span>Buy Spares</span>

          <Link to="/partners" onClick={() => setMobileOpen(false)}>
            Partners
          </Link>

          <Link
            to="/customer-login"
            onClick={() => setMobileOpen(false)}
            className="text-green-600"
          >
            Customer Login
          </Link>

          <button
            onClick={() => {
              openModal();
              setMobileOpen(false);
            }}
            className="btn-primary"
          >
            Get Instant Quote
          </button>

          <div className="border-t pt-4 text-sm text-gray-500 flex flex-col gap-2">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/faq">FAQs</Link>
            <p>Call: +91 931-1244-755</p>
          </div>

        </div>
      )}
    </header>
  );
}

export default Header;