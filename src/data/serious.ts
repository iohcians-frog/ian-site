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
    date: "2025-10-30",
    summary:
      "A plain-language look at acetaminophen use in pregnancy: what large studies actually show, and how cautious we really need to be.",
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
