import Link from "next/link";
import Layout from "@/components/Layout";
import CaseCard from "@/components/CaseCard";
import { getCases, VERDICT_EMOJI } from "@/data/cases";

export default function Home() {
  const cases = getCases().slice(0, 3);

  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Institute for Applied Nonsense (IAN)
        </h1>
        <p className="mt-4 max-w-3xl text-lg">
          Where we make sense of the stuff that technically makes sense… but really, really doesn’t.
        </p>
        <p className="mt-6 max-w-3xl">
          We collect real, peer-reviewed studies that are methodologically solid and almost pointless in practice.
          Each case explains <span className="font-semibold">why it made sense</span>, <span className="font-semibold">why it didn’t</span>, and
          <span className="font-semibold"> what it teaches</span>. If it’s scientifically valid but existentially void, it belongs here.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map(c => <CaseCard key={c.slug} c={c} />)}
        </div>

        <div className="mt-10">
          <Link href="/cases" className="inline-block rounded-lg border px-4 py-2 text-sm hover:bg-black hover:text-white transition">
            Browse all cases →
          </Link>
        </div>

        <div className="mt-16 border rounded-2xl p-6">
          <h2 className="font-semibold text-lg">How it works</h2>
          <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
            <li>We find real papers that look brilliant and do very little.</li>
            <li>We annotate them in 3 blocks: <b>Sense · Nonsense · Lesson</b>.</li>
            <li>We tag by field and verdict: {Object.entries(VERDICT_EMOJI).map(([k, v]) => <span key={k} className="mr-3">{v} {k}</span>)}</li>
            <li>We keep it kind. We keep it anonymous.</li>
          </ul>
          <p className="mt-6 italic">Validity isn’t value. Significance isn’t significance. Peer review isn’t peer understanding.</p>
        </div>
      </section>
    </Layout>
  );
}
