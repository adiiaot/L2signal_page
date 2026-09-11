import Hero from '../components/Hero'
import ProofSection from '../components/ProofSection'
import HowItWorks from '../components/HowItWorks'
import Why from '../components/Why'
import Roadmap from '../components/Roadmap'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Founder from '../components/Founder'

export default function Page() {
  return (
    <div className="space-y-2">
      <Hero />
      <ProofSection />
      <HowItWorks />
      <Why />
      <Roadmap />
      <Pricing />
      <FAQ />
      <Founder />
      <section id="contact" className="max-w-6xl mx-auto px-4 py-6 scroll-reveal">
        <div className="card text-center">
          <h3 className="text-lg font-bold text-text-primary">Stay updated — Telegram is the waitlist</h3>
          <p className="text-xs text-text-muted mt-1 max-w-2xl mx-auto">We post daily results, trades, and app release updates in the public channel. Join now — when private signals + web app drop, you’ll be first to know. No email list needed.</p>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            <a href="https://t.me/l2signals" target="_blank" rel="noopener" className="btn-primary rounded-full px-8 py-3">Join Our Channel on Telegram</a>
            <a href="https://x.com/l2signals" target="_blank" rel="noopener" className="btn-secondary rounded-full px-8 py-3">Follow on X</a>
          </div>
          <p className="text-[11px] text-text-muted mt-3">Contact for custom builds & partnerships: <a href="mailto:l2signalslab@gmail.com" className="text-accent-gold hover:underline">l2signalslab@gmail.com</a></p>
        </div>
      </section>
    </div>
  )
}
