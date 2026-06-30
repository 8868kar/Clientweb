import { Link } from 'react-router-dom'

export default function PropertyCard({ image, name, region, tagline, badge, to, aspectRatio = '16/9', staggerIndex = 0 }) {
  return (
    <div
      className="property-card reveal"
      style={{ transitionDelay: `${staggerIndex * 0.12}s` }}
    >
      <div className="card-img" style={{ aspectRatio }}>
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="card-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <h3 className="headline-sm">{name}</h3>
          {badge && <span className="badge">{badge}</span>}
        </div>
        {region && (
          <p className="data-sm" style={{ color: 'var(--color-outline)', marginBottom: '8px' }}>
            {region}
          </p>
        )}
        <p className="body-sm text-secondary" style={{ marginBottom: '24px', lineHeight: 1.65 }}>
          {tagline}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to={to || '/book'} className="btn-icon" aria-label={`Explore ${name}`}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_outward</span>
          </Link>
          <Link
            to={to || '/book'}
            className="data-sm"
            style={{ color: 'var(--color-outline)', letterSpacing: '0.18em', transition: 'color 0.3s' }}
            onMouseOver={e => e.target.style.color = 'var(--color-gold)'}
            onMouseOut={e => e.target.style.color = 'var(--color-outline)'}
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  )
}
