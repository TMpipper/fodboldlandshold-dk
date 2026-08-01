import Link from "next/link";
import { ARTICLES } from "@/lib/content/articles";
import { buildMetadata, newsIndexMeta } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = buildMetadata({
  ...newsIndexMeta(),
  path: "/nyheder",
});

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "Nyheder", path: "/nyheder" },
];

export default function NyhederPage() {
  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="bg-navy-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-6">
            <Breadcrumb items={crumbs} />
          </div>
          <p className="eyebrow text-pitch-400 mb-3">Fodboldnyheder</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Seneste nyt om verdens fodboldlandshold
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
        <div className="space-y-6">
          {sorted.map((article) => (
            <Link
              key={article.slug}
              href={`/nyheder/${article.slug}`}
              className="block bg-white rounded-lg shadow-sm card-hover p-6"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-pitch-500 bg-pitch-50 px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-xs text-slate-400">
                  {new Date(article.publishedAt).toLocaleDateString("da-DK", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="text-xs text-slate-400">
                  {article.readingTime} min læsetid
                </span>
              </div>
              <h2 className="text-xl font-bold text-navy-800 group-hover:text-pitch-500 mb-2">
                {article.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
