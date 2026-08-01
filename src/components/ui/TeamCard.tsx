import Link from "next/link";
import Image from "next/image";
import type { Team } from "@/lib/content/taxonomy";
import { flagUrl } from "@/lib/content/images";

export function TeamCard({ team }: { team: Team }) {
  return (
    <Link
      href={`/${team.slug}`}
      className="group block bg-white rounded-lg shadow-sm card-hover overflow-hidden"
    >
      <div className="flex items-center gap-4 p-5">
        <div className="relative h-10 w-14 shrink-0 flag-shadow rounded overflow-hidden">
          <Image
            src={flagUrl(team.flagCode, "w160")}
            alt={`${team.shortName}s flag`}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-navy-800 group-hover:text-pitch-500 transition-colors truncate">
            {team.shortName}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {team.confederation} &middot; {team.fifaCode}
          </p>
        </div>
      </div>
    </Link>
  );
}
