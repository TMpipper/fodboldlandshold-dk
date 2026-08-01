import { getPublishedTeams } from "@/lib/content/taxonomy";
import { TeamCard } from "@/components/ui/TeamCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { webSiteSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { buildMetadata, homeMeta } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  ...homeMeta(),
  path: "/",
});

export default function HomePage() {
  const teams = getPublishedTeams();

  return (
    <>
      <JsonLd data={webSiteSchema()} />
      <JsonLd
        data={breadcrumbSchema([{ name: "Forside", path: "/" }])}
      />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="eyebrow text-pitch-400 mb-4">
            Din guide til verdens fodboldlandshold
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Fodboldlandshold fra hele verden
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-navy-200 leading-relaxed">
            Udforsk spillertrupper, kampresultater, historie og statistik for de
            mest populære fodboldlandshold. Alt samlet ét sted.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <hr className="section-rule mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-navy-800">
            Alle fodboldlandshold
          </h2>
          <p className="mt-2 text-slate-500">
            Vælg et landshold og læs alt om spillere, kampe og historie
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {teams.map((team) => (
            <TeamCard key={team.slug} team={team} />
          ))}
        </div>
      </section>

      {/* Intro / SEO text */}
      <section className="bg-white border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-navy-800 mb-6">
            Om Fodboldlandshold.dk
          </h2>
          <div className="prose-editorial">
            <p>
              Fodboldlandshold.dk er din komplette guide til verdens
              fodboldlandshold. Vi dækker de mest populære landshold med
              dybdegående artikler om spillertrupper, kampresultater, historiske
              bedrifter og meget mere.
            </p>
            <p>
              Uanset om du følger det danske landshold, de sydamerikanske
              giganter eller de nye stjerner fra Afrika og Asien, finder du
              opdateret information og analyser her. Vores mål er at give danske
              fodboldfans den bedste og mest omfattende ressource om
              fodboldlandshold fra hele verden.
            </p>
            <p>
              Vi dækker i øjeblikket {teams.length} landshold fra alle
              kontinenter og udvider løbende med flere hold, turneringsguides og
              dybdegående analyser.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
