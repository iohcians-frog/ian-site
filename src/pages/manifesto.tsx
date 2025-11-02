import Layout from "@/components/Layout";

export default function Manifesto() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-6">
        <h1 className="text-3xl font-bold">IAN Manifesto</h1>
        <p>We roast patterns, not people. We love science enough to laugh at its bad habits.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Be witty, not cruel.</li>
          <li>Mechanisms are not products.</li>
          <li>Validity isn’t value. Significance isn’t significance. Peer review isn’t peer understanding.</li>
          <li>Every case ends with “What it teaches”.</li>
        </ul>
      </section>
    </Layout>
  );
}
