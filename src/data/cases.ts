// Metadata for all cases - used for listings and navigation
// Full content is in /content/cases/*.md files

export interface CaseMetadata {
  slug: string;
  title: string;
  verdict: "genius" | "nice-demo" | "over-engineered" | "elegant";
  tags: string[];
  date: string;
  summary: string;
  paperLink?: string;
}

export const cases: CaseMetadata[] = [
  {
    slug: "microwave-regen",
    title: "Microwave-Assisted Regeneration of Activated Carbon",
    verdict: "elegant",
    tags: ["Environmental Engineering", "Energy"],
    date: "2025-01-10",
    summary: "Technically works. Practically... no one will do this.",
    paperLink: "https://doi.org/example",
  },
  {
    slug: "graphs-persuasion",
    title: "Trivial Graphs & Formulas Make Ads More Persuasive",
    verdict: "nice-demo",
    tags: ["Communication", "Psychology"],
    date: "2025-01-08",
    summary: "Peer-reviewed proof that people trust sciencey-looking things.",
    paperLink: "https://doi.org/example-graphs",
  },
  {
    slug: "ml-candle",
    title: "Machine Learning Predicts Candle Burn Rate",
    verdict: "over-engineered",
    tags: ["Data Science", "Machine Learning"],
    date: "2025-01-05",
    summary: "AI rediscovers linear regression, claims victory over candles.",
    paperLink: "https://doi.org/example-ml-candle",
  },
];

// Utility functions
export function getCaseBySlug(slug: string): CaseMetadata | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getCasesByTag(tag: string): CaseMetadata[] {
  return cases.filter((c) => c.tags.includes(tag));
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  cases.forEach((c) => c.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}
