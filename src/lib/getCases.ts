import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CASES_DIR = path.join(process.cwd(), 'content', 'cases');

export function getAllCaseSlugs() {
  return fs
    .readdirSync(CASES_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/i, ''));
}

export function getCaseBySlug(slug: string) {
  const full = path.join(CASES_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(full, 'utf8');
  const { data, content } = matter(raw);
  return { slug, frontmatter: data, content };
}

export function getAllCases() {
  return getAllCaseSlugs().map((slug) => getCaseBySlug(slug));
}
