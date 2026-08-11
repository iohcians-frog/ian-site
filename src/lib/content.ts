import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ContentCollection = "cases" | "serious";

export interface ContentMetadata {
  slug: string;
  title: string;
  verdict: string;
  tags: string[];
  field: string;
  date: string;
  summary: string;
  paperLink: string | null;
}

function serializeDate(value: unknown): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (value instanceof Date) return value.toISOString().slice(0, 10);

  const maybeDate = value as { toISOString?: () => string };
  if (typeof maybeDate?.toISOString === "function") {
    return maybeDate.toISOString().slice(0, 10);
  }

  return String(value);
}

function normalizeTags(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((tag) => String(tag).trim()).filter(Boolean);
  }

  if (typeof value === "string" && value.trim()) {
    return [value.trim()];
  }

  return [];
}

export function getCollectionMetadata(
  collection: ContentCollection
): ContentMetadata[] {
  const directory = path.join(process.cwd(), "content", collection);

  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory)
    .filter((filename) => /\.mdx?$/.test(filename))
    .filter((filename) => !filename.startsWith("_"))
    .map((filename) => {
      const filePath = path.join(directory, filename);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);
      const tags = normalizeTags(data.tags);
      const filenameSlug = filename.replace(/\.mdx?$/, "");

      return {
        // Filename is the source of truth for routes. This avoids a stale
        // frontmatter slug ever pointing at a file that no longer exists.
        slug: filenameSlug,
        title: String(data.title || filenameSlug),
        verdict: String(data.verdict || ""),
        tags,
        field: String(data.field || tags[0] || "Other"),
        date: serializeDate(data.date),
        summary: String(data.summary || ""),
        paperLink: data.paperLink ? String(data.paperLink) : null,
      };
    })
    .sort((a, b) => {
      const dateCompare = b.date.localeCompare(a.date);
      if (dateCompare !== 0) return dateCompare;
      return a.title.localeCompare(b.title);
    });
}

export function getFields(items: ContentMetadata[]): string[] {
  return Array.from(
    new Set(items.map((item) => item.field).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b));
}
