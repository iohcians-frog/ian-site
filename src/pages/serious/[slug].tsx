import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Layout from "@/components/Layout";
import VerdictBadge from "@/components/VerdictBadge";
import type { GetStaticProps, GetStaticPaths } from "next";

interface SeriousPageProps {
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

export default function SeriousPage({ frontmatter, content }: SeriousPageProps) {
  return (
    <Layout>
      {/* Clean white card-style layout */}
      <article className="mx-auto my-12 max-w-3xl rounded-2xl border bg-white p-8 shadow-sm">
        {/* Header */}
        <div className="mb-6 space-y-4">
          <h1 className="text-4xl font-bold leading-tight">{frontmatter.title}</h1>

          <div className="flex flex-wrap items-center gap-3">
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

/* ---------- SSG (Static Site Generation) ---------- */

export const getStaticPaths: GetStaticPaths = async () => {
  const seriousDir = path.join(process.cwd(), "content/serious");

  if (!fs.existsSync(seriousDir)) {
    return { paths: [], fallback: false };
  }

  const filenames = fs.readdirSync(seriousDir);
  const paths = filenames
    .filter((filename) => filename.endsWith(".md") || filename.endsWith(".mdx"))
    .map((filename) => ({
      params: { slug: filename.replace(/\.mdx?$/, "") },
    }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const baseDir = path.join(process.cwd(), "content/serious");
  const candidates = [
    path.join(baseDir, `${slug}.md`),
    path.join(baseDir, `${slug}.mdx`),
  ];

  const filePath = candidates.find((p) => fs.existsSync(p));

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
  };

  return {
    props: {
      frontmatter: serializedFrontmatter,
      content,
    },
  };
};
