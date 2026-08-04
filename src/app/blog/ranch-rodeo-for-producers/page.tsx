import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Producing a Ranch Rodeo Without a Calculator",
  description:
    "The points math between rounds is the bottleneck in this discipline, and everyone doing it knows it. What a card builder, a round runner and instant standings actually change.",
  alternates: {
    canonical: "https://www.ranchrodeo.pro/blog/ranch-rodeo-for-producers",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Producing a Ranch Rodeo Without a Calculator
      </h1>

      <p>
        If you produce ranch rodeos you already know the moment this post is
        about. The last team finishes an event, and now somebody has to work out
        placings, convert them to points, add them to running totals for twelve
        or twenty teams, and get a standing out — while the announcer stalls and
        a crowd sits.
      </p>

      <p>
        Almost universally that is happening on paper and a spreadsheet, with a
        calculator, by hand.
      </p>

      <h2>Why it is genuinely hard</h2>

      <p>Not because the arithmetic is difficult. Because of the shape of it:</p>

      <ul>
        <li>
          <strong>Two currencies.</strong> Times to placings, placings to
          points. Two conversions per event per round.
        </li>
        <li>
          <strong>Everything is a running total.</strong> Every event changes
          the standing, so nothing is final until the last one.
        </li>
        <li>
          <strong>Penalties are counts.</strong> Two 30-second penalties plus a
          time, per team, per event.
        </li>
        <li>
          <strong>Bonus points are conditional.</strong> Teams that scored in
          every event, which you only know at the end.
        </li>
        <li>
          <strong>One transcription error propagates.</strong> A wrong placing
          in round one changes the champion in round two.
        </li>
      </ul>

      <p>
        And it all happens under time pressure, in an arena, usually with no
        signal.
      </p>

      <h2>What changes</h2>

      <h3>Placings and points, the moment the last team runs</h3>

      <p>
        Times and penalties get entered as the teams run. When the last one
        finishes, placings compute and points convert on your scale
        immediately. Standings update.
      </p>

      <p>
        That is the whole product, honestly. Everything else is around it.
      </p>

      <h3>Live standings on the arena screen</h3>

      <p>
        The standing is a web view. Put it on the screen, or share the link so
        people who could not make the drive can follow it. Neither of those is
        possible with a legal pad.
      </p>

      <h3>Tiebreakers that show their working</h3>

      <p>
        Resolved in your configured order — most points overall, then branding,
        then doctoring, or whatever you publish. And displayed, so a team can
        see why they finished where they did instead of being told.
      </p>

      <h2>The card builder, and why nothing is hardcoded</h2>

      <p>
        Ranch rodeo producers each have their own arithmetic and are not going
        to change it for an app. So the app changes:
      </p>

      <ul>
        <li>Your event set, in your order, with your compulsory flags</li>
        <li>Your time limits and your penalty values, per event</li>
        <li>Your team size</li>
        <li>
          Your points scale — descending from team count, a fixed table, or a
          custom table you build
        </li>
        <li>Your bonus point rule</li>
        <li>Your tiebreaker order</li>
        <li>Save it, run it again next year</li>
      </ul>

      <h2>The rest of the day</h2>

      <ul>
        <li>
          <strong>Team check-in</strong> with roster, roles, and card
          verification — and the alternate permanence rule enforced so nobody
          has to remember it
        </li>
        <li>
          <strong>Round runner</strong> — one screen per event per round, teams
          in draw order
        </li>
        <li>
          <strong>Bronc riding</strong> judge entry, plus the saddle inspection
          log with the pass or fail and the reason
        </li>
        <li>
          <strong>Livestock</strong> — herds, tags, numbered cattle sets for
          sorting, calf weight compliance for branding
        </li>
        <li>
          <strong>Awards</strong> — Top Hand, Top Horse, Rookie and Hard Luck
          nominations and voting
        </li>
        <li>
          <strong>Calcutta record</strong> for the announcer
        </li>
        <li>
          <strong>Qualification export</strong> — the points that ladder up
          toward a finals
        </li>
      </ul>

      <h2>Offline, absolutely</h2>

      <p>
        Ranch rodeos happen in county arenas with no signal. A console that
        needs a connection is a console that does not work, so this one does not
        need one — it syncs when it can.
      </p>

      <p>
        That is not a nice-to-have in this discipline. It is the difference
        between software you can use and software you carry to the arena and
        then put back in the truck.
      </p>

      <h2>Where to start</h2>

      <p>
        Producers are being onboarded first, ahead of contestants, because the
        points math is the problem worth solving before anything else exists.
        If you produce, get on the list and say so.
      </p>

      <p>
        <Link href="/events">See the producer console &rarr;</Link>
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
