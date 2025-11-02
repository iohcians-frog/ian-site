type Verdict = "Genius curiosity" | "Nice demo" | "Over-engineered" | "Elegant nonsense";

const EMOJI: Record<Verdict, string> = {
  "Genius curiosity": "🧠",
  "Nice demo": "🧪",
  "Over-engineered": "🪵",
  "Elegant nonsense": "🔁",
};

export default function VerdictBadge({ verdict }: { verdict: Verdict }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs">
      <span>{EMOJI[verdict]}</span>
      <span>{verdict}</span>
    </span>
  );
}
