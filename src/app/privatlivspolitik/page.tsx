import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privatlivspolitik — ${SITE_NAME}`,
  description:
    "Læs om hvordan Fodboldlandshold.dk håndterer dine personoplysninger i overensstemmelse med GDPR. Se dine rettigheder og vores databehandlingsgrundlag.",
  alternates: { canonical: `${SITE_URL}/privatlivspolitik` },
  robots: { index: true, follow: true },
};

export default function PrivatlivspolitikPage() {
  return (
    <>
      <section className="bg-navy-900 text-white py-10">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <nav className="text-sm text-navy-300 mb-4">
            <Link href="/" className="hover:text-white">Forside</Link>
            <span className="mx-2">/</span>
            <span className="text-navy-200">Privatlivspolitik</span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight">Privatlivspolitik</h1>
          <p className="mt-2 text-sm text-white/60">Senest opdateret: juli 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-8 sm:py-12">
        <div className="prose prose-gray max-w-none">
          <h2>1. Dataansvarlig</h2>
          <p>Den dataansvarlige for behandlingen af personoplysninger på dette website er:</p>
          <ul>
            <li><strong>Virksomhed:</strong> {COMPANY.name}</li>
            <li><strong>CVR:</strong> {COMPANY.cvr}</li>
            <li><strong>Adresse:</strong> {COMPANY.address}, Danmark</li>
            <li><strong>Website:</strong> <a href={SITE_URL}>{SITE_NAME}</a></li>
          </ul>

          <h2>2. Hvilke oplysninger indsamler vi?</h2>
          <p>{SITE_NAME} er en informationsside om fodboldlandshold. Vi tilbyder ikke produkter eller tjenester og indsamler ikke købs- eller tilmeldingsdata.</p>

          <h3>2.1 Automatisk indsamlede oplysninger</h3>
          <ul>
            <li>IP-adresse (anonymiseret)</li>
            <li>Browsertype og version</li>
            <li>Besøgte sider og tidspunkt for besøg</li>
            <li>Henvisningsside</li>
            <li>Enhedstype og skærmopløsning</li>
          </ul>

          <h3>2.2 Oplysninger du selv giver</h3>
          <p>Hvis du kontakter os via kontaktformularen eller email, indsamler vi de oplysninger du selv giver os (typisk navn og emailadresse).</p>

          <h2>3. Formål med behandling</h2>
          <ul>
            <li><strong>Drift af websitet:</strong> At levere og forbedre vores indhold om fodboldlandshold</li>
            <li><strong>Analyse:</strong> At forstå hvordan besøgende bruger vores site</li>
            <li><strong>Kommunikation:</strong> At besvare henvendelser fra dig</li>
          </ul>

          <h2>4. Retsgrundlag</h2>
          <ul>
            <li><strong>Samtykke (GDPR art. 6, stk. 1, litra a):</strong> For ikke-nødvendige cookies</li>
            <li><strong>Legitim interesse (GDPR art. 6, stk. 1, litra f):</strong> For nødvendige cookies og grundlæggende analyse</li>
          </ul>

          <h2>5. Deling af personoplysninger</h2>
          <p>Vi deler data med følgende tredjeparter:</p>
          <ul>
            <li><strong>Vercel:</strong> Hosting og analytics</li>
          </ul>
          <p>Vi sælger aldrig dine personoplysninger til tredjeparter.</p>

          <h2>6. Opbevaringsperiode</h2>
          <ul>
            <li><strong>Analyse-data:</strong> Op til 26 måneder</li>
            <li><strong>Cookies:</strong> Fra session til op til 2 år</li>
            <li><strong>Kontakthenvendelser:</strong> Op til 12 måneder</li>
          </ul>

          <h2>7. Dine rettigheder</h2>
          <p>Du har følgende rettigheder i henhold til GDPR:</p>
          <ul>
            <li>Ret til indsigt i dine personoplysninger</li>
            <li>Ret til berigtigelse af urigtige oplysninger</li>
            <li>Ret til sletning</li>
            <li>Ret til begrænsning af behandling</li>
            <li>Ret til indsigelse</li>
            <li>Ret til dataportabilitet</li>
            <li>Ret til tilbagetrækning af samtykke</li>
          </ul>
          <p>Kontakt os via <Link href="/kontakt" className="font-semibold">kontaktformularen</Link> for at udøve dine rettigheder.</p>

          <h2>8. Klage</h2>
          <p>Du kan klage til Datatilsynet:</p>
          <p>
            Datatilsynet<br />
            Carl Jacobsens Vej 35, 2500 Valby<br />
            Telefon: 33 19 32 00<br />
            Email: dt@datatilsynet.dk
          </p>

          <h2>9. Ændringer</h2>
          <p>Vi forbeholder os retten til at opdatere denne politik. Ved væsentlige ændringer opdaterer vi datoen øverst på siden.</p>
        </div>
      </section>
    </>
  );
}
