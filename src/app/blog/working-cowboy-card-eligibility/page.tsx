import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "No Proof, No Competition: Card Eligibility Explained",
  description:
    "Ranch rodeo eligibility is employment-based, not a membership number. What a working cowboy card actually is, what gets checked at the gate, and why teams still turn up without one.",
  alternates: {
    canonical:
      "https://www.ranchrodeo.pro/blog/working-cowboy-card-eligibility",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        No Proof, No Competition: Card Eligibility Explained
      </h1>

      <p>
        Every other rodeo discipline gates entry on a membership number. You pay
        the association, you get a card, you enter. Ranch rodeo does not work
        that way, and people find that out at the worst possible moment.
      </p>

      <h2>Eligibility is a job</h2>

      <p>
        Team members must be <strong>verified working ranch cowboys</strong>,
        pre-qualified through the association and holding a card. It is a
        credential system rather than a membership.
      </p>

      <p>
        The reasoning is straightforward and it is the reason the discipline
        exists: ranch rodeo is meant to be working outfits competing at the work
        they do. An open competition would fill up with professional
        competitors inside two seasons and stop being what it is.
      </p>

      <h2>What actually gets checked</h2>

      <p>Depending on the association, some combination of:</p>

      <ul>
        <li>
          <strong>The card itself</strong> — issued after pre-qualification,
          with an expiry
        </li>
        <li>
          <strong>Employment proof</strong> — that you work for the outfit you
          are competing for
        </li>
        <li>
          <strong>An affidavit</strong>, often signed by the ranch
        </li>
        <li>
          <strong>Membership status</strong> with the sanctioning body, where
          that is separate
        </li>
      </ul>

      <p>
        And it is checked at team check-in, against a roster, before you
        compete.
      </p>

      <h2>The rule is enforced literally</h2>

      <p>
        <strong>&ldquo;No proof, no competition, no exceptions.&rdquo;</strong>
      </p>

      <p>
        That is the actual wording, and teams do get turned away. Not
        occasionally — routinely enough that it is one of the first things
        producers mention when you ask what goes wrong at their rodeos.
      </p>

      <p>
        The frustrating part is that it is almost never a genuine eligibility
        problem. It is a card that expired in March, an affidavit nobody got
        signed, or a hand who joined the outfit in June and never got
        pre-qualified. All fixable, weeks earlier, by somebody knowing.
      </p>

      <h2>Which is a software problem, not a rules problem</h2>

      <p>
        This is why card tracking is a first-class feature in our app rather
        than a note field:
      </p>

      <ul>
        <li>Card and affidavit stored per team member, with expiry dates</li>
        <li>Employment proof and membership status alongside</li>
        <li>
          <strong>A warning before entries close</strong> if anything on the
          roster is unverified or expiring
        </li>
        <li>
          Visible to you, to your team captain, and to the association you
          submit to — and to nobody else
        </li>
      </ul>

      <p>
        To be clear about what that is and is not: we{" "}
        <strong>store and warn</strong>. The association verifies. A green tick
        in our app is not a clearance and it does not bind anyone at the gate.
        But a red flag three weeks out is worth a great deal, because three
        weeks is enough time to fix any of the four things above.
      </p>

      <h2>Rosters, roles and alternates</h2>

      <p>
        Two other things worth knowing about how teams are constituted, since
        they interact with eligibility:
      </p>

      <p>
        <strong>Two-ranch teams.</strong> Under the WRCA pattern, up to two
        ranches may combine to form a team. Both outfits&apos; hands need to be
        eligible, and how a combined team is credited is between the ranches and
        the producer.
      </p>

      <p>
        <strong>The alternate rule.</strong> Once an original participant is
        replaced by an alternate, that participant{" "}
        <strong>cannot return to the competition</strong>. Not for a later
        event, not for the second round. That is enforced in our roster editor
        because it is the kind of rule that gets broken by accident when
        somebody feels better after lunch.
      </p>

      <h2>If you are new to this</h2>

      <p>
        Sort your card in the off-season, not the week of the rodeo. Get the
        affidavit signed while the boss is standing in front of you. And check
        the expiry on every hand on the roster, not just your own — because the
        rule turns away teams, not individuals.
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
