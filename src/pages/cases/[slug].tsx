import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllCaseSlugs, getCaseBySlug } from '@/lib/getCases';
// if you render MDX, import your renderer (e.g., mdx-bundler or next-mdx-remote)

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllCaseSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false, // IMPORTANT: every case page must be prebuilt for GH Pages
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const { frontmatter, content } = getCaseBySlug(slug);

  // If you use next-mdx-remote or mdx-bundler, serialize/bundle here
  // const mdxSource = await serialize(content);

  return {
    props: {
      slug,
      frontmatter,
      content, // or mdxSource if you serialize
    },
  };
};

export default function CasePage(props: any) {
  // Render using your layout + MDX renderer
  // Example:
  // return <Layout><MDXRemote {...props.mdxSource} /></Layout>
  return null;
}
