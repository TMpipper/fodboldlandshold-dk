export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  category: "nyheder" | "analyse" | "historie";
  readingTime: number;
  relatedTeams: string[];
  body: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "spanien-vinder-vm-2026",
    title: "Spanien vinder VM 2026 → La Roja er verdensmestre igen",
    excerpt:
      "Spanien har vundet VM 2026 og er dermed verdensmestre for anden gang i historien. La Roja dominerede turneringen med den samme unge generation, der vandt EM 2024.",
    publishedAt: "2026-07-22",
    updatedAt: "2026-07-22",
    category: "nyheder",
    readingTime: 6,
    relatedTeams: ["spanien", "frankrig", "england", "brasilien", "argentina"],
    body: `<p>Spanien har kronet en historisk periode i international fodbold ved at vinde <strong>VM 2026</strong> i USA, Mexico og Canada. Det er La Rojas anden VM-titel nogensinde — og den kommer bare to år efter triumfen ved EM 2024 i Tyskland.</p>

<p>Med sejren har Spanien cementeret sin status som det mest dominerende landshold i moderne fodbold. Ingen andre nationer har formået at vinde to store turneringer i træk med den samme kerne af spillere siden... ja, Spanien selv gjorde det med tre titler i perioden 2008-2012.</p>

<h2>En ny gylden generation</h2>

<p>Hvor den første gyldne æra var bygget omkring Xavi, Iniesta og Casillas, er denne nye bølge anført af en endnu yngre generation. <strong>Lamine Yamal</strong>, der allerede ved EM 2024 satte rekorden som den yngste målscorer i EM-historien, var igen en central figur ved VM 2026. Den nu 19-årige Barcelona-komet leverede flere afgørende præstationer gennem turneringen.</p>

<p><strong>Nico Williams</strong> fra Athletic Bilbao fortsatte sin fremragende form fra EM 2024 og terroriserede modstandernes forsvar med sin hastighed og driblinger. Sammen med Yamal udgør de to det mest frygtindgydende angrebspar i international fodbold.</p>

<p>På midtbanen var <strong>Rodri</strong> igen omdrejningspunktet for Spaniens boldbesiddende stil. Ballon d'Or-vinderen fra 2024 styrede tempoen med sin sædvanlige autoritet, mens <strong>Pedri</strong> og <strong>Gavi</strong> leverede de kreative glimt, der åbnede selv de mest kompakte forsvar.</p>

<h2>Luis de la Fuentes mesterværk</h2>

<p>Landstræner <strong>Luis de la Fuente</strong> fortjener enorm anerkendelse for sin rolle i Spaniens succes. Siden han overtog landsholdet, har han formået at integrere de unge talenter med den nødvendige erfaring og skabe et hold, der er større end summen af delene.</p>

<p>De la Fuentes taktiske fleksibilitet var et nøglevåben ved VM 2026. Spanien kunne skifte mellem dominerende boldbesiddelse og dødelige kontraangreb, afhængigt af modstanderens svagheder. Det er en udvikling fra den rene tiki-taka-filosofi, der definerede æraen under Del Bosque.</p>

<p>Med to store turneringer på to år har de la Fuente skrevet sig ind i historiebøgerne som en af de mest succesfulde landstrænere nogensinde.</p>

<h2>Vejen til finalen</h2>

<p>Spaniens vej gennem VM 2026 var præget af imponerende præstationer i hver runde. La Roja viste dybde i truppen og evnen til at hæve niveauet, når det gjaldt mest.</p>

<p>I gruppespillet dominerede Spanien med tre sejre og scorede i hver kamp. Knockoutrunderne bød på hårdere modstand, men Spanien viste den mentale styrke, der kendetegner ægte mestre. Semifinalen var en tæt affære, men de la Fuentes taktiske justeringer i anden halvleg viste sig afgørende.</p>

<p>Finalen var kroningen på en turnering, hvor Spanien aldrig var i tvivl om sin overlegenhed. La Roja kontrollerede kampen med den boldbesiddelse og det positionelle spil, der er blevet deres varemærke.</p>

<h2>Historisk perspektiv</h2>

<p>Med to VM-titler (2010 og 2026) og fire EM-titler (1964, 2008, 2012 og 2024) har Spanien nu seks store internationale titler i alt. Kun <a href="/brasilien">Brasilien</a> (5 VM-titler) og <a href="/tyskland">Tyskland</a> (4 VM-titler) har flere VM-trofæer, men ingen nation kan matche Spaniens samlede dominans i det 21. århundrede.</p>

<p>Perioden 2008-2012 og 2024-2026 repræsenterer to separate gyldne æraer, men det er den røde tråd af spillefilosofi og ungdomsudvikling, der binder dem sammen. La Masias og de spanske akademiers evne til at producere teknisk brillante spillere generation efter generation er fundamentet for Spaniens vedvarende succes.</p>

<h2>Hvad betyder det for dansk fodbold?</h2>

<p>For <a href="/danmark">Danmarks fodboldlandshold</a> er Spaniens VM-triumf en påmindelse om, hvad der kræves for at nå toppen af international fodbold. Spaniens investering i ungdomsudvikling, en klar spillefilosofi fra ungdom til A-landshold, og evnen til at udvikle verdensklassespillere er et forbillede for alle nationer.</p>

<p>Danmark, der selv har en stærk tradition for talentudvikling, kan lære af den spanske model — særligt den tålmodige tilgang til at integrere unge spillere på det højeste niveau og den kompromisløse insisteren på en identitet baseret på teknisk kvalitet og boldbesiddelse.</p>

<h2>Fremtidsudsigter for Spanien</h2>

<p>Med en gennemsnitsalder i truppen, der stadig er relativt lav, er der al mulig grund til at tro, at Spanien kan fortsætte sin dominans i de kommende år. Lamine Yamal er kun 19, Pedri 23, og Gavi 21 — denne generation har potentielt et helt årti mere på topniveau.</p>

<p>Næste store mål er EM 2028, der afholdes i Storbritannien og Irland. Kan Spanien gøre det utænkelige og vinde tre store turneringer i træk for anden gang i historien? Med denne generation virker intet umuligt for La Roja.</p>`,
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
