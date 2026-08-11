// src/pages/cases/[slug].tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Layout from "@/components/Layout";
import VerdictBadge from "@/components/VerdictBadge";
import type { GetStaticProps, GetStaticPaths } from "next";

interface CasePageProps {
  frontmatter: {
    title: string;
    verdict: string;
    tags: string[];
    date: string;
    summary: string;
    paperLink?: string;
  };
  content: string;
}

export default function CasePage({ frontmatter, content }: CasePageProps) {
  return (
    <Layout>
      {/* white “card” container to match list/serious look */}
      <article className="mx-auto my-12 max-w-3xl rounded-2xl border bg-white p-8 shadow-sm">
        {/* Header */}
        <div className="mb-6 space-y-4">
          <h1 className="text-4xl font-bold leading-tight">
            {frontmatter.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            {/* shared pill with emoji */}
            <VerdictBadge verdict={frontmatter.verdict as any} />
            {frontmatter.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-3 py-1 text-sm text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {frontmatter.paperLink && (
            <a
              href={frontmatter.paperLink}
              className="inline-block text-sm text-slate-700 underline hover:text-slate-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Read the original paper →
            </a>
          )}
        </div>

        {/* Markdown content */}
        <div
          className="prose prose-slate prose-lg max-w-none
                     prose-headings:font-semibold prose-h2:mt-8 prose-h2:mb-4
                     prose-h3:mt-6 prose-h3:mb-3
                     prose-p:leading-relaxed
                     prose-a:underline hover:prose-a:text-slate-600
                     prose-ul:my-4 prose-li:my-2
                     prose-hr:my-8 prose-hr:border-slate-300"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </Layout>
  );
}

/* ---------- SSG WITH i18n ---------- */

export const getStaticPaths: GetStaticPaths = async () => {
  // We use English content as the source of truth for which slugs exist
  const casesDirEn = path.join(process.cwd(), "content/cases/en");

  if (!fs.existsSync(casesDirEn)) {
    return { paths: [], fallback: false };
  }

  const filenames = fs
    .readdirSync(casesDirEn)
    .filter((f) => (f.endsWith(".md") || f.endsWith(".mdx")))
    .filter((f) => !f.startsWith("_")); // skip templates like _TEMPLATE.md

  const locales = ["en", "zh"] as const;

  const paths =
    filenames.flatMap((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      return locales.map((locale) => ({
        params: { slug },
        locale,
      }));
    });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CasePageProps> = async ({
  params,
  locale,
}) => {
  const slug = params?.slug as string;
  const loc = (locale as string) || "en";

  // 1. Try to load from the current locale folder (en or zh)
  const base = path.join(process.cwd(), "content/cases", loc);
  const candidates = [
    path.join(base, `${slug}.md`),
    path.join(base, `${slug}.mdx`),
  ];

  let filePath = candidates.find((p) => fs.existsSync(p));

  // 2. If not found and we're not in English, fall back to English
  if (!filePath && loc !== "en") {
    const fallbackBase = path.join(process.cwd(), "content/cases", "en");
    const fallbackCandidates = [
      path.join(fallbackBase, `${slug}.md`),
      path.join(fallbackBase, `${slug}.mdx`),
    ];
    filePath = fallbackCandidates.find((p) => fs.existsSync(p));
  }

  // 3. If still nothing, 404
  if (!filePath) {
    return { notFound: true };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content: markdown } = matter(fileContent);

  const content = marked(markdown);

  const serializedFrontmatter = {
    ...frontmatter,
    date:
      typeof frontmatter.date === "string"
        ? frontmatter.date
        : frontmatter.date?.toISOString?.() || "",
  } as CasePageProps["frontmatter"];

  return {
    props: {
      frontmatter: serializedFrontmatter,
      content,
    },
  };
};
