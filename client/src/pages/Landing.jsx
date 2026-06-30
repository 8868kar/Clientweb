import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { regions, international, heroBg } from '../data/properties'
import PropertyCard from '../components/PropertyCard'
import useReveal from '../hooks/useReveal'

// Mini section for landing page preview of each region
function RegionPreview({ region }) {
  return (
    <section id={region.id} style={{ marginBottom: '100px' }}>
      <div className="section-header reveal">
        <h2 className="headline-lg text-gold" style={{ fontStyle: 'italic' }}>{region.title}</h2>
        <span className="data-sm text-outline">{region.subtitle}</span>
      </div>
      <div className="grid-3">
        {region.properties.slice(0, 3).map((p, i) => (
          <PropertyCard key={p.id} {...p} staggerIndex={i} />
        ))}
      </div>
    </section>
  )
}

export default function Landing() {
  const pageRef = useReveal()

  // Parallax for hero
  const heroRef = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `scale(1.06) translateY(${window.scrollY * 0.18}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={pageRef} className="page-enter">

      {/* ═══ HERO ═══ */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background image with Ken Burns */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img
            ref={heroRef}
            src={heroBg}
            alt="MHOMES luxury villa"
            className="ken-burns"
            style={{ width: '100%', height: '100%', objectFit: 'cover', transformOrigin: 'center center' }}
          />
        </div>

        {/* Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,13,13,0.35) 0%, rgba(13,13,13,0.55) 50%, rgba(13,13,13,0.92) 100%)' }} />

        {/* Video placeholder (drop in an MP4 here) */}
        {/* <video autoPlay muted loop playsInline style={{ position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover' }}>
          <source src="/hero.mp4" type="video/mp4" />
        </video> */}

        {/* Hero Content */}
        <div style={{ position: 'relative', zIndex: 2, padding: '0 20px', maxWidth: '900px' }}>
          <p
            className="data-sm reveal"
            style={{ color: 'var(--color-gold)', letterSpacing: '0.42em', marginBottom: '28px' }}
          >
            PRIVATE SANCTUARIES
          </p>
          <h1
            className="display-lg reveal reveal-delay-1"
            style={{ color: 'var(--color-gold)', marginBottom: '24px' }}
          >
            Curating the<br />Extraordinary
          </h1>
          <p
            className="body-lg reveal reveal-delay-2"
            style={{ color: 'var(--color-secondary)', maxWidth: '540px', margin: '0 auto 48px' }}
          >
            India's most exclusive private estates, curated for those who seek not merely accommodation — but a sanctuary.
          </p>
          <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/locations" className="btn-primary">EXPLORE ESTATES</Link>
            <Link to="/inquiry" className="btn-secondary">JOIN WAITLIST</Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
        >
          <span className="data-sm" style={{ color: 'var(--color-outline)', letterSpacing: '0.2em' }}>SCROLL</span>
          <span className="material-symbols-outlined" style={{ color: 'var(--color-gold)', animation: 'bounce 2s infinite' }}>expand_more</span>
        </div>

        {/* Scroll bounce */}
        <style>{`@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }`}</style>
      </section>

      {/* ═══ SEARCH REGION BAR ═══ */}
      <div
        style={{
          background: 'var(--color-surface-low)',
          borderTop: '0.5px solid var(--color-outline-dim)',
          borderBottom: '0.5px solid var(--color-outline-dim)',
          overflowX: 'auto',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--max-width)',
            margin: '0 auto',
            padding: '0 var(--space-desktop)',
            display: 'flex',
            gap: '48px',
            height: '64px',
            alignItems: 'center',
          }}
        >
          {['INDIA', 'NORTH', 'SOUTH', 'EAST', 'WEST', 'UNION TERRITORIES', 'INTERNATIONAL'].map(r => (
            <a
              key={r}
              href={r === 'INDIA' ? '#north' : `#${r.toLowerCase().replace(' ', '-').replace('union territories', 'ut')}`}
              className="data-sm"
              style={{
                color: r === 'INDIA' ? 'var(--color-gold)' : 'var(--color-outline)',
                whiteSpace: 'nowrap',
                transition: 'color 0.3s',
                paddingBottom: '2px',
                borderBottom: r === 'INDIA' ? '1px solid var(--color-gold)' : '1px solid transparent',
              }}
              onMouseOver={e => { e.target.style.color = 'var(--color-gold)' }}
              onMouseOut={e => { if (r !== 'INDIA') e.target.style.color = 'var(--color-outline)' }}
            >
              {r}
            </a>
          ))}
        </div>
      </div>

      {/* ═══ INDIA SECTION ═══ */}
      <div
        style={{
          padding: '80px var(--space-desktop) 0',
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
        }}
      >
        <div className="reveal" style={{ marginBottom: '72px', textAlign: 'center' }}>
          <p className="data-sm" style={{ color: 'var(--color-outline)', letterSpacing: '0.4em', marginBottom: '16px' }}>
            OUR COLLECTION
          </p>
          <h2 className="headline-lg" style={{ color: 'var(--color-on-surface)' }}>
            Across <em style={{ color: 'var(--color-gold)' }}>India</em>
          </h2>
          <div style={{ width: '40px', height: '1px', background: 'var(--color-gold)', margin: '24px auto 0', opacity: 0.5 }} />
        </div>

        {/* All Regions */}
        {Object.values(regions).map(region => (
          <RegionPreview key={region.id} region={region} />
        ))}
      </div>

      {/* ═══ INTERNATIONAL EXPANSION ═══ */}
      <section
        id="international"
        style={{
          borderTop: '0.5px solid var(--color-outline-dim)',
          padding: '100px var(--space-desktop)',
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
        }}
      >
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="data-sm" style={{ color: 'var(--color-outline)', letterSpacing: '0.4em', marginBottom: '16px' }}>GLOBAL HORIZONS</p>
          <h2 className="headline-lg" style={{ color: 'rgba(202,198,190,0.55)' }}>
            The Future of MHOMES
          </h2>
        </div>

        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
            opacity: 0.65,
            transition: 'opacity 0.6s ease',
          }}
          onMouseOver={e => e.currentTarget.style.opacity = '1'}
          onMouseOut={e => e.currentTarget.style.opacity = '0.65'}
        >
          {international.map(({ name, year, image }) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div
                style={{
                  aspectRatio: '1',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1px solid var(--color-outline-dim)',
                  padding: '6px',
                  marginBottom: '20px',
                  transition: 'border-color 0.4s',
                }}
                onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(200,162,76,0.5)'}
                onMouseOut={e => e.currentTarget.style.borderColor = 'var(--color-outline-dim)'}
              >
                <img
                  src={image}
                  alt={name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', filter: 'grayscale(1)', transition: 'filter 0.5s' }}
                  onMouseOver={e => e.target.style.filter = 'grayscale(0)'}
                  onMouseOut={e => e.target.style.filter = 'grayscale(1)'}
                />
              </div>
              <p className="data-lg" style={{ color: 'var(--color-secondary)' }}>{name}</p>
              <p className="data-sm" style={{ color: 'var(--color-outline)', marginTop: '6px' }}>COMING {year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section
        style={{
          background: 'var(--color-surface-low)',
          borderTop: '0.5px solid var(--color-outline-dim)',
          borderBottom: '0.5px solid var(--color-outline-dim)',
          padding: '100px var(--space-desktop)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle tree watermark */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.03, pointerEvents: 'none' }}>
          <img src="/logo.jpeg" alt="" style={{ width: '500px', height: '500px', objectFit: 'contain', filter: 'grayscale(1)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="reveal data-sm" style={{ color: 'var(--color-outline)', letterSpacing: '0.4em', marginBottom: '20px' }}>BEGIN YOUR JOURNEY</p>
          <h2 className="reveal reveal-delay-1 headline-lg" style={{ color: 'var(--color-on-surface)', marginBottom: '16px' }}>
            Your Private Sanctuary<br />
            <em style={{ color: 'var(--color-gold)' }}>Awaits</em>
          </h2>
          <p className="reveal reveal-delay-2 body-lg" style={{ color: 'var(--color-secondary)', maxWidth: '500px', margin: '0 auto 48px' }}>
            Join an exclusive circle of discerning travellers. Submit your enquiry and our curators will personally craft your experience.
          </p>
          <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/inquiry" className="btn-primary">
              BEGIN AN ENQUIRY
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </Link>
            <Link to="/locations" className="btn-secondary">VIEW ALL ESTATES</Link>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderTop: '0.5px solid var(--color-outline-dim)',
              marginTop: '80px',
              maxWidth: '700px',
              marginInline: 'auto',
            }}
          >
            {[
              { num: '12+', label: 'CURATED ESTATES' },
              { num: '5',   label: 'REGIONS ACROSS INDIA' },
              { num: '100%', label: 'PRIVATE & EXCLUSIVE' },
            ].map(({ num, label }) => (
              <div key={label} className="stat-item reveal">
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 700, color: 'var(--color-gold)' }}>{num}</p>
                <p className="data-sm" style={{ color: 'var(--color-outline)', marginTop: '8px' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed watermark */}
      <div className="watermark">✦</div>
    </div>
  )
}
