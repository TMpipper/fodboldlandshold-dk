import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllTeams, getTeam, getPublishedTeams } from "@/lib/content/taxonomy";
import { getTeamData } from "@/lib/content/team-data";
import { flagUrl } from "@/lib/content/images";
import { buildMetadata, teamMeta } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  sportsTeamSchema,
  faqSchema,
} from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FactBox } from "@/components/ui/FactBox";
import { PlayerTable } from "@/components/ui/PlayerTable";

export function generateStaticParams() {
  return getAllTeams().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const team = getTeam(slug);
  if (!team) return {};
  const { title, description } = teamMeta(team.name, team.shortName);
  return buildMetadata({ title, description, path: `/${slug}` });
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const team = getTeam(slug);
  if (!team) notFound();

  const data = getTeamData(slug);
  if (!data) notFound();

  const crumbs = [
    { name: "Forside", path: "/" },
    { name: team.shortName, path: `/${slug}` },
  ];

  const relatedTeams = getPublishedTeams().filter(
    (t) => t.slug !== slug && t.confederation === team.confederation
  ).slice(0, 6);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={sportsTeamSchema({
          name: team.name,
          shortName: team.shortName,
          coach: data.keyFacts.coach,
          confederation: data.keyFacts.confederation,
          founded: data.keyFacts.founded,
          stadium: data.keyFacts.stadium,
          slug: team.slug,
        })}
      />
      {data.faq.length > 0 && <JsonLd data={faqSchema(data.faq)} />}

      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-6">
            <Breadcrumb items={crumbs} />
          </div>
          <div className="flex items-center gap-5">
            <div className="relative h-14 w-20 shrink-0 flag-shadow rounded overflow-hidden">
              <Image
                src={flagUrl(team.flagCode, "w320")}
                alt={`${team.shortName}s flag`}
                fill
                className="object-cover"
                sizes="80px"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {team.name}
              </h1>
              <p className="mt-2 text-navy-200 text-lg">{data.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 min-w-0 space-y-12">
            {/* Intro */}
            <div
              className="prose-editorial"
              dangerouslySetInnerHTML={{ __html: data.intro }}
            />

            {/* Body */}
            <div
              className="prose-editorial"
              dangerouslySetInnerHTML={{ __html: data.body }}
            />

            {/* Spillere */}
            {data.players.length > 0 && (
              <section>
                <hr className="section-rule mb-4" />
                <h2 className="text-2xl font-bold text-navy-800 mb-6">
                  Spillere — {team.shortName}s aktuelle trup
                </h2>
                <p className="text-slate-600 mb-6">
                  Her er de vigtigste spillere i {team.shortName}s nuværende
                  landsholdstrup med deres klubber og statistikker.
                </p>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <PlayerTable players={data.players} />
                </div>
              </section>
            )}

            {/* Kampe */}
            {data.matches.length > 0 && (
              <section>
                <hr className="section-rule mb-4" />
                <h2 className="text-2xl font-bold text-navy-800 mb-6">
                  Kampe — seneste resultater
                </h2>
                <div className="space-y-3">
                  {data.matches.map((match) => (
                    <div
                      key={`${match.date}-${match.opponent}`}
                      className="flex items-center justify-between bg-white rounded-lg shadow-sm px-5 py-4"
                    >
                      <div>
                        <p className="font-medium text-slate-800">
                          {team.shortName} vs {match.opponent}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          {match.competition} &middot; {match.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-navy-800">
                          {match.score}
                        </span>
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded ${
                            match.result === "W"
                              ? "bg-pitch-50 text-pitch-600"
                              : match.result === "D"
                              ? "bg-gold-400/20 text-gold-500"
                              : "bg-red-50 text-red-600"
                          }`}
                        >
                          {match.result === "W"
                            ? "Sejr"
                            : match.result === "D"
                            ? "Uafgjort"
                            : "Nederlag"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bedrifter */}
            {data.achievements.length > 0 && (
              <section>
                <hr className="section-rule mb-4" />
                <h2 className="text-2xl font-bold text-navy-800 mb-6">
                  Historiske bedrifter
                </h2>
                <ul className="space-y-3">
                  {data.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-3 bg-white rounded-lg shadow-sm px-5 py-4"
                    >
                      <span className="text-gold-500 text-lg mt-0.5">&#9733;</span>
                      <span className="text-slate-700">{a}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* FAQ */}
            {data.faq.length > 0 && (
              <section>
                <hr className="section-rule mb-4" />
                <h2 className="text-2xl font-bold text-navy-800 mb-6">
                  Ofte stillede spørgsmål
                </h2>
                <div className="space-y-4">
                  {data.faq.map((item) => (
                    <details
                      key={item.question}
                      className="group bg-white rounded-lg shadow-sm"
                    >
                      <summary className="cursor-pointer px-5 py-4 font-medium text-slate-800 hover:text-pitch-500 transition-colors list-none flex items-center justify-between">
                        {item.question}
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">
                          &#9660;
                        </span>
                      </summary>
                      <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="min-w-0 space-y-8">
            <FactBox facts={data.keyFacts} />

            {/* Related teams */}
            {relatedTeams.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h3 className="text-sm font-bold text-navy-800 uppercase tracking-wider mb-4">
                  Andre {team.confederation}-hold
                </h3>
                <ul className="space-y-2">
                  {relatedTeams.map((rt) => (
                    <li key={rt.slug}>
                      <Link
                        href={`/${rt.slug}`}
                        className="flex items-center gap-3 text-sm text-slate-600 hover:text-pitch-500 transition-colors py-1"
                      >
                        <Image
                          src={flagUrl(rt.flagCode, "w80")}
                          alt={`${rt.shortName}s flag`}
                          width={24}
                          height={16}
                          className="rounded flag-shadow"
                        />
                        {rt.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
