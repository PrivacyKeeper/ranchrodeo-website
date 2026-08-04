export default function SchemaMarkup() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RanchRodeo.pro",
    applicationCategory: "SportsApplication",
    operatingSystem: "iOS, Android",
    description:
      "The everything app for ranch rodeo. A social platform for the ranch rodeo community, plus a producer console that converts placings to points instantly, live standings for the arena screen, team rosters with per-event roles, working cowboy card tracking, ranch profiles, and working horse records.",
    url: "https://www.ranchrodeo.pro",
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
      {
        "@type": "Offer",
        price: "4.99",
        priceCurrency: "USD",
        name: "Premium Monthly",
      },
      {
        "@type": "Offer",
        price: "49.99",
        priceCurrency: "USD",
        name: "Premium Annual",
      },
    ],
    author: {
      "@type": "Organization",
      name: "RanchRodeo.pro",
      url: "https://www.ranchrodeo.pro",
      email: "support@ranchrodeo.pro",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RanchRodeo.pro",
    url: "https://www.ranchrodeo.pro",
    description:
      "The complete ranch rodeo platform. Community, teams, events, placings and points, live standings, cards, ranch profiles, and working horses in one app.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.ranchrodeo.pro/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // Ranch rodeo has no single national rulebook, so every answer here names
  // the producer or the association as the authority rather than asserting a
  // universal rule.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does scoring work in a ranch rodeo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ranch rodeo scores in placings and points rather than times. Times or scores determine the placing within each event and each round, placings convert to points on a scale set by the producer, and total points across all rounds determine the champion. Two published scales are common: descending from the team count, where with 14 teams first gets 14 points, second 13 and so on; and a fixed table such as 10, 7, 5, 3, 1 for the top five. No time means no points under either scale.",
        },
      },
      {
        "@type": "Question",
        name: "What events are in a ranch rodeo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The card is set by the producer, but common compulsory events include ranch bronc riding, stray gathering, wild cow milking, team branding, and number sorting. Others that appear regularly are doctoring, team penning, trailer loading, wild horse race, mugging, and non-numbered sorting. Teams must usually enter every compulsory event to be eligible for the team championship, and most rodeos run two full rounds of everything.",
        },
      },
      {
        "@type": "Question",
        name: "How big is a ranch rodeo team?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically four to five members, and the competing unit is the ranch team rather than an individual. Roles change by event — a man may be a mugger in the wild cow milking and a heeler in the stray gathering. Under WRCA-pattern rules up to two ranches may combine to form a team. Once an alternate replaces an original participant, that participant cannot return to the competition.",
        },
      },
      {
        "@type": "Question",
        name: "Who is eligible to compete in a ranch rodeo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eligibility is employment-based rather than a membership number. Team members must be verified working ranch cowboys, pre-qualified through the association and holding a card. It is a credential system, and at most sanctioned rodeos the rule is enforced strictly — no proof, no competition, no exceptions.",
        },
      },
      {
        "@type": "Question",
        name: "What are the rules for ranch bronc riding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ride as ride can for eight seconds, with no mark-out rule. A standard working saddle must be used and the horse must be saddled as he would be for everyday ranch use — no PRCA rigging, no hobbling of the stirrups, standard leathers, and full or seven-eighths double rigging. A night latch or a catch rope may be used, with the catch rope attached in the traditional buckaroo manner. Saddles are inspected before unsaddling and a violation disqualifies the rider in the bronc riding for that round.",
        },
      },
      {
        "@type": "Question",
        name: "What is the time limit in ranch rodeo events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Commonly two minutes per event, though limits vary by producer and by event — some run one and a half to two and a half minutes. Penalties are usually assessed in 30-second increments for things like crossing the start line early, having more than one rider in the herd, loping in the herd, or a horse entering the judge's circle. Both the limits and the penalty values are producer configuration and should be published before the rodeo.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
