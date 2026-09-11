export default function Why() {
  return (
    <section id="why" className="max-w-6xl mx-auto px-4 py-6 scroll-reveal">
      <div className="grid md:grid-cols-3 gap-3">
        <div className="rounded-xl p-4" style={{ background: 'rgb(var(--surface-overlay-rgb))', border: '1px solid var(--glass-border)' }}>
          <p className="text-[11px] tracking-[0.16em] text-text-muted uppercase font-mono">Why L2</p>
          <h3 className="text-sm font-bold text-text-primary mt-1">Discipline over emotion</h3>
          <p className="text-xs text-text-secondary mt-2 leading-relaxed">No system = revenge, over-leverage, blown gold. L2 is same 3 strategies, 1–2% risk, to 21:00 UTC.</p>
        </div>
        <div className="rounded-xl p-4" style={{ background: 'rgb(var(--surface-overlay-rgb))', border: '1px solid var(--glass-border)' }}>
          <p className="text-[11px] tracking-[0.16em] text-text-muted uppercase font-mono">Edge</p>
          <h3 className="text-sm font-bold text-text-primary mt-1">Hybrid fills</h3>
          <p className="text-xs text-text-secondary mt-2 leading-relaxed">Limit + stop, same SL/TP. Whichever touches fills — we cancel the other. No missed move.</p>
        </div>
        <div className="rounded-xl p-4" style={{ background: 'rgb(var(--surface-overlay-rgb))', border: '1px solid var(--glass-border)' }}>
          <p className="text-[11px] tracking-[0.16em] text-text-muted uppercase font-mono">Who it’s for</p>
          <h3 className="text-sm font-bold text-text-primary mt-1">1–5 years, knows risk</h3>
          <p className="text-xs text-text-secondary mt-2 leading-relaxed">You know SL/TP, want systematic intraday, async Telegram, prop-ready.</p>
        </div>
      </div>
    </section>
  )
}
