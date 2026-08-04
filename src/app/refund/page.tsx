import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | RanchRodeo.pro",
  description:
    "Refund terms for RanchRodeo.pro subscriptions, and how ranch rodeo entry fees, team withdrawals and card ineligibility are handled.",
  alternates: { canonical: "https://www.ranchrodeo.pro/refund" },
};

const sections = [
  {
    h: "1. Subscriptions",
    p: "Premium subscriptions are billed monthly or annually and renew automatically until cancelled. You may cancel at any time; cancellation takes effect at the end of your current billing period and you keep premium access until then.",
  },
  {
    h: "2. App Store Purchases",
    p: "Subscriptions purchased through the Apple App Store or Google Play are governed by that store's refund policy and must be requested directly from Apple or Google. We cannot issue refunds for store-processed purchases on their behalf.",
  },
  {
    h: "3. Purchases Made Directly",
    p: "For subscriptions purchased directly through us, contact support@ranchrodeo.pro within 14 days of the charge and we will review the request. Refunds are issued to the original payment method.",
  },
  {
    h: "4. Entry Fees and Team Withdrawals",
    p: "Entry fees are collected on behalf of event producers and are subject to that producer's own entry and refund terms, including any office charge. Ranch rodeo entries are per team rather than per contestant, so a withdrawal affects the whole team and any refund is handled as one. Replacing a member with an alternate is not a withdrawal — but note that once an alternate replaces an original participant, that participant cannot return to the competition.",
  },
  {
    h: "5. Card Eligibility and Turned-Away Teams",
    p: "Ranch rodeo eligibility is employment-based, and \"no proof, no competition, no exceptions\" is the actual rule at most sanctioned rodeos. Our warnings before entries close are a convenience, not a clearance. Where a team is turned away at check-in because a member's card or affidavit is not in order, any refund is entirely at the producer's discretion under their stated terms. We cannot verify a card and we cannot override a producer.",
  },
  {
    h: "6. Placings, Points and Corrections",
    p: "A corrected placing changes the points for that event and every standing downstream of it, including the champion. That is a result correction, not a fee matter. Where a correction changes a payout after money has been distributed, resolution is between the producer and the association under their rules. We recompute the standings and keep a record of the correction.",
  },
  {
    h: "7. Cancelled or Postponed Events",
    p: "If a producer cancels or postpones a rodeo, refunds are handled by that producer under their stated terms. Where an event is cancelled for biosecurity or venue reasons, we will surface the producer's notice and refund instructions in the app as soon as we receive them.",
  },
  {
    h: "8. Marketplace Transactions",
    p: "Marketplace sales — horses, tack, cattle, rigs, and services — are between buyer and seller. We are not a party to those transactions and do not issue refunds for them.",
  },
  {
    h: "9. Contact",
    p: "Refund questions can be sent to support@ranchrodeo.pro.",
  },
];

export default function Refund() {
  return (
    <div className="arena-page arena-bg-2">
      <main className="mx-auto min-h-screen max-w-4xl px-6 py-16">
        <div className="arena-panel p-8 md:p-10">
          <Link
            href="/"
            className="mb-8 inline-block text-sm text-brand hover:underline"
          >
            &larr; Back to Home
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-cream">Refund Policy</h1>
          <p className="mb-10 text-sm text-muted">Last updated: August 2026</p>

          <div className="space-y-8 text-[#e3d8c8]">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="mb-2 text-xl font-bold text-brand">{s.h}</h2>
                <p className="leading-relaxed">{s.p}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
