import API from "../api";
import { useState, useEffect } from "react";
import carData from "../data/cars.json";

function QuoteModal({ isOpen, onClose, defaultCategory }) {

  const [step, setStep] = useState("form");

  const [form, setForm] = useState({
    category: "",
    model: "",
    location: "",
    phone: "",
    name: "",
  });

  const [errors, setErrors] = useState({});
  const [estimate, setEstimate] = useState(null);

  const [filteredCars, setFilteredCars] = useState([]);
  const [showCarDropdown, setShowCarDropdown] = useState(false);

  const [filteredCities, setFilteredCities] = useState([]);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const cities = [
    "Delhi","New Delhi","Noida","Greater Noida","Gurgaon","Faridabad","Ghaziabad",
    "Chandigarh","Mohali","Panchkula",
    "Amritsar","Ludhiana","Jalandhar","Patiala",
    "Shimla","Manali","Kullu","Dharamshala",
    "Jaipur","Udaipur","Jodhpur","Kota","Ajmer",
    "Lucknow","Kanpur","Agra","Varanasi","Meerut",
    "Indore","Bhopal","Gwalior",
    "Ahmedabad","Surat","Vadodara",
    "Mumbai","Pune","Nagpur","Nashik",
    "Bangalore","Chennai","Hyderabad",
    "Kolkata","Guwahati"
  ];

  useEffect(() => {
    if (isOpen) {
      setStep("form");
      setEstimate(null);
      setForm({
        category: defaultCategory || "",
        model: "",
        location: "",
        phone: "",
        name: "",
      });
      setErrors({});
    }
  }, [isOpen, defaultCategory]);

  useEffect(() => {
    const close = (e) => {
      if (!e.target.closest(".dropdown-parent")) {
        setShowCarDropdown(false);
        setShowCityDropdown(false);
      }
    };

    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  // 🔍 CAR SEARCH
  const handleCarSearch = (value) => {
    setForm({ ...form, model: value });

    if (!value.trim()) {
      setFilteredCars([]);
      setShowCarDropdown(false);
      return;
    }

    const filtered = carData.filter((car) => {
      const name = `${car.Make || ""} ${car.Model || ""}`.toLowerCase();
      return name.includes(value.toLowerCase());
    });

    setFilteredCars(filtered.slice(0, 20));
    setShowCarDropdown(true);
  };

  // 🔍 CITY SEARCH
  const handleCitySearch = (value) => {
    setForm({ ...form, location: value });

    if (!value.trim()) {
      setFilteredCities([]);
      setShowCityDropdown(false);
      return;
    }

    const filtered = cities.filter((c) =>
      c.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredCities(filtered);
    setShowCityDropdown(true);
  };

  // ✅ VALIDATION
  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required!";
    if (!form.category) err.category = "Vehicle Category is required !";
    if (!form.model) err.model = "Make & Model is required !";
    if (!form.location) err.location = "Vehicle location is required !";
    if (!form.phone || form.phone.length !== 10)
      err.phone = "Contact number is required !";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // 🔥 CATEGORY WEIGHT
  const categoryWeight = {
    "Truck": 6000,
    "BUS": 8000,
    "Mobile cranes": 10000,
    "Trailer": 7000,
    "Earthmover": 12000,
    "Tractors": 3000,
    "2 Wheeler": 120,
    "3 Wheeler": 400,
    "Others": 1500,
  };

  // 🔥 CLEAN WEIGHT
  const cleanWeight = (w) => {
    if (!w) return null;

    let val = w.toString().replace(/[^0-9-]/g, "");
    if (!val) return null;

    if (val.includes("-")) {
      const [min, max] = val.split("-").map(Number);
      return Math.max(min, max);
    }

    return parseInt(val);
  };

  // 🔥 ESTIMATE (FINAL CORRECT)
  const getEstimate = () => {
    let kerbWeight = 0;

    if (form.category === "CAR") {
      const selectedCar = carData.find(
        (c) => `${c.Make} ${c.Model}` === form.model
      );

      if (selectedCar?.Kerb_Weight) {
        kerbWeight = cleanWeight(selectedCar.Kerb_Weight);
      }

      if (!kerbWeight) kerbWeight = 1500;
    } else {
      kerbWeight = categoryWeight[form.category] || 2000;
    }

    const rate = 24;
    const base = kerbWeight * rate;

    const min = Math.round(base * 0.95);
    const max = Math.round(base * 1.05);

    return { min, max, base };
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      await API.post("/estimate/create", form);

      const result = getEstimate();
      setEstimate(result);
      setStep("result");

    } catch (err) {
      alert("Error saving data ❌");
    }
  };

  // 🔥 REBATE (FINAL 45K–95K RANGE)
  let rebateMin = 0;
  let rebateMax = 0;

  if (estimate) {
    const base = estimate.base;

    const calcMin = base * 0.25;
    const calcMax = base * 0.5;

    rebateMin = Math.max(45000, Math.round(calcMin));
    rebateMax = Math.min(95000, Math.round(calcMax));

    if (rebateMin > rebateMax) {
      rebateMin = 45000;
      rebateMax = 95000;
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center px-4">

      <div className="bg-gradient-to-r from-[#eaf4fb] to-[#edf7ea] w-full max-w-4xl p-6 md:p-10 rounded-3xl relative">

        <button onClick={onClose} className="absolute right-5 top-5">✕</button>

        {step === "form" && (
          <>
            <h2 className="text-3xl md:text-5xl font-bold text-green-600 mb-2">
              Get an Instant Vehicle Estimate
            </h2>

            <p className="text-gray-600 mb-6">
              We handle everything from towing and dismantling to recycling certification.
            </p>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <select
                  value={form.category}
                  onChange={(e)=>setForm({...form, category:e.target.value})}
                  className="h-12 border rounded-lg px-3 w-full"
                >
                  <option value="">Select Category</option>
                  <option>CAR</option>
                  <option>Truck</option>
                  <option>BUS</option>
                  <option>Mobile cranes</option>
                  <option>Trailer</option>
                  <option>Earthmover</option>
                  <option>Tractors</option>
                  <option>2 Wheeler</option>
                  <option>3 Wheeler</option>
                  <option>Others</option>
                </select>
                {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
              </div>

              <div className="relative dropdown-parent">
                <input
                  value={form.model}
                  onChange={(e)=>handleCarSearch(e.target.value)}
                  onClick={(e)=>e.stopPropagation()}
                  placeholder="Search vehicle..."
                  className="h-12 w-full border rounded-lg px-3"
                />

                {showCarDropdown && filteredCars.length > 0 && (
                  <div className="absolute w-full bg-white border mt-1 rounded-lg max-h-60 overflow-y-auto z-50">
                    {filteredCars.map((car, i) => {
                      const name = `${car.Make || ""} ${car.Model || ""}`.trim();
                      if (!name) return null;

                      return (
                        <div
                          key={i}
                          onClick={() => {
                            setForm({ ...form, model: name });
                            setShowCarDropdown(false);
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {name}
                        </div>
                      );
                    })}
                  </div>
                )}

                {errors.model && <p className="text-red-500 text-sm">{errors.model}</p>}
              </div>

              <div className="relative dropdown-parent">
                <input
                  value={form.location}
                  onChange={(e)=>handleCitySearch(e.target.value)}
                  onClick={(e)=>e.stopPropagation()}
                  placeholder="Type Your Vehicle Location"
                  className="h-12 w-full border rounded-lg px-3"
                />

                {showCityDropdown && filteredCities.length > 0 && (
                  <div className="absolute w-full bg-white border mt-1 rounded-lg max-h-60 overflow-y-auto z-50">
                    {filteredCities.map((city, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setForm({ ...form, location: city });
                          setShowCityDropdown(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                )}

                {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e)=>setForm({...form, name:e.target.value})}
                  className="h-12 w-full border rounded-lg px-3"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <div className="flex border rounded-lg overflow-hidden h-12">
                  <span className="px-3 flex items-center bg-gray-100">+91</span>
                  <input
                    value={form.phone}
                    onChange={(e)=>setForm({...form, phone:e.target.value.replace(/\D/g,"")})}
                    className="w-full px-3"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

            </div>

            <button
              onClick={handleSubmit}
              className="w-full px-6 py-3 rounded-lg text-sm font-medium text-white mt-6
              bg-gradient-to-r from-green-500 to-green-700
              transform transition-all duration-300 ease-in-out
              hover:scale-105 hover:-translate-y-0.5
              active:scale-95
              hover:shadow-xl hover:shadow-green-500/40
              hover:brightness-110">
              Submit
            </button>
          </>
        )}

        {step === "result" && estimate && (
          <>
            <h2 className="text-3xl font-bold text-green-600 mb-2">
              Your Vehicle’s Estimated Scrap Value
            </h2>

            <div className="bg-blue-600 text-white p-6 rounded-2xl mb-6">
              <p>Estimated Scrap Value</p>
              <h3 className="text-2xl font-bold">
                Between ₹{estimate.min.toLocaleString()} - ₹{estimate.max.toLocaleString()}
              </h3>
            </div>

           <div className="flex justify-between items-start mb-6 px-10">

            {/* LEFT */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Vehicle</p>
              <p className="font-semibold text-gray-800">
                {form.model || form.category}
              </p>
            </div>

            {/* RIGHT */}
            <div className="text-right">
              <p className="text-sm text-gray-500 mb-1">Location</p>
              <p className="font-semibold text-gray-800">
                {form.location}
              </p>
            </div>

          </div>

            <div className="bg-green-600 text-white p-6 rounded-2xl">
              <p>Road Tax Rebate</p>
              <h3 className="text-2xl font-bold">
                Approx. ₹{rebateMin.toLocaleString()} – ₹{rebateMax.toLocaleString()}
              </h3>
            </div>
            <p className="text-sm text-gray-500 text-center leading-relaxed">
              We value your privacy. By submitting this form, you allow us to use your contact details 
              to process your vehicle scrapping request. Your data is सुरक्षित and never shared without your permission. 
              Read our 
              <span className="text-blue-600 font-semibold hover:underline cursor-pointer">Privacy Policy</span>.
            </p>
          </>
        )}

      </div>
    </div>
  );
}

export default QuoteModal;