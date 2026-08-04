import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | RanchRodeo.pro",
  description: "The terms governing use of the RanchRodeo.pro app and website.",
  alternates: { canonical: "https://www.ranchrodeo.pro/terms" },
};

const sections = [
  {
    h: "1. Acceptance of Terms",
    p: "By creating an account or using RanchRodeo.pro, you agree to these Terms of Service. If you do not agree, do not use the service. RanchRodeo.pro is operated by Apps 1, LLC.",
  },
  {
    h: "2. Eligibility and Accounts Held by Minors",
    p: "You must be at least 13 years old to create an account. Users under 18 require guardian consent, and guardian controls apply to messaging, media sharing, and location visibility. You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account.",
  },
  {
    h: "3. Working Cowboy Cards Are Not Issued By Us",
    p: "Eligibility for ranch rodeo is employment-based. Cards, affidavits, and employment verification are issued and checked by the sanctioning association or the producer, not by us. We store what you upload and we warn you before entries close if something looks unverified or expired, but that warning is a convenience. \"No proof, no competition, no exceptions\" is the actual rule at most sanctioned rodeos, and teams do get turned away. Where our record and the association's record disagree, theirs governs.",
  },
  {
    h: "4. Points, Placings and Standings Are the Producer's",
    p: "Points scales, tiebreaker order, bonus points, and which events are compulsory are set by the producer or the association for each rodeo. We compute standings from the placings and configuration they supply. We do not set scales, we do not adjudicate placings, and a standing shown in the app is not official until the producer says it is. Where our computation and the producer's official result disagree, theirs governs.",
  },
  {
    h: "5. Practice Data Is Not Official",
    p: "Times, catches, and other run data you record yourself are practice data. They are hand-timed, they are not verified by any judge, timer, or sanctioning body, and they are never treated as official results. Official results, standings, and payouts originate from event producers and sanctioning bodies. Nothing in the app constitutes an official record of competition unless it is provided by the producer of that event.",
  },
  {
    h: "6. Rules Information Is a Reference, Not Authority",
    p: "There is no single national rulebook for ranch rodeo. Rules are set by the individual producer, the association, or the event, and they vary substantially — the event card, the points scale, the time limits, the penalty values and the tiebreaker order are all configuration rather than fixed rules. Our rules content is a plain-language reference to common practice and to published association rules such as the WRCA pattern, labelled as such. It is not a rulebook. The producer's published rules for the rodeo you entered govern, and they must be published before the rodeo.",
  },
  {
    h: "7. Events, Entries, and Payments",
    p: "Event listings, entry fees, added money, office charges, class configurations, ground rules, and sanctioning status are supplied by event producers. We are not the producer of events listed in the app and we are not responsible for the conduct, cancellation, scoring, or payout of any event. Entry fees paid through the app are collected on behalf of the producer, subject to that producer's own entry, draw-out, and refund terms.",
  },
  {
    h: "8. Ranch and Team Content",
    p: "Ranch profiles, brands, histories and team rosters are supplied by the outfits themselves. We do not verify a brand, an operation, or anyone's account of their own history, and a brand image in a profile is not a registration or a claim we have checked. Under WRCA-pattern rules up to two ranches may combine to form a team; how a combined team is credited is between the outfits and the producer. Team and roster contact surfaces carry the same blocking, reporting and rate limiting as the rest of the service.",
  },
  {
    h: "9. Marketplace",
    p: "Marketplace listings are created by users. We do not own, inspect, verify, or warrant any horse, animal, item, or service listed, including custom leather, silver work, branding irons, and livestock handling equipment. Transactions are between buyer and seller. You are responsible for your own due diligence, including veterinary examination, soundness, health documentation, and transport arrangements. Report suspicious listings using the in-app reporting tools.",
  },
  {
    h: "10. Subscriptions and Billing",
    p: "Premium features are offered on monthly and annual subscriptions. Subscriptions renew automatically until cancelled. You may cancel at any time through your app store account or in the app; cancellation takes effect at the end of the current billing period. Pricing may change with notice.",
  },
  {
    h: "11. Assumption of Risk",
    p: "Ranch rodeo events involve unbroke stock, loose cattle, branding irons and fire, and multiple mounted people working the same animal at once. These are inherently dangerous activities. Nothing in this app reduces that risk. Training content, drills, and AI-generated coaching output are informational only and are not a substitute for qualified instruction, veterinary advice, or your own judgment. You participate in equine activities entirely at your own risk.",
  },
  {
    h: "12. Animal Welfare",
    p: "You agree to comply with the humane treatment rules of any association or rodeo you participate in. Ranch rodeo rules are strict on this and a team may be disqualified for unnecessary roughness at the judge\'s discretion in any event. Content depicting abuse or mistreatment of animals is prohibited and will be removed, and may result in account termination and referral to the relevant sanctioning body.",
  },
  {
    h: "13. User Content and Conduct",
    p: "You retain ownership of content you post and grant us a license to host, display, and distribute it within the service. You agree not to post content that is unlawful, harassing, abusive, or that violates another person's privacy — and specifically not to use the service to contact minors outside of an established, guardian-visible school, barn, or mentor relationship. We may remove content and suspend or terminate accounts that violate these terms.",
  },
  {
    h: "14. Service Availability",
    p: "We provide the service on an as-is and as-available basis. We do not warrant uninterrupted or error-free operation, and we may modify, suspend, or discontinue features at any time.",
  },
  {
    h: "15. Limitation of Liability",
    p: "To the maximum extent permitted by law, Apps 1, LLC is not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, lost winnings, lost entry fees, or lost opportunities arising from your use of the service.",
  },
  {
    h: "16. Changes to These Terms",
    p: "We may update these terms as the product develops. Material changes will be communicated in the app and by email. Continued use after a change constitutes acceptance.",
  },
  {
    h: "17. Contact",
    p: "Questions about these terms can be sent to support@ranchrodeo.pro.",
  },
];

export default function Terms() {
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
          <h1 className="mb-2 text-4xl font-bold text-cream">
            Terms of Service
          </h1>
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
