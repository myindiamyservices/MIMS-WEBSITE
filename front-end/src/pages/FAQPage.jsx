import Breadcrumb from "../components/Breadcrumb";
import FAQ from "../components/FAQ";

function FAQPage() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#e6eef2] to-[#dfe8e4] pt-10 pb-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔹 BREADCRUMB */}
        <div className="pt-4 mb-4">
          <Breadcrumb title="FAQs" />
        </div>

        {/* 🔹 PAGE TITLE */}
        <div className="text-center mb-3">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-green-600">Frequently Asked</span>{" "}
            <span className="text-blue-600">Questions</span>
          </h1>

          {/* underline */}
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>

         </div>

        {/* 🔹 FAQ CONTENT (NO DUPLICATE TITLE) */}
        <FAQ showTitle={false} />

      </div>
    </section>
  );
}

export default FAQPage;