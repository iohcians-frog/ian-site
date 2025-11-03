// src/components/VerdictBadge.tsx
type Verdict =
  | "genius"
  | "nice-demo"
  | "over-engineered"
  | "elegant"
  | "calm-down"
  | "caution"
  | "red-flag"
  | "overhyped";

const STYLE: Record<Verdict, string> = {
  genius: "bg-white border border-neutral-200 text-neutral-800",
  "nice-demo": "bg-white border border-neutral-200 text-neutral-800",
  "over-engineered": "bg-white border border-neutral-200 text-neutral-800",
  elegant: "bg-white border border-neutral-200 text-neutral-800",
  "calm-down": "bg-white border border-neutral-200 text-neutral-800",
  caution: "bg-white border border-neutral-200 text-neutral-800",
  "red-flag": "bg-white border border-neutral-200 text-neutral-800",
  overhyped: "bg-white border border-neutral-200 text-neutral-800",
};

export default function VerdictBadge({ verdict }: { verdict: Verdict }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs sm:text-sm font-medium whitespace-nowrap ${STYLE[verdict]}`}
    >
      <span>{emojiFor(verdict)}</span>
      <span>{labelize(verdict)}</span>
    </span>
  );
}

function emojiFor(v: Verdict) {
  return (
    {
      genius: "🧠",
      "nice-demo": "🪄",
      "over-engineered": "🧰",
      elegant: "🧪",
      "calm-down": "🧊",
      caution: "⚠️",
      "red-flag": "🚩",
      overhyped: "🎈",
    }[v] ?? "🔬"
  );
}

function labelize(v: Verdict) {
  return (
    {
      genius: "Genius curiosity",
      "nice-demo": "Nice demo",
      "over-engineered": "Over-engineered",
      elegant: "Elegant nonsense",
      "calm-down": "Calm down",
      caution: "Caution",
      "red-flag": "Red flag",
      overhyped: "Overhyped",
    }[v] ?? v
  );
}
