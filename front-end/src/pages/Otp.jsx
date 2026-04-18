import React, { useState, useRef, useEffect } from "react";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);
  const [timer, setTimer] = useState(30);

  // ⏱ Timer
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // 🔢 Handle Change
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  // ⬅️ Backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // 🔁 Resend
  const handleResend = () => {
    setTimer(30);
    setOtp(["", "", "", "", "", ""]);
    inputs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen pt-[72px] md:pt-[110px] bg-gradient-to-r from-[#eaf2f8] to-[#d8f3dc] flex justify-center items-start px-4">

      {/* CARD */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-gray-100 p-10 text-center">

        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-2">Verify OTP</h2>
        <p className="text-gray-500 mb-8">
          Enter the 6-digit code sent to your phone
        </p>

        {/* OTP INPUTS */}
        <div className="flex justify-center gap-3 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => (inputs.current[index] = el)}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg font-semibold bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
          ))}
        </div>

        {/* VERIFY BUTTON */}
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold mb-6 shadow-md transition">
          Verify OTP
        </button>

        {/* RESEND */}
        {timer > 0 ? (
          <p className="text-gray-500 text-sm">
            Resend OTP in <span className="font-semibold">{timer}s</span>
          </p>
        ) : (
          <button
            onClick={handleResend}
            className="text-green-600 font-medium hover:underline"
          >
            Resend OTP
          </button>
        )}
      </div>
    </div>
  );
};

export default Otp;