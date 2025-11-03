import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 py-16 space-y-12">
        {/* Title */}
        <section>
          <h1 className="text-4xl font-bold mb-3">About IAN</h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            The <strong>Institute for Applied Nonsense (IAN)</strong> is a minimalist,
            anonymous archive of real, peer-reviewed research — studies that are
            methodologically sound but often practically questionable.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We curate these papers not to mock, but to teach research literacy,
            critical thinking, and healthy skepticism — with a sense of humor intact.
            We also translate complex, important scientific topics into plain language,
            bridging the gap between technical jargon and public understanding.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            IAN exists somewhere between academia and everyday life — a quiet space
            for curiosity, reflection, and the occasional existential laugh.
          </p>
        </section>

        <hr className="border-slate-300" />

        {/* What We Do */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">What We Do</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>
              Curate <strong>methodologically solid but practically puzzling papers</strong>
              — to highlight how rigor doesn’t always equal relevance.
            </li>
            <li>
              Build a <strong>database of examples</strong> that teachers and students
              can use to explore research design, logic, and limitations.
            </li>
            <li>
              Write <strong>plain-language summaries</strong> of complex or controversial studies,
              so the general public can understand what the data really says — and what it doesn’t.
            </li>
            <li>
              Encourage <strong>critical curiosity</strong>: learning to question without cynicism,
              and laugh without dismissal.
            </li>
          </ul>
        </section>

        <hr className="border-slate-300" />

        {/* FAQ */}
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">FAQ</h2>

          <div className="space-y-3 text-slate-700 leading-relaxed">
            <div>
              <h3 className="font-semibold">Why anonymous?</h3>
              <p>
                Because ideas deserve focus without personality cults.  
                We critique <em>patterns</em>, not people.  
                Anonymity lets us stay honest, kind, and occasionally mischievous.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Why a frog?</h3>
              <p>
                Our frog pays tribute to physicist <strong>André Geim</strong>, who once
                <em> levitated a frog</em> — and later won the <strong>Nobel Prize in Physics</strong>.  
                It sounded absurd, yet it demonstrated <strong>diamagnetic levitation</strong> — a real,
                groundbreaking physical phenomenon.  
                Half of our site critiques research that borders on nonsense —  
                but by all means, some of it may one day be the <em>levitating frog</em> of its field.  
                After all, the line between <strong>genius and nonsense</strong> can be just
                one bold experiment apart.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Are you anti-science?</h3>
              <p>
                Absolutely not.  
                We love science enough to laugh at its bad habits —  
                publication pressure, over-interpretation, and the art of
                making a p-value sound profound.  
                Humor is our form of respect.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Can I submit a paper?</h3>
              <p>
                Soon.  
                We’re building an open submission system for readers to suggest
                studies, with open-access links whenever possible.  
                We’ll verify, annotate, and archive them for educational use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Are the authors credited?</h3>
              <p>
                Always.  
                We never hide source material — only identities when needed.
                Every case links to the original publication for full context.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Do you accept donations or sponsorship?</h3>
              <p>
                No.  
                IAN is deliberately free of institutional funding or influence.
                We believe independence is the only way to keep curiosity honest.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-300" />

        {/* Closing */}
        <section className="text-slate-600 text-center space-y-2">
          <p className="font-semibold">– The Institute for Applied Nonsense (IAN)</p>
          <p className="italic text-sm">
            Quietly teaching clarity, one ridiculous paper at a time.
          </p>
        </section>
      </article>
    </Layout>
  );
}
