import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import aboutHero from '../assets/images/about_hero.png'

const values = [
  {
    icon: 'spa',
    title: 'Absolute Exclusivity',
    body: 'Every property in the MHOMES portfolio is privately held and available to one party at a time. No hotels, no crowds — only the estate, and you.',
  },
  {
    icon: 'forest',
    title: 'Rooted in Nature',
    body: 'Our locations are chosen for their irreplaceable natural settings — from Himalayan ridgelines to tidal backwaters. We believe the most profound luxury is undisturbed wilderness.',
  },
  {
    icon: 'history_edu',
    title: 'Living Heritage',
    body: "India\u2019s architectural soul runs deep. Our properties honour this \u2014 blending centuries of craft traditions with contemporary comforts that never overpower the setting.",
  },
]

const stats = [
  { num: '12+', label: 'Curated Estates' },
  { num: '5',   label: 'Indian Regions' },
  { num: '4',   label: 'International Markets by 2026' },
  { num: '1',   label: 'Promise — Extraordinary' },
]

const timeline = [
  { year: '2023', event: 'MHOMES Founded — A vision of curated private luxury across India.' },
  { year: '2024', event: 'First wave of estate curation across North & South India initiated.' },
  { year: '2025', event: 'Platform launch — Rajasthan, Kerala, and Ladakh estates coming online.' },
  { year: '2026', event: 'International expansion — Dubai, Maldives, Bali & Thailand.' },
]

export default function AboutUs() {
  const pageRef = useReveal()

  return (
    <div ref={pageRef} className="page-enter" style={{ paddingTop: '80px' }}>

      {/* ═══ HERO ═══ */}
      <div className="page-hero" style={{ height: '65vh' }}>
        <img src={aboutHero} alt="MHOMES courtyard" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
            <p className="reveal data-sm" style={{ color: 'var(--color-gold)', letterSpacing: '0.4em', marginBottom: '20px' }}>
              OUR STORY
            </p>
            <h1 className="reveal reveal-delay-1 display-lg" style={{ color: 'var(--color-on-surface)', maxWidth: '700px' }}>
              A Quiet Authority<br />
              <em style={{ color: 'var(--color-gold)' }}>Over Extraordinary Spaces</em>
            </h1>
          </div>
        </div>
      </div>

      {/* ═══ MISSION STATEMENT ═══ */}
      <section style={{ padding: 'var(--space-section) var(--space-desktop)', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
          <div className="reveal">
            <div style={{ width: '1px', height: '80px', background: 'var(--color-gold)', opacity: 0.4, marginBottom: '32px' }} />
            <p className="data-sm text-outline" style={{ letterSpacing: '0.3em' }}>WHAT WE BELIEVE</p>
          </div>
          <div>
            <p
              className="reveal reveal-delay-1"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 3vw, 38px)',
                fontWeight: 500,
                lineHeight: 1.4,
                color: 'var(--color-on-surface)',
                marginBottom: '32px',
              }}
            >
              "Luxury is not the presence of opulence — it is the{' '}
              <em style={{ color: 'var(--color-gold)' }}>absence of the ordinary</em>."
            </p>
            <p className="reveal reveal-delay-2 body-lg text-secondary" style={{ marginBottom: '24px' }}>
              MHOMES was born from a singular conviction: India's most breathtaking private estates have long been inaccessible to those who would most appreciate them. We exist to change that.
            </p>
            <p className="reveal reveal-delay-2 body-lg text-secondary">
              We are not a hotel company. We are curators — a small, opinionated team who travel relentlessly across India to find spaces that possess genuine soul. Properties that have earned their landscapes. Estates where the architecture defers to the setting, and the setting is nothing short of extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <div style={{ borderTop: '0.5px solid var(--color-outline-dim)', borderBottom: '0.5px solid var(--color-outline-dim)', background: 'var(--color-surface-low)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map(({ num, label }) => (
            <div key={label} className="stat-item reveal">
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '8px' }}>{num}</p>
              <p className="data-sm text-outline" style={{ letterSpacing: '0.12em' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ VALUES ═══ */}
      <section style={{ padding: 'var(--space-section) var(--space-desktop)', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '72px' }}>
          <p className="data-sm text-outline" style={{ letterSpacing: '0.4em', marginBottom: '16px' }}>OUR PHILOSOPHY</p>
          <h2 className="headline-lg" style={{ color: 'var(--color-on-surface)' }}>
            Three Pillars of<br /><em style={{ color: 'var(--color-gold)' }}>MHOMES</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          {values.map(({ icon, title, body }, i) => (
            <div
              key={title}
              className="reveal"
              style={{
                transitionDelay: `${i * 0.15}s`,
                padding: '40px',
                border: '0.5px solid var(--color-outline-dim)',
                background: 'var(--color-surface-low)',
                transition: 'border-color 0.4s, transform 0.4s',
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = 'rgba(200,162,76,0.4)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = 'var(--color-outline-dim)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '36px', color: 'var(--color-gold)', fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 36" }}
                >
                  {icon}
                </span>
              </div>
              <h3 className="headline-sm" style={{ marginBottom: '16px' }}>{title}</h3>
              <p className="body-md text-secondary" style={{ lineHeight: 1.7 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section
        style={{
          background: 'var(--color-surface-low)',
          borderTop: '0.5px solid var(--color-outline-dim)',
          padding: 'var(--space-section) var(--space-desktop)',
        }}
      >
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '64px' }}>
            <p className="data-sm text-outline" style={{ letterSpacing: '0.4em', marginBottom: '16px' }}>MILESTONES</p>
            <h2 className="headline-lg" style={{ color: 'var(--color-on-surface)' }}>
              Our <em style={{ color: 'var(--color-gold)' }}>Journey</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gap: '0', position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '100px', top: 0, bottom: 0, width: '0.5px', background: 'var(--color-outline-dim)' }} />

            {timeline.map(({ year, event }, i) => (
              <div
                key={year}
                className="reveal"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 40px 1fr',
                  gap: '0 24px',
                  alignItems: 'center',
                  padding: '32px 0',
                  borderBottom: '0.5px solid var(--color-outline-dim)',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--color-gold)', fontWeight: 600, textAlign: 'right' }}>
                  {year}
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-gold)', border: '2px solid var(--color-bg)' }} />
                </div>
                <p className="body-lg text-secondary" style={{ paddingLeft: '16px' }}>{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: 'var(--space-section) var(--space-desktop)', textAlign: 'center' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <p className="reveal data-sm text-outline" style={{ letterSpacing: '0.4em', marginBottom: '20px' }}>BE PART OF THE STORY</p>
          <h2 className="reveal reveal-delay-1 headline-lg" style={{ marginBottom: '16px' }}>
            For Investors &amp;<br /><em style={{ color: 'var(--color-gold)' }}>Early Partners</em>
          </h2>
          <p className="reveal reveal-delay-2 body-lg text-secondary" style={{ maxWidth: '500px', margin: '0 auto 48px' }}>
            MHOMES is currently presenting to select investors and estate owners. If you believe in the future of curated private hospitality in India, we would love to connect.
          </p>
          <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/inquiry" className="btn-primary">
              GET IN TOUCH
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </Link>
            <Link to="/locations" className="btn-secondary">VIEW OUR ESTATES</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
