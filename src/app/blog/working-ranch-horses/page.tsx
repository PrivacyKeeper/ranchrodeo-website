import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Working Ranch Horses, and Why a Record Is Worth Money",
  description:
    "Ranch rodeo horses are not specialists — they gather, sort, drag calves and handle a rope. Top Horse is a credential that follows the animal, and a documented work history sells a gelding.",
  alternates: {
    canonical: "https://www.ranchrodeo.pro/blog/working-ranch-horses",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Working Ranch Horses, and Why a Record Is Worth Money
      </h1>

      <p>
        Every other rodeo discipline in this portfolio has specialist horses. A
        head horse. A heel horse. A calf horse. A barrel horse. Animals bred and
        trained to do one job extremely well.
      </p>

      <p>
        Ranch rodeo horses are not that. They are using horses, and the same
        gelding might gather strays, hold a herd, drag calves to a fire, and get
        sorted on — in the same afternoon.
      </p>

      <h2>What a working horse record actually holds</h2>

      <p>
        Which is why the horse profile in this app looks different from the
        others. Rather than a specialist rating, it carries what the horse{" "}
        <em>does</em>:
      </p>

      <ul>
        <li>
          <strong>Roles</strong> — rope horse, sorting horse, bronc, using
          horse, colt
        </li>
        <li>
          <strong>Job tags</strong> — gathers, sorts, drags calves, handles a
          rope, doctors
        </li>
        <li>
          <strong>Broke by</strong>, and <strong>years using</strong>
        </li>
        <li>
          <strong>Disposition notes</strong>
        </li>
        <li>
          <strong>Suited to</strong> — youth, day work, arena, rough country
        </li>
      </ul>

      <p>
        That last one matters more than it looks. A horse that is honest in an
        arena and useless in rough country is a completely different animal to
        sell than one that is the reverse, and &ldquo;good ranch horse&rdquo;
        does not distinguish them.
      </p>

      <h2>Top Horse is a real credential</h2>

      <p>
        Most rodeo awards attach to a person. <strong>Top Horse follows the
        animal</strong>, and it keeps following him — through a sale, through a
        change of outfit, for the rest of his working life.
      </p>

      <p>
        Which makes it worth recording properly rather than remembering. A horse
        with two sanctioned-rodeo Top Horse awards has something that cannot be
        claimed retroactively by whoever owns him next.
      </p>

      <h2>Why the record is worth money</h2>

      <p>
        Ranch geldings sell well, and they sell on reputation. The problem with
        reputation is that it lives with the people who saw the horse work.
      </p>

      <p>Consider two listings for the same horse:</p>

      <p>
        <em>&ldquo;Good using horse, gentle, been on the outfit a while, ropes
        good.&rdquo;</em>
      </p>

      <p>
        Versus: <em>&ldquo;Gathered on the outfit for six years. Drags calves,
        sorts, handles a rope. Top Horse at two sanctioned rodeos. Broke by
        [name]. Suited to rough country and day work.&rdquo;</em>
      </p>

      <p>
        Same horse. The second one sells faster and for more, and the only
        difference is that somebody wrote it down as it happened rather than
        trying to reconstruct it the week of the sale.
      </p>

      <p>
        That is what the horse resume export is for — a print-ready record
        pulling the work history, the awards, the roles and the media together.
      </p>

      <h2>The bronc horses are the other half</h2>

      <p>
        Ranch bronc stock sits in the same records with a different role tag.
        And unlike PRCA roughstock, ranch bronc horses often come off the
        outfit itself — a horse that is genuinely rank and genuinely a ranch
        horse the rest of the year.
      </p>

      <p>
        Their trip history is worth accumulating for the same reasons it is in{" "}
        <Link href="https://www.saddlebronc.pro">saddle bronc</Link>: what a
        horse has done tells riders something and tells buyers more.
      </p>

      <h2>And the horses are part of the heritage</h2>

      <p>
        Worth saying, because it is the thing that makes this discipline
        different. In ranch rodeo the horse is not equipment. He is part of the
        outfit&apos;s story, he appears on the ranch profile alongside the
        brand and the county, and people follow him.
      </p>

      <p>
        A record that treats him as a line item misses most of what he is worth.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
