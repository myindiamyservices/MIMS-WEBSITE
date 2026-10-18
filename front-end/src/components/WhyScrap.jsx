import {
  CheckCircle,
  Truck,
  FileText,
  Shield,
  Car,
  Bike,
  Bus,
  Zap
} from "lucide-react";

function WhyScrap({ openModal }) {

  const vehicles = [
    { label: "Cars", value: "CAR", icon: <Car size={30} /> },
    { label: "Two-Wheeler", value: "2 Wheeler", icon: <Bike size={30} /> },
    { label: "Three-Wheeler", value: "3 Wheeler", icon: <Truck size={30} /> },
    { label: "Bus", value: "BUS", icon: <Bus size={30} /> },
    { label: "Truck", value: "Truck", icon: <Truck size={30} /> },
    { label: "Electric", value: "Vehicle Category", icon: <Zap size={30} /> },
  ];

  return (
    <section className="pt-12 pb-20 px-6 bg-gradient-to-r from-[#e6eef2] to-[#dfe8e4]">

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-10">
        Why <span className="text-green-600">My India My Services?</span>
      </h2>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-5 mb-14">

        <div className="bg-white p-5 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition duration-200">
          <CheckCircle className="text-green-600" size={24} />
          <p className="font-medium">Instant Offer</p>
        </div>

        <div className="bg-white p-5 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition duration-200">
          <Truck className="text-green-600" size={24} />
          <p className="font-medium">Prompt Pickup</p>
        </div>

        <div className="bg-white p-5 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition duration-200">
          <FileText className="text-green-600" size={24} />
          <p className="font-medium">Hassle-free Process</p>
        </div>

        <div className="bg-white p-5 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition duration-200">
          <Shield className="text-green-600" size={24} />
          <p className="font-medium">100% Legal Compliance</p>
        </div>

      </div>

      {/* WHAT WE SCRAP */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h3 className="text-4xl font-bold text-green-600">
          What We Scrap
        </h3>
        <p className="text-gray-600 mt-2">
          Select your vehicle type to get started.
        </p>
      </div>

      {/* VEHICLE GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

        {vehicles.map((item, index) => (
          <div
            key={index}
            onClick={() => openModal(item.value)}
            className="bg-white p-6 rounded-xl text-center shadow-sm 
                       hover:shadow-xl hover:-translate-y-2 
                       transition duration-300 cursor-pointer group"
          >
            {/* ICON */}
            <div className="w-14 h-14 mx-auto mb-4 bg-green-100 rounded-full 
                            flex items-center justify-center text-green-600
                            group-hover:bg-green-600 group-hover:text-white 
                            transition duration-300">
              {item.icon}
            </div>

            {/* LABEL */}
            <h4 className="font-semibold mb-1">
              {item.label}
            </h4>

            {/* LINK */}
            <p className="text-green-600 text-sm group-hover:underline">
              Get Estimate
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyScrap;
