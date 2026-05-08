export default function Home() {
  const faqs = [
    {
      q: "Which AI APIs are supported?",
      a: "OpenAI, Anthropic, and any OpenAI-compatible endpoint. Bring your own API keys."
    },
    {
      q: "How are quality scores calculated?",
      a: "You define scoring rubrics per test. The app sends responses to a judge model and aggregates scores across runs."
    },
    {
      q: "Can I export the results?",
      a: "Yes. Every test report exports to CSV and JSON so you can pipe data into your own dashboards."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#161b22] text-[#58a6ff] border border-[#30363d]">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Compare prompt performance<br />
          <span className="text-[#58a6ff]">across every version</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Run A/B tests on your prompt variants, track token cost and quality scores side-by-side, and ship the version that actually works.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get started — $39/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No usage limits on prompt tests.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Side-by-side diff view", "Cost per token tracking", "Judge-model scoring", "CSV & JSON export", "Multi-model support"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full text-sm bg-[#161b22] border border-[#30363d] text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#6e7681] mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited prompt variants",
              "A/B test runs with any model",
              "Cost & quality dashboards",
              "Judge-model auto-scoring",
              "Export reports (CSV / JSON)",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Subscribe now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Prompt Version Diff Calculator. All rights reserved.
      </footer>
    </main>
  );
}
