import Breadcrumb from "../components/Breadcrumb";

function Terms() {
  return (
    <section className="pb-16 bg-gradient-to-r from-[#e6eef2] to-[#dfe8e4]">

      <div className="max-w-7xl mx-auto px-6">

        {/* BREADCRUMB */}
        <div className="mt-4 mb-4">
          <Breadcrumb title="Terms & Conditions" />
        </div>

        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-green-600">Terms</span>{" "}
            <span className="text-blue-600">& Conditions</span>
          </h1>
        </div>

        {/* CONTENT */}
        <div className="bg-gradient-to-br from-white/80 to-[#e6eef2] backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-lg text-gray-700 text-xs md:text-sm leading-relaxed space-y-6 border border-white/40">

          <p>
            Welcome to <b>My India My Services</b>. By accessing, browsing, or using our website and services,
            you acknowledge that you have read, understood, and agree to be bound by the following Terms and Conditions.
            If you do not agree, please refrain from using our website or services.
          </p>

          <div>
            <h3 className="font-semibold text-base">1. Use of Website</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>This website provides information about vehicle scrapping, recycling, pickup, and related services.</li>
              <li>You agree to use this website only for lawful purposes.</li>
              <li>You must not damage, interrupt, or impair the website or its services.</li>
              <li>Unauthorized use including hacking or data extraction is strictly prohibited.</li>
              <li>All content is owned or licensed and cannot be reused without permission.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base">2. Services</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>We offer end-of-life vehicle scrapping, eco-friendly recycling, and pickup services.</li>
              <li>Availability depends on location, regulations, and operations.</li>
              <li>We may refuse services in case of incomplete documents or legal non-compliance.</li>
              <li>Vehicles must meet acceptance criteria.</li>
              <li>Pickup timelines may vary.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base">3. User Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide accurate vehicle and personal details.</li>
              <li>You must be the legal owner or authorized person.</li>
              <li>No fraudulent or illegal usage allowed.</li>
              <li>Provide required documents for legal processing.</li>
            </ul>
            <p className="mt-2">Failure to comply may result in cancellation of services.</p>
          </div>

          <div>
            <h3 className="font-semibold text-base">4. Pricing & Payments</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pricing is subject to inspection and verification.</li>
              <li>Final value may change based on vehicle condition.</li>
              <li>Payments are processed through approved methods.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base">5. Disclaimer</h3>
            <p>
              Services are provided "as is" without guarantees of uninterrupted or error-free operation.
              We do not guarantee completeness or accuracy of all website information.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base">6. Limitation of Liability</h3>
            <p>
              We are not liable for indirect or consequential damages including service delays or errors.
              Liability is limited to the amount paid (if applicable).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base">7. Privacy</h3>
            <p>
              Your data is handled as per our Privacy Policy. While we take security measures,
              absolute security cannot be guaranteed.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base">8. Third-Party Links</h3>
            <p>
              We are not responsible for third-party websites linked from our platform.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base">9. Changes to Terms</h3>
            <p>
              Terms may be updated anytime. Continued use means acceptance of updated terms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base">10. Termination</h3>
            <p>
              We may suspend or terminate access in case of violations, fraud, or misuse.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base">11. Governing Law</h3>
            <p>
              These terms are governed by the laws of India. Jurisdiction lies with Indian courts.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base">12. Contact</h3>
            <p>
              For any queries, please contact us through our website.
            </p>
          </div>

          {/* COPYRIGHT */}
          <div className="pt-4 border-t text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} My India My Services. All rights reserved.
          </div>

        </div>

      </div>
    </section>
  );
}

export default Terms;