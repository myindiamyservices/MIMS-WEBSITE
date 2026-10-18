import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import parivartanBanner from "../assets/parivartan-yojna.png";

function PosterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  const handleLearnMore = () => {
    setIsOpen(false);
    document.getElementById("parivartan-yojna")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-3 py-5 sm:px-6">
      <div className="relative w-full max-w-[92vw] sm:max-w-[560px] md:max-w-[700px] lg:max-w-[800px] bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close poster"
          className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition shadow-lg"
        >
          <X size={20} />
        </button>

        <img
          src={parivartanBanner}
          alt="परिवर्तन योजना - सुरक्षित सफर, उज्जवल भविष्य"
          className="w-full h-auto max-h-[70vh] object-contain block mx-auto bg-black"
        />

        <div className="p-4 sm:p-5 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-100">
          <div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">
              परिवर्तन योजना – सुरक्षित सफर, उज्जवल भविष्य
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Delhi NCR में 50+ पुरानी बसों और ट्रकों को स्क्रैप कराकर नए वाहन दिलाने में योगदान।
            </p>
          </div>

          <button
            type="button"
            onClick={handleLearnMore}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm transition shrink-0 shadow-sm"
          >
            <span>पूरा विवरण देखें</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PosterPopup;
