// Metadata for all cases - used for listings and navigation
// Full content is in /content/cases/*.md files

export interface CaseMetadata {
  slug: string;
  title: string;
  verdict: "genius" | "nice-demo" | "over-engineered" | "elegant";
  tags: string[];
  field: string;
  date: string;
  summary: string;
  paperLink?: string;
}

// Alias for compatibility
export type CaseFile = CaseMetadata;

export const cases: CaseMetadata[] = [
  {
  slug: "test-case",
  title: "Testing If This Works",
  verdict: "elegant",
  tags: ["Test", "Demo"],
  date: "2025-11-02",
  summary: "A simple test to see if everything is working.",
  },
  {
    slug: "microwave-regen",
    title: "Microwave-Assisted Regeneration of Activated Carbon",
    verdict: "elegant",
    tags: ["Environmental Engineering", "Energy"],
    field: "Environmental Engineering",
    date: "2025-01-10",
    summary: "Technically works. Practically... no one will do this.",
    paperLink: "https://doi.org/example",
  },
  {
    slug: "graphs-persuasion",
    title: "Trivial Graphs & Formulas Make Ads More Persuasive",
    verdict: "nice-demo",
    tags: ["Communication", "Psychology"],
    field: "Psychology",
    date: "2025-01-08",
    summary: "Peer-reviewed proof that people trust sciencey-looking things.",
    paperLink: "https://doi.org/example-graphs",
  },
  {
    slug: "ml-candle",
    title: "Machine Learning Predicts Candle Burn Rate",
    verdict: "over-engineered",
    tags: ["Data Science", "Machine Learning"],
    field: "Machine Learning",
    date: "2025-01-05",
    summary: "AI rediscovers linear regression, claims victory over candles.",
    paperLink: "https://doi.org/example-ml-candle",
  },
];

// Utility functions
export function getCases(): CaseMetadata[] {
  return cases;
}

export function getFields(): string[] {
  const fieldSet = new Set<string>();
  cases.forEach((c) => fieldSet.add(c.field));
  return Array.from(fieldSet).sort();
}

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
