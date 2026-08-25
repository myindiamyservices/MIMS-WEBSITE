import { useEffect, useState } from "react";
import { X } from "lucide-react";
import mimsPoster from "../assets/mims-poster.jpg";

function PosterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-3 py-5 sm:px-6">
      <div className="relative w-full max-w-[92vw] sm:max-w-[480px] md:max-w-[550px] lg:max-w-[600px]">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close poster"
          className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition hover:scale-105 hover:bg-gray-100"
        >
          <X size={22} />
        </button>

        <img
          src={mimsPoster}
          alt="My India My Services Poster"
          className="max-h-[85vh] w-auto mx-auto rounded-lg object-contain shadow-2xl"
        />
      </div>
    </div>
  );
}

export default PosterPopup;
