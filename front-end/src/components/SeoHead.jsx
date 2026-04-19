import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  SITE_URL,
  DEFAULT_OG_IMAGE,
  getPageSeo,
  organizationJsonLd,
  websiteJsonLd,
} from "../seo/siteConfig";

export default function SeoHead() {
  const { pathname } = useLocation();
  const seo = getPageSeo(pathname);
  const canonicalPath = pathname.split("?")[0] || "/";
  const canonical =
    canonicalPath === "/"
      ? `${SITE_URL}/`
      : `${SITE_URL}${canonicalPath}`;

  const robots = seo.noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en-IN" }} prioritizeSeoTags>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content={robots} />
        <meta name="author" content="My India My Services" />
        <meta name="theme-color" content="#e6eef2" />
        <link rel="canonical" href={canonical} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="My India My Services" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:image:alt" content="My India My Services — vehicle scrap & recycling" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

        <meta name="geo.region" content="IN" />
        <meta name="language" content="English" />
      </Helmet>

      {canonicalPath === "/" && (
        <Helmet>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationJsonLd),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteJsonLd),
            }}
          />
        </Helmet>
      )}
    </>
  );
}
