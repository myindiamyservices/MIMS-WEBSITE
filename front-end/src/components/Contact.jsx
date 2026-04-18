import Breadcrumb from "./Breadcrumb";
import Callback from "./Callback";

function Contact() {
  return (
    <section className="pb-16 bg-gradient-to-r from-[#e6eef2] to-[#dfe8e4]">

      <div className="max-w-7xl mx-auto px-6">

        {/* BREADCRUMB */}
        <div className="mt-4 mb-2">
          <Breadcrumb title="Contact" />
        </div>

        
        {/* TITLE */}
        <div className="text-center mt-2 mb-10">
          <p className="text-gray-500 text-sm">Get in Touch with Us</p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            <span className="text-green-600">Contact</span>{" "}
            <span className="text-blue-600">Us</span>
          </h1>

          <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* CALLBACK */}
        <div>
          <Callback />
        </div>

      </div>
    </section>
  );
}

export default Contact;