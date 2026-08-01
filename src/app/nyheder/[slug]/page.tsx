import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES, getArticle } from "@/lib/content/articles";
import { getTeam } from "@/lib/content/taxonomy";
import { flagUrl } from "@/lib/content/images";
import { buildMetadata, articleMeta } from "@/lib/seo/metadata";
import { breadcrumbSchema, articleSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const { title, description } = articleMeta(article.title, article.excerpt);
  return buildMetadata({ title, description, path: `/nyheder/${slug}` });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const crumbs = [
    { name: "Forside", path: "/" },
    { name: "Nyheder", path: "/nyheder" },
    { name: article.title.split("→")[0].trim(), path: `/nyheder/${slug}` },
  ];

  const relatedTeams = article.relatedTeams
    .map((s) => getTeam(s))
    .filter(Boolean);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={articleSchema({
          title: article.title,
          excerpt: article.excerpt,
          publishedAt: article.publishedAt,
          updatedAt: article.updatedAt,
          slug: article.slug,
        })}
      />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-6">
            <Breadcrumb items={crumbs} />
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-pitch-400 bg-pitch-400/10 px-2 py-1 rounded">
              {article.category}
            </span>
            <span className="text-xs text-navy-300">
              {new Date(article.publishedAt).toLocaleDateString("da-DK", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-xs text-navy-300">
              {article.readingTime} min læsetid
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-navy-200 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Article body */}
          <article className="lg:col-span-2 min-w-0">
            <div
              className="prose-editorial"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {relatedTeams.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h3 className="text-sm font-bold text-navy-800 uppercase tracking-wider mb-4">
                  Nævnte landshold
                </h3>
                <ul className="space-y-2">
                  {relatedTeams.map(
                    (team) =>
                      team && (
                        <li key={team.slug}>
                          <Link
                            href={`/${team.slug}`}
                            className="flex items-center gap-3 text-sm text-slate-600 hover:text-pitch-500 transition-colors py-1"
                          >
                            <Image
                              src={flagUrl(team.flagCode, "w80")}
                              alt={`${team.shortName}s flag`}
                              width={24}
                              height={16}
                              className="rounded flag-shadow"
                            />
                            {team.shortName}
                          </Link>
                        </li>
                      )
                  )}
                </ul>
              </div>
            )}

            <div className="bg-pitch-50 rounded-lg p-5">
              <h3 className="text-sm font-bold text-pitch-600 mb-2">
                Flere nyheder
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                Følg med i de seneste nyheder om verdens fodboldlandshold.
              </p>
              <Link
                href="/nyheder"
                className="text-sm font-medium text-pitch-500 hover:text-pitch-600 transition-colors"
              >
                Se alle nyheder &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
