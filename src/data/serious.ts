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
    slug: "opioid-epidemic",
    title: "The Opioid Epidemic: The Paper Trail of Pain",
    verdict: "red-flag",
    tags: ["Addiction Studies", "Pharmacology", "Sociology"],
    field: "Addiction Studies",
    date: "2025-10-30",
    summary:
      "A breakdown of how prescription data, corporate incentives, and public health responses shaped one of the biggest crises in medicine.",
    paperLink: "",
  },
];

// Dropdown helper
export function getSeriousFields(): string[] {
  return Array.from(new Set(serious.map((s) => s.field))).filter(Boolean);
}
