/** Canonical site origin - must match production (no trailing slash). */
export const SITE_URL = "https://myindiamyservices.com";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.png`;

const SITE_NAME = "My India My Services";

/**
 * Per-path SEO. Paths must match React Router `pathname` (no trailing slash).
 * `noIndex`: keep auth/thin pages out of search results.
 */
export const PAGE_SEO = {
  "/": {
    title: `${SITE_NAME} (MIMS) | परिवर्तन योजना - Bus & Truck Scrap Delhi NCR`,
    description:
      "My India My Services (MIMS) परिवर्तन योजना: Delhi NCR में पुरानी बसों और ट्रकों को स्क्रैप करवाकर नए वाहन पाएं। 50+ वाहन स्क्रैप, RVSF अधिकृत 100% वैध प्रक्रिया एवं COD लाभ।",
    noIndex: false,
  },
  "/about": {
    title: "About Us | My India My Services (MIMS)",
    description:
      "Learn about My India My Services (MIMS): India's trusted scrap sourcing and vehicle recycling platform since 2021, with legal compliance and nationwide reach.",
    noIndex: false,
  },
  "/partners": {
    title: "Partners | MIMS Vehicle Scrap & Recycling Network",
    description:
      "Partner with My India My Services (MIMS) to grow India's sustainable vehicle recycling ecosystem and trusted scrap sourcing network.",
    noIndex: false,
  },
  "/contact": {
    title: "Contact My India My Services | Get a Callback",
    description:
      "Contact My India My Services for vehicle scrap, pickup, and recycling queries. Call +91 9311244755 or reach us online for a quick response.",
    noIndex: false,
  },
  "/faq": {
    title: "FAQs | Vehicle Scrap, Recycling & Documentation | MIMS",
    description:
      "Answers to common questions about legal vehicle scrapping, RVSF authorization, pickup, paperwork, and pricing with My India My Services.",
    noIndex: false,
  },
  "/how-it-works": {
    title: "How It Works | Vehicle Scrap Process | MIMS",
    description:
      "Step-by-step: how My India My Services (MIMS) buys your scrap vehicle with instant estimate, free pickup, legal documentation, and hassle-free recycling.",
    noIndex: false,
  },
  "/cod-services": {
    title: "COD Services | Purchase, Sales & New Vehicle | MIMS",
    description:
      "COD purchase, COD sales, and new vehicle enquiries with My India My Services. Submit your details for a trusted, transparent process.",
    noIndex: false,
  },
  "/terms": {
    title: "Terms & Conditions | MIMS",
    description:
      "Terms and conditions for using My India My Services website and vehicle scrap services. Read our policies before you proceed.",
    noIndex: false,
  },
  "/privacy": {
    title: "Privacy Policy | MIMS",
    description:
      "How My India My Services collects, uses, and protects your personal information when you use our website and services.",
    noIndex: false,
  },
  "/customer-login": {
    title: "Customer Login | MIMS",
    description: "Secure customer login for My India My Services.",
    noIndex: true,
  },
  "/register": {
    title: "Register | MIMS",
    description: "Create an account with My India My Services.",
    noIndex: true,
  },
  "/otp": {
    title: "Verify OTP | MIMS",
    description: "One-time password verification for My India My Services.",
    noIndex: true,
  },
};

export function getPageSeo(pathname) {
  const key = pathname.split("?")[0] || "/";
  return PAGE_SEO[key] || PAGE_SEO["/"];
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: SITE_NAME,
  alternateName: ["MIMS", "My India My Services MIMS", "Parivartan Yojna MIMS"],
  keywords:
    "My India My Services, MIMS, परिवर्तन योजना, Parivartan Yojna, commercial vehicle scrap Delhi NCR, bus scrap India, truck scrap Delhi NCR, vehicle scrap India, car scrap India, bike scrap India, legal vehicle recycling, RVSF authorized recycler, certificate of deposit, COD scrappage benefits",
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  email: "myindiamyservices@gmail.com",
  telephone: "+91-93112-44755",
  foundingDate: "2021",
  description:
    "My India My Services (MIMS) is India's trusted vehicle scrap sourcing and legal recycling platform with RVSF authorization. Under Parivartan Yojna, MIMS facilitates scrapping of old buses & trucks in Delhi NCR to enable adoption of new commercial vehicles.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  sameAs: [],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: ["MIMS", "My India My Services", "My India My Services MIMS"],
  url: SITE_URL,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export const parivartanYojnaJsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentService",
  serviceType: "Commercial Vehicle Scrappage and Fleet Modernization Scheme",
  name: "परिवर्तन योजना (Parivartan Yojna) - Delhi NCR Commercial Vehicle Scrappage",
  alternateName: [
    "Parivartan Yojna",
    "Parivartan Scheme Delhi NCR",
    "MIMS Parivartan Yojna",
    "Old Bus & Truck Scrap Scheme Delhi NCR",
  ],
  description:
    "My India My Services की परिवर्तन योजना के तहत Delhi NCR में 50+ पुरानी बसों और ट्रकों को स्क्रैप करवाकर नए वाहन अपनाने में सहायता दी गई है। सुरक्षित परिवहन, स्वच्छ वातावरण एवं वैध RVSF प्रक्रिया।",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: "+91-93112-44755",
    email: "myindiamyservices@gmail.com",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Delhi NCR (Delhi, Gurugram, Noida, Ghaziabad, Faridabad)",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description:
      "Free pickup, highest scrap value, legal Certificate of Deposit (COD), and assistance with new commercial bus/truck purchase.",
  },
};
