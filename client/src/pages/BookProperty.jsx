import { useState } from 'react'
import { Link } from 'react-router-dom'
import { allProperties, regions } from '../data/properties'
import useReveal from '../hooks/useReveal'

const regionOptions = ['ALL', 'NORTH', 'SOUTH', 'EAST', 'WEST', 'UNION TERRITORIES']
const regionKeyMap = {
  'ALL': null,
  'NORTH': 'north',
  'SOUTH': 'south',
  'EAST': 'east',
  'WEST': 'west',
  'UNION TERRITORIES': 'ut',
}

const amenities = ['Infinity Pool', 'Private Chef', 'Concierge', 'Helipad', 'Nature Walks', 'Spa']

export default function BookProperty() {
  const pageRef = useReveal()
  const [activeRegion, setActiveRegion] = useState('ALL')
  const [activeGuests, setActiveGuests] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [selected, setSelected] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const regionKey = regionKeyMap[activeRegion]
  const filtered = allProperties.filter(p => {
    if (!regionKey) return true
    return regions[regionKey]?.properties.some(rp => rp.id === p.id)
  })

  // Remove duplicates (goa appears in south & west)
  const unique = filtered.filter((p, i, arr) => arr.findIndex(x => x.id === p.id) === i)

  return (
    <div ref={pageRef} className="page-enter" style={{ paddingTop: '80px' }}>

      {/* ═══ PAGE HERO ═══ */}
      <header
        style={{
          padding: '80px var(--space-desktop) 64px',
          background: 'var(--color-surface-low)',
          borderBottom: '0.5px solid var(--color-outline-dim)',
        }}
      >
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div className="reveal" style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '32px' }}>
            <Link to="/" className="data-sm text-outline" style={{ transition: 'color 0.3s' }}
              onMouseOver={e => e.target.style.color = 'var(--color-gold)'}
              onMouseOut={e => e.target.style.color = 'var(--color-outline)'}
            >HOME</Link>
            <span className="data-sm text-outline">›</span>
            <span className="data-sm" style={{ color: 'var(--color-gold)' }}>RESERVATIONS</span>
          </div>

          <h1 className="headline-lg reveal reveal-delay-1" style={{ color: 'var(--color-gold)', marginBottom: '16px' }}>
            Reserve Your<br /><em>Private Estate</em>
          </h1>
          <p className="body-lg reveal reveal-delay-2 text-secondary" style={{ maxWidth: '480px' }}>
            Each reservation is handled personally by our curators to ensure an experience tailored exclusively to you.
          </p>
        </div>
      </header>

      {/* ═══ FILTER BAR ═══ */}
      <div style={{ background: 'var(--color-bg)', borderBottom: '0.5px solid var(--color-outline-dim)', position: 'sticky', top: '80px', zIndex: 40 }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--space-desktop)' }}>
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto' }}>
            {regionOptions.map(r => (
              <button
                key={r}
                onClick={() => setActiveRegion(r)}
                className="data-sm"
                style={{
                  padding: '18px 24px',
                  color: activeRegion === r ? 'var(--color-gold)' : 'var(--color-outline)',
                  borderBottom: activeRegion === r ? '2px solid var(--color-gold)' : '2px solid transparent',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s',
                  background: 'none',
                  border: 'none',
                  borderBottom: activeRegion === r ? '2px solid var(--color-gold)' : '2px solid transparent',
                  cursor: 'pointer',
                  letterSpacing: '0.14em',
                }}
              >{r}</button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ SEARCH FORM ═══ */}
      <div style={{ background: 'var(--color-surface-low)', borderBottom: '0.5px solid var(--color-outline-dim)', padding: '32px var(--space-desktop)' }}>
        <div
          style={{
            maxWidth: 'var(--max-width)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr auto',
            gap: '32px',
            alignItems: 'flex-end',
          }}
        >
          <div>
            <label className="form-label">CHECK-IN</label>
            <input type="date" className="luxury-input" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
          </div>
          <div>
            <label className="form-label">CHECK-OUT</label>
            <input type="date" className="luxury-input" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
          </div>
          <div>
            <label className="form-label">GUESTS</label>
            <select className="luxury-select" value={activeGuests} onChange={e => setActiveGuests(e.target.value)}>
              <option value="">Select guests</option>
              <option>2 Guests</option>
              <option>4 Guests</option>
              <option>6 Guests</option>
              <option>8+ Guests</option>
            </select>
          </div>
          <button className="btn-primary" onClick={() => {}}>
            SEARCH
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>search</span>
          </button>
        </div>
      </div>

      {/* ═══ PROPERTY GRID ═══ */}
      <main style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '64px var(--space-desktop)' }}>
        <p className="data-sm reveal" style={{ color: 'var(--color-outline)', marginBottom: '40px', letterSpacing: '0.1em' }}>
          SHOWING {unique.length} ESTATES
        </p>

        <div className="grid-3">
          {unique.map((p, i) => (
            <div
              key={p.id}
              className="property-card reveal"
              style={{ transitionDelay: `${i * 0.08}s`, cursor: 'pointer' }}
              onClick={() => { setSelected(p); setShowModal(true) }}
            >
              <div className="card-img" style={{ aspectRatio: '4/3' }}>
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h3 className="headline-sm">{p.name}</h3>
                  {p.badge && <span className="badge">{p.badge}</span>}
                </div>
                <p className="data-sm text-outline" style={{ marginBottom: '12px' }}>{p.region}</p>
                <p className="body-sm text-secondary" style={{ marginBottom: '20px', lineHeight: 1.65 }}>{p.tagline}</p>

                {/* Amenity chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {amenities.slice(0, 3).map(a => (
                    <span key={a} style={{ fontFamily: 'var(--font-data)', fontSize: '10px', letterSpacing: '0.08em', color: 'var(--color-outline)', border: '0.5px solid var(--color-outline-dim)', padding: '3px 8px' }}>
                      {a}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p className="data-sm text-outline">FROM</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--color-gold)', fontWeight: 600 }}>
                      ₹45,000<span className="data-sm text-outline" style={{ fontSize: '11px' }}>/night</span>
                    </p>
                  </div>
                  <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '11px' }}>
                    ENQUIRE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ═══ ENQUIRY MODAL ═══ */}
      {showModal && selected && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(10,10,10,0.85)',
            backdropFilter: 'blur(12px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
          }}
          onClick={e => { if (e.target === e.currentTarget) setShowModal(false) }}
        >
          <div
            style={{
              background: 'var(--color-surface-low)',
              border: '0.5px solid var(--color-gold-border)',
              width: '100%', maxWidth: '560px',
              padding: '48px',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', color: 'var(--color-outline)' }}
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <p className="data-sm" style={{ color: 'var(--color-outline)', letterSpacing: '0.3em', marginBottom: '8px' }}>ENQUIRE ABOUT</p>
            <h2 className="headline-md text-gold" style={{ marginBottom: '32px' }}>{selected.name}</h2>

            <div style={{ display: 'grid', gap: '28px' }}>
              {[
                { label: 'FULL NAME', type: 'text', placeholder: 'Your full name' },
                { label: 'EMAIL ADDRESS', type: 'email', placeholder: 'your@email.com' },
                { label: 'PHONE NUMBER', type: 'tel', placeholder: '+91 98765 43210' },
              ].map(f => (
                <div key={f.label}>
                  <label className="form-label">{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} className="luxury-input" />
                </div>
              ))}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <label className="form-label">ARRIVAL DATE</label>
                  <input type="date" className="luxury-input" />
                </div>
                <div>
                  <label className="form-label">DEPARTURE DATE</label>
                  <input type="date" className="luxury-input" />
                </div>
              </div>
              <div>
                <label className="form-label">SPECIAL REQUESTS</label>
                <textarea
                  className="luxury-input"
                  rows={3}
                  placeholder="Any special requirements..."
                  style={{ resize: 'none', lineHeight: 1.6 }}
                />
              </div>
            </div>

            <button
              className="btn-primary"
              style={{ width: '100%', marginTop: '32px', justifyContent: 'center' }}
              onClick={() => { alert('Enquiry submitted! Our curators will contact you within 24 hours.'); setShowModal(false) }}
            >
              SUBMIT ENQUIRY
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
