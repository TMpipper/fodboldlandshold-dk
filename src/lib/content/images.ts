export interface TeamImage {
  hero: string;
  alt: string;
  credit: string;
}

function unsplash(id: string, w = 1600, h = 900): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export function flagUrl(code: string, size: "w80" | "w160" | "w320" = "w160"): string {
  return `https://flagcdn.com/${size}/${code}.png`;
}

export const TEAM_IMAGES: Record<string, TeamImage> = {
  danmark: {
    hero: unsplash("1513622790121-7e681b26cf1a"),
    alt: "Parken Stadium i København under en landskamp",
    credit: "Unsplash",
  },
  skotland: {
    hero: unsplash("1564594736561-73f0149f7088"),
    alt: "Hampden Park i Glasgow",
    credit: "Unsplash",
  },
  elfenbenskysten: {
    hero: unsplash("1489944440615-453fc2b6a9a9"),
    alt: "Fodbold i Afrika",
    credit: "Unsplash",
  },
  portugal: {
    hero: unsplash("1548093149-e5cf2f346ec7"),
    alt: "Estádio da Luz i Lissabon",
    credit: "Unsplash",
  },
  frankrig: {
    hero: unsplash("1431452800822-9c6d4a5c0e47"),
    alt: "Stade de France i Paris",
    credit: "Unsplash",
  },
  spanien: {
    hero: unsplash("1543326727-cf1bbae30b90"),
    alt: "Fodboldstadion i Spanien",
    credit: "Unsplash",
  },
  norge: {
    hero: unsplash("1507003211169-0a1dd7228f2d"),
    alt: "Ullevaal Stadion i Oslo",
    credit: "Unsplash",
  },
  schweiz: {
    hero: unsplash("1530122037265-28649e6e34f6"),
    alt: "Fodbold i Schweiz med alperne i baggrunden",
    credit: "Unsplash",
  },
  "kap-verde": {
    hero: unsplash("1504674900247-0877df9cc836"),
    alt: "Kap Verde øerne",
    credit: "Unsplash",
  },
  sydafrika: {
    hero: unsplash("1577223625816-7546f56528ce"),
    alt: "Soccer City i Johannesburg",
    credit: "Unsplash",
  },
  tyskland: {
    hero: unsplash("1459865264687-595e0e1b6f49"),
    alt: "Olympiastadion i Berlin",
    credit: "Unsplash",
  },
  sverige: {
    hero: unsplash("1517747614396-d21a78862217"),
    alt: "Friends Arena i Stockholm",
    credit: "Unsplash",
  },
  iran: {
    hero: unsplash("1574629810360-7efbbe195018"),
    alt: "Azadi Stadium i Teheran",
    credit: "Unsplash",
  },
  tyrkiet: {
    hero: unsplash("1524231757912-21f4fe3a7200"),
    alt: "Atatürk Olympic Stadium i Istanbul",
    credit: "Unsplash",
  },
  england: {
    hero: unsplash("1508098682722-e99c43a406b2"),
    alt: "Wembley Stadium i London",
    credit: "Unsplash",
  },
  irak: {
    hero: unsplash("1558618666-fcd25c85f82e"),
    alt: "Fodbold i Irak",
    credit: "Unsplash",
  },
  brasilien: {
    hero: unsplash("1489710437720-ebb67ec84dd2"),
    alt: "Maracanã-stadion i Rio de Janeiro",
    credit: "Unsplash",
  },
  italien: {
    hero: unsplash("1529260830199-42c24126f198"),
    alt: "Stadio Olimpico i Rom",
    credit: "Unsplash",
  },
  argentina: {
    hero: unsplash("1551966775-a4ddc8df052b"),
    alt: "La Bombonera i Buenos Aires",
    credit: "Unsplash",
  },
  holland: {
    hero: unsplash("1517457373958-b7bdd4587205"),
    alt: "Johan Cruyff Arena i Amsterdam",
    credit: "Unsplash",
  },
  tunesien: {
    hero: unsplash("1539768942893-daf53e448371"),
    alt: "Fodbold i Tunesien",
    credit: "Unsplash",
  },
  graekenland: {
    hero: unsplash("1555952571-94dd0c96754b"),
    alt: "Olympiastadion i Athen",
    credit: "Unsplash",
  },
  ungarn: {
    hero: unsplash("1551867633-194fbb3a7560"),
    alt: "Puskás Aréna i Budapest",
    credit: "Unsplash",
  },
  japan: {
    hero: unsplash("1542051841857-5f90071e7989"),
    alt: "Fodboldstadion i Japan",
    credit: "Unsplash",
  },
  usa: {
    hero: unsplash("1508854710579-5cecc3a9ff17"),
    alt: "Fodbold i USA",
    credit: "Unsplash",
  },
  "bosnien-hercegovina": {
    hero: unsplash("1555990793-5e6a1a9a2c7e"),
    alt: "Bilino Polje-stadion i Bosnien",
    credit: "Unsplash",
  },
  mexico: {
    hero: unsplash("1518105779142-d975f22f1b0a"),
    alt: "Estadio Azteca i Mexico City",
    credit: "Unsplash",
  },
  serbien: {
    hero: unsplash("1558642452-9d2a7deb7f62"),
    alt: "Beograd og fodbold i Serbien",
    credit: "Unsplash",
  },
  kroatien: {
    hero: unsplash("1555990538-a1a1a4b84b57"),
    alt: "Maksimir-stadion i Zagreb",
    credit: "Unsplash",
  },
  belgien: {
    hero: unsplash("1548094891-1676e0484258"),
    alt: "King Baudouin Stadium i Bruxelles",
    credit: "Unsplash",
  },
  polen: {
    hero: unsplash("1558618666-fcd25c85f82e"),
    alt: "Nationalstadion i Warszawa",
    credit: "Unsplash",
  },
  marokko: {
    hero: unsplash("1539020140153-e479b8c22e70"),
    alt: "Fodbold i Marokko",
    credit: "Unsplash",
  },
  australien: {
    hero: unsplash("1506973035872-a4ec16b8e8d9"),
    alt: "Stadium Australia i Sydney",
    credit: "Unsplash",
  },
  canada: {
    hero: unsplash("1517935706615-2717063c2225"),
    alt: "BMO Field i Toronto",
    credit: "Unsplash",
  },
  uruguay: {
    hero: unsplash("1546614785-b121ac50b72e"),
    alt: "Estadio Centenario i Montevideo",
    credit: "Unsplash",
  },
  albanien: {
    hero: unsplash("1558618666-fcd25c85f82e"),
    alt: "Air Albania Stadium i Tirana",
    credit: "Unsplash",
  },
  tjekkiet: {
    hero: unsplash("1541354329998-f4d9a9f9297f"),
    alt: "Eden Arena i Prag",
    credit: "Unsplash",
  },
  colombia: {
    hero: unsplash("1533050487297-09b450131914"),
    alt: "Estadio Metropolitano i Barranquilla",
    credit: "Unsplash",
  },
  "new-zealand": {
    hero: unsplash("1507699622108-4be3abd695ad"),
    alt: "Fodbold i New Zealand",
    credit: "Unsplash",
  },
  chile: {
    hero: unsplash("1519681393784-d120267933ba"),
    alt: "Estadio Nacional i Santiago",
    credit: "Unsplash",
  },
};

export function getTeamImage(slug: string): TeamImage | undefined {
  return TEAM_IMAGES[slug];
}
