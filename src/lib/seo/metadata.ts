import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

const YEAR = new Date().getFullYear();

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noindex,
}: BuildMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage ?? `${SITE_URL}/og-default.jpg`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: !noindex, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "da_DK",
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function teamMeta(
  teamName: string,
  shortName: string
): { title: string; description: string } {
  return {
    title: `${teamName} (${YEAR}) → Spillere, kampe og historie`,
    description: `Alt om ${teamName.toLowerCase()}. Se ${shortName}s aktuelle spillertrup, seneste kampresultater og historiske bedrifter. Opdateret ${YEAR}.`,
  };
}

export function articleMeta(
  title: string,
  excerpt: string
): { title: string; description: string } {
  return {
    title,
    description: excerpt.length > 155 ? excerpt.slice(0, 152) + "..." : excerpt,
  };
}

export function newsIndexMeta(): { title: string; description: string } {
  return {
    title: `Fodboldnyheder (${YEAR}) → Seneste nyt om verdens fodboldlandshold`,
    description: `Seneste nyheder og analyser om verdens fodboldlandshold. VM, EM, Nations League og meget mere. Opdateret ${YEAR}.`,
  };
}

export function homeMeta(): { title: string; description: string } {
  return {
    title: `Fodboldlandshold (${YEAR}) → Spillere, kampe og historie fra hele verden`,
    description: `Udforsk 20+ fodboldlandshold fra hele verden. Se spillertrupper, kampresultater og historie for hvert landshold. Opdateret ${YEAR} — din komplette guide.`,
  };
}
