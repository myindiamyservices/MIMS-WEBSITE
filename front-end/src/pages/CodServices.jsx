import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import API from "../api";

const serviceMeta = {
  purchase: { title: "Cod Purchase" },
  sale: { title: "Cod Sales" },
  new_vehicle: { title: "Call for New Vehicle" },
};

const defaultForm = {
  name: "",
  phone: "",
  location: "",
  vehicle: "",
  message: "",
};

function CodServices() {
  const [params] = useSearchParams();
  const requestedRaw = params.get("service");
  const requested =
    requestedRaw === "sales" ? "sale" : requestedRaw;
  const initialTab = ["purchase", "sale", "new_vehicle"].includes(requested)
    ? requested
    : "purchase";

  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const tab =
      requestedRaw === "sales"
        ? "sale"
        : requested;
    if (["purchase", "sale", "new_vehicle"].includes(tab)) {
      setActiveTab(tab);
 }
  }, [requested, requestedRaw]);
  const [form, setForm] = useState(defaultForm);
  const [status, setStatus] = useState("");

  const title = useMemo(() => serviceMeta[activeTab].title, [activeTab]);

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!/^[0-9]{10}$/.test(form.phone)) return "Valid 10-digit phone required";
    if (!form.location.trim()) return "Location is required";
    return "";
  };

  const submit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus(err);
      return;
    }

    try {
      await API.post("/cod/create", { type: activeTab, ...form });
      setStatus("Submitted successfully ✅");
      setForm(defaultForm);
    } catch {
      setStatus("Submission failed. Please try again.");
    }
  };

  const inputClass =
    "w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 " +
    "focus:outline-none focus:ring-2 focus:ring-green-500/35 focus:border-green-500 transition shadow-sm";

  return (
    <section className="min-h-screen pb-20 px-4 sm:px-6 bg-gradient-to-br from-[#e6eef2] via-[#eef4f0] to-[#dfe8e4]">
      <div className="max-w-5xl mx-auto">
        <div className="pt-2 sm:pt-3">
          <Breadcrumb title="COD Services" />
        </div>

        <div className="text-center mb-8 mt-2 md:mt-3">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-green-600">COD</span>{" "}
            <span className="text-blue-600">Services</span>
          </h1>
          <div className="w-36 h-[3px] bg-gradient-to-r from-green-500 to-blue-500 mt-2 rounded-full mx-auto"></div>
          <p className="text-gray-600 text-sm mt-4 max-w-xl mx-auto">
            Purchase, sales, or new vehicle enquiries — same trusted team.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 justify-center">
          {Object.entries(serviceMeta).map(([key, value]) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setActiveTab(key);
                setStatus("");
                setForm(defaultForm);
              }}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition shadow-sm ${
                activeTab === key
                  ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md"
                  : "bg-white/90 text-gray-800 border border-gray-200 hover:border-green-300 hover:shadow"
              }`}
            >
              {value.title}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-white/60 bg-white/95 backdrop-blur-sm shadow-lg p-6 md:p-8 ring-1 ring-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{title}</h2>
          <p className="text-gray-600 text-sm mb-6">
            Fill in details and our team will contact you shortly.
          </p>

          {status && (
            <div
              className={`mb-5 text-sm px-4 py-3 rounded-xl border ${
                status.includes("✅")
                  ? "bg-green-50 border-green-200 text-green-800"
                  : "bg-amber-50 border-amber-200 text-amber-900"
              }`}
            >
              {status}
            </div>
          )}

          <form onSubmit={submit} className="grid md:grid-cols-2 gap-4">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              placeholder="Full Name *"
            />
            <input
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })
              }
              className={inputClass}
              placeholder="Phone Number *"
            />
            <input
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className={inputClass}
              placeholder="Location *"
            />
            <input
              value={form.vehicle}
              onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
              className={inputClass}
              placeholder="Vehicle / Product"
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} md:col-span-2 resize-y min-h-[120px]`}
              rows="4"
              placeholder="Message"
            />
            <button
              type="submit"
              className="md:col-span-2 w-full px-6 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-green-500 to-green-700 shadow-md hover:brightness-110 hover:shadow-lg active:scale-[0.99] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CodServices;
