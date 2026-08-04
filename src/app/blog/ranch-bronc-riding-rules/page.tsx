import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ranch Bronc Riding: Ride As Ride Can",
  description:
    "Eight seconds, no mark-out, and a working saddle the horse would wear any other day. The full equipment rules, why the saddle gets inspected in the stripping chute, and how it differs from PRCA saddle bronc.",
  alternates: {
    canonical: "https://www.ranchrodeo.pro/blog/ranch-bronc-riding-rules",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Ranch Bronc Riding: Ride As Ride Can
      </h1>

      <p>
        Ranch bronc is the one individual event on a ranch rodeo card, and
        people coming from PRCA saddle bronc assume it is the same thing with
        different tack. It is not, and the differences are the point.
      </p>

      <h2>The two big differences</h2>

      <h3>Ride as ride can</h3>
      <p>
        Eight seconds, same as saddle bronc. But{" "}
        <strong>there is no mark-out rule</strong>. You do not have to have your
        spurs set above the points of the shoulders when the front feet land,
        and you cannot be disqualified for failing to.
      </p>

      <p>
        That single change alters the whole event. In saddle bronc the first
        half-second is a technical requirement that can end your ride before it
        starts. Here it is just the start of the ride.
      </p>

      <h3>A working saddle</h3>
      <p>
        <strong>The horse must be saddled as he would be for everyday ranch
        use.</strong> No PRCA rigging. That is the philosophical centre of the
        event: this is a horse being ridden the way an outfit would ride him,
        not a specialist animal in specialist equipment.
      </p>

      <h2>The equipment rules, in full</h2>

      <p>They are specific, and they are enforced:</p>

      <ul>
        <li>
          <strong>No hobbling</strong> of one or both stirrups. Stirrups may not
          be bound or held forward.
        </li>
        <li>
          <strong>No latigos run through the stirrup leathers</strong> to hold
          the stirrups forward.
        </li>
        <li>
          <strong>Standard stirrup leathers.</strong> No nylon.
        </li>
        <li>
          <strong>Full or 7/8 double rigging.</strong> No centerfire, no 5/8, no
          3/4. No cable rigging.
        </li>
        <li>
          The flank cinch does <em>not</em> need to be hobbled to the front
          cinch.
        </li>
        <li>
          <strong>Saddle blankets and pads should not be used.</strong>
        </li>
      </ul>

      <p>
        Every one of those exists to stop somebody engineering an advantage out
        of a saddle that is supposed to be ordinary.
      </p>

      <h3>Night latch and catch rope</h3>

      <p>
        A <strong>night latch</strong> or a <strong>catch rope</strong> may be
        used. If you carry a catch rope, the rules on how it is attached are
        precise:
      </p>

      <ul>
        <li>Attached to the horn with a single leather strap</li>
        <li>Not exceeding 3/4 inch wide</li>
        <li>Wrapped around the rope no more than five times</li>
        <li>
          Attached in the <strong>traditional buckaroo manner</strong>, with a
          single buckle on either side of the fork or swell
        </li>
        <li>The rope must otherwise be free</li>
      </ul>

      <h2>The stripping chute inspection</h2>

      <p>
        This is the part that surprises people. Saddles are{" "}
        <strong>inspected before unsaddling</strong>, in the stripping chute,
        after the ride.
      </p>

      <p>
        A violation means <strong>immediate disqualification in the bronc
        riding for that round</strong> — after you have already ridden.
      </p>

      <p>
        Which is why our producer console keeps a saddle inspection log with the
        pass or fail <em>and the reason</em>. A disqualification that costs a
        team points in the aggregate is not something anyone should have to
        reconstruct from memory afterwards.
      </p>

      <p>
        Spur rowels must also be free spinning, dull and humane, and the chute
        judge may inspect before the ride.
      </p>

      <h2>The halter comes from the team</h2>

      <p>
        A regular bucking horse halter with one rein,{" "}
        <strong>provided by the ranch team</strong> rather than by the
        contractor. Small detail, and another one that reflects the difference
        in culture between this and pro roughstock.
      </p>

      <h2>How it is scored</h2>

      <p>
        Points for <strong>the difficulty of the horse</strong> plus{" "}
        <strong>the aggressiveness, control and exposure</strong> the rider
        shows.
      </p>

      <p>
        Note &ldquo;exposure&rdquo; — a rider who is genuinely out there getting
        it done marks better than one who is surviving neatly. That word is
        doing real work in the rulebook.
      </p>

      <p>
        And remember the score is not the outcome. It produces a placing, and
        the placing produces points toward the team championship. A great bronc
        ride is worth exactly one event&apos;s worth of points, same as a good
        sort. See{" "}
        <Link href="/blog/how-ranch-rodeo-points-work">how points work</Link>.
      </p>

      <h2>Re-rides</h2>

      <p>
        Awarded at the judge&apos;s discretion, and{" "}
        <strong>must be taken by the rider offered it</strong> — with one
        exception that is specific to a team event: if injury prevents it,{" "}
        <strong>another qualified team member may substitute</strong>.
      </p>

      <p>
        That exception exists because the points belong to the outfit, not the
        individual. It is a small rule that tells you exactly what kind of
        competition this is.
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
