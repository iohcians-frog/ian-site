import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import VerdictBadge from "@/components/VerdictBadge";
import { getCaseBySlug } from "@/data/cases";

export default function CaseDetail() {
  const { query } = useRouter();
  const slug = String(query.slug || "");
  const c = getCaseBySlug(slug);

  if (!c) {
    return (
      <Layout>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p>Case not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">{c.title}</h1>
          <VerdictBadge verdict={c.verdict} />
        </div>
        <p className="mt-2 text-sm text-neutral-700">{c.field} · {c.citation}</p>

        <section className="mt-8 space-y-6">
          <div>
            <h3 className="font-semibold">Why it made sense</h3>
            <p className="mt-2">{c.sense}</p>
          </div>
          <div>
            <h3 className="font-semibold">Why it didn’t</h3>
            <p className="mt-2">{c.nonsense}</p>
          </div>
          <div className="rounded-lg border p-4 bg-neutral-50">
            <h3 className="font-semibold">What it teaches</h3>
            <p className="mt-2">{c.lesson}</p>
          </div>
        </section>
      </article>
    </Layout>
  );
}
