import { Phone, MapPin, Car, Mail } from "lucide-react";
import { useState } from "react";
import API from "../api";
import { useLanguage } from "../context/LanguageContext";

function Callback() {
  const { language, t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name.trim()) newErrors.name = language === "hi" ? "नाम आवश्यक है" : "Name is required";

    if (!form.phone.trim()) newErrors.phone = language === "hi" ? "फ़ोन नंबर आवश्यक है" : "Phone is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = language === "hi" ? "कृपया मान्य 10 अंकों का नंबर दर्ज करें" : "Enter valid 10 digit number";

    if (!form.location.trim()) newErrors.location = language === "hi" ? "स्थान आवश्यक है" : "Location is required";

    if (!form.description.trim())
      newErrors.description = language === "hi" ? "विवरण आवश्यक है" : "Description is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      await API.post("/callback", form);

      setForm({
        name: "",
        phone: "",
        location: "",
        description: "",
      });

      setErrors({});
      setSuccess(t("Callback requested successfully ✅"));

      setTimeout(() => setSuccess(""), 3000);

    } catch (err) {
      setSuccess("");
    }
  };

  return (
    <section className="pt-12 pb-16 px-4 md:px-6 bg-gradient-to-r from-[#e6eef2] to-[#dfe8e4]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-md">

        {/* LEFT PANEL */}
        <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white px-6 py-8 md:p-10 flex flex-col justify-between">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {t("Get in Touch")}
            </h2>

            <p className="mb-6 text-white/90 text-sm md:text-base">
              {t("Planning to scrap your vehicle? Request a callback and our team will take care of everything — from instant valuation to final certification.")}
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm">{t("Quick Response")}</p>
                  <p className="text-xs text-white/80">
                    {t("We respond within 24 hours")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm">{t("Email Support")}</p>
                  <p className="text-xs text-white/80">
                    myindiamyservices@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm">{t("Pan-India Service")}</p>
                  <p className="text-xs text-white/80">
                    {t("Serving 120+ cities")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Car size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm">{t("All Vehicle Types")}</p>
                  <p className="text-xs text-white/80">
                    {t("Cars, bikes, commercial vehicles")}
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-6 bg-white/20 px-4 py-3 rounded-lg text-xs text-white/90">
            {language === "hi"
              ? "आपका डेटा पूरी तरह सुरक्षित है। हम आपकी गोपनीयता का सम्मान करते हैं।"
              : "Your data is secure. We respect your privacy and never share your information."}
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-white px-6 py-8 md:p-10">

          <h2 className="text-xl md:text-2xl font-bold mb-5">
            {language === "hi" ? (
              <>
                <span className="text-green-600">कॉलबैक</span>{" "}
                <span className="text-blue-600">का अनुरोध करें</span>
              </>
            ) : (
              <>
                <span className="text-green-600">Request</span>{" "}
                <span className="text-blue-600">a Callback</span>
              </>
            )}
          </h2>

          {/* SUCCESS MESSAGE */}
          {success && (
            <div className="bg-green-100 border border-green-300 text-green-700 text-sm px-4 py-2 rounded-md mb-3 shadow-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                {language === "hi" ? "आपका नाम*" : "Your Name*"}
              </label>
              <input
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  setErrors({ ...errors, name: "" });
                }}
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder={language === "hi" ? "पूरा नाम दर्ज करें" : "Full Name"}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                {language === "hi" ? "फ़ोन नंबर*" : "Phone Number*"}
              </label>
              <input
                value={form.phone}
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value });
                  setErrors({ ...errors, phone: "" });
                }}
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.phone ? "border-red-500" : ""
                }`}
                placeholder={language === "hi" ? "10 अंकों का मोबाइल नंबर" : "Phone Number"}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* LOCATION */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                {language === "hi" ? "वाहन का स्थान / शहर*" : "Vehicle Location*"}
              </label>
              <input
                value={form.location}
                onChange={(e) => {
                  setForm({ ...form, location: e.target.value });
                  setErrors({ ...errors, location: "" });
                }}
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.location ? "border-red-500" : ""
                }`}
                placeholder={language === "hi" ? "शहर या क्षेत्र दर्ज करें" : "Type Vehicle Location"}
              />
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.location}
                </p>
              )}
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                {language === "hi" ? "वाहन का विवरण*" : "Vehicle Description*"}
              </label>
              <textarea
                value={form.description}
                onChange={(e) => {
                  setForm({ ...form, description: e.target.value });
                  setErrors({ ...errors, description: "" });
                }}
                className={`w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.description ? "border-red-500" : ""
                }`}
                rows="3"
                placeholder={language === "hi" ? "कंपनी, मॉडल, वर्ष, स्थिति आदि..." : "Vehicle Description"}
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg text-sm font-medium text-white 
              bg-gradient-to-r from-green-500 to-green-700 
              transform transition-all duration-300 ease-in-out
              hover:scale-105 hover:-translate-y-0.5
              active:scale-95
              hover:shadow-xl hover:shadow-green-500/40
              hover:brightness-110"
            >
              {t("Request Callback")}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Callback;