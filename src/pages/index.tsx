import Link from "next/link";
import { useRouter } from "next/router";

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

export default function Home() {
  const router = useRouter();
  const basePath = router.basePath;

  return (
    <main className="min-h-screen bg-white">
      {/* header */}
      <header className="mx-auto max-w-5xl px-5 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm text-slate-600 hover:underline">
            IAN — Institute for Applied Nonsense
          </Link>
          <nav className="space-x-5 text-sm">
            <Link className="hover:underline" href="/cases">
              Cases
            </Link>
            <Link className="hover:underline" href="/manifesto">
              Manifesto
            </Link>
            <Link className="hover:underline" href="/about">
              About
            </Link>
          </nav>
        </div>

        <h1 className="mt-6 text-3xl font-bold sm:text-5xl">
          Institute for Applied Nonsense (IAN)
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">
          We make sense of the stuff that technically makes sense… but really,
          really doesn't.
        </p>
        <p className="mt-3 max-w-4xl text-slate-700">
          We collect real, peer-reviewed studies that are methodologically solid
          and almost pointless in practice. Each case explains why it made
          sense, why it didn't, and what it teaches. If it's scientifically
          valid but existentially void, it belongs here.
        </p>
      </header>

      {/* cases */}
      <section className="mx-auto mt-2 max-w-5xl px-5 pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          <CaseCard
            href="/cases/microwave-regen"
            title="Microwave-Assisted Regeneration of Activated Carbon"
            verdict={<Pill>🧪 Elegant nonsense</Pill>}
            tags={["Environmental Engineering", "Technically hot, practically not."]}
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

        <div className="mt-6">
          <Link href="/cases" className="text-slate-800 underline">
            Browse all cases →
          </Link>
        </div>
      </section>

      {/* manifesto bullets */}
      <section className="mx-auto max-w-5xl px-5 pb-14">
        <h2 className="text-xl font-semibold">How it works</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
          <li>We find real papers that look brilliant and do very little.</li>
          <li>We annotate them in 3 blocks: <b>Sense</b> • <b>Nonsense</b> • <b>Lesson</b>.</li>
          <li>
            We tag by field and verdict: 🧠 Genius curiosity • 🪄 Nice demo • 🧰 Over-engineered • 🧪 Elegant nonsense.
          </li>
          <li>We keep it kind. We keep it anonymous.</li>
        </ul>

        <p className="mt-4 text-slate-700 italic">
          Validity isn't value. Significance isn't significance.
          Peer review isn't peer understanding.
        </p>
      </section>

      {/* footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6 text-sm text-slate-600">
          <p>
            Powered by curiosity, caffeine, and questionable grant proposals. 🐸
          </p>
          <img src={`${basePath}/frog.svg`} alt="frog" className="h-6 w-6 opacity-70" />
        </div>
      </footer>
    </main>
  );
}
