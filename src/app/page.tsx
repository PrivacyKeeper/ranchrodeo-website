"use client";

import { useState } from "react";
import CrossQuote from "./components/CrossQuote";
import Footer from "./components/Footer";
import Link from "next/link";

/**
 * Feature groups mirror the screens in the build map's route tree.
 *
 * The map opens by warning that ranch rodeo is structurally different from
 * every other app in this portfolio and that building it as a variant will
 * fail: the competing unit is a team of four to five, there is no single
 * event, scoring is placings-to-points rather than times, and eligibility is
 * employment-based rather than a membership number.
 *
 * The producer console leads the feature list here rather than sitting at the
 * bottom as it does on the other sites — the map identifies it as the wedge,
 * because producers are doing points math by hand between rounds while a
 * crowd waits. Social sits alongside it, and the tone is heritage rather than
 * sport: this is the ranch and the outfit, not the individual athlete.
 */
const features = [
  {
    id: "producers",
    icon: "🧮",
    title: "Points, Instantly",
    desc: "Stop Doing The Math While The Crowd Waits",
    detail: [
      "Placings convert to points the moment the last team runs an event",
      "Standings update immediately — no calculator, no spreadsheet, no delay",
      "Live standings as a web view you can put on the arena screen",
      "Shareable standings link for people who could not make it",
      "Tiebreakers resolved in your configured order, shown transparently",
      "Bonus points applied automatically for teams that scored in every event",
      "Round runner: one screen per event per round, teams in draw order",
      "Time and penalty count entry built for a tablet at an arena",
      "Offline first, absolutely — ranch rodeos happen where there is no signal",
    ],
  },
  {
    id: "social",
    icon: "👥",
    title: "Social & Community",
    desc: "The Outfit, Not The Individual",
    detail: [
      "A real feed — post video and photos from the rodeo and from the outfit",
      "Ranch profiles with the brand, the county, and the operation's story",
      "Heritage groups by region, by outfit, and by generation",
      "Follow ranches and teams, not just people",
      "Group chats for the crew, the trailer, and the season",
      "Direct messaging with read receipts",
      "Celebrate first rodeos, first checks, and first Top Hand nominations",
      "Block, report, and mute on every account from day one",
      "This is heritage content, and it is what the audience actually engages with",
    ],
  },
  {
    id: "card",
    icon: "🗂️",
    title: "Card Builder",
    desc: "Your Card, Your Scale, Your Tiebreakers",
    detail: [
      "Pick the event set — compulsory and optional, in your order",
      "Set the time limit and the penalty values per event",
      "Team size minimum and maximum",
      "Points scale: descending from team count, a fixed table, or your own",
      "Custom table builder, because every producer has their own arithmetic",
      "Bonus points for teams with a time or score in every event",
      "Tiebreaker order, published before the rodeo as the rules require",
      "Number of rounds, typically two of everything",
      "Save a card and run it again next year",
    ],
  },
  {
    id: "teams",
    icon: "🤠",
    title: "Teams & Rosters",
    desc: "A Man Is A Mugger Here And A Heeler There",
    detail: [
      "Team rosters with a different role per event, because that is how it works",
      "Two-ranch teams — up to two outfits may combine under WRCA-pattern rules",
      "Team check-in with roster and card verification at the gate",
      "Alternate substitution with the permanence rule enforced",
      "Once an alternate replaces a participant, that participant cannot return",
      "Season schedule: which sanctioned rodeos the team is entering",
      "Points accumulated toward finals qualification",
      "Ranch heritage on the team page, not just a list of names",
    ],
  },
  {
    id: "eligibility",
    icon: "✅",
    title: "Card Eligibility",
    desc: "No Proof, No Competition, No Exceptions",
    detail: [
      "Working cowboy card and affidavit tracking per member",
      "Employment proof and membership status stored in one place",
      "Expiration dates surfaced before they become a problem",
      "Warning before entries close if a member's card is not verified",
      "Because teams genuinely do get turned away at check-in for this",
      "Documents visible only to you, your captain, and the association",
      "Not a clearance — the association verifies, we warn",
    ],
  },
  {
    id: "events",
    icon: "🐄",
    title: "The Events",
    desc: "Every Event As Its Own Rule Record",
    detail: [
      "Ranch bronc riding — judged, with the working saddle inspection log",
      "Stray gathering — head and heel two steers, three legs tied, six-second hold",
      "Wild cow milking — one roper mounted, two muggers, and the judge's pour",
      "Team branding — two fires, two flag judges, iron in the bucket stops time",
      "Number sorting — five head in sequence from a called number",
      "Doctoring, team penning, trailer loading, mugging, and non-numbered sorting",
      "Wild horse race and wild steer race for the youth card",
      "Ranch cutting and ranch riding classes, judged rather than timed",
      "Each event is a data-driven definition with its own penalties and limits",
    ],
  },
  {
    id: "scoring",
    icon: "🚩",
    title: "Round Runner & Penalties",
    desc: "Two Currencies In One System",
    detail: [
      "Times and scores determine placings; placings determine points",
      "30-second penalties entered as counts, not as mental arithmetic",
      "Crossing the line early, more than one rider in the herd, loping in the herd",
      "Horse entering the judge's circle, roping outside the line, early flanking",
      "No time recorded properly rather than as a blank",
      "Bronc riding judge entry with difficulty and rider components",
      "Saddle inspection log with the pass or fail and the reason",
      "Unnecessary roughness at the judge's discretion, logged",
    ],
  },
  {
    id: "livestock",
    icon: "🏷️",
    title: "Livestock Management",
    desc: "Herds, Tags, And The Numbers On Them",
    detail: [
      "Herd records with tags and counts",
      "Numbered cattle sets for sorting, 0 through 13",
      "Calf weight compliance for branding — no more than 350 pounds",
      "Which cattle have been used in which round",
      "Rest and rotation across a two-round card",
      "Stock notes that carry between rodeos",
    ],
  },
  {
    id: "horses",
    icon: "🐴",
    title: "Working Horses",
    desc: "Not Specialists. Using Horses.",
    detail: [
      "Role tags: rope horse, sorting horse, bronc, using horse, colt",
      "Job tags — gathers, sorts, drags calves, handles a rope, doctors",
      "Broke by, and years using",
      "Top Horse awards, which follow the horse as a real credential",
      "Disposition notes and what the horse is suited to",
      "Youth-safe, day work, arena, or rough country",
      "Horse resume for sale: a ranch gelding with six years of documented work",
      "\"Gathered on the outfit for six years, Top Horse at two sanctioned rodeos\"",
    ],
  },
  {
    id: "awards",
    icon: "🏆",
    title: "Awards & Recognition",
    desc: "Top Hand, Top Horse, Rookie, Hard Luck",
    detail: [
      "Nomination and voting flow for every award on the card",
      "Top Hand and Top Horse tracked across a season, not just a weekend",
      "Rookie recognition for first-year hands",
      "Hard Luck, because everybody has had that weekend",
      "Award history on the ranch profile and on the horse record",
      "Calcutta record entry for the announcer's use",
      "Sportsmanship noted when a team lends herd holders to another",
    ],
  },
  {
    id: "marketplace",
    icon: "🛒",
    title: "Marketplace",
    desc: "The Widest In The Portfolio",
    detail: [
      "Ranch geldings, using horses, rope horses, colts, and bronc prospects",
      "Working saddles: Wade, Association, slick fork, swell fork, buckaroo, custom",
      "Spade and half breed bits, hackamores, bosals, mecates, romals",
      "Ranch ropes, riatas, nylons and poly, by length and lay",
      "Branding irons, custom irons, propane pots, and brand registration help",
      "Panels, chutes, portable corrals, trailers, and stock tanks",
      "Chaps, chinks, armitas, spurs, wild rags, custom leather, and silver work",
      "Vet supply, ear tags, feed, fencing, and water systems",
      "Day work, colt starting, custom leather, silversmithing, farrier, hauling",
      "Because this is a working ranch audience, not a single-event one",
    ],
  },
  {
    id: "analysis",
    icon: "🎯",
    title: "Team Efficiency Analysis",
    desc: "Where The Team Lost Seconds, Not Where You Did (Premium)",
    detail: [
      "The analysis target here is team efficiency, not individual technique",
      "Dead time: where the team lost seconds waiting on each other",
      "Branding — loops thrown per roper, drag timing, iron out to iron in",
      "Penalty detection: horse gait in the herd, flanker contact before the line",
      "Sorting — riders in the herd, cut sequence, hold line integrity",
      "Cow milking — rope off the horn versus milk start, cow standing state",
      "Film once from the fence and get the whole team's run broken down",
      "Progress measured against your own outfit's baseline",
    ],
  },
];

