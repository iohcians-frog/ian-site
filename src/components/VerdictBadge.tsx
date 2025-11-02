type Verdict = "genius" | "nice-demo" | "over-engineered" | "elegant";

const VERDICT_INFO: Record<Verdict, { emoji: string; text: string }> = {
  "genius": { emoji: "🧠", text: "Genius curiosity" },
  "nice-demo": { emoji: "🪄", text: "Nice demo" },
  "over-engineered": { emoji: "🧰", text: "Over-engineered" },
  "elegant": { emoji: "🧪", text: "Elegant nonsense" },
};

export default function VerdictBadge({ verdict }: { verdict: Verdict }) {
  const info = VERDICT_INFO[verdict];
  
  return (
    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs">
      <span>{info.emoji}</span>
      <span>{info.text}</span>
    </span>
  );
}