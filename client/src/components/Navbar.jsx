import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/locations', label: 'LOCATIONS' },
  { to: '/book', label: 'RESERVATIONS' },
  { to: '/about', label: 'ABOUT' },
  { to: '/inquiry', label: 'WAITLIST' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <nav
      className="glass"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        borderBottom: scrolled ? '0.5px solid rgba(78,70,55,0.4)' : '0.5px solid rgba(78,70,55,0.15)',
        transition: 'all 0.4s ease',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '0 var(--space-desktop)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src="/logo.jpeg"
            alt="MHOMES Logo"
            style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'var(--color-gold)',
            }}
          >
            MHOMES
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="desktop-nav">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-data)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: isActive ? 'var(--color-gold)' : 'var(--color-outline)',
                borderBottom: isActive ? '1px solid var(--color-gold)' : '1px solid transparent',
                paddingBottom: '2px',
                transition: 'all 0.3s ease',
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/inquiry" className="btn-primary data-sm" style={{ padding: '10px 24px' }}>
            ENQUIRE
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{ color: 'var(--color-gold)', display: 'none' }}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(10,10,10,0.97)',
            borderTop: '0.5px solid rgba(78,70,55,0.3)',
            padding: '32px var(--space-mobile)',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
          }}
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-data)',
                fontSize: '13px',
                letterSpacing: '0.2em',
                color: isActive ? 'var(--color-gold)' : 'var(--color-secondary)',
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/inquiry" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
            ENQUIRE
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
