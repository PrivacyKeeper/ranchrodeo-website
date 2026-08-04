export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export const posts: BlogPost[] = [
  {
    slug: "introducing-ranchrodeo-pro",
    title: "Introducing RanchRodeo.Pro",
    excerpt:
      "Ranch rodeo is structurally different from every other rodeo event, and building it as a variant fails. Teams, not individuals. Points, not times. A job, not a membership number.",
    date: "2026-08-03",
  },
  {
    slug: "how-ranch-rodeo-points-work",
    title: "How Ranch Rodeo Points Actually Work",
    excerpt:
      "Times determine placings, placings determine points, points determine the champion. Two currencies in one system — plus the two common scales, bonus points, and why the tiebreakers have to be published first.",
    date: "2026-08-03",
  },
  {
    slug: "ranch-rodeo-events-explained",
    title: "The Ranch Rodeo Events, Explained",
    excerpt:
      "Stray gathering, wild cow milking, team branding, number sorting and the rest. What each one asks of a team, and the 30-second penalties that quietly decide most of them.",
    date: "2026-08-03",
  },
  {
    slug: "ranch-bronc-riding-rules",
    title: "Ranch Bronc Riding: Ride As Ride Can",
    excerpt:
      "Eight seconds, no mark-out, and a working saddle the horse would wear any other day. The full equipment rules, why the saddle gets inspected in the stripping chute, and how it differs from PRCA saddle bronc.",
    date: "2026-08-03",
  },
  {
    slug: "working-cowboy-card-eligibility",
    title: "No Proof, No Competition: Card Eligibility Explained",
    excerpt:
      "Ranch rodeo eligibility is employment-based, not a membership number. What a card actually is, what gets checked at the gate, and why teams still turn up without one.",
    date: "2026-08-03",
  },
  {
    slug: "ranch-rodeo-for-producers",
    title: "Producing a Ranch Rodeo Without a Calculator",
    excerpt:
      "The points math between rounds is the bottleneck in this discipline, and everyone doing it knows it. What a card builder, a round runner and instant standings actually change.",
    date: "2026-08-03",
  },
  {
    slug: "working-ranch-horses",
    title: "Working Ranch Horses, and Why a Record Is Worth Money",
    excerpt:
      "Ranch rodeo horses are not specialists — they gather, sort, drag calves and handle a rope. Top Horse is a credential that follows the animal, and a documented work history sells a gelding.",
    date: "2026-08-03",
  },
  {
    slug: "best-ranch-rodeo-app",
    title: "The Best Ranch Rodeo App for 2026",
    excerpt:
      "What ranch rodeo software has to do that no other rodeo app does: model a team with per-event roles, convert placings to points on a scale the producer sets, and work with no signal.",
    date: "2026-08-03",
  },
];
