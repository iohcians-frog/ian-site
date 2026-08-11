import Link from "next/link";
import VerdictBadge from "./VerdictBadge";

export interface CardItem {
  slug: string;
  title: string;
  verdict: string;
  field: string;
  summary: string;
}

export default function CaseCard({
  item,
  basePath = "/seriously",
}: {
  item: CardItem;
  basePath?: string;
}) {
  return (
    <Link
      href={`${basePath}/${item.slug}/`}
      className="block rounded-2xl border bg-white p-5 hover:shadow-sm transition"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold leading-snug flex-1 min-w-0">
          {item.title}
        </h3>
        <div className="shrink-0">
          <VerdictBadge verdict={item.verdict as any} />
        </div>
      </div>
      <p className="mt-2 text-sm text-neutral-700">{item.field}</p>
      <p className="mt-3 text-sm">{item.summary}</p>
    </Link>
  );
}
