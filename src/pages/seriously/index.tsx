import { useMemo, useState } from "react";
import type { GetStaticProps } from "next";
import Layout from "@/components/Layout";
import CaseCard from "@/components/CaseCard";
import {
  getCollectionMetadata,
  getFields,
  type ContentMetadata,
} from "@/lib/content";

interface CasesProps {
  all: ContentMetadata[];
  fields: string[];
}

export default function Cases({ all, fields }: CasesProps) {
  const [field, setField] = useState<string>("All");

  const filtered = useMemo(() => {
    if (field === "All") return all;
    return all.filter((item) => item.field === field);
  }, [field, all]);

  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex items-end justify-between gap-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            Serious Research, Questionable Purpose
          </h1>
          <div className="text-sm">
            <label className="mr-2">Field:</label>
            <select
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="border rounded-md px-2 py-1"
            >
              <option>All</option>
              {fields.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <p className="mt-3 max-w-3xl text-slate-700">
          Every paper here meant well.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map((item) => (
            <CaseCard key={item.slug} item={item} basePath="/seriously" />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<CasesProps> = async () => {
  const all = getCollectionMetadata("seriously");

  return {
    props: {
      all,
      fields: getFields(all),
    },
  };
};
