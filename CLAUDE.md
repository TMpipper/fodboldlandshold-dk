# Fodboldlandshold.dk

Danish-language encyclopedia of national football teams worldwide.

## Stack
- **Next.js 16** + React 19 + TypeScript (strict)
- **Tailwind v4** — CSS-based theming via `@theme inline` in `globals.css`
- **Vercel** — mondomedia scope. Deploy: `vercel --prod --yes --scope mondomedia`
- **Resend** — contact form emails via `/api/enquiry`
- **Fully static** — no database, all content in TypeScript files

## Architecture

Three-layer pattern (same as travel sites):

**Content Layer** (`src/lib/content/`):
- `taxonomy.ts` — team registry, drives `generateStaticParams` and sitemap
- `team-data.ts` — editorial HTML, players, matches, achievements, FAQ per team
- `images.ts` — image registry per team (Unsplash + flagcdn.com)

**SEO Layer** (`src/lib/seo/`):
- `metadata.ts` — `buildMetadata()`, `teamMeta()`
- `schema.ts` — JSON-LD: Organization, SportsTeam, BreadcrumbList, FAQPage, WebSite

**Data Flow**: taxonomy → `generateStaticParams()` → page looks up data by slug → generates metadata → fetches content → injects JSON-LD → renders body HTML via `dangerouslySetInnerHTML` with `prose-editorial` class.

## URL Structure

Clean root-level slugs:
- `/` — homepage (all teams grid)
- `/[slug]` — team detail page (e.g., `/danmark`, `/portugal`)
- `/om` — about page
- `/kontakt` — contact form

## Adding Content

New team: add to `taxonomy.ts` → add to `team-data.ts` → add image to `images.ts` → page auto-generates.

## Design System

Sports editorial (not luxury travel):
- **Typography:** Inter only (weight 400 body, 700-800 headings)
- **Colors:** Navy primary, pitch green accent, gold highlights
- **Rules:** Rounded corners OK (`rounded-lg`). Dark hero sections with navy-900. Clean card shadows.

## Conventions
- Import paths: `@/...` maps to `src/`
- Next.js 16 async params: `params: Promise<{ slug: string }>` — always `await params`
- Server Components by default. Client Components only for MobileNav and ContactForm
- Danish locale: `<html lang="da">`, `og:locale` = `da_DK`
- Image sources: Unsplash (`images.unsplash.com`) + Flags (`flagcdn.com`)
