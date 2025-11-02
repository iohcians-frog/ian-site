import Layout from "@/components/Layout";

export default function Manifesto() {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-12">
          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">The Institute for Applied Nonsense (IAN)</h1>
            <p className="text-lg italic text-slate-600">
              Where rigor meets ridiculousness — and both make sense.
            </p>
          </div>

          <hr className="border-slate-300" />

          {/* Our Premise */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Premise</h2>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                We exist because someone, somewhere, once used a million-dollar spectrometer 
                to measure the optimal curvature of a potato chip.
              </p>
              <p>
                We exist because "publish or perish" often forgets the third option: 
                <em> ponder and laugh.</em>
              </p>
              <p>
                Science, in its truest form, is curiosity with consequences. But somewhere 
                along the way, curiosity became paperwork, and discovery became a PDF.
              </p>
            </div>
          </section>

          <hr className="border-slate-300" />

          {/* Our Creed */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Creed</h2>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>We honor experiments that make no sense — as long as they make us think.</p>
              <p>
                We celebrate hypotheses that collapse gracefully, like failed soufflés of reason.
              </p>
              <p>
                We believe a levitating frog teaches more about wonder than a thousand grant reports.
              </p>
              <p>
                IAN is not anti-science. <strong>IAN is science after a cup of coffee and a good 
                existential crisis.</strong>
              </p>
            </div>
          </section>

          <hr className="border-slate-300" />

          {/* Our Mission */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed">To remind the world that:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Validity is not value.</strong></li>
              <li><strong>Significance is not significance.</strong></li>
              <li><strong>Peer review is not peer understanding.</strong></li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              We collect the beautifully pointless, the mathematically perfect but spiritually 
              empty. We turn them into lessons on humility, creativity, and the absurd glory 
              of being human.
            </p>
          </section>

          <hr className="border-slate-300" />

          {/* Our Ethos */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Ethos</h2>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                We are anonymous not out of fear, but out of respect — for every researcher 
                who dared to ask a stupid question seriously.
              </p>
              <p>
                We believe science must be able to laugh at itself — or it will forget why 
                it began to wonder in the first place.
              </p>
            </div>
          </section>

          <hr className="border-slate-300" />

          {/* Our Motto */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Motto</h2>
            <blockquote className="border-l-4 border-slate-300 pl-4 italic text-lg text-slate-700">
              If it makes sense but doesn't, it belongs to us.
            </blockquote>
          </section>

          <hr className="border-slate-300" />

          {/* Footer */}
          <div className="space-y-2 text-center text-slate-600">
            <p className="font-semibold">– The Institute for Applied Nonsense (IAN)</p>
            <p className="italic text-sm">A division of the Reductionphobia Collective.</p>
            <p className="italic text-sm">
              Founded somewhere between reason and revelation, circa whenever it felt right.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
