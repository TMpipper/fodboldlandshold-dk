interface KeyFacts {
  fifaRanking: number;
  nickname: string;
  coach: string;
  confederation: string;
  founded: number;
  stadium: string;
  bestResult: string;
  fifaCode: string;
}

export function FactBox({ facts }: { facts: KeyFacts }) {
  const rows = [
    { label: "FIFA-ranking", value: `#${facts.fifaRanking}` },
    { label: "Kaldenavn", value: facts.nickname },
    { label: "Landstræner", value: facts.coach },
    { label: "Konføderation", value: facts.confederation },
    { label: "Grundlagt", value: facts.founded.toString() },
    { label: "Hjemmebane", value: facts.stadium },
    { label: "Bedste resultat", value: facts.bestResult },
    { label: "FIFA-kode", value: facts.fifaCode },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-navy-800 text-white px-5 py-3">
        <h2 className="text-sm font-bold uppercase tracking-wider">Nøglefakta</h2>
      </div>
      <dl className="divide-y divide-slate-100">
        {rows.map((row) => (
          <div key={row.label} className="flex justify-between px-5 py-3 text-sm">
            <dt className="text-slate-500">{row.label}</dt>
            <dd className="font-medium text-slate-800 text-right">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
