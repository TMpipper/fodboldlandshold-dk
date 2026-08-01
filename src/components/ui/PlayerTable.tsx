export interface Player {
  name: string;
  position: string;
  club: string;
  caps: number;
  goals: number;
}

export function PlayerTable({ players }: { players: Player[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-navy-800 text-white text-left">
            <th className="px-4 py-3 font-semibold">Navn</th>
            <th className="px-4 py-3 font-semibold">Position</th>
            <th className="px-4 py-3 font-semibold">Klub</th>
            <th className="px-4 py-3 font-semibold text-center">Kampe</th>
            <th className="px-4 py-3 font-semibold text-center">Mål</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {players.map((player, i) => (
            <tr
              key={player.name}
              className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
            >
              <td className="px-4 py-3 font-medium text-slate-800">
                {player.name}
              </td>
              <td className="px-4 py-3 text-slate-600">{player.position}</td>
              <td className="px-4 py-3 text-slate-600">{player.club}</td>
              <td className="px-4 py-3 text-center text-slate-700">
                {player.caps}
              </td>
              <td className="px-4 py-3 text-center text-slate-700">
                {player.goals}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
