export type Verdict = "Genius curiosity" | "Nice demo" | "Over-engineered" | "Elegant nonsense";

export type CaseFile = {
  slug: string;
  title: string;
  field: string;
  verdict: Verdict;
  citation: string;
  summary: string;
  sense: string;
  nonsense: string;
  lesson: string;
  tags: string[];
};

export const CASES: CaseFile[] = [
  {
    slug: "microwave-regen",
    title: "Microwave-Assisted Regeneration of Activated Carbon",
    field: "Environmental Engineering",
    verdict: "Elegant nonsense",
    citation: "Applied Water Science (2014)",
    summary: "Technically hot, practically not.",
    sense: "Dielectric heating excites dipoles; moist activated carbon absorbs microwave energy, speeding desorption/regeneration.",
    nonsense: "Penetration depth, hot spots, arcing risks, cooling loads and kWh/kg blow up at scale. Hardware costs erase any win.",
    lesson: "Physics ≠ feasibility. A sound mechanism can still be a system-level dead end.",
    tags: ["microwave", "activated carbon", "regeneration"]
  },
  {
    slug: "graphs-persuasion",
    title: "Trivial Graphs & Formulas Make Ads More Persuasive",
    field: "Communication / Psych",
    verdict: "Nice demo",
    citation: "Public Understanding of Science (2014)",
    summary: "Peer-reviewed duh.",
    sense: "Clean experiment shows science-y visuals increase perceived credibility and intent.",
    nonsense: "Confirms the obvious; effect is small and context-fragile. Not much transfer beyond 'authority aesthetics'.",
    lesson: "Don’t mistake the look of authority for understanding.",
    tags: ["graphs", "persuasion", "credibility"]
  },
  {
    slug: "ml-candle",
    title: "Machine Learning Predicts Candle Burn Rate",
    field: "Data Science",
    verdict: "Over-engineered",
    citation: "Computational Engineering Proceedings (2019)",
    summary: "AI rediscovers linear regression.",
    sense: "Collected features, trained models, got low RMSE. Looks impressive.",
    nonsense: "Linear regression matches performance. ML adds compute, complexity, and zero extra insight.",
    lesson: "Always test the simple baseline first.",
    tags: ["machine learning", "baseline", "regression"]
  }
];

export function getCases() {
  return CASES;
}

export function getCaseBySlug(slug: string) {
  return CASES.find(c => c.slug === slug) || null;
}

export function getFields() {
  return Array.from(new Set(CASES.map(c => c.field))).sort();
}

export const VERDICT_EMOJI: Record<string, string> = {
  "Genius curiosity": "🧠",
  "Nice demo": "🧪",
  "Over-engineered": "🪵",
  "Elegant nonsense": "🔁",
};
