# RanchRodeo.pro — Website

Marketing site for the RanchRodeo.pro mobile app. Built to the same pattern as
the other Rodeo Apps sites: Next.js App Router, Tailwind v4, Resend for the
waitlist, no database and no auth.

## Commands

- `npm run dev` — development server (http://localhost:3000)
- `npm run build` — production build
- `npm start` — serve the production build
- `npx eslint .` — lint

## Stack

Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4,
Resend. Path alias `@/*` maps to `./src/*`.

## Required assets

`public/logo.png` is referenced by the header, the hero, and the OG/Twitter
card, and is **not** in the repo yet. Drop the RanchRodeo crest in before
deploying or those three places render a broken image.

`public/cross.jpg` and `public/backgrounds/arena-1.jpg` / `arena-2.jpg` are
already here, carried over from the other Rodeo Apps sites.

## Environment

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Waitlist confirmation + team notification email |

Without it, `POST /api/waitlist` returns 503 and the form shows an error.

## Structure

```
src/app/
  page.tsx                  Landing — 12 feature groups, points ladder, pricing
  rules/                    Full ranch rodeo reference (SEO + authority)
  events/                   All 14 event modules, plus the producer console
  blog/                     8 SEO posts; index reads from blog/posts.ts
  support/                  Support topics
  terms/ privacy/ refund/   Legal
  api/waitlist/route.ts     Resend handler
  robots.ts  sitemap.ts     SEO
  components/
    SchemaMarkup.tsx        JSON-LD: SoftwareApplication, WebSite, FAQPage
    CrossQuote.tsx          Rotating verse, matches the other sites
    Footer.tsx
  data/quotes.json
```

## Brand

Per the build map: **brand-iron red on weathered oak**. Defined in
`src/app/globals.css` — `--brand` `#b3402f`, `--cream` `#f1e6d4`, on `--ink`
`#14100c`. The secondary `--brand-2` is a sun-bleached sage `#9aa886`, chosen
to keep the palette heritage rather than sport.

Token names (`--brand`, `--brand-deep`, `--brand-2`, `--ink*`) are identical
across all six Rodeo Apps sites — only the values differ.

## This site is deliberately not like the other five

The build map opens by saying ranch rodeo is structurally different from every
other app in the portfolio and that **building it as a variant of the others
will fail**. Four differences drive the whole site:

1. **The competing unit is a ranch team of 4–5**, with roles that change by
   event, and up to two ranches may combine into one team.
2. **There is no single event.** Five or six multi-person events run twice,
   with points aggregated across all of them.
3. **Scoring is placings and points, not times.** Two currencies in one
   system. The landing page carries a `.points-grid` showing the ladder.
4. **Eligibility is employment-based** — verified working ranch cowboys
   holding a card. A credential system, not a membership number.

### The producer console leads

On every other site in the portfolio the producer console is the last feature
group. Here it is **first**, because the map identifies it as the wedge:
producers are doing points math by hand with a calculator between rounds while
a crowd waits. Instant placings-to-points is the single feature that sells the
product.

Pricing reflects this too — the third tier is "Producer / Talk to us" rather
than an annual consumer plan.

### Tone is heritage, not sport

Per the map: "This is the ranch and the outfit, not the individual athlete."
The ranch profile — brand, county, operation type, the outfit's story — is
treated as primary content rather than as a bio field.

## Rules content, and why it tags differently

The other five sites tag rules by **sanctioning body**, because the same rule
has different correct answers under PRCA vs USTRC vs IPRA. Ranch rodeo has no
single national rulebook at all — the producer or association sets the card,
the scale, the limits, the penalties and the tiebreakers.

So `/rules` uses a `Config` component (same `.assoc-tag` styling) tagging what
is **producer-configurable** rather than which body it comes from. The
behaviour we want from a reader is "go check the producer's published rules,"
not "work out which association this is."

WRCA-pattern rules and common practice are documented as such. Keep that
convention when editing.

## Adding a blog post

1. Create `src/app/blog/<slug>/page.tsx` with a `metadata` export and an
   `<article className="prose-arena">` body.
2. Add the entry to `src/app/blog/posts.ts` (drives the index).
3. Add the slug to `blogSlugs` in `src/app/sitemap.ts`.
