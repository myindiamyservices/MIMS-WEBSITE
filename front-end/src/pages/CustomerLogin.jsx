import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import QuoteModal from "../components/QuoteModal";

const CustomerLogin = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!phone || phone.length !== 10) {
      setError("Enter valid 10 digit mobile number ❌");
      return;
    }

    // 🔥 DEMO LOGIC
    setError("Phone number not registered ❌");
  };

  return (
    <div className="min-h-screen  px-4">

      {/* BREADCRUMB */}
      <div className="mt-4 mb-2 px-6 md:px-12">
        <Breadcrumb title="Customer Login" />
      </div>

      {/* CARD */}
      <div className="flex justify-center items-start">

        <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 mt-20">

          {/* TITLE */}
          <div className="text-center mb-8">
            <p className="text-gray-600 text-sm mb-2">Already a Customer?</p>

            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
              Customer Login
            </h2>

            <div className="w-40 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* FORM */}
          <div className="max-w-lg mx-auto space-y-6">

            {/* PHONE INPUT */}
            <div>
              <label className="text-gray-700 text-sm font-medium">
                Phone No.*
              </label>

              <div className="flex mt-2 border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-green-500 bg-white">
                <span className="px-4 flex items-center bg-gray-100 text-gray-600 border-r">
                  +91
                </span>

                <input
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value.replace(/\D/g, ""));
                    setError("");
                  }}
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 outline-none"
                />
              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              onClick={handleLogin}
              
              className="w-full px-6 py-3 rounded-lg text-sm font-medium text-white 
              bg-gradient-to-r from-green-500 to-green-700 
              transform transition-all duration-300 ease-in-out
              hover:scale-105 hover:-translate-y-0.5
              active:scale-95
              hover:shadow-xl hover:shadow-green-500/40
              hover:brightness-110"
            >
            
              Get OTP
            </button>

            {/* REGISTER BOX */}
            <div className="bg-[#eaf5f1] flex items-center justify-between p-5 rounded-xl border border-gray-200">

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full border flex items-center justify-center text-gray-500">
                  👤
                </div>

                <div>
                  <p className="font-semibold text-gray-800">New here?</p>
                  <p className="text-sm text-gray-500">
                    Register & Get instant Quote
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpenModal(true)}
                 className="btn-secondary">
                Get Quote
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 🔥 QUOTE MODAL */}
      <QuoteModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />

    </div>
  );
};

export default CustomerLogin;