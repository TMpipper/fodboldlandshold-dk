import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "Kontakt os → Fodboldlandshold.dk",
  description:
    "Har du spørgsmål eller feedback? Kontakt Fodboldlandshold.dk — vi svarer hurtigst muligt. Send os en besked via kontaktformularen.",
  path: "/kontakt",
});

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "Kontakt", path: "/kontakt" },
];

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {children}
    </>
  );
}
