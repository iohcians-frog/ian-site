import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import CaseCard from "@/components/CaseCard";
import { getCases, getFields } from "@/data/cases";

export default function Cases() {
  const all = getCases();
  const fields = getFields();
  const [field, setField] = useState<string>("All");

  const filtered = useMemo(() => {
    if (field === "All") return all;
    return all.filter(c => c.field === field);
  }, [field, all]);

  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex items-end justify-between gap-6">
          <h1 className="text-2xl md:text-3xl font-bold">Case Files</h1>
          <div className="text-sm">
            <label className="mr-2">Field:</label>
            <select
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="border rounded-md px-2 py-1"
            >
              <option>All</option>
              {fields.map(f => <option key={f}>{f}</option>)}
            </select>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map(c => <CaseCard key={c.slug} c={c} />)}
        </div>
      </section>
    </Layout>
  );
}
