import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import CaseCard from "@/components/CaseCard";
import { serious, getSeriousFields } from "@/data/serious";

export default function SeriousIndex() {
  const all = serious;
  const fields = getSeriousFields();
  const [field, setField] = useState<string>("All");

  const filtered = useMemo(() => {
    if (field === "All") return all;
    return all.filter((s) => s.field === field);
  }, [field, all]);

  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex items-end justify-between gap-6">
          <h1 className="text-3xl md:text-4xl font-bold">Serious Science</h1>

          <div className="text-sm">
            <label className="mr-2">Field:</label>
            <select
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="border rounded-md px-2 py-1"
            >
              <option>All</option>
              {fields.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </div>
        </div>

        <p className="mt-3 max-w-3xl text-slate-700">
          Mini plain-language reviews of hot, controversial, or overhyped science. We read the papers so you don’t have to.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map((s) => (
            <CaseCard key={s.slug} item={s} basePath="/serious" />
          ))}
        </div>
      </section>
    </Layout>
  );
}
