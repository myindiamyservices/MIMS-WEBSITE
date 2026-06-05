import { useEffect, useState } from "react";
import { X } from "lucide-react";
import environmentWeekBanner from "../assets/ENVIRONMENT WEEK 2026.jpg.jpeg";

function EnvironmentWeekPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-3 py-5 sm:px-6">
      <div className="relative w-full max-w-[92vw] sm:max-w-[520px] md:max-w-[700px] lg:max-w-[860px] xl:max-w-[960px]">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close Environment Week banner"
          className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition hover:scale-105 hover:bg-gray-100"
        >
          <X size={22} />
        </button>

        <img
          src={environmentWeekBanner}
          alt="Environment Week 2026 - Inspired by Recycling"
          className="max-h-[92vh] w-full rounded-lg object-contain shadow-2xl"
        />
      </div>
    </div>
  );
}

export default EnvironmentWeekPopup;
