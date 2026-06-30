import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { regions, international } from '../data/properties'
import PropertyCard from '../components/PropertyCard'
import useReveal from '../hooks/useReveal'

const regionOrder = ['north', 'south', 'east', 'west', 'ut']

export default function Locations() {
  const pageRef = useReveal()
  const [activeRegion, setActiveRegion] = useState('north')
  const sectionRefs = useRef({})

  // Track which region is in view for the sticky nav
  useEffect(() => {
    const observers = regionOrder.map(id => {
      const el = sectionRefs.current[id]
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveRegion(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [])

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div ref={pageRef} className="page-enter" style={{ paddingTop: '80px' }}>

      {/* ═══ PAGE HEADER ═══ */}
      <header
        style={{
          padding: '80px var(--space-desktop) 60px',
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          borderBottom: '0.5px solid var(--color-outline-dim)',
        }}
      >
        <p className="data-sm reveal" style={{ color: 'var(--color-outline)', letterSpacing: '0.4em', marginBottom: '20px' }}>
          PRIVATE SANCTUARIES
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <h1 className="display-lg reveal reveal-delay-1" style={{ color: 'var(--color-gold)' }}>
            Curating the<br />Extraordinary
          </h1>
          <p className="body-lg reveal reveal-delay-2 text-secondary" style={{ maxWidth: '380px' }}>
            Each property is chosen for its irreplaceable setting, architectural integrity, and capacity to offer genuine solitude.
          </p>
        </div>
      </header>

      {/* ═══ STICKY REGION NAV ═══ */}
      <div className="region-nav">
        <div className="region-nav-inner">
          {regionOrder.map(id => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`region-nav-link ${activeRegion === id ? 'active' : ''}`}
              style={{ background: 'none', border: 'none' }}
            >
              {regions[id].title.toUpperCase().replace('THE ', '')}
            </button>
          ))}
          <button
            onClick={() => document.getElementById('international-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="region-nav-link"
            style={{ background: 'none', border: 'none' }}
          >
            INTERNATIONAL
          </button>
        </div>
      </div>

      {/* ═══ REGION SECTIONS ═══ */}
      <main style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '80px var(--space-desktop)' }}>

        {regionOrder.map(id => {
          const region = regions[id]
          const isUT = id === 'ut'
          return (
            <section
              key={id}
              id={id}
              ref={el => sectionRefs.current[id] = el}
              style={{ marginBottom: '100px', scrollMarginTop: '140px' }}
            >
              {/* Section Header */}
              <div className="section-header reveal">
                <h2 className="headline-lg text-gold" style={{ fontStyle: 'italic' }}>
                  {region.title}
                </h2>
                <span className="data-sm text-outline">{region.subtitle}</span>
              </div>

              {/* Cards — UT gets bento layout */}
              {isUT ? (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-gutter)', minHeight: '500px' }}>
                  {/* Featured card — full left */}
                  {region.properties[0] && (
                    <div
                      className="reveal property-card"
                      style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }}
                    >
                      <img
                        src={region.properties[0].image}
                        alt={region.properties[0].name}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1)' }}
                        onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
                        onMouseOut={e => e.target.style.transform = 'scale(1)'}
                      />
                      <div className="luxury-gradient" style={{ position: 'absolute', inset: 0 }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                          <h3 className="headline-lg">{region.properties[0].name}</h3>
                          <span className="badge-solid">{region.properties[0].badge}</span>
                        </div>
                        <p className="body-lg text-secondary" style={{ marginBottom: '24px', maxWidth: '400px' }}>
                          {region.properties[0].tagline}
                        </p>
                        <Link to="/book" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                          EXPLORE THE HIGH DESERT
                          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>trending_flat</span>
                        </Link>
                      </div>
                    </div>
                  )}
                  {/* Right col */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-gutter)' }}>
                    {region.properties.slice(1).map((p, i) => (
                      <PropertyCard key={p.id} {...p} staggerIndex={i + 1} aspectRatio="16/7" />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid-3">
                  {region.properties.map((p, i) => (
                    <PropertyCard key={p.id} {...p} staggerIndex={i} />
                  ))}
                </div>
              )}
            </section>
          )
        })}

        {/* ═══ INTERNATIONAL ═══ */}
        <section
          id="international-section"
          style={{ borderTop: '0.5px solid var(--color-outline-dim)', paddingTop: '80px' }}
        >
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="data-sm" style={{ color: 'var(--color-outline)', letterSpacing: '0.4em', marginBottom: '16px' }}>
              GLOBAL HORIZONS
            </p>
            <h2 className="headline-lg" style={{ color: 'rgba(202,198,190,0.5)' }}>
              The Future of MHOMES
            </h2>
          </div>

          <div
            className="reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '32px',
              opacity: 0.6,
              transition: 'opacity 0.5s',
            }}
            onMouseOver={e => e.currentTarget.style.opacity = '1'}
            onMouseOut={e => e.currentTarget.style.opacity = '0.6'}
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
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%',
                      filter: 'grayscale(1)', transition: 'filter 0.5s'
                    }}
                    onMouseOver={e => e.target.style.filter = 'grayscale(0)'}
                    onMouseOut={e => e.target.style.filter = 'grayscale(1)'}
                  />
                </div>
                <p className="data-lg text-secondary">{name}</p>
                <p className="data-sm text-outline" style={{ marginTop: '6px' }}>COMING {year}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
