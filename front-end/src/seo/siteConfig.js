/** Canonical site origin — must match production (no trailing slash). */
export const SITE_URL = "https://myindiamyservices.com";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.png`;

const SITE_NAME = "My India My Services";

/**
 * Per-path SEO. Paths must match React Router `pathname` (no trailing slash).
 * `noIndex`: keep auth/thin pages out of search results.
 */
export const PAGE_SEO = {
  "/": {
    title: `${SITE_NAME} (MIMS) | Legal Vehicle Scrap & Recycling in India`,
    description:
      "Sell your old car or two-wheeler for the best scrap value. MIMS is RVSF authorized, offers free pickup across 120+ locations, instant documentation, and 100% legal vehicle recycling in India.",
    noIndex: false,
  },
  "/about": {
    title: "About Us | MIMS — Trusted Vehicle Recycling in India",
    description:
      "Learn about My India My Services (MIMS): India’s trusted scrap sourcing and vehicle recycling platform since 2021, with legal compliance and nationwide reach.",
    noIndex: false,
  },
  "/partners": {
    title: "Partners | MIMS Vehicle Scrap & Recycling Network",
    description:
      "Partner with MIMS to grow India’s sustainable vehicle recycling ecosystem. Explore collaboration opportunities with My India My Services.",
    noIndex: false,
  },
  "/contact": {
    title: "Contact Us | Get a Callback — MIMS",
    description:
      "Contact My India My Services for vehicle scrap, pickup, and recycling queries. Call +91 9311244755 or reach us online for a quick response.",
    noIndex: false,
  },
  "/faq": {
    title: "FAQs | Vehicle Scrap, Recycling & Documentation — MIMS",
    description:
      "Answers to common questions about legal vehicle scrapping, RVSF authorization, pickup, paperwork, and pricing with My India My Services.",
    noIndex: false,
  },
  "/how-it-works": {
    title: "How It Works | Vehicle Scrap Process — MIMS",
    description:
      "Step-by-step: how MIMS buys your scrap vehicle — instant estimate, free pickup, legal documentation, and hassle-free recycling.",
    noIndex: false,
  },
  "/cod-services": {
    title: "COD Services | Purchase, Sales & New Vehicle — MIMS",
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
  alternateName: "MIMS",
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  email: "myindiamyservices@gmail.com",
  telephone: "+91-93112-44755",
  foundingDate: "2021",
  description:
    "India’s trusted vehicle scrap sourcing and legal recycling platform with RVSF authorization and nationwide pickup.",
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
  url: SITE_URL,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};
