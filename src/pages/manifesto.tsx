// src/pages/manifesto.tsx
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

function ManifestoEn() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <div className="space-y-12">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">
            The Institute for Applied Nonsense (IAN)
          </h1>
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
            <p>
              So we collect two kinds of science: the kind that makes no practical sense,
              and the kind that makes too much. One reminds us how far curiosity can go;
              the other reminds us why clear understanding still matters.
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
              And we believe that good science deserves translation — not to simplify it,
              but to give it back its humanity.
            </p>
            <p>
              IAN is not anti-science.{" "}
              <strong>
                IAN is science after a cup of coffee and a good existential crisis.
              </strong>
            </p>
          </div>
        </section>

        <hr className="border-slate-300" />

        {/* Our Mission */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-slate-700 leading-relaxed">To remind the world that:</p>
          <ul className="list-disc space-y-2 pl-6 text-slate-700">
            <li><strong>Validity is not value.</strong></li>
            <li><strong>Significance is not significance.</strong></li>
            <li><strong>Peer review is not peer understanding.</strong></li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            We collect the beautifully pointless, the mathematically perfect but spiritually
            empty, and the scientifically sound yet socially misunderstood.
            We turn them into lessons on humility, creativity, and the absurd glory
            of being human.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Beyond collection, we aim to build an open database — a living archive of curiosity —
            where students can learn, teachers can replicate simple and safe experiments,
            and anyone can explore how critical thinking actually works in practice.
            A place where science is not only observed, but experienced, questioned,
            and shared with clarity.
          </p>
          <p className="text-slate-700 leading-relaxed">
            We also work to explain complex, important topics in plain language —
            bridging the gap between technical jargon and public understanding.
            Because even experts sometimes struggle to translate their own field,
            and knowledge loses meaning when it cannot be shared.
            Our goal is simple: to make sense of what matters, without losing the wonder.
          </p>
        </section>

        <hr className="border-slate-300" />

        {/* Our Ethos */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Ethos</h2>
          <div className="space-y-3 text-slate-700 leading-relaxed">
            <p>
              We are anonymous not out of fear, but out of respect — for every researcher
              who dared to ask a stupid question seriously, and every reader trying to make
              sense of a serious question simply.
            </p>
            <p>
              We believe science must be able to laugh at itself — or it will forget why
              it began to wonder in the first place.
            </p>
            <p>
              We believe translation is as sacred as discovery. The world doesn’t need
              more noise — it needs clearer meaning.
            </p>
          </div>
        </section>

        <hr className="border-slate-300" />

        {/* Our Motto */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Motto</h2>
          <blockquote className="border-l-4 border-slate-300 pl-4 text-lg italic text-slate-700">
            If it makes sense but doesn’t, or doesn’t but should — it belongs to us.
          </blockquote>
        </section>

        <hr className="border-slate-300" />

        {/* Footer */}
        <div className="space-y-2 text-center text-slate-600">
          <p className="font-semibold">– The Institute for Applied Nonsense (IAN)</p>
          <p className="text-sm italic">A division of the Reductionphobia Collective.</p>
          <p className="text-sm italic">
            Founded somewhere between reason and revelation, circa whenever it felt right.
          </p>
        </div>
      </div>
    </article>
  );
}

// TODO: replace all text below with your Chinese version
function ManifestoZh() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <div className="space-y-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">白搭研習所（IAN）</h1>
          <p className="text-lg italic text-slate-600">
            以严谨为骨，以荒诞为皮，让一切「说得通又说不通」的东西，有处可归。
          </p>
        </div>

        <hr className="border-slate-300" />

        {/* 这里开始你可以放你喜欢的中二版宣言内容 */}
        {/* 宣言 */}
<section className="space-y-6 py-10">
  <h2 className="text-3xl font-bold tracking-wide">宣言</h2>

  <div className="max-w-2xl text-slate-900 leading-relaxed text-lg space-y-5">
    <p>
      吾輩非學術之正統，亦非盲信之愚徒。
      <br></br>行於荒誕與嚴謹之間，以幽默為筆，以理性為刃。
    </p>

    <p>
      眾人修論文以苦為功，我輩修論文以悟為道。
      <br></br>眾人逐發表以名為證，我輩觀科研以業為循。
      <br></br><strong>若曰邪修——則吾等為自成一派。</strong>
    </p>

    <p>
      於此名為「科學」之宗門，不以權威為經，不以數據為神。<br></br>
      <strong>以好奇為心，以清醒為眼，觀萬象而不惑，識荒唐而不怒。</strong>
    </p>

    <p>
      願以一笑化千篇胡說，<strong>以筆墨鎮壓無聊之學。<br></br></strong>
      記荒唐以留名，存清醒以傳道。
    </p>

    <div className="pt-6 space-y-1">
      <p className="font-semibold">——白搭研習所 IAN</p>
      <p className="italic text-slate-700">
        「以胡說，觀真理；以荒唐，照人心。」
      </p>
    </div>
  </div>
</section>



        {/* 你可以按同样结构写 Creed / Mission / Ethos / Motto 的中文内容 */}

      </div>
    </article>
  );
}

export default function Manifesto() {
  const { locale } = useRouter();
  const isZh = locale === "zh";

  return <Layout>{isZh ? <ManifestoZh /> : <ManifestoEn />}</Layout>;
}
