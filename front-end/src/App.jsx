import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";

// HOME COMPONENTS
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyScrap from "./components/WhyScrap";
import Availability from "./components/Availability";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Callback from "./components/Callback";
import ScrollToTop from "./components/ScrollToTop";
import SeoHead from "./components/SeoHead";

// CONTACT PAGE
import Contact from "./components/Contact";

// PAGES
import CustomerLogin from "./pages/CustomerLogin";
import Register from "./pages/Register";
import HowItWorksPage from "./pages/HowItWorksPage";
import Otp from "./pages/Otp";
import About from "./pages/About";
import Partner from "./pages/Partner";
import FAQPage from "./pages/FAQPage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import CodServices from "./pages/CodServices";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [quoteLocation, setQuoteLocation] = useState("");

  const openModal = (type = "", location = "") => {
    setSelectedType(typeof type === "string" ? type : "");
    setQuoteLocation(typeof location === "string" ? location : "");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedType("");
    setQuoteLocation("");
  };

  return (
    // ✅ GLOBAL FIX (MOST IMPORTANT)
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#e6eef2]">

      {/* HEADER */}
      <Header openModal={openModal} />

      {/* SCROLL FIX */}
      <ScrollToTop />

      <SeoHead />

      {/* MAIN CONTENT */}
      <main className="flex-grow pt-[80px] md:pt-[90px]">

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Hero openModal={openModal} />
                <Stats />
                <Availability openModal={openModal} />
                <WhyScrap openModal={openModal} />
                <HowItWorks />
                <Testimonials />
                <FAQ />
                <Callback />
              </>
            }
          />

          {/* PAGES */}
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cod-services" element={<CodServices />} />

        </Routes>

      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODAL */}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeModal}
        defaultCategory={selectedType}
        defaultLocation={quoteLocation}
      />

    </div>
  );
}

export default App;