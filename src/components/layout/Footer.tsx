import Link from "next/link";
import { getPublishedTeams } from "@/lib/content/taxonomy";
import { COMPANY } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  const teams = getPublishedTeams();

  return (
    <footer className="bg-navy-900 text-navy-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold text-white">
              <span className="text-pitch-400">&#9917;</span> Fodboldlandshold.dk
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-navy-300">
              Din guide til verdens fodboldlandshold. Spillertrupper, kampe,
              historie og statistik.
            </p>
          </div>

          {/* Popular teams col 1 */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Populære landshold</h3>
            <ul className="space-y-2">
              {teams.slice(0, 7).map((team) => (
                <li key={team.slug}>
                  <Link
                    href={`/${team.slug}`}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {team.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular teams col 2 */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Flere landshold</h3>
            <ul className="space-y-2">
              {teams.slice(7, 14).map((team) => (
                <li key={team.slug}>
                  <Link
                    href={`/${team.slug}`}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {team.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/om" className="text-sm text-navy-300 hover:text-white transition-colors">
                  Om os
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-sm text-navy-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/nyheder" className="text-sm text-navy-300 hover:text-white transition-colors">
                  Nyheder
                </Link>
              </li>
              <li>
                <Link href="/privatlivspolitik" className="text-sm text-navy-300 hover:text-white transition-colors">
                  Privatlivspolitik
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="text-sm text-navy-300 hover:text-white transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-700 pt-6 text-center text-xs text-navy-400">
          &copy; {year} {COMPANY.name} &middot; CVR {COMPANY.cvr} &middot;{" "}
          {COMPANY.address}
        </div>
      </div>
    </footer>
  );
}
