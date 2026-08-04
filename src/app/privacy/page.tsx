import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | RanchRodeo.pro",
  description:
    "How RanchRodeo.pro collects, uses, and protects your data — including our additional protections for users under 18 and how card eligibility and ranch data are handled.",
  alternates: { canonical: "https://www.ranchrodeo.pro/privacy" },
};

const sections = [
  {
    h: "1. Information We Collect",
    p: "We collect information you provide directly, including name, email, profile information, and payment details when you subscribe to premium features. We also collect competition data such as event times and scores, placings and points, penalties, team rosters and per-event roles, ranch profiles, working horse records, card and affidavit documents you upload, location data (GPS), and app interactions.",
  },
  {
    h: "2. How We Use Your Information",
    p: "We use your information to provide and improve our services, compute placings and points, warn you about card eligibility before entries close, process entries and transactions, send notifications about draw order, results and standings, personalize your experience, and provide location-based features such as weather, arena finding, and nearby rodeo discovery. We never sell your personal data to third parties.",
  },
  {
    h: "3. Card and Employment Documents",
    p: "Eligibility for ranch rodeo is employment-based, so cards, affidavits and employment verification documents may be stored against your account. These are visible to you, to the association or producer you submit them to, and to a team captain you have joined a roster under. They are not shown to other users, they are not published on your profile, and we do not use them for anything other than eligibility checking. You can delete them at any time, though doing so may make you ineligible to enter.",
  },
  {
    h: "4. Users Under 18",
    p: "Ranch rodeo is a family discipline and youth events are common, so we apply additional protections by default. Profiles for users under 18 default to followers-only visibility. Location precision for minors is never shown below city level — and note that in this discipline a ranch profile can identify where a family lives, so a minor is never associated with a ranch location publicly. Adults cannot direct message a minor outside of an established school, barn, or family relationship, and those relationships carry guardian visibility. Photo and video sharing for minors is controlled by a guardian setting on the account.",
  },
  {
    h: "5. Ranch Profiles Are Public By Design",
    p: "A ranch profile — the brand, the county, the operation type, the outfit's history — is heritage content and it is public. That is the point of it: it is what the audience engages with and it is how outfits are recognised. Team results, placings and points attach to the ranch as well as to the individuals, and a ranch's competition record cannot be edited to remove a result. Individual accounts and ranch profiles are separate; you control what your personal profile shows regardless of what the outfit's page says.",
  },
  {
    h: "6. Location Data",
    p: "We collect GPS location data to provide weather information, severe weather alerts, arena and rodeo discovery, route planning, and hauling features. You can disable location services at any time through your device settings, though some features will be limited. For accounts belonging to minors, location is never displayed to other users below city level regardless of device settings.",
  },
  {
    h: "7. Self-Recorded Data vs. Official Results",
    p: "Anything you or your team records yourselves is stored separately and clearly labeled. It is never merged into official placings, points, or standings. Official results and the points that follow from them originate from event producers and sanctioning bodies.",
  },
  {
    h: "8. Photos, Video, and Run Analysis",
    p: "Video you upload for analysis is stored securely and processed to produce team-efficiency metrics — where a team lost seconds waiting on each other, penalty detection such as loping in the herd, and event-specific timings. Because every ranch rodeo event involves four or five people, an analysed run includes your whole team, and sharing controls respect every member's account. For accounts belonging to minors, guardian controls apply to all media sharing.",
  },
  {
    h: "9. Data Storage and Security",
    p: "Your data is stored securely using industry-standard encryption. We use Supabase for database management and authentication, and Stripe for payment processing, both of which maintain strict security standards.",
  },
  {
    h: "10. Your Rights",
    p: "You have the right to access, correct, or delete your personal data at any time. You can export your data or request account deletion in the app, or by contacting support@ranchrodeo.pro. Guardians may exercise these rights on behalf of a minor.",
  },
  {
    h: "11. Third-Party Services",
    p: "We integrate with third-party services including payment processors (Stripe), mapping and places services (Google Maps), weather APIs, push notification providers, analytics providers, and cloud storage. These services have their own privacy policies governing their use of your data.",
  },
  {
    h: "12. Blocking, Reporting, and Moderation",
    p: "Block, report, and mute are available on every account from launch and apply to messages, posts, and ranch and team pages alike. Report categories include harassment and unwanted contact specifically. Reports are reviewed by our moderation team, and reported content may be retained for the duration of an investigation and any subsequent enforcement.",
  },
  {
    h: "13. Changes to This Policy",
    p: "We may update this policy as the product develops. Material changes will be communicated in the app and by email to the address on your account.",
  },
  {
    h: "14. Contact",
    p: "Questions about this policy or your data can be sent to support@ranchrodeo.pro.",
  },
];

export default function Privacy() {
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
          <h1 className="mb-2 text-4xl font-bold text-cream">Privacy Policy</h1>
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
