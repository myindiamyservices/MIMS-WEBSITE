import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#eaf2f8] to-[#d8f3dc]">

      {/* ✅ EXACT SAME AS PARTNER */}
      <div className="mt-4 mb-2 px-6 md:px-12">
        <Breadcrumb title="Register" />
      </div>

      {/* CONTENT */}
      <div className="flex justify-center items-start px-4 py-6 md:py-10">

        <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">

          <div className="text-center mb-8">
            <p className="text-gray-600 text-sm mb-2">New Customer</p>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
              Register Now
            </h2>

            <div className="w-36 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-lg mx-auto space-y-5">

            <div>
              <label className="text-gray-700 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="text-gray-700 text-sm font-medium">
                Phone No.*
              </label>

              <div className="flex mt-2 border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-green-500">
                <span className="px-4 flex items-center bg-gray-100 text-gray-600 border-r">
                  +91
                </span>

                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-700 text-sm font-medium">
                Email (Optional)
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="text-gray-700 text-sm font-medium">
                Address (Optional)
              </label>
              <textarea
                rows="3"
                placeholder="Enter your address"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition shadow-md">
              Register & Get OTP
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;