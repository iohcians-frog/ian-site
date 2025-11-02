import Link from "next/link";

export default function Home() {
  return (
    <main className="...">
      {/* top nav */}
      <nav className="space-x-4 text-sm">
        <Link href="/">IAN — Institute for Applied Nonsense</Link>
        <Link href="/cases">Cases</Link>
        <Link href="/manifesto">Manifesto</Link>
        <Link href="/about">About</Link>
      </nav>

      {/* featured case cards */}
      <div className="mt-8 grid gap-6">
        <Link href="/cases/microwave-regen" className="underline">
          Microwave-Assisted Regeneration of Activated Carbon
        </Link>

        <Link href="/cases/graphs-persuasion" className="underline">
          Trivial Graphs & Formulas Make Ads More Persuasive
        </Link>

        <Link href="/cases/ml-candle" className="underline">
          Machine Learning Predicts Candle Burn Rate
        </Link>

        <Link href="/cases" className="underline">
          Browse all cases →
        </Link>
      </div>
    </main>
  );
}
