import map from "../assets/map.png";
import { useState } from "react";

const cities = [
  "Delhi","Noida","Greater Noida","Gurgaon","Faridabad","Ghaziabad",
  "Chandigarh","Amritsar","Ludhiana","Jalandhar","Patiala","Mohali","Panchkula",
  "Shimla","Manali","Dehradun",
  "Jaipur","Udaipur","Jodhpur","Kota","Ajmer","Bikaner","Alwar",
  "Ahmedabad","Surat","Vadodara","Rajkot","Gandhinagar","Jamnagar",
  "Anand","Nadiad","Vapi","Mehsana","Kheda","Gandhidham","Bhavnagar",
  "Mumbai","Pune","Nagpur","Nashik","Kolhapur","Solapur",
  "Satara","Ratnagiri","Ahilyanagar","Chiplun","Aurangabad","Thane",
  "Indore","Bhopal","Ujjain","Gwalior","Dewas","Jabalpur",
  "Lucknow","Kanpur","Varanasi","Jhansi","Agra","Prayagraj","Meerut",
  "Bangalore","Chennai","Hyderabad","Mysore","Coimbatore",
  "Madurai","Kochi","Mangalore","Salem","Namakkal","Kanchipuram",
  "Hubli","Dharwad","Tumkur","Bellari","Davangere","Shivamogga","Udupi",
  "Kolkata","Asansol","Durgapur",
  "Guwahati","Shillong","Jorhat","Dibrugarh","Tinsukia","Agartala"
];

function Availability({ openModal }) {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setCity(value);

    const filtered = cities
      .filter((c) => c.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 8);

    setSuggestions(value ? filtered : []);
  };

  const selectCity = (c) => {
    setCity(c);
    setSuggestions([]);
  };

  const checkAvailability = () => {
    openModal("", city.trim());
  };

  return (
    <>
      <section className="relative py-20 px-6 md:px-12 bg-gradient-to-r from-[#e6eef2] to-[#dfe8e4] overflow-hidden">

        {/* 🌍 BACKGROUND MAP */}
        <div className="absolute right-0 top-0 h-full w-[50%] hidden md:flex items-center justify-center">
          <img
            src={map}
            alt="India Map"
            className="max-h-[85%] w-auto object-contain opacity-90"
          />
        </div>

        {/* 🔥 CONTENT */}
        <div className="relative max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="text-green-600">My India My Services</span>{" "}
              <span className="text-blue-600">Presence</span>
            </h1>

            <p className="text-gray-700 text-lg">
              Our operations are open at <b>120+ cities</b> across India
            </p>
          </div>

          {/* FORM CARD */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl max-w-xl relative z-10">

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Check Service Availability
            </h2>

            <p className="text-gray-500 mb-5">
              Enter your city to see if we operate in your area.
            </p>

            {/* INPUT */}
            <input
              value={city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* DROPDOWN */}
            {suggestions.length > 0 && (
              <div className="absolute left-8 right-8 bg-white border rounded-lg shadow-md max-h-40 overflow-y-auto z-20 mt-1">
                {suggestions.map((c, i) => (
                  <div
                    key={i}
                    onClick={() => selectCity(c)}
                    className="px-4 py-2 hover:bg-green-50 cursor-pointer"
                  >
                    {c}
                  </div>
                ))}
              </div>
            )}

            {/* BUTTON */}
            <button
              onClick={checkAvailability}
              className="w-full px-6 py-3 rounded-lg text-white font-medium 
              bg-gradient-to-r from-green-500 to-green-700 
              transform transition-all duration-300 ease-in-out
              hover:scale-105 hover:-translate-y-1
              active:scale-95
              hover:shadow-2xl hover:shadow-green-500/50
              hover:brightness-110
              mt-4"
            >
              Check availability in your city
            </button>

          </div>

        </div>
      </section>
    </>
  );
}

export default Availability;
