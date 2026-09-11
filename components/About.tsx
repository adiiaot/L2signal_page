export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-10 scroll-reveal">
      <div className="card">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(var(--accent-gold-rgb),0.12)' }}>
            <span className="text-accent-gold font-bold text-sm">⟁</span>
          </div>
          <h2 className="text-lg font-bold text-text-primary">What is L2 Signals?</h2>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          <span className="font-semibold text-text-primary">L2 Signals</span> is a systematic XAU/USD intraday service for disciplined retail traders. We don&apos;t sell a bot that doubles capital. We generate deterministic signals — same rules every time — on real Dukascopy spot gold data, with a hybrid pending-order engine that catches the move whether price retraces to our limit or runs away to our stop. Backtest on 2-month real data: <span className="text-accent-gold font-semibold">76.9% WR / PF 4.0</span>. Hybrid EOD: <span className="text-accent-gold font-semibold">74.2% / PF 5.12 / +103R</span>.
        </p>
        <p className="text-sm text-text-secondary leading-relaxed mt-3">
          Built by <span className="font-semibold text-accent-gold">AOT — Cross Asset Quant</span>. Every signal, R, date and outcome is logged. Nothing hidden, nothing cherry-picked. The page you&apos;re reading pulls the same Firestore ledger the private dashboard uses — so when we’re funded, it updates here.
        </p>
      </div>
    </section>
  )
}
