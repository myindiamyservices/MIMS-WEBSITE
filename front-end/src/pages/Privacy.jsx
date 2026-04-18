import Breadcrumb from "../components/Breadcrumb";

function Privacy() {
  return (
    <section className="pb-20 ">

      <div className="max-w-5xl mx-auto px-6">

        {/* BREADCRUMB */}
        <div className="mt-4 mb-4">
          <Breadcrumb title="Privacy Policy" />
        </div>

        {/* TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-green-600">Privacy</span>{" "}
            <span className="text-blue-600">Policy</span>
          </h1>

          <div className="w-32 h-[3px] bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>

          
        </div>

        {/* CONTENT CARD */}
        <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-green-200/40 via-blue-200/40 to-transparent shadow-xl">

          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-10 text-gray-700 text-[15px] leading-relaxed space-y-8 border border-white/50">

            {/* INTRO */}
            <p className="text-[16px] text-gray-800">
              At <b>My India My Services</b>, we are committed to protecting your privacy
              and ensuring that your personal data is handled in a secure and transparent manner.
              This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>

            {/* SECTIONS */}
            {[
              {
                title: "1. Information We Collect",
                content: (
                  <>
                    <p>We may collect:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Name, phone number, and email</li>
                      <li>Vehicle details submitted by you</li>
                      <li>Technical data like IP, browser, pages visited</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "2. How We Use Your Information",
                content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide services and vehicle processing</li>
                    <li>Customer support and communication</li>
                    <li>Improve website and experience</li>
                  </ul>
                ),
              },
              {
                title: "3. Data Protection & Security",
                content: (
                  <p>
                    We use strong security measures to protect your data from unauthorized access,
                    misuse, or disclosure.
                  </p>
                ),
              },
              {
                title: "4. Sharing of Information",
                content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>No selling or renting of your data</li>
                    <li>Shared only with trusted partners</li>
                    <li>Disclosed only when legally required</li>
                  </ul>
                ),
              },
              {
                title: "5. Cookies",
                content: (
                  <p>
                    Cookies help improve your browsing experience and analyze website usage.
                  </p>
                ),
              },
              {
                title: "6. User Rights",
                content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Access your data</li>
                    <li>Update or correct information</li>
                    <li>Request deletion</li>
                  </ul>
                ),
              },
              {
                title: "7. Updates to Policy",
                content: (
                  <p>
                    This policy may be updated. Continued use means acceptance of updates.
                  </p>
                ),
              },
              {
                title: "8. Contact",
                content: (
                  <p>
                    <b>Email:</b> myindiamyservices@gmail.com <br />
                    <b>Company:</b> My India My Services
                  </p>
                ),
              },
            ].map((section, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {section.title}
                </h3>
                <div className="text-gray-600">{section.content}</div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Privacy;