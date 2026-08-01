import { SITE_URL, SITE_NAME, COMPANY } from "@/lib/constants";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hestehave 15",
        addressLocality: "Sønderborg",
        postalCode: "6400",
        addressCountry: "DK",
      },
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "da",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function sportsTeamSchema(team: {
  name: string;
  shortName: string;
  coach: string;
  confederation: string;
  founded: number;
  stadium: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    name: team.name,
    sport: "Fodbold",
    coach: {
      "@type": "Person",
      name: team.coach,
    },
    memberOf: {
      "@type": "SportsOrganization",
      name: team.confederation,
    },
    foundingDate: team.founded.toString(),
    location: {
      "@type": "StadiumOrArena",
      name: team.stadium,
    },
    url: `${SITE_URL}/${team.slug}`,
  };
}

export function articleSchema(article: {
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    url: `${SITE_URL}/nyheder/${article.slug}`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "da",
  };
}

export function faqSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
