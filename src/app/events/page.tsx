import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "Ranch Rodeo Events & The Producer Console | RanchRodeo.pro",
  description:
    "Every ranch rodeo event as a configurable module — bronc riding, stray gathering, wild cow milking, team branding, number sorting, doctoring, penning, trailer loading and more. Plus the producer console that turns placings into points instantly.",
  alternates: { canonical: "https://www.ranchrodeo.pro/events" },
};

const events = [
  {
    name: "Ranch bronc riding",
    mechanic: "Ride as ride can, 8 seconds, working saddle, judged",
  },
  {
    name: "Stray gathering",
    mechanic: "Head and heel two steers, three legs tied, six-second hold",
  },
  {
    name: "Wild cow milking",
    mechanic: "Rope, mug, milk a standing cow, and the judge pours",
  },
  {
    name: "Team branding",
    mechanic: "Heel two calves each, drag, flank, brand — iron in the bucket stops time",
  },
  {
    name: "Number sorting",
    mechanic: "Five head in numbered sequence from a called number",
  },
  {
    name: "Doctoring",
    mechanic: "Rope and restrain a designated yearling, treat, release",
  },
  { name: "Team penning", mechanic: "Cut and pen designated cattle on the clock" },
  {
    name: "Trailer loading",
    mechanic: "Gather and load designated cattle into a trailer",
  },
  {
    name: "Wild horse race",
    mechanic: "Catch, saddle and ride an unbroke horse across a line",
  },
  { name: "Wild steer race", mechanic: "Youth version — catch and control a steer" },
  { name: "Ranch cutting", mechanic: "Judged, not timed" },
  {
    name: "Ranch horse / ranch riding",
    mechanic: "Judged pattern plus cow work",
  },
  { name: "Mugging", mechanic: "Rope and mug a calf or yearling" },
  {
    name: "Sorting (non-numbered)",
    mechanic: "Sort by marking rather than by sequence",
  },
];

export default function EventsPage() {
  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="flex items-center justify-between border-b border-ink-border bg-[#14100c]/90 px-8 py-6 backdrop-blur-sm">
        <Link
          href="/"
          className="text-xl font-bold text-brand transition hover:text-brand-deep"
        >
          &larr; RanchRodeo.Pro
        </Link>
        <nav className="flex gap-6 text-sm font-semibold">
          <Link href="/rules" className="text-muted transition hover:text-brand">
            Rules
          </Link>
          <Link href="/blog" className="text-muted transition hover:text-brand">
            Blog
          </Link>
        </nav>
      </header>

      <main className="arena-panel mx-auto my-8 max-w-4xl px-6 py-8">
        <article className="prose-arena">
          <h1 className="text-3xl font-extrabold text-brand">
            Events &amp; The Producer Console
          </h1>
          <p className="mt-3 text-muted">
            There is no fixed card in ranch rodeo. Every event is a
            configurable module with its own rules, penalties and time limit.
          </p>

          <h2>The events</h2>
          <div className="overflow-x-auto">
            <table className="mt-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink-border text-left">
                  <th className="py-2 pr-4 font-bold text-brand">Event</th>
                  <th className="py-2 font-bold text-brand">Core mechanic</th>
                </tr>
              </thead>
              <tbody className="text-[#e3d8c8]">
                {events.map((e) => (
                  <tr key={e.name} className="border-b border-ink-border/50">
                    <td className="py-2 pr-4 font-semibold whitespace-nowrap">
                      {e.name}
                    </td>
                    <td className="py-2">{e.mechanic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Full rules for the five most common compulsory events are on the{" "}
            <Link href="/rules">rules page</Link>, including every 30-second
            penalty.
          </p>

          <h2>The card builder</h2>
          <p>
            You pick the events, you set the terms. Nothing here is hardcoded,
            because ranch rodeo producers each run their own card and there is
            no reason they should change it for an app.
          </p>
          <ul>
            <li>Which events, in which order, and which are compulsory</li>
            <li>Time limit and penalty values per event</li>
            <li>Team size minimum and maximum</li>
            <li>
              Points scale — descending from team count, a fixed table, or one
              you build
            </li>
            <li>Bonus points for scoring in every event</li>
            <li>Tiebreaker order, published before the rodeo</li>
            <li>Number of rounds</li>
            <li>Save the card and run it again next year</li>
          </ul>

          <h2>The part that sells it</h2>
          <p>
            Ranch rodeo producers are almost universally running on paper and a
            spreadsheet, doing points math by hand between rounds while a crowd
            sits waiting. That is the problem this was built to solve.
          </p>
          <p>
            <strong>
              The moment the last team runs an event, placings compute, points
              convert, and standings update.
            </strong>{" "}
            No calculator. No delay. And the live standings are a web view you
            can put straight on the arena screen or share as a link.
          </p>
          <p>
            Tiebreakers resolve in your configured order and show their working,
            so nobody has to take the result on trust. Bonus points for teams
            that scored in every event apply automatically.
          </p>

          <h2>Running the rodeo</h2>
          <ul>
            <li>
              <strong>Team check-in</strong> — roster, roles, card verification,
              and alternate substitution with the permanence rule enforced
            </li>
            <li>
              <strong>Round runner</strong> — one screen per event per round,
              teams in draw order, time and penalty counts entered as counts
              rather than arithmetic
            </li>
            <li>
              <strong>Bronc riding</strong> — judge score entry with difficulty
              and rider components, plus the saddle inspection log with the pass
              or fail and the reason
            </li>
            <li>
              <strong>Livestock</strong> — herds, tags, numbered cattle sets for
              sorting, and calf weight compliance for branding
            </li>
            <li>
              <strong>Awards</strong> — Top Hand, Top Horse, Rookie and Hard
              Luck nominations and voting
            </li>
            <li>
              <strong>Calcutta record</strong> entry for the announcer&apos;s
              use
            </li>
            <li>
              <strong>Qualification export</strong> — the points that count
              toward finals qualification, which is how sanctioned ranch rodeos
              ladder up to a world championship
            </li>
          </ul>
          <p>
            <strong>Offline first, absolutely.</strong> Ranch rodeos happen in
            county arenas with no signal, and a console that needs a connection
            is a console that does not work.
          </p>

          <h2>For the outfits</h2>
          <p>
            Team rosters carry a different role per event, because that is how
            it actually works — a man is a mugger in the cow milking and a
            heeler in the stray gathering. Two ranches may combine into one team
            under the WRCA pattern.
          </p>
          <p>
            Card eligibility is tracked per member with expiry warnings before
            entries close, because &ldquo;no proof, no competition, no
            exceptions&rdquo; is the real rule and teams do get turned away.
          </p>
          <p>
            And the ranch profile — brand, county, operation type, the outfit&apos;s
            story — sits alongside the results, because in this discipline the
            heritage is the point.
          </p>

          <div className="mt-10 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-muted">
              Producing ranch rodeos?{" "}
              <Link href="/#waitlist">Join the waitlist</Link> and say so —
              producers are being onboarded first, because the points math is
              the problem worth fixing before anything else.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