const pointsScale = [
  { place: "1st", value: "14" },
  { place: "2nd", value: "13" },
  { place: "3rd", value: "12" },
  { place: "4th", value: "11" },
  { place: "…", value: "…" },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    perks: [
      "Ranch and hand profiles, and the community feed",
      "Rodeo discovery and team entries",
      "Team rosters with per-event roles",
      "Card and affidavit tracking with expiry warnings",
      "Results, placings and standings",
      "Working horse profiles",
      "Marketplace access",
      "Rules and events reference",
    ],
  },
  {
    name: "Premium",
    price: "$4.99",
    period: "/mo",
    featured: true,
    perks: [
      "Everything in Free",
      "Season points tracking toward finals qualification",
      "Team efficiency analysis from video",
      "Penalty detection and dead-time reporting",
      "Horse resume export with documented work history",
      "Award history across seasons",
      "Priority support",
    ],
  },
  {
    name: "Producer",
    price: "Talk to us",
    period: "",
    best: true,
    perks: [
      "Card builder, team check-in, and the round runner",
      "Instant placings-to-points and live standings",
      "Arena screen display and shareable standings link",
      "Livestock and numbered cattle management",
      "Awards nominations and Calcutta record",
      "Qualification export for sanctioning bodies",
      "Offline first, built for a county arena",
    ],
  },
];

