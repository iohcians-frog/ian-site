export interface SeriousMetadata {
  slug: string;
  title: string;
  verdict: "calm-down" | "caution" | "red-flag" | "overhyped";
  tags: string[];
  field: string;
  date: string;
  summary: string;
  paperLink?: string;
}

export const serious: SeriousMetadata[] = [
  {
    slug: "tylenol-pregnancy",
    title: "Tylenol During Pregnancy: How Scared Should You Be?",
    verdict: "caution",
    tags: ["Public Health", "Epidemiology", "Toxicology"],
    field: "Public Health",
    date: "2025-11-04",
    summary:
      "A harmless painkiller or a hidden risk? We still don’t know — and that’s the point",
    paperLink: "",
  },
  {
    slug: "opioids-silent-dependence",
    title: "Opioids: The Silent Dependence",
    verdict: "caution",
    tags: ["Pharmacology", "Pain Management", "Public Health"],
    field: "Medicine",
    date: "2025-11-03",
    summary: "Kills pain, then quietly keeps it alive.",
    paperLink: "",
  },
];

// Dropdown helper
export function getSeriousFields(): string[] {
  return Array.from(new Set(serious.map((s) => s.field))).filter(Boolean);
}
