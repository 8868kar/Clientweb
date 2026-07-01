import { useState, useEffect } from 'react'
import useReveal from '../hooks/useReveal'
import { submitInquiry, fetchLocations } from '../services/api'

const enquiryTypes = [
  { id: 'book_now', icon: 'event_available', label: 'Book Now' },
  { id: 'membership', icon: 'card_membership', label: 'Membership' },
  { id: 'general', icon: 'forum', label: 'General Enquiry' },
]

export default function Inquiry() {
  const pageRef = useReveal()
  const [enquiryType, setEnquiryType] = useState('book_now')
  const [destinations, setDestinations] = useState([])
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    fetchLocations()
      .then(data => {
        if (Array.isArray(data)) {
          setDestinations(data.map(loc => loc.name));
        }
      })
      .catch(err => console.error('Error fetching locations:', err))
  }, [])

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: '',
  })

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      await submitInquiry({ ...form, enquiryType })
      setSubmitted(true)
    } catch (err) {
      alert(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div ref={pageRef} className="page-enter" style={{ paddingTop: '80px', minHeight: '100vh' }}>

      {submitted ? (
        /* ═══ SUCCESS STATE ═══ */
        <div
          style={{
            minHeight: 'calc(100vh - 80px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px var(--space-desktop)',
          }}
        >
          <div
            style={{
              width: '80px', height: '80px',
              borderRadius: '50%',
              border: '1px solid var(--color-gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '40px',
              animation: 'fadeIn 0.5s ease',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '36px', color: 'var(--color-gold)' }}>check</span>
          </div>
          <p className="data-sm text-outline" style={{ letterSpacing: '0.4em', marginBottom: '16px' }}>ENQUIRY RECEIVED</p>
          <h1 className="headline-lg" style={{ color: 'var(--color-gold)', marginBottom: '20px' }}>
            Thank You, {form.name.split(' ')[0] || 'Dear Guest'}
          </h1>
          <p className="body-lg text-secondary" style={{ maxWidth: '480px', marginBottom: '48px' }}>
            Your enquiry has been received. One of our personal curators will reach out to you within 24 hours to craft your bespoke experience.
          </p>
          <button className="btn-secondary" onClick={() => setSubmitted(false)}>
            SUBMIT ANOTHER ENQUIRY
          </button>
          <style>{`@keyframes fadeIn { from { opacity:0; transform:scale(0.8) } to { opacity:1; transform:scale(1) } }`}</style>
        </div>
      ) : (
        /* ═══ FORM ═══ */
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: 'calc(100vh - 80px)',
          }}
        >
          {/* Left — Brand Panel */}
          <div
            style={{
              background: 'var(--color-surface-low)',
              borderRight: '0.5px solid var(--color-outline-dim)',
              padding: '80px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background watermark */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.04, pointerEvents: 'none' }}>
              <img src="/logo.jpeg" alt="" style={{ width: '400px', objectFit: 'contain', filter: 'grayscale(1)' }} />
            </div>

            <div style={{ position: 'relative' }}>
              <p className="reveal data-sm text-outline" style={{ letterSpacing: '0.4em', marginBottom: '24px' }}>MHOMES PRIVATE</p>
              <h1 className="reveal reveal-delay-1 display-lg" style={{ color: 'var(--color-gold)', marginBottom: '24px' }}>
                Begin<br />Your<br />Journey
              </h1>
              <p className="reveal reveal-delay-2 body-lg text-secondary" style={{ maxWidth: '340px', lineHeight: 1.8 }}>
                Every extraordinary stay begins with a conversation. Share your vision, and our curators will do the rest.
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ height: '0.5px', background: 'var(--color-outline-dim)', marginBottom: '32px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: 'schedule', text: 'Response within 24 hours' },
                  { icon: 'lock', text: 'Your details are completely private' },
                  { icon: 'person', text: 'Dedicated personal curator assigned' },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--color-gold)', opacity: 0.7 }}>{icon}</span>
                    <p className="body-sm text-secondary">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            ref={pageRef}
            style={{
              padding: '80px',
              overflowY: 'auto',
            }}
          >
            <h2 className="headline-md reveal" style={{ marginBottom: '40px' }}>
              Tell us about<br /><em style={{ color: 'var(--color-gold)' }}>your vision</em>
            </h2>

            {/* Enquiry Type Selector */}
            <div className="reveal" style={{ marginBottom: '40px' }}>
              <label className="form-label" style={{ marginBottom: '16px', display: 'block' }}>I AM INTERESTED IN</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {enquiryTypes.map(({ id, icon, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setEnquiryType(id)}
                    style={{
                      padding: '16px',
                      border: `1px solid ${enquiryType === id ? 'var(--color-gold)' : 'var(--color-outline-dim)'}`,
                      background: enquiryType === id ? 'var(--color-gold-dim)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px', color: enquiryType === id ? 'var(--color-gold)' : 'var(--color-outline)' }}>{icon}</span>
                    <span className="data-sm" style={{ color: enquiryType === id ? 'var(--color-gold)' : 'var(--color-secondary)', letterSpacing: '0.1em' }}>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gap: '28px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div className="reveal">
                    <label className="form-label">FULL NAME *</label>
                    <input name="name" required className="luxury-input" placeholder="Your full name" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="reveal reveal-delay-1">
                    <label className="form-label">PHONE NUMBER</label>
                    <input name="phone" className="luxury-input" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="reveal">
                  <label className="form-label">EMAIL ADDRESS *</label>
                  <input name="email" type="email" required className="luxury-input" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                </div>

                {(enquiryType === 'book_now' || enquiryType === 'general') && (
                  <>
                    <div className="reveal">
                      <label className="form-label">PREFERRED DESTINATION</label>
                      <select name="destination" className="luxury-select" value={form.destination} onChange={handleChange}>
                        <option value="">Select a destination</option>
                        {destinations.map(d => <option key={d}>{d}</option>)}
                      </select>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }} className="reveal">
                      <div>
                        <label className="form-label">ARRIVAL</label>
                        <input name="checkIn" type="date" className="luxury-input" value={form.checkIn} onChange={handleChange} />
                      </div>
                      <div>
                        <label className="form-label">DEPARTURE</label>
                        <input name="checkOut" type="date" className="luxury-input" value={form.checkOut} onChange={handleChange} />
                      </div>
                      <div>
                        <label className="form-label">GUESTS</label>
                        <select name="guests" className="luxury-select" value={form.guests} onChange={handleChange}>
                          <option value="">Guests</option>
                          <option>2</option>
                          <option>4</option>
                          <option>6</option>
                          <option>8+</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div className="reveal">
                  <label className="form-label">
                    {enquiryType === 'membership' ? 'WHY ARE YOU INTERESTED IN MEMBERSHIP?' : 'SPECIAL REQUESTS OR MESSAGE'}
                  </label>
                  <textarea
                    name="message"
                    className="luxury-input"
                    rows={4}
                    placeholder={
                      enquiryType === 'membership' ? 'Tell us why you would like to join the MHOMES private membership...'
                      : 'Share any specific requirements, preferences, or occasions...'
                    }
                    value={form.message}
                    onChange={handleChange}
                    style={{ resize: 'none', lineHeight: 1.7 }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary reveal"
                  disabled={loading}
                  style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                  {!loading && <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>}
                </button>

                <p className="body-sm text-outline reveal" style={{ textAlign: 'center', lineHeight: 1.6 }}>
                  By submitting this form you agree to our{' '}
                  <a href="#" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>Privacy Policy</a>.
                  Your information will never be shared with third parties.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .inquiry-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
