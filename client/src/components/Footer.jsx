import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'PRIVACY', to: '#' },
  { label: 'TERMS', to: '#' },
  { label: 'CONTACT', to: '/inquiry' },
  { label: 'INSTAGRAM', to: '#' },
]

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '0.5px solid rgba(78,70,55,0.3)',
        background: 'var(--color-bg-deep)',
        marginTop: '0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '48px var(--space-desktop)',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        {/* Brand */}
        <div>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="/logo.jpeg"
              alt="MHOMES"
              style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--color-gold)',
                letterSpacing: '0.1em',
              }}
            >
              MHOMES
            </span>
          </Link>
          <p
            className="data-sm"
            style={{ color: 'var(--color-outline)', marginTop: '10px', letterSpacing: '0.12em' }}
          >
            © 2025 MHOMES. A PRIVATE SANCTUARY.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {footerLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="body-sm"
              style={{
                color: 'var(--color-secondary)',
                letterSpacing: '0.1em',
                transition: 'color 0.3s ease',
              }}
              onMouseOver={e => e.target.style.color = 'var(--color-gold)'}
              onMouseOut={e => e.target.style.color = 'var(--color-secondary)'}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Tagline */}
      <div
        style={{
          borderTop: '0.5px solid rgba(78,70,55,0.15)',
          padding: '16px var(--space-desktop)',
          textAlign: 'center',
        }}
      >
        <p className="data-sm" style={{ color: 'rgba(154,143,126,0.5)', letterSpacing: '0.2em' }}>
          CURATING THE EXTRAORDINARY — INDIA &amp; BEYOND
        </p>
      </div>
    </footer>
  )
}
