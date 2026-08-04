import type { Metadata } from "next";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | RanchRodeo.pro",
  description:
    "Get help with RanchRodeo.pro — team entries, card eligibility, points and standings corrections, producer access, safety reports, and data requests.",
  alternates: { canonical: "https://www.ranchrodeo.pro/support" },
};

const topics = [
  {
    h: "Account and billing",
    p: "Subscription changes, cancellations, and receipts. Purchases made through the App Store or Google Play must be refunded through those stores.",
    email: "support@ranchrodeo.pro",
    subject: "Account%20and%20billing",
  },
  {
    h: "Team entries and rosters",
    p: "Entry problems are usually fastest to solve with the producer, since they control the card, the draw order, the cattle, and the payout. For roster questions: a man can hold a different role in every event, and once an alternate replaces an original participant that participant cannot return to the competition.",
    email: "support@ranchrodeo.pro",
    subject: "Entry%20or%20results%20question",
  },
  {
    h: "Card eligibility",
    p: "If a card or affidavit is showing as unverified or expired and you believe it is current, send it to us and we will check what we hold. Cards themselves are issued and verified by the association or the producer — we store and warn, we do not clear anyone. \"No proof, no competition, no exceptions\" is the rule at most sanctioned rodeos, so it is worth sorting well before entries close.",
    email: "support@ranchrodeo.pro",
    subject: "Card%20eligibility%20question",
  },
  {
    h: "Points and standings",
    p: "If a placing or a points total looks wrong, the producer holds the official result and we display it — so start there. If our computation disagrees with theirs, tell us and we will correct ours. Remember that scales and tiebreaker order are producer configuration, so two rodeos genuinely can score the same placings differently.",
    email: "support@ranchrodeo.pro",
    subject: "Points%20or%20standings%20correction",
  },
  {
    h: "Ranch profiles and brands",
    p: "To claim an outfit's page, correct a brand image, or merge duplicate ranch profiles, email us from an address associated with the operation. Competition results attached to a ranch are record and are not removable, but errors in them are worth fixing.",
    email: "support@ranchrodeo.pro",
    subject: "Ranch%20profile%20request",
  },
  {
    h: "Safety, harassment, or unwanted contact",
    p: "Report it in the app for the fastest response — reports there reach our moderation team directly with the relevant context attached. You can also email us, and if a minor is involved, say so in the subject line so it is prioritized.",
    email: "support@ranchrodeo.pro",
    subject: "Safety%20report",
  },
  {
    h: "Producer access",
    p: "Producing ranch rodeos and want the console — card builder, team check-in, round runner, instant placings-to-points, live standings for the arena screen, and awards. Producers are being onboarded first, because the points math between rounds is the problem this was built to solve.",
    email: "support@ranchrodeo.pro",
    subject: "Producer%20early%20access",
  },
  {
    h: "Guardian requests",
    p: "Guardians can adjust a minor's visibility, messaging, media sharing, and location settings, and can export or delete the account's data. Adults cannot message a minor outside a linked school, barn, or family relationship.",
    email: "support@ranchrodeo.pro",
    subject: "Guardian%20request",
  },
  {
    h: "Data export or account deletion",
    p: "You can export your data or delete your account in the app. If you would rather we handle it, email us from the address on the account.",
    email: "support@ranchrodeo.pro",
    subject: "Data%20request",
  },
  {
    h: "Rules corrections",
    p: "If something in our rules reference is out of date or wrong, tell us. Include the producer or association and the date if you have it — there is no single national ranch rodeo rulebook, so our reference describes common practice and published patterns like the WRCA one rather than a single authority. Corrections are genuinely welcome.",
    email: "support@ranchrodeo.pro",
    subject: "Rules%20correction",
  },
];

export default function Support() {
  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-ink-border bg-[#14100c]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="RanchRodeo.pro" className="h-12 w-auto" />
            <span className="hidden text-base font-bold tracking-wide text-brand sm:block">
              RANCHRODEO<span className="text-brand-2">.PRO</span>
            </span>
          </Link>
          <nav className="flex gap-6 text-sm font-semibold tracking-wider text-muted uppercase">
            <Link href="/" className="transition hover:text-brand">
              Home
            </Link>
            <Link href="/rules" className="transition hover:text-brand">
              Rules
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-cream">
          Support
        </h1>
        <p className="mt-4 text-lg text-muted">
          Email us at{" "}
          <a
            href="mailto:support@ranchrodeo.pro"
            className="text-brand hover:underline"
          >
            support@ranchrodeo.pro
          </a>{" "}
          and we will get back to you. Pick the closest topic below so it
          reaches the right person faster.
        </p>

        <div className="mt-10 space-y-4">
          {topics.map((t) => (
            <div
              key={t.h}
              className="rounded-xl border border-ink-border bg-ink-raised p-6"
            >
              <h2 className="text-lg font-semibold text-brand">{t.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#e3d8c8]">
                {t.p}
              </p>
              <a
                href={`mailto:${t.email}?subject=${t.subject}`}
                className="mt-3 inline-block text-sm font-semibold text-brand-2 hover:underline"
              >
                Email about this &rarr;
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
