import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-6">
        <h1 className="text-3xl font-bold">About IAN</h1>
        <p>A minimalist, anonymous site curating real papers that are methodologically solid but practically questionable — to teach research literacy with humor.</p>
        <h2 className="text-xl font-semibold mt-6">FAQ</h2>
        <p><b>Why anonymous?</b> We critique patterns, not people.</p>
        <p><b>Are you anti-science?</b> No. We love science enough to laugh at its bad habits.</p>
        <p><b>Can I submit a paper?</b> Soon. Bring open access links where possible.</p>
      </section>
    </Layout>
  );
}
