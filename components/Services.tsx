export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-6 scroll-reveal">
      <div className="card">
        <p className="text-[11px] tracking-[0.16em] text-accent-gold uppercase">What you get</p>
        <h2 className="text-lg font-bold text-text-primary mt-1">Signals with discipline, not hype</h2>
        <div className="grid md:grid-cols-3 gap-3 mt-4">
          <div className="rounded-xl p-4" style={{ background: 'rgb(var(--surface-overlay-rgb))', border: '1px solid var(--glass-border)' }}>
            <p className="text-xs font-semibold">Intraday XAU/USD</p>
            <p className="text-[11px] text-text-muted mt-1">15M stack, to 21:00 UTC close. No 1-minute stare.</p>
          </div>
          <div className="rounded-xl p-4" style={{ background: 'rgb(var(--surface-overlay-rgb))', border: '1px solid var(--glass-border)' }}>
            <p className="text-xs font-semibold">Telegram delivery</p>
            <p className="text-[11px] text-text-muted mt-1">Exit playbook 50%@+1R → BE → TP + daily channel updates.</p>
          </div>
          <div className="rounded-xl p-4" style={{ background: 'rgb(var(--surface-overlay-rgb))', border: '1px solid var(--glass-border)' }}>
            <p className="text-xs font-semibold">Verifiable ledger</p>
            <p className="text-[11px] text-text-muted mt-1">Every R and date logged. Proof before promises.</p>
          </div>
        </div>
        <p className="text-[11px] text-text-muted mt-4">L2 Signals is a product. For custom builds, partnerships or sponsorships — DM the founder via footer.</p>
      </div>
    </section>
  )
}
