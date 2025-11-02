import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Layout from "@/components/Layout";
import { GetStaticProps, GetStaticPaths } from "next";

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

function VerdictBadge({ verdict }: { verdict: string }) {
  const verdictMap: Record<string, { emoji: string; text: string }> = {
    "genius": { emoji: "🧠", text: "Genius curiosity" },
    "nice-demo": { emoji: "🪄", text: "Nice demo" },
    "over-engineered": { emoji: "🧰", text: "Over-engineered" },
    "elegant": { emoji: "🧪", text: "Elegant nonsense" },
  };

  const v = verdictMap[verdict] || verdictMap["elegant"];

  return (
    <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-sm">
      <span>{v.emoji}</span>
      <span>{v.text}</span>
    </span>
  );
}

export default function CasePage({ frontmatter, content }: CasePageProps) {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 py-12">
        {/* Header */}
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl font-bold leading-tight">{frontmatter.title}</h1>
          
          <div className="flex flex-wrap items-center gap-3">
            <VerdictBadge verdict={frontmatter.verdict} />
            {frontmatter.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-neutral-50 px-3 py-1 text-sm text-slate-600">
                {tag}
              </span>
            ))}
          </div>

          {frontmatter.paperLink && (
            <a
              href={frontmatter.paperLink}
              className="inline-block text-sm text-slate-600 underline hover:text-slate-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Read the original paper →
            </a>
          )}
        </div>

        {/* Markdown content with Tailwind Typography */}
        <div
          className="prose prose-slate prose-lg max-w-none 
                     prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                     prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                     prose-p:leading-relaxed prose-p:text-slate-700
                     prose-a:text-slate-800 prose-a:underline hover:prose-a:text-slate-600
                     prose-strong:text-slate-900 prose-strong:font-semibold
                     prose-ul:my-4 prose-li:my-2
                     prose-hr:my-8 prose-hr:border-slate-300"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const casesDir = path.join(process.cwd(), "content/cases");
  
  // Check if directory exists
  if (!fs.existsSync(casesDir)) {
    return { paths: [], fallback: false };
  }

  const filenames = fs.readdirSync(casesDir);
  const paths = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      params: { slug: filename.replace(".md", "") },
    }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), "content/cases", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content: markdown } = matter(fileContent);
  
  // Convert markdown to HTML
  const content = marked(markdown);

  // Ensure date is a string
  const serializedFrontmatter = {
    ...frontmatter,
    date: typeof frontmatter.date === 'string' ? frontmatter.date : frontmatter.date?.toISOString?.() || '',
  };

  return {
    props: {
      frontmatter: serializedFrontmatter,
      content,
    },
  };
};
