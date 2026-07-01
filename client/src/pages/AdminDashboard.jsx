import { useState, useEffect } from 'react';
import useReveal from '../hooks/useReveal';
import { adminLogin, fetchInquiries, fetchLocations, addLocation, deleteLocation } from '../services/api';

export default function AdminDashboard() {
  const pageRef = useReveal();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  
  // Login Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  // Dashboard State
  const [activeTab, setActiveTab] = useState('inquiries'); // 'inquiries' | 'locations'
  const [inquiries, setInquiries] = useState([]);
  const [locations, setLocations] = useState([]);

  // New Location Form State
  const [newLocation, setNewLocation] = useState({ name: '', type: 'State', region: 'North' });

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      fetchData();
    }
  }, [token, activeTab]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginError('');
    try {
      const data = await adminLogin({ email, password });
      localStorage.setItem('adminToken', data.token);
      setToken(data.token);
    } catch (err) {
      setLoginError(err.message || 'Invalid credentials');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
    setIsLoggedIn(false);
  };

  const fetchData = async () => {
    try {
      if (activeTab === 'inquiries') {
        const data = await fetchInquiries(token);
        setInquiries(Array.isArray(data) ? data : []);
      } else {
        const data = await fetchLocations();
        setLocations(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddLocation = async (e) => {
    e.preventDefault();
    try {
      await addLocation(newLocation, token);
      setNewLocation({ name: '', type: 'State', region: 'North' });
      fetchData();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const handleDeleteLocation = async (id) => {
    if (!window.confirm('Are you sure you want to delete this location?')) return;
    try {
      await deleteLocation(id, token);
      fetchData();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  if (!isLoggedIn) {
    return (
      <div ref={pageRef} className="page-enter" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
        <div style={{ padding: '40px', background: 'var(--color-surface-low)', border: '1px solid var(--color-outline-dim)', width: '100%', maxWidth: '400px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 className="headline-md" style={{ color: 'var(--color-gold)' }}>Admin Login</h2>
            <p className="body-sm text-secondary">Secure Portal</p>
          </div>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label className="form-label">EMAIL</label>
              <input type="email" required className="luxury-input" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="form-label">PASSWORD</label>
              <input type="password" required className="luxury-input" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            {loginError && <p style={{ color: 'red', fontSize: '12px' }}>{loginError}</p>}
            <button type="submit" className="btn-primary" disabled={loading} style={{ justifyContent: 'center' }}>
              {loading ? 'LOGGING IN...' : 'LOGIN'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="page-enter" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px', maxWidth: 'var(--max-width)', margin: '0 auto', padding: '100px var(--space-desktop) 80px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid var(--color-outline-dim)', paddingBottom: '20px' }}>
        <h1 className="headline-lg" style={{ color: 'var(--color-gold)' }}>MHOMES Admin</h1>
        <button onClick={handleLogout} className="btn-secondary" style={{ padding: '8px 16px', fontSize: '12px' }}>LOGOUT</button>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        <button 
          onClick={() => setActiveTab('inquiries')}
          style={{ padding: '12px 24px', border: '1px solid', borderColor: activeTab === 'inquiries' ? 'var(--color-gold)' : 'var(--color-outline-dim)', background: activeTab === 'inquiries' ? 'var(--color-gold-dim)' : 'transparent', color: activeTab === 'inquiries' ? 'var(--color-gold)' : 'var(--color-secondary)', cursor: 'pointer', transition: 'all 0.3s' }}
        >
          INQUIRIES
        </button>
        <button 
          onClick={() => setActiveTab('locations')}
          style={{ padding: '12px 24px', border: '1px solid', borderColor: activeTab === 'locations' ? 'var(--color-gold)' : 'var(--color-outline-dim)', background: activeTab === 'locations' ? 'var(--color-gold-dim)' : 'transparent', color: activeTab === 'locations' ? 'var(--color-gold)' : 'var(--color-secondary)', cursor: 'pointer', transition: 'all 0.3s' }}
        >
          LOCATIONS
        </button>
      </div>

      {activeTab === 'inquiries' && (
        <div>
          <h2 className="headline-md" style={{ marginBottom: '24px' }}>Recent Inquiries</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-outline-dim)', color: 'var(--color-outline)', fontSize: '12px', letterSpacing: '0.1em' }}>
                  <th style={{ padding: '16px' }}>DATE</th>
                  <th style={{ padding: '16px' }}>NAME</th>
                  <th style={{ padding: '16px' }}>EMAIL / PHONE</th>
                  <th style={{ padding: '16px' }}>TYPE</th>
                  <th style={{ padding: '16px' }}>MESSAGE</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.length === 0 ? (
                  <tr><td colSpan="5" style={{ padding: '24px', textAlign: 'center', color: 'var(--color-outline)' }}>No inquiries found.</td></tr>
                ) : inquiries.map(inq => (
                  <tr key={inq._id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '16px', color: 'var(--color-secondary)' }}>{new Date(inq.createdAt).toLocaleDateString()}</td>
                    <td style={{ padding: '16px' }}>{inq.name}</td>
                    <td style={{ padding: '16px', color: 'var(--color-secondary)' }}>{inq.email}<br/>{inq.phone}</td>
                    <td style={{ padding: '16px' }}>
                      <span style={{ padding: '4px 8px', background: 'var(--color-surface-low)', border: '1px solid var(--color-gold-dim)', color: 'var(--color-gold)', fontSize: '12px' }}>
                        {inq.enquiryType.toUpperCase()}
                      </span>
                    </td>
                    <td style={{ padding: '16px', color: 'var(--color-secondary)', maxWidth: '300px' }}>{inq.message || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'locations' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
          <div>
            <h2 className="headline-md" style={{ marginBottom: '24px' }}>Add Location</h2>
            <form onSubmit={handleAddLocation} style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px', background: 'var(--color-surface-low)', border: '1px solid var(--color-outline-dim)' }}>
              <div>
                <label className="form-label">LOCATION NAME</label>
                <input required className="luxury-input" value={newLocation.name} onChange={e => setNewLocation({...newLocation, name: e.target.value})} placeholder="e.g. Rajasthan, Asia" />
              </div>
              <div>
                <label className="form-label">TYPE</label>
                <select className="luxury-select" value={newLocation.type} onChange={e => setNewLocation({...newLocation, type: e.target.value})}>
                  <option value="State">State</option>
                  <option value="UT">Union Territory</option>
                  <option value="Continent">Continent</option>
                </select>
              </div>
              <div>
                <label className="form-label">REGION (Optional grouping)</label>
                <select className="luxury-select" value={newLocation.region} onChange={e => setNewLocation({...newLocation, region: e.target.value})}>
                  <option value="North">North India</option>
                  <option value="South">South India</option>
                  <option value="East">East India</option>
                  <option value="West">West India</option>
                  <option value="International">International</option>
                </select>
              </div>
              <button type="submit" className="btn-secondary" style={{ marginTop: '10px' }}>ADD LOCATION</button>
            </form>
          </div>

          <div>
            <h2 className="headline-md" style={{ marginBottom: '24px' }}>Existing Locations</h2>
            <div style={{ display: 'grid', gap: '12px' }}>
              {locations.length === 0 ? (
                <p style={{ color: 'var(--color-outline)' }}>No locations found in database.</p>
              ) : locations.map(loc => (
                <div key={loc._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid var(--color-outline-dim)', background: 'var(--color-surface-low)' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>{loc.name}</h3>
                    <p style={{ fontSize: '12px', color: 'var(--color-outline)' }}>{loc.type} • {loc.region}</p>
                  </div>
                  <button onClick={() => handleDeleteLocation(loc._id)} style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer', fontSize: '12px' }}>
                    DELETE
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
