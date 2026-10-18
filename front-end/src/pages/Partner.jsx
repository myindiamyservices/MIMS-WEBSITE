import Breadcrumb from "../components/Breadcrumb";
import { useState } from "react";
import API from "../api";
import { useLanguage } from "../context/LanguageContext";

function Partner() {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name.trim()) newErrors.name = isHindi ? "नाम आवश्यक है" : "Name is required";

    if (!form.email.trim()) newErrors.email = isHindi ? "ईमेल आवश्यक है" : "Email is required";

    if (!form.phone.trim()) newErrors.phone = isHindi ? "फ़ोन नंबर आवश्यक है" : "Phone is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = isHindi ? "मान्य 10 अंकों का नंबर दर्ज करें" : "Enter valid 10 digit number";

    if (!form.organisation.trim())
      newErrors.organisation = isHindi ? "संगठन का नाम आवश्यक है" : "Organisation is required";

    if (!form.message.trim())
      newErrors.message = isHindi ? "संदेश आवश्यक है" : "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      await API.post("/contact", form);

      setForm({
        name: "",
        email: "",
        phone: "",
        organisation: "",
        message: "",
      });

      setErrors({});
      setSuccess(isHindi ? "संदेश सफलतापूर्वक भेजा गया ✅" : "Message sent successfully ✅");

      setTimeout(() => setSuccess(""), 3000);

    } catch (err) {
      setSuccess("");
    }
  };

  return (
    <section className="pb-16 px-6 bg-gradient-to-r from-[#e6eef2] to-[#dfe8e4]">

      <div className="max-w-6xl mx-auto">

        {/* BREADCRUMB */}
        <div className="mt-4 mb-2">
          <Breadcrumb title="Partners" />
        </div>

        {/* TITLE */}
        <div className="flex flex-col items-center justify-center text-center mt-1 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {isHindi ? (
              <>
                <span className="text-green-600">हमारे साथ</span>{" "}
                <span className="text-blue-600">पार्टनर बनें</span>
              </>
            ) : (
              <>
                <span className="text-green-600">Partner</span>{" "}
                <span className="text-blue-600">with us</span>
              </>
            )}
          </h1>

          <div className="w-36 h-[3px] bg-gradient-to-r from-green-500 to-blue-500 mt-2 rounded-full"></div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="max-w-2xl flex flex-col justify-center">

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {isHindi ? (
                <>
                  <span className="text-green-600">पर्यावरण स्थिरता को</span>{" "}
                  <span className="text-blue-600">साथ मिलकर आगे बढ़ाएं</span>
                </>
              ) : (
                <>
                  <span className="text-green-600">Drive Sustainability</span>{" "}
                  <span className="text-blue-600">Together</span>
                </>
              )}
            </h2>

            <p className="text-lg md:text-xl text-gray-600 mb-5 leading-relaxed">
              {isHindi
                ? "एक स्वच्छ, हरित और अधिक जिम्मेदार भविष्य को आकार देने वाले एक शक्तिशाली आंदोलन का हिस्सा बनें।"
                : "Be a part of a powerful movement shaping a cleaner, greener, and more responsible future."}
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {isHindi ? (
                <>
                  <span className="font-semibold text-gray-800">My India My Services</span> में, हम केवल वाहनों को रीसायकल नहीं करते — हम पुराने वाहनों को विकास और स्थिरता के नए अवसरों में बदलते हैं। हमारे साथ साझेदारी करके, आप एक चक्रीय अर्थव्यवस्था में योगदान करते हैं।
                </>
              ) : (
                <>
                  At <span className="font-semibold text-gray-800">My India My Services</span>, we don’t just recycle vehicles — we transform end-of-life assets into new opportunities for growth and sustainability. By partnering with us, you contribute to a circular economy while unlocking scalable, eco-conscious business potential.
                </>
              )}
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {isHindi
                ? "चाहे आप वाहन खरीद रहे हों या पर्यावरण-अनुकूल व्यवसाय में विस्तार कर रहे हों, हमारा प्लेटफॉर्म एक सहज, पारदर्शी और लाभदायक सहयोग अनुभव सुनिश्चित करता है।"
                : "Whether you're sourcing vehicles or expanding into sustainable ventures, our platform ensures a seamless, transparent, and rewarding collaboration experience."}
            </p>

            <p className="text-gray-800 font-medium leading-relaxed">
              {isHindi
                ? "आइए साथ मिलकर प्रगति को पुनर्परिभाषित करें — जहां व्यावसायिक सफलता और पर्यावरणीय जिम्मेदारी साथ-साथ चलें।"
                : "Together, let’s redefine progress — where business success and environmental responsibility go hand in hand."}
            </p>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl p-7 shadow-md w-full max-w-md mx-auto">

            {success && (
              <div className="bg-green-100 border border-green-300 text-green-700 text-sm px-4 py-2 rounded-md mb-3">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block text-sm mb-1">{isHindi ? "नाम*" : "Name*"}</label>
                <input
                  value={form.name}
                  onChange={(e)=>{
                    setForm({...form, name:e.target.value});
                    setErrors({...errors, name:""});
                  }}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder={isHindi ? "अपना पूरा नाम दर्ज करें" : "Enter your full name"}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1">{isHindi ? "ईमेल*" : "Email*"}</label>
                <input
                  value={form.email}
                  onChange={(e)=>{
                    setForm({...form, email:e.target.value});
                    setErrors({...errors, email:""});
                  }}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder={isHindi ? "अपना ईमेल पता दर्ज करें" : "Enter your email address"}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1">{isHindi ? "संपर्क नंबर*" : "Contact Number*"}</label>
                <input
                  value={form.phone}
                  onChange={(e)=>{
                    setForm({...form, phone:e.target.value.replace(/\D/g,"")});
                    setErrors({...errors, phone:""});
                  }}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  placeholder={isHindi ? "10 अंकों का संपर्क नंबर" : "Enter your contact number"}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1">{isHindi ? "संस्था / कंपनी का नाम*" : "Organisation Name*"}</label>
                <input
                  value={form.organisation}
                  onChange={(e)=>{
                    setForm({...form, organisation:e.target.value});
                    setErrors({...errors, organisation:""});
                  }}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                    errors.organisation ? "border-red-500" : ""
                  }`}
                  placeholder={isHindi ? "अपनी संस्था का नाम दर्ज करें" : "Enter organisation name"}
                />
                {errors.organisation && <p className="text-red-500 text-xs mt-1">{errors.organisation}</p>}
              </div>

              <div>
                <label className="block text-sm mb-1">{isHindi ? "संदेश*" : "Organisation Message*"}</label>
                <textarea
                  value={form.message}
                  onChange={(e)=>{
                    setForm({...form, message:e.target.value});
                    setErrors({...errors, message:""});
                  }}
                  rows="4"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder={isHindi ? "अपना संदेश यहाँ लिखें" : "Enter your message"}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg text-white font-medium 
                bg-gradient-to-r from-green-500 to-green-700 
                transform transition-all duration-300
                hover:scale-105 hover:-translate-y-0.5
                active:scale-95
                hover:shadow-xl hover:shadow-green-500/40"
              >
                {isHindi ? "संदेश भेजें" : "Send"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Partner;
