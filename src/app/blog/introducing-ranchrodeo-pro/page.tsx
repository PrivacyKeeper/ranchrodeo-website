import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introducing RanchRodeo.Pro",
  description:
    "Ranch rodeo is structurally different from every other rodeo event, and building it as a variant fails. Teams, not individuals. Points, not times. A job, not a membership number.",
  alternates: {
    canonical: "https://www.ranchrodeo.pro/blog/introducing-ranchrodeo-pro",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Introducing RanchRodeo.Pro
      </h1>

      <p>
        Ranch rodeo is structurally different from every other event in rodeo,
        and any attempt to build software for it as a variant of the others
        fails. Four things drive that, and all four break assumptions the rest
        of the sport takes for granted.
      </p>

      <h2>1. The competing unit is a team</h2>

      <p>
        Four to five people from the same outfit — and under the WRCA pattern,
        up to two ranches may combine into one team. Every structure that is
        singular elsewhere is a team here.
      </p>

      <p>
        And the roles are not fixed. A man is a mugger in the wild cow milking
        and a heeler in the stray gathering. A roster is not a list of names; it
        is a matrix of people against events.
      </p>

      <h2>2. There is no single event</h2>

      <p>
        A ranch rodeo is five or six multi-person events run twice, with points
        aggregated across all of them. There is no &ldquo;the run&rdquo; to
        model. There is a compulsory event set and a points ladder.
      </p>

      <h2>3. Scoring is placings and points, not times</h2>

      <p>
        Times determine placings. Placings determine points. Points determine
        the champion. Two different currencies in one system, and no other
        rodeo discipline works this way.
      </p>

      <p>
        The consequence is the thing everyone in this discipline already knows:
        producers do that arithmetic <strong>by hand, with a calculator,
        between rounds, while a crowd sits waiting</strong>.
      </p>

      <h2>4. Eligibility is a job, not a number</h2>

      <p>
        Team members must be verified working ranch cowboys, pre-qualified
        through the association and holding a card. That is a credential system,
        not a membership number — and it is enforced. &ldquo;No proof, no
        competition, no exceptions&rdquo; is the actual rule, and teams get
        turned away at check-in.
      </p>

      <h2>So we started with the producer</h2>

      <p>
        On the other apps in this portfolio, the producer console is the last
        feature. Here it is the first, because the points math between rounds is
        a genuinely wanted product with almost no competition.
      </p>

      <p>
        The moment the last team runs an event, placings compute and standings
        update. Live standings go straight to a web view you can put on the
        arena screen or share as a link. Tiebreakers resolve in your configured
        order and show their working. Bonus points for teams that scored in
        every event apply themselves.
      </p>

      <p>
        And the card builder means none of it is hardcoded — your event set,
        your time limits, your penalty values, your points scale. Ranch rodeo
        producers each have their own arithmetic and are not going to change it
        for an app, so the app changes instead.
      </p>

      <h2>Then everything around the outfits</h2>

      <p>
        Team rosters with per-event roles. Card and affidavit tracking with
        expiry warnings <em>before</em> entries close. Livestock management,
        including numbered cattle sets for sorting and calf weight compliance
        for branding. Working horse records, where Top Horse is a credential
        that follows the animal. Awards, Calcutta records, and qualification
        export.
      </p>

      <p>
        Plus the social side — but with a different tone than the rest of the
        portfolio. The culture here is <strong>heritage, not sport</strong>. The
        ranch profile is the brand, the county, the operation, the outfit&apos;s
        story. That is what the audience actually engages with, and it belongs
        at the centre rather than bolted on.
      </p>

      <h2>What this is not</h2>

      <p>
        Worth saying plainly: this is the app for <em>competing in</em> ranch
        rodeos. It is not a general rodeo operating system and it does not try
        to be. It does one discipline properly.
      </p>

      <p>
        Read the <Link href="/rules">rules reference</Link> for how the points
        and the events actually work, or the{" "}
        <Link href="/events">events and producer console</Link> page for what
        running a rodeo on it looks like.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link> — and if you
        produce, say so. Producers are going first.
      </p>
    </article>
  );
}
