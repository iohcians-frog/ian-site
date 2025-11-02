import Link from "next/link";
import VerdictBadge from "./VerdictBadge";
import { CaseFile } from "@/data/cases";

export default function CaseCard({ c }: { c: CaseFile }) {
  return (
    <Link
      href={`/cases/${c.slug}/`}
      className="block rounded-2xl border p-5 hover:shadow-sm transition"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold">{c.title}</h3>
        <VerdictBadge verdict={c.verdict} />
      </div>
      <p className="mt-2 text-sm text-neutral-700">{c.field}</p>
      <p className="mt-3 text-sm">{c.summary}</p>
    </Link>
  );
}
