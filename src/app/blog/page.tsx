import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Ranch Rodeo Blog - Events, Points, Cards & Working Horses",
  description:
    "Ranch rodeo explained: the compulsory event set, how placings become points, the events themselves, working cowboy card eligibility, and the horses that do the job — from RanchRodeo.Pro.",
  alternates: { canonical: "https://www.ranchrodeo.pro/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-brand">
        RanchRodeo.Pro Blog
      </h1>
      <p className="mt-3 text-muted">
        Events, points, cards, and working horses — written for the outfits
        that actually enter.
      </p>

      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-ink-border bg-ink-raised/70 p-6 transition hover:border-brand"
          >
            <p className="text-xs tracking-wider text-muted-dim uppercase">
              {post.date}
            </p>
            <h2 className="mt-2 text-xl font-bold text-brand">
              <a href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </a>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#e3d8c8]">
              {post.excerpt}
            </p>
            <a
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-brand-2 hover:underline"
            >
              Read more &rarr;
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
