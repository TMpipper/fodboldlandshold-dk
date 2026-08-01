export interface Player {
  name: string;
  position: string;
  club: string;
  caps: number;
  goals: number;
}

export interface Match {
  date: string;
  opponent: string;
  score: string;
  competition: string;
  result: "W" | "D" | "L";
}

export interface TeamData {
  tagline: string;
  intro: string;
  body: string;
  keyFacts: {
    fifaRanking: number;
    nickname: string;
    coach: string;
    confederation: string;
    founded: number;
    stadium: string;
    bestResult: string;
    fifaCode: string;
  };
  players: Player[];
  matches: Match[];
  achievements: string[];
  faq: { question: string; answer: string }[];
}

const TEAM_DATA: Record<string, TeamData> = {
  danmark: {
    tagline: "Danish Dynamite - Europamestre 1992",
    intro: `<p>Danmarks fodboldlandshold er et af de mest elskede og traditionsrige hold i dansk sport. Med rødder tilbage til 1908 har landsholdet leveret uforglemmelige øjeblikke, fra det sensationelle EM-guld i 1992 til stærke præstationer ved nyere slutrunder. Holdet repræsenterer mere end blot fodbold — det er en kilde til national stolthed og sammenhold.</p>
<p>Landsholdet har gennem årtierne produceret verdensklassespillere som Michael Laudrup, Peter Schmeichel, Brian Laudrup og i nyere tid Christian Eriksen, Pierre-Emile Højbjerg og Kasper Schmeichel. Den danske spillestil er kendetegnet ved taktisk disciplin, holdånd og en evne til at overpræstere mod stærkere modstandere.</p>
<p>I dag er Danmark fast inventar i toppen af europæisk fodbold og har kvalificeret sig til de seneste store slutrunder. Under ledelse af landstræner Kasper Hjulmand og efterfølgeren Brian Riemer har holdet fortsat med at udvikle sig og tiltrække fans fra hele verden.</p>`,
    body: `<h2>Historien om Danmarks fodboldlandshold</h2>
<p>Danmarks fodboldlandshold blev grundlagt i 1889, og Dansk Boldspil-Union (DBU) blev stiftet i 1889 som et af verdens ældste fodboldforbund. Holdet spillede sin første officielle landskamp i 1908 ved De Olympiske Lege i London, hvor Danmark vandt sølv efter et 0-2-nederlag til <a href="/england">England</a> i finalen. Ved OL i 1912 vandt Danmark igen sølv.</p>
<p>I de tidlige årtier var dansk fodbold udelukkende amatørbaseret, hvilket betød, at de bedste spillere ofte ikke kunne deltage i de største turneringer. Alligevel leverede Danmark imponerende resultater ved flere olympiske lege og tidlige internationale turneringer.</p>

<h3>Amatøræraen og overgangen til professionalisme</h3>
<p>Frem til 1970'erne holdt DBU fast i amatøridealet, hvilket begrænsede holdets muligheder i en tid, hvor de fleste europæiske lande havde professionelle ligaer. Det var først i 1971, at professionelle spillere fik lov til at repræsentere landsholdet, hvilket åbnede døren for en ny æra i dansk fodbold.</p>
<p>I 1980'erne eksploderede dansk fodbold på verdensscenen. Under ledelse af landstræner Sepp Piontek og med et hold der inkluderede Preben Elkjær, Michael Laudrup, Morten Olsen og Jesper Olsen, blev Danmark kendt som "Danish Dynamite" for deres offensive og underholdende spillestil. VM-debuten i 1986 i Mexico var et højdepunkt, hvor Danmark slog <a href="/tyskland">Vesttyskland</a> 2-0 i gruppespillet og viste verdensklassefodbold.</p>

<h3>Eventyret i 1992 — Europamestre</h3>
<p>Den mest ikoniske bedrift i dansk fodboldhistorie fandt sted ved EM i 1992 i Sverige. Danmark havde faktisk ikke kvalificeret sig til turneringen, men blev indkaldt som erstatning for Jugoslavien, der var blevet udelukket på grund af krigen på Balkan. Trods minimal forberedelse og lave forventninger formåede holdet at skrive fodboldhistorie.</p>
<p>Med Richard Møller Nielsen som landstræner, Peter Schmeichel i målet, John Jensen og Kim Vilfort på midtbanen og brødrene Michael og Brian Laudrup i angrebet, spillede Danmark sig gennem turneringen med en blanding af defensiv soliditet og kontraskarpe angreb. Finalesejren over <a href="/tyskland">Tyskland</a> med 2-0 — med mål af Jensen og Vilfort — er stadig en af de største overraskelser i international fodboldhistorie.</p>
<p>Kim Vilforts historie fra EM 1992 er særligt rørende: hans datter Line var alvorligt syg med leukæmi, og han rejste flere gange mellem Sverige og Danmark under turneringen. Han scorede det afgørende mål i finalen, og historien er blevet et symbol på dansk modstandskraft og determination.</p>

<h3>Conføderationsturneringen og 2000'erne</h3>
<p>I 1995 vandt Danmark Confederations Cup i Saudi-Arabien med en 2-0-sejr over <a href="/argentina">Argentina</a> i finalen. VM i 1998 i <a href="/frankrig">Frankrig</a> var endnu en stor succes, hvor Danmark nåede kvartfinalerne efter en spektakulær 4-1-sejr over Nigeria i ottendedelsfinalen. Kvartfinalen mod <a href="/brasilien">Brasilien</a> endte med et 2-3-nederlag i en dramatisk kamp.</p>
<p>Ved EM 2004 i Portugal og VM 2010 i Sydafrika deltog Danmark uden at nå knockoutrunderne, men holdet fortsatte med at være konkurrencedygtigt i europæisk fodbold. Under Morten Olsen som landstræner (2000-2015) gennemgik holdet en taktisk modernisering, der lagde grundlaget for fremtidige succeser.</p>

<h3>Den moderne æra: Hareide og Hjulmand</h3>
<p>Under Åge Hareide (2016-2020) oplevede Danmark en bemærkelsesværdig fremgang. Holdet gik 34 kampe ubesejret og kvalificerede sig suverænt til VM 2018 i Rusland, hvor de nåede ottendedelsfinalen. Christian Eriksen voksede til at blive holdets absolutte stjerne og kreative omdrejningspunkt.</p>
<p>Kasper Hjulmand overtog som landstræner i 2020 og førte Danmark til en semifinale ved EM 2021 — en turnering der var præget af Christian Eriksens hjertestop i åbningskampen mod <a href="/schweiz">Finland</a>. Holdets evne til at samle sig efter den traumatiske oplevelse og spille sig helt til semifinalen mod <a href="/england">England</a> på Wembley var en præstation, der rørte hele verden.</p>
<p>Ved VM 2022 i Qatar skuffede Danmark med en tidlig exit i gruppespillet, men holdet har fortsat med at være en stærk kraft i europæisk fodbold. Ved EM 2024 i <a href="/tyskland">Tyskland</a> nåede Danmark ottendedelsfinalen, hvor holdet tabte til hjemmenationen.</p>

<h2>Spillestil og identitet</h2>
<p>Dansk fodbold er traditionelt kendetegnet ved en kombination af fysisk styrke, taktisk disciplin og teknisk kvalitet. "Danish Dynamite"-perioden i 1980'erne definerede en offensiv, modig spillestil, der stadig gennemsyrer den danske fodboldkultur.</p>
<p>I den moderne æra har Danmark udviklet en mere balanceret tilgang under trænere som Hjulmand, der prioriterer boldbesiddelse, presfodbold og hurtige omstillinger. Det danske system producerer teknisk dygtige spillere fra et velorganiseret ungdomsudviklingsprogram, og mange danske spillere optræder i de største europæiske ligaer.</p>
<p>En af Danmarks største styrker er holdånden. Holdet har gentagne gange vist evnen til at overpræstere som kollektiv, selv når de mangler individuelle stjernespillere på niveau med de allerstørste nationer. Denne mentalitet — at holdet er større end den enkelte — er en rød tråd gennem hele dansk fodboldhistorie.</p>

<h2>Parken — hjemmebanen</h2>
<p>Danmarks hjemmebane er Parken (officielt Parken Stadium) i København. Stadionet har en kapacitet på cirka 38.000 tilskuere og har været hjemmebane for landsholdet siden 1992. Parken er også hjemmebane for FC København og har lagt gulv til adskillige historiske landskampe, koncerter og andre store begivenheder.</p>
<p>Stemningen i Parken til landskampe er unik, med de danske fans — ofte kaldet "roligans" (en kombination af "rolig" og "hooligan") — der er kendt for deres fredelige, festlige og passionerede opbakning. Det danske fankultur er internationalt anerkendt og har vundet flere priser for fair play og sportsånd.</p>

<h2>Aktuel status og fremtidsudsigter</h2>
<p>Danmark ligger konstant i top 20 på FIFA's verdensrangliste og har etableret sig som en nation, der fast kvalificerer sig til store slutrunder. Med en stærk generation af spillere i topeuropæiske klubber og et veludviklet talentudviklingssystem ser fremtiden lys ud for dansk fodbold.</p>
<p>Den danske Superliga og det danske ungdomssystem fortsætter med at producere talenter, der kan konkurrere på højeste internationale niveau. Med spillere som Rasmus Højlund, Mohamed Daramy og andre unge talenter i pipeline er der grundlag for optimisme for de kommende år.</p>`,
    keyFacts: {
      fifaRanking: 21,
      nickname: "Danish Dynamite / De Rød-Hvide",
      coach: "Brian Riemer",
      confederation: "UEFA",
      founded: 1889,
      stadium: "Parken, København",
      bestResult: "Europamestre 1992",
      fifaCode: "DEN",
    },
    players: [
      { name: "Kasper Schmeichel", position: "Målmand", club: "Celtic", caps: 100, goals: 0 },
      { name: "Christian Eriksen", position: "Midtbane", club: "Manchester United", caps: 130, goals: 42 },
      { name: "Pierre-Emile Højbjerg", position: "Midtbane", club: "Marseille", caps: 85, goals: 8 },
      { name: "Simon Kjær", position: "Forsvar", club: "AC Milan", caps: 125, goals: 5 },
      { name: "Andreas Christensen", position: "Forsvar", club: "Barcelona", caps: 70, goals: 2 },
      { name: "Rasmus Højlund", position: "Angriber", club: "Manchester United", caps: 25, goals: 8 },
      { name: "Joakim Mæhle", position: "Forsvar", club: "Wolfsburg", caps: 50, goals: 8 },
      { name: "Mikkel Damsgaard", position: "Midtbane", club: "Brentford", caps: 30, goals: 4 },
      { name: "Jonas Wind", position: "Angriber", club: "Wolfsburg", caps: 35, goals: 10 },
      { name: "Alexander Bah", position: "Forsvar", club: "Benfica", caps: 25, goals: 1 },
      { name: "Morten Hjulmand", position: "Midtbane", club: "Sporting CP", caps: 25, goals: 3 },
      { name: "Yussuf Poulsen", position: "Angriber", club: "RB Leipzig", caps: 75, goals: 12 },
      { name: "Jannik Vestergaard", position: "Forsvar", club: "Leicester City", caps: 40, goals: 3 },
      { name: "Victor Nelsson", position: "Forsvar", club: "Galatasaray", caps: 20, goals: 1 },
    ],
    matches: [
      { date: "1992-06-26", opponent: "Tyskland", score: "2-0", competition: "EM 1992 Finale", result: "W" },
      { date: "1986-06-13", opponent: "Vesttyskland", score: "2-0", competition: "VM 1986 Gruppespil", result: "W" },
      { date: "1998-06-28", opponent: "Nigeria", score: "4-1", competition: "VM 1998 Ottendedelsfinale", result: "W" },
      { date: "2021-06-12", opponent: "Finland", score: "0-1", competition: "EM 2021 Gruppespil", result: "L" },
      { date: "2021-07-07", opponent: "England", score: "1-2", competition: "EM 2021 Semifinale", result: "L" },
      { date: "2024-06-29", opponent: "Tyskland", score: "0-2", competition: "EM 2024 Ottendedelsfinale", result: "L" },
      { date: "2018-07-01", opponent: "Kroatien", score: "1-1 (2-3 str.)", competition: "VM 2018 Ottendedelsfinale", result: "L" },
      { date: "1995-01-06", opponent: "Argentina", score: "2-0", competition: "Confederations Cup 1995 Finale", result: "W" },
    ],
    achievements: [
      "Europamestre 1992",
      "Confederations Cup-vindere 1995",
      "OL-sølv 1908 og 1912",
      "VM-kvartfinale 1998",
      "EM-semifinale 2021",
      "34 kampe ubesejret (2016-2018)",
      "VM-deltagelse 1986, 1998, 2002, 2010, 2018, 2022",
      "OL-bronze 1948",
    ],
    faq: [
      {
        question: "Hvem er landstræner for Danmarks fodboldlandshold?",
        answer: "Brian Riemer er landstræner for Danmarks fodboldlandshold. Han overtog posten efter Kasper Hjulmand, der ledede holdet fra 2020 til 2024.",
      },
      {
        question: "Hvornår vandt Danmark EM i fodbold?",
        answer: "Danmark vandt EM i 1992 i Sverige. Holdet slog Tyskland 2-0 i finalen med mål af John Jensen og Kim Vilfort. Danmark var indkaldt som erstatning for Jugoslavien og var ikke kvalificeret til turneringen.",
      },
      {
        question: "Hvor mange gange har Danmark deltaget i VM?",
        answer: "Danmark har deltaget i VM seks gange: 1986 (Mexico), 1998 (Frankrig), 2002 (Japan/Sydkorea), 2010 (Sydafrika), 2018 (Rusland) og 2022 (Qatar). Det bedste resultat var kvartfinalen i 1998.",
      },
      {
        question: "Hvad er Danmarks bedste FIFA-rangering?",
        answer: "Danmark har været placeret helt oppe som nummer 3 på FIFA's verdensrangliste. Holdet ligger typisk i top 15-25 og er et fast inventar blandt de bedste hold i Europa.",
      },
      {
        question: "Hvem har scoret flest mål for Danmark?",
        answer: "Poul 'Tansen' Nielsen holder stadig rekorden med 52 mål i 38 kampe (1910-1925). I den moderne æra er Jon Dahl Tomasson (52 mål) og Preben Elkjær (38 mål) blandt de mest produktive målscorere.",
      },
      {
        question: "Hvem har flest landskampe for Danmark?",
        answer: "Simon Kjær og Christian Eriksen er blandt de mest landsholdserfarne spillere i Danmarkshistorien med over 120 landskampe hver. Peter Schmeichel spillede 129 landskampe.",
      },
      {
        question: "Hvor spiller Danmark deres hjemmekampe?",
        answer: "Danmark spiller hjemmekampe i Parken (Parken Stadium) i København. Stadionet har en kapacitet på cirka 38.000 tilskuere og har været landsholdets hjemmebane siden 1992.",
      },
      {
        question: "Hvad er 'Danish Dynamite'?",
        answer: "'Danish Dynamite' er et kaldenavn for det danske landshold fra 1980'erne, der under Sepp Piontek spillede offensiv og eksplosiv fodbold. Holdet med Laudrup, Elkjær og Lerby var berømt for sin underholdende spillestil.",
      },
    ],
  },

  skotland: {
    tagline: "En af verdens ældste fodboldnationer",
    intro: `<p>Skotlands fodboldlandshold er et af de ældste i verden og har en rig historie, der strækker sig helt tilbage til 1872. Skotterne er kendt for deres passionerede fans — den berømte "Tartan Army" — og en stolt fodboldtradition, der har produceret legender som Denis Law, Kenny Dalglish og Graeme Souness.</p>
<p>Trods perioder uden kvalifikation til store slutrunder har Skotland genfundet sin plads på den internationale scene. Ved EM 2021 var holdet tilbage ved en slutrunde for første gang i 23 år, og ved EM 2024 i <a href="/tyskland">Tyskland</a> deltog de igen.</p>
<p>Under ledelse af landstræner Steve Clarke har Skotland udviklet sig til et solidt og konkurrencedygtigt hold i UEFA's Nations League og EM-kvalifikation, med spillere fordelt i de bedste britiske ligaer.</p>`,
    body: `<h2>Skotlands fodboldhistorie</h2>
<p>Skotland spillede den første officielle landskamp i fodboldhistorien den 30. november 1872 mod <a href="/england">England</a> i Glasgow. Kampen endte 0-0, men den markerede begyndelsen på international fodbold som vi kender det. Skotland og England fortsatte med at spille mod hinanden årligt i det, der blev kendt som den ældste rivalisering i fodboldens historie.</p>
<p>I de tidlige årtier af international fodbold var Skotland en dominerende kraft. Det skotske pasningsspil — kendt som "the passing game" — var revolutionerende og formede den måde, fodbold blev spillet på verdensplan. Skotske trænere og spillere rejste verden rundt og var med til at grundlægge fodboldkulturer i Sydamerika og Europa.</p>

<h3>VM-deltagelser og 1970'erne</h3>
<p>Skotland har deltaget i VM otte gange (1954, 1958, 1974, 1978, 1982, 1986, 1990, 1998), men har aldrig avanceret fra gruppespillet. VM 1978 i Argentina er særligt berømt — og berygtet — for de enorme forventninger, der fulgte holdet, og det efterfølgende skuffende resultat trods en 3-2-sejr over <a href="/holland">Holland</a>.</p>
<p>I 1970'erne og 1980'erne havde Skotland en gylden generation med spillere som Kenny Dalglish, Graeme Souness, Alan Hansen og Denis Law. Disse spillere strålede i de engelske topklubber, men landsholdet formåede aldrig at omsætte det individuelle talent til resultater ved slutrunder.</p>

<h3>Den moderne æra</h3>
<p>Efter VM 1998 i <a href="/frankrig">Frankrig</a> fulgte en lang ørken uden kvalifikation til store slutrunder. Det var først under Steve Clarke, at Skotland genfandt vejen til slutrunderne. EM 2021 — udskudt til 2021 på grund af COVID-19 — markerede Skotlands comeback efter 23 år uden deltagelse i en slutrunde.</p>
<p>Spillere som Andy Robertson (Liverpool), John McGinn (Aston Villa), Scott McTominay (Napoli) og Kieran Tierney har løftet det skotske landshold til et nyt niveau. Den skotske Premier League, anført af Celtic og Rangers, fungerer som et stærkt fundament for talentudvikling.</p>

<h2>Spillestil og identitet</h2>
<p>Skotsk fodbold er kendetegnet ved fysisk hårdhed, intensitet og en aldrig-giv-op-mentalitet. Hampden Park i Glasgow er berømt for sin atmosfære, og den såkaldte "Hampden Roar" har intimideret mange modstandere gennem årene.</p>
<p>Tartan Army — Skotlands rejsende fans — er internationalt anerkendt som nogle af de mest passionerede og venlige fans i verden. De har vundet adskillige priser for deres opførsel og bidrag til stemningen ved turneringer.</p>

<h2>Rivaliseringen med England</h2>
<p>Kampen mellem Skotland og <a href="/england">England</a> er den ældste rivalisering i international fodbold. Selvom de to hold ikke længere mødes regelmæssigt i den årlige British Home Championship (som blev afskaffet i 1984), er møderne stadig fyldt med intensitet og betydning. Kampen ved EM 2021 på Wembley — et 0-0-resultat — viste, at rivaliseringen stadig lever i bedste velgående.</p>`,
    keyFacts: {
      fifaRanking: 39,
      nickname: "The Tartan Army",
      coach: "Steve Clarke",
      confederation: "UEFA",
      founded: 1873,
      stadium: "Hampden Park, Glasgow",
      bestResult: "VM-gruppespil (8 gange)",
      fifaCode: "SCO",
    },
    players: [
      { name: "Andy Robertson", position: "Forsvar", club: "Liverpool", caps: 70, goals: 3 },
      { name: "Scott McTominay", position: "Midtbane", club: "Napoli", caps: 55, goals: 10 },
      { name: "John McGinn", position: "Midtbane", club: "Aston Villa", caps: 65, goals: 17 },
      { name: "Kieran Tierney", position: "Forsvar", club: "Real Sociedad", caps: 45, goals: 1 },
      { name: "Angus Gunn", position: "Målmand", club: "Norwich City", caps: 15, goals: 0 },
      { name: "Billy Gilmour", position: "Midtbane", club: "Napoli", caps: 25, goals: 0 },
      { name: "Che Adams", position: "Angriber", club: "Torino", caps: 25, goals: 5 },
      { name: "Lyndon Dykes", position: "Angriber", club: "QPR", caps: 40, goals: 10 },
      { name: "Grant Hanley", position: "Forsvar", club: "Norwich City", caps: 45, goals: 2 },
      { name: "Kenny McLean", position: "Midtbane", club: "Norwich City", caps: 30, goals: 2 },
      { name: "Ryan Christie", position: "Midtbane", club: "Bournemouth", caps: 35, goals: 6 },
    ],
    matches: [
      { date: "1872-11-30", opponent: "England", score: "0-0", competition: "Verdens første landskamp", result: "D" },
      { date: "1978-06-11", opponent: "Holland", score: "3-2", competition: "VM 1978 Gruppespil", result: "W" },
      { date: "2021-06-18", opponent: "England", score: "0-0", competition: "EM 2021 Gruppespil", result: "D" },
      { date: "2021-06-22", opponent: "Kroatien", score: "1-3", competition: "EM 2021 Gruppespil", result: "L" },
      { date: "2024-06-14", opponent: "Tyskland", score: "1-5", competition: "EM 2024 Gruppespil", result: "L" },
      { date: "2024-06-23", opponent: "Ungarn", score: "1-0", competition: "EM 2024 Gruppespil", result: "W" },
    ],
    achievements: [
      "Spillede verdens første landskamp (1872)",
      "8 VM-deltagelser (1954-1998)",
      "British Home Championship-vindere 24 gange",
      "EM 2021 og EM 2024 deltagelse",
      "Nations League B-gruppevindere 2020",
      "Produceret legender som Kenny Dalglish og Denis Law",
    ],
    faq: [
      {
        question: "Hvem er landstræner for Skotlands fodboldlandshold?",
        answer: "Steve Clarke er landstræner for Skotland. Han overtog posten i 2019 og har ført holdet til to EM-slutrunder (2021 og 2024).",
      },
      {
        question: "Har Skotland nogensinde vundet VM eller EM?",
        answer: "Nej, Skotland har aldrig vundet VM eller EM. Holdet har deltaget i VM otte gange, men er aldrig avanceret fra gruppespillet. Ved EM har deltagelsen været begrænset til 1992, 1996, 2021 og 2024.",
      },
      {
        question: "Hvad er Tartan Army?",
        answer: "Tartan Army er kaldenavnet for Skotlands rejsende fodboldsfans. De er kendte over hele verden for deres passionerede, men fredelige opbakning og har vundet flere priser for sportsmanship.",
      },
      {
        question: "Hvornår spillede Skotland sin første landskamp?",
        answer: "Skotland spillede sin første landskamp den 30. november 1872 mod England i Glasgow. Det var den første officielle internationale fodboldkamp i historien og endte 0-0.",
      },
      {
        question: "Hvor spiller Skotland hjemmekampe?",
        answer: "Skotland spiller hjemmekampe på Hampden Park i Glasgow. Stadionet har en kapacitet på cirka 52.000 tilskuere og er et af de mest traditionsrige stadioner i verdens fodbold.",
      },
    ],
  },

  elfenbenskysten: {
    tagline: "Afrikas fodboldgigant med en gylden generation",
    intro: `<p>Elfenbenskystens fodboldlandshold, også kendt som "Les Éléphants", er en af Afrikas mest succesfulde fodboldnationer. Holdet har vundet Africa Cup of Nations tre gange og har produceret verdensklassespillere som Didier Drogba, Yaya Touré og Kolo Touré.</p>
<p>Den gyldne generation fra 2000'erne og 2010'erne bragte Elfenbenskysten til tre VM-slutrunder og cementerede landets position som en fodboldsupermagt på det afrikanske kontinent. Holdet er kendt for sin fysiske styrke, tekniske kvalitet og offensive spillestil.</p>
<p>Senest vandt Elfenbenskysten Africa Cup of Nations 2024 på hjemmebane — en triumf der genskabte nationens fodboldstolthed og markerede begyndelsen på en ny æra for Les Éléphants.</p>`,
    body: `<h2>Elfenbenskystens fodboldhistorie</h2>
<p>Elfenbenskystens fodboldforbund blev grundlagt i 1960, samme år som landet blev uafhængigt fra Frankrig. Holdet kvalificerede sig for første gang til Africa Cup of Nations i 1965 og vandt turneringen for første gang i 1992 efter en dramatisk straffesparkskonkurrence mod Ghana.</p>
<p>Det var dog i 2000'erne, at Elfenbenskysten for alvor trådte ind på den internationale scene. Med en generation af spillere, der optrådte i de største europæiske klubber, blev holdet en af de mest frygtede nationer i afrikansk fodbold.</p>

<h3>Den gyldne generation</h3>
<p>Fra cirka 2005 til 2015 havde Elfenbenskysten en af de mest talentfulde spillertrupper i afrikansk fodboldhistorie. Didier Drogba (Chelsea), Yaya Touré (Manchester City), Kolo Touré (Arsenal/Manchester City), Gervinho (Arsenal/Roma) og Salomon Kalou (Chelsea) var alle etablerede stjerner i europæisk topfodbold.</p>
<p>Denne generation kvalificerede sig til tre VM-slutrunder i træk (2006, 2010, 2014), men formåede aldrig at komme længere end gruppespillet. Ved VM 2014 i <a href="/brasilien">Brasilien</a> var holdet i en svær gruppe med Colombia, Grækenland og Japan.</p>
<p>Det store gennembrud på det afrikanske kontinent kom i 2015, da Elfenbenskysten vandt Africa Cup of Nations i Ækvatorialguinea. Finalen mod Ghana blev afgjort efter en episk straffesparkskonkurrence, hvor målmand Boubacar Barry scorede det afgørende spark.</p>

<h3>AFCON 2024 — triumfen på hjemmebane</h3>
<p>I 2024 var Elfenbenskysten vært for Africa Cup of Nations, og trods en skuffende start i turneringen formåede holdet at vende situationen og vinde titlen. Anført af Sébastien Haller og med en ny generation af talenter viste Les Éléphants den samme kampånd, der har kendetegnet ivoirisk fodbold.</p>
<p>Turneringen var en kæmpe succes både sportsligt og organisatorisk, og den styrkede Elfenbenskystens position som en af Afrikas ledende fodboldnationer.</p>

<h2>Spillestil og identitet</h2>
<p>Elfenbenskystens fodbold er kendetegnet ved fysisk styrke, hurtighed og teknisk kvalitet. Holdet har traditionelt haft stærke angribere og offensive midtbanespillere, der kan afgøre kampe med individuel kvalitet. Den ivoiriske fodboldstil er påvirket af den franske fodboldtradition, da mange spillere er uddannet i franske akademier.</p>
<p>Stade Félix Houphouët-Boigny i Abidjan og det nybyggede Stade Olympique Alassane Ouattara i Ebimpé er hjemmebaner, der byder på en intensiv atmosfære med passionerede fans.</p>`,
    keyFacts: {
      fifaRanking: 39,
      nickname: "Les Éléphants",
      coach: "Emerse Faé",
      confederation: "CAF",
      founded: 1960,
      stadium: "Stade Olympique Alassane Ouattara, Ebimpé",
      bestResult: "Africa Cup of Nations-vindere (1992, 2015, 2024)",
      fifaCode: "CIV",
    },
    players: [
      { name: "Sébastien Haller", position: "Angriber", club: "Borussia Dortmund", caps: 35, goals: 12 },
      { name: "Franck Kessié", position: "Midtbane", club: "Al Ahli", caps: 70, goals: 10 },
      { name: "Nicolas Pépé", position: "Angriber", club: "Villarreal", caps: 45, goals: 10 },
      { name: "Ibrahim Sangaré", position: "Midtbane", club: "Nottingham Forest", caps: 30, goals: 2 },
      { name: "Simon Adingra", position: "Angriber", club: "Brighton", caps: 20, goals: 5 },
      { name: "Odilon Kossounou", position: "Forsvar", club: "Atalanta", caps: 30, goals: 1 },
      { name: "Willy Boly", position: "Forsvar", club: "Nottingham Forest", caps: 35, goals: 1 },
      { name: "Jean-Philippe Gbamin", position: "Midtbane", club: "Trabzonspor", caps: 20, goals: 0 },
      { name: "Maxwel Cornet", position: "Angriber", club: "West Ham", caps: 35, goals: 6 },
      { name: "Badra Ali Sangaré", position: "Målmand", club: "Séwé Sports", caps: 10, goals: 0 },
    ],
    matches: [
      { date: "1992-01-26", opponent: "Ghana", score: "0-0 (11-10 str.)", competition: "AFCON 1992 Finale", result: "W" },
      { date: "2015-02-08", opponent: "Ghana", score: "0-0 (9-8 str.)", competition: "AFCON 2015 Finale", result: "W" },
      { date: "2024-02-11", opponent: "Nigeria", score: "2-1", competition: "AFCON 2024 Finale", result: "W" },
      { date: "2006-06-16", opponent: "Argentina", score: "1-2", competition: "VM 2006 Gruppespil", result: "L" },
      { date: "2010-06-20", opponent: "Brasilien", score: "1-3", competition: "VM 2010 Gruppespil", result: "L" },
      { date: "2014-06-19", opponent: "Colombia", score: "1-2", competition: "VM 2014 Gruppespil", result: "L" },
    ],
    achievements: [
      "Africa Cup of Nations-vindere 1992, 2015 og 2024",
      "VM-deltagelse 2006, 2010 og 2014",
      "Africa Cup of Nations-finalist 2006 og 2012",
      "Produceret verdensklassespillere som Didier Drogba og Yaya Touré",
      "Vært for AFCON 2024",
    ],
    faq: [
      {
        question: "Hvem er landstræner for Elfenbenskystens fodboldlandshold?",
        answer: "Emerse Faé er landstræner for Elfenbenskysten. Han overtog rollen under AFCON 2024 og førte holdet til titlen på hjemmebane.",
      },
      {
        question: "Hvor mange gange har Elfenbenskysten vundet AFCON?",
        answer: "Elfenbenskysten har vundet Africa Cup of Nations tre gange: i 1992, 2015 og 2024. Alle tre finalesejre var dramatiske — de to første blev afgjort efter straffespark.",
      },
      {
        question: "Hvem er Elfenbenskystens bedste spiller nogensinde?",
        answer: "Didier Drogba betragtes generelt som Elfenbenskystens bedste spiller. Han scorede 65 mål i 105 landskampe og var holdets kaptajn og leder i over et årti.",
      },
      {
        question: "Har Elfenbenskysten deltaget i VM?",
        answer: "Ja, Elfenbenskysten har deltaget i VM tre gange: 2006 (Tyskland), 2010 (Sydafrika) og 2014 (Brasilien). Holdet kom dog ikke videre fra gruppespillet ved nogen af turneringerne.",
      },
      {
        question: "Hvad er Elfenbenskystens kaldenavn?",
        answer: "Elfenbenskystens landshold er kendt som 'Les Éléphants' (Elefanterne). Kaldenavnet refererer til den afrikanske skovelefant, som er landets nationaldyr.",
      },
    ],
  },

  portugal: {
    tagline: "Europamestre 2016 og verdensstjerner i generationer",
    intro: `<p>Portugals fodboldlandshold er en af Europas mest succesfulde og respekterede nationer. Med EM-titlen i 2016 og Nations League-triumfen i 2019 har Portugal cementeret sin position som en europæisk topnation. Holdet har produceret nogle af fodboldhistoriens største spillere, fra Eusébio til Luís Figo og Cristiano Ronaldo.</p>
<p>Portugisisk fodbold er kendetegnet ved teknisk brillans, kreativitet og en passion, der gennemsyrer hele kulturen. Med et af verdens bedste ungdomsudviklingssystemer fortsætter Portugal med at producere verdensklassespillere år efter år.</p>
<p>Under ledelse af Roberto Martínez har Portugal fortsat med at være et af de mest frygtede hold i international fodbold, med en imponerende blanding af erfaring og ungdommeligt talent.</p>`,
    body: `<h2>Portugals fodboldhistorie</h2>
<p>Portugals fodboldforbund blev grundlagt i 1914, og holdet spillede sin første officielle landskamp i 1921. I de tidlige årtier var Portugal en relativt ukendt fodboldnation, men det ændrede sig dramatisk i 1960'erne med fremkomsten af Eusébio — "Den Sorte Panter" fra Mozambique.</p>

<h3>Eusébio-æraen og VM 1966</h3>
<p>VM 1966 i <a href="/england">England</a> var Portugals første store gennembrud. Anført af Eusébio, der scorede ni mål i turneringen og blev topscorer, nåede Portugal en sensationel tredjeplads. Eusébio blev en af de mest ikoniske spillere i fodboldhistorien og er stadig en legende i portugisisk fodbold.</p>

<h3>Den gyldne generation 2000-2006</h3>
<p>I slutningen af 1990'erne og begyndelsen af 2000'erne havde Portugal en ekstraordinær generation med Luís Figo, Rui Costa, Fernando Couto og den unge Cristiano Ronaldo. EM 2004 på hjemmebane var en smertefuld oplevelse, da Portugal tabte finalen til Grækenland. VM 2006 bragte en fjerdeplads efter nederlag til <a href="/frankrig">Frankrig</a> i semifinalen.</p>

<h3>EM 2016 — den historiske triumf</h3>
<p>Ved EM 2016 i Frankrig skrev Portugal fodboldhistorie. Trods at have vundet kun én kamp i den ordinære spilletid i gruppespillet, kæmpede holdet sig hele vejen til finalen, hvor de slog <a href="/frankrig">Frankrig</a> 1-0 i forlænget spilletid. Éder scorede det afgørende mål, mens Cristiano Ronaldo udgik med en skade tidligt i kampen, men motiverede holdkammeraterne fra sidelinjen.</p>
<p>Sejren var særligt betydningsfuld, fordi det var Portugals første titel ved en stor slutrunde. Fernando Santos' taktiske tilgang — defensiv soliditet kombineret med kontraangreb — viste sig effektiv mod selv de stærkeste modstandere.</p>

<h3>Nations League 2019 og den nye generation</h3>
<p>I 2019 vandt Portugal den første udgave af UEFA Nations League på hjemmebane med en 1-0-sejr over <a href="/holland">Holland</a> i finalen. Ronaldo fortsatte med at bryde rekorder, mens nye stjerner som Bruno Fernandes, Bernardo Silva og João Félix trådte frem.</p>

<h2>Cristiano Ronaldo — den største nogensinde</h2>
<p>Cristiano Ronaldo er ikke blot Portugals største spiller nogensinde — han er en af de bedste i fodboldhistorien. Med over 130 landskampsmål er han den mest scorende spiller i internationale landskampe nogensinde. Hans karriere med landsholdet strækker sig over to årtier, og han har været kaptajn og leder for holdet ved adskillige slutrunder.</p>

<h2>Spillestil og identitet</h2>
<p>Portugisisk fodbold er kendetegnet ved teknisk kvalitet, driblinger og kreativt spil. De portugisiske ungdomsakademier — især Sportings akademi i Lissabon — er verdenskendte for at udvikle teknisk begavede spillere. Holdet har altid haft en evne til at producere offensive talenter, der kan afgøre kampe med individuel brillans.</p>`,
    keyFacts: {
      fifaRanking: 6,
      nickname: "A Seleção das Quinas",
      coach: "Roberto Martínez",
      confederation: "UEFA",
      founded: 1914,
      stadium: "Estádio da Luz, Lissabon",
      bestResult: "Europamestre 2016",
      fifaCode: "POR",
    },
    players: [
      { name: "Cristiano Ronaldo", position: "Angriber", club: "Al Nassr", caps: 214, goals: 133 },
      { name: "Bruno Fernandes", position: "Midtbane", club: "Manchester United", caps: 65, goals: 15 },
      { name: "Bernardo Silva", position: "Midtbane", club: "Manchester City", caps: 85, goals: 12 },
      { name: "Diogo Jota", position: "Angriber", club: "Liverpool", caps: 35, goals: 10 },
      { name: "Rúben Dias", position: "Forsvar", club: "Manchester City", caps: 50, goals: 2 },
      { name: "João Cancelo", position: "Forsvar", club: "Al Hilal", caps: 50, goals: 3 },
      { name: "Rafael Leão", position: "Angriber", club: "AC Milan", caps: 30, goals: 5 },
      { name: "Vitinha", position: "Midtbane", club: "Paris Saint-Germain", caps: 25, goals: 2 },
      { name: "Diogo Costa", position: "Målmand", club: "FC Porto", caps: 20, goals: 0 },
      { name: "Pepe", position: "Forsvar", club: "Pensioneret", caps: 141, goals: 8 },
      { name: "Gonçalo Ramos", position: "Angriber", club: "Paris Saint-Germain", caps: 15, goals: 5 },
    ],
    matches: [
      { date: "2016-07-10", opponent: "Frankrig", score: "1-0", competition: "EM 2016 Finale", result: "W" },
      { date: "2019-06-09", opponent: "Holland", score: "1-0", competition: "Nations League 2019 Finale", result: "W" },
      { date: "2004-07-04", opponent: "Grækenland", score: "0-1", competition: "EM 2004 Finale", result: "L" },
      { date: "2006-07-05", opponent: "Frankrig", score: "0-1", competition: "VM 2006 Semifinale", result: "L" },
      { date: "2022-12-10", opponent: "Marokko", score: "0-1", competition: "VM 2022 Kvartfinale", result: "L" },
      { date: "1966-07-28", opponent: "Nordkorea", score: "5-3", competition: "VM 1966 Kvartfinale", result: "W" },
      { date: "2024-07-05", opponent: "Frankrig", score: "0-0 (3-5 str.)", competition: "EM 2024 Kvartfinale", result: "L" },
    ],
    achievements: [
      "Europamestre 2016",
      "UEFA Nations League-vindere 2019",
      "VM-tredjeplads 1966",
      "EM-finalist 2004",
      "VM-deltagelse 2002, 2006, 2010, 2014, 2018, 2022",
      "Cristiano Ronaldos verdensrekord i landskampsmål",
    ],
    faq: [
      {
        question: "Hvem er landstræner for Portugals fodboldlandshold?",
        answer: "Roberto Martínez er landstræner for Portugal. Den tidligere belgiske landstræner overtog posten i 2023 efter Fernando Santos.",
      },
      {
        question: "Hvor mange mål har Cristiano Ronaldo scoret for Portugal?",
        answer: "Cristiano Ronaldo har scoret over 130 mål i over 210 landskampe for Portugal — en verdensrekord for flest mål i internationale landskampe.",
      },
      {
        question: "Hvornår vandt Portugal EM?",
        answer: "Portugal vandt EM i 2016 i Frankrig med en 1-0-sejr over værtsnationen i finalen. Éder scorede det afgørende mål i forlænget spilletid.",
      },
      {
        question: "Hvem er Portugals bedste spiller nogensinde?",
        answer: "Cristiano Ronaldo betragtes som Portugals bedste spiller. Eusébio, der glimrede ved VM 1966, er den anden store legende i portugisisk fodboldhistorie.",
      },
      {
        question: "Har Portugal vundet VM?",
        answer: "Nej, Portugal har aldrig vundet VM. Holdet nåede en tredjeplads ved VM 1966 og har nået kvartfinaler ved flere nyere VM-slutrunder, men titlen er endnu ikke hentet.",
      },
    ],
  },

  frankrig: {
    tagline: "Dobbelte verdensmestre og fodboldmagtfaktor",
    intro: `<p>Frankrigs fodboldlandshold, "Les Bleus", er en af de mest succesfulde nationer i fodboldhistorien. Med to VM-titler (1998 og 2018) og to EM-titler (1984 og 2000) har Frankrig etableret sig som en vedvarende supermagt i international fodbold.</p>
<p>Fransk fodbold er beriget af en enorm talentbase, der afspejler landets kulturelle mangfoldighed. Fra Michel Platini og Zinedine Zidane til Kylian Mbappé har Frankrig konsekvent produceret spillere, der definerer deres generation.</p>
<p>Under Didier Deschamps, der selv var kaptajn på VM-vinderholdet i 1998, har Frankrig forblevet blandt verdens absolutte tophold og nåede VM-finalen igen i 2022.</p>`,
    body: `<h2>Frankrigs fodboldhistorie</h2>
<p>Frankrig var med til at grundlægge FIFA i 1904, og det franske fodboldforbund (FFF) blev stiftet i 1919. Frankrig var medinitiativtager til det første VM i 1930 og har spillet en central rolle i udviklingen af international fodbold.</p>

<h3>Michel Platini og EM 1984</h3>
<p>I 1980'erne leverede Michel Platini en af de største individuelle præstationer i EM-historien. Ved EM 1984 på hjemmebane scorede han ni mål i fem kampe og førte Frankrig til nationens første store titel. Platini, Alain Giresse og Jean Tigana udgjorde en af de mest kreative midtbaner nogensinde.</p>

<h3>VM 1998 — fodboldens hjemkomst</h3>
<p>VM 1998 på hjemmebane var et definerende øjeblik for Frankrig og for fransk samfund. Under Aimé Jacquets ledelse og med Zinedine Zidane som stjerne vandt Frankrig sin første VM-titel med en 3-0-sejr over <a href="/brasilien">Brasilien</a> i finalen. Zidanes to hovedstødsmål i finalen er blandt de mest ikoniske øjeblikke i VM-historien.</p>
<p>Holdet, der blev kaldt "Black-Blanc-Beur" (sort-hvid-arabisk), symboliserede Frankrigs multikulturelle identitet og bragte nationen sammen på tværs af etniske og sociale skel.</p>

<h3>EM 2000 og VM 2006</h3>
<p>Frankrig fulgte VM-triumfen op med EM-titlen i 2000 i <a href="/holland">Belgien/Holland</a>, hvor David Trézéguets golden goal i finalen mod <a href="/italien">Italien</a> sikrede sejren. VM 2006 i <a href="/tyskland">Tyskland</a> bragte endnu en finaleplads, men Zidanes berømte hovedstød mod Marco Materazzi og det efterfølgende røde kort overskygede nederlaget i straffesparkskonkurrencen mod <a href="/italien">Italien</a>.</p>

<h3>Den nye gyldne generation og VM 2018</h3>
<p>Under Didier Deschamps opdyrerede Frankrig en ny generation af verdensklassespillere. Ved VM 2018 i Rusland dominerede Frankrig turneringen med unge stjerner som Kylian Mbappé, Antoine Griezmann, Paul Pogba og N'Golo Kanté. Finalesejren over Kroatien med 4-2 var en fortjent triumf for et af de mest talentfulde hold i VM-historien.</p>
<p>Mbappé, der kun var 19 år, blev den anden teenager nogensinde (efter Pelé) til at score i en VM-finale. Hans tre mål i VM 2022-finalen mod <a href="/argentina">Argentina</a> — herunder et hat-trick — cementerede hans status som en af verdens bedste spillere, selvom Frankrig tabte finalen efter straffespark.</p>

<h2>Spillestil og identitet</h2>
<p>Fransk fodbold kombinerer teknisk elegance med atletisk styrke. Frankrig har en af de bredeste talentbaser i verden, med spillere der optræder i alle de store europæiske ligaer. Den franske ungdomsudvikling, centreret omkring Clairefontaine-akademiet, er internationalt anerkendt som en af de bedste i verden.</p>

<h2>Stade de France</h2>
<p>Frankrigs hjemmebane er Stade de France i Saint-Denis, Paris. Det imponerende stadion med plads til 81.000 tilskuere blev bygget til VM 1998 og har siden været scene for utallige historiske øjeblikke i fransk fodbold.</p>`,
    keyFacts: {
      fifaRanking: 2,
      nickname: "Les Bleus",
      coach: "Didier Deschamps",
      confederation: "UEFA",
      founded: 1904,
      stadium: "Stade de France, Paris",
      bestResult: "Verdensmestre 1998 og 2018",
      fifaCode: "FRA",
    },
    players: [
      { name: "Kylian Mbappé", position: "Angriber", club: "Real Madrid", caps: 85, goals: 48 },
      { name: "Antoine Griezmann", position: "Angriber", club: "Atlético Madrid", caps: 130, goals: 46 },
      { name: "Aurélien Tchouaméni", position: "Midtbane", club: "Real Madrid", caps: 35, goals: 2 },
      { name: "Jules Koundé", position: "Forsvar", club: "Barcelona", caps: 35, goals: 1 },
      { name: "William Saliba", position: "Forsvar", club: "Arsenal", caps: 20, goals: 0 },
      { name: "Mike Maignan", position: "Målmand", club: "AC Milan", caps: 15, goals: 0 },
      { name: "Eduardo Camavinga", position: "Midtbane", club: "Real Madrid", caps: 20, goals: 1 },
      { name: "Ousmane Dembélé", position: "Angriber", club: "Paris Saint-Germain", caps: 45, goals: 7 },
      { name: "Dayot Upamecano", position: "Forsvar", club: "Bayern München", caps: 25, goals: 0 },
      { name: "Randal Kolo Muani", position: "Angriber", club: "Paris Saint-Germain", caps: 20, goals: 5 },
      { name: "Marcus Thuram", position: "Angriber", club: "Inter", caps: 25, goals: 5 },
    ],
    matches: [
      { date: "1998-07-12", opponent: "Brasilien", score: "3-0", competition: "VM 1998 Finale", result: "W" },
      { date: "2018-07-15", opponent: "Kroatien", score: "4-2", competition: "VM 2018 Finale", result: "W" },
      { date: "2022-12-18", opponent: "Argentina", score: "3-3 (2-4 str.)", competition: "VM 2022 Finale", result: "L" },
      { date: "2000-07-02", opponent: "Italien", score: "2-1", competition: "EM 2000 Finale", result: "W" },
      { date: "2016-07-10", opponent: "Portugal", score: "0-1", competition: "EM 2016 Finale", result: "L" },
      { date: "2006-07-09", opponent: "Italien", score: "1-1 (3-5 str.)", competition: "VM 2006 Finale", result: "L" },
      { date: "1984-06-27", opponent: "Spanien", score: "2-0", competition: "EM 1984 Finale", result: "W" },
    ],
    achievements: [
      "Verdensmestre 1998 og 2018",
      "Europamestre 1984 og 2000",
      "VM-finalist 2006 og 2022",
      "Confederations Cup-vindere 2001 og 2003",
      "Nations League-vindere 2021",
      "VM-tredjeplads 1958 og 1986",
    ],
    faq: [
      {
        question: "Hvor mange VM-titler har Frankrig vundet?",
        answer: "Frankrig har vundet VM to gange: i 1998 på hjemmebane (3-0 over Brasilien) og i 2018 i Rusland (4-2 over Kroatien). Holdet tabte desuden finalen i 2006 og 2022.",
      },
      {
        question: "Hvem er landstræner for Frankrigs fodboldlandshold?",
        answer: "Didier Deschamps er landstræner for Frankrig. Han har ledet holdet siden 2012 og vandt VM 2018. Han var også kaptajn på VM-vinderholdet i 1998.",
      },
      {
        question: "Hvem er Frankrigs bedste spiller nogensinde?",
        answer: "Zinedine Zidane betragtes af mange som Frankrigs bedste spiller. Michel Platini og Kylian Mbappé er andre stærke kandidater. Zidanes to mål i VM-finalen 1998 er et af de mest ikoniske øjeblikke.",
      },
      {
        question: "Hvad er Les Bleus?",
        answer: "'Les Bleus' (De Blå) er kaldenavnet for det franske landshold, opkaldt efter holdets traditionelle blå spilletrøjer. Navnet bruges også om det franske rugbylandshold.",
      },
      {
        question: "Hvornår vandt Frankrig EM?",
        answer: "Frankrig har vundet EM to gange: i 1984 på hjemmebane, anført af Michel Platini, og i 2000 i Belgien/Holland. Holdet tabte EM-finalen i 2016 på hjemmebane mod Portugal.",
      },
    ],
  },

  spanien: {
    tagline: "Regerende verdensmestre og tiki-taka-pionererne",
    intro: `<p>Spaniens fodboldlandshold, "La Roja", er de regerende verdensmestre efter at have vundet VM 2026. Det er Spaniens anden VM-titel og kronen på en utrolig periode, der også inkluderer EM-titlen i 2024.</p>
<p>Spansk fodbold er verdensberømt for sin tiki-taka-stil, kendetegnet ved korte pasninger, boldbesiddelse og positionelt spil. Med spillere fra FC Barcelona og Real Madrid har Spanien konsekvent haft en af verdens mest talentfulde trupper.</p>
<p>Med VM 2026-titlen har Spanien cementeret sin status som det dominerende landshold i moderne fodbold — to store turneringer i træk med den samme unge, talentfulde generation anført af Lamine Yamal og Nico Williams.</p>`,
    body: `<h2>Spaniens fodboldhistorie</h2>
<p>Det spanske fodboldforbund (RFEF) blev grundlagt i 1913, og holdet spillede sin første officielle landskamp i 1920 ved De Olympiske Lege i Antwerpen, hvor Spanien vandt sølv. I de følgende årtier var Spanien en respekteret, men ikke dominerende kraft i international fodbold.</p>

<h3>EM 1964 — den første titel</h3>
<p>Spaniens første store titel kom ved EM 1964, der blev afholdt på hjemmebane. Med en 2-1-sejr over Sovjetunionen i finalen på Santiago Bernabéu vandt Spanien sin første internationale trofæ. Trods denne succes fulgte en lang periode uden store titler.</p>

<h3>Tiki-taka-revolutionen (2008-2012)</h3>
<p>Den spanske fodboldrevolution begyndte for alvor med EM 2008 i <a href="/schweiz">Østrig/Schweiz</a>. Under Luis Aragonés' ledelse og med en midtbane bestående af Xavi, Andrés Iniesta og Xabi Alonso spillede Spanien en boldbesiddelsesbaseret stil, der var praktisk talt uovervindelig. Finalesejren over <a href="/tyskland">Tyskland</a> med 1-0 var begyndelsen på en æra.</p>
<p>VM 2010 i <a href="/sydafrika">Sydafrika</a> var kronjuvelen. Under Vicente del Bosque fortsatte Spanien med sin dominerende stil og vandt turneringen med en 1-0-sejr over <a href="/holland">Holland</a> i finalen. Iniestas mål i forlænget spilletid — muligvis det mest berømte mål i spansk fodboldhistorie — sikrede Spaniens første VM-titel.</p>
<p>EM 2012 i Polen/Ukraine var den ultimative demonstration af spansk dominans. Spanien demolerede <a href="/italien">Italien</a> 4-0 i finalen og blev det første hold nogensinde til at vinde tre store turneringer i træk. Holdet spillede den mest dominerende bold, verden havde set.</p>

<h3>Overgangen og EM 2024</h3>
<p>Efter den gyldne generation gik Spanien gennem en overgangsperiode med tidlige exits ved VM 2014 og VM 2018. Men ved EM 2024 i <a href="/tyskland">Tyskland</a> genrejste Spanien sig med imponerende styrke. Med 17-årige Lamine Yamal som den yngste EM-målscorer nogensinde og den dynamiske Nico Williams vandt Spanien turneringen ubesejret med en 2-1-sejr over <a href="/england">England</a> i finalen.</p>

<h3>VM 2026 — verdensmestre igen</h3>
<p>Ved VM 2026 i USA, Mexico og Canada kronede Spanien sin nye gyldne generation med den ultimative titel. Under Luis de la Fuentes ledelse spillede La Roja dominerende fodbold gennem hele turneringen og vandt Spaniens anden VM-titel. Det var en historisk bedrift — to store turneringer i træk med stort set den samme trup. Lamine Yamal, Nico Williams, Pedri og Rodri var igen i centrum, og Spanien bekræftede sin status som verdens bedste landshold.</p>

<h2>Spillestil og identitet</h2>
<p>Tiki-taka er mere end en taktik — det er en filosofi, der gennemsyrer hele det spanske fodboldsystem fra ungdomsniveau til landsholdet. Korte pasninger, teknisk brillans, positionelt spil og boldbesiddelse som forsvar er kendetegnende for den spanske stil.</p>
<p>La Liga, med FC Barcelona og Real Madrid som flagskibe, er en af verdens bedste ligaer og fungerer som en uudtømmelig kilde til landsholdsspillere. Den spanske ungdomsudvikling — især Barcelonas berømte La Masia-akademi — har produceret generationer af verdensklassespillere.</p>`,
    keyFacts: {
      fifaRanking: 1,
      nickname: "La Roja",
      coach: "Luis de la Fuente",
      confederation: "UEFA",
      founded: 1913,
      stadium: "Ingen fast hjemmebane (rotation)",
      bestResult: "Verdensmestre 2010 og 2026",
      fifaCode: "ESP",
    },
    players: [
      { name: "Lamine Yamal", position: "Angriber", club: "FC Barcelona", caps: 20, goals: 5 },
      { name: "Nico Williams", position: "Angriber", club: "Athletic Bilbao", caps: 25, goals: 5 },
      { name: "Rodri", position: "Midtbane", club: "Manchester City", caps: 60, goals: 5 },
      { name: "Pedri", position: "Midtbane", club: "FC Barcelona", caps: 30, goals: 2 },
      { name: "Dani Olmo", position: "Midtbane", club: "FC Barcelona", caps: 40, goals: 10 },
      { name: "Álvaro Morata", position: "Angriber", club: "AC Milan", caps: 80, goals: 36 },
      { name: "Unai Simón", position: "Målmand", club: "Athletic Bilbao", caps: 25, goals: 0 },
      { name: "Dani Carvajal", position: "Forsvar", club: "Real Madrid", caps: 50, goals: 4 },
      { name: "Aymeric Laporte", position: "Forsvar", club: "Al Nassr", caps: 25, goals: 1 },
      { name: "Gavi", position: "Midtbane", club: "FC Barcelona", caps: 25, goals: 2 },
      { name: "Fabián Ruiz", position: "Midtbane", club: "Paris Saint-Germain", caps: 35, goals: 5 },
    ],
    matches: [
      { date: "2010-07-11", opponent: "Holland", score: "1-0", competition: "VM 2010 Finale", result: "W" },
      { date: "2008-06-29", opponent: "Tyskland", score: "1-0", competition: "EM 2008 Finale", result: "W" },
      { date: "2012-07-01", opponent: "Italien", score: "4-0", competition: "EM 2012 Finale", result: "W" },
      { date: "2024-07-14", opponent: "England", score: "2-1", competition: "EM 2024 Finale", result: "W" },
      { date: "2014-06-13", opponent: "Holland", score: "1-5", competition: "VM 2014 Gruppespil", result: "L" },
      { date: "2018-07-01", opponent: "Rusland", score: "1-1 (3-4 str.)", competition: "VM 2018 Ottendedelsfinale", result: "L" },
      { date: "2024-07-09", opponent: "Frankrig", score: "2-1", competition: "EM 2024 Semifinale", result: "W" },
    ],
    achievements: [
      "Verdensmestre 2010 og 2026",
      "Europamestre 1964, 2008, 2012 og 2024",
      "To store turneringer i træk (EM 2024 + VM 2026)",
      "Tre store turneringer i træk (2008-2012)",
      "Nations League-vindere 2023",
      "OL-guld i fodbold 1992",
      "U21-EM-vindere adskillige gange",
    ],
    faq: [
      {
        question: "Hvor mange gange har Spanien vundet VM?",
        answer: "Spanien har vundet VM to gange — i 2010 i Sydafrika og i 2026 i USA/Mexico/Canada. VM 2026-titlen gjorde Spanien til det dominerende landshold i moderne fodbold med to store turneringer i træk.",
      },
      {
        question: "Hvad er tiki-taka?",
        answer: "Tiki-taka er en spillestil kendetegnet ved korte pasninger, høj boldbesiddelse og hurtige kombinationer. Stilen blev perfektioneret af Spanien under EM 2008, VM 2010 og EM 2012 med spillere som Xavi og Iniesta.",
      },
      {
        question: "Hvem er landstræner for Spaniens fodboldlandshold?",
        answer: "Luis de la Fuente er landstræner for Spanien. Han førte holdet til EM-titlen i 2024 i Tyskland.",
      },
      {
        question: "Hvor mange EM-titler har Spanien vundet?",
        answer: "Spanien har vundet EM fire gange — i 1964, 2008, 2012 og 2024. Det gør Spanien til den mest vindende nation i EM-historien.",
      },
      {
        question: "Hvem er Spaniens bedste spiller nogensinde?",
        answer: "Xavi Hernández og Andrés Iniesta betragtes ofte som de mest indflydelsesrige spanske spillere. Alfredo Di Stéfano, Raúl og den nuværende generation med Rodri er også blandt de største.",
      },
    ],
  },

  norge: {
    tagline: "Skandinavisk rivalisering og drøbak-ånden",
    intro: `<p>Norges fodboldlandshold har en stolt, men ujævn historie i international fodbold. Nordmændene har leveret bemærkelsesværdige resultater, herunder kvalifikation til VM i 1994 og 1998, men har også oplevet lange perioder uden deltagelse i store slutrunder.</p>
<p>Norsk fodbold er tæt forbundet med den skandinaviske rivalisering mod <a href="/danmark">Danmark</a> og <a href="/sverige">Sverige</a>. Kampe mellem de nordiske nationer er altid fyldt med intensitet og national stolthed. Norge har produceret verdenskendte spillere som Martin Ødegaard, Erling Haaland og tidligere stjerner som Ole Gunnar Solskjær.</p>
<p>Med Erling Haaland og Martin Ødegaard som fundamentet for en ny gylden generation er der stor optimisme om Norges fremtid i international fodbold.</p>`,
    body: `<h2>Norges fodboldhistorie</h2>
<p>Norges Fotballforbund blev grundlagt i 1902, og holdet spillede sin første officielle landskamp i 1908. I de tidlige årtier var Norge en relativt beskeden fodboldnation, men holdet leverede allerede i 1936 en sensationel sejr over <a href="/tyskland">Tyskland</a> ved OL i Berlin.</p>

<h3>1990'erne — den gyldne æra</h3>
<p>Under landstræner Egil "Drillo" Olsen oplevede Norge sin mest succesfulde periode. Olsens taktiske tilgang — baseret på direkte spil, lange bolde og fysisk styrke — var effektiv, om end ikke altid smuk at se på. Norge kvalificerede sig til VM 1994 i USA og VM 1998 i <a href="/frankrig">Frankrig</a>.</p>
<p>Ved VM 1998 slog Norge <a href="/brasilien">Brasilien</a> 2-1 i gruppespillet — en af de største resultater i norsk fodboldhistorie. Kjetil Rekdals straffesparksmål i den kamp er et af de mest ikoniske øjeblikke i norsk sport. Norge nåede ottendedelsfinalen, hvor holdet tabte til <a href="/italien">Italien</a>.</p>

<h3>Ørkenvandring og genfødsel</h3>
<p>Efter VM 1998 fulgte en lang periode uden kvalifikation til store slutrunder. Norge missede EM 2000, VM 2002, EM 2004 og alle efterfølgende turneringer. Det var en frustrerende tid for norsk fodbold, der kæmpede med at producere spillere på internationalt topniveau.</p>
<p>Den nye generation med Erling Haaland (Manchester City) og Martin Ødegaard (Arsenal) har dog ændret billedet drastisk. Haaland, en af verdens mest produktive angribere, og Ødegaard, en kreativ midtbanegeni, udgør fundamentet for et norsk hold, der igen kan konkurrere med de bedste.</p>

<h2>Spillestil og identitet</h2>
<p>Norsk fodbold har historisk været kendetegnet ved fysisk styrke og direkte spil. Under Drillo Olsen var den "norske model" baseret på lange bolde og defensiv soliditet. I den moderne æra har spillestilen udviklet sig mod mere boldbesiddelse og teknisk spil, drevet af talenter som Ødegaard.</p>
<p>Ullevaal Stadion i Oslo er Norges hjemmebane med plads til omkring 28.000 tilskuere. Kampe mod <a href="/sverige">Sverige</a> og <a href="/danmark">Danmark</a> er altid højdepunkter i den norske fodboldkalender.</p>

<h2>Den nordiske rivalisering</h2>
<p>Rivaliseringen mellem Norge, <a href="/danmark">Danmark</a> og <a href="/sverige">Sverige</a> er en central del af skandinavisk fodboldkultur. Kampene er altid intense og betydningsfulde, uanset turneringskontekst. For norske fans er det særligt vigtigt at slå de svenske naboer.</p>`,
    keyFacts: {
      fifaRanking: 48,
      nickname: "Drillos / Løvene",
      coach: "Ståle Solbakken",
      confederation: "UEFA",
      founded: 1902,
      stadium: "Ullevaal Stadion, Oslo",
      bestResult: "VM-ottendedelsfinale 1998",
      fifaCode: "NOR",
    },
    players: [
      { name: "Erling Haaland", position: "Angriber", club: "Manchester City", caps: 35, goals: 32 },
      { name: "Martin Ødegaard", position: "Midtbane", club: "Arsenal", caps: 60, goals: 10 },
      { name: "Alexander Sørloth", position: "Angriber", club: "Atlético Madrid", caps: 55, goals: 15 },
      { name: "Sander Berge", position: "Midtbane", club: "Fulham", caps: 50, goals: 5 },
      { name: "Kristoffer Ajer", position: "Forsvar", club: "Brentford", caps: 30, goals: 1 },
      { name: "Ørjan Nyland", position: "Målmand", club: "Sevilla", caps: 25, goals: 0 },
      { name: "Morten Thorsby", position: "Midtbane", club: "Genoa", caps: 30, goals: 2 },
      { name: "Birger Meling", position: "Forsvar", club: "Rennes", caps: 25, goals: 0 },
      { name: "Stefan Strandberg", position: "Forsvar", club: "Valladolid", caps: 25, goals: 1 },
      { name: "Fredrik Bjørkan", position: "Forsvar", club: "Hertha Berlin", caps: 15, goals: 0 },
      { name: "Antonio Nusa", position: "Angriber", club: "RB Leipzig", caps: 10, goals: 2 },
    ],
    matches: [
      { date: "1998-06-23", opponent: "Brasilien", score: "2-1", competition: "VM 1998 Gruppespil", result: "W" },
      { date: "1936-08-07", opponent: "Tyskland", score: "2-0", competition: "OL 1936 Kvartfinale", result: "W" },
      { date: "1998-06-27", opponent: "Italien", score: "0-1", competition: "VM 1998 Ottendedelsfinale", result: "L" },
      { date: "1994-06-23", opponent: "Mexico", score: "1-0", competition: "VM 1994 Gruppespil", result: "W" },
      { date: "2022-06-12", opponent: "Sverige", score: "3-2", competition: "Nations League 2022", result: "W" },
      { date: "2023-10-15", opponent: "Skotland", score: "1-0", competition: "EM-kvalifikation 2024", result: "W" },
    ],
    achievements: [
      "VM-deltagelse 1938, 1994 og 1998",
      "OL-bronze 1936",
      "VM-ottendedelsfinale 1998",
      "Sejr over Brasilien ved VM 1998",
      "Nations League B-gruppevindere",
      "Produceret verdensklassespillere som Haaland og Ødegaard",
    ],
    faq: [
      {
        question: "Hvem er landstræner for Norges fodboldlandshold?",
        answer: "Ståle Solbakken er landstræner for Norge. Den tidligere FC København-træner har ledet holdet siden 2020.",
      },
      {
        question: "Har Norge nogensinde deltaget i VM?",
        answer: "Ja, Norge har deltaget i VM tre gange: 1938, 1994 og 1998. Det bedste resultat var ottendedelsfinalen i 1998, hvor Norge tabte til Italien efter at have slået Brasilien i gruppespillet.",
      },
      {
        question: "Hvem er Norges bedste spiller?",
        answer: "Erling Haaland betragtes som den nuværende bedste norske spiller og en af verdens bedste angribere. Martin Ødegaard er en anden verdensklassespiller. Historisk er spillere som Rune Bratseth og John Arne Riise også blandt de største.",
      },
      {
        question: "Har Norge kvalificeret sig til EM?",
        answer: "Norge har aldrig kvalificeret sig til et EM-slutrunde. Trods stærke trupper — især i 1990'erne og med den nuværende generation — har kvalifikation til EM været en udfordring.",
      },
      {
        question: "Hvordan er rivaliseringen mellem Norge og Danmark?",
        answer: "Norge og Danmark har en stærk skandinavisk rivalisering i fodbold. Kampene mellem de to nationer er altid intense og har stor betydning for begge landes fans og fodboldfællesskab.",
      },
    ],
  },

  schweiz: {
    tagline: "Alpernes konsistente overraskelse",
    intro: `<p>Schweiz' fodboldlandshold, "Nati", har udviklet sig fra en underspillet nation til en fast deltager ved store slutrunder. Med en multikulturel trup, der afspejler landets sproglige mangfoldighed, har Schweiz leveret imponerende resultater i de seneste to årtier.</p>
<p>Holdet har kvalificeret sig til fem VM-slutrunder i træk (2006-2022) og har konsekvent vist evnen til at slå større nationer. Den historiske kvartfinaleplads ved EM 2021, hvor Schweiz slog <a href="/frankrig">Frankrig</a> ud, var et definerende øjeblik for schweizisk fodbold.</p>
<p>Med spillere som Granit Xhaka, Manuel Akanji og Xherdan Shaqiri har Schweiz cementeret sin position som en respekteret kraft i europæisk fodbold.</p>`,
    body: `<h2>Schweiz' fodboldhistorie</h2>
<p>Det schweiziske fodboldforbund (SFV/ASF) blev grundlagt i 1895, hvilket gør det til et af de ældste i verden. Schweiz var et af de fire europæiske hold, der deltog ved det første VM i 1930 i Uruguay. Holdet nåede kvartfinalen ved VM 1934, 1938 og 1954.</p>

<h3>VM 1954 på hjemmebane</h3>
<p>VM 1954 i Schweiz var turneringen, der producerede "Miraklet i Bern" — <a href="/tyskland">Vesttysklands</a> sensationelle finalesejr over Ungarn. For Schweiz selv var det en blandet oplevelse: holdet nåede kvartfinalen, men tabte 5-7 mod Østrig i en af de mest målrige kampe i VM-historien.</p>

<h3>Den moderne renæssance</h3>
<p>Efter årtier med ujævne resultater begyndte Schweiz' opstigning i 2000'erne. Holdet kvalificerede sig til VM 2006 i <a href="/tyskland">Tyskland</a> og har ikke misset en stor slutrunde siden. Under trænere som Ottmar Hitzfeld og Vladimir Petković udvikledes en spillestil baseret på taktisk disciplin og individuel kvalitet.</p>
<p>Ved EM 2021 leverede Schweiz sin mest bemærkelsesværdige præstation. I ottendedelsfinalen slog holdet <a href="/frankrig">Frankrig</a> ud efter en dramatisk kamp, der endte 3-3 og blev afgjort i straffespark. Haris Seferović og Mario Gavranović scorede sent for at udligne, og Yann Sommer reddede Kylian Mbappés straffespark. Schweiz tabte efterfølgende kvartfinalen mod <a href="/spanien">Spanien</a> efter straffespark.</p>

<h2>Spillestil og identitet</h2>
<p>Schweiz har en unik fodboldidentitet, der afspejler landets tre sprogregioner: tysk, fransk og italiensk. Truppen består af spillere med rødder i alle dele af landet og fra Balkans diaspora, hvilket giver en bred talentbase og kulturel mangfoldighed.</p>
<p>Taktisk er Schweiz kendetegnet ved organisation, defensiv soliditet og evnen til at udnytte kontraangreb. Granit Xhaka har i mange år været holdets leder og taktiske hjerne på midtbanen.</p>

<h2>Multikulturel styrke</h2>
<p>En af Schweiz' største styrker er den mangfoldige spillertrup. Spillere som Xhaka (albansk baggrund), Shaqiri (kosovarsk baggrund) og Akanji (nigeriansk-schweizisk) repræsenterer det moderne Schweiz og viser, hvordan integration kan være en sportslig styrke.</p>`,
    keyFacts: {
      fifaRanking: 15,
      nickname: "Nati / Schweizergarden",
      coach: "Murat Yakin",
      confederation: "UEFA",
      founded: 1895,
      stadium: "Stade de Suisse, Bern",
      bestResult: "VM-kvartfinale 1934, 1938, 1954; EM-kvartfinale 2021",
      fifaCode: "SUI",
    },
    players: [
      { name: "Granit Xhaka", position: "Midtbane", club: "Bayer Leverkusen", caps: 130, goals: 14 },
      { name: "Manuel Akanji", position: "Forsvar", club: "Manchester City", caps: 60, goals: 3 },
      { name: "Xherdan Shaqiri", position: "Angriber", club: "Chicago Fire", caps: 120, goals: 32 },
      { name: "Yann Sommer", position: "Målmand", club: "Inter", caps: 95, goals: 0 },
      { name: "Breel Embolo", position: "Angriber", club: "Monaco", caps: 65, goals: 15 },
      { name: "Remo Freuler", position: "Midtbane", club: "Bologna", caps: 65, goals: 4 },
      { name: "Ricardo Rodríguez", position: "Forsvar", club: "Torino", caps: 110, goals: 9 },
      { name: "Fabian Rieder", position: "Midtbane", club: "Rennes", caps: 15, goals: 2 },
      { name: "Dan Ndoye", position: "Angriber", club: "Bologna", caps: 15, goals: 3 },
      { name: "Nico Elvedi", position: "Forsvar", club: "Borussia Mönchengladbach", caps: 50, goals: 1 },
    ],
    matches: [
      { date: "2021-06-28", opponent: "Frankrig", score: "3-3 (5-4 str.)", competition: "EM 2021 Ottendedelsfinale", result: "W" },
      { date: "2021-07-02", opponent: "Spanien", score: "1-1 (1-3 str.)", competition: "EM 2021 Kvartfinale", result: "L" },
      { date: "2010-06-16", opponent: "Spanien", score: "1-0", competition: "VM 2010 Gruppespil", result: "W" },
      { date: "2018-06-27", opponent: "Costa Rica", score: "2-2", competition: "VM 2018 Gruppespil", result: "D" },
      { date: "2022-12-06", opponent: "Portugal", score: "1-6", competition: "VM 2022 Ottendedelsfinale", result: "L" },
      { date: "2024-06-29", opponent: "Italien", score: "2-0", competition: "EM 2024 Ottendedelsfinale", result: "W" },
    ],
    achievements: [
      "VM-kvartfinale 1934, 1938 og 1954",
      "EM-kvartfinale 2021",
      "VM-deltagelse 2006, 2010, 2014, 2018, 2022",
      "Sejr over Frankrig ved EM 2021",
      "Sejr over Spanien ved VM 2010",
      "Vært for VM 1954",
    ],
    faq: [
      {
        question: "Hvem er landstræner for Schweiz' fodboldlandshold?",
        answer: "Murat Yakin er landstræner for Schweiz. Han overtog posten i 2021 efter Vladimir Petković og har ført holdet til EM 2024.",
      },
      {
        question: "Har Schweiz vundet noget i fodbold?",
        answer: "Schweiz har ikke vundet en stor seniorslutrundeturnering, men har nået VM-kvartfinaler i 1934, 1938 og 1954 samt EM-kvartfinalen i 2021, hvor de slog Frankrig ud i en dramatisk kamp.",
      },
      {
        question: "Hvornår slog Schweiz Frankrig ud af EM?",
        answer: "Ved EM 2021 slog Schweiz Frankrig ud i ottendedelsfinalen. Kampen endte 3-3 og blev afgjort i straffespark, hvor Yann Sommer reddede Kylian Mbappés afgørende straffe.",
      },
      {
        question: "Hvilke sprog tales på Schweiz' fodboldlandshold?",
        answer: "Schweiz' trup afspejler landets flersprogede natur med spillere, der taler tysk, fransk, italiensk og andre sprog. Holdkommunikationen foregår primært på tysk og fransk.",
      },
      {
        question: "Hvor mange VM-slutrunder har Schweiz deltaget i?",
        answer: "Schweiz har deltaget i 12 VM-slutrunder, senest fem i træk fra 2006 til 2022. Holdet har ikke vundet VM, men har nået kvartfinalen tre gange.",
      },
    ],
  },

  "kap-verde": {
    tagline: "Østatens fodboldmirakel fra Atlanterhavet",
    intro: `<p>Kap Verdes fodboldlandshold, kendt som "De Blå Hajer" (Tubarões Azuis), er en af de mest bemærkelsesværdige succeshistorier i afrikansk fodbold. Den lille østat i Atlanterhavet med kun omkring 600.000 indbyggere har formået at kvalificere sig til Africa Cup of Nations flere gange og overraske langt større nationer.</p>
<p>Kap Verde drager fordel af en stor diaspora, der har produceret talentfulde spillere i europæiske ligaer, særligt i Portugal og Frankrig. Holdet har en unik identitet, der blander afrikanske og portugisiske fodboldtraditioner.</p>
<p>Trods sin lille størrelse har Kap Verde vist, at passion, organisation og talent kan overvinde numerisk underlegenhed i international fodbold.</p>`,
    body: `<h2>Kap Verdes fodboldhistorie</h2>
<p>Kap Verdes fodboldforbund blev grundlagt i 1982, og holdet blev medlem af FIFA i 1986. I de tidlige år var Kap Verde en af de svageste nationer i afrikansk fodbold, men fra 2000'erne begyndte holdet at klatre i rangeringen.</p>

<h3>Gennembruddet ved AFCON</h3>
<p>Kap Verdes store gennembrud kom, da holdet kvalificerede sig til Africa Cup of Nations 2013 i Sydafrika — den første slutrundedeltagelse i nationens historie. Det var en sensationel bedrift for en ø-nation med så lille en befolkning. Holdet nåede kvartfinalen, hvor de tabte til Ghana.</p>
<p>Siden har Kap Verde kvalificeret sig til AFCON 2015 og 2021 og har etableret sig som en fast deltager i kvalifikationen. Ved AFCON 2021 i Cameroun nåede holdet igen knockoutrunderne og beviste, at den første kvalifikation ikke var et lykketræf.</p>

<h3>Diasporaens betydning</h3>
<p>En af nøglerne til Kap Verdes succes er den store kapverdiske diaspora. Mange af landsholdets bedste spillere er født og opvokset i <a href="/portugal">Portugal</a>, <a href="/frankrig">Frankrig</a>, <a href="/holland">Holland</a> eller andre europæiske lande, men vælger at repræsentere deres forældres hjemland. Denne talentbase giver Kap Verde adgang til spillere, der optræder i stærke europæiske ligaer.</p>

<h2>Spillestil og identitet</h2>
<p>Kap Verdes fodbold er påvirket af den portugisiske tradition med teknisk dygtighed og korte pasninger, kombineret med afrikansk fysik og energi. Holdet spiller med en intensitet og stolthed, der afspejler den kapverdiske nationalfølelse.</p>
<p>Hjemmekampene spilles på Estádio Nacional i Praia, hvor den varme støtte fra lokale fans skaber en unik atmosfære. Kap Verdes historier om at overvinde odds har gjort holdet til en favorit blandt neutrale fodboldfans i Afrika.</p>

<h2>Fremtidsudsigter</h2>
<p>Med fortsat adgang til diaspora-talenter og en voksende fodboldinfrastruktur har Kap Verde potentialet til at blive en endnu stærkere kraft i afrikansk fodbold. VM-kvalifikation forbliver det store mål for den lille ø-nation.</p>`,
    keyFacts: {
      fifaRanking: 55,
      nickname: "Tubarões Azuis (De Blå Hajer)",
      coach: "Bubista",
      confederation: "CAF",
      founded: 1982,
      stadium: "Estádio Nacional, Praia",
      bestResult: "AFCON-kvartfinale 2013",
      fifaCode: "CPV",
    },
    players: [
      { name: "Garry Rodrigues", position: "Angriber", club: "Olympiacos", caps: 50, goals: 10 },
      { name: "Ryan Mendes", position: "Angriber", club: "SC Braga", caps: 40, goals: 8 },
      { name: "Kenny Rocha Santos", position: "Midtbane", club: "Maccabi Haifa", caps: 35, goals: 3 },
      { name: "Roberto Lopes", position: "Forsvar", club: "Shamrock Rovers", caps: 20, goals: 2 },
      { name: "Vozinha", position: "Målmand", club: "Gil Vicente", caps: 35, goals: 0 },
      { name: "Júlio Tavares", position: "Angriber", club: "Dijon", caps: 55, goals: 15 },
      { name: "Nuno Borges", position: "Forsvar", club: "Moreirense", caps: 20, goals: 0 },
      { name: "Jamiro Monteiro", position: "Midtbane", club: "Metz", caps: 30, goals: 4 },
      { name: "Stopira", position: "Forsvar", club: "Legia Warszawa", caps: 40, goals: 2 },
      { name: "Lisandro Semedo", position: "Midtbane", club: "Famalicão", caps: 15, goals: 1 },
    ],
    matches: [
      { date: "2013-02-02", opponent: "Angola", score: "0-0", competition: "AFCON 2013 Kvartfinale", result: "D" },
      { date: "2013-01-21", opponent: "Sydafrika", score: "0-0", competition: "AFCON 2013 Gruppespil", result: "D" },
      { date: "2021-01-17", opponent: "Cameroun", score: "1-1", competition: "AFCON 2021 Gruppespil", result: "D" },
      { date: "2012-10-13", opponent: "Tunesien", score: "1-0", competition: "AFCON-kvalifikation 2013", result: "W" },
      { date: "2023-01-16", opponent: "Mozambique", score: "1-0", competition: "AFCON-kvalifikation 2024", result: "W" },
    ],
    achievements: [
      "AFCON-kvartfinale 2013",
      "AFCON-deltagelse 2013, 2015 og 2021",
      "Mindste nation nogensinde i AFCON-kvartfinale",
      "COSAFA Cup-deltager",
      "Historisk højeste FIFA-rangering: 27 (2014)",
    ],
    faq: [
      {
        question: "Hvem er landstræner for Kap Verdes fodboldlandshold?",
        answer: "Bubista (Pedro Leitão Brito) er landstræner for Kap Verde. Han har ledet holdet gennem flere kvalifikationskampagner.",
      },
      {
        question: "Har Kap Verde deltaget i VM?",
        answer: "Nej, Kap Verde har aldrig kvalificeret sig til VM. Holdet har dog deltaget i Africa Cup of Nations tre gange (2013, 2015, 2021) og nåede kvartfinalen i 2013.",
      },
      {
        question: "Hvorfor er Kap Verde så godt i fodbold for så lille et land?",
        answer: "Kap Verdes succes skyldes primært den store diaspora i Europa. Mange af holdets spillere er opvokset i Portugal, Frankrig eller Holland og spiller i professionelle europæiske ligaer.",
      },
      {
        question: "Hvad er Kap Verdes kaldenavn i fodbold?",
        answer: "Kap Verdes landshold er kendt som 'Tubarões Azuis' — De Blå Hajer. Kaldenavnet refererer til østatens placering i Atlanterhavet og holdets blå spilletrøjer.",
      },
      {
        question: "Hvor mange indbyggere har Kap Verde?",
        answer: "Kap Verde har kun omkring 600.000 indbyggere, hvilket gør det til en af de mindste nationer, der har kvalificeret sig til Africa Cup of Nations.",
      },
    ],
  },

  sydafrika: {
    tagline: "Bafana Bafana — VM-værtsnationen fra 2010",
    intro: `<p>Sydafrikas fodboldlandshold, "Bafana Bafana" (Drengene Drengene), har en unik plads i fodboldhistorien som værtsland for VM 2010 — den første VM-slutrunde på det afrikanske kontinent. Holdet vandt Africa Cup of Nations i 1996 på hjemmebane i en historisk turnering, der symboliserede landets genforening efter apartheid.</p>
<p>Sydafrikansk fodbold er dybt forankret i landets historie og kultur. Fodbold var en samlende kraft under kampen mod apartheid, og AFCON-triumfen i 1996 — to år efter det første frie valg — var et øjeblik af enorm national betydning.</p>
<p>Trods udfordringer i de seneste år forbliver Sydafrika en vigtig fodbolnation på det afrikanske kontinent med en passioneret fanbase og en voksende ungdomsstruktur.</p>`,
    body: `<h2>Sydafrikas fodboldhistorie</h2>
<p>Sydafrikas fodboldforbund (SAFA) blev grundlagt i 1991 efter genforeningen af de tidligere adskilte racemæssige fodboldforbund. Sydafrika blev genoptaget i FIFA i 1992 efter at have været udelukket siden 1976 på grund af apartheid.</p>

<h3>AFCON 1996 — genforening gennem fodbold</h3>
<p>I 1996 var Sydafrika vært for Africa Cup of Nations, og det var langt mere end en fodboldturnering. Under præsident Nelson Mandelas tilstedeværelse vandt Bafana Bafana turneringen med en 2-0-sejr over Tunesien i finalen. Sejren var et symbol på det nye Sydafrikas enhed og håb.</p>
<p>Mark Fish, Lucas Radebe, Doctor Khumalo og Phil Masinga var stjernerne på det hold, der bragte glæde til en hel nation. AFCON-titlen var Sydafrikas første store internationale trofæ og forbliver et af de mest betydningsfulde sportslige øjeblikke i landets historie.</p>

<h3>VM 2010 — Afrika på verdensscenen</h3>
<p>VM 2010 i Sydafrika var en skelsættende begivenhed for afrikansk fodbold. Sydafrika var det første afrikanske land til at være vært for VM, og turneringen blev en stor succes trods skepsis fra dele af det internationale fodboldfællesskab.</p>
<p>Vuvuzelaens summen, Siphiwe Tshabalalas sensationelle åbningsmål mod Mexico, og den farverige atmosfære gjorde VM 2010 til en uforglemmelig turnering. Sydafrika blev dog elimineret i gruppespillet og blev det første værtsland nogensinde til at ryge ud i gruppefasen.</p>

<h2>Spillestil og identitet</h2>
<p>Sydafrikansk fodbold er kendetegnet ved teknisk dygtighed, kreativitet og fysisk styrke. Den lokale spillestil, ofte kaldet "diski" eller "township football", er baseret på flair, driblinger og underholdende boldspil. Denne gadestil har produceret spillere med unik teknisk evne.</p>
<p>FNB Stadium (Soccer City) i Johannesburg, hvor VM 2010-finalen blev spillet, er Sydafrikas primære nationalstadion med plads til 94.000 tilskuere.</p>

<h2>Udfordringer og fremtid</h2>
<p>Sydafrikansk fodbold har stået over for udfordringer med korruption, dårlig ledelse og manglende kvalifikation til store slutrunder i de seneste år. Men med en ung og talentfuld generation og en passioneret fanbase er der håb om en renæssance for Bafana Bafana.</p>`,
    keyFacts: {
      fifaRanking: 59,
      nickname: "Bafana Bafana",
      coach: "Hugo Broos",
      confederation: "CAF",
      founded: 1991,
      stadium: "FNB Stadium, Johannesburg",
      bestResult: "AFCON-vindere 1996",
      fifaCode: "RSA",
    },
    players: [
      { name: "Percy Tau", position: "Angriber", club: "Al Ahly", caps: 50, goals: 15 },
      { name: "Ronwen Williams", position: "Målmand", club: "Mamelodi Sundowns", caps: 40, goals: 0 },
      { name: "Themba Zwane", position: "Midtbane", club: "Mamelodi Sundowns", caps: 35, goals: 8 },
      { name: "Bongokuhle Hlongwane", position: "Angriber", club: "Minnesota United", caps: 20, goals: 5 },
      { name: "Mothobi Mvala", position: "Midtbane", club: "Mamelodi Sundowns", caps: 25, goals: 1 },
      { name: "Grant Kekana", position: "Forsvar", club: "Mamelodi Sundowns", caps: 15, goals: 0 },
      { name: "Teboho Mokoena", position: "Midtbane", club: "Mamelodi Sundowns", caps: 25, goals: 5 },
      { name: "Evidence Makgopa", position: "Angriber", club: "Orlando Pirates", caps: 15, goals: 3 },
      { name: "Siyanda Xulu", position: "Forsvar", club: "Sekhukhune United", caps: 30, goals: 1 },
      { name: "Lyle Foster", position: "Angriber", club: "Burnley", caps: 15, goals: 3 },
    ],
    matches: [
      { date: "1996-02-03", opponent: "Tunesien", score: "2-0", competition: "AFCON 1996 Finale", result: "W" },
      { date: "2010-06-11", opponent: "Mexico", score: "1-1", competition: "VM 2010 Gruppespil", result: "D" },
      { date: "2010-06-22", opponent: "Frankrig", score: "2-1", competition: "VM 2010 Gruppespil", result: "W" },
      { date: "2002-06-02", opponent: "Paraguay", score: "2-2", competition: "VM 2002 Gruppespil", result: "D" },
      { date: "1998-06-12", opponent: "Frankrig", score: "0-3", competition: "VM 1998 Gruppespil", result: "L" },
      { date: "2024-02-07", opponent: "Nigeria", score: "1-1 (4-2 str.)", competition: "AFCON 2024 Semifinale", result: "W" },
    ],
    achievements: [
      "Africa Cup of Nations-vindere 1996",
      "VM 2010-værtsland",
      "AFCON-finalist 1998",
      "VM-deltagelse 1998, 2002 og 2010",
      "AFCON-semifinale 2024",
      "Confederations Cup-deltagelse 1997 og 2009",
    ],
    faq: [
      {
        question: "Hvem er landstræner for Sydafrikas fodboldlandshold?",
        answer: "Hugo Broos er landstræner for Sydafrika. Den belgiske træner overtog i 2021 og har fokuseret på at integrere unge spillere i truppen.",
      },
      {
        question: "Hvornår vandt Sydafrika AFCON?",
        answer: "Sydafrika vandt Africa Cup of Nations i 1996 på hjemmebane med en 2-0-sejr over Tunesien i finalen. Turneringen var den første store sportsbegivenhed i det post-apartheid Sydafrika.",
      },
      {
        question: "Hvad betyder Bafana Bafana?",
        answer: "'Bafana Bafana' betyder 'Drengene Drengene' på zulu og er det officielle kaldenavn for Sydafrikas fodboldlandshold. Navnet afspejler den folkelige karakter af sydafrikansk fodbold.",
      },
      {
        question: "Var Sydafrika vært for VM 2010?",
        answer: "Ja, Sydafrika var vært for VM 2010 — den første VM-slutrunde nogensinde på det afrikanske kontinent. Turneringen er berømt for vuvuzelaerne og den farverige atmosfære.",
      },
      {
        question: "Hvem er Sydafrikas bedste spiller nogensinde?",
        answer: "Lucas Radebe (Leeds United), Doctor Khumalo og Benni McCarthy betragtes som nogle af Sydafrikas bedste spillere. McCarthy er den mest scorende sydafrikaner i Superligaen (Premier League).",
      },
    ],
  },

  tyskland: {
    tagline: "Fire VM-titler og europæisk stormagt",
    intro: `<p>Tysklands fodboldlandshold, "Die Mannschaft", er en af de mest succesfulde nationer i fodboldhistorien med fire VM-titler og tre EM-titler. Tysk fodbold er synonymt med effektivitet, mentalstyrke og en evne til at præstere, når det virkelig gælder.</p>
<p>Fra Franz Beckenbauers elegante lederskab til Miroslav Kloses rekordmange VM-mål har Tyskland konsekvent produceret verdensklassespillere. VM-triumfen i 2014 i <a href="/brasilien">Brasilien</a> — herunder den historiske 7-1-sejr over værtsnationen i semifinalen — var den seneste demonstration af tysk fodboldkvalitet.</p>
<p>Trods skuffelser ved VM 2018 og 2022 forbliver Tyskland en af de mest frygtede og respekterede nationer i international fodbold med en dyb talentbase og en stærk fodboldkultur.</p>`,
    body: `<h2>Tysklands fodboldhistorie</h2>
<p>Det tyske fodboldforbund (DFB) blev grundlagt i 1900, og holdet spillede sin første officielle landskamp i 1908 mod <a href="/schweiz">Schweiz</a>. Tysk fodbold har siden gennemgået en dramatisk udvikling og er blevet en af de mest dominerende kræfter i verdens fodbold.</p>

<h3>Miraklet i Bern — VM 1954</h3>
<p>Vesttysklands sejr ved VM 1954 i <a href="/schweiz">Schweiz</a> er et af de mest berømte øjeblikke i fodboldhistorien. I finalen besejrede Vesttyskland det stærkt favoriserede ungarske hold med 3-2 i det, der blev kendt som "Das Wunder von Bern" (Miraklet i Bern). Sejren var mere end fodbold — den hjalp med at genopbygge tysk national identitet efter Anden Verdenskrig.</p>

<h3>Beckenbauer-æraen</h3>
<p>I 1970'erne dominerede Vesttyskland under Franz Beckenbauer, Gerd Müller, Sepp Maier og Paul Breitner. VM-titlen i 1974 på hjemmebane og EM-titlen i 1972 cementerede Vesttysklands position som en fodboldstormagt. Beckenbauer, "Der Kaiser", opfandt rollen som den fremadstormende libero og er stadig en af de mest indflydelsesrige spillere nogensinde.</p>

<h3>VM 1990 og genforeningen</h3>
<p>VM 1990 i <a href="/italien">Italien</a> var det sidste VM for Vesttyskland, der vandt titlen med en 1-0-sejr over <a href="/argentina">Argentina</a> i finalen. Andreas Brehmes straffespark afgjorde kampen. Kort efter faldt Berlinmuren, og det genforenede Tyskland overtog et af fodboldhistoriens stærkeste hold.</p>

<h3>VM 2014 — det fjerde stjerne</h3>
<p>VM 2014 i <a href="/brasilien">Brasilien</a> var Tysklands seneste triumf. Under Joachim Löws ledelse og med et hold der inkluderede Toni Kroos, Thomas Müller, Manuel Neuer og Mario Götze, spillede Tyskland den mest komplette fodbold i turneringen. Semifinalens 7-1-sejr over <a href="/brasilien">Brasilien</a> var en af de mest chokerende resultater i VM-historien. Götzes mål i finalen mod <a href="/argentina">Argentina</a> sikrede den fjerde VM-titel.</p>

<h2>Spillestil og identitet</h2>
<p>Tysk fodbold er traditionelt kendetegnet ved taktisk disciplin, fysisk udholdenhed og mental styrke. Begrebet "Turniermannschaft" (turneringshold) beskriver Tysklands evne til at hæve niveauet ved store slutrunder. I den moderne æra har Tyskland udviklet en mere teknisk og boldbesiddende spillestil, inspireret af <a href="/spanien">Spaniens</a> succes.</p>
<p>Bundesligaen er en af verdens bedste ligaer og producerer konsekvent talenter til landsholdet. Det tyske ungdomsudviklingssystem, der blev reformeret efter EM 2000, er et af de mest effektive i verden.</p>

<h2>EM 2024 på hjemmebane</h2>
<p>Tyskland var vært for EM 2024, og trods en tidlig exit i kvartfinalen mod <a href="/spanien">Spanien</a> var turneringen en succes for tysk fodbold. Under Julian Nagelsmanns ledelse viste holdet lovende tegn med spillere som Jamal Musiala og Florian Wirtz.</p>`,
    keyFacts: {
      fifaRanking: 11,
      nickname: "Die Mannschaft",
      coach: "Julian Nagelsmann",
      confederation: "UEFA",
      founded: 1900,
      stadium: "Verschiedene (ingen fast hjemmebane)",
      bestResult: "Verdensmestre 1954, 1974, 1990, 2014",
      fifaCode: "GER",
    },
    players: [
      { name: "Jamal Musiala", position: "Midtbane", club: "Bayern München", caps: 35, goals: 6 },
      { name: "Florian Wirtz", position: "Midtbane", club: "Bayer Leverkusen", caps: 25, goals: 4 },
      { name: "Kai Havertz", position: "Angriber", club: "Arsenal", caps: 50, goals: 18 },
      { name: "Antonio Rüdiger", position: "Forsvar", club: "Real Madrid", caps: 75, goals: 3 },
      { name: "Joshua Kimmich", position: "Midtbane", club: "Bayern München", caps: 90, goals: 5 },
      { name: "İlkay Gündoğan", position: "Midtbane", club: "Barcelona", caps: 75, goals: 20 },
      { name: "Manuel Neuer", position: "Målmand", club: "Bayern München", caps: 120, goals: 0 },
      { name: "Leroy Sané", position: "Angriber", club: "Bayern München", caps: 55, goals: 12 },
      { name: "Niclas Füllkrug", position: "Angriber", club: "West Ham", caps: 20, goals: 12 },
      { name: "Jonathan Tah", position: "Forsvar", club: "Bayer Leverkusen", caps: 25, goals: 1 },
      { name: "Robert Andrich", position: "Midtbane", club: "Bayer Leverkusen", caps: 15, goals: 2 },
    ],
    matches: [
      { date: "2014-07-13", opponent: "Argentina", score: "1-0", competition: "VM 2014 Finale", result: "W" },
      { date: "2014-07-08", opponent: "Brasilien", score: "7-1", competition: "VM 2014 Semifinale", result: "W" },
      { date: "1990-07-08", opponent: "Argentina", score: "1-0", competition: "VM 1990 Finale", result: "W" },
      { date: "1974-07-07", opponent: "Holland", score: "2-1", competition: "VM 1974 Finale", result: "W" },
      { date: "1954-07-04", opponent: "Ungarn", score: "3-2", competition: "VM 1954 Finale", result: "W" },
      { date: "2024-07-05", opponent: "Spanien", score: "1-2", competition: "EM 2024 Kvartfinale", result: "L" },
      { date: "2018-06-27", opponent: "Sydkorea", score: "0-2", competition: "VM 2018 Gruppespil", result: "L" },
    ],
    achievements: [
      "Verdensmestre 1954, 1974, 1990 og 2014",
      "Europamestre 1972, 1980 og 1996",
      "VM-finalist 1966, 1982, 1986 og 2002",
      "EM-finalist 1976, 1992, 2008",
      "Confederations Cup-vindere 2017",
      "Historisk 7-1-sejr over Brasilien ved VM 2014",
    ],
    faq: [
      {
        question: "Hvor mange VM-titler har Tyskland vundet?",
        answer: "Tyskland har vundet VM fire gange: 1954, 1974, 1990 og 2014. Kun Brasilien (5) har vundet flere. Tyskland har desuden tabt fire VM-finaler.",
      },
      {
        question: "Hvem er landstræner for Tysklands fodboldlandshold?",
        answer: "Julian Nagelsmann er landstræner for Tyskland. Han overtog i 2023 og var ansvarlig for holdet ved EM 2024 på hjemmebane.",
      },
      {
        question: "Hvem er Tysklands bedste spiller nogensinde?",
        answer: "Franz Beckenbauer ('Der Kaiser') betragtes ofte som Tysklands bedste spiller. Andre kandidater inkluderer Gerd Müller, Lothar Matthäus og i den moderne æra Manuel Neuer og Toni Kroos.",
      },
      {
        question: "Hvad skete der da Tyskland slog Brasilien 7-1?",
        answer: "I VM 2014-semifinalen i Belo Horizonte slog Tyskland Brasilien 7-1 — en af de mest chokerende resultater i VM-historien. Tyskland scorede fem mål i de første 29 minutter af kampen.",
      },
      {
        question: "Hvad er Die Mannschaft?",
        answer: "'Die Mannschaft' (Holdet) er det uofficielle kaldenavn for det tyske landshold. Navnet symboliserer den tyske holdånd og kollektive styrke, der har kendetegnet tysk fodbold i generationer.",
      },
    ],
  },

  sverige: {
    tagline: "Blågult — de skandinaviske rivaler",
    intro: `<p>Sveriges fodboldlandshold, "Blågult", er en af Skandinaviens mest succesfulde fodboldnationer med en VM-sølvmedalje fra 1958 og flere imponerende slutrundepræstationer. Sverige har produceret verdenskendte spillere som Zlatan Ibrahimović, Henrik Larsson og Gunnar Nordahl.</p>
<p>Svensk fodbold er præget af en stærk skandinavisk rivalisering med <a href="/danmark">Danmark</a> og <a href="/norge">Norge</a>. Kampene mod de nordiske naboer er altid højdepunkter i den svenske fodboldkalender og tiltrækker enorm opmærksomhed.</p>
<p>Trods Zlatans pensionering fra landsholdet har Sverige fortsat med at være konkurrencedygtig i europæisk fodbold med nye talenter som Alexander Isak og Dejan Kulusevski.</p>`,
    body: `<h2>Sveriges fodboldhistorie</h2>
<p>Svenska Fotbollförbundet blev grundlagt i 1904, og holdet spillede sin første officielle landskamp i 1908 mod <a href="/norge">Norge</a>. Sverige har en lang og stolt fodboldtradition og har deltaget i talrige store slutrunder.</p>

<h3>VM 1958 på hjemmebane</h3>
<p>Sveriges største øjeblik kom ved VM 1958 på hjemmebane, hvor holdet nåede finalen. Trods et 2-5-nederlag mod <a href="/brasilien">Brasilien</a> — med den 17-årige Pelé i hovedrollen — var turneringen en triumf for svensk fodbold. Nils Liedholm og Gunnar Gren var holdets store stjerner.</p>

<h3>Den gyldne æra i 1990'erne</h3>
<p>Under Tommy Svensson oplevede Sverige en fornyelse i 1990'erne. Ved VM 1994 i USA nåede holdet en imponerende tredjeplads med spillere som Tomas Brolin, Henrik Larsson og Martin Dahlin. Bronzekampen mod Bulgarien — en 4-0-sejr — er et af de mest ikoniske øjeblikke i svensk fodboldhistorie.</p>

<h3>Zlatan-æraen</h3>
<p>Zlatan Ibrahimović dominerede svensk fodbold i næsten to årtier. Den kontroversielle, men geniale angriber scorede 62 mål i 122 landskampe og var holdets ubestridte stjerne. Hans berømte cykelsparkmål mod <a href="/england">England</a> i 2012 — et 30 meter langt saksespark — betragtes som et af de flotteste mål nogensinde.</p>
<p>Ved VM 2018 i Rusland overraskede Sverige positivt uden Zlatan og nåede kvartfinalen under Janne Anderssons ledelse. Holdets disciplinerede og defensivt stærke spillestil viste, at Sverige kunne klare sig uden sin største stjerne.</p>

<h2>Spillestil og identitet</h2>
<p>Svensk fodbold har traditionelt været kendetegnet ved fysisk styrke, organisation og en direkte spillestil. Allsvenskan, den svenske topliga, producerer regelmæssigt talenter, der rykker til større europæiske ligaer.</p>
<p>Friends Arena i Stockholm er Sveriges moderne nationalstadion med plads til 50.000 tilskuere. Den erstattede det legendariske Råsunda Stadion som hjemmebane i 2012.</p>

<h2>Den nordiske rivalisering</h2>
<p>Kampe mod <a href="/danmark">Danmark</a> og <a href="/norge">Norge</a> er altid de mest ventede i svensk fodbold. Rivaliseringen med Danmark er særlig intens og har produceret mange dramatiske kampe gennem årene. EM 2004-gruppekampen, hvor Sverige og Danmark spillede 2-2 og dermed sendte <a href="/italien">Italien</a> ud, er stadig genstand for debat.</p>`,
    keyFacts: {
      fifaRanking: 25,
      nickname: "Blågult",
      coach: "Jon Dahl Tomasson",
      confederation: "UEFA",
      founded: 1904,
      stadium: "Friends Arena, Stockholm",
      bestResult: "VM-sølv 1958",
      fifaCode: "SWE",
    },
    players: [
      { name: "Alexander Isak", position: "Angriber", club: "Newcastle United", caps: 45, goals: 14 },
      { name: "Dejan Kulusevski", position: "Angriber", club: "Tottenham Hotspur", caps: 40, goals: 7 },
      { name: "Viktor Gyökeres", position: "Angriber", club: "Sporting CP", caps: 20, goals: 12 },
      { name: "Emil Forsberg", position: "Midtbane", club: "New York Red Bulls", caps: 85, goals: 22 },
      { name: "Robin Olsen", position: "Målmand", club: "Aston Villa", caps: 60, goals: 0 },
      { name: "Victor Lindelöf", position: "Forsvar", club: "Manchester United", caps: 65, goals: 2 },
      { name: "Ludwig Augustinsson", position: "Forsvar", club: "Anderlecht", caps: 45, goals: 1 },
      { name: "Jens Cajuste", position: "Midtbane", club: "Napoli", caps: 15, goals: 0 },
      { name: "Mattias Svanberg", position: "Midtbane", club: "Wolfsburg", caps: 20, goals: 2 },
      { name: "Anthony Elanga", position: "Angriber", club: "Nottingham Forest", caps: 15, goals: 3 },
    ],
    matches: [
      { date: "1958-06-29", opponent: "Brasilien", score: "2-5", competition: "VM 1958 Finale", result: "L" },
      { date: "1994-07-16", opponent: "Bulgarien", score: "4-0", competition: "VM 1994 Bronzekamp", result: "W" },
      { date: "2018-07-07", opponent: "England", score: "0-2", competition: "VM 2018 Kvartfinale", result: "L" },
      { date: "2012-11-14", opponent: "England", score: "4-2", competition: "Venskabskamp", result: "W" },
      { date: "2004-06-22", opponent: "Danmark", score: "2-2", competition: "EM 2004 Gruppespil", result: "D" },
      { date: "2018-06-18", opponent: "Sydkorea", score: "1-0", competition: "VM 2018 Gruppespil", result: "W" },
    ],
    achievements: [
      "VM-sølv 1958",
      "VM-tredjeplads 1950 og 1994",
      "OL-guld 1948",
      "OL-bronze 1924 og 1952",
      "VM-kvartfinale 2018",
      "EM-semifinale 1992",
    ],
    faq: [
      {
        question: "Hvem er landstræner for Sveriges fodboldlandshold?",
        answer: "Jon Dahl Tomasson er landstræner for Sverige. Den danske eks-angriber overtog posten i 2023.",
      },
      {
        question: "Har Sverige vundet VM?",
        answer: "Nej, Sverige har aldrig vundet VM. Holdet nåede finalen i 1958 på hjemmebane, men tabte 2-5 til Brasilien. Sverige har også opnået tredjepladser i 1950 og 1994.",
      },
      {
        question: "Hvem er Sveriges bedste spiller nogensinde?",
        answer: "Zlatan Ibrahimović betragtes af mange som Sveriges bedste spiller med 62 mål i 122 landskampe. Gunnar Nordahl, Henrik Larsson og Nils Liedholm er andre svenske legender.",
      },
      {
        question: "Hvad er rivaliseringen mellem Sverige og Danmark?",
        answer: "Sverige og Danmark har en intens skandinavisk rivalisering i fodbold. Kampene er altid eftertragtede og fyldt med national stolthed. Den berømte 2-2-kamp ved EM 2004 er stadig genstand for diskussion.",
      },
      {
        question: "Har Sverige kvalificeret sig til EM 2024?",
        answer: "Nej, Sverige kvalificerede sig ikke til EM 2024 i Tyskland. Holdet missede slutrunden efter en skuffende kvalifikation, hvilket var et tilbageslag for svensk fodbold.",
      },
    ],
  },

  iran: {
    tagline: "Asiens stolte fodboldnation med VM-tradition",
    intro: `<p>Irans fodboldlandshold, "Team Melli" (Nationalholdet), er en af Asiens mest succesfulde og traditionsrige fodboldnationer. Med tre VM-deltagelser i det 21. århundrede og tre Asian Cup-titler har Iran etableret sig som den dominerende kraft i vestasiatisk fodbold.</p>
<p>Iransk fodbold har en passioneret fanbase, der gør Azadi-stadionet i Teheran — et af verdens største stadioner — til en intimiderende destination for besøgende hold. Holdet er kendt for sin defensive soliditet og evne til at konkurrere med langt højere rangerede hold.</p>
<p>Trods politiske udfordringer og internationale sanktioner har Iran formået at forblive en konkurrencedygtig kraft i asiatisk fodbold og har konsekvent kvalificeret sig til VM.</p>`,
    body: `<h2>Irans fodboldhistorie</h2>
<p>Irans fodboldforbund blev grundlagt i 1920, og holdet spillede sin første officielle landskamp i 1941. Iran var en af de tidlige magtfaktorer i asiatisk fodbold og vandt Asian Cup tre gange i træk fra 1968 til 1976.</p>

<h3>VM 1978 — den første deltagelse</h3>
<p>Iran kvalificerede sig til VM for første gang i 1978 i <a href="/argentina">Argentina</a>. Selvom holdet blev elimineret i gruppespillet, markerede deltagelsen et stort øjeblik for iransk fodbold. Den politiske revolution i 1979 og den efterfølgende Iran-Irak-krig satte dog en stopper for Irans fodboldudvikling i næsten to årtier.</p>

<h3>VM 1998 og geopolitisk drama</h3>
<p>VM 1998 i <a href="/frankrig">Frankrig</a> var Irans comeback på verdensscenen. Kampen mod USA — "The Most Politically Charged Game in Football History" — var omgivet af enorm opmærksomhed på grund af de diplomatiske spændinger mellem de to lande. Iran vandt 2-1 i en historisk kamp, der blev set af millioner verden over.</p>

<h3>Den moderne æra</h3>
<p>Under Carlos Queiroz (2011-2019) gennemgik Iran en taktisk revolution. Den portugisiske træner implementerede en disciplineret, defensiv spillestil, der gjorde Iran ekstremt svær at slå. Iran kvalificerede sig til VM 2014 og 2018, og ved VM 2018 i Rusland var holdet tæt på at slå <a href="/portugal">Portugal</a> og avancere fra en gruppe med <a href="/spanien">Spanien</a> og Portugal.</p>
<p>Ved VM 2022 i Qatar var Irans deltagelse omgivet af politisk kontrovers relateret til protesterne i Iran. Holdet tabte 2-6 til <a href="/england">England</a> i den første kamp, men besejrede Wales og var tæt på at avancere fra gruppen.</p>

<h2>Spillestil og identitet</h2>
<p>Iransk fodbold er kendetegnet ved taktisk disciplin, defensiv organisation og fysisk styrke. Holdet er særligt stærkt i hjemmekampe, hvor Azadi-stadionets 78.000 tilskuere skaber en overvældende atmosfære.</p>
<p>Den iranske liga har produceret talentfulde spillere, og flere iranere har gjort karriere i europæiske klubber. Mehdi Taremi, Sardar Azmoun og Alireza Jahanbakhsh er eksempler på iranere, der har haft succes i europæisk fodbold.</p>`,
    keyFacts: {
      fifaRanking: 20,
      nickname: "Team Melli",
      coach: "Amir Ghalenoei",
      confederation: "AFC",
      founded: 1920,
      stadium: "Azadi-stadionet, Teheran",
      bestResult: "Asian Cup-vindere 1968, 1972, 1976",
      fifaCode: "IRN",
    },
    players: [
      { name: "Mehdi Taremi", position: "Angriber", club: "Inter", caps: 80, goals: 42 },
      { name: "Sardar Azmoun", position: "Angriber", club: "Roma", caps: 75, goals: 42 },
      { name: "Alireza Jahanbakhsh", position: "Angriber", club: "Feyenoord", caps: 70, goals: 14 },
      { name: "Alireza Beiranvand", position: "Målmand", club: "Persepolis", caps: 45, goals: 0 },
      { name: "Ehsan Hajsafi", position: "Forsvar", club: "AEK Athen", caps: 130, goals: 6 },
      { name: "Saman Ghoddos", position: "Midtbane", club: "Brentford", caps: 45, goals: 5 },
      { name: "Saeid Ezatolahi", position: "Midtbane", club: "Vejle Boldklub", caps: 40, goals: 1 },
      { name: "Milad Mohammadi", position: "Forsvar", club: "AEK Athen", caps: 55, goals: 2 },
      { name: "Ali Gholizadeh", position: "Midtbane", club: "Charleroi", caps: 35, goals: 5 },
      { name: "Omid Noorafkan", position: "Forsvar", club: "Sepahan", caps: 20, goals: 0 },
    ],
    matches: [
      { date: "1998-06-21", opponent: "USA", score: "2-1", competition: "VM 1998 Gruppespil", result: "W" },
      { date: "2018-06-25", opponent: "Portugal", score: "1-1", competition: "VM 2018 Gruppespil", result: "D" },
      { date: "2022-11-21", opponent: "England", score: "2-6", competition: "VM 2022 Gruppespil", result: "L" },
      { date: "2022-11-25", opponent: "Wales", score: "2-0", competition: "VM 2022 Gruppespil", result: "W" },
      { date: "2014-06-21", opponent: "Argentina", score: "0-1", competition: "VM 2014 Gruppespil", result: "L" },
      { date: "2018-06-15", opponent: "Marokko", score: "1-0", competition: "VM 2018 Gruppespil", result: "W" },
    ],
    achievements: [
      "Asian Cup-vindere 1968, 1972 og 1976",
      "VM-deltagelse 1978, 1998, 2006, 2014, 2018, 2022",
      "Historisk sejr over USA ved VM 1998",
      "Asiens mest succesfulde hold i VM-kvalifikation",
      "WAFF Championship-vindere flere gange",
    ],
    faq: [
      {
        question: "Hvem er landstræner for Irans fodboldlandshold?",
        answer: "Amir Ghalenoei er landstræner for Iran. Han er en erfaren iransk træner, der har ledet holdet i flere perioder.",
      },
      {
        question: "Hvor mange gange har Iran deltaget i VM?",
        answer: "Iran har deltaget i VM seks gange: 1978, 1998, 2006, 2014, 2018 og 2022. Holdet har aldrig avanceret fra gruppespillet.",
      },
      {
        question: "Hvad er Azadi-stadionet?",
        answer: "Azadi-stadionet i Teheran er Irans nationalstadion med plads til cirka 78.000 tilskuere. Det er et af de største stadioner i verden og kendt for sin intimiderende atmosfære.",
      },
      {
        question: "Hvem er Irans bedste spiller nogensinde?",
        answer: "Ali Daei er Irans mest berømte spiller. Han scorede 109 mål i 148 landskampe og holdt verdensrekorden for flest landskampsmål indtil Cristiano Ronaldo slog den i 2021.",
      },
      {
        question: "Har Iran vundet Asian Cup?",
        answer: "Ja, Iran har vundet Asian Cup tre gange: i 1968, 1972 og 1976. Holdet har ikke vundet turneringen siden, men har nået semifinalerne flere gange.",
      },
    ],
  },

  tyrkiet: {
    tagline: "Halvmånens krigere med uforudsigelig klasse",
    intro: `<p>Tyrkiets fodboldlandshold, "Ay-Yıldızlılar" (Halvmåne-Stjernerne), har leveret nogle af de mest overraskende og underholdende øjeblikke i international fodbold. VM-tredjepladsen i 2002 og EM-semifinalen i 2008 viste, at Tyrkiet kan konkurrere med de allerbedste, når holdet rammer formen.</p>
<p>Tyrkisk fodbold er kendetegnet ved intens passion, dramatik og en evne til at producere uventede resultater. Den tyrkiske Süper Lig, med store klubber som Galatasaray, Fenerbahçe og Beşiktaş, skaber en unik fodboldkultur, der næres af millioner af lidenskabelige fans.</p>
<p>Med en ung og talentfuld generation anført af spillere som Arda Güler og Hakan Çalhanoğlu har Tyrkiet potentialet til at genoplive de glorværdige tider fra 2000'ernes begyndelse.</p>`,
    body: `<h2>Tyrkiets fodboldhistorie</h2>
<p>Det tyrkiske fodboldforbund (TFF) blev grundlagt i 1923, og holdet spillede sin første officielle landskamp i 1923 mod Rumænien. I de tidlige årtier var Tyrkiet en middelmådig fodboldnation, men fodboldkulturen voksede eksponentielt med den tyrkiske ligas professionalisering.</p>

<h3>VM 2002 — det store eventyr</h3>
<p>Tyrkiets mest ikoniske bedrift kom ved VM 2002 i Japan/Sydkorea. Under Şenol Güneş' ledelse og med spillere som Hakan Şükür, İlhan Mansız og Rüştü Reçber spillede Tyrkiet sensationelt og nåede semifinalen. Holdet tabte til <a href="/brasilien">Brasilien</a>, men vandt bronzekampen mod Sydkorea. Hakan Şükür scorede det hurtigste mål i VM-historien — efter blot 11 sekunder.</p>
<p>VM 2002 var et vendepunkt for tyrkisk fodbold og inspirerede en hel generation af tyrkiske spillere.</p>

<h3>EM 2008 — comeback-kongerne</h3>
<p>Ved EM 2008 i <a href="/schweiz">Østrig/Schweiz</a> leverede Tyrkiet endnu en magisk turnering. Holdet blev kendt som "comeback-kongerne" efter at have vendt tre kampe i træk. Sejren over Tjekkiet efter at have været bagud 0-2 og den dramatiske kvartfinalesejr over Kroatien i straffespark var højdepunkter. Semifinalen mod <a href="/tyskland">Tyskland</a> endte med et 2-3-nederlag i en episk kamp.</p>

<h3>EM 2024 — den nye generation</h3>
<p>Ved EM 2024 i <a href="/tyskland">Tyskland</a> viste Tyrkiet tegn på fornyelse med en ung trup. Holdet nåede kvartfinalen, men tabte til <a href="/holland">Holland</a>. Den 19-årige Arda Güler fra Real Madrid imponerede og gav håb om en lys fremtid.</p>

<h2>Spillestil og identitet</h2>
<p>Tyrkisk fodbold er kendetegnet ved passion, intensitet og uforudsigelighed. Hjemmekampe i Istanbul — særligt på Galatasarays, Fenerbahçes eller Beşiktaş' stadioner — byder på en af de mest intense atmosfærer i verden. Den tyrkiske fankultur er berømt (og berygtet) for sin hede stemning.</p>
<p>Taktisk har Tyrkiet traditionelt spillet en fysisk og direkte stil, men den nye generation bringer mere teknisk kvalitet og boldbesiddelse til holdet.</p>`,
    keyFacts: {
      fifaRanking: 26,
      nickname: "Ay-Yıldızlılar (Halvmåne-Stjernerne)",
      coach: "Vincenzo Montella",
      confederation: "UEFA",
      founded: 1923,
      stadium: "Atatürk Olimpiyat Stadyumu, Istanbul",
      bestResult: "VM-tredjeplads 2002",
      fifaCode: "TUR",
    },
    players: [
      { name: "Arda Güler", position: "Midtbane", club: "Real Madrid", caps: 15, goals: 4 },
      { name: "Hakan Çalhanoğlu", position: "Midtbane", club: "Inter", caps: 85, goals: 18 },
      { name: "Kenan Yıldız", position: "Angriber", club: "Juventus", caps: 10, goals: 2 },
      { name: "Çağlar Söyüncü", position: "Forsvar", club: "Fenerbahçe", caps: 55, goals: 1 },
      { name: "Ferdi Kadıoğlu", position: "Forsvar", club: "Brighton", caps: 20, goals: 1 },
      { name: "Altay Bayındır", position: "Målmand", club: "Manchester United", caps: 10, goals: 0 },
      { name: "Barış Alper Yılmaz", position: "Angriber", club: "Galatasaray", caps: 15, goals: 3 },
      { name: "Abdülkerim Bardakcı", position: "Forsvar", club: "Galatasaray", caps: 15, goals: 1 },
      { name: "İsmail Yüksek", position: "Midtbane", club: "Fenerbahçe", caps: 10, goals: 0 },
      { name: "Cenk Tosun", position: "Angriber", club: "Beşiktaş", caps: 55, goals: 20 },
    ],
    matches: [
      { date: "2002-06-29", opponent: "Sydkorea", score: "3-2", competition: "VM 2002 Bronzekamp", result: "W" },
      { date: "2002-06-26", opponent: "Brasilien", score: "0-1", competition: "VM 2002 Semifinale", result: "L" },
      { date: "2008-06-25", opponent: "Kroatien", score: "1-1 (3-1 str.)", competition: "EM 2008 Kvartfinale", result: "W" },
      { date: "2008-06-25", opponent: "Tyskland", score: "2-3", competition: "EM 2008 Semifinale", result: "L" },
      { date: "2024-07-06", opponent: "Holland", score: "1-2", competition: "EM 2024 Kvartfinale", result: "L" },
      { date: "2024-07-02", opponent: "Østrig", score: "2-1", competition: "EM 2024 Ottendedelsfinale", result: "W" },
    ],
    achievements: [
      "VM-tredjeplads 2002",
      "EM-semifinale 2008",
      "EM-kvartfinale 2024",
      "Hurtigste VM-mål (Hakan Şükür, 11 sekunder, 2002)",
      "Tre comeback-sejre ved EM 2008",
      "VM-deltagelse 1954 og 2002",
    ],
    faq: [
      {
        question: "Hvem er landstræner for Tyrkiets fodboldlandshold?",
        answer: "Vincenzo Montella er landstræner for Tyrkiet. Den italienske træner overtog posten i 2023 og førte holdet til EM 2024-kvartfinalen.",
      },
      {
        question: "Hvornår nåede Tyrkiet semifinalen ved VM?",
        answer: "Tyrkiet nåede semifinalen ved VM 2002 i Japan/Sydkorea. Holdet tabte til Brasilien, men vandt bronzekampen mod Sydkorea 3-2 med det hurtigste mål i VM-historien.",
      },
      {
        question: "Hvad var Tyrkiets bedste EM-resultat?",
        answer: "Tyrkiets bedste EM-resultat er semifinalen i 2008 i Østrig/Schweiz. Holdet blev kendt som 'comeback-kongerne' og tabte semifinalen 2-3 til Tyskland i en dramatisk kamp.",
      },
      {
        question: "Hvem er Arda Güler?",
        answer: "Arda Güler er en ung tyrkisk midtbanespiller, der spiller for Real Madrid. Han betragtes som et af de største talenter i tyrkisk fodboldhistorie og imponerede ved EM 2024.",
      },
      {
        question: "Hvem scorede det hurtigste mål i VM-historien?",
        answer: "Hakan Şükür scorede det hurtigste mål i VM-historien — efter blot 11 sekunder — i bronzekampen mod Sydkorea ved VM 2002.",
      },
    ],
  },

  england: {
    tagline: "Fodboldens moderland — verdensmestre 1966",
    intro: `<p>Englands fodboldlandshold, "The Three Lions", er fodboldens moderland. Fodbold blev opfundet i England i 1863, og det engelske landshold har siden været en central figur i sportens historie. VM-titlen fra 1966 forbliver den største bedrift, men holdet har i de seneste år nærmet sig nye triumfer.</p>
<p>Med Premier League som verdens mest sete fodboldliga har England adgang til en enorm talentbase. Spillere som Harry Kane, Jude Bellingham og Bukayo Saka repræsenterer den nye generation af engelske stjerner, der har bragt holdet til to EM-finaler i træk.</p>
<p>Trods den lange tørke siden 1966 er optimismen stor for engelsk fodbold, og holdet regnes som en fast favorit ved alle store slutrunder.</p>`,
    body: `<h2>Englands fodboldhistorie</h2>
<p>Det engelske fodboldforbund (FA) blev grundlagt i 1863 og er det ældste fodboldforbund i verden. England spillede den første officielle landskamp mod <a href="/skotland">Skotland</a> i 1872 og har været en central kraft i international fodbold lige siden.</p>

<h3>VM 1966 — hjemmesejren</h3>
<p>Englands største øjeblik kom ved VM 1966 på hjemmebane. Under Alf Ramseys ledelse og med Geoff Hurst, Bobby Moore og Bobby Charlton som stjerner, vandt England VM med en 4-2-sejr over <a href="/tyskland">Vesttyskland</a> i finalen på Wembley. Hursts hat-trick i finalen — herunder det omstridte tredje mål, hvor bolden ramte overliggeren og muligvis ikke krydsede mållinjen — er et af de mest diskuterede øjeblikke i fodboldhistorien.</p>

<h3>Årtier med skuffelser</h3>
<p>Efter 1966 fulgte årtier med tæt-på-oplevelser og skuffelser. VM-semifinalen i 1990, hvor England tabte i straffespark til <a href="/tyskland">Vesttyskland</a>, og EM 1996 på hjemmebane, hvor holdet igen tabte i semifinalen til <a href="/tyskland">Tyskland</a>, er smertefulde minder for engelske fans. "Football's Coming Home" — sangen fra EM 1996 — er blevet et ikonisk udtryk for engelsk fodboldlængsel.</p>

<h3>Den moderne renæssance under Southgate</h3>
<p>Under Gareth Southgate (2016-2024) gennemgik England en bemærkelsesværdig forvandling. Southgate skabte en holdkultur baseret på respekt, inklusion og mental styrke. VM 2018-semifinalen, EM 2021-finalen (tabt i straffespark til <a href="/italien">Italien</a>) og EM 2024-finalen (tabt 1-2 til <a href="/spanien">Spanien</a>) viste, at England var tilbage blandt de allerbedste.</p>
<p>To EM-finaler i træk var en historisk bedrift, og selvom ingen af dem resulterede i en titel, var de et bevis på Englands kvalitet og konsistens.</p>

<h2>Spillestil og identitet</h2>
<p>Engelsk fodbold har gennemgået en markant transformation. Fra den traditionelle "kick and rush"-stil har England udviklet sig til et mere teknisk og taktisk sofistikeret hold. Premier League — verdens mest konkurrencedygtige liga — producerer spillere, der er vant til at spille på det højeste niveau uge efter uge.</p>
<p>Wembley Stadium, genåbnet i 2007, er Englands hjemmebane med plads til 90.000 tilskuere. Det er et af de mest ikoniske stadioner i verden og scenen for talrige historiske øjeblikke.</p>`,
    keyFacts: {
      fifaRanking: 4,
      nickname: "The Three Lions",
      coach: "Thomas Tuchel",
      confederation: "UEFA",
      founded: 1863,
      stadium: "Wembley Stadium, London",
      bestResult: "Verdensmestre 1966",
      fifaCode: "ENG",
    },
    players: [
      { name: "Harry Kane", position: "Angriber", club: "Bayern München", caps: 100, goals: 68 },
      { name: "Jude Bellingham", position: "Midtbane", club: "Real Madrid", caps: 40, goals: 8 },
      { name: "Bukayo Saka", position: "Angriber", club: "Arsenal", caps: 40, goals: 12 },
      { name: "Phil Foden", position: "Midtbane", club: "Manchester City", caps: 40, goals: 5 },
      { name: "Declan Rice", position: "Midtbane", club: "Arsenal", caps: 55, goals: 4 },
      { name: "John Stones", position: "Forsvar", club: "Manchester City", caps: 75, goals: 3 },
      { name: "Kyle Walker", position: "Forsvar", club: "Manchester City", caps: 80, goals: 1 },
      { name: "Jordan Pickford", position: "Målmand", club: "Everton", caps: 60, goals: 0 },
      { name: "Cole Palmer", position: "Angriber", club: "Chelsea", caps: 10, goals: 3 },
      { name: "Trent Alexander-Arnold", position: "Forsvar", club: "Liverpool", caps: 25, goals: 2 },
      { name: "Kobbie Mainoo", position: "Midtbane", club: "Manchester United", caps: 10, goals: 1 },
    ],
    matches: [
      { date: "1966-07-30", opponent: "Vesttyskland", score: "4-2", competition: "VM 1966 Finale", result: "W" },
      { date: "2021-07-11", opponent: "Italien", score: "1-1 (2-3 str.)", competition: "EM 2021 Finale", result: "L" },
      { date: "2024-07-14", opponent: "Spanien", score: "1-2", competition: "EM 2024 Finale", result: "L" },
      { date: "2018-07-11", opponent: "Kroatien", score: "1-2", competition: "VM 2018 Semifinale", result: "L" },
      { date: "1990-07-04", opponent: "Vesttyskland", score: "1-1 (3-4 str.)", competition: "VM 1990 Semifinale", result: "L" },
      { date: "2022-12-10", opponent: "Frankrig", score: "1-2", competition: "VM 2022 Kvartfinale", result: "L" },
      { date: "2024-07-10", opponent: "Holland", score: "2-1", competition: "EM 2024 Semifinale", result: "W" },
    ],
    achievements: [
      "Verdensmestre 1966",
      "EM-finalist 2021 og 2024",
      "VM-semifinale 1990 og 2018",
      "EM-semifinale 1996",
      "Fodboldens opfindere (1863)",
      "Premier League — verdens mest sete fodboldliga",
    ],
    faq: [
      {
        question: "Hvem er landstræner for Englands fodboldlandshold?",
        answer: "Thomas Tuchel er landstræner for England. Den tyske træner overtog posten i 2024 efter Gareth Southgate, der ledede holdet fra 2016 til 2024.",
      },
      {
        question: "Hvornår vandt England VM?",
        answer: "England vandt VM i 1966 på hjemmebane med en 4-2-sejr over Vesttyskland i finalen på Wembley. Geoff Hurst scorede et hat-trick, herunder det berømte omstridte mål.",
      },
      {
        question: "Hvem har scoret flest mål for England?",
        answer: "Harry Kane er Englands topscorer med over 65 mål i landskampe. Han overgik Wayne Rooneys rekord på 53 mål i 2023.",
      },
      {
        question: "Hvorfor har England ikke vundet noget siden 1966?",
        answer: "Trods at have en af verdens stærkeste ligaer og talentbaser har England kæmpet med at omsætte dette til slutrundesucces. Holdet har nået to EM-finaler (2021 og 2024), men tabte begge. Presset, forventningerne og historiske straffesparkstraumer har spillet en rolle.",
      },
      {
        question: "Hvad er 'Football's Coming Home'?",
        answer: "'Football's Coming Home' er en sang af Baddiel, Skinner & Lightning Seeds fra EM 1996. Den er blevet Englands uofficielle landsholdssang og symboliserer fodboldlandets drøm om at vinde en stor turnering igen.",
      },
    ],
  },

  irak: {
    tagline: "Asian Cup-vinderne fra 2007 — fodbold trods modgang",
    intro: `<p>Iraks fodboldlandshold er en af de mest rørende historier i international fodbold. Midt i krig, kaos og politisk uro vandt Irak Asian Cup i 2007 — en bedrift, der bragte et splittet land sammen og viste fodboldets kraft som samlende element.</p>
<p>Irakisk fodbold har dybe rødder og en passioneret fanbase, der holder fast i holdet trods de mest vanskelige omstændigheder. Fra krigszoner til flygtningelejre har irakiske fans fulgt landsholdet med en dedikation, der er uden sidestykke.</p>
<p>Med en ny generation af talenter og forbedrede forhold er der håb om, at Irak kan vende tilbage til toppen af asiatisk fodbold.</p>`,
    body: `<h2>Iraks fodboldhistorie</h2>
<p>Iraks fodboldforbund blev grundlagt i 1948, og holdet spillede sin første officielle landskamp i 1957. I de tidlige årtier var Irak en voksende kraft i vestasiatisk fodbold, men det var i 1980'erne og 1990'erne, at landets fodboldhistorie blev uløseligt forbundet med politiske begivenheder.</p>

<h3>Uday Husseins tyranni</h3>
<p>Under Saddam Husseins regime blev fodboldforbundet ledet af hans søn Uday Hussein, der var berygtet for at straffe spillere fysisk efter dårlige resultater. Trods dette grufulde miljø formåede irakiske spillere at levere resultater og kvalificere sig til OL 2004 i Athen, hvor Irak sensationelt nåede semifinalen.</p>

<h3>Asian Cup 2007 — miraklet i Melbourne</h3>
<p>Asian Cup 2007 er det definerende øjeblik i irakisk fodboldhistorie. Mens bomber eksploderede i Baghdad og landet var midt i en borgerkrig, spillede Iraks landshold sig hele vejen til finalen. Sejren over Saudi-Arabien med 1-0 i finalen udløste vild jubel i hele Irak — desværre kostede fejringerne i Baghdad menneskeliv på grund af skydning i luften.</p>
<p>Younis Mahmoud scorede det afgørende mål med et hovedstød, og holdets præstation under de mest utænkelige omstændigheder er en af de mest rørende historier i sportens historie. Holdet kunne ikke engang spille hjemmekampe i Irak og måtte træne og spille i nabolande.</p>

<h2>Spillestil og identitet</h2>
<p>Irakisk fodbold er kendetegnet ved teknisk dygtighed, kreativitet og en brændende vilje til at vinde. Spillerne bærer landsholdstrøjen med en særlig stolthed, da holdet repræsenterer håb og enhed for en nation, der har gennemlevet enorme lidelser.</p>
<p>Irak har været tvunget til at spille "hjemmekampe" i neutrale lande i mange år på grund af sikkerhedssituationen. Basra International Stadium er et af de stadioner, der er blevet brugt til hjemmekampe i de senere år.</p>

<h2>Den nye generation</h2>
<p>Med forbedrede sikkerhedsforhold og en ny generation af talentfulde spillere er der optimisme om Iraks fodboldmæssige fremtid. Kvalifikation til VM forbliver det store mål, og Irak har vist tegn på fremgang i de seneste asiatiske turneringer.</p>`,
    keyFacts: {
      fifaRanking: 55,
      nickname: "Asadus Rafidain (Mesopotamiens Løver)",
      coach: "Jesús Casas",
      confederation: "AFC",
      founded: 1948,
      stadium: "Basra International Stadium",
      bestResult: "Asian Cup-vindere 2007",
      fifaCode: "IRQ",
    },
    players: [
      { name: "Mohanad Ali", position: "Angriber", club: "Al-Duhail", caps: 30, goals: 10 },
      { name: "Aymen Hussein", position: "Angriber", club: "Al-Quwa Al-Jawiya", caps: 40, goals: 20 },
      { name: "Ibrahim Bayesh", position: "Midtbane", club: "Al-Shorta", caps: 35, goals: 5 },
      { name: "Ali Adnan", position: "Forsvar", club: "Al-Wakrah", caps: 70, goals: 3 },
      { name: "Mohammed Qasim", position: "Midtbane", club: "Al-Quwa Al-Jawiya", caps: 25, goals: 3 },
      { name: "Jalal Hassan", position: "Målmand", club: "Al-Shorta", caps: 40, goals: 0 },
      { name: "Ahmed Yasin", position: "Angriber", club: "AIK", caps: 50, goals: 8 },
      { name: "Rebin Sulaka", position: "Forsvar", club: "Djurgårdens IF", caps: 30, goals: 2 },
      { name: "Ali Faez", position: "Midtbane", club: "Al-Zawraa", caps: 25, goals: 2 },
      { name: "Amjed Attwan", position: "Forsvar", club: "Al-Quwa Al-Jawiya", caps: 30, goals: 0 },
    ],
    matches: [
      { date: "2007-07-29", opponent: "Saudi-Arabien", score: "1-0", competition: "Asian Cup 2007 Finale", result: "W" },
      { date: "2004-08-24", opponent: "Australien", score: "0-1", competition: "OL 2004 Semifinale", result: "L" },
      { date: "2007-07-25", opponent: "Sydkorea", score: "0-0 (4-3 str.)", competition: "Asian Cup 2007 Semifinale", result: "W" },
      { date: "2019-01-16", opponent: "Iran", score: "0-0", competition: "Asian Cup 2019 Gruppespil", result: "D" },
      { date: "2024-01-19", opponent: "Japan", score: "1-2", competition: "Asian Cup 2024 Gruppespil", result: "L" },
    ],
    achievements: [
      "Asian Cup-vindere 2007",
      "OL-semifinale 2004",
      "Asian Games-guldvindere 1982",
      "Gulf Cup-vindere flere gange",
      "WAFF Championship-vindere",
    ],
    faq: [
      {
        question: "Hvem er landstræner for Iraks fodboldlandshold?",
        answer: "Jesús Casas er landstræner for Irak. Den spanske træner har forsøgt at modernisere irakisk fodbold og integrere unge talenter.",
      },
      {
        question: "Hvornår vandt Irak Asian Cup?",
        answer: "Irak vandt Asian Cup i 2007 i en af fodboldhistoriens mest rørende historier. Midt i borgerkrigen slog holdet Saudi-Arabien 1-0 i finalen med et mål af Younis Mahmoud.",
      },
      {
        question: "Har Irak deltaget i VM?",
        answer: "Irak har deltaget i VM én gang — i 1986 i Mexico. Holdet tabte alle tre gruppekampe mod Paraguay, Belgien og Mexico, men kvalifikationen i sig selv var en stor bedrift.",
      },
      {
        question: "Hvem er Iraks bedste spiller nogensinde?",
        answer: "Younis Mahmoud betragtes som en af Iraks bedste spillere. Han scorede det afgørende mål i Asian Cup 2007-finalen. Ahmed Radhi, der scorede Iraks eneste VM-mål i 1986, er en anden legende.",
      },
      {
        question: "Kan Irak spille hjemmekampe?",
        answer: "Irak har i mange år været tvunget til at spille hjemmekampe i neutrale lande på grund af sikkerhedssituationen. I de seneste år har FIFA langsomt genåbnet for kampe i irakiske byer som Basra.",
      },
    ],
  },

  brasilien: {
    tagline: "Fem VM-titler — jogo bonito og fodboldmagi",
    intro: `<p>Brasiliens fodboldlandshold, "A Seleção", er den mest succesfulde nation i VM-historien med fem titler. Brasilien er synonymt med "jogo bonito" — den smukke fodbold — og har produceret nogle af sportens største ikoner, fra Pelé og Garrincha til Ronaldo og Neymar.</p>
<p>Brasiliansk fodbold er mere end en sport — det er en kulturel institution, der definerer national identitet. Den berømte gule trøje er et af de mest genkendelige symboler i verdens sport, og brasilansk fodbold inspirerer spillere og fans over hele kloden.</p>
<p>Trods en periode med relative skuffelser i de seneste år forbliver Brasilien en af de mest frygtede og respekterede nationer i international fodbold med en ubegrænset talentbase.</p>`,
    body: `<h2>Brasiliens fodboldhistorie</h2>
<p>Det brasilianske fodboldforbund (CBF) blev grundlagt i 1914, og Brasilien har deltaget i alle VM-slutrunder siden turneringens begyndelse i 1930. Brasilien er den eneste nation, der har vundet VM på fire forskellige kontinenter — Europa, Sydamerika, Nordamerika og Asien.</p>

<h3>Pelé og den gyldne æra</h3>
<p>Brasiliens dominans begyndte for alvor ved VM 1958 i <a href="/sverige">Sverige</a>, hvor en 17-årig Pelé debuterede og scorede seks mål. Brasilien vandt turneringen og fulgte op med endnu en VM-titel i 1962 i Chile. VM 1970 i Mexico — med Pelé, Jairzinho, Gérson og Carlos Alberto — betragtes af mange som det bedste hold i fodboldhistorien. Brasilien vandt alle seks kampe og slog <a href="/italien">Italien</a> 4-1 i finalen.</p>

<h3>VM 1994 og 2002</h3>
<p>Efter 24 års tørke vandt Brasilien VM igen i 1994 i USA. Holdet med Romário, Bebeto og Dunga vandt finalen mod <a href="/italien">Italien</a> i straffespark. VM 2002 i Japan/Sydkorea var endnu en triumf med Ronaldo som topscorer. Ronaldos to mål i finalen mod <a href="/tyskland">Tyskland</a> — efter en vanskeligt periode med skader og tvivl — er et af de mest mindeværdige øjeblikke i VM-historien.</p>

<h3>VM 2014 på hjemmebane — traumet</h3>
<p>VM 2014 på hjemmebane skulle have været Brasiliens store triumf, men endte i tragedie. Semifinalens 1-7-nederlag til <a href="/tyskland">Tyskland</a> — "Mineirazo" — er den mest smertefulde oplevelse i brasiliansk fodboldhistorie. Resultatet chokerede hele verden og efterlod brasilianske fans i tårer.</p>

<h2>Jogo Bonito — den smukke fodbold</h2>
<p>Brasiliens fodboldidentitet er bygget på kreativitet, flair og underholdning. "Jogo bonito" (den smukke fodbold) er mere end en spillestil — det er en filosofi, der værdsætter driblinger, finter og artistiske mål. Denne tradition har produceret generationer af teknisk geniale spillere, fra Garrincha og Zico til Ronaldinho og Neymar.</p>
<p>Det berømte Maracanã-stadion i Rio de Janeiro, med plads til over 78.000 tilskuere, er et af de mest ikoniske stadioner i verden og et tempel for brasiliansk fodbold.</p>

<h2>Aktuel status</h2>
<p>Brasilien har ikke vundet VM siden 2002 — den længste tørke i nationens historie. Med talenter som Vinícius Júnior, Endrick og Rodrygo er der dog håb om, at den næste store titel ikke er langt væk.</p>`,
    keyFacts: {
      fifaRanking: 5,
      nickname: "A Seleção / Canarinha",
      coach: "Dorival Júnior",
      confederation: "CONMEBOL",
      founded: 1914,
      stadium: "Maracanã, Rio de Janeiro",
      bestResult: "Verdensmestre 1958, 1962, 1970, 1994, 2002",
      fifaCode: "BRA",
    },
    players: [
      { name: "Vinícius Júnior", position: "Angriber", club: "Real Madrid", caps: 35, goals: 8 },
      { name: "Rodrygo", position: "Angriber", club: "Real Madrid", caps: 25, goals: 6 },
      { name: "Casemiro", position: "Midtbane", club: "Manchester United", caps: 75, goals: 7 },
      { name: "Marquinhos", position: "Forsvar", club: "Paris Saint-Germain", caps: 80, goals: 7 },
      { name: "Alisson", position: "Målmand", club: "Liverpool", caps: 65, goals: 0 },
      { name: "Raphinha", position: "Angriber", club: "FC Barcelona", caps: 25, goals: 8 },
      { name: "Lucas Paquetá", position: "Midtbane", club: "West Ham", caps: 55, goals: 10 },
      { name: "Endrick", position: "Angriber", club: "Real Madrid", caps: 10, goals: 4 },
      { name: "Bruno Guimarães", position: "Midtbane", club: "Newcastle United", caps: 20, goals: 2 },
      { name: "Militão", position: "Forsvar", club: "Real Madrid", caps: 35, goals: 2 },
      { name: "Neymar", position: "Angriber", club: "Santos", caps: 130, goals: 79 },
    ],
    matches: [
      { date: "1970-06-21", opponent: "Italien", score: "4-1", competition: "VM 1970 Finale", result: "W" },
      { date: "2002-06-30", opponent: "Tyskland", score: "2-0", competition: "VM 2002 Finale", result: "W" },
      { date: "1994-07-17", opponent: "Italien", score: "0-0 (3-2 str.)", competition: "VM 1994 Finale", result: "W" },
      { date: "2014-07-08", opponent: "Tyskland", score: "1-7", competition: "VM 2014 Semifinale", result: "L" },
      { date: "1958-06-29", opponent: "Sverige", score: "5-2", competition: "VM 1958 Finale", result: "W" },
      { date: "2022-12-09", opponent: "Kroatien", score: "1-1 (2-4 str.)", competition: "VM 2022 Kvartfinale", result: "L" },
      { date: "1998-07-12", opponent: "Frankrig", score: "0-3", competition: "VM 1998 Finale", result: "L" },
    ],
    achievements: [
      "Verdensmestre 1958, 1962, 1970, 1994 og 2002 (rekord: 5 titler)",
      "Copa América-vindere 9 gange",
      "Confederations Cup-vindere 4 gange",
      "VM-finalist 1950 og 1998",
      "Eneste nation der har deltaget i alle VM-slutrunder",
      "Produceret Pelé, Ronaldo, Ronaldinho, Neymar",
    ],
    faq: [
      {
        question: "Hvor mange VM-titler har Brasilien vundet?",
        answer: "Brasilien har vundet VM fem gange — en rekord. Titlene kom i 1958, 1962, 1970, 1994 og 2002. Brasilien er den eneste nation, der har vundet VM på fire forskellige kontinenter.",
      },
      {
        question: "Hvem er landstræner for Brasiliens fodboldlandshold?",
        answer: "Dorival Júnior er landstræner for Brasilien. Han overtog posten i 2024.",
      },
      {
        question: "Hvem er Brasiliens bedste spiller nogensinde?",
        answer: "Pelé betragtes næsten universelt som Brasiliens og fodboldhistoriens bedste spiller. Han vandt tre VM-titler (1958, 1962, 1970) og scorede over 1.000 karrieremål.",
      },
      {
        question: "Hvad skete der i kampen Brasilien-Tyskland 1-7?",
        answer: "I VM 2014-semifinalen i Belo Horizonte tabte Brasilien 1-7 til Tyskland på hjemmebane — den mest ydmygende oplevelse i brasiliansk fodboldhistorie. Brasilien var uden den skadede Neymar og den karantæneramte Thiago Silva.",
      },
      {
        question: "Hvad er jogo bonito?",
        answer: "'Jogo bonito' (den smukke fodbold) er den brasilianske fodboldfilosofi, der prioriterer kreativitet, driblinger, flair og underholdning. Det er mere end en taktik — det er en kulturel identitet, der har defineret brasiliansk fodbold i generationer.",
      },
    ],
  },

  italien: {
    tagline: "Fire VM-titler og catenaccio-mestrene",
    intro: `<p>Italiens fodboldlandshold, "Gli Azzurri" (De Blå), er en af de mest succesfulde nationer i fodboldhistorien med fire VM-titler og to EM-titler. Italiensk fodbold er berømt for sin taktiske sophistikation, defensive mesterskab og evne til at vinde afgørende kampe.</p>
<p>Fra Paolo Maldini og Franco Baresis defensive perfektion til Roberto Baggios og Francesco Tottis offensive geni har Italien konsekvent produceret spillere, der har sat deres præg på verdens fodbold. EM-triumfen i 2021 viste, at italiensk fodbold er i stand til at genopfinde sig selv.</p>
<p>Trods chokerende VM-afbud i 2018 og 2022 forbliver Italien en af de mest respekterede fodboldnationer med en dyb fodboldkultur og en uovertruffen taktisk tradition.</p>`,
    body: `<h2>Italiens fodboldhistorie</h2>
<p>Det italienske fodboldforbund (FIGC) blev grundlagt i 1898, og Italien har været en central kraft i international fodbold siden 1930'erne. Holdet vandt VM i 1934 og 1938 under kontroversielle omstændigheder, men den sportslige kvalitet var ubestridelig.</p>

<h3>Catenaccio og defensiv mesterskab</h3>
<p>I 1960'erne udviklede italiensk fodbold "catenaccio" — et defensivt system baseret på en libero (fri mand) bag forsvarslinjen, stram mandsopdækning og hurtige kontraangreb. Denne taktiske innovation, perfektioneret af trænere som Helenio Herrera, definerede italiensk fodbold i årtier og inspirerede defensive systemer verden over.</p>

<h3>VM 1982 — Paolo Rossis eventyr</h3>
<p>VM 1982 i <a href="/spanien">Spanien</a> var et af de mest dramatiske i historien for Italien. Paolo Rossi, der lige var vendt tilbage fra en udelukkelse for matchfixing, blev turneringens helt med seks mål. Hans hat-trick mod <a href="/brasilien">Brasilien</a> i en af de mest berømte kampe nogensinde, og hans mål i finalen mod <a href="/tyskland">Vesttyskland</a>, sikrede Italiens tredje VM-titel.</p>

<h3>VM 2006 — den fjerde stjerne</h3>
<p>VM 2006 i <a href="/tyskland">Tyskland</a> var omgivet af skandale, da den italienske liga var ramt af matchfixing-skandalen "Calciopoli". Men landsholdet under Marcello Lippis ledelse brugte kontroversen som motivation og vandt turneringen. Fabio Cannavarros suveræne forsvarsspil, Andrea Pirlos elegante boldfordeling og finalens straffesparkskonkurrence mod <a href="/frankrig">Frankrig</a> — med Zidanes berømte hovedstød mod Materazzi — gjorde VM 2006 til en uforglemmelig turnering.</p>

<h3>EM 2021 — Mancinis mesterværk</h3>
<p>Under Roberto Mancini gennemgik Italien en bemærkelsesværdig forvandling. Fra at misse VM 2018 til at vinde EM 2021 var en af de mest imponerende omstillinger i fodboldhistorien. Med Gianluigi Donnarumma i målet, Leonardo Bonucci og Giorgio Chiellini i forsvaret og Jorginho og Federico Chiesa i feltet spillede Italien sig ubesejret gennem turneringen og slog <a href="/england">England</a> i finalen på Wembley efter straffespark.</p>

<h2>Spillestil og identitet</h2>
<p>Italiensk fodbold har udviklet sig fra ren catenaccio til en mere moderne, boldbesiddende stil, men den defensive organisering og taktiske intelligens forbliver kendetegnende. Serie A er en af verdens mest taktisk sofistikerede ligaer og producerer spillere med en dyb forståelse for fodboldens strategiske aspekter.</p>`,
    keyFacts: {
      fifaRanking: 9,
      nickname: "Gli Azzurri",
      coach: "Luciano Spalletti",
      confederation: "UEFA",
      founded: 1898,
      stadium: "Ingen fast hjemmebane (rotation)",
      bestResult: "Verdensmestre 1934, 1938, 1982, 2006",
      fifaCode: "ITA",
    },
    players: [
      { name: "Gianluigi Donnarumma", position: "Målmand", club: "Paris Saint-Germain", caps: 70, goals: 0 },
      { name: "Federico Chiesa", position: "Angriber", club: "Juventus", caps: 40, goals: 7 },
      { name: "Nicolò Barella", position: "Midtbane", club: "Inter", caps: 55, goals: 10 },
      { name: "Sandro Tonali", position: "Midtbane", club: "Newcastle United", caps: 20, goals: 1 },
      { name: "Alessandro Bastoni", position: "Forsvar", club: "Inter", caps: 25, goals: 1 },
      { name: "Gianluca Scamacca", position: "Angriber", club: "Atalanta", caps: 20, goals: 5 },
      { name: "Lorenzo Pellegrini", position: "Midtbane", club: "Roma", caps: 30, goals: 5 },
      { name: "Federico Dimarco", position: "Forsvar", club: "Inter", caps: 20, goals: 3 },
      { name: "Giacomo Raspadori", position: "Angriber", club: "Napoli", caps: 25, goals: 5 },
      { name: "Riccardo Calafiori", position: "Forsvar", club: "Arsenal", caps: 10, goals: 1 },
      { name: "Davide Frattesi", position: "Midtbane", club: "Inter", caps: 20, goals: 4 },
    ],
    matches: [
      { date: "2006-07-09", opponent: "Frankrig", score: "1-1 (5-3 str.)", competition: "VM 2006 Finale", result: "W" },
      { date: "2021-07-11", opponent: "England", score: "1-1 (3-2 str.)", competition: "EM 2021 Finale", result: "W" },
      { date: "1982-07-11", opponent: "Vesttyskland", score: "3-1", competition: "VM 1982 Finale", result: "W" },
      { date: "1982-07-05", opponent: "Brasilien", score: "3-2", competition: "VM 1982 Andenrunde", result: "W" },
      { date: "2000-07-02", opponent: "Frankrig", score: "1-2", competition: "EM 2000 Finale", result: "L" },
      { date: "2024-06-29", opponent: "Schweiz", score: "0-2", competition: "EM 2024 Ottendedelsfinale", result: "L" },
      { date: "1970-06-17", opponent: "Vesttyskland", score: "4-3", competition: "VM 1970 Semifinale", result: "W" },
    ],
    achievements: [
      "Verdensmestre 1934, 1938, 1982 og 2006",
      "Europamestre 1968 og 2021",
      "VM-finalist 1970, 1994",
      "EM-finalist 2000 og 2012",
      "OL-guld 1936",
      "34 kampe ubesejret under Mancini (2018-2021)",
    ],
    faq: [
      {
        question: "Hvor mange VM-titler har Italien vundet?",
        answer: "Italien har vundet VM fire gange: 1934, 1938, 1982 og 2006. Kun Brasilien (5) har vundet flere.",
      },
      {
        question: "Hvem er landstræner for Italiens fodboldlandshold?",
        answer: "Luciano Spalletti er landstræner for Italien. Han overtog posten i 2023 efter Roberto Mancinis afgang.",
      },
      {
        question: "Hvad er catenaccio?",
        answer: "Catenaccio (kæden) er et defensivt taktisk system, der blev udviklet i italiensk fodbold i 1960'erne. Det er baseret på en libero bag forsvarslinjen, stram mandsopdækning og hurtige kontraangreb.",
      },
      {
        question: "Hvorfor kvalificerede Italien sig ikke til VM 2018 og 2022?",
        answer: "Italien missede VM 2018 efter et playoff-nederlag til Sverige og VM 2022 efter at have tabt kvalifikationsplayoff til Nordmakedonien. Det var chokerende resultater for en firegange VM-vinder.",
      },
      {
        question: "Hvem er Italiens bedste spiller nogensinde?",
        answer: "Paolo Maldini, Franco Baresi og Gianluigi Buffon er ofte nævnt som Italiens bedste spillere. Roberto Baggio og Francesco Totti er andre ikoner. Det afhænger af, om man prioriterer forsvar eller angreb.",
      },
    ],
  },

  argentina: {
    tagline: "Tredobbelte verdensmestre med Messi og Maradona",
    intro: `<p>Argentinas fodboldlandshold, "La Albiceleste" (De Hvidblå), er en af fodboldens absolutte supermagter med tre VM-titler og 16 Copa América-trofæer. Argentina har produceret to af de største spillere i fodboldhistorien — Diego Maradona og Lionel Messi.</p>
<p>Argentinsk fodbold er kendetegnet ved passion, teknisk brillans og en uforsonlig vindermentalitet. Fra Buenos Aires' gader til verdens største stadioner er argentinsk fodboldkultur en livsstil, der gennemsyrer hele samfundet.</p>
<p>Lionel Messis VM-triumf i 2022 — hvor han endelig vandt den titel, der manglede i hans karriere — var kulminationen på en af de mest bemærkelsesværdige sportsfortællinger nogensinde.</p>`,
    body: `<h2>Argentinas fodboldhistorie</h2>
<p>Det argentinske fodboldforbund (AFA) blev grundlagt i 1893, og Argentina var med til at forme sydamerikansk fodbold fra begyndelsen. Holdet deltog i det første VM i 1930 som finaledeltagere, hvor de tabte til Uruguay.</p>

<h3>Maradona og "Guds Hånd" — VM 1986</h3>
<p>Diego Maradonas VM 1986 i Mexico er en af de største individuelle præstationer i sportens historie. Hans to mål mod <a href="/england">England</a> i kvartfinalen — "Guds Hånd" og "Århundredets Mål" — er de mest berømte mål nogensinde. Maradona bar Argentina til VM-titlen næsten egenhændigt og cementerede sin status som en af de største spillere i historien.</p>
<p>Maradona var mere end en fodboldspiller — han var et symbol på argentinsk national identitet, en folkehelt for de fattige og en kontroversiel, men uforglemmelig figur. Hans død i 2020 udløste national sorg i Argentina.</p>

<h3>VM 2022 — Messis kroningsceremoni</h3>
<p>VM 2022 i Qatar var kulminationen på Lionel Messis utrolige karriere med landsholdet. Finalen mod <a href="/frankrig">Frankrig</a> betragtes som den bedste VM-finale nogensinde — en 3-3-thriller, der blev afgjort i straffespark. Messi scorede to mål, herunder i forlænget spilletid, og løftede endelig den trofæ, der manglede i hans samling.</p>
<p>Argentinas sejrsfejring involverede millioner af mennesker i Buenos Aires' gader og viste den usammenlignelige passion, som argentinsk fodbold vækker.</p>

<h3>Copa América-dominans</h3>
<p>Argentina er den mest succesfulde nation i Copa América med 16 titler. Under Lionel Scalloni vandt Argentina Copa América i 2021 — Messis første landholdstitel — og igen i 2024. Holdet vandt desuden Finalissima (CONMEBOL-UEFA Cup of Champions) mod <a href="/italien">Italien</a> i 2022.</p>

<h2>Spillestil og identitet</h2>
<p>Argentinsk fodbold er en blanding af sydamerikansk kreativitet og europæisk taktisk disciplin. Holdet er kendetegnet ved teknisk kvalitet, viljestyrke og en "garra" (kampånd), der gør dem farlige i enhver kamp. Den argentinske fankultur — med "La Doce" (Den Tolvte Mand) — er en af de mest intense og passionerede i verden.</p>
<p>Estadio Monumental i Buenos Aires, med plads til 84.000 tilskuere, er Argentinas hjemmebane og en af de mest intimiderende arenaer i verdens fodbold.</p>`,
    keyFacts: {
      fifaRanking: 1,
      nickname: "La Albiceleste",
      coach: "Lionel Scaloni",
      confederation: "CONMEBOL",
      founded: 1893,
      stadium: "Estadio Monumental, Buenos Aires",
      bestResult: "Verdensmestre 1978, 1986, 2022",
      fifaCode: "ARG",
    },
    players: [
      { name: "Lionel Messi", position: "Angriber", club: "Inter Miami", caps: 187, goals: 109 },
      { name: "Julián Álvarez", position: "Angriber", club: "Atlético Madrid", caps: 30, goals: 10 },
      { name: "Lautaro Martínez", position: "Angriber", club: "Inter", caps: 55, goals: 25 },
      { name: "Rodrigo De Paul", position: "Midtbane", club: "Atlético Madrid", caps: 55, goals: 3 },
      { name: "Emiliano Martínez", position: "Målmand", club: "Aston Villa", caps: 50, goals: 0 },
      { name: "Cristian Romero", position: "Forsvar", club: "Tottenham Hotspur", caps: 25, goals: 2 },
      { name: "Nicolás Otamendi", position: "Forsvar", club: "Benfica", caps: 100, goals: 9 },
      { name: "Enzo Fernández", position: "Midtbane", club: "Chelsea", caps: 25, goals: 3 },
      { name: "Alexis Mac Allister", position: "Midtbane", club: "Liverpool", caps: 30, goals: 2 },
      { name: "Nicolás González", position: "Angriber", club: "Juventus", caps: 25, goals: 5 },
      { name: "Lisandro Martínez", position: "Forsvar", club: "Manchester United", caps: 20, goals: 0 },
    ],
    matches: [
      { date: "2022-12-18", opponent: "Frankrig", score: "3-3 (4-2 str.)", competition: "VM 2022 Finale", result: "W" },
      { date: "1986-06-29", opponent: "Vesttyskland", score: "3-2", competition: "VM 1986 Finale", result: "W" },
      { date: "1986-06-22", opponent: "England", score: "2-1", competition: "VM 1986 Kvartfinale", result: "W" },
      { date: "2021-07-10", opponent: "Brasilien", score: "1-0", competition: "Copa América 2021 Finale", result: "W" },
      { date: "1978-06-25", opponent: "Holland", score: "3-1", competition: "VM 1978 Finale", result: "W" },
      { date: "2014-07-13", opponent: "Tyskland", score: "0-1", competition: "VM 2014 Finale", result: "L" },
      { date: "2024-07-14", opponent: "Colombia", score: "1-0", competition: "Copa América 2024 Finale", result: "W" },
    ],
    achievements: [
      "Verdensmestre 1978, 1986 og 2022",
      "Copa América-vindere 16 gange (rekord)",
      "Finalissima-vindere 2022",
      "VM-finalist 1930, 1990, 2014",
      "Confederations Cup-vindere 1992",
      "OL-guld 2004 og 2008",
      "Lionel Messi — historiens mest dekorerede spiller",
    ],
    faq: [
      {
        question: "Hvor mange VM-titler har Argentina vundet?",
        answer: "Argentina har vundet VM tre gange: 1978 på hjemmebane, 1986 i Mexico (med Maradona) og 2022 i Qatar (med Messi). Holdet har desuden tabt tre VM-finaler.",
      },
      {
        question: "Hvem er Argentinas bedste spiller — Messi eller Maradona?",
        answer: "Debatten om Messi versus Maradona er en af fodboldhistoriens største. Messi har flere titler og rekorder, mens Maradona havde en kulturel indflydelse, der transcenderede fodbold. Mange argentinere anser Maradona for den største.",
      },
      {
        question: "Hvem er landstræner for Argentinas fodboldlandshold?",
        answer: "Lionel Scaloni er landstræner for Argentina. Han har ledet holdet til VM-titlen 2022, Copa América 2021 og 2024, og Finalissima 2022 — en af de mest succesfulde perioder i argentinsk fodboldhistorie.",
      },
      {
        question: "Hvad var 'Guds Hånd'-målet?",
        answer: "'Guds Hånd' var Diego Maradonas kontroversielle mål mod England ved VM 1986. Maradona slog bolden i mål med hånden, men dommeren godkendte målet. Bagefter sagde Maradona, at målet blev scoret 'lidt med Diegos hoved og lidt med Guds hånd'.",
      },
      {
        question: "Hvordan var VM 2022-finalen?",
        answer: "VM 2022-finalen mellem Argentina og Frankrig betragtes som den bedste VM-finale nogensinde. Argentina førte 2-0, Frankrig udlignede til 2-2 på under to minutter, og i forlænget spilletid scorede Messi og Mbappé igen. Argentina vandt 4-2 i straffespark.",
      },
    ],
  },

  holland: {
    tagline: "Total fodbold og tre VM-finaler uden titel",
    intro: `<p>Hollands fodboldlandshold, "Oranje", er et af de mest indflydelsesrige hold i fodboldhistorien. Trods aldrig at have vundet VM har Holland revolutioneret sporten med "totaalvoetbal" (total fodbold) og produceret generationer af verdensklassespillere fra Johan Cruijff til Virgil van Dijk.</p>
<p>Hollands tre VM-finaler (1974, 1978, 2010) — alle tabt — gør dem til den mest succesfulde nation, der aldrig har vundet den ultimative titel. Den orange farve er ikonisk i international fodbold, og hollandske fans er kendte for deres festlige tilstedeværelse ved turneringer.</p>
<p>Med den stærke hollandske Eredivisie og Ajax' berømte ungdomsakademi fortsætter Holland med at producere teknisk begavede spillere, der former international fodbold.</p>`,
    body: `<h2>Hollands fodboldhistorie</h2>
<p>Det hollandske fodboldforbund (KNVB) blev grundlagt i 1889, men det var først i 1970'erne, at Holland trådte ind på den internationale scene som en af fodboldhistoriens mest indflydelsesrige nationer.</p>

<h3>Total fodbold og Johan Cruijff</h3>
<p>Under Rinus Michels og med Johan Cruijff som omdrejningspunkt revolutionerede Holland fodbold i 1970'erne med "totaalvoetbal" — et system hvor enhver spiller kunne spille enhver position. Denne filosofi, udviklet ved Ajax Amsterdam, ændrede for altid måden, fodbold blev tænkt og spillet på.</p>
<p>Ved VM 1974 i <a href="/tyskland">Vesttyskland</a> spillede Holland den smukkeste fodbold, turneringen havde set, men tabte finalen 1-2 til værterne trods at have ført 1-0. VM 1978 i <a href="/argentina">Argentina</a> bragte endnu en finalenederlag — denne gang 1-3 til hjemmenationen.</p>

<h3>EM 1988 — den eneste titel</h3>
<p>Hollands eneste store titel kom ved EM 1988 i <a href="/tyskland">Vesttyskland</a>. Med Ruud Gullit, Marco van Basten og Frank Rijkaard spillede Holland strålende og vandt turneringen. Van Bastens volleymål mod Sovjetunionen i finalen — et kunstværk fra en næsten umulig vinkel — betragtes som et af de flotteste mål i fodboldhistorien.</p>

<h3>VM 2010 og den moderne æra</h3>
<p>Ved VM 2010 i <a href="/sydafrika">Sydafrika</a> nåede Holland en tredje VM-finale, men tabte 0-1 til <a href="/spanien">Spanien</a> i forlænget spilletid. Under Louis van Gaal nåede holdet semifinalen ved VM 2014 i <a href="/brasilien">Brasilien</a>, og ved EM 2024 i <a href="/tyskland">Tyskland</a> nåede Holland semifinalen igen.</p>

<h2>Den hollandske filosofi</h2>
<p>Hollandsk fodbold er bygget på en filosofi om teknisk kvalitet, boldbesiddelse og offensivt spil. Ajax' ungdomsakademi — "De Toekomst" (Fremtiden) — er et af de mest berømte i verden og har produceret spillere som Cruijff, Marco van Basten, Dennis Bergkamp, Patrick Kluivert og Frenkie de Jong.</p>
<p>Denne filosofi, der vægter uddannelse og teknisk udvikling over fysisk styrke, har gjort hollandsk fodbold til en eksportartikel. Hollandske trænere som Michels, Cruijff (som træner), Louis van Gaal og Erik ten Hag har påvirket fodboldkulturer over hele verden.</p>

<h2>Spillestil og identitet</h2>
<p>Oranje spiller med en selvtillid og offensiv ambition, der afspejler den hollandske fodboldfilosofi. Holdet er altid organiseret, teknisk stærkt og offensivt orienteret. Johan Cruijff Arena i Amsterdam (tidligere Amsterdam ArenA) er en af de mest moderne arenaer i europæisk fodbold.</p>`,
    keyFacts: {
      fifaRanking: 7,
      nickname: "Oranje / Het Nederlands Elftal",
      coach: "Ronald Koeman",
      confederation: "UEFA",
      founded: 1889,
      stadium: "Johan Cruijff Arena, Amsterdam",
      bestResult: "Europamestre 1988",
      fifaCode: "NED",
    },
    players: [
      { name: "Virgil van Dijk", position: "Forsvar", club: "Liverpool", caps: 70, goals: 8 },
      { name: "Frenkie de Jong", position: "Midtbane", club: "FC Barcelona", caps: 55, goals: 2 },
      { name: "Memphis Depay", position: "Angriber", club: "Atlético Madrid", caps: 95, goals: 46 },
      { name: "Cody Gakpo", position: "Angriber", club: "Liverpool", caps: 35, goals: 12 },
      { name: "Nathan Aké", position: "Forsvar", club: "Manchester City", caps: 50, goals: 3 },
      { name: "Denzel Dumfries", position: "Forsvar", club: "Inter", caps: 50, goals: 5 },
      { name: "Xavi Simons", position: "Midtbane", club: "RB Leipzig", caps: 15, goals: 3 },
      { name: "Bart Verbruggen", position: "Målmand", club: "Brighton", caps: 10, goals: 0 },
      { name: "Tijjani Reijnders", position: "Midtbane", club: "AC Milan", caps: 15, goals: 2 },
      { name: "Donyell Malen", position: "Angriber", club: "Borussia Dortmund", caps: 30, goals: 6 },
      { name: "Jeremie Frimpong", position: "Forsvar", club: "Bayer Leverkusen", caps: 10, goals: 1 },
    ],
    matches: [
      { date: "1988-06-25", opponent: "Sovjetunionen", score: "2-0", competition: "EM 1988 Finale", result: "W" },
      { date: "1974-07-07", opponent: "Vesttyskland", score: "1-2", competition: "VM 1974 Finale", result: "L" },
      { date: "1978-06-25", opponent: "Argentina", score: "1-3", competition: "VM 1978 Finale", result: "L" },
      { date: "2010-07-11", opponent: "Spanien", score: "0-1", competition: "VM 2010 Finale", result: "L" },
      { date: "2024-07-10", opponent: "England", score: "1-2", competition: "EM 2024 Semifinale", result: "L" },
      { date: "2014-07-09", opponent: "Argentina", score: "0-0 (2-4 str.)", competition: "VM 2014 Semifinale", result: "L" },
      { date: "2019-06-09", opponent: "Portugal", score: "0-1", competition: "Nations League 2019 Finale", result: "L" },
    ],
    achievements: [
      "Europamestre 1988",
      "VM-finalist 1974, 1978 og 2010",
      "VM-tredjeplads 2014",
      "EM-semifinale 2024",
      "Opfandt 'totaalvoetbal' (total fodbold)",
      "Produceret Cruijff, van Basten, Bergkamp, van Dijk",
    ],
    faq: [
      {
        question: "Har Holland vundet VM?",
        answer: "Nej, Holland har aldrig vundet VM trods tre finaler (1974, 1978, 2010). Holland er den mest succesfulde nation, der aldrig har vundet den ultimative titel. Holdet vandt dog EM i 1988.",
      },
      {
        question: "Hvem er landstræner for Hollands fodboldlandshold?",
        answer: "Ronald Koeman er landstræner for Holland. Han er i sin anden periode som landstræner og førte holdet til EM 2024-semifinalen.",
      },
      {
        question: "Hvad er total fodbold?",
        answer: "'Totaalvoetbal' (total fodbold) er en hollandsk fodboldfilosofi, hvor enhver spiller kan spille enhver position. Systemet blev udviklet af Rinus Michels og Johan Cruijff ved Ajax i 1970'erne og revolutionerede international fodbold.",
      },
      {
        question: "Hvem er Hollands bedste spiller nogensinde?",
        answer: "Johan Cruijff betragtes næsten universelt som Hollands bedste spiller. Han vandt Ballon d'Or tre gange og var arkitekten bag total fodbold. Marco van Basten og Dennis Bergkamp er andre hollandske legender.",
      },
      {
        question: "Hvorfor kaldes holdet 'Oranje'?",
        answer: "Holland spiller i orange (oranje på hollandsk), hvilket refererer til Huset Oranien-Nassau — det hollandske kongehus. Den orange farve er et nationalt symbol og er synligt overalt, når Holland spiller.",
      },
    ],
  },

  tunesien: {
    tagline: "Nordafrikas stolthed — Ørne af Karthago",
    intro: `<p>Tunesiens fodboldlandshold, kendt som "Ørne af Karthago", er en af Afrikas mest traditionsrige fodboldnationer. Med en historie der strækker sig tilbage til 1928, har Tunesien markeret sig som en fast deltagere ved Afrikas Mesterskab (AFCON) og har kvalificeret sig til seks VM-slutrunder.</p>
<p>Tunesien var det første afrikanske hold til at vinde en kamp ved et VM, da de slog <a href="/mexico">Mexico</a> 3-1 i 1978. Siden har holdet fortsat med at udvikle sig og er i dag en af de mest respekterede nationer i afrikansk fodbold.</p>
<p>Med en stærk liga på hjemmebanen og spillere spredt over europæiske klubber kombinerer Tunesien teknisk dygtighed med taktisk disciplin og er altid en svær modstander i internationale turneringer.</p>`,
    body: `<h2>Tunesiens fodboldhistorie</h2>
<p>Tunesiens fodboldforbund (Fédération Tunisienne de Football) blev grundlagt i 1928, og holdet spillede sin første officielle kamp i 1957. Tunesien har siden udviklet sig til en af de mest succesfulde fodboldnationer i Nordafrika og på hele det afrikanske kontinent.</p>
<p>Den største bedrift i tunesisk fodboldhistorie er sejren ved AFCON i 2004, som blev afholdt på hjemmebane. Finalesejren over <a href="/marokko">Marokko</a> med 2-1 var kulminationen på årtiers arbejde med at udvikle tunesisk fodbold og markerede et højdepunkt for hele nationen.</p>

<h3>VM-historien</h3>
<p>Tunesien har deltaget i seks VM-slutrunder: 1978, 1998, 2002, 2006, 2018 og 2022. Ved VM 1978 i Argentina skrev holdet historie ved at slå Mexico 3-1 — den første sejr for et afrikansk hold ved et VM nogensinde. Denne milepæl er stadig en kilde til enorm stolthed i Tunesien.</p>
<p>Ved VM 2022 i Qatar leverede Tunesien endnu en historisk præstation med en 1-0-sejr over <a href="/frankrig">Frankrig</a> i gruppespillet. Selvom holdet ikke avancerede fra gruppen, viste sejren over de forsvarende verdensmestre, at tunesisk fodbold kan konkurrere med de allerbedste.</p>

<h3>AFCON-successer</h3>
<p>Udover triumfen i 2004 har Tunesien nået finalen ved AFCON i 1965 og 1996 og har regelmæssigt nået knockoutrunderne. Holdet er kendt for sin taktiske modenhed og evne til at spille disciplineret fodbold i de store turneringer.</p>
<p>Den tunesiske liga, med klubber som Espérance de Tunis og Club Africain, har produceret mange af landsholdets stjerner og har også haft succes i CAF Champions League, hvilket styrker det generelle niveau i tunesisk fodbold.</p>

<h2>Spillestil og identitet</h2>
<p>Tunesisk fodbold er præget af en blanding af nordafrikansk teknisk finesse og europæisk taktisk disciplin. Mange tunesiske trænere har en europæisk baggrund, og holdet spiller typisk en organiseret, defensivt stærk stil med hurtige omstillinger.</p>
<p>Spillere som Wahbi Khazri, Youssef Msakni og Aïssa Laïdouni har vist, at tunesiske spillere kan konkurrere på højeste niveau i europæisk klubfodbold. Den nye generation af spillere fortsætter med at imponere i ligaer i Frankrig, <a href="/tyskland">Tyskland</a> og <a href="/england">England</a>.</p>

<h2>Stade de Radès — hjemmebanen</h2>
<p>Tunesiens hjemmebane er Stade Olympique de Radès i forstaden Radès nær Tunis. Stadionet har en kapacitet på 60.000 tilskuere og var vært for AFCON 2004-finalen. Det er et af de mest imponerende stadioner i Nordafrika og skaber en intens atmosfære til landskampe.</p>

<h2>Aktuel status og fremtidsudsigter</h2>
<p>Tunesien er fortsat en af de stærkeste nationer i afrikansk fodbold og kæmper regelmæssigt om kvalifikation til VM og AFCON. Med en voksende pulje af talenter i europæiske klubber og en stærk indenlandsk liga ser fremtiden lovende ud for Ørne af Karthago.</p>
<p>Holdet sigter mod at bygge videre på de seneste VM-deltagelser og etablere sig som en fast deltager ved slutrunder. Den tunesiske fodboldkultur er dybt forankret i samfundet, og sporten nyder enorm popularitet i hele landet.</p>`,
    keyFacts: {
      fifaRanking: 41,
      nickname: "Ørne af Karthago (Les Aigles de Carthage)",
      coach: "Faouzi Benzarti",
      confederation: "CAF",
      founded: 1928,
      stadium: "Stade Olympique de Radès, Tunis",
      bestResult: "AFCON-vindere 2004",
      fifaCode: "TUN",
    },
    players: [
      { name: "Wahbi Khazri", position: "Angriber", club: "Montpellier", caps: 75, goals: 25 },
      { name: "Youssef Msakni", position: "Angriber", club: "Al-Arabi", caps: 90, goals: 18 },
      { name: "Aïssa Laïdouni", position: "Midtbane", club: "Union Berlin", caps: 35, goals: 2 },
      { name: "Ellyes Skhiri", position: "Midtbane", club: "Eintracht Frankfurt", caps: 45, goals: 3 },
      { name: "Dylan Bronn", position: "Forsvar", club: "Salernitana", caps: 50, goals: 2 },
      { name: "Hannibal Mejbri", position: "Midtbane", club: "Manchester United", caps: 20, goals: 1 },
      { name: "Mohamed Dräger", position: "Forsvar", club: "Luzern", caps: 40, goals: 2 },
      { name: "Aymen Dahmen", position: "Målmand", club: "Esperance", caps: 25, goals: 0 },
      { name: "Ali Abdi", position: "Forsvar", club: "Caen", caps: 30, goals: 1 },
      { name: "Seifeddine Jaziri", position: "Angriber", club: "Zamalek", caps: 25, goals: 6 },
    ],
    matches: [
      { date: "1978-06-02", opponent: "Mexico", score: "3-1", competition: "VM 1978 Gruppespil", result: "W" },
      { date: "2004-02-14", opponent: "Marokko", score: "2-1", competition: "AFCON 2004 Finale", result: "W" },
      { date: "2022-11-30", opponent: "Frankrig", score: "1-0", competition: "VM 2022 Gruppespil", result: "W" },
      { date: "2018-06-23", opponent: "Belgien", score: "2-5", competition: "VM 2018 Gruppespil", result: "L" },
      { date: "2022-11-26", opponent: "Australien", score: "0-1", competition: "VM 2022 Gruppespil", result: "L" },
      { date: "1998-06-15", opponent: "England", score: "0-2", competition: "VM 1998 Gruppespil", result: "L" },
    ],
    achievements: [
      "AFCON-vindere 2004",
      "Første afrikanske hold til at vinde VM-kamp (1978)",
      "6 VM-deltagelser",
      "AFCON-finalister 1965 og 1996",
      "Sejr over Frankrig ved VM 2022",
    ],
    faq: [
      {
        question: "Har Tunesien vundet Afrikas Mesterskab?",
        answer: "Ja, Tunesien vandt AFCON i 2004 på hjemmebane. I finalen slog de Marokko 2-1. Det er Tunesiens eneste AFCON-titel, men holdet har også nået finalen i 1965 og 1996.",
      },
      {
        question: "Hvor mange gange har Tunesien deltaget i VM?",
        answer: "Tunesien har deltaget i VM seks gange: 1978, 1998, 2002, 2006, 2018 og 2022. I 1978 blev Tunesien det første afrikanske hold til at vinde en kamp ved et VM.",
      },
      {
        question: "Hvem er Tunesiens bedste fodboldspiller?",
        answer: "Youssef Msakni og Wahbi Khazri er blandt de mest kendte tunesiske spillere i nyere tid. Historisk er spillere som Tarek Dhiab og Zoubeir Baya legender i tunesisk fodbold.",
      },
      {
        question: "Hvad er Tunesiens kaldenavn?",
        answer: "Tunesiens landshold kaldes 'Ørne af Karthago' (Les Aigles de Carthage), opkaldt efter den antikke by Karthago, der lå i det nuværende Tunesien.",
      },
      {
        question: "Hvilken konføderation tilhører Tunesien?",
        answer: "Tunesien tilhører CAF (Confederation of African Football) og konkurrerer i afrikanske kvalifikationer til VM og i AFCON (Afrikas Mesterskab).",
      },
    ],
  },

  graekenland: {
    tagline: "Europamestre 2004 — det ultimative eventyr",
    intro: `<p>Grækenlands fodboldlandshold skrev fodboldhistorie ved EM 2004 i <a href="/portugal">Portugal</a>, da holdet mod alle odds vandt Europamesterskabet. Det var en af de mest overraskende triumfer i international fodboldhistorie og cementerede Grækenlands plads i den sportslige bevidsthed for evigt.</p>
<p>Græsk fodbold har en lang tradition, men landsholdet har sjældent været blandt de store favoritter ved internationale turneringer. EM 2004-triumfen var desto mere bemærkelsesværdig, og under ledelse af den tyske træner Otto Rehhagel leverede holdet en mesterklasse i defensiv organisation og taktisk disciplin.</p>
<p>I dag kæmper Grækenland for at genfinde den succes, der definerede 2004-generationen, men fodbolden nyder fortsat stor popularitet i det græske samfund.</p>`,
    body: `<h2>Grækenlands fodboldhistorie</h2>
<p>Det græske fodboldforbund (HFF) blev grundlagt i 1926, og holdet har deltaget i international fodbold siden 1920'erne. I mange årtier var Grækenland en relativt ubetydelig kraft i europæisk fodbold, men landet havde altid en passioneret fodboldkultur med stærke klubber som Olympiacos, Panathinaikos og AEK Athen.</p>
<p>Grækenlands første store internationale præstation kom ved EM 1980, men holdet kvalificerede sig sjældent til store slutrunder. Det ændrede sig dramatisk i det nye årtusinde.</p>

<h3>VM 1994 — den første slutrunde</h3>
<p>Grækenland kvalificerede sig for første gang til VM i 1994 i USA. Oplevelsen var dog skuffende — holdet tabte alle tre gruppekampe mod <a href="/argentina">Argentina</a>, <a href="/nigeria">Nigeria</a> og <a href="/bulgarien">Bulgarien</a> uden at score et eneste mål. Men deltagelsen var i sig selv en milepæl for græsk fodbold.</p>

<h3>EM 2004 — eventyret i Portugal</h3>
<p>Den mest bemærkelsesværdige bedrift i græsk fodboldhistorie fandt sted ved EM 2004. Under ledelse af den tyske træner Otto Rehhagel ankom Grækenland som en af turneringens største outsidere. Holdet var noteret til odds på 150-1 for at vinde turneringen.</p>
<p>Alligevel besejrede Grækenland værtsnationen <a href="/portugal">Portugal</a> i åbningskampen med 2-1, slog <a href="/frankrig">Frankrig</a> 1-0 i kvartfinalen, besejrede <a href="/tjekkiet">Tjekkiet</a> 1-0 i semifinalen med et sølvmål af Traianos Dellas, og kronede det hele med en 1-0-sejr over Portugal i finalen. Angelos Charisteas scorede det afgørende mål i finalen med et hovedstød.</p>
<p>Rehhagels taktiske plan var enkel men genial: en ubrydelig defensiv, hårdt arbejde, og effektiv udnyttelse af dødbolde. Holdet havde ikke de store individuelle stjerner, men den kollektive indsats var overvældende.</p>

<h3>Tiden efter 2004</h3>
<p>Efter EM-triumfen formåede Grækenland ikke at fastholde det høje niveau. Holdet deltog ved VM 2010 og VM 2014, men præstationerne var blandede. Ved VM 2014 i <a href="/brasilien">Brasilien</a> nåede Grækenland ottendedelsfinalen, hvor holdet tabte på straffespark til Costa Rica.</p>
<p>Siden 2014 har Grækenland kæmpet med at kvalificere sig til store slutrunder og har oplevet en periode med genopbygning. Den græske liga har dog fortsat med at producere talentfulde spillere.</p>

<h2>Spillestil og identitet</h2>
<p>Græsk fodbold er traditionelt kendetegnet ved defensiv soliditet, fysisk styrke og en pragmatisk tilgang til spillet. EM 2004-holdet personificerede denne stil perfekt. I nyere tid har græske trænere forsøgt at modernisere spillestilen med mere boldbesiddelse og offensivt spil.</p>
<p>Den græske fodboldkultur er intens og passioneret. Klubfodbold nyder enorm popularitet, og rivaliserierne mellem de store Athen-klubber og Thessaloniki-klubberne er blandt de mest intense i europæisk fodbold.</p>

<h2>Aktuel status</h2>
<p>Grækenland arbejder på at genopbygge landsholdet med en ny generation af spillere. Talenter i europæiske topklubber giver håb om, at holdet kan kvalificere sig til kommende slutrunder og genopleve noget af den magi, der definerede 2004.</p>`,
    keyFacts: {
      fifaRanking: 48,
      nickname: "Piratskibet (To Piratiko)",
      coach: "Ivan Jovanović",
      confederation: "UEFA",
      founded: 1926,
      stadium: "OPAP Arena, Athen",
      bestResult: "Europamestre 2004",
      fifaCode: "GRE",
    },
    players: [
      { name: "Vangelis Pavlidis", position: "Angriber", club: "Benfica", caps: 30, goals: 10 },
      { name: "Giorgos Giakoumakis", position: "Angriber", club: "Atlanta United", caps: 25, goals: 8 },
      { name: "Odysseas Vlachodimos", position: "Målmand", club: "Nottingham Forest", caps: 35, goals: 0 },
      { name: "Konstantinos Tsimikas", position: "Forsvar", club: "Liverpool", caps: 25, goals: 1 },
      { name: "Petros Mantalos", position: "Midtbane", club: "AEK Athen", caps: 55, goals: 5 },
      { name: "Anastasios Bakasetas", position: "Midtbane", club: "Trabzonspor", caps: 50, goals: 10 },
      { name: "Manolis Siopis", position: "Midtbane", club: "Trabzonspor", caps: 25, goals: 1 },
      { name: "Pantelis Hatzidiakos", position: "Forsvar", club: "AZ Alkmaar", caps: 20, goals: 0 },
      { name: "Dimitris Pelkas", position: "Midtbane", club: "PAOK", caps: 30, goals: 3 },
      { name: "Georgios Masouras", position: "Angriber", club: "Olympiacos", caps: 15, goals: 2 },
    ],
    matches: [
      { date: "2004-07-04", opponent: "Portugal", score: "1-0", competition: "EM 2004 Finale", result: "W" },
      { date: "2004-06-25", opponent: "Frankrig", score: "1-0", competition: "EM 2004 Kvartfinale", result: "W" },
      { date: "2004-07-01", opponent: "Tjekkiet", score: "1-0", competition: "EM 2004 Semifinale", result: "W" },
      { date: "2004-06-12", opponent: "Portugal", score: "2-1", competition: "EM 2004 Gruppespil", result: "W" },
      { date: "2014-06-29", opponent: "Costa Rica", score: "1-1 (3-5 str.)", competition: "VM 2014 Ottendedelsfinale", result: "L" },
      { date: "2010-06-22", opponent: "Argentina", score: "0-2", competition: "VM 2010 Gruppespil", result: "L" },
    ],
    achievements: [
      "Europamestre 2004",
      "VM-ottendedelsfinale 2014",
      "3 VM-deltagelser (1994, 2010, 2014)",
      "4 EM-deltagelser",
      "Confederations Cup 2005",
    ],
    faq: [
      {
        question: "Hvornår vandt Grækenland EM?",
        answer: "Grækenland vandt EM i 2004 i Portugal. Holdet slog værtsnationen Portugal 1-0 i finalen med et mål af Angelos Charisteas. Det betragtes som en af de største overraskelser i fodboldhistorien.",
      },
      {
        question: "Hvem trænede Grækenland ved EM 2004?",
        answer: "Den tyske træner Otto Rehhagel trænede Grækenland ved EM 2004. Hans taktiske tilgang med fokus på defensiv soliditet og dødbolde var nøglen til den overraskende triumf.",
      },
      {
        question: "Har Grækenland deltaget i VM?",
        answer: "Ja, Grækenland har deltaget i VM tre gange: 1994 (USA), 2010 (Sydafrika) og 2014 (Brasilien). Det bedste resultat var ottendedelsfinalen i 2014.",
      },
      {
        question: "Hvem er Grækenlands bedste fodboldspiller?",
        answer: "Historisk er Theodoros Zagorakis, kaptajn ved EM 2004 og turneringens bedste spiller, en af de mest fremtrædende. Angelos Charisteas, der scorede finalescoringen, er også ikonisk.",
      },
      {
        question: "Hvad er Grækenlands kaldenavn i fodbold?",
        answer: "Grækenlands landshold kaldes 'To Piratiko' (Piratskibet). Kaldenavnet refererer til holdets kamp-mentalitet og evne til at overvinde stærkere modstandere.",
      },
    ],
  },

  ungarn: {
    tagline: "De Gyldne Magyarer — legender fra fodboldens guldalder",
    intro: `<p>Ungarns fodboldlandshold har en af de mest glorværdige historier i international fodbold. I 1950'erne var Ungarn verdens bedste hold med den legendariske "Aranycsapat" (Det Gyldne Hold), som revolutionerede fodboldspillet og inspirerede generationer af spillere og trænere.</p>
<p>Med legender som Ferenc Puskás, Sándor Kocsis og Nándor Hidegkuti dominerede Ungarn international fodbold i en periode, hvor holdet var ubesejret i 31 kampe og knuste <a href="/england">England</a> 6-3 på Wembley i 1953 — det første nederlag for England på hjemmebane til et hold uden for De Britiske Øer.</p>
<p>I dag har Ungarn oplevet en renæssance under landstræner Marco Rossi og har kvalificeret sig til de seneste EM-slutrunder, hvor holdet har leveret stærke præstationer og genoplivet den ungarske fodboldstolthed.</p>`,
    body: `<h2>Ungarns fodboldhistorie</h2>
<p>Det ungarske fodboldforbund (MLSZ) blev grundlagt i 1901, og Ungarn var en af pionererne i europæisk fodbold. Holdet vandt OL-guld i 1952 og nåede VM-finalen i 1938 og 1954, hvilket markerede Ungarn som en af verdens førende fodboldnationer.</p>

<h3>De Gyldne Magyarer (1950-1956)</h3>
<p>Perioden fra 1950 til 1956 var guldaldren for ungarsk fodbold. Under træner Gusztáv Sebes spillede Ungarn en revolutionerende form for fodbold med flydende positioner og total angrebsfodbold. Holdet gik 31 kampe ubesejret fra 1950 til 1954.</p>
<p>Den mest ikoniske kamp var den historiske 6-3-sejr over <a href="/england">England</a> på Wembley den 25. november 1953 — "Århundredets Kamp". Ferenc Puskás og hans holdkammerater demonstrerede en spillestil, der var årtier forud for sin tid. Returkampen i Budapest endte 7-1 til Ungarn.</p>
<p>Ved VM 1954 i Schweiz var Ungarn den absolutte favorit. Holdet vandt alle kampe overbevisende, herunder en 8-3-sejr over <a href="/tyskland">Vesttyskland</a> i gruppespillet. Men i finalen — "Miraklet i Bern" — tabte Ungarn overraskende 2-3 til det samme vesttyske hold. Det anses for en af de største overraskelser i VM-historien.</p>

<h3>Nedgangen og moderne tid</h3>
<p>Den ungarske revolution i 1956 splittede holdet, da flere spillere — herunder Puskás — flygtede til udlandet. Ungarn forblev konkurrencedygtige i 1960'erne med en tredjeplads ved EM 1964 og deltagelse i VM 1966, men glansen fra 1950'erne vendte aldrig helt tilbage.</p>
<p>Fra 1986 til 2016 kvalificerede Ungarn sig ikke til en eneste stor slutrunde — en bemærkelsesværdig nedtur for en nation med en så stolt historie. Det var først under Marco Rossi, at holdet genfandt vejen til slutrunderne.</p>

<h3>Renæssancen under Marco Rossi</h3>
<p>Ved EM 2021 overraskede Ungarn med stærke præstationer i "dødsgruppen" mod <a href="/frankrig">Frankrig</a>, <a href="/tyskland">Tyskland</a> og <a href="/portugal">Portugal</a>. Holdet spillede uafgjort 1-1 mod Frankrig og 2-2 mod Tyskland i dramatiske kampe. Ved EM 2024 i Tyskland fortsatte Ungarn med at vise, at holdet igen er konkurrencedygtigt på europæisk topniveau.</p>

<h2>Spillestil og identitet</h2>
<p>Historisk var ungarsk fodbold synonym med teknisk brillans og offensiv dristighed. Det moderne ungarske hold under Rossi spiller en mere pragmatisk stil med stærk defensiv organisation og farlige omstillinger, men den tekniske tradition lever videre.</p>
<p>Puskás Arena i Budapest, opkaldt efter den legendariske Ferenc Puskás, er et af Europas mest moderne stadioner og skaber en intens atmosfære til landskampe.</p>

<h2>Aktuel status</h2>
<p>Ungarn er tilbage som en respekteret kraft i europæisk fodbold. Med spillere som Dominik Szoboszlai (Liverpool), Willi Orbán, Roland Sallai og Péter Gulácsi har holdet kvalitet til at konkurrere med de bedste i Europa. Den ungarske fodboldrenæssance giver håb om endnu større succeser i fremtiden.</p>`,
    keyFacts: {
      fifaRanking: 30,
      nickname: "Magyarerne (Magyars)",
      coach: "Marco Rossi",
      confederation: "UEFA",
      founded: 1901,
      stadium: "Puskás Arena, Budapest",
      bestResult: "VM-finalister 1938 og 1954, OL-guld 1952",
      fifaCode: "HUN",
    },
    players: [
      { name: "Dominik Szoboszlai", position: "Midtbane", club: "Liverpool", caps: 40, goals: 12 },
      { name: "Péter Gulácsi", position: "Målmand", club: "RB Leipzig", caps: 70, goals: 0 },
      { name: "Willi Orbán", position: "Forsvar", club: "RB Leipzig", caps: 55, goals: 5 },
      { name: "Roland Sallai", position: "Angriber", club: "Freiburg", caps: 55, goals: 14 },
      { name: "Ádám Szalai", position: "Angriber", club: "Pensioneret", caps: 86, goals: 26 },
      { name: "Attila Fiola", position: "Forsvar", club: "Fehérvár", caps: 50, goals: 3 },
      { name: "Zsolt Nagy", position: "Midtbane", club: "Puskás Akadémia", caps: 30, goals: 2 },
      { name: "Ádám Lang", position: "Forsvar", club: "Omonia", caps: 60, goals: 1 },
      { name: "Barnabás Varga", position: "Angriber", club: "Ferencváros", caps: 20, goals: 5 },
      { name: "Milos Kerkez", position: "Forsvar", club: "Bournemouth", caps: 20, goals: 1 },
    ],
    matches: [
      { date: "1953-11-25", opponent: "England", score: "6-3", competition: "Venskabskamp", result: "W" },
      { date: "1954-07-04", opponent: "Vesttyskland", score: "2-3", competition: "VM 1954 Finale", result: "L" },
      { date: "2021-06-19", opponent: "Frankrig", score: "1-1", competition: "EM 2021 Gruppespil", result: "D" },
      { date: "2021-06-23", opponent: "Tyskland", score: "2-2", competition: "EM 2021 Gruppespil", result: "D" },
      { date: "1954-06-17", opponent: "Vesttyskland", score: "8-3", competition: "VM 1954 Gruppespil", result: "W" },
      { date: "2024-06-19", opponent: "Tyskland", score: "0-2", competition: "EM 2024 Gruppespil", result: "L" },
    ],
    achievements: [
      "VM-finalister 1938 og 1954",
      "OL-guld 1952, 1964, 1968",
      "31 kampe ubesejret (1950-1954)",
      "6-3-sejr over England på Wembley 1953",
      "EM-tredjeplads 1964",
      "9 VM-deltagelser",
    ],
    faq: [
      {
        question: "Har Ungarn vundet VM?",
        answer: "Nej, Ungarn har aldrig vundet VM, men holdet har nået finalen to gange: i 1938 (tab til Italien) og i 1954 (tab til Vesttyskland i det berømte 'Mirakel i Bern'). I 1950'erne var Ungarn verdens bedste hold.",
      },
      {
        question: "Hvem var Ferenc Puskás?",
        answer: "Ferenc Puskás er Ungarns største fodboldspiller nogensinde. Han scorede 84 mål i 85 landskampe og var nøglespiller i 'Det Gyldne Hold' i 1950'erne. FIFA's pris for årets flotteste mål er opkaldt efter ham.",
      },
      {
        question: "Hvad var 'Århundredets Kamp'?",
        answer: "Det refererer til Ungarns 6-3-sejr over England på Wembley i november 1953. Det var første gang, England tabte en hjemmekamp til et hold uden for De Britiske Øer. Kampen revolutionerede synet på moderne fodbold.",
      },
      {
        question: "Hvem er Ungarns landstræner?",
        answer: "Marco Rossi, en italiensk træner, har været Ungarns landstræner siden 2018. Han har ført holdet tilbage til store slutrunder og revitaliseret ungarsk landsholdsfodbold.",
      },
      {
        question: "Hvornår kvalificerede Ungarn sig senest til en slutrunde?",
        answer: "Ungarn kvalificerede sig til EM 2024 i Tyskland efter en lang periode uden slutrundedeltagelse (1986-2016). Holdet deltog også i EM 2021, hvor de leverede stærke præstationer.",
      },
    ],
  },

  japan: {
    tagline: "Asiens fodboldstormagt — Samurai Blue",
    intro: `<p>Japans fodboldlandshold, kendt som "Samurai Blue", er en af de mest succesfulde og konsistente nationer i asiatisk fodbold. Siden professionaliseringen af japansk fodbold med J-League i 1993 har Japan gennemgået en bemærkelsesværdig transformation fra fodboldmæssig ubetydelighed til en fast VM-deltager og asiatisk stormagt.</p>
<p>Japan har kvalificeret sig til alle VM-slutrunder siden 1998 og har nået ottendedelsfinalen ved flere lejligheder. Ved VM 2022 i Qatar overraskede holdet hele verden med sejre over <a href="/tyskland">Tyskland</a> og <a href="/spanien">Spanien</a> i gruppespillet — to af verdens mest dekorerede fodboldnationer.</p>
<p>Med en voksende tilstedeværelse i Europas topligaer og en sofistikeret taktisk tilgang er Japan ikke længere blot en asiatisk kraft, men et hold der kan true de allerstørste på verdensplan.</p>`,
    body: `<h2>Japans fodboldhistorie</h2>
<p>Det japanske fodboldforbund (JFA) blev grundlagt i 1921, men japansk fodbold var i mange årtier overskygget af baseball og andre sportsgrene. Det var først med oprettelsen af J-League i 1993, at professionel fodbold for alvor slog igennem i Japan.</p>
<p>Transformationen var dramatisk. Fra at være en relativ ukendt fodboldnation i 1980'erne udviklede Japan sig hurtigt til Asiens førende fodboldland. Kvalifikationen til VM 1998 i <a href="/frankrig">Frankrig</a> var en milepæl, og som medvært ved VM 2002 nåede Japan ottendedelsfinalen.</p>

<h3>VM-historien</h3>
<p>Japan har deltaget i alle VM-slutrunder siden 1998 — en imponerende konsistens. Højdepunkterne inkluderer:</p>
<ul>
<li>VM 2002 (hjemmebane): Ottendedelsfinale, besejret af <a href="/tyrkiet">Tyrkiet</a></li>
<li>VM 2010: Ottendedelsfinale, tab til Paraguay på straffespark</li>
<li>VM 2018: Ottendedelsfinale, dramatisk 2-3-tab til <a href="/belgien">Belgien</a> efter at have ført 2-0</li>
<li>VM 2022: Sejre over <a href="/tyskland">Tyskland</a> (2-1) og <a href="/spanien">Spanien</a> (2-1) i gruppespillet, tab til <a href="/kroatien">Kroatien</a> i ottendedelsfinalen</li>
</ul>
<p>VM 2018-kampen mod Belgien er særligt berømt — og berygtet. Japan førte 2-0 og var blot minutter fra kvartfinalen, da Belgien scorede tre mål i de sidste 20 minutter, herunder det afgørende mål i overtiden på en kontra.</p>

<h3>VM 2022 — den nye guldalder</h3>
<p>Ved VM 2022 i Qatar demonstrerede Japan, at holdet kan besejre absolutte topnationer. Sejrene over Tyskland og Spanien var ikke held — de var resultatet af fremragende taktisk forberedelse, fantastisk holdånd og individuel kvalitet fra spillere i Europas bedste ligaer.</p>
<p>Træner Hajime Moriyasu udnyttede et system med taktiske skift mellem boldfaser, der forvirrede modstanderne. Japans evne til at komme bagud og vende kampe blev et kendetegn ved turneringen.</p>

<h3>Asiatisk dominans</h3>
<p>Japan har vundet Asian Cup fire gange (1992, 2000, 2004, 2011) og er den mest succesfulde nation i turneringens historie. Holdet er også en fast deltager i Copa América som inviteret hold, hvilket viser den voksende respekt for japansk fodbold globalt.</p>

<h2>Spillestil og identitet</h2>
<p>Japansk fodbold er kendetegnet ved teknisk perfektion, hurtige pasningskombinationer, disciplineret presfodbold og en imponerende taktisk fleksibilitet. Japanske spillere er kendt for deres arbejdsomhed, ydmyghed og evne til at tilpasse sig forskellige spillesystemer.</p>
<p>Den japanske fodboldfilosofi er inspireret af både sydamerikansk teknisk tradition og europæisk taktisk stringens. Resultatet er en unik spillestil, der kombinerer det bedste fra begge verdener.</p>

<h2>Aktuel status og fremtidsudsigter</h2>
<p>Japan har aldrig haft flere spillere i Europas topligaer end nu. Spillere som Takefusa Kubo, Kaoru Mitoma, Takehiro Tomiyasu og Wataru Endo er faste i topklubber, og den næste generation ser endnu stærkere ud. Japans erklærede mål er at vinde VM inden 2050 — og med den nuværende udviklingskurve er det ikke urealistisk.</p>`,
    keyFacts: {
      fifaRanking: 15,
      nickname: "Samurai Blue",
      coach: "Hajime Moriyasu",
      confederation: "AFC",
      founded: 1921,
      stadium: "Saitama Stadium, Saitama",
      bestResult: "VM-ottendedelsfinale (4 gange), Asian Cup-vindere (4 gange)",
      fifaCode: "JPN",
    },
    players: [
      { name: "Takefusa Kubo", position: "Angriber", club: "Real Sociedad", caps: 35, goals: 5 },
      { name: "Kaoru Mitoma", position: "Angriber", club: "Brighton", caps: 30, goals: 7 },
      { name: "Takehiro Tomiyasu", position: "Forsvar", club: "Arsenal", caps: 35, goals: 1 },
      { name: "Wataru Endo", position: "Midtbane", club: "Liverpool", caps: 55, goals: 3 },
      { name: "Daichi Kamada", position: "Midtbane", club: "Crystal Palace", caps: 40, goals: 8 },
      { name: "Ritsu Doan", position: "Angriber", club: "Freiburg", caps: 35, goals: 8 },
      { name: "Junya Ito", position: "Angriber", club: "Reims", caps: 45, goals: 7 },
      { name: "Ko Itakura", position: "Forsvar", club: "Borussia Mönchengladbach", caps: 25, goals: 1 },
      { name: "Shuichi Gonda", position: "Målmand", club: "Shimizu S-Pulse", caps: 45, goals: 0 },
      { name: "Hidemasa Morita", position: "Midtbane", club: "Sporting CP", caps: 30, goals: 2 },
      { name: "Ao Tanaka", position: "Midtbane", club: "Leeds United", caps: 30, goals: 4 },
    ],
    matches: [
      { date: "2022-11-23", opponent: "Tyskland", score: "2-1", competition: "VM 2022 Gruppespil", result: "W" },
      { date: "2022-12-01", opponent: "Spanien", score: "2-1", competition: "VM 2022 Gruppespil", result: "W" },
      { date: "2018-07-02", opponent: "Belgien", score: "2-3", competition: "VM 2018 Ottendedelsfinale", result: "L" },
      { date: "2022-12-05", opponent: "Kroatien", score: "1-1 (1-3 str.)", competition: "VM 2022 Ottendedelsfinale", result: "L" },
      { date: "2002-06-18", opponent: "Tyrkiet", score: "0-1", competition: "VM 2002 Ottendedelsfinale", result: "L" },
      { date: "2011-01-29", opponent: "Australien", score: "1-0", competition: "Asian Cup 2011 Finale", result: "W" },
    ],
    achievements: [
      "Asian Cup-vindere 1992, 2000, 2004, 2011",
      "7 VM-deltagelser i træk (1998-2022)",
      "VM-ottendedelsfinale 2002, 2010, 2018, 2022",
      "Sejre over Tyskland og Spanien ved VM 2022",
      "OL-bronze 2020 (herrernes turnering)",
    ],
    faq: [
      {
        question: "Hvor mange gange har Japan deltaget i VM?",
        answer: "Japan har deltaget i VM syv gange i træk siden 1998. Holdet har nået ottendedelsfinalen fire gange (2002, 2010, 2018, 2022) og har aldrig nået kvartfinalen.",
      },
      {
        question: "Har Japan vundet Asian Cup?",
        answer: "Ja, Japan er den mest succesfulde nation i Asian Cup-historien med fire titler: 1992, 2000, 2004 og 2011. Holdet er den dominerende kraft i asiatisk fodbold.",
      },
      {
        question: "Hvem er Japans bedste fodboldspiller?",
        answer: "Historisk er Hidetoshi Nakata og Shunsuke Nakamura blandt de største. I den aktuelle generation er Takefusa Kubo og Kaoru Mitoma blandt de mest profilerede japanske spillere i europæisk fodbold.",
      },
      {
        question: "Hvad er J-League?",
        answer: "J-League er Japans professionelle fodboldliga, grundlagt i 1993. Ligaens oprettelse var afgørende for udviklingen af japansk fodbold og transformerede Japan fra en fodbold-bagudnation til en asiatisk stormagt.",
      },
      {
        question: "Hvad er Japans mål i fodbold?",
        answer: "Japan har et erklæret mål om at vinde VM inden 2050. Med den nuværende udvikling, hvor stadig flere japanske spillere spiller i Europas topligaer, anses målet for realistisk.",
      },
    ],
  },

  usa: {
    tagline: "Soccer's voksende supermagt — VM 2026 på hjemmebane",
    intro: `<p>USA's fodboldlandshold har gennemgået en bemærkelsesværdig transformation fra at være en fodboldmæssig parentes til at blive en stigende kraft i international fodbold. Med VM 2026 på hjemmebane (sammen med <a href="/canada">Canada</a> og <a href="/mexico">Mexico</a>) står amerikansk fodbold over for sin hidtil største mulighed.</p>
<p>Historisk set har USA haft overraskende succeser ved VM, herunder en semifinaleplads i det allerførste VM i 1930 og en berømt sejr over <a href="/england">England</a> ved VM 1950. I den moderne æra har holdet regelmæssigt kvalificeret sig til VM og nået ottendedelsfinalen flere gange.</p>
<p>Den nuværende generation af amerikanske spillere er den mest talentfulde nogensinde, med stjerner i Europas største klubber. Fremtiden for amerikansk fodbold har aldrig set lysere ud.</p>`,
    body: `<h2>USA's fodboldhistorie</h2>
<p>US Soccer Federation blev grundlagt i 1913, og USA var en af de 13 deltagere ved det første VM i 1930 i <a href="/uruguay">Uruguay</a>. Holdet nåede overraskende semifinalen — et resultat der stadig er USA's bedste VM-præstation.</p>
<p>Ved VM 1950 i <a href="/brasilien">Brasilien</a> skabte USA en af de største sensationer i fodboldhistorien med en 1-0-sejr over <a href="/england">England</a>. Joe Gaetjens' mål er stadig et af de mest berømte i VM-historien. Men efter dette fulgte årtier, hvor fodbold (soccer) var en niche-sport i USA.</p>

<h3>VM 1994 og MLS-æraen</h3>
<p>VM 1994 på hjemmebane var et vendepunkt for amerikansk fodbold. Turneringen tiltrak rekordstore tilskuertal og førte til oprettelsen af Major League Soccer (MLS) i 1996. USA nåede ottendedelsfinalen og tabte til <a href="/brasilien">Brasilien</a>, men turneringens kulturelle påvirkning var endnu vigtigere end resultaterne.</p>
<p>MLS har siden vokset til en af verdens mest populære ligaer og har tiltrukket internationale stjerner som David Beckham, Thierry Henry og mere nyligt Lionel Messi. Ligaen har også udviklet et stærkt akademisystem, der producerer talenter til europæiske topklubber.</p>

<h3>VM 2002 — det store gennembrud</h3>
<p>Ved VM 2002 i Japan/Sydkorea leverede USA sin bedste moderne VM-præstation. Holdet slog <a href="/portugal">Portugal</a> 3-2 i gruppespillet og besejrede <a href="/mexico">Mexico</a> 2-0 i ottendedelsfinalen, før de tabte 0-1 til <a href="/tyskland">Tyskland</a> i kvartfinalen. Spillere som Landon Donovan, Claudio Reyna og Brad Friedel blev nationale helte.</p>

<h3>Den nye gyldne generation</h3>
<p>Den nuværende generation af amerikanske spillere er uden fortilfælde i landets fodboldhistorie. Christian Pulisic (AC Milan), Weston McKennie (Juventus), Tyler Adams, Giovanni Reyna og Yunus Musah spiller alle i Europas topligaer. Ved VM 2022 i Qatar nåede USA ottendedelsfinalen, hvor holdet tabte til <a href="/holland">Holland</a>.</p>
<p>Denne generation repræsenterer en fundamental ændring: amerikanske spillere søger nu til Europa som teenagere og udvikler sig i verdens bedste ligaer fra en ung alder.</p>

<h2>VM 2026 — den ultimative mulighed</h2>
<p>VM 2026, som afholdes i USA, Canada og Mexico, bliver den største sportsbegivenhed i USA's historie med 48 hold. For det amerikanske landshold er det en enestående chance for at præstere foran hjemmepublikummet og tage det næste skridt som fodboldnation.</p>

<h2>Spillestil og identitet</h2>
<p>Amerikansk fodbold har udviklet sig fra en fysisk, atletisk stil til en mere teknisk og taktisk sofistikeret tilgang. Den nuværende generation kombinerer amerikansk atleticisme med europæisk taktisk forståelse, hvilket giver holdet en unik profil.</p>
<p>USA's kvindelandshold er verdens mest succesfulde med fire VM-titler, og succesen på kvindesiden har været med til at drive interessen for fodbold generelt i landet.</p>

<h2>Aktuel status</h2>
<p>Med VM 2026 på hjemmebane og den mest talentfulde spillergeneration nogensinde er forventningerne til amerikansk fodbold højere end nogensinde. Målet er mindst en kvartfinale, og med hjemmebanefordelen er alt muligt.</p>`,
    keyFacts: {
      fifaRanking: 11,
      nickname: "The Stars and Stripes / USMNT",
      coach: "Mauricio Pochettino",
      confederation: "CONCACAF",
      founded: 1913,
      stadium: "Diverse stadioner (ingen fast hjemmebane)",
      bestResult: "VM-semifinale 1930, VM-kvartfinale 2002",
      fifaCode: "USA",
    },
    players: [
      { name: "Christian Pulisic", position: "Angriber", club: "AC Milan", caps: 70, goals: 30 },
      { name: "Weston McKennie", position: "Midtbane", club: "Juventus", caps: 50, goals: 10 },
      { name: "Tyler Adams", position: "Midtbane", club: "Bournemouth", caps: 35, goals: 1 },
      { name: "Giovanni Reyna", position: "Midtbane", club: "Borussia Dortmund", caps: 25, goals: 4 },
      { name: "Yunus Musah", position: "Midtbane", club: "AC Milan", caps: 35, goals: 1 },
      { name: "Sergiño Dest", position: "Forsvar", club: "PSV", caps: 30, goals: 2 },
      { name: "Matt Turner", position: "Målmand", club: "Nottingham Forest", caps: 30, goals: 0 },
      { name: "Tim Weah", position: "Angriber", club: "Juventus", caps: 35, goals: 5 },
      { name: "Chris Richards", position: "Forsvar", club: "Crystal Palace", caps: 15, goals: 0 },
      { name: "Brenden Aaronson", position: "Midtbane", club: "Leeds United", caps: 35, goals: 5 },
      { name: "Folarin Balogun", position: "Angriber", club: "Monaco", caps: 15, goals: 3 },
    ],
    matches: [
      { date: "1930-07-13", opponent: "Belgien", score: "3-0", competition: "VM 1930 Semifinale", result: "W" },
      { date: "1950-06-29", opponent: "England", score: "1-0", competition: "VM 1950 Gruppespil", result: "W" },
      { date: "2002-06-17", opponent: "Mexico", score: "2-0", competition: "VM 2002 Ottendedelsfinale", result: "W" },
      { date: "2002-06-05", opponent: "Portugal", score: "3-2", competition: "VM 2002 Gruppespil", result: "W" },
      { date: "2002-06-21", opponent: "Tyskland", score: "0-1", competition: "VM 2002 Kvartfinale", result: "L" },
      { date: "2022-12-03", opponent: "Holland", score: "1-3", competition: "VM 2022 Ottendedelsfinale", result: "L" },
    ],
    achievements: [
      "VM-semifinale 1930",
      "VM-kvartfinale 2002",
      "CONCACAF Gold Cup-vindere (7 gange)",
      "11 VM-deltagelser",
      "CONCACAF Nations League-vindere 2021, 2024",
      "VM 2026-værtsland",
    ],
    faq: [
      {
        question: "Hvor mange gange har USA deltaget i VM?",
        answer: "USA har deltaget i VM 11 gange. Holdet var med ved det første VM i 1930 og har kvalificeret sig regelmæssigt i den moderne æra. USA manglede dog VM 2018 efter et chokerende nederlag til Trinidad og Tobago.",
      },
      {
        question: "Hvem er USA's bedste fodboldspiller?",
        answer: "Christian Pulisic er den mest fremtrædende amerikanske spiller i dag. Historisk er Landon Donovan og Clint Dempsey blandt de mest ikoniske. Pulisic kaldes ofte 'Captain America' for sin betydning for holdet.",
      },
      {
        question: "Hvornår er VM 2026?",
        answer: "VM 2026 afholdes i USA, Canada og Mexico i sommeren 2026. Det bliver det første VM med 48 hold, og USA er automatisk kvalificeret som værtsland.",
      },
      {
        question: "Hvad er MLS?",
        answer: "Major League Soccer (MLS) er den professionelle fodboldliga i USA og Canada, grundlagt i 1996 efter VM 1994. Ligaen er vokset markant og tiltrækker nu internationale stjernespillere.",
      },
      {
        question: "Hvorfor kalder amerikanerne det 'soccer'?",
        answer: "Ordet 'soccer' stammer faktisk fra England — det er en forkortelse af 'association football'. Amerikanerne bruger 'soccer' for at skelne det fra 'football' (amerikansk fodbold).",
      },
    ],
  },

  "bosnien-hercegovina": {
    tagline: "Den gyldne generation — fra krigens aske til VM",
    intro: `<p>Bosnien-Hercegovinas fodboldlandshold er en relativt ung nation i international fodbold, men holdet har allerede markeret sig med en historisk VM-kvalifikation i 2014. For et land, der blev hærget af krig i 1990'erne, er landsholdets succeser et symbol på national genopbygning og sammenhold.</p>
<p>Med spillere som Edin Džeko, Miralem Pjanić og Asmir Begović har Bosnien produceret verdensklassespillere, der har strålat i de største europæiske klubber. Den bosniske fodbold er kendetegnet ved teknisk kvalitet, fysisk styrke og en brændende passion.</p>
<p>Holdet kæmper fortsat om kvalifikation til store slutrunder og repræsenterer et multietnisk land, hvor fodbold fungerer som en sjælden samlende kraft.</p>`,
    body: `<h2>Bosnien-Hercegovinas fodboldhistorie</h2>
<p>Bosnien-Hercegovinas fodboldforbund blev grundlagt i 1992 efter landets uafhængighed fra Jugoslavien. Holdet spillede sin første officielle kamp i 1995, efter Bosnienkrigens afslutning. At bygge et landshold fra bunden i et krigsramt land var en enorm udfordring, men fodbolden blev en vigtig del af den nationale genopbygning.</p>

<h3>De tidlige år og opbygningen</h3>
<p>I de første år efter krigen kæmpede Bosnien med at etablere sig i international fodbold. Infrastrukturen var ødelagt, og mange talentfulde spillere med bosnisk baggrund spillede allerede for andre lande, herunder det tidligere Jugoslavien, <a href="/kroatien">Kroatien</a> og <a href="/serbien">Serbien</a>.</p>
<p>Langsomt begyndte holdet at finde sin identitet, og med fremkomsten af talentfulde spillere som Edin Džeko, Miralem Pjanić og Zvjezdan Misimović voksede Bosnien til en respektabel kraft i europæisk fodbold.</p>

<h3>VM 2014 — det historiske gennembrud</h3>
<p>Den største bedrift i bosnisk fodboldhistorie kom i 2013, da holdet kvalificerede sig til VM 2014 i <a href="/brasilien">Brasilien</a>. Under ledelse af træner Safet Sušić vandt Bosnien sin kvalifikationsgruppe foran <a href="/graekenland">Grækenland</a> og var dermed klar til sin første VM-slutrunde nogensinde.</p>
<p>Kvalifikationen udløste vilde fejringer i hele Bosnien-Hercegovina og blev set som et symbol på, hvad landet kunne opnå, når det stod sammen. Ved selve VM-slutrunden tabte Bosnien til <a href="/argentina">Argentina</a> og Nigeria, men vandt den sidste gruppekamp 3-1 over <a href="/iran">Iran</a> — den første VM-sejr i landets historie.</p>

<h3>Edin Džeko — den nationale helt</h3>
<p>Edin Džeko er uden tvivl Bosniens største fodboldspiller. Med en karriere der har inkluderet Wolfsburg, Manchester City, Roma og Inter, har Džeko vist verdensklasse i de største ligaer. Han er landsholdets topscorer med over 65 mål og en national helt, der transcenderer etniske og religiøse skel.</p>

<h2>Spillestil og identitet</h2>
<p>Bosnisk fodbold er præget af den balkanske tradition med teknisk dygtighed, kreativitet og fysisk hårdhed. Holdet har produceret fremragende midtbanespillere og angribere, og spillestilen kombinerer sydøsteuropæisk flair med en hårdtarbejdende mentalitet.</p>
<p>Bilino Polje-stadionet i Zenica er Bosniens hjemmebane og er kendt for sin intense atmosfære. De bosniske fans skaber en utrolig stemning, og hjemmekampe i Zenica er altid en svær opgave for besøgende hold.</p>

<h2>Aktuel status</h2>
<p>Bosnien har endnu ikke formået at gentage VM 2014-succesen og har ikke kvalificeret sig til en stor slutrunde siden. Men med en fortsat stærk spillerproduktion og en lidenskabelig fanbase er der håb om, at holdet snart kan vende tilbage til den store scene.</p>`,
    keyFacts: {
      fifaRanking: 58,
      nickname: "Drager (Zmajevi)",
      coach: "Sergej Barbarez",
      confederation: "UEFA",
      founded: 1992,
      stadium: "Bilino Polje, Zenica",
      bestResult: "VM-gruppespil 2014",
      fifaCode: "BIH",
    },
    players: [
      { name: "Edin Džeko", position: "Angriber", club: "Fenerbahçe", caps: 135, goals: 65 },
      { name: "Miralem Pjanić", position: "Midtbane", club: "Sharjah FC", caps: 115, goals: 15 },
      { name: "Asmir Begović", position: "Målmand", club: "Queens Park Rangers", caps: 65, goals: 0 },
      { name: "Sead Kolašinac", position: "Forsvar", club: "Atalanta", caps: 50, goals: 1 },
      { name: "Anel Ahmedhodžić", position: "Forsvar", club: "Sheffield United", caps: 20, goals: 2 },
      { name: "Edin Višća", position: "Midtbane", club: "Trabzonspor", caps: 50, goals: 8 },
      { name: "Ermedin Demirović", position: "Angriber", club: "VfB Stuttgart", caps: 25, goals: 6 },
      { name: "Armin Hodžić", position: "Angriber", club: "Konyaspor", caps: 15, goals: 3 },
      { name: "Nikola Vasilj", position: "Målmand", club: "St. Pauli", caps: 15, goals: 0 },
      { name: "Benjamin Tahirović", position: "Midtbane", club: "Ajax", caps: 15, goals: 0 },
    ],
    matches: [
      { date: "2014-06-21", opponent: "Nigeria", score: "0-1", competition: "VM 2014 Gruppespil", result: "L" },
      { date: "2014-06-25", opponent: "Iran", score: "3-1", competition: "VM 2014 Gruppespil", result: "W" },
      { date: "2014-06-15", opponent: "Argentina", score: "1-2", competition: "VM 2014 Gruppespil", result: "L" },
      { date: "2013-10-15", opponent: "Litauen", score: "4-1", competition: "VM 2014-kvalifikation", result: "W" },
      { date: "2019-10-15", opponent: "Italien", score: "0-3", competition: "EM 2020-kvalifikation", result: "L" },
    ],
    achievements: [
      "VM-debut 2014",
      "Første VM-sejr (3-1 over Iran, 2014)",
      "VM 2014-kvalifikation som gruppetvinder",
      "Edin Džeko — 65+ landskampmål",
      "Højeste FIFA-rangering: 13 (2013)",
    ],
    faq: [
      {
        question: "Har Bosnien deltaget i VM?",
        answer: "Ja, Bosnien-Hercegovina deltog i VM for første og eneste gang i 2014 i Brasilien. Holdet tabte til Argentina og Nigeria, men vandt 3-1 over Iran for sin første VM-sejr.",
      },
      {
        question: "Hvem er Bosniens bedste fodboldspiller?",
        answer: "Edin Džeko er Bosniens mest berømte spiller. Han er landsholdets topscorer med over 65 mål og har haft en strålende karriere i Manchester City, Roma og Inter.",
      },
      {
        question: "Hvornår blev Bosniens fodboldforbund grundlagt?",
        answer: "Bosnien-Hercegovinas fodboldforbund blev grundlagt i 1992 efter uafhængigheden. Holdet spillede sin første officielle kamp i 1995 efter krigens afslutning.",
      },
      {
        question: "Hvad er Bosniens kaldenavn?",
        answer: "Bosnien-Hercegovinas landshold kaldes 'Zmajevi' (Dragerne). Kaldenavnet refererer til Husein Gradaščević, en historisk bosnisk leder kendt som 'Dragen af Bosnien'.",
      },
      {
        question: "Hvor spiller Bosnien hjemmekampe?",
        answer: "Bosnien spiller de fleste hjemmekampe på Bilino Polje-stadionet i Zenica. Stadionet er kendt for sin intense atmosfære og er en festning for hjemmeholdet.",
      },
    ],
  },

  mexico: {
    tagline: "El Tri — Latinamerikas mest passionerede fodboldnation",
    intro: `<p>Mexicos fodboldlandshold, kendt som "El Tri", er en af de mest succesfulde og populære fodboldnationer i verden. Med en lidenskabelig fanbase, en rig fodboldtradition og en imponerende VM-historie er Mexico en central figur i international fodbold.</p>
<p>Mexico har kvalificeret sig til 17 VM-slutrunder og har været vært for turneringen to gange (1970 og 1986). Holdet er den dominerende kraft i CONCACAF-regionen og har vundet Gold Cup rekordmange gange.</p>
<p>Med VM 2026 på hjemmebane (sammen med <a href="/usa">USA</a> og <a href="/canada">Canada</a>) står Mexico foran en historisk mulighed for at bryde "den femte kamps forbandelse" og endelig nå en VM-kvartfinale i den moderne æra.</p>`,
    body: `<h2>Mexicos fodboldhistorie</h2>
<p>Det mexicanske fodboldforbund (FMF) blev grundlagt i 1927, og Mexico var en af pionererne i nord- og centralamerikansk fodbold. Holdet deltog i det første VM i 1930 og har siden udviklet sig til den ubestridte fodboldgigant i CONCACAF-regionen.</p>

<h3>VM-værtsland 1970 og 1986</h3>
<p>Mexico har haft æren af at være VM-værtsland to gange. VM 1970 er berømt for nogle af de mest ikoniske kampe og mål i fodboldhistorien, herunder <a href="/brasilien">Brasiliens</a> legendariske hold med Pelé. VM 1986 er lige så mindeværdigt — det var turneringen, hvor Diego Maradonas "Guds hånd" og hans solo-mål mod <a href="/england">England</a> fandt sted.</p>
<p>Ved begge turneringer nåede Mexico kvartfinalen, og erfaringen som værtsland har formet den mexicanske fodboldkultur dybt.</p>

<h3>"Den femte kamps forbandelse"</h3>
<p>En af de mest diskuterede fortællinger i mexicansk fodbold er "la maldición del quinto partido" — forbandelsen over den femte kamp. Siden 1994 har Mexico konsekvent nået ottendedelsfinalen ved VM, men er aldrig kommet videre. Holdet har tabt i ottendedelsfinalen ved syv turneringer i træk (1994-2022), ofte i dramatiske omstændigheder.</p>
<p>Ved VM 2018 i Rusland slog Mexico <a href="/tyskland">Tyskland</a> sensationelt 1-0 i åbningskampen — de forsvarende verdensmestre — men tabte igen i ottendedelsfinalen, denne gang til <a href="/brasilien">Brasilien</a>. Ved VM 2022 blev Mexico elimineret allerede i gruppespillet.</p>

<h3>CONCACAF-dominans</h3>
<p>Mexico har vundet CONCACAF Gold Cup 12 gange og er den mest succesfulde nation i turneringens historie. Rivalisieringen med <a href="/usa">USA</a> — "dos a cero"-kampene — er en af de mest intense i international fodbold og har defineret begge holds moderne historie.</p>

<h2>Spillestil og identitet</h2>
<p>Mexicansk fodbold er kendetegnet ved teknisk dygtighed, kreativitet og en tempofyldt, underholdende spillestil. "Tiki-taka" mexicana — korte, hurtige pasningskombinationer — har været et varemærke for holdet i årtier.</p>
<p>Liga MX er en af de stærkeste ligaer uden for Europa og tiltrækker spillere fra hele Latinamerika. Den mexicanske fodboldkultur er intens, med passionerede fans der fylder stadioner over hele landet.</p>

<h2>VM 2026 — ny mulighed</h2>
<p>Som medvært for VM 2026 har Mexico en unik chance for at skrive ny historie. Estadio Azteca i Mexico City, et af verdens mest ikoniske stadioner, vil igen lægge græs til VM-kampe, og forventningerne til holdet er enorme.</p>`,
    keyFacts: {
      fifaRanking: 16,
      nickname: "El Tri",
      coach: "Javier Aguirre",
      confederation: "CONCACAF",
      founded: 1927,
      stadium: "Estadio Azteca, Mexico City",
      bestResult: "VM-kvartfinale 1970 og 1986",
      fifaCode: "MEX",
    },
    players: [
      { name: "Hirving Lozano", position: "Angriber", club: "PSV", caps: 65, goals: 18 },
      { name: "Raúl Jiménez", position: "Angriber", club: "Fulham", caps: 100, goals: 32 },
      { name: "Edson Álvarez", position: "Midtbane", club: "West Ham", caps: 55, goals: 3 },
      { name: "Guillermo Ochoa", position: "Målmand", club: "Salernitana", caps: 135, goals: 0 },
      { name: "César Montes", position: "Forsvar", club: "Almería", caps: 40, goals: 2 },
      { name: "Jesús Corona", position: "Angriber", club: "Sevilla", caps: 75, goals: 10 },
      { name: "Héctor Herrera", position: "Midtbane", club: "Houston Dynamo", caps: 100, goals: 10 },
      { name: "Orbelin Pineda", position: "Midtbane", club: "AEK Athen", caps: 40, goals: 5 },
      { name: "Jorge Sánchez", position: "Forsvar", club: "Cruz Azul", caps: 30, goals: 1 },
      { name: "Alexis Vega", position: "Angriber", club: "Toluca", caps: 30, goals: 8 },
    ],
    matches: [
      { date: "2018-06-17", opponent: "Tyskland", score: "1-0", competition: "VM 2018 Gruppespil", result: "W" },
      { date: "1986-06-15", opponent: "Bulgarien", score: "2-0", competition: "VM 1986 Kvartfinale", result: "W" },
      { date: "2022-11-26", opponent: "Argentina", score: "0-2", competition: "VM 2022 Gruppespil", result: "L" },
      { date: "2018-07-02", opponent: "Brasilien", score: "0-2", competition: "VM 2018 Ottendedelsfinale", result: "L" },
      { date: "2014-06-29", opponent: "Holland", score: "1-2", competition: "VM 2014 Ottendedelsfinale", result: "L" },
      { date: "2002-06-17", opponent: "USA", score: "0-2", competition: "VM 2002 Ottendedelsfinale", result: "L" },
    ],
    achievements: [
      "VM-kvartfinale 1970 og 1986",
      "CONCACAF Gold Cup-vindere (12 gange)",
      "VM-værtsland 1970 og 1986",
      "17 VM-deltagelser",
      "Confederations Cup-finalister 1999",
      "OL-guld 2012",
    ],
    faq: [
      {
        question: "Har Mexico vundet VM?",
        answer: "Nej, Mexico har aldrig vundet VM. Det bedste resultat er kvartfinalen, nået i 1970 og 1986 — begge gange som værtsland. Mexico har en berømt 'forbandelse' med at blive elimineret i ottendedelsfinalen.",
      },
      {
        question: "Hvad er Estadio Azteca?",
        answer: "Estadio Azteca i Mexico City er Mexicos hjemmebane og et af verdens mest legendariske stadioner. Det er det eneste stadion, der har lagt græs til to VM-finaler (1970 og 1986), og har en kapacitet på over 87.000.",
      },
      {
        question: "Hvem er Mexicos bedste spiller nogensinde?",
        answer: "Hugo Sánchez betragtes ofte som Mexicos bedste spiller. Han var topscorer i La Liga fem gange med Real Madrid. I nyere tid er Cuauhtémoc Blanco og Rafael Márquez blandt de mest ikoniske.",
      },
      {
        question: "Hvad er 'den femte kamps forbandelse'?",
        answer: "Det refererer til Mexicos gentagne elimination i VM-ottendedelsfinalen. Siden 1994 har Mexico nået ottendedelsfinalen ved hver VM-slutrunde, men er aldrig avanceret videre — altid slået ud i den femte kamp.",
      },
      {
        question: "Er Mexico vært for VM 2026?",
        answer: "Ja, Mexico er medvært for VM 2026 sammen med USA og Canada. Estadio Azteca i Mexico City vil være et af de centrale stadioner i turneringen.",
      },
    ],
  },

  serbien: {
    tagline: "Balkansk fodboldtradition med verdensklassespillere",
    intro: `<p>Serbiens fodboldlandshold bærer videre en stolt fodboldtradition, der strækker sig tilbage til det tidligere Jugoslavien — en af de mest talentfulde fodboldnationer i europæisk historie. Serbien har produceret verdensklassespillere og er kendt for sin tekniske dygtighed og taktiske kløgt.</p>
<p>Som selvstændigt land siden 2006 har Serbien kvalificeret sig til flere VM-slutrunder og har en spillerproduktion, der er imponerende i forhold til landets størrelse. Stjerner som Dušan Vlahović, Aleksandar Mitrović og Dušan Tadić repræsenterer den seneste generation af serbisk fodboldtalent.</p>
<p>Den serbiske fodboldkultur er intens og lidenskabelig, med klubber som Røde Stjerne Beograd og Partizan, der har en rig historie i europæisk fodbold.</p>`,
    body: `<h2>Serbiens fodboldhistorie</h2>
<p>Serbiens fodboldhistorie er tæt knyttet til det tidligere Jugoslavien, som var en af Europas stærkeste fodboldnationer. Jugoslavien nåede VM-semifinalen i 1930 og 1962 og EM-finalen i 1960 og 1968. Efter Jugoslaviens opløsning spillede Serbien som "Serbien og Montenegro" frem til 2006, hvor Montenegro blev uafhængigt.</p>

<h3>Den jugoslaviske arv</h3>
<p>Det jugoslaviske landshold producerede legender som Dragan Stojković, Dejan Savićević, Predrag Mijatović og Robert Prosinečki (der senere valgte at spille for <a href="/kroatien">Kroatien</a>). Den jugoslaviske fodboldskole var berømt for sin tekniske kvalitet og kreative spillestil.</p>
<p>Røde Stjerne Beograds sejr i Europa Cup'en i 1991 — med en spillertrup der inkluderede flere serbiske landsholdsspillere — var et af højdepunkterne i serbisk klubfodbold.</p>

<h3>VM-deltagelser</h3>
<p>Som Serbien har holdet deltaget i VM 2010 i <a href="/sydafrika">Sydafrika</a>, VM 2018 i Rusland og VM 2022 i Qatar. Ved VM 2022 var Serbien i en svær gruppe med <a href="/brasilien">Brasilien</a>, Schweiz og Cameroun og blev elimineret i gruppespillet trods en stærk indsats.</p>
<p>Ved EM 2024 i <a href="/tyskland">Tyskland</a> deltog Serbien for første gang ved et EM som selvstændig nation, men holdet blev elimineret i gruppespillet.</p>

<h3>Spillerproduktion</h3>
<p>Serbien producerer fortsat spillere af højeste internationale klasse. Dušan Vlahović (Juventus) er en af de mest eftertragede angribere i europæisk fodbold, mens Aleksandar Mitrović har vist sig som en af de mest produktive målscorere i sin generation. Sergej Milinković-Savić har været en dominerende midtbanespiller i Serie A.</p>

<h2>Spillestil og identitet</h2>
<p>Serbisk fodbold er kendetegnet ved den balkanske tradition: teknisk dygtighed, kreativitet i mellemrummet, stærke midtbanespillere og talentfulde angribere. Holdet har traditionelt haft fremragende playmakers og har en evne til at producere spillere, der kan gøre en forskel i de store kampe.</p>
<p>Den serbiske liga, med Røde Stjerne og Partizan som de dominerende klubber, fungerer som en vigtig talentfabrik og har leveret spillere til Europas største klubber i årtier.</p>

<h2>Aktuel status</h2>
<p>Serbien fortsætter med at være en respekteret kraft i europæisk fodbold. Med en ung, talentfuld trup og en stærk fodboldkultur sigter holdet mod at kvalificere sig regelmæssigt til store slutrunder og eventuelt nå knockoutrunderne.</p>`,
    keyFacts: {
      fifaRanking: 33,
      nickname: "Ørnene (Orlovi)",
      coach: "Dragan Stojković",
      confederation: "UEFA",
      founded: 1919,
      stadium: "Stadion Rajko Mitić, Beograd",
      bestResult: "VM-semifinale 1930, 1962 (som Jugoslavien)",
      fifaCode: "SRB",
    },
    players: [
      { name: "Dušan Vlahović", position: "Angriber", club: "Juventus", caps: 25, goals: 10 },
      { name: "Aleksandar Mitrović", position: "Angriber", club: "Al-Hilal", caps: 90, goals: 55 },
      { name: "Dušan Tadić", position: "Midtbane", club: "Fenerbahçe", caps: 105, goals: 20 },
      { name: "Sergej Milinković-Savić", position: "Midtbane", club: "Al-Hilal", caps: 50, goals: 6 },
      { name: "Nikola Milenković", position: "Forsvar", club: "Nottingham Forest", caps: 50, goals: 5 },
      { name: "Filip Kostić", position: "Forsvar", club: "Juventus", caps: 55, goals: 4 },
      { name: "Vanja Milinković-Savić", position: "Målmand", club: "Torino", caps: 15, goals: 0 },
      { name: "Saša Lukić", position: "Midtbane", club: "Fulham", caps: 40, goals: 3 },
      { name: "Strahinja Pavlović", position: "Forsvar", club: "AC Milan", caps: 20, goals: 2 },
      { name: "Andrija Živković", position: "Angriber", club: "PAOK", caps: 35, goals: 4 },
    ],
    matches: [
      { date: "2022-11-24", opponent: "Brasilien", score: "0-2", competition: "VM 2022 Gruppespil", result: "L" },
      { date: "2022-12-02", opponent: "Schweiz", score: "2-3", competition: "VM 2022 Gruppespil", result: "L" },
      { date: "2018-06-17", opponent: "Costa Rica", score: "1-0", competition: "VM 2018 Gruppespil", result: "W" },
      { date: "2010-06-18", opponent: "Tyskland", score: "0-1", competition: "VM 2010 Gruppespil", result: "L" },
      { date: "2024-06-20", opponent: "England", score: "0-1", competition: "EM 2024 Gruppespil", result: "L" },
      { date: "2022-11-28", opponent: "Cameroun", score: "3-3", competition: "VM 2022 Gruppespil", result: "D" },
    ],
    achievements: [
      "VM-semifinale 1930, 1962 (som Jugoslavien)",
      "EM-finalister 1960, 1968 (som Jugoslavien)",
      "OL-guld 1960 (som Jugoslavien)",
      "3 VM-deltagelser som Serbien",
      "Europa Cup-vindere 1991 (Røde Stjerne)",
    ],
    faq: [
      {
        question: "Har Serbien deltaget i VM?",
        answer: "Ja, Serbien har deltaget i VM tre gange som selvstændigt land: 2010, 2018 og 2022. Som en del af Jugoslavien og Serbien og Montenegro har holdet en langt rigere VM-historie.",
      },
      {
        question: "Hvem er Serbiens bedste fodboldspiller?",
        answer: "Dragan Stojković og Dejan Savićević er legender fra den jugoslaviske æra. I den moderne æra er Aleksandar Mitrović landsholdets topscorer, og Dušan Vlahović er den mest profilerede unge stjerne.",
      },
      {
        question: "Hvad er forskellen mellem Serbien og Jugoslavien i fodbold?",
        answer: "Jugoslaviens landshold repræsenterede alle syv republikker. Efter opløsningen spillede Serbien som 'Serbien og Montenegro' (2003-2006) og derefter som Serbien fra 2006. Historiske resultater fra Jugoslavien deles delvist med Serbien.",
      },
      {
        question: "Hvad er Røde Stjerne Beograd?",
        answer: "Røde Stjerne (Crvena Zvezda) er Serbiens mest succesfulde fodboldklub. Klubben vandt Europa Cup'en i 1991 og er sammen med Partizan en af de to store klubber i serbisk fodbold.",
      },
      {
        question: "Hvem er Serbiens landstræner?",
        answer: "Dragan Stojković, en af Serbiens største spillere nogensinde, er landstræner. Han er kendt som 'Piksi' og har bragt holdet til VM 2022 og EM 2024.",
      },
    ],
  },

  kroatien: {
    tagline: "VM-finalister 2018 og 2022 — det lille land med det store hjerte",
    intro: `<p>Kroatiens fodboldlandshold er en af de mest bemærkelsesværdige succeshistorier i moderne fodbold. Med en befolkning på kun 4 millioner har Kroatien nået to VM-finaler (2018 og 2022) og en VM-semifinale (1998), hvilket gør holdet til en af de mest overraskende kræfter i international fodbold.</p>
<p>Kroatisk fodbold er kendetegnet ved teknisk brillans, taktisk intelligens og en ukuelig vindermentalitet. Fra Davor Šuker og Zvonimir Boban i 1990'erne til Luka Modrić, Ivan Rakitić og Ivan Perišić i den moderne æra har Kroatien konsekvent produceret verdensklassespillere.</p>
<p>Luka Modrić, vinder af Ballon d'Or i 2018, er symbolet på kroatisk fodbold: teknisk genial, taktisk intelligent og med et hjerte der er større end hans fysiske statur. Under hans ledelse har Kroatien etableret sig som en fast kraft i verdensfodboldens elite.</p>`,
    body: `<h2>Kroatiens fodboldhistorie</h2>
<p>Det kroatiske fodboldforbund (HNS) blev grundlagt i 1912, men Kroatien spillede sin første officielle kamp som uafhængig nation i 1990 efter uafhængigheden fra Jugoslavien. Allerede ved sin første VM-deltagelse i 1998 viste Kroatien, at holdet var en kraft at regne med.</p>

<h3>VM 1998 — den eventyrlige debut</h3>
<p>Ved VM 1998 i <a href="/frankrig">Frankrig</a> overraskede Kroatien hele verden ved at nå semifinalen. Holdet besejrede <a href="/tyskland">Tyskland</a> sensationelt 3-0 i kvartfinalen, med Davor Šuker i storform. Šuker vandt turneringens topscorertitel med seks mål, og Kroatien endte på en tredjeplads efter at have tabt semifinalen til værtsnationen Frankrig.</p>
<p>Holdet fra 1998 — med Šuker, Zvonimir Boban, Robert Prosinečki og målmand Dražen Ladić — er legendarisk i Kroatien og inspirerede en hel generation af fodboldspillere.</p>

<h3>VM 2018 — finalen i Moskva</h3>
<p>20 år efter den eventyrlige debut toppede Kroatien bedriften ved VM 2018 i Rusland. Under ledelse af træner Zlatko Dalić og med Luka Modrić som den ubestridte leder spillede holdet sig hele vejen til finalen — den første VM-finale for Kroatien.</p>
<p>Vejen til finalen var dramatisk: sejre over <a href="/argentina">Argentina</a> (3-0) i gruppespillet, <a href="/danmark">Danmark</a> (straffespark) og Rusland (straffespark) i knockoutrunderne, og en 2-1-sejr over <a href="/england">England</a> i semifinalen med Mario Mandžukićs forlængelsesmål. I finalen tabte Kroatien 2-4 til Frankrig, men præstationen var ekstraordinær for en nation med kun 4 millioner indbyggere.</p>
<p>Luka Modrić vandt turneringens Gyldne Bold som bedste spiller og Ballon d'Or senere samme år — den første spiller uden for Messi-Ronaldo-duopolet til at vinde prisen i over et årti.</p>

<h3>VM 2022 — endnu en finale og bronze</h3>
<p>Ved VM 2022 i Qatar viste Kroatien igen sin utrolige turneringsstyrke. Holdet nåede semifinalen, hvor de tabte til <a href="/argentina">Argentina</a>, men vandt bronzekampen mod <a href="/marokko">Marokko</a>. Det var endnu et bevis på, at Kroatien konsekvent overpræsterer ved store slutrunder.</p>
<p>Nations League-finalen i 2023, hvor Kroatien tabte til <a href="/spanien">Spanien</a> på straffespark, bekræftede holdets status som en af Europas absolutte topnationer.</p>

<h2>Spillestil og identitet</h2>
<p>Kroatisk fodbold er defineret af en exceptionel midtbane. Holdet har konsekvent produceret verdensklasse-midtbanespillere: Modrić, Rakitić, Kovačić, Brozović — alle har domineret i Europas allerstørste klubber. Den kroatiske spillestil prioriterer boldbesiddelse, pasningskvalitet og taktisk intelligens.</p>
<p>Den kroatiske mentalitet i turneringer er legendarisk. Holdet har vundet adskillige straffesparkskonkurrencer og har vist en evne til at rejse sig i de afgørende øjeblikke, der er næsten overnaturlig.</p>

<h2>Aktuel status</h2>
<p>Med Modrić nær karrierens afslutning står Kroatien over for et generationsskifte. Men med talenter som Joško Gvardiol, Lovro Majer og andre unge stjerner ser den næste generation lovende ud. Spørgsmålet er, om Kroatien kan opretholde det usædvanlige niveau fra 2018-2022-perioden.</p>`,
    keyFacts: {
      fifaRanking: 7,
      nickname: "Vatreni (De Flammende)",
      coach: "Zlatko Dalić",
      confederation: "UEFA",
      founded: 1912,
      stadium: "Stadion Maksimir, Zagreb",
      bestResult: "VM-finalister 2018",
      fifaCode: "CRO",
    },
    players: [
      { name: "Luka Modrić", position: "Midtbane", club: "Real Madrid", caps: 175, goals: 25 },
      { name: "Mateo Kovačić", position: "Midtbane", club: "Manchester City", caps: 95, goals: 5 },
      { name: "Joško Gvardiol", position: "Forsvar", club: "Manchester City", caps: 35, goals: 4 },
      { name: "Marcelo Brozović", position: "Midtbane", club: "Al-Nassr", caps: 95, goals: 8 },
      { name: "Ivan Perišić", position: "Angriber", club: "Hajduk Split", caps: 130, goals: 35 },
      { name: "Andrej Kramarić", position: "Angriber", club: "Hoffenheim", caps: 80, goals: 28 },
      { name: "Dominik Livaković", position: "Målmand", club: "Fenerbahçe", caps: 45, goals: 0 },
      { name: "Lovro Majer", position: "Midtbane", club: "Wolfsburg", caps: 25, goals: 3 },
      { name: "Mario Pašalić", position: "Midtbane", club: "Atalanta", caps: 40, goals: 5 },
      { name: "Ante Budimir", position: "Angriber", club: "Osasuna", caps: 30, goals: 8 },
      { name: "Borna Sosa", position: "Forsvar", club: "Ajax", caps: 25, goals: 2 },
    ],
    matches: [
      { date: "2018-07-15", opponent: "Frankrig", score: "2-4", competition: "VM 2018 Finale", result: "L" },
      { date: "2018-07-11", opponent: "England", score: "2-1", competition: "VM 2018 Semifinale", result: "W" },
      { date: "1998-07-04", opponent: "Tyskland", score: "3-0", competition: "VM 1998 Kvartfinale", result: "W" },
      { date: "2022-12-17", opponent: "Marokko", score: "2-1", competition: "VM 2022 Bronzekamp", result: "W" },
      { date: "2018-06-21", opponent: "Argentina", score: "3-0", competition: "VM 2018 Gruppespil", result: "W" },
      { date: "2022-12-09", opponent: "Brasilien", score: "1-1 (4-2 str.)", competition: "VM 2022 Kvartfinale", result: "W" },
      { date: "2018-07-01", opponent: "Danmark", score: "1-1 (3-2 str.)", competition: "VM 2018 Ottendedelsfinale", result: "W" },
    ],
    achievements: [
      "VM-finalister 2018",
      "VM-tredjeplads 1998 og 2022",
      "Nations League-finalister 2023",
      "Luka Modrić — Ballon d'Or 2018",
      "6 VM-deltagelser",
      "VM 1998 topscorer: Davor Šuker",
    ],
    faq: [
      {
        question: "Har Kroatien vundet VM?",
        answer: "Nej, men Kroatien har nået VM-finalen to gange — i 2018 (tab til Frankrig 2-4) og som tredjeplads i 1998 og 2022. For et land med kun 4 millioner indbyggere er det en ekstraordinær bedrift.",
      },
      {
        question: "Hvem er Kroatiens bedste spiller nogensinde?",
        answer: "Luka Modrić betragtes som Kroatiens bedste spiller. Han vandt Ballon d'Or i 2018 og har vundet fem Champions League-titler med Real Madrid. Davor Šuker og Zvonimir Boban er andre kroatiske legender.",
      },
      {
        question: "Hvad betyder 'Vatreni'?",
        answer: "'Vatreni' betyder 'De Flammende' på kroatisk og er landsholdets kaldenavn. Det refererer til den brændende passion og intensitet, der kendetegner kroatisk fodbold.",
      },
      {
        question: "Hvordan kan Kroatien være så godt med kun 4 millioner mennesker?",
        answer: "Kroatiens succes skyldes en fremragende fodboldkultur, stærke ungdomsakademier (især Dinamo Zagreb) og en mentalitet der prioriterer teknisk dygtighed og taktisk intelligens over fysisk dominans.",
      },
      {
        question: "Hvem er Kroatiens landstræner?",
        answer: "Zlatko Dalić har været landstræner siden 2017 og har ført Kroatien til to VM-finaler (2018 og semifinale i 2022). Han er den mest succesfulde landstræner i Kroatiens historie.",
      },
    ],
  },

  belgien: {
    tagline: "Den gyldne generation — Europas skjulte stormagt",
    intro: `<p><a href="/belgien">Belgiens</a> fodboldlandshold, kendt som "De Røde Djævle", har i det seneste årti haft en af de mest talentfulde generationer i international fodboldhistorie. Med spillere som Kevin De Bruyne, Eden Hazard, Romelu Lukaku og Thibaut Courtois nåede Belgien helt op som nummer 1 på FIFA's verdensrangliste.</p>
<p>Den gyldne generations højdepunkt var VM 2018 i Rusland, hvor Belgien nåede semifinalen og besejrede <a href="/brasilien">Brasilien</a> 2-1 i kvartfinalen — en af turneringens mest mindeværdige kampe. Tredjepladsen var det bedste resultat i belgisk fodboldhistorie.</p>
<p>Nu gennemgår belgisk fodbold et generationsskifte, men den infrastruktur og fodboldkultur, der skabte den gyldne generation, lover godt for fremtiden.</p>`,
    body: `<h2>Belgiens fodboldhistorie</h2>
<p>Det belgiske fodboldforbund (KBVB/URBSFA) blev grundlagt i 1895 og er et af de ældste i verden. Belgien var en af de grundlæggere af FIFA i 1904 og deltog i det første VM i 1930. Trods denne rige historie var Belgien i mange årtier en middelmådig fodboldnation.</p>

<h3>De tidlige år og VM 1986</h3>
<p>Belgiens første store VM-præstation kom i 1986 i <a href="/mexico">Mexico</a>, hvor holdet nåede semifinalen. Kvartfinalesejren over <a href="/spanien">Spanien</a> var dramatisk, og i semifinalen tabte Belgien kun til <a href="/argentina">Argentina</a> og Diego Maradona. Enzo Scifo og Jan Ceulemans var stjernerne i det hold.</p>
<p>I 1980 nåede Belgien EM-finalen, hvor holdet tabte til <a href="/tyskland">Vesttyskland</a>. Det var en periode, hvor belgisk fodbold var konkurrencedygtig, men aldrig helt kunne bryde igennem til det allerhøjeste niveau.</p>

<h3>Den gyldne generation (2013-2024)</h3>
<p>Omkring 2013 begyndte Belgien en bemærkelsesværdig transformation. En generation af exceptionelt talentfulde spillere, der var vokset op i de belgiske ungdomsakademier, brød igennem i Europas største klubber. Kevin De Bruyne (Manchester City), Eden Hazard (Chelsea/Real Madrid), Romelu Lukaku (Inter/Chelsea), Thibaut Courtois (Real Madrid), Jan Vertonghen og Toby Alderweireld (Tottenham) dannede rygraden i et hold, der klatrede til tops på FIFA's verdensrangliste.</p>
<p>VM 2018 var højdepunktet. Under træner Roberto Martínez spillede Belgien fremragende fodbold. Kvartfinalesejren over <a href="/brasilien">Brasilien</a> med 2-1 — med mål af Fernandinho (selvmål) og Kevin De Bruyne — er en af de mest ikoniske kampe i moderne VM-historie. I semifinalen tabte Belgien til <a href="/frankrig">Frankrig</a> med 0-1 i en taktisk kamp.</p>
<p>Ved VM 2022 i Qatar skuffede den aldrende gyldne generation med exit i gruppespillet, og EM 2024 markerede et definitivt generationsskifte med exit i ottendedelsfinalen mod Frankrig.</p>

<h3>Nummer 1 i verden</h3>
<p>Belgien tilbragte over fire år som verdens nummer 1 på FIFA's rangliste (2018-2022) — en bemærkelsesværdig bedrift for et lille land med 11 millioner indbyggere. Selvom holdet aldrig vandt en stor titel, var perioden den mest succesfulde i belgisk fodboldhistorie.</p>

<h2>Spillestil og identitet</h2>
<p>Den gyldne generations Belgien spillede attraktiv, offensiv fodbold med fremragende individuelle spillere i alle positioner. Holdet havde en sjælden balance mellem defensiv soliditet (Courtois, Alderweireld, Vertonghen) og offensiv kreativitet (De Bruyne, Hazard, Lukaku).</p>
<p>Den belgiske liga (Pro League) og især klubberne Anderlecht, Club Brugge og Genk har stærke ungdomsakademier, der fortsætter med at producere talenter.</p>

<h2>Aktuel status og generationsskiftet</h2>
<p>Med Hazard pensioneret og De Bruyne, Lukaku og Courtois i slutningen af deres karrierer gennemgår Belgien et uundgåeligt generationsskifte. Talenter som Jérémy Doku (Manchester City), Amadou Onana (Aston Villa) og Loïs Openda (RB Leipzig) repræsenterer den næste bølge, men det er et åbent spørgsmål, om de kan matche den gyldne generations niveau.</p>`,
    keyFacts: {
      fifaRanking: 6,
      nickname: "De Røde Djævle (Rode Duivels)",
      coach: "Domenico Tedesco",
      confederation: "UEFA",
      founded: 1895,
      stadium: "King Baudouin Stadium, Bruxelles",
      bestResult: "VM-tredjeplads 2018",
      fifaCode: "BEL",
    },
    players: [
      { name: "Kevin De Bruyne", position: "Midtbane", club: "Manchester City", caps: 105, goals: 30 },
      { name: "Romelu Lukaku", position: "Angriber", club: "Roma", caps: 115, goals: 85 },
      { name: "Thibaut Courtois", position: "Målmand", club: "Real Madrid", caps: 105, goals: 0 },
      { name: "Jérémy Doku", position: "Angriber", club: "Manchester City", caps: 25, goals: 3 },
      { name: "Amadou Onana", position: "Midtbane", club: "Aston Villa", caps: 25, goals: 2 },
      { name: "Loïs Openda", position: "Angriber", club: "RB Leipzig", caps: 25, goals: 8 },
      { name: "Jan Vertonghen", position: "Forsvar", club: "Anderlecht", caps: 155, goals: 10 },
      { name: "Youri Tielemans", position: "Midtbane", club: "Aston Villa", caps: 65, goals: 8 },
      { name: "Leandro Trossard", position: "Angriber", club: "Arsenal", caps: 40, goals: 10 },
      { name: "Arthur Theate", position: "Forsvar", club: "Al-Ittihad", caps: 20, goals: 1 },
      { name: "Koen Casteels", position: "Målmand", club: "Al-Qadsiah", caps: 20, goals: 0 },
    ],
    matches: [
      { date: "2018-07-06", opponent: "Brasilien", score: "2-1", competition: "VM 2018 Kvartfinale", result: "W" },
      { date: "2018-07-10", opponent: "Frankrig", score: "0-1", competition: "VM 2018 Semifinale", result: "L" },
      { date: "2018-07-02", opponent: "Japan", score: "3-2", competition: "VM 2018 Ottendedelsfinale", result: "W" },
      { date: "2022-11-23", opponent: "Canada", score: "1-0", competition: "VM 2022 Gruppespil", result: "W" },
      { date: "2022-11-27", opponent: "Marokko", score: "0-2", competition: "VM 2022 Gruppespil", result: "L" },
      { date: "2024-07-01", opponent: "Frankrig", score: "0-1", competition: "EM 2024 Ottendedelsfinale", result: "L" },
      { date: "1986-06-15", opponent: "Spanien", score: "1-1 (5-4 str.)", competition: "VM 1986 Kvartfinale", result: "W" },
    ],
    achievements: [
      "VM-tredjeplads 2018",
      "VM-semifinale 1986",
      "EM-finalister 1980",
      "Nr. 1 på FIFA-ranglisten 2018-2022",
      "14 VM-deltagelser",
      "OL-guld 1920",
    ],
    faq: [
      {
        question: "Har Belgien vundet VM?",
        answer: "Nej, Belgien har aldrig vundet VM eller EM. Det bedste resultat er tredjepladsen ved VM 2018, hvor holdet slog Brasilien i kvartfinalen. Belgien nåede også EM-finalen i 1980.",
      },
      {
        question: "Hvad er Belgiens gyldne generation?",
        answer: "Den gyldne generation refererer til den exceptionelt talentfulde spillergruppe med Kevin De Bruyne, Eden Hazard, Romelu Lukaku og Thibaut Courtois, der bragte Belgien til nummer 1 på FIFA-ranglisten.",
      },
      {
        question: "Hvem er Belgiens bedste fodboldspiller?",
        answer: "Kevin De Bruyne betragtes af mange som Belgiens bedste spiller, men Eden Hazard var i sin prime lige så dominerende. Romelu Lukaku er landsholdets topscorer med over 80 mål.",
      },
      {
        question: "Hvorfor kaldes Belgien 'De Røde Djævle'?",
        answer: "Kaldenavnet 'Rode Duivels' (De Røde Djævle) stammer fra 1906, da en journalist beskrev holdets spillestil som 'djævelsk'. Belgien spiller i rødt, hvilket passede perfekt til kaldenavnet.",
      },
      {
        question: "Hvem er Belgiens landstræner?",
        answer: "Domenico Tedesco, en tysk-italiensk træner, overtog som landstræner i 2023. Han har opgaven at lede generationsskiftet efter den gyldne generation.",
      },
    ],
  },

  polen: {
    tagline: "Hvide Ørne med en stolt fodboldtradition",
    intro: `<p>Polens fodboldlandshold har en rig historie i international fodbold med to VM-tredjepladser (1974 og 1982) og en stærk tradition for at producere verdensklassespillere. Fra Grzegorz Lato og Zbigniew Boniek til Robert Lewandowski har polsk fodbold altid haft markante individuelle stjerner.</p>
<p>Robert Lewandowski, en af de mest produktive målscorere i fodboldhistorien, har domineret polsk fodbold i over et årti og er landsholdets topscorer med over 80 mål. Hans præstationer i <a href="/tyskland">Bundesligaen</a> og La Liga har sat Polen på verdenskortet.</p>
<p>Polsk fodbold nyder enorm popularitet i landet, og Ekstraklasa samt stærke ungdomsakademier fortsætter med at udvikle talenter til de europæiske topligaer.</p>`,
    body: `<h2>Polens fodboldhistorie</h2>
<p>Det polske fodboldforbund (PZPN) blev grundlagt i 1919, og Polen har en lang fodboldhistorie. Holdet har deltaget i otte VM-slutrunder og har haft perioder med stor international succes.</p>

<h3>Guldaldren i 1970'erne og 1980'erne</h3>
<p>Polens bedste periode i international fodbold var 1970'erne og 1980'erne. Ved VM 1974 i <a href="/tyskland">Vesttyskland</a> nåede Polen tredjepladsen med et hold, der inkluderede den legendariske Grzegorz Lato, der vandt turneringens topscorertitel med syv mål.</p>
<p>Ved VM 1982 i <a href="/spanien">Spanien</a> gentog Polen bedriften med endnu en tredjeplads. Zbigniew Boniek var holdets stjerne og leverede verdensklassepræstationer. Holdet slog <a href="/belgien">Belgien</a> 3-0 i gruppespillet og <a href="/frankrig">Frankrig</a> blev besejret i semifinalen (selvom dette teknisk set var en placering for 3.-4.-pladsen).</p>

<h3>OL-guld</h3>
<p>Polen vandt OL-guld i fodbold i 1972 i München — en bedrift der ofte overses, men som var en milepæl i polsk fodboldhistorie. Holdet slog <a href="/ungarn">Ungarn</a> 2-1 i finalen og viste den kvalitet, der året efter ville bære holdet til VM-semifinalen.</p>

<h3>Lewandowski-æraen</h3>
<p>Robert Lewandowski har defineret moderne polsk fodbold. Med over 600 mål i Bundesligaen og La Liga er han en af de mest produktive målscorere i fodboldhistorien. For landsholdet har han scoret over 80 mål og har båret Polen til EM 2016 (kvartfinale), VM 2018 og EM 2024.</p>
<p>Ved EM 2016 i Frankrig nåede Polen kvartfinalen, hvor holdet tabte på straffespark til <a href="/portugal">Portugal</a>. Det var Polens bedste EM-resultat nogensinde.</p>

<h2>Spillestil og identitet</h2>
<p>Polsk fodbold er kendetegnet ved fysisk styrke, direkte spil og stærke individuelle angribere. Holdet har traditionelt haft fremragende målscorere — fra Ernst Wilimowski (der scorede fire mål mod <a href="/brasilien">Brasilien</a> ved VM 1938) til Lewandowski.</p>
<p>Den polske liga, Ekstraklasa, har udviklet sig i de seneste år og producerer nu mere konkurrencedygtige spillere. Klubber som Legia Warszawa og Lech Poznań har haft succes i europæiske turneringer.</p>

<h2>Aktuel status</h2>
<p>Med Lewandowski nær karrierens afslutning forbereder Polen sig på et generationsskifte. Unge talenter som Nicola Zalewski, Jakub Kamiński og Sebastian Szymański giver håb om en lys fremtid, men det bliver svært at erstatte en spiller af Lewandowskis kaliber.</p>`,
    keyFacts: {
      fifaRanking: 28,
      nickname: "Hvide Ørne (Biało-Czerwoni)",
      coach: "Michał Probierz",
      confederation: "UEFA",
      founded: 1919,
      stadium: "PGE Narodowy, Warszawa",
      bestResult: "VM-tredjeplads 1974 og 1982",
      fifaCode: "POL",
    },
    players: [
      { name: "Robert Lewandowski", position: "Angriber", club: "Barcelona", caps: 150, goals: 82 },
      { name: "Wojciech Szczęsny", position: "Målmand", club: "Barcelona", caps: 85, goals: 0 },
      { name: "Piotr Zieliński", position: "Midtbane", club: "Inter", caps: 90, goals: 12 },
      { name: "Nicola Zalewski", position: "Midtbane", club: "Roma", caps: 25, goals: 1 },
      { name: "Jan Bednarek", position: "Forsvar", club: "Southampton", caps: 55, goals: 2 },
      { name: "Jakub Kamiński", position: "Angriber", club: "Wolfsburg", caps: 15, goals: 2 },
      { name: "Sebastian Szymański", position: "Midtbane", club: "Fenerbahçe", caps: 30, goals: 5 },
      { name: "Matty Cash", position: "Forsvar", club: "Aston Villa", caps: 15, goals: 1 },
      { name: "Kamil Grosicki", position: "Angriber", club: "Pogoń Szczecin", caps: 85, goals: 17 },
      { name: "Arkadiusz Milik", position: "Angriber", club: "Juventus", caps: 60, goals: 17 },
    ],
    matches: [
      { date: "1974-07-06", opponent: "Brasilien", score: "1-0", competition: "VM 1974 Tredjepladskamp", result: "W" },
      { date: "1982-07-08", opponent: "Frankrig", score: "3-2", competition: "VM 1982 Semifinale", result: "W" },
      { date: "2016-06-30", opponent: "Portugal", score: "1-1 (3-5 str.)", competition: "EM 2016 Kvartfinale", result: "L" },
      { date: "2022-11-26", opponent: "Saudi-Arabien", score: "2-0", competition: "VM 2022 Gruppespil", result: "W" },
      { date: "2022-12-04", opponent: "Frankrig", score: "1-3", competition: "VM 2022 Ottendedelsfinale", result: "L" },
      { date: "2024-06-21", opponent: "Østrig", score: "1-3", competition: "EM 2024 Gruppespil", result: "L" },
    ],
    achievements: [
      "VM-tredjeplads 1974 og 1982",
      "OL-guld 1972",
      "OL-sølv 1976 og 1992",
      "8 VM-deltagelser",
      "EM-kvartfinale 2016",
      "Robert Lewandowski — 80+ landskampmål",
    ],
    faq: [
      {
        question: "Har Polen vundet VM?",
        answer: "Nej, Polens bedste VM-resultater er to tredjepladser i 1974 og 1982. I 1974 vandt Grzegorz Lato den Gyldne Støvle som turneringens topscorer.",
      },
      {
        question: "Hvem er Polens bedste fodboldspiller?",
        answer: "Robert Lewandowski betragtes som Polens bedste spiller nogensinde. Han er landsholdets topscorer med over 80 mål og en af de mest produktive målscorere i fodboldhistorien.",
      },
      {
        question: "Hvor mange mål har Lewandowski scoret for Polen?",
        answer: "Robert Lewandowski har scoret over 80 mål for Polens landshold i over 150 kampe. Han er den suverænt mest produktive polske landsholdsspiller nogensinde.",
      },
      {
        question: "Hvem er Polens landstræner?",
        answer: "Michał Probierz er Polens landstræner. Han overtog posten i 2023 og har fokuseret på at integrere unge talenter i truppen.",
      },
      {
        question: "Har Polen deltaget i EM?",
        answer: "Ja, Polen har deltaget i EM flere gange. Det bedste resultat var kvartfinalen ved EM 2016 i Frankrig, hvor holdet tabte på straffespark til Portugal.",
      },
    ],
  },

  marokko: {
    tagline: "VM 2022-semifinalister — Afrikas historiske bedrift",
    intro: `<p>Marokkos fodboldlandshold, kendt som "Atlasløverne", skrev fodboldhistorie ved VM 2022 i Qatar, da holdet som det første afrikanske og arabiske land nogensinde nåede en VM-semifinale. Den historiske bedrift forenede hele den arabiske verden og det afrikanske kontinent i fejring.</p>
<p>Under ledelse af træner Walid Regragui besejrede Marokko <a href="/belgien">Belgien</a>, <a href="/spanien">Spanien</a> og <a href="/portugal">Portugal</a> på vej til semifinalen — tre af Europas mest dekorerede fodboldnationer. Holdets kombination af europæisk taktisk disciplin og afrikansk lidenskab var uimodståelig.</p>
<p>Marokkos succes var ikke et tilfælde, men resultatet af årtiers investering i fodboldinfrastruktur, talentudvikling og en unik model, der kombinerer spillere med dobbelt statsborgerskab fra europæiske topligaer.</p>`,
    body: `<h2>Marokkos fodboldhistorie</h2>
<p>Det marokkanske fodboldforbund (FRMF) blev grundlagt i 1955, og Marokko har en lang og stolt fodboldtradition. Holdet var det første afrikanske hold til at vinde en VM-gruppe (1986) og har deltaget i seks VM-slutrunder.</p>

<h3>Tidlige succeser</h3>
<p>Ved VM 1986 i <a href="/mexico">Mexico</a> overraskede Marokko hele verden ved at vinde sin gruppe foran <a href="/england">England</a>, <a href="/portugal">Portugal</a> og Polen. Det var første gang, et afrikansk hold vandt en VM-gruppe. I ottendedelsfinalen tabte Marokko til <a href="/tyskland">Vesttyskland</a> med 0-1 på et sent frisparkmål.</p>
<p>Marokko har også vundet AFCON i 1976 og har nået finalen i 2004 (tab til <a href="/tunesien">Tunesien</a>). Holdet har været en konstant kraft i nordafrikansk og afrikansk fodbold.</p>

<h3>VM 2022 — det historiske eventyr</h3>
<p>VM 2022 i Qatar var kulminationen på en lang udvikling i marokkansk fodbold. Under Walid Regragui spillede Marokko med en disciplin og intensitet, der overraskede alle:</p>
<ul>
<li>Gruppespil: 0-0 mod <a href="/kroatien">Kroatien</a>, 2-0 over <a href="/belgien">Belgien</a>, 2-1 over <a href="/canada">Canada</a></li>
<li>Ottendedelsfinale: 0-0 (3-0 straffespark) over <a href="/spanien">Spanien</a></li>
<li>Kvartfinale: 1-0 over <a href="/portugal">Portugal</a></li>
<li>Semifinale: 0-2 tab til <a href="/frankrig">Frankrig</a></li>
</ul>
<p>Sejren over Spanien på straffespark og den overraskende 1-0-sejr over Portugal — med Youssef En-Nesyris hovedstødsmål — var øjeblikke, der vil leve for evigt i fodboldhistorien. Marokko tabte kun én kamp i hele turneringen og indkasserede blot ét mål i de ordinære 90 minutter i hele turneringen.</p>
<p>Den defensieve soliditet var ekstraordinær. Yassine Bounou i målet og et forsvar ledet af Achraf Hakimi og Nayef Aguerd var nærmest uigennemtrængelige.</p>

<h3>Den dobbelte identitetsmodel</h3>
<p>En nøgle til Marokkos succes er brugen af spillere med dobbelt statsborgerskab. Mange af holdets stjerner er vokset op i europæiske lande — særligt <a href="/frankrig">Frankrig</a>, <a href="/holland">Holland</a>, <a href="/spanien">Spanien</a> og <a href="/belgien">Belgien</a> — og har valgt at repræsentere Marokko. Achraf Hakimi (født i Spanien), Hakim Ziyech (Holland) og Sofiane Boufal (Frankrig) er eksempler på denne model.</p>

<h2>Spillestil og identitet</h2>
<p>Marokkansk fodbold kombinerer nordafrikansk teknisk dygtighed med europæisk taktisk disciplin. Ved VM 2022 var holdet mesterligt organiseret defensivt og farlige på omstillinger, med individuel kvalitet i alle positioner.</p>

<h2>VM 2030 — drømmen fortsætter</h2>
<p>Marokko er medvært for VM 2030 (sammen med Spanien og Portugal), hvilket vil være det første VM på afrikansk jord (delt værtskab). Det giver Marokko en historisk mulighed for at bygge videre på VM 2022-succesen.</p>`,
    keyFacts: {
      fifaRanking: 14,
      nickname: "Atlasløverne (Les Lions de l'Atlas)",
      coach: "Walid Regragui",
      confederation: "CAF",
      founded: 1955,
      stadium: "Stade Moulay Abdallah, Rabat",
      bestResult: "VM-semifinale 2022",
      fifaCode: "MAR",
    },
    players: [
      { name: "Achraf Hakimi", position: "Forsvar", club: "PSG", caps: 75, goals: 10 },
      { name: "Hakim Ziyech", position: "Midtbane", club: "Galatasaray", caps: 50, goals: 20 },
      { name: "Youssef En-Nesyri", position: "Angriber", club: "Fenerbahçe", caps: 65, goals: 20 },
      { name: "Yassine Bounou", position: "Målmand", club: "Al-Hilal", caps: 55, goals: 0 },
      { name: "Sofyan Amrabat", position: "Midtbane", club: "Fiorentina", caps: 55, goals: 1 },
      { name: "Nayef Aguerd", position: "Forsvar", club: "West Ham", caps: 35, goals: 2 },
      { name: "Azzedine Ounahi", position: "Midtbane", club: "Marseille", caps: 20, goals: 2 },
      { name: "Noussair Mazraoui", position: "Forsvar", club: "Manchester United", caps: 30, goals: 0 },
      { name: "Sofiane Boufal", position: "Angriber", club: "Al-Rayyan", caps: 25, goals: 3 },
      { name: "Brahim Díaz", position: "Midtbane", club: "Real Madrid", caps: 10, goals: 2 },
      { name: "Abdelhamid Sabiri", position: "Midtbane", club: "Sampdoria", caps: 15, goals: 3 },
    ],
    matches: [
      { date: "2022-12-10", opponent: "Portugal", score: "1-0", competition: "VM 2022 Kvartfinale", result: "W" },
      { date: "2022-12-06", opponent: "Spanien", score: "0-0 (3-0 str.)", competition: "VM 2022 Ottendedelsfinale", result: "W" },
      { date: "2022-11-27", opponent: "Belgien", score: "2-0", competition: "VM 2022 Gruppespil", result: "W" },
      { date: "2022-12-14", opponent: "Frankrig", score: "0-2", competition: "VM 2022 Semifinale", result: "L" },
      { date: "2022-12-17", opponent: "Kroatien", score: "1-2", competition: "VM 2022 Bronzekamp", result: "L" },
      { date: "1986-06-06", opponent: "England", score: "0-0", competition: "VM 1986 Gruppespil", result: "D" },
      { date: "2022-12-01", opponent: "Canada", score: "2-1", competition: "VM 2022 Gruppespil", result: "W" },
    ],
    achievements: [
      "VM-semifinale 2022 (første afrikanske land)",
      "AFCON-vindere 1976",
      "Første afrikanske hold til at vinde VM-gruppe (1986)",
      "6 VM-deltagelser",
      "VM 2030-medvært",
      "AFCON-finalister 2004",
    ],
    faq: [
      {
        question: "Hvordan klarede Marokko sig ved VM 2022?",
        answer: "Marokko nåede semifinalen ved VM 2022 — det bedste resultat for et afrikansk og arabisk land nogensinde. Holdet slog Belgien, Spanien og Portugal, før de tabte semifinalen til Frankrig.",
      },
      {
        question: "Hvem er Marokkos bedste spiller?",
        answer: "Achraf Hakimi er en af Marokkos mest profilerede spillere og en af verdens bedste backs. Hakim Ziyech og Youssef En-Nesyri er andre nøglespillere i den succesfulde VM 2022-trup.",
      },
      {
        question: "Er Marokko vært for VM 2030?",
        answer: "Ja, Marokko er medvært for VM 2030 sammen med Spanien og Portugal. Det vil være en historisk begivenhed for afrikansk fodbold.",
      },
      {
        question: "Hvad er Atlasløverne?",
        answer: "'Les Lions de l'Atlas' (Atlasløverne) er Marokkos kaldenavn, opkaldt efter Atlasbjergene og den nu uddøde berberriske løve, der engang levede i regionen.",
      },
      {
        question: "Har Marokko vundet Afrikas Mesterskab?",
        answer: "Ja, Marokko vandt AFCON i 1976 på hjemmebane. Holdet nåede også finalen i 2004, hvor de tabte til Tunesien.",
      },
    ],
  },

  australien: {
    tagline: "Socceroos — den eneste nation der har skiftet konføderation",
    intro: `<p>Australiens fodboldlandshold, kendt som "Socceroos", har en unik position i international fodbold som den eneste store nation, der har skiftet konføderation — fra OFC (Oceanien) til AFC (Asien) i 2006. Skiftet har transformeret australsk fodbold og givet holdet adgang til stærkere konkurrence og mere regelmæssig VM-kvalifikation.</p>
<p>Australien har deltaget i seks VM-slutrunder og har ved flere lejligheder overrasket med stærke præstationer. Holdet har også vundet Asian Cup i 2015 og er en fast kraft i asiatisk fodbold.</p>
<p>Med en multikulturelvfboldtradition, der trækker på indvandrere fra hele verden, har Australien en unik fodboldidentitet, der kombinerer britisk gejst, europæisk taktik og en aldrig-giv-op-mentalitet.</p>`,
    body: `<h2>Australiens fodboldhistorie</h2>
<p>Football Australia blev grundlagt i 1961, men fodbold i Australien har rødder tilbage til begyndelsen af 1900-tallet. I mange årtier var fodbold ("soccer") overskygget af de andre "fodboldkoder" — Australian rules football, rugby league og rugby union. Men sporten har oplevet en enorm vækst siden VM 2006.</p>

<h3>VM-kvalifikationen 2006 — "The Night of Glory"</h3>
<p>Den mest ikoniske begivenhed i australsk fodboldhistorie er play-off-kampen mod <a href="/uruguay">Uruguay</a> i november 2005, der sikrede Australien en plads ved VM 2006 i <a href="/tyskland">Tyskland</a>. Efter et 0-1-nederlag i Montevideo vandt Australien returopgøret 1-0 i Sydney og kvalificerede sig på straffespark. Det var Australiens første VM-deltagelse i 32 år.</p>
<p>Ved selve VM 2006 leverede Socceroos en mindeværdig turnering. I gruppespillet scorede Tim Cahill to mål i en 3-1-sejr over <a href="/japan">Japan</a>, og Australien nåede ottendedelsfinalen, hvor de tabte 0-1 til <a href="/italien">Italien</a> på et kontroversielt straffespark i de døende sekunder.</p>

<h3>Asian Cup 2015</h3>
<p>Australiens største triumf kom ved Asian Cup 2015, som blev afholdt på hjemmebane. I finalen besejrede Socceroos Sydkorea 2-1 med et forlængningsmål, og Australien kroneredes som asiatiske mestre for første gang.</p>

<h3>VM 2022</h3>
<p>Ved VM 2022 i Qatar overraskede Australien med at avancere fra en svær gruppe med <a href="/frankrig">Frankrig</a> og <a href="/tunesien">Tunesien</a>. Holdet slog Tunesien 1-0 og <a href="/danmark">Danmark</a> 1-0 i afgørende gruppekampe. I ottendedelsfinalen tabte Socceroos 1-2 til <a href="/argentina">Argentina</a> i en hæderlig kamp.</p>

<h2>Spillestil og identitet</h2>
<p>Australsk fodbold er kendetegnet ved fysisk styrke, atleticisme, en hårdtarbejdende mentalitet og en aldrig-giv-op-ånd. Holdet har traditionelt spillet en direkte, energisk stil og har produceret fremragende målmænd og fysisk stærke forsvarsspillere.</p>
<p>A-League (den australske professionelle liga) har vokset betydeligt og har tiltrukket internationale stjerner. Den australske talentpipeline sender nu regelmæssigt spillere til europæiske ligaer, hvilket har hævet det generelle niveau.</p>

<h2>Aktuel status</h2>
<p>Australien er en fast kraft i asiatisk fodbold og kæmper regelmæssigt om VM-kvalifikation. Med en ny generation af spillere i europæiske klubber sigter holdet mod at bygge videre på VM 2022-præstationen og forsvare sin position som en af Asiens stærkeste nationer.</p>`,
    keyFacts: {
      fifaRanking: 24,
      nickname: "Socceroos",
      coach: "Tony Popovic",
      confederation: "AFC",
      founded: 1961,
      stadium: "Stadium Australia, Sydney",
      bestResult: "VM-ottendedelsfinale 2006 og 2022, Asian Cup-vindere 2015",
      fifaCode: "AUS",
    },
    players: [
      { name: "Mathew Ryan", position: "Målmand", club: "AS Roma", caps: 80, goals: 0 },
      { name: "Ajdin Hrustić", position: "Midtbane", club: "Rakow", caps: 25, goals: 3 },
      { name: "Jackson Irvine", position: "Midtbane", club: "St. Pauli", caps: 55, goals: 7 },
      { name: "Aziz Behich", position: "Forsvar", club: "Dundee United", caps: 50, goals: 1 },
      { name: "Mitchell Duke", position: "Angriber", club: "Machida Zelvia", caps: 25, goals: 6 },
      { name: "Riley McGree", position: "Midtbane", club: "Middlesbrough", caps: 20, goals: 2 },
      { name: "Harry Souttar", position: "Forsvar", club: "Leicester City", caps: 15, goals: 5 },
      { name: "Awer Mabil", position: "Angriber", club: "Grasshoppers", caps: 30, goals: 6 },
      { name: "Craig Goodwin", position: "Angriber", club: "Al-Wehda", caps: 25, goals: 5 },
      { name: "Kye Rowles", position: "Forsvar", club: "Hearts", caps: 15, goals: 0 },
    ],
    matches: [
      { date: "2015-01-31", opponent: "Sydkorea", score: "2-1", competition: "Asian Cup 2015 Finale", result: "W" },
      { date: "2006-06-12", opponent: "Japan", score: "3-1", competition: "VM 2006 Gruppespil", result: "W" },
      { date: "2006-06-26", opponent: "Italien", score: "0-1", competition: "VM 2006 Ottendedelsfinale", result: "L" },
      { date: "2022-11-26", opponent: "Tunesien", score: "1-0", competition: "VM 2022 Gruppespil", result: "W" },
      { date: "2022-11-30", opponent: "Danmark", score: "1-0", competition: "VM 2022 Gruppespil", result: "W" },
      { date: "2022-12-03", opponent: "Argentina", score: "1-2", competition: "VM 2022 Ottendedelsfinale", result: "L" },
    ],
    achievements: [
      "Asian Cup-vindere 2015",
      "VM-ottendedelsfinale 2006 og 2022",
      "6 VM-deltagelser",
      "OFC Nations Cup-vindere (4 gange)",
      "Skiftede fra OFC til AFC i 2006",
    ],
    faq: [
      {
        question: "Hvorfor spiller Australien i den asiatiske konføderation?",
        answer: "Australien skiftede fra OFC (Oceanien) til AFC (Asien) i 2006 for at få adgang til stærkere konkurrence og nemmere VM-kvalifikation. I OFC var Australien for dominerende, og der var kun 0,5 VM-pladser.",
      },
      {
        question: "Har Australien vundet Asian Cup?",
        answer: "Ja, Australien vandt Asian Cup i 2015 på hjemmebane. I finalen slog Socceroos Sydkorea 2-1 med et mål i forlænget spilletid.",
      },
      {
        question: "Hvem er Australiens bedste fodboldspiller?",
        answer: "Tim Cahill betragtes som Australiens bedste spiller. Han scorede 50 mål i 108 landskampe og var afgørende ved VM 2006 og 2014. Harry Kewell og Mark Viduka er andre legender.",
      },
      {
        question: "Hvad er A-League?",
        answer: "A-League er Australiens professionelle fodboldliga, grundlagt i 2004. Ligaen erstattede den tidligere National Soccer League og har bidraget til fodboldens voksende popularitet i Australien.",
      },
      {
        question: "Hvor mange gange har Australien deltaget i VM?",
        answer: "Australien har deltaget i VM seks gange: 1974, 2006, 2010, 2014, 2018 og 2022. Holdet har nået ottendedelsfinalen to gange (2006 og 2022).",
      },
    ],
  },

  canada: {
    tagline: "Nordamerikansk fodbold i rivende udvikling",
    intro: `<p>Canadas fodboldlandshold har gennemgået en dramatisk transformation i de seneste år. Fra at være en fodboldmæssig parentes i Nordamerika er Canada vokset til en respektabel kraft, der kvalificerede sig til VM 2022 i Qatar — landets første VM-deltagelse i 36 år.</p>
<p>Med Alphonso Davies, en af verdens mest talentfulde unge spillere, i spidsen har Canada en lysstjerne, der kan inspirere en ny generation. Davies' lynhurtige tempo og tekniske kvalitet har gjort ham til en nøglespiller i Bayern München og et symbol på canadisk fodbolds fremtid.</p>
<p>Som medvært for VM 2026 (sammen med <a href="/usa">USA</a> og <a href="/mexico">Mexico</a>) har Canada en historisk mulighed for at vise verden, at landet er en seriøs fodboldnation.</p>`,
    body: `<h2>Canadas fodboldhistorie</h2>
<p>Canada Soccer blev grundlagt i 1912, men fodbold har traditionelt stået i skyggen af ishockey, Canadian football og basketball. Landets eneste tidligere VM-deltagelse var i 1986 i <a href="/mexico">Mexico</a>, hvor Canada tabte alle tre gruppekampe uden at score.</p>

<h3>CONCACAF Gold Cup</h3>
<p>Canada vandt CONCACAF Gold Cup i 2000 — en overraskende triumf, der er det største resultat i canadisk fodboldhistorie. Holdet besejrede <a href="/colombia">Colombia</a> 2-0 i finalen og beviste, at canadisk fodbold havde potentiale.</p>

<h3>Den nye æra — Alphonso Davies og VM 2022</h3>
<p>Vendepunktet for canadisk fodbold kom med fremkomsten af Alphonso Davies og en generation af talentfulde spillere, der alle spiller i stærke europæiske og nordamerikanske ligaer. Under træner John Herdman kvalificerede Canada sig til VM 2022 i Qatar med en imponerende kvalifikationskampagne, hvor holdet slog både <a href="/usa">USA</a> og <a href="/mexico">Mexico</a>.</p>
<p>Ved VM 2022 var oplevelsen bittersød. Canada tabte alle tre gruppekampe (mod <a href="/belgien">Belgien</a> 0-1, <a href="/kroatien">Kroatien</a> 1-4 og <a href="/marokko">Marokko</a> 1-2), men Alphonso Davies scorede Canadas første VM-mål nogensinde mod Kroatien. Selvom resultaterne var skuffende, var deltagelsen i sig selv en milepæl.</p>

<h3>Copa América 2024</h3>
<p>Canada overraskede ved Copa América 2024, hvor holdet nåede semifinalen — en bemærkelsesværdig præstation for en nation, der stadig er i gang med at opbygge sin fodboldidentitet. Holdet viste, at kvaliteten er til stede for at konkurrere med Sydamerikas bedste.</p>

<h2>Spillestil og identitet</h2>
<p>Canadisk fodbold er kendetegnet ved atleticisme, energi og en multikulturel tilgang. Mange af holdets nøglespillere har rødder i andre lande — afspejlende Canadas mangfoldige befolkning — og bringer forskellige fodboldtraditioner med sig.</p>
<p>Canadian Premier League (CPL), lanceret i 2019, har givet canadiske spillere mulighed for at udvikle sig hjemme, mens MLS-holdene i Toronto, Vancouver og Montreal tiltrækker international opmærksomhed.</p>

<h2>VM 2026 — den store scene</h2>
<p>Som medvært for VM 2026 har Canada en unik mulighed for at vise verden sin fodbold. Med Davies som frontfigur og en voksende talentmasse er forventningerne høje. Canadisk fodbold har aldrig haft et bedre udgangspunkt.</p>`,
    keyFacts: {
      fifaRanking: 40,
      nickname: "Les Rouges / CanMNT",
      coach: "Jesse Marsch",
      confederation: "CONCACAF",
      founded: 1912,
      stadium: "BMO Field, Toronto",
      bestResult: "Copa América-semifinale 2024, VM-gruppespil 2022",
      fifaCode: "CAN",
    },
    players: [
      { name: "Alphonso Davies", position: "Forsvar", club: "Bayern München", caps: 50, goals: 14 },
      { name: "Jonathan David", position: "Angriber", club: "Lille", caps: 50, goals: 28 },
      { name: "Cyle Larin", position: "Angriber", club: "Real Valladolid", caps: 65, goals: 29 },
      { name: "Tajon Buchanan", position: "Angriber", club: "Inter", caps: 35, goals: 7 },
      { name: "Stephen Eustáquio", position: "Midtbane", club: "Porto", caps: 30, goals: 3 },
      { name: "Atiba Hutchinson", position: "Midtbane", club: "Pensioneret", caps: 100, goals: 19 },
      { name: "Milan Borjan", position: "Målmand", club: "Røde Stjerne", caps: 65, goals: 0 },
      { name: "Richie Laryea", position: "Forsvar", club: "Toronto FC", caps: 30, goals: 2 },
      { name: "Alistair Johnston", position: "Forsvar", club: "Celtic", caps: 25, goals: 1 },
      { name: "Ismael Koné", position: "Midtbane", club: "Marseille", caps: 20, goals: 2 },
    ],
    matches: [
      { date: "2022-11-27", opponent: "Kroatien", score: "1-4", competition: "VM 2022 Gruppespil", result: "L" },
      { date: "2022-11-23", opponent: "Belgien", score: "0-1", competition: "VM 2022 Gruppespil", result: "L" },
      { date: "2022-12-01", opponent: "Marokko", score: "1-2", competition: "VM 2022 Gruppespil", result: "L" },
      { date: "2000-02-27", opponent: "Colombia", score: "2-0", competition: "CONCACAF Gold Cup 2000 Finale", result: "W" },
      { date: "2024-07-09", opponent: "Argentina", score: "0-2", competition: "Copa América 2024 Semifinale", result: "L" },
      { date: "2021-11-16", opponent: "Mexico", score: "2-1", competition: "VM 2022-kvalifikation", result: "W" },
    ],
    achievements: [
      "CONCACAF Gold Cup-vindere 2000",
      "Copa América-semifinale 2024",
      "VM-deltagelse 1986 og 2022",
      "Alphonso Davies — første canadiske VM-mål 2022",
      "VM 2026-medvært",
    ],
    faq: [
      {
        question: "Har Canada deltaget i VM?",
        answer: "Canada har deltaget i VM to gange: 1986 i Mexico og 2022 i Qatar. Ved VM 2022 scorede Alphonso Davies Canadas første VM-mål nogensinde.",
      },
      {
        question: "Hvem er Alphonso Davies?",
        answer: "Alphonso Davies er Canadas største fodboldstjerne. Født i en flygtningelejr i Ghana, voksede han op i Canada og er nu en af verdens bedste forsvarsspillere i Bayern München.",
      },
      {
        question: "Er Canada vært for VM 2026?",
        answer: "Ja, Canada er medvært for VM 2026 sammen med USA og Mexico. Det vil være første gang, VM afholdes i Canada.",
      },
      {
        question: "Hvad er den canadiske fodboldliga?",
        answer: "Canadian Premier League (CPL) blev lanceret i 2019 som Canadas egen professionelle liga. Derudover spiller tre canadiske hold i MLS: Toronto FC, CF Montréal og Vancouver Whitecaps.",
      },
      {
        question: "Har Canada vundet en international titel?",
        answer: "Ja, Canada vandt CONCACAF Gold Cup i 2000 med en 2-0-finalesejr over Colombia. Holdet nåede også Copa América-semifinalen i 2024.",
      },
    ],
  },

  uruguay: {
    tagline: "Fodboldhistoriens første gigant — to VM-titler",
    intro: `<p>Uruguay er en af de mest bemærkelsesværdige nationer i fodboldhistorien. Med kun 3,5 millioner indbyggere har dette lille sydamerikanske land vundet VM to gange (1930 og 1950) og Copa América rekordmange gange. Uruguay er beviset på, at størrelse ikke bestemmer storhed i fodboldens verden.</p>
<p>Som værtsland for det allerførste VM i 1930 og vinder af turneringen har Uruguay en unik plads i fodboldhistorien. "Maracanazo" i 1950 — sejren over <a href="/brasilien">Brasilien</a> i VM-finalen foran 200.000 tilskuere på Maracanã — er en af de mest legendariske kampe nogensinde.</p>
<p>I den moderne æra har Uruguay fortsat med at producere verdensklassespillere som Luis Suárez, Edinson Cavani og Diego Godín, og holdet er konsistent blandt verdens bedste trods landets beskedne størrelse.</p>`,
    body: `<h2>Uruguays fodboldhistorie</h2>
<p>Det uruguayanske fodboldforbund (AUF) blev grundlagt i 1900, og fodbold er dybt forankret i den uruguayanske kultur. Uruguay var en dominerende kraft i fodboldens tidlige årtier og har en historie, der er uforholdsmæssigt rig i forhold til landets størrelse.</p>

<h3>Det første VM — 1930</h3>
<p>Uruguay var værtsland for det allerførste VM i 1930 og vandt turneringen med en 4-2-sejr over <a href="/argentina">Argentina</a> i finalen i Montevideo. Stadionet Estadio Centenario blev bygget specielt til begivenheden og er i dag et UNESCO-anerkendt monument for fodbolden.</p>
<p>Forinden havde Uruguay allerede vundet OL-guld i fodbold i 1924 og 1928, hvilket effektivt gjorde dem til verdens bedste hold i en årrække.</p>

<h3>Maracanazo — VM 1950</h3>
<p>Den mest legendariske kamp i uruguayansk — og måske hele fodboldens — historie fandt sted den 16. juli 1950 på Maracanã i Rio de Janeiro. <a href="/brasilien">Brasilien</a> havde blot brug for uafgjort i den afgørende finalerundekamp for at vinde VM, og foran næsten 200.000 tilskuere førte brasilianerne 1-0. Men Uruguay vendte kampen og vandt 2-1 med mål af Juan Alberto Schiaffino og Alcides Ghiggia.</p>
<p>"Maracanazo" er stadig et af de mest chokerende resultater i sportens historie og traumatiserede en hel nation, mens den cementerede Uruguays legendestatus i fodbolden.</p>

<h3>Copa América-dominans</h3>
<p>Uruguay har vundet Copa América 15 gange — rekord sammen med Argentina. Holdet har domineret den sydamerikanske turnering i over et århundrede og har vist, at Uruguay fortsat er en kraft i kontinentalt fodbold, selv i perioder hvor VM-resultaterne har været mere blandede.</p>

<h3>Den moderne æra</h3>
<p>I det 21. århundrede har Uruguay oplevet en renæssance. Under træner Óscar Tabárez (2006-2021) etablerede holdet sig igen som en VM-kraft med en fjerdeplads ved VM 2010 i <a href="/sydafrika">Sydafrika</a> og Copa América-titlen i 2011. Diego Forlán vandt den Gyldne Bold som VM 2010's bedste spiller.</p>
<p>Luis Suárez og Edinson Cavani dannede et af de mest frygtede angrebspar i international fodbold, og sammen med Diego Godín i forsvaret havde Uruguay et verdensklassehold i mere end et årti.</p>

<h2>Spillestil og identitet</h2>
<p>Uruguayansk fodbold er kendetegnet ved "garra charrúa" — den krigeriske ånd, der er opkaldt efter det oprindelige Charrúa-folk. Det er en mentalitet der kombinerer stædighed, kampvilje og en aldrig-giv-op-attitude. Uruguayanske spillere er kendt for deres hårde tackler, taktiske kløgt og evne til at kæmpe til det sidste.</p>

<h2>Aktuel status</h2>
<p>Uruguay er fortsat en af de stærkeste nationer i sydamerikansk fodbold. Den nye generation med Federico Valverde (Real Madrid) som frontfigur lover godt for fremtiden, og holdet vil være en seriøs deltager ved VM 2026.</p>`,
    keyFacts: {
      fifaRanking: 10,
      nickname: "La Celeste (De Himmelblå)",
      coach: "Marcelo Bielsa",
      confederation: "CONMEBOL",
      founded: 1900,
      stadium: "Estadio Centenario, Montevideo",
      bestResult: "VM-vindere 1930 og 1950",
      fifaCode: "URU",
    },
    players: [
      { name: "Federico Valverde", position: "Midtbane", club: "Real Madrid", caps: 55, goals: 6 },
      { name: "Darwin Núñez", position: "Angriber", club: "Liverpool", caps: 25, goals: 8 },
      { name: "Ronald Araújo", position: "Forsvar", club: "Barcelona", caps: 30, goals: 2 },
      { name: "Luis Suárez", position: "Angriber", club: "Inter Miami", caps: 140, goals: 68 },
      { name: "Edinson Cavani", position: "Angriber", club: "Boca Juniors", caps: 136, goals: 58 },
      { name: "José María Giménez", position: "Forsvar", club: "Atlético Madrid", caps: 80, goals: 4 },
      { name: "Rodrigo Bentancur", position: "Midtbane", club: "Tottenham", caps: 55, goals: 2 },
      { name: "Facundo Pellistri", position: "Angriber", club: "Manchester United", caps: 20, goals: 2 },
      { name: "Sergio Rochet", position: "Målmand", club: "Inter", caps: 20, goals: 0 },
      { name: "Mathías Olivera", position: "Forsvar", club: "Napoli", caps: 25, goals: 0 },
      { name: "Manuel Ugarte", position: "Midtbane", club: "Manchester United", caps: 20, goals: 0 },
    ],
    matches: [
      { date: "1930-07-30", opponent: "Argentina", score: "4-2", competition: "VM 1930 Finale", result: "W" },
      { date: "1950-07-16", opponent: "Brasilien", score: "2-1", competition: "VM 1950 Finalerunde", result: "W" },
      { date: "2010-07-02", opponent: "Ghana", score: "1-1 (4-2 str.)", competition: "VM 2010 Kvartfinale", result: "W" },
      { date: "2011-07-24", opponent: "Paraguay", score: "3-0", competition: "Copa América 2011 Finale", result: "W" },
      { date: "2010-07-06", opponent: "Holland", score: "2-3", competition: "VM 2010 Semifinale", result: "L" },
      { date: "2018-07-06", opponent: "Frankrig", score: "0-2", competition: "VM 2018 Kvartfinale", result: "L" },
    ],
    achievements: [
      "VM-vindere 1930 og 1950",
      "Copa América-vindere (15 gange — rekord)",
      "OL-guld 1924 og 1928",
      "VM 2010-fjerdeplads",
      "Confederations Cup-deltagelse",
      "Første VM-værtsland og -vinder (1930)",
    ],
    faq: [
      {
        question: "Hvor mange gange har Uruguay vundet VM?",
        answer: "Uruguay har vundet VM to gange: i 1930 (som værtsland, sejr over Argentina 4-2) og i 1950 (den berømte 'Maracanazo', sejr over Brasilien 2-1). Uruguay var det første land til at vinde VM.",
      },
      {
        question: "Hvad er 'Maracanazo'?",
        answer: "'Maracanazo' refererer til Uruguays 2-1-sejr over Brasilien i VM 1950's afgørende kamp på Maracanã foran næsten 200.000 tilskuere. Det er en af de mest chokerende resultater i sportens historie.",
      },
      {
        question: "Hvad er 'garra charrúa'?",
        answer: "'Garra charrúa' (den krigeriske ånd) er et centralt begreb i uruguayansk fodbold. Det refererer til den stædige kampvilje og aldrig-giv-op-mentalitet, der kendetegner uruguayanske spillere.",
      },
      {
        question: "Hvor mange Copa América-titler har Uruguay?",
        answer: "Uruguay har vundet Copa América 15 gange — delt rekord med Argentina. Det gør Uruguay til den mest succesfulde nation i turneringens historie.",
      },
      {
        question: "Hvem er Uruguays bedste spiller i dag?",
        answer: "Federico Valverde (Real Madrid) betragtes som Uruguays nuværende bedste spiller. Luis Suárez er landsholdets topscorer med over 65 mål og er en af de største spillere i Uruguays historie.",
      },
    ],
  },

  albanien: {
    tagline: "De Rød-Sorte — Balkans voksende fodboldkraft",
    intro: `<p>Albaniens fodboldlandshold har i de seneste år gjort sig bemærket med historiske kvalifikationer til store slutrunder. Ved EM 2016 i <a href="/frankrig">Frankrig</a> deltog Albanien for første gang nogensinde i en stor slutrunde, og ved EM 2024 i <a href="/tyskland">Tyskland</a> gentog holdet bedriften.</p>
<p>For et lille balkansk land med en udfordrende fodboldinfrastruktur er disse kvalifikationer bemærkelsesværdige præstationer. Albansk fodbold har nydt godt af en stor diaspora, der har produceret spillere i europæiske topligaer, og holdet har fundet en identitet baseret på defensiv soliditet og holdånd.</p>
<p>Under landstræner Sylvinho har Albanien vist, at holdet kan konkurrere med langt stærkere nationer og er en inspiration for små fodboldlande over hele verden.</p>`,
    body: `<h2>Albaniens fodboldhistorie</h2>
<p>Det albanske fodboldforbund (FSHF) blev grundlagt i 1930, og holdet har kæmpet med begrænsede ressourcer i mange årtier. Albaniens fodboldhistorie har været præget af politisk isolation under kommunismen (1944-1991), der begrænsede landets internationale deltagelse og fodboldudvikling.</p>

<h3>De tidlige år og isolation</h3>
<p>Under Enver Hoxhas kommunistiske regime var Albanien et af verdens mest isolerede lande. Fodbold blev spillet indenlands, men international konkurrence var stærkt begrænset. Det betød, at albansk fodbold faldt bagud i forhold til resten af Europa.</p>
<p>Efter kommunismens fald i 1991 begyndte Albanien langsomt at genintegrere sig i international fodbold, men det tog årtier at opbygge den nødvendige infrastruktur og spillerkvalitet.</p>

<h3>EM 2016 — det historiske gennembrud</h3>
<p>Albaniens største fodboldøjeblik kom ved EM 2016-kvalifikationen, da holdet sikrede sig sin første deltagelse nogensinde i en stor slutrunde. Under træner Gianni De Biasi kvalificerede Albanien sig fra en svær gruppe og rejste til <a href="/frankrig">Frankrig</a> med enorm stolthed.</p>
<p>Ved selve EM 2016 vandt Albanien sensationelt 1-0 over Rumænien i deres tredje gruppekamp — den første sejr for Albanien ved en slutrunde. Selvom holdet ikke avancerede, var oplevelsen transformerende for albansk fodbold.</p>

<h3>EM 2024 — bekræftelsen</h3>
<p>Ved EM 2024 i <a href="/tyskland">Tyskland</a> kvalificerede Albanien sig igen, denne gang under træner Sylvinho. Holdet blev placeret i en svær gruppe med <a href="/spanien">Spanien</a>, <a href="/italien">Italien</a> og <a href="/kroatien">Kroatien</a>, og selvom Albanien ikke avancerede, scorede Nedim Bajrami det hurtigste mål i EM-historien (23 sekunder) mod Italien.</p>

<h3>Diasporaens rolle</h3>
<p>En nøgle til Albaniens fremgang er den albanske diaspora. Mange af holdets nøglespillere er vokset op i lande som Schweiz, <a href="/italien">Italien</a>, <a href="/tyskland">Tyskland</a> og Norden, og har valgt at repræsentere Albanien. Granit Xhaka (der valgte Schweiz) er et eksempel på det talent, diasporaen producerer.</p>

<h2>Spillestil og identitet</h2>
<p>Albansk fodbold er kendetegnet ved defensiv soliditet, kampånd og en tæt holdånd. Holdet spiller typisk med et lavt defensivt block og farlige omstillinger, hvilket har gjort dem til en svær modstander for stærkere hold.</p>

<h2>Aktuel status</h2>
<p>Albanien er etableret som en nation, der kan kvalificere sig til store slutrunder, og ambitionsniveauet stiger. Med en voksende gruppe af spillere i europæiske ligaer og en passioneret fanbase har albansk fodbold en lysere fremtid end nogensinde.</p>`,
    keyFacts: {
      fifaRanking: 56,
      nickname: "De Rød-Sorte (Kuqezinjtë)",
      coach: "Sylvinho",
      confederation: "UEFA",
      founded: 1930,
      stadium: "Arena Kombëtare, Tirana",
      bestResult: "EM-gruppespil 2016 og 2024",
      fifaCode: "ALB",
    },
    players: [
      { name: "Armando Broja", position: "Angriber", club: "Fulham", caps: 25, goals: 5 },
      { name: "Nedim Bajrami", position: "Midtbane", club: "Sassuolo", caps: 35, goals: 6 },
      { name: "Berat Djimsiti", position: "Forsvar", club: "Atalanta", caps: 40, goals: 3 },
      { name: "Thomas Strakosha", position: "Målmand", club: "Brentford", caps: 20, goals: 0 },
      { name: "Elseid Hysaj", position: "Forsvar", club: "Lazio", caps: 50, goals: 1 },
      { name: "Kristjan Asllani", position: "Midtbane", club: "Inter", caps: 25, goals: 2 },
      { name: "Jasir Asani", position: "Angriber", club: "Gwangju FC", caps: 30, goals: 5 },
      { name: "Amir Abrashi", position: "Midtbane", club: "Grasshoppers", caps: 60, goals: 1 },
      { name: "Keidi Bare", position: "Midtbane", club: "Espanyol", caps: 25, goals: 0 },
      { name: "Mario Mitaj", position: "Forsvar", club: "Lokomotiv Moskva", caps: 15, goals: 0 },
    ],
    matches: [
      { date: "2016-06-19", opponent: "Rumænien", score: "1-0", competition: "EM 2016 Gruppespil", result: "W" },
      { date: "2024-06-15", opponent: "Italien", score: "1-2", competition: "EM 2024 Gruppespil", result: "L" },
      { date: "2024-06-19", opponent: "Kroatien", score: "2-2", competition: "EM 2024 Gruppespil", result: "D" },
      { date: "2024-06-24", opponent: "Spanien", score: "0-1", competition: "EM 2024 Gruppespil", result: "L" },
      { date: "2016-06-11", opponent: "Schweiz", score: "0-1", competition: "EM 2016 Gruppespil", result: "L" },
    ],
    achievements: [
      "EM-deltagelse 2016 og 2024",
      "Første EM-sejr: 1-0 over Rumænien (2016)",
      "Hurtigste mål i EM-historien (Bajrami, 23 sek., 2024)",
      "Kvalificeret til 2 EM-slutrunder",
    ],
    faq: [
      {
        question: "Har Albanien deltaget i EM?",
        answer: "Ja, Albanien har deltaget i EM to gange: 2016 i Frankrig og 2024 i Tyskland. Ved EM 2016 vandt holdet sin første slutrundekamp nogensinde med 1-0 over Rumænien.",
      },
      {
        question: "Har Albanien deltaget i VM?",
        answer: "Nej, Albanien har aldrig kvalificeret sig til en VM-slutrunde. Holdet har dog gjort fremskridt i de seneste kvalifikationer og nærmer sig VM-kvalifikation.",
      },
      {
        question: "Hvem scorede det hurtigste mål i EM-historien?",
        answer: "Nedim Bajrami fra Albanien scorede det hurtigste mål i EM-historien efter blot 23 sekunder mod Italien ved EM 2024. Albanien tabte dog kampen 1-2.",
      },
      {
        question: "Hvem er Albaniens bedste fodboldspiller?",
        answer: "Lorik Cana er historisk en af Albaniens mest berømte spillere. I dag er Berat Djimsiti (Atalanta) og Kristjan Asllani (Inter) blandt de mest profilerede albanske spillere.",
      },
      {
        question: "Hvad er Albaniens kaldenavn?",
        answer: "Albaniens landshold kaldes 'Kuqezinjtë' (De Rød-Sorte), efter farverne på det albanske flag med den dobbelthovedede ørn.",
      },
    ],
  },

  tjekkiet: {
    tagline: "Europæisk fodboldtradition med guldne generationer",
    intro: `<p>Tjekkiets fodboldlandshold (officielt Tjekkiske Republik, nu ofte kaldet Tjekkia) har en af de rigeste fodboldtraditioner i Centraleuropa. Med rødder i det tidligere Tjekkoslovakiet, der vandt VM-sølv to gange og EM i 1976, har tjekkisk fodbold en lang historie med at producere verdensklassespillere.</p>
<p>Som selvstændigt land nåede Tjekkiet EM-finalen i 1996 og har haft stjernenavne som Pavel Nedvěd, Tomáš Rosický, Petr Čech og Milan Baroš. Den tjekkiske fodboldskole er berømt for sin tekniske kvalitet og taktiske intelligens.</p>
<p>Selvom holdet har kæmpet med generationsskifter i de seneste år, er den tjekkiske liga fortsat en vigtig talentfabrik, og holdet har en stolt tradition at bygge videre på.</p>`,
    body: `<h2>Tjekkiets fodboldhistorie</h2>
<p>Den tjekkiske fodboldtradition strækker sig tilbage til Tjekkoslovakiets æra. Tjekkoslovakiet var en af Europas stærkeste fodboldnationer og nåede VM-finalen i 1934 og 1962, begge gange med tab til værtslandene (<a href="/italien">Italien</a> og <a href="/brasilien">Brasilien</a>). I 1976 vandt Tjekkoslovakiet EM med det berømte Antonín Panenka-straffespark i finalen mod <a href="/tyskland">Vesttyskland</a>.</p>

<h3>EM 1996 — finalen på Wembley</h3>
<p>Som nyt selvstændigt land (efter Tjekkoslovakiets opløsning i 1993) leverede Tjekkiet en sensationel præstation ved EM 1996 i <a href="/england">England</a>. Holdet spillede sig hele vejen til finalen på Wembley, hvor de tabte 1-2 til <a href="/tyskland">Tyskland</a> i forlænget spilletid efter Oliver Bierhoffs golden goal.</p>
<p>Karel Poborský's lob-mål mod <a href="/portugal">Portugal</a> i kvartfinalen er et af de mest ikoniske mål i EM-historien. Holdet med Poborský, Pavel Nedvěd og Patrik Berger var exceptionelt talentfuldt.</p>

<h3>Den gyldne generation (2000-2006)</h3>
<p>I begyndelsen af 2000-tallet havde Tjekkiet en gyldne generation anført af Pavel Nedvěd (Ballon d'Or 2003), Tomáš Rosický, Milan Baroš, Jan Koller og Petr Čech. Ved EM 2004 i <a href="/portugal">Portugal</a> leverede holdet fremragende fodbold og var blandt favoritterne, men tabte semifinalen til <a href="/graekenland">Grækenland</a> med et sølvmål.</p>
<p>Milan Baroš vandt turneringens topscorertitel med fem mål og bekræftede den tjekkiske generations kvalitet.</p>

<h3>Nyere præstationer</h3>
<p>Ved EM 2021 overraskede Tjekkiet ved at nå kvartfinalen, hvor holdet tabte 1-2 til <a href="/danmark">Danmark</a>. Patrik Schick scorede et af turneringens bedste mål — et langskud fra midtbanen mod <a href="/skotland">Skotland</a> — og vandt en delt Gyldne Støvle.</p>

<h2>Spillestil og identitet</h2>
<p>Tjekkisk fodbold er kendetegnet ved teknisk dygtighed, taktisk intelligens og en stærk tradition for kreative midtbanespillere. Den tjekkiske liga har produceret spillere, der har domineret i Europas største klubber, og den tjekkiske spillestil prioriterer boldbesiddelse og konstruktivt opspil.</p>
<p>"Panenka"-straffesparket — opkaldt efter Antonín Panenka, der brugte teknikken i EM 1976-finalen — er blevet en global fodboldteknik og et symbol på tjekkisk kreativitet og dristighed.</p>

<h2>Aktuel status</h2>
<p>Tjekkiet gennemgår et generationsskifte, men med talenter som Patrik Schick og Adam Hložek har holdet stadig kvalitet til at konkurrere i europæisk fodbold. Den tjekkiske liga fortsætter med at udvikle talenter, og Sparta Prag og Slavia Prag er faste deltagere i europæiske turneringer.</p>`,
    keyFacts: {
      fifaRanking: 36,
      nickname: "Národní tým (Nationalholdet)",
      coach: "Ivan Hašek",
      confederation: "UEFA",
      founded: 1901,
      stadium: "Eden Arena, Prag",
      bestResult: "EM-finalister 1996, EM-vindere 1976 (som Tjekkoslovakiet)",
      fifaCode: "CZE",
    },
    players: [
      { name: "Patrik Schick", position: "Angriber", club: "Bayer Leverkusen", caps: 40, goals: 18 },
      { name: "Tomáš Souček", position: "Midtbane", club: "West Ham", caps: 55, goals: 10 },
      { name: "Vladimír Coufal", position: "Forsvar", club: "West Ham", caps: 40, goals: 2 },
      { name: "Adam Hložek", position: "Angriber", club: "Bayer Leverkusen", caps: 25, goals: 5 },
      { name: "Alex Král", position: "Midtbane", club: "Espanyol", caps: 30, goals: 1 },
      { name: "Tomáš Holeš", position: "Forsvar", club: "Slavia Prag", caps: 20, goals: 2 },
      { name: "Jindřich Staněk", position: "Målmand", club: "Slavia Prag", caps: 10, goals: 0 },
      { name: "Lukáš Provod", position: "Midtbane", club: "Slavia Prag", caps: 15, goals: 3 },
      { name: "David Jurásek", position: "Forsvar", club: "Hoffenheim", caps: 10, goals: 1 },
      { name: "Mojmír Chytil", position: "Angriber", club: "Slavia Prag", caps: 10, goals: 2 },
    ],
    matches: [
      { date: "1996-06-30", opponent: "Tyskland", score: "1-2", competition: "EM 1996 Finale", result: "L" },
      { date: "2004-07-01", opponent: "Grækenland", score: "0-1", competition: "EM 2004 Semifinale", result: "L" },
      { date: "2021-06-27", opponent: "Holland", score: "2-0", competition: "EM 2021 Ottendedelsfinale", result: "W" },
      { date: "2021-07-03", opponent: "Danmark", score: "1-2", competition: "EM 2021 Kvartfinale", result: "L" },
      { date: "1996-06-23", opponent: "Portugal", score: "1-0", competition: "EM 1996 Kvartfinale", result: "W" },
      { date: "2024-06-18", opponent: "Georgien", score: "1-1", competition: "EM 2024 Gruppespil", result: "D" },
    ],
    achievements: [
      "EM-finalister 1996",
      "EM-semifinale 2004",
      "EM-kvartfinale 2021",
      "VM-finalister 1934, 1962 (som Tjekkoslovakiet)",
      "EM-vindere 1976 (som Tjekkoslovakiet)",
      "Panenka-straffesparket — global fodboldteknik",
    ],
    faq: [
      {
        question: "Har Tjekkiet vundet EM?",
        answer: "Som Tjekkoslovakiet vandt holdet EM i 1976 med Panenka-straffesparket i finalen. Som Tjekkiet nåede holdet EM-finalen i 1996, men tabte til Tyskland med et golden goal.",
      },
      {
        question: "Hvad er et 'Panenka'-straffespark?",
        answer: "Panenka-straffesparket er opkaldt efter Antonín Panenka, der i EM 1976-finalen chippede bolden ned midt i målet, da målmanden kastede sig. Teknikken bruges stadig i dag og er et symbol på tjekkisk dristighed.",
      },
      {
        question: "Hvem er Tjekkiets bedste fodboldspiller?",
        answer: "Pavel Nedvěd (Ballon d'Or 2003) betragtes som Tjekkiets bedste spiller. Petr Čech er en af de bedste målmænd i fodboldhistorien, og Tomáš Rosický var en elsket kreativ spiller.",
      },
      {
        question: "Har Tjekkiet deltaget i VM?",
        answer: "Som Tjekkiet har holdet deltaget i VM én gang (2006 i Tyskland). Som Tjekkoslovakiet deltog holdet i flere VM-slutrunder og nåede finalen to gange (1934 og 1962).",
      },
      {
        question: "Hvem er Patrik Schick?",
        answer: "Patrik Schick er Tjekkiets mest profilerede angriber. Han scorede et ikonisk langskudsmål fra midtbanen mod Skotland ved EM 2021 og var turneringens delte topscorer.",
      },
    ],
  },

  colombia: {
    tagline: "Los Cafeteros — Sydamerikas mest underholdende hold",
    intro: `<p>Colombias fodboldlandshold, kendt som "Los Cafeteros" (Kaffedyrkerne), er en af de mest passionerende og underholdende nationer i sydamerikansk fodbold. Med en spillestil der prioriterer flair, kreativitet og offensivt mod har Colombia altid været en publikumsfavorit.</p>
<p>Fra Carlos Valderrama og René Higuitas scorpion-redning i 1990'erne til James Rodríguez' mesterlige præstation ved VM 2014 har colombiansk fodbold produceret ikoniske øjeblikke og spillere, der har fascineret verden.</p>
<p>I den moderne æra har Colombia etableret sig som en konstant kraft i sydamerikansk fodbold og nåede Copa América-finalen i 2024 efter at have besejret <a href="/uruguay">Uruguay</a> i semifinalen.</p>`,
    body: `<h2>Colombias fodboldhistorie</h2>
<p>Det colombianske fodboldforbund (FCF) blev grundlagt i 1924, og colombiansk fodbold har en farverig og til tider dramatisk historie. Holdet har deltaget i seks VM-slutrunder og har produceret nogle af de mest karismatiske spillere i fodboldhistorien.</p>

<h3>VM 1990 — det store gennembrud</h3>
<p>Ved VM 1990 i <a href="/italien">Italien</a> tiltrak Colombia verdens opmærksomhed med sin attraktive spillestil. Under træner Francisco Maturana og med Carlos Valderrama og Freddy Rincón i spidsen spillede Colombia underholdende fodbold. Rincóns udligningsmål mod <a href="/tyskland">Vesttyskland</a> i de døende sekunder af gruppekampen er et af de mest ikoniske VM-mål.</p>
<p>Colombia nåede ottendedelsfinalen, hvor holdet tabte til Cameroun i en dramatisk kamp. Men turneringen etablerede Colombia som en af de mest spændende fodboldnationer.</p>

<h3>VM 2014 — James Rodríguez' turnering</h3>
<p>VM 2014 i <a href="/brasilien">Brasilien</a> var Colombias bedste VM-præstation. Under træner José Pékerman leverede holdet fremragende fodbold og nåede kvartfinalen. James Rodríguez var turneringens absolutte stjerne og vandt den Gyldne Støvle som topscorer med seks mål — herunder et spektakulært volleymål mod <a href="/uruguay">Uruguay</a> i ottendedelsfinalen, der vandt FIFA Puskás-prisen som årets mål.</p>
<p>I kvartfinalen tabte Colombia til Brasilien med 1-2 i en fysisk og kontroversiel kamp, men præstationen cementerede Colombias status som en sydamerikansk topnation.</p>

<h3>Copa América 2024</h3>
<p>Colombia nåede Copa América-finalen i 2024 efter en imponerende turnering. Holdet besejrede <a href="/uruguay">Uruguay</a> i semifinalen, men tabte finalen til <a href="/argentina">Argentina</a>. Præstationen viste, at Colombia fortsat er en af de stærkeste nationer i sydamerikansk fodbold.</p>

<h2>Spillestil og identitet</h2>
<p>Colombiansk fodbold er kendetegnet ved kreativitet, flair og en festlig atmosfære. Holdet har altid prioriteret offensivt, underholdende spil og har produceret fantastiske tekniske spillere. Den colombianske fodboldkultur er intens, og kampe i Barranquilla — Colombias hjemmeby for landshold — er berømte for deres tropiske varme og lidenskabelige fans.</p>
<p>Estadio Metropolitano Roberto Meléndez i Barranquilla, med sine 50.000 sæder og ekstreme varme, er en af de mest frygtede hjemmebaner i sydamerikansk fodbold.</p>

<h2>Aktuel status</h2>
<p>Med spillere som Luis Díaz (Liverpool), Jhon Arias og Richard Ríos har Colombia en ny generation, der kan bygge videre på de seneste successer. Holdet er en fast deltager i VM-kvalifikationen og Copa América, og med den colombianske ligaas fortsatte udvikling ser fremtiden lovende ud.</p>`,
    keyFacts: {
      fifaRanking: 12,
      nickname: "Los Cafeteros (Kaffedyrkerne)",
      coach: "Néstor Lorenzo",
      confederation: "CONMEBOL",
      founded: 1924,
      stadium: "Estadio Metropolitano, Barranquilla",
      bestResult: "VM-kvartfinale 2014, Copa América-finalister 2024",
      fifaCode: "COL",
    },
    players: [
      { name: "Luis Díaz", position: "Angriber", club: "Liverpool", caps: 45, goals: 10 },
      { name: "James Rodríguez", position: "Midtbane", club: "León", caps: 100, goals: 25 },
      { name: "Jhon Arias", position: "Angriber", club: "Fluminense", caps: 15, goals: 3 },
      { name: "Richard Ríos", position: "Midtbane", club: "Palmeiras", caps: 15, goals: 2 },
      { name: "Davinson Sánchez", position: "Forsvar", club: "Galatasaray", caps: 55, goals: 1 },
      { name: "David Ospina", position: "Målmand", club: "Al-Nassr", caps: 120, goals: 0 },
      { name: "Juan Cuadrado", position: "Midtbane", club: "Inter", caps: 115, goals: 12 },
      { name: "Jefferson Lerma", position: "Midtbane", club: "Crystal Palace", caps: 45, goals: 2 },
      { name: "Yerry Mina", position: "Forsvar", club: "Fiorentina", caps: 45, goals: 8 },
      { name: "Rafael Santos Borré", position: "Angriber", club: "Internacional", caps: 30, goals: 5 },
    ],
    matches: [
      { date: "2014-06-28", opponent: "Uruguay", score: "2-0", competition: "VM 2014 Ottendedelsfinale", result: "W" },
      { date: "2014-07-04", opponent: "Brasilien", score: "1-2", competition: "VM 2014 Kvartfinale", result: "L" },
      { date: "2024-07-14", opponent: "Argentina", score: "0-1", competition: "Copa América 2024 Finale", result: "L" },
      { date: "2024-07-10", opponent: "Uruguay", score: "1-0", competition: "Copa América 2024 Semifinale", result: "W" },
      { date: "2001-07-29", opponent: "Mexico", score: "1-0", competition: "Copa América 2001 Finale", result: "W" },
      { date: "1990-06-19", opponent: "Vesttyskland", score: "1-1", competition: "VM 1990 Gruppespil", result: "D" },
    ],
    achievements: [
      "Copa América-vindere 2001",
      "Copa América-finalister 2024",
      "VM-kvartfinale 2014",
      "James Rodríguez — VM 2014 Gyldne Støvle",
      "6 VM-deltagelser",
      "Copa América 2016-semifinale",
    ],
    faq: [
      {
        question: "Har Colombia vundet VM?",
        answer: "Nej, Colombias bedste VM-resultat er kvartfinalen i 2014, hvor holdet tabte til Brasilien. James Rodríguez vandt turneringens Gyldne Støvle som topscorer.",
      },
      {
        question: "Hvem er James Rodríguez?",
        answer: "James Rodríguez er en af Colombias mest berømte spillere. Han vandt den Gyldne Støvle ved VM 2014 og scorede et ikonisk volleymål mod Uruguay, der vandt FIFA Puskás-prisen.",
      },
      {
        question: "Hvad er Colombias kaldenavn?",
        answer: "'Los Cafeteros' (Kaffedyrkerne) refererer til Colombias status som en af verdens største kaffeproducenter. Holdet spiller i gult, hvilket også forbindes med den colombianske identitet.",
      },
      {
        question: "Har Colombia vundet Copa América?",
        answer: "Ja, Colombia vandt Copa América i 2001 på hjemmebane. Holdet nåede også finalen i 2024, hvor de tabte til Argentina.",
      },
      {
        question: "Hvem var Carlos Valderrama?",
        answer: "Carlos Valderrama, med sit ikoniske blonde afro-hår, er en af de mest genkendelige spillere i fodboldhistorien. Han var Colombias kaptajn og playmaker i 1990'erne og spillede 111 landskampe.",
      },
    ],
  },

  "new-zealand": {
    tagline: "All Whites — Oceaniens eneste VM-deltager",
    intro: `<p>New Zealands fodboldlandshold, kendt som "All Whites", er den dominerende kraft i oceanisk fodbold og den eneste nation fra Oceanien, der har kvalificeret sig til VM-slutrunder. Trods fodboldmarginalisering i et land domineret af rugby har New Zealand markeret sig med VM-deltagelser i 1982 og 2010.</p>
<p>Ved VM 2010 i <a href="/sydafrika">Sydafrika</a> blev New Zealand det eneste ubesejrede hold i hele turneringen — en bemærkelsesværdig statistik, selvom holdet ikke avancerede fra gruppespillet. Tre uafgjorte kampe, herunder 1-1 mod <a href="/italien">Italien</a> (de forsvarende verdensmestre), gav New Zealand en unik plads i VM-historien.</p>
<p>Fodbold vokser i New Zealand, og med forbedrede strukturer og flere spillere i professionelle ligaer i udlandet sigter holdet mod at kvalificere sig til fremtidige VM-slutrunder.</p>`,
    body: `<h2>New Zealands fodboldhistorie</h2>
<p>New Zealand Football blev grundlagt i 1891, hvilket gør det til et af de ældste fodboldforbund i verden. Men i et land, hvor rugby union er den altdominerende sport, har fodbold altid kæmpet om opmærksomhed og ressourcer.</p>

<h3>VM 1982 — den første kvalifikation</h3>
<p>New Zealands første store øjeblik i fodbold kom med kvalifikationen til VM 1982 i <a href="/spanien">Spanien</a>. Holdet måtte igennem en lang kvalifikationsproces, der inkluderede kampe over hele Oceanien og Asien. Ved selve VM tabte New Zealand alle tre gruppekampe, men deltagelsen var en milepæl og inspirerede en generation af fodboldspillere.</p>

<h3>VM 2010 — ubesejrede i Sydafrika</h3>
<p>28 år efter den første VM-deltagelse kvalificerede New Zealand sig igen — denne gang til VM 2010 i <a href="/sydafrika">Sydafrika</a>. Resultatet var bemærkelsesværdigt: tre uafgjorte kampe (1-1 mod <a href="/italien">Italien</a>, 1-1 mod <a href="/usa">USA</a> og 0-0 mod Paraguay).</p>
<p>Kampen mod Italien er særligt historisk. New Zealand udlignede via Shane Smeltz's mål og holdt uafgjort mod de forsvarende verdensmestre i en kamp, der chokerede fodboldverdenen. New Zealand endte turneringen som det eneste ubesejrede hold — en unik bedrift.</p>

<h3>OFC-dominans</h3>
<p>I den oceaniske konføderation (OFC) er New Zealand den klart dominerende kraft. Holdet har vundet OFC Nations Cup fem gange og deltager regelmæssigt i interkontinentale play-offs om VM-kvalifikation. Den største udfordring er manglen på stærke modstandere i regionen, hvilket gør det svært at udvikle holdet til VM-niveau.</p>

<h2>Spillestil og identitet</h2>
<p>New Zealandsk fodbold er kendetegnet ved fysisk styrke, kampånd og den typiske "kiwi"-mentalitet — aldrig give op, uanset modstanderens kvalitet. Holdet har traditionelt spillet en defensiv, organiseret stil og har forsøgt at udnytte dødbolde og kontraangreb.</p>
<p>Forbindelsen til <a href="/australien">Australien</a> er vigtig — mange new zealandske spillere har spillet i A-League, og de to lande mødes regelmæssigt i kampene om oceanisk og asiatisk fodboldherredømme.</p>

<h2>Aktuel status</h2>
<p>New Zealand sigter mod at kvalificere sig til VM 2026, men vejen er vanskelig med interkontinentale play-offs. Med flere spillere i professionelle ligaer og forbedrede ungdomsstrukturer har holdet dog aldrig haft et bedre udgangspunkt. Kvindelandsholdet, "Football Ferns", var medvært for Kvindernes VM 2023, hvilket har givet fodbold et løft i landet.</p>`,
    keyFacts: {
      fifaRanking: 93,
      nickname: "All Whites",
      coach: "Darren Bazeley",
      confederation: "OFC",
      founded: 1891,
      stadium: "Eden Park, Auckland",
      bestResult: "VM-gruppespil 1982 og 2010 (ubesejret 2010)",
      fifaCode: "NZL",
    },
    players: [
      { name: "Chris Wood", position: "Angriber", club: "Nottingham Forest", caps: 70, goals: 32 },
      { name: "Winston Reid", position: "Forsvar", club: "Pensioneret", caps: 40, goals: 2 },
      { name: "Ryan Thomas", position: "Midtbane", club: "PEC Zwolle", caps: 25, goals: 2 },
      { name: "Liberato Cacace", position: "Forsvar", club: "Empoli", caps: 20, goals: 1 },
      { name: "Joe Bell", position: "Midtbane", club: "Viking", caps: 20, goals: 1 },
      { name: "Matt Garbett", position: "Midtbane", club: "NAC Breda", caps: 15, goals: 2 },
      { name: "Stefan Marinović", position: "Målmand", club: "Wellington Phoenix", caps: 25, goals: 0 },
      { name: "Tim Payne", position: "Forsvar", club: "Wellington Phoenix", caps: 15, goals: 0 },
      { name: "Kosta Barbarouses", position: "Angriber", club: "Wellington Phoenix", caps: 35, goals: 8 },
      { name: "Marko Stamenić", position: "Midtbane", club: "Lech Poznań", caps: 10, goals: 0 },
    ],
    matches: [
      { date: "2010-06-20", opponent: "Italien", score: "1-1", competition: "VM 2010 Gruppespil", result: "D" },
      { date: "2010-06-15", opponent: "Slovakiet", score: "1-1", competition: "VM 2010 Gruppespil", result: "D" },
      { date: "2010-06-24", opponent: "Paraguay", score: "0-0", competition: "VM 2010 Gruppespil", result: "D" },
      { date: "1982-06-15", opponent: "Skotland", score: "2-5", competition: "VM 1982 Gruppespil", result: "L" },
      { date: "2017-11-15", opponent: "Peru", score: "0-2", competition: "VM 2018-playoff", result: "L" },
    ],
    achievements: [
      "VM-deltagelse 1982 og 2010",
      "Ubesejret ved VM 2010 (eneste hold)",
      "1-1 mod forsvarende verdensmestre Italien (2010)",
      "OFC Nations Cup-vindere (5 gange)",
      "VM 2023 Kvinder — medvært",
    ],
    faq: [
      {
        question: "Har New Zealand deltaget i VM?",
        answer: "Ja, New Zealand har deltaget i VM to gange: 1982 i Spanien og 2010 i Sydafrika. Ved VM 2010 var New Zealand det eneste ubesejrede hold i turneringen med tre uafgjorte kampe.",
      },
      {
        question: "Spillede New Zealand uafgjort mod Italien?",
        answer: "Ja, ved VM 2010 spillede New Zealand 1-1 mod Italien — de forsvarende verdensmestre. Shane Smeltz scorede for New Zealand i en historisk kamp.",
      },
      {
        question: "Hvad er All Whites?",
        answer: "'All Whites' er New Zealands fodboldlandshold, opkaldt efter holdets hvide spilletrøjer. Navnet er en parallel til rugby-landsholdet 'All Blacks'.",
      },
      {
        question: "Er fodbold populært i New Zealand?",
        answer: "Fodbold er voksende i New Zealand, men rugby union er stadig den dominerende sport. Kvindernes VM 2023, som New Zealand var medvært for, gav sporten et stort løft i popularitet.",
      },
      {
        question: "Hvem er New Zealands bedste fodboldspiller?",
        answer: "Chris Wood er New Zealands mest profilerede nuværende spiller med over 30 landskampmål og en karriere i den engelske Premier League. Ryan Nelsen og Shane Smeltz er andre legender.",
      },
    ],
  },

  chile: {
    tagline: "La Roja — to Copa América-titler med den gyldne generation",
    intro: `<p>Chiles fodboldlandshold, "La Roja", har en stolt fodboldtradition, der kulminerede med to Copa América-titler i 2015 og 2016. Den gyldne generation med Alexis Sánchez, Arturo Vidal og Eduardo Vargas transformerede Chile fra en solid sydamerikansk nation til en kontinental stormagt.</p>
<p>Under ledelse af den argentinske træner Jorge Sampaoli og hans efterfølger Juan Antonio Pizzi udviklede Chile en intens, højpressende spillestil, der overvældede modstandere og førte til historiske triumfer over <a href="/argentina">Argentina</a> i to Copa América-finaler.</p>
<p>Selvom den gyldne generation er ved at træde tilbage, har Chiles succes inspireret en ny generation og etableret landet som en vigtig fodboldnation i Sydamerika.</p>`,
    body: `<h2>Chiles fodboldhistorie</h2>
<p>Det chilenske fodboldforbund (FFCh) blev grundlagt i 1895, og Chile har en lang fodboldtradition. Holdet var vært for VM i 1962 og nåede semifinalen — det bedste VM-resultat i landets historie.</p>

<h3>VM 1962 — hjemmebanefordelen</h3>
<p>Ved VM 1962, som Chile var vært for, nåede holdet semifinalen og endte på tredjepladsen. Turneringen er dog også berygtet for "Slaget om Santiago" — en voldelig kamp mod <a href="/italien">Italien</a>, der er en af de mest brutale kampe i VM-historien.</p>
<p>Chiles tredjeplads ved VM 1962 var i mange år landets største fodboldpræstation, og det tog over 50 år, før den gyldne generation overgik den.</p>

<h3>Den gyldne generation (2014-2017)</h3>
<p>Chiles mest succesfulde periode begyndte under Marcelo Bielsa (2007-2011), der indførte en intensiv, presbaseret spillestil, som Jorge Sampaoli videreudviklede. Resultatet var et hold, der spillede med en energi og intensitet, der var uovertruffen i sydamerikansk fodbold.</p>
<p>Copa América 2015 i Chile var det store gennembrud. Holdet slog <a href="/uruguay">Uruguay</a>, <a href="/peru">Peru</a> og i finalen <a href="/argentina">Argentina</a> på straffespark. Alexis Sánchez scorede det afgørende straffespark, og Chile fejrede sin første Copa América-titel nogensinde.</p>
<p>I 2016 forsvarede Chile titlen ved Copa América Centenario i <a href="/usa">USA</a> — igen med en finalesejr over Argentina på straffespark. To titler i træk cementerede denne generation som den bedste i chilenisk fodboldhistorie.</p>

<h3>Spillere fra den gyldne æra</h3>
<p>Alexis Sánchez (Barcelona, Arsenal) var den kreative kraft. Arturo Vidal (Juventus, Bayern München, Barcelona) var den energiske midtbane-kriger. Eduardo Vargas var turneringsspilleren, der altid scorede de vigtige mål ved Copa América. Claudio Bravo var den pålidelige målmand. Sammen udgjorde de et hold, der var mere end summen af sine dele.</p>

<h2>Spillestil og identitet</h2>
<p>Chilenisk fodbold under den gyldne generation var kendetegnet ved en ekstremt intens presfodbold, hurtige omstillinger og en aggressiv mentalitet. Holdet pressede højt, vandt bolden i modstanderens halvdel og angreb med flere spillere samtidig. Det var fysisk krævende, men enormt effektivt.</p>
<p>Estadio Nacional i Santiago, med en kapacitet på 49.000, er Chiles hjemmebane og har lagt græs til nogle af de mest mindeværdige kampe i sydamerikansk fodboldhistorie.</p>

<h2>Aktuel status</h2>
<p>Chile gennemgår et svært generationsskifte efter den gyldne generations aftræden. Holdet manglede VM 2022 og kæmper for at kvalificere sig til VM 2026. Den næste generation har endnu ikke vist samme niveau som forgængerne, men chilenisk fodbold har en stærk infrastruktur at bygge på.</p>`,
    keyFacts: {
      fifaRanking: 38,
      nickname: "La Roja (De Røde)",
      coach: "Ricardo Gareca",
      confederation: "CONMEBOL",
      founded: 1895,
      stadium: "Estadio Nacional, Santiago",
      bestResult: "Copa América-vindere 2015 og 2016",
      fifaCode: "CHI",
    },
    players: [
      { name: "Alexis Sánchez", position: "Angriber", club: "Udinese", caps: 160, goals: 50 },
      { name: "Arturo Vidal", position: "Midtbane", club: "Colo-Colo", caps: 140, goals: 34 },
      { name: "Eduardo Vargas", position: "Angriber", club: "Atlético Mineiro", caps: 110, goals: 42 },
      { name: "Claudio Bravo", position: "Målmand", club: "Pensioneret", caps: 150, goals: 0 },
      { name: "Ben Brereton Díaz", position: "Angriber", club: "Sheffield United", caps: 30, goals: 6 },
      { name: "Erick Pulgar", position: "Midtbane", club: "Flamengo", caps: 40, goals: 5 },
      { name: "Marcelino Núñez", position: "Midtbane", club: "Norwich City", caps: 20, goals: 3 },
      { name: "Gabriel Suazo", position: "Forsvar", club: "Toulouse", caps: 25, goals: 1 },
      { name: "Diego Valdés", position: "Midtbane", club: "América", caps: 20, goals: 4 },
      { name: "Guillermo Maripán", position: "Forsvar", club: "Monaco", caps: 40, goals: 4 },
    ],
    matches: [
      { date: "2015-07-04", opponent: "Argentina", score: "0-0 (4-1 str.)", competition: "Copa América 2015 Finale", result: "W" },
      { date: "2016-06-26", opponent: "Argentina", score: "0-0 (4-2 str.)", competition: "Copa América 2016 Finale", result: "W" },
      { date: "2014-06-18", opponent: "Spanien", score: "2-0", competition: "VM 2014 Gruppespil", result: "W" },
      { date: "2010-06-25", opponent: "Spanien", score: "1-2", competition: "VM 2010 Gruppespil", result: "L" },
      { date: "2014-06-28", opponent: "Brasilien", score: "1-1 (2-3 str.)", competition: "VM 2014 Ottendedelsfinale", result: "L" },
      { date: "1962-06-16", opponent: "Jugoslavien", score: "1-0", competition: "VM 1962 Tredjepladskamp", result: "W" },
    ],
    achievements: [
      "Copa América-vindere 2015 og 2016",
      "VM-tredjeplads 1962",
      "VM-kvartfinale 1930",
      "2 Copa América-titler i træk",
      "9 VM-deltagelser",
      "Confederations Cup-finalister 2017",
    ],
    faq: [
      {
        question: "Har Chile vundet Copa América?",
        answer: "Ja, Chile vandt Copa América to gange i træk: 2015 på hjemmebane og 2016 (Centenario) i USA. Begge gange slog holdet Argentina i finalen på straffespark.",
      },
      {
        question: "Hvem er Chiles bedste fodboldspiller?",
        answer: "Alexis Sánchez betragtes som Chiles mest talentfulde spiller med en karriere i Barcelona, Arsenal og Inter. Arturo Vidal og Eduardo Vargas er andre legender fra den gyldne generation.",
      },
      {
        question: "Har Chile deltaget i VM?",
        answer: "Ja, Chile har deltaget i VM ni gange. Det bedste resultat er tredjepladsen i 1962 som værtsland. I den moderne æra nåede holdet ottendedelsfinalen i 2010 og 2014.",
      },
      {
        question: "Hvad er 'La Roja'?",
        answer: "'La Roja' (De Røde) er Chiles kaldenavn, opkaldt efter holdets røde spilletrøjer. Det er det samme kaldenavn som Spanien bruger, men i sydamerikansk kontekst refererer det altid til Chile.",
      },
      {
        question: "Hvem er Ben Brereton Díaz?",
        answer: "Ben Brereton Díaz er en engelsk-chilensk angriber, der valgte at repræsentere Chile. Født i England af en chilensk mor, blev han en folkehelt i Chile efter at have scoret vigtige mål i Copa América 2021.",
      },
    ],
  },
};

export function getTeamData(slug: string): TeamData | undefined {
  return TEAM_DATA[slug];
}
