import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Ranch Rodeo Events, Explained",
  description:
    "Stray gathering, wild cow milking, team branding, number sorting and the rest. What each asks of a team, and the 30-second penalties that quietly decide most of them.",
  alternates: {
    canonical:
      "https://www.ranchrodeo.pro/blog/ranch-rodeo-events-explained",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        The Ranch Rodeo Events, Explained
      </h1>

      <p>
        Every ranch rodeo event is a job from the outfit, compressed into two
        minutes with a flag judge watching. Here is what each one actually asks
        of a team — and where the 30-second penalties live, because those decide
        more placings than skill does.
      </p>

      <h2>Stray gathering</h2>

      <p>
        Four men, all horseback, two steers turned out, two minutes, unlimited
        loops. Each team member must head or heel one of the steers. Both
        steers headed <em>and</em> heeled, three legs crossed and tied on each.
      </p>

      <p>
        <strong>Where it goes wrong:</strong> leaving before the flag drops is
        30 seconds. And both steers have to{" "}
        <strong>stay tied for six seconds</strong> after you call for time —
        failure on either is a no time, which means a good gather can evaporate
        while you are catching your breath.
      </p>

      <p>
        Four head loops are legal: around the horns, half head, around the neck,
        or neck and one front leg.
      </p>

      <h2>Wild cow milking</h2>

      <p>
        Four men — a roper, a milker, and two muggers. Only the roper is
        horseback. Two minutes, two loops.
      </p>

      <p>
        <strong>Three no-times worth memorising:</strong>
      </p>

      <ul>
        <li>
          <strong>The cow must be standing when milked.</strong> Milking one
          that is down is a no time.
        </li>
        <li>
          <strong>The rope must be off the saddle horn</strong> before milking
          starts.
        </li>
        <li>
          <strong>The judge pours, not you.</strong> If the milk will not pour
          within the judge&apos;s count of five, or if a contestant pours, no
          time.
        </li>
      </ul>

      <p>
        Plus: the runner must step into the judge&apos;s circle{" "}
        <em>on foot</em>. If the horse enters the circle at all, 30 seconds.
      </p>

      <h2>Team branding</h2>

      <p>
        The signature event, and the one the crowd watches. Four to five men — a
        roper, two flankers, a brander, two herd holders. Two teams run at once,
        which needs two fires and two flag judges.
      </p>

      <p>
        Two minutes to heel, drag, flank and brand two calves each. Calves are{" "}
        <strong>roped by the heels only</strong>, from a herd of calves no
        heavier than 350 pounds held behind a line 60 feet out.
      </p>

      <p>
        <strong>The penalties:</strong> roping outside the line is 30 seconds.
        Flankers touching the calf before the <em>whole</em> calf is across the
        line is 30 seconds. And the horse loping — in the herd or dragging — is
        30 seconds, which is the one that catches ropers who get excited.
      </p>

      <p>
        Time stops when the iron is back in the bucket after the second calf.
        Not when the calf is branded. In the bucket.
      </p>

      <p>
        One detail worth knowing about this discipline: if a team is short for
        herd holders it may <strong>borrow from another team</strong>, and the
        announcer is supposed to note the sportsmanship. That rule tells you
        most of what you need to know about ranch rodeo culture.
      </p>

      <h2>Number sorting</h2>

      <p>
        Four men, a herd of cattle numbered 0 to 13, two minutes to cut five
        yearlings <strong>in numbered sequence</strong> from a number the
        announcer calls as you approach. Number 3 called means 3, 4, 5, 6, 7.
      </p>

      <p>
        This is the most disqualifying event on most cards, because almost
        everything is a no time rather than a penalty:
      </p>

      <ul>
        <li>Any yearling cut out of sequence — no time</li>
        <li>The herd breaking the line — no time</li>
        <li>Cut animals not held out of the herd — no time</li>
        <li>Use of spotters to help the sorter — no time</li>
      </ul>

      <p>
        The 30-second penalties are more than one man in the herd at a time, and
        loping in the herd. And if the team hesitates at the line — stops, as if
        looking for the first yearling — the flagman starts time before they
        cross.
      </p>

      <h2>Ranch bronc riding</h2>

      <p>
        The one individual event on the card, and the one with its own rulebook
        section.{" "}
        <Link href="/blog/ranch-bronc-riding-rules">It gets its own post</Link>{" "}
        — but in short: eight seconds, ride as ride can, no mark-out, and a
        working saddle the horse would wear any other day.
      </p>

      <h2>The rest of the card</h2>

      <p>
        Producers vary it, and all of these turn up regularly:
      </p>

      <ul>
        <li>
          <strong>Doctoring</strong> — rope and restrain a designated yearling,
          treat, release
        </li>
        <li>
          <strong>Team penning</strong> — cut and pen designated cattle
        </li>
        <li>
          <strong>Trailer loading</strong> — gather and load into a trailer
        </li>
        <li>
          <strong>Wild horse race</strong> — catch, saddle and ride an unbroke
          horse across a line
        </li>
        <li>
          <strong>Wild steer race</strong> — the youth version
        </li>
        <li>
          <strong>Ranch cutting</strong> and{" "}
          <strong>ranch riding classes</strong> — judged rather than timed
        </li>
        <li>
          <strong>Mugging</strong> and <strong>non-numbered sorting</strong>
        </li>
      </ul>

      <h2>What they have in common</h2>

      <p>
        Every one of them is a real job. Gathering strays, doctoring a sick
        yearling, branding calves, sorting cattle by number, loading a trailer —
        this is a working outfit&apos;s week, timed.
      </p>

      <p>
        Which is also why the penalties are what they are. Loping in the herd is
        penalised because you do not lope in a herd on a real outfit. Holding
        cut cattle out is required because a sort that scatters is not a sort.
        The rules are the work.
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
