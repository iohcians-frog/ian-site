import Link from "next/link";
import { serious } from "@/data/serious";
import Layout from "@/components/Layout";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs">
      {children}
    </span>
  );
}

function CaseCard({
  href,
  title,
  tags,
  verdict,
}: {
  href: string;
  title: string;
  tags: string[];
  verdict: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border p-4 transition hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold leading-snug underline decoration-slate-300/70 underline-offset-4">
          {title}
        </h3>
        <div className="shrink-0">{verdict}</div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-slate-600">
        {tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </Link>
  );
}

function seriousVerdictPill(v: string) {
  const map: Record<string, string> = {
    "calm-down": "🧊 Calm down",
    caution: "⚠️ Caution",
    "red-flag": "🚩 Red flag",
    overhyped: "🎈 Overhyped",
  };
  return <Pill>{map[v] ?? "🧪 Science"}</Pill>;
}

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Institute for Applied Nonsense (IAN)
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700 leading-relaxed">
          We make sense of the stuff that technically makes sense… but really,
          really doesn’t.
        </p>
        <p className="mt-3 max-w-4xl text-slate-700">
          We collect real, peer-reviewed studies that are methodologically solid
          and almost pointless in practice. Each case explains why it made
          sense, why it didn’t, and what it teaches. If it’s scientifically
          valid but existentially void, it belongs here.
        </p>
      </section>

      {/* Case Files */}
      <section className="mx-auto max-w-5xl px-6 pb-4">
        <h2 className="text-2xl font-bold mb-5">Case Files</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <CaseCard
            href="/cases/microwave-regen"
            title="Microwave-Assisted Regeneration of Activated Carbon"
            verdict={<Pill>🧪 Elegant nonsense</Pill>}
            tags={[
              "Environmental Engineering",
              "Technically hot, practically not.",
            ]}
          />
          <CaseCard
            href="/cases/graphs-persuasion"
            title="Trivial Graphs & Formulas Make Ads More Persuasive"
            verdict={<Pill>🪄 Nice demo</Pill>}
            tags={["Communication / Psych", "Peer-reviewed, duh."]}
          />
          <CaseCard
            href="/cases/ml-candle"
            title="Machine Learning Predicts Candle Burn Rate"
            verdict={<Pill>🧰 Over-engineered</Pill>}
            tags={["Data Science", "AI rediscovers linear regression."]}
          />
        </div>

        {/* tighter balanced spacing */}
        <div className="mt-4 mb-4">
          <Link href="/cases" className="text-slate-800 underline">
            Browse all cases →
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-6 pb-8">
        <h2 className="text-2xl font-bold">How it works</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
          <li>We find real papers that look brilliant and do very little.</li>
          <li>
            We annotate them in 3 blocks: <b>Sense</b> • <b>Nonsense</b> •{" "}
            <b>Lesson</b>.
          </li>
          <li>
            We tag by field and verdict: 🧠 Genius curiosity • 🪄 Nice demo • 🧰
            Over-engineered • 🧪 Elegant nonsense.
          </li>
          <li>We keep it kind. We keep it anonymous.</li>
        </ul>
        <p className="mt-3 text-slate-700 italic">
          Validity isn’t value. Significance isn’t significance. Peer review
          isn’t peer understanding.
        </p>
      </section>

      {/* Divider — slightly thicker, tighter */}
      <hr className="mx-auto max-w-5xl border-t-[1.5px] border-slate-200 my-5" />

      {/* Serious Science */}
      <section className="mx-auto max-w-5xl px-6 pb-4">
        <h2 className="text-2xl font-bold">
          Serious Science, with Not-So-Serious Language
        </h2>
        <p className="mt-2 max-w-3xl text-slate-700">
          Mini plain-language reviews of hot, controversial, or overhyped
          science. We read the papers so you don’t have to.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {serious.slice(0, 2).map((s) => (
            <CaseCard
              key={s.slug}
              href={`/serious/${s.slug}`}
              title={s.title}
              verdict={seriousVerdictPill(s.verdict)}
              tags={[s.field, ...(s.tags ?? [])]}
            />
          ))}
        </div>

        <div className="mt-4 mb-4">
          <Link href="/serious" className="text-slate-800 underline">
            Browse all reviews →
          </Link>
        </div>
      </section>

      {/* How it works (Serious Edition) */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-2xl font-bold">
          How it works (Serious Science Edition)
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
          <li>
            We pick studies that dominate headlines — the ones that make people
            panic, celebrate, or argue online.
          </li>
          <li>
            We translate the science into plain language, so you know what the
            paper <i>actually</i> says — and what it doesn’t.
          </li>
          <li>
            We tag each review by tone and verdict: ⚠️ Caution • 🚩 Red flag • 🧊
            Calm down • 🎈 Overhyped.
          </li>
          <li>
            We focus on clarity, not outrage. The goal isn’t to debunk, but to
            understand.
          </li>
        </ul>
        <p className="mt-3 text-slate-700 italic">
          Truth deserves translation. Fear deserves context.
        </p>
      </section>
    </Layout>
  );
}
