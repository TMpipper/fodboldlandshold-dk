import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Om os → Fodboldlandshold.dk",
  description:
    "Fodboldlandshold.dk er din komplette guide til verdens fodboldlandshold. Læs om vores mission, redaktionelle standarder og teamet bag siden.",
  path: "/om",
});

const crumbs = [
  { name: "Forside", path: "/" },
  { name: "Om", path: "/om" },
];

export default function OmPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="bg-navy-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-6">
            <Breadcrumb items={crumbs} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Om Fodboldlandshold.dk
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
        <div className="prose-editorial">
          <p>
            Fodboldlandshold.dk er en dansk informationsside dedikeret til
            verdens fodboldlandshold. Vi samler og præsenterer information om
            spillertrupper, kampresultater, historie og statistik, så danske
            fodboldfans hurtigt kan finde det, de søger.
          </p>

          <h2>Vores mission</h2>
          <p>
            Vi ønsker at skabe den mest komplette og lettilgængelige ressource
            på dansk om fodboldlandshold fra hele verden. Fra det danske
            landshold til europæiske rivaler og eksotiske hold fra fjerne
            kontinenter — vi dækker dem alle med dybdegående og opdateret
            indhold.
          </p>

          <h2>Redaktionelle standarder</h2>
          <p>
            Alt indhold på Fodboldlandshold.dk er skrevet med fokus på
            nøjagtighed, aktualitet og relevans for danske læsere. Vi
            opdaterer løbende spillertrupper, kampresultater og statistikker
            for at sikre, at informationen altid er pålidelig.
          </p>

          <h2>Om os</h2>
          <p>
            Fodboldlandshold.dk drives af {COMPANY.name} (CVR {COMPANY.cvr}),
            med adresse på {COMPANY.address}. Vi er et dansk mediehus, der
            driver en række informationssider inden for rejser, sport og
            forbrugervejledning.
          </p>
        </div>
      </div>
    </>
  );
}