export default function Home() {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  // Honeypot. Hidden from real visitors, so anything here came from a bot.
  // Not named "company": browsers autofill organization fields, and a real
  // person whose browser filled it would be silently dropped as a bot.
  const [honeypot, setHoneypot] = useState("");

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, hp_company: honeypot }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(data?.error ?? "");
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      // Prefer the server's reason when it gave one: "that address has a typo"
      // and "the mail service is down" need very different things from the
      // visitor, and the generic line tells them neither.
      setErrorMessage(err instanceof Error ? err.message : "");
      setStatus("error");
    }
  };

  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-ink-border bg-[#14100c]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="RanchRodeo.pro" className="h-14 w-auto" />
            <span className="hidden text-lg font-bold tracking-wide text-brand sm:block">
              RANCHRODEO<span className="text-brand-2">.PRO</span>
            </span>
          </Link>
          <nav className="hidden gap-8 text-sm font-semibold tracking-wider text-muted uppercase md:flex">
            <a href="#features" className="transition hover:text-brand">
              Features
            </a>
            <Link href="/rules" className="transition hover:text-brand">
              Rules
            </Link>
            <a href="#pricing" className="transition hover:text-brand">
              Pricing
            </a>
            <Link href="/blog" className="transition hover:text-brand">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="RanchRodeo.pro"
          className="w-[300px] drop-shadow-2xl md:w-[400px]"
        />
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-cream md:text-5xl">
          RanchRodeo<span className="text-brand-2">.pro</span>
        </h1>
        <p className="mt-4 text-xl font-bold tracking-wide text-brand italic md:text-2xl">
          &ldquo;The outfit, not the individual.&rdquo;
        </p>
        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
          Ranch rodeo is not a variant of the other events and it never has
          been. The competing unit is a ranch team of four or five. There is no
          single event — there are five or six of them, run twice, with points
          aggregated across all of it. Scoring is placings and points, not
          times. And eligibility is a job, not a membership number.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-muted md:text-xl">
          Right now producers do that points math by hand, with a calculator,
          between rounds, while a crowd sits waiting.{" "}
          <span className="text-cream">
            That is the first thing we fixed — and then we built the rest of it
            around the outfits.
          </span>
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <div className="relative">
            <div className="flex cursor-default items-center gap-3 rounded-xl border border-ink-border bg-ink-raised px-6 py-3 opacity-70">
              <svg viewBox="0 0 384 512" className="h-8 w-8 fill-cream">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight text-muted uppercase">
                  Download on the
                </p>
                <p className="text-lg leading-tight font-semibold text-cream">
                  App Store
                </p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 rounded-full bg-brand-deep px-2 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
              Coming Soon
            </span>
          </div>
          <div className="relative">
            <div className="flex cursor-default items-center gap-3 rounded-xl border border-ink-border bg-ink-raised px-6 py-3 opacity-70">
              <svg viewBox="0 0 512 512" className="h-8 w-8 fill-cream">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight text-muted uppercase">
                  Get it on
                </p>
                <p className="text-lg leading-tight font-semibold text-cream">
                  Google Play
                </p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 rounded-full bg-brand-deep px-2 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
              Coming Soon
            </span>
          </div>
        </div>

        <a
          href="#waitlist"
          className="mt-8 rounded-lg bg-brand px-8 py-4 text-lg font-bold tracking-wider text-[#f1e6d4] uppercase shadow-lg shadow-brand/20 transition hover:bg-brand-deep"
        >
          Join the Waitlist
        </a>
      </section>

      {/* Points ladder */}
      <section className="mx-auto max-w-4xl px-6 pb-10">
        <p className="mb-4 text-center text-sm font-bold tracking-wider text-brand uppercase">
          Placings become points
        </p>
        <div className="points-grid">
          {pointsScale.map((p) => (
            <div key={p.place} className="points-cell">
              <p className="points-place">{p.place}</p>
              <p className="points-value">{p.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-muted">
          Descending from the team count — with 14 teams, first gets 14. Or a
          fixed table, or your own. The scale is yours; the arithmetic is ours.
        </p>
      </section>

      {/* Who it is for */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Outfits", note: "Ranches and their crews" },
            { label: "Producers", note: "Cards, points, standings" },
            { label: "Associations", note: "Cards and qualification" },
            { label: "Families", note: "The whole community" },
          ].map((who) => (
            <div
              key={who.label}
              className="rounded-xl border border-ink-border bg-ink-raised/70 p-4 text-center"
            >
              <p className="text-sm font-bold tracking-wider text-brand uppercase">
                {who.label}
              </p>
              <p className="mt-1 text-xs text-muted">{who.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-wider text-brand uppercase">
          What&apos;s Inside
        </h2>
        <p className="mx-auto mt-4 mb-14 max-w-2xl text-center text-muted">
          Twelve feature groups — the producer side, the community side, and the
          outfits themselves. Tap any card for the full list.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setOpenModal(i)}
              className="group rounded-xl border border-ink-border bg-ink-raised p-6 text-left transition-all hover:border-brand hover:shadow-lg hover:shadow-brand/10"
            >
              <div className="mb-4 text-4xl">{f.icon}</div>
              <h3 className="text-xl font-semibold text-brand group-hover:underline">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{f.desc}</p>
              <p className="mt-3 text-xs font-semibold text-brand-2">
                See all {f.detail.length} features &rarr;
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Feature modal */}
      {openModal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-ink-border bg-ink-panel p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-5xl">{features[openModal].icon}</div>
            <h3 className="text-2xl font-bold text-brand">
              {features[openModal].title}
            </h3>
            <p className="mt-1 text-sm text-muted">{features[openModal].desc}</p>
            <ul className="mt-4 space-y-2">
              {features[openModal].detail.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[#e3d8c8]">
                  <span className="mt-0.5 text-brand-2">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpenModal(null)}
              className="mt-6 rounded-lg bg-brand px-6 py-2 font-semibold text-[#f1e6d4] transition hover:bg-brand-deep"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Why it is different */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-wider text-brand uppercase">
          Why Ranch Rodeo Needed Its Own App
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              t: "The team is the entity, not the contestant",
              d: "Four or five people, with roles that change by event — a mugger in the cow milking is a heeler in the stray gathering. Every structure that is singular in the other apps is a team here, and up to two ranches may combine into one.",
            },
            {
              t: "Two currencies in one system",
              d: "Times determine placings, placings determine points, and points determine the champion. Nothing else in rodeo works that way, and it is why producers end up doing arithmetic by hand between rounds.",
            },
            {
              t: "Eligibility is a job, not a number",
              d: "Verified working ranch cowboys, pre-qualified, holding a card. That is a credential system rather than a membership number — and “no proof, no competition” is enforced, so teams get turned away.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-xl border border-ink-border bg-ink-raised p-6"
            >
              <h3 className="text-lg font-semibold text-brand-2">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-wider text-brand uppercase">
          Pricing
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-8 ${
                plan.featured
                  ? "border-brand bg-ink-panel shadow-lg shadow-brand/15"
                  : "border-ink-border bg-ink-raised"
              }`}
            >
              {plan.featured && (
                <p className="mb-2 text-xs font-bold tracking-wider text-brand-2 uppercase">
                  Most Popular
                </p>
              )}
              {plan.best && (
                <p className="mb-2 text-xs font-bold tracking-wider text-brand uppercase">
                  For Producers
                </p>
              )}
              <h3 className="text-xl font-bold text-brand">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-cream">
                  {plan.price}
                </span>
                <span className="text-muted">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.perks.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-[#e3d8c8]"
                  >
                    <span className="mt-0.5 text-brand-2">&#10003;</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="mx-auto max-w-xl px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-wider text-brand uppercase">
          Get Early Access
        </h2>
        <p className="mb-8 text-muted">
          Drop your email and be the first to know when RanchRodeo.pro launches.
          If you produce, say so — producers are going first.
        </p>
        {status === "success" ? (
          <p className="text-lg font-semibold text-brand">
            &#127881; You&apos;re on the list! Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={handleWaitlist}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <input
              type="text"
              name="hp_company"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-lg border border-ink-border bg-ink-raised px-4 py-3 text-cream placeholder-muted-dim focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg bg-brand px-6 py-3 font-bold tracking-wider text-[#f1e6d4] uppercase shadow-lg shadow-brand/20 transition hover:bg-brand-deep disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Notify Me"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-400">
            {errorMessage || "Something went wrong. Try again."}
          </p>
        )}
      </section>

      <Footer />
      <CrossQuote />
    </div>
  );
}
