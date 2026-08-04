import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "Ranch Rodeo Rules Explained - Events, Points & Penalties | RanchRodeo.pro",
  description:
    "A plain-language ranch rodeo reference: how placings become points, the compulsory event set, ranch bronc riding rules, stray gathering, wild cow milking, team branding, number sorting, the 30-second penalties, and working cowboy card eligibility. Current as of August 2026.",
  alternates: { canonical: "https://www.ranchrodeo.pro/rules" },
};

/**
 * There is no single national ranch rodeo rulebook. Rules are set by the
 * producer, the association, or the event. So rather than tagging by
 * sanctioning body as the other sites do, this page tags what is
 * *configurable* — because getting a roper to check the producer's published
 * rules is the actual safety behaviour here.
 */
function Config({ children }: { children: React.ReactNode }) {
  return <span className="assoc-tag">{children}</span>;
}

export default function RulesPage() {
  return (
    <div className="arena-page arena-bg-2 min-h-screen">
      <header className="flex items-center justify-between border-b border-ink-border bg-[#14100c]/90 px-8 py-6 backdrop-blur-sm">
        <Link
          href="/"
          className="text-xl font-bold text-brand transition hover:text-brand-deep"
        >
          &larr; RanchRodeo.Pro
        </Link>
        <nav className="flex gap-6 text-sm font-semibold">
          <Link href="/rules" className="text-brand">
            Rules
          </Link>
          <Link href="/blog" className="text-muted transition hover:text-brand">
            Blog
          </Link>
        </nav>
      </header>

      <main className="arena-panel mx-auto my-8 max-w-3xl px-6 py-8">
        <article className="prose-arena">
          <h1 className="text-3xl font-extrabold text-brand">
            Ranch Rodeo Rules
          </h1>
          <p className="mt-3 text-muted">
            A plain-language reference to how ranch rodeo actually works.
            Current as of 3 August 2026.
          </p>

          <div className="mt-6 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-[#e3d8c8]">
              <strong className="text-brand">Read this first.</strong> There is
              no single national rulebook for ranch rodeo. Rules are set by the
              individual producer, the association, or the event — the WRCA
              pattern is the most widely followed, but the card, the points
              scale, the time limits, the penalty values and the tiebreaker
              order all vary.
            </p>
            <p className="mt-3 text-sm text-[#e3d8c8]">
              Everything tagged <Config>Producer</Config> below is
              configuration rather than a fixed rule. The producer&apos;s
              published rules for the rodeo you entered govern, and they should
              be published before the rodeo starts.
            </p>
          </div>

          <h2>The structure</h2>
          <p>
            A ranch rodeo is a set of <strong>compulsory events</strong> run
            twice, with points aggregated across all of them. All teams must
            enter every compulsory event to be eligible for the team
            championship. <Config>Producer</Config>
          </p>
          <p>
            The competing unit is a <strong>ranch team of four to five</strong>,
            not an individual or a pair. Roles change by event — a man is a
            mugger in the wild cow milking and a heeler in the stray gathering.
            Under the WRCA pattern, up to two ranches may combine to form one
            team.
          </p>
          <p>
            <strong>Alternates:</strong> once an original participant is
            replaced by an alternate, that participant{" "}
            <strong>cannot return</strong> to the competition.
          </p>

          <h2>How the scoring works</h2>
          <p>
            This is the structural difference from every other rodeo event, and
            it is worth being precise about because there are two currencies in
            play:
          </p>
          <ol>
            <li>
              <strong>Times or scores</strong> determine the placing within each
              event, each round
            </li>
            <li>
              <strong>Placings</strong> convert to points on the
              producer&apos;s scale
            </li>
            <li>
              <strong>Total points</strong> across both rounds determine the
              champion
            </li>
          </ol>

          <h3>The two common scales</h3>
          <p>
            <strong>Descending from team count</strong> — the WRCA-sanctioned
            pattern. With 14 teams, first gets 14 points, second 13, third 12,
            and so on down. <Config>Producer</Config>
          </p>
          <p>
            <strong>Fixed table</strong> — the Texas Ranch Round-Up pattern.
            1st = 10, 2nd = 7, 3rd = 5, 4th = 3, 5th = 1.{" "}
            <Config>Producer</Config>
          </p>
          <p>
            Plus whatever a producer has always used, because ranch rodeo
            producers each have their own arithmetic and will not change it for
            an app. <strong>No time equals no points</strong> under either
            scale.
          </p>

          <h3>Bonus points</h3>
          <p>
            Commonly <strong>10 points</strong> added for teams that post a time
            or a score in <em>every</em> event. <Config>Producer</Config> This
            is what makes finishing everything matter more than winning one
            thing.
          </p>

          <h3>Tiebreakers</h3>
          <p>
            Resolved in a defined order — for example: most points overall, then
            most points in branding, then doctoring, then sorting, then bronc
            riding. The order is producer-configurable and{" "}
            <strong>must be published before the rodeo</strong>.{" "}
            <Config>Producer</Config>
          </p>

          <h2>Eligibility</h2>
          <p>
            Ranch rodeo eligibility is <strong>employment-based</strong>. Team
            members must be verified working ranch cowboys, pre-qualified
            through the association and holding a card. It is a credential
            system rather than a membership number.
          </p>
          <p>
            The rule is enforced strictly:{" "}
            <strong>no proof, no competition, no exceptions</strong>. Teams get
            turned away at check-in for this, which is why card and affidavit
            expiry is worth watching well before entries close.
          </p>

          <h2>Ranch bronc riding</h2>
          <p>
            <strong>Ride as ride can for eight seconds. No mark-out rule.</strong>{" "}
            That alone separates it from PRCA saddle bronc.
          </p>
          <p>
            A standard <strong>working saddle</strong> must be used, and the
            horse must be saddled as he would be for everyday ranch use. No PRCA
            rigging.
          </p>
          <ul>
            <li>
              No hobbling of one or both stirrups; stirrups may not be bound or
              held forward
            </li>
            <li>
              Latigos may not be run through the stirrup leathers to hold the
              stirrups forward
            </li>
            <li>Standard stirrup leathers — no nylon</li>
            <li>
              Full or 7/8 double rigging. No centerfire, 5/8 or 3/4 rigging, and
              no cable rigging
            </li>
            <li>
              The flank cinch does not need to be hobbled to the front cinch
            </li>
            <li>Saddle blankets and pads should not be used</li>
          </ul>
          <p>
            A <strong>night latch or a catch rope</strong> may be used. A catch
            rope must be attached to the horn with a single leather strap not
            exceeding 3/4 inch wide, wrapped around the rope no more than five
            times, attached in the traditional buckaroo manner with a single
            buckle on either side of the fork or swell. The rope must otherwise
            be free.
          </p>
          <p>
            <strong>Saddles are inspected before unsaddling</strong> in the
            stripping chute. Violations mean immediate disqualification in the
            bronc riding for that round. Spur rowels must be free spinning,
            dull, and humane, and the chute judge may inspect.
          </p>
          <p>
            The halter is a regular bucking horse halter with one rein,{" "}
            <strong>provided by the ranch team</strong>. Points are awarded for
            the difficulty of the horse plus the aggressiveness, control and
            exposure the rider shows.
          </p>
          <p>
            A re-ride may be awarded at the judge&apos;s discretion and must be
            taken by the rider offered it — unless injury prevents it, in which
            case another qualified team member may substitute.
          </p>

          <h2>Stray gathering</h2>
          <p>
            Two minute limit. Unlimited loops. Four-man team, all horseback, two
            steers turned out.
          </p>
          <ul>
            <li>
              Time starts when the last steer clears the gate and the flagman
              drops the flag
            </li>
            <li>
              All team members stay behind the start line until the flag drops —
              failure is a <strong>30 second penalty</strong>
            </li>
            <li>Each team member must head or heel one of the steers</li>
            <li>
              Four legal head loops: around the horns, half head, around the
              neck, or neck and one front leg
            </li>
            <li>
              Both steers headed and heeled, and{" "}
              <strong>three legs crossed and tied</strong> on each
            </li>
            <li>
              Time is called when both steers are tied and all ropes removed —
              the contestant must call for time
            </li>
            <li>
              Both steers must stay tied for <strong>six seconds</strong> after
              time is called. Failure on either is a no time.
            </li>
          </ul>

          <h2>Wild cow milking</h2>
          <p>
            Two minute limit, two loop limit. Four-man team — a roper, a milker,
            and two muggers. Only the roper is horseback.
          </p>
          <ul>
            <li>
              The roper stays behind the line until the cow clears the gate —
              failure is a <strong>30 second penalty</strong>
            </li>
            <li>
              Catch as catch can, but the cow&apos;s head must pass through the
              loop
            </li>
            <li>
              <strong>The cow must be standing when milked.</strong> Milking a
              cow that is lying down is a no time.
            </li>
            <li>
              The rope must be <strong>off the saddle horn</strong> before
              milking commences. Failure is a no time.
            </li>
            <li>
              Any team member may milk. The bottle may be passed and carried on
              foot or horseback, but the runner must{" "}
              <strong>step into the judge&apos;s circle on foot</strong>. If the
              horse enters the circle at all, 30 second penalty.
            </li>
            <li>
              The runner hands the bottle to the judge and{" "}
              <strong>the judge pours</strong>. If the milk will not pour within
              the judge&apos;s count of five, or if the contestant pours, it is
              a no time.
            </li>
          </ul>

          <h2>Team branding</h2>
          <p>
            Two minute limit. Four to five man team — a roper, two flankers, a
            brander, and two herd holders. If a team lacks members for herd
            holders it may <strong>borrow from another team</strong>, and the
            announcer should note the sportsmanship.
          </p>
          <ul>
            <li>
              A herd of calves weighing <strong>no more than 350 pounds</strong>{" "}
              held behind a line 60 feet from the end of the arena
            </li>
            <li>
              Two teams run at once, which requires two fires and two flag
              judges
            </li>
            <li>
              Ropers start together, time begins when they cross the line, two
              minutes to drag two calves each, unlimited loops
            </li>
            <li>
              <strong>Calves are to be roped by the heels only</strong>
            </li>
            <li>
              Roping outside the line is a <strong>30 second penalty</strong>
            </li>
            <li>
              Flankers may not touch the calf until the whole calf has been
              dragged across the line — 30 second penalty
            </li>
            <li>
              After the calf is flat and the rope removed, the iron comes out of
              the bucket, the calf is branded on its ribs, and the iron is
              returned. <strong>Time stops when the iron is in the bucket</strong>{" "}
              after the second calf.
            </li>
            <li>
              A branded calf must return to the herd before it can be roped
              again
            </li>
            <li>
              <strong>30 second penalty for the horse loping</strong>, either in
              the herd or dragging calves
            </li>
          </ul>

          <h2>Number sorting</h2>
          <p>
            Two minute limit. Four man team. A herd of numbered cattle, 0 to 13,
            held behind a line 60 feet from the end of the arena.
          </p>
          <ul>
            <li>
              The announcer calls a drawn number as riders approach. The team
              must cross the line <strong>immediately</strong> — if the team
              stops, as if looking for the first yearling, the flagman drops the
              flag and starts time before they cross.
            </li>
            <li>
              <strong>No more than one man in the herd at a time</strong> — 30
              second penalty
            </li>
            <li>
              Two minutes to cut five yearlings in numbered sequence from the
              called number. Number 3 called means 3, 4, 5, 6, 7.
            </li>
            <li>
              <strong>30 second penalty for loping in the herd</strong>
            </li>
            <li>Cut animals must be held out of the herd, or it is a no time</li>
            <li>Any yearling cut out of sequence is a no time</li>
            <li>The herd breaking the line is a no time</li>
            <li>
              Use of <strong>spotters</strong> to help the sorter is a no time
            </li>
          </ul>

          <h2>The rest of the card</h2>
          <p>
            Producers vary the card, and all of these appear regularly:
            doctoring, team penning, trailer loading, wild horse race, wild
            steer race (youth), ranch cutting and ranch riding classes (judged
            rather than timed), mugging, and non-numbered sorting.{" "}
            <Config>Producer</Config>
          </p>
          <p>
            Each is its own event with its own penalties and time limit, which
            is why they belong in a card builder rather than in a fixed list.
          </p>

          <h2>Animal welfare</h2>
          <p>
            Ranch rodeo rules are strict here. Any team may be disqualified for{" "}
            <strong>unnecessary roughness at the judge&apos;s discretion</strong>{" "}
            in any event, and rough handling is a no time.
          </p>

          <div className="mt-10 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-muted">
              <strong className="text-brand">Sources and currency.</strong> This
              page describes the WRCA-pattern rules and common practice as
              documented in the RanchRodeo.pro build map, rules-verified 24 July
              2026. There is no single national ranch rodeo rulebook — the
              producer or association sets the rules for each event, and the
              published rules for the rodeo you entered always govern. This is
              a reference, not a rulebook.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
