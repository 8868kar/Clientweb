const API_URL = import.meta.env.VITE_API_URL || '/api';

export const submitInquiry = async (data) => {
  const res = await fetch(`${API_URL}/inquiry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to submit inquiry');
  }
  return res.json();
};

export const fetchLocations = async () => {
  const res = await fetch(`${API_URL}/locations`);
  if (!res.ok) throw new Error('Failed to fetch locations');
  return res.json();
};

export const adminLogin = async (credentials) => {
  const res = await fetch(`${API_URL}/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  const data = await res.json();
  if (!data.success) throw new Error(data.message || 'Login failed');
  return data;
};

export const fetchInquiries = async (token) => {
  const res = await fetch(`${API_URL}/admin/inquiries`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Failed to fetch inquiries');
  return res.json();
};

export const addLocation = async (data, token) => {
  const res = await fetch(`${API_URL}/admin/locations`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to add location');
  }
  return res.json();
};

export const deleteLocation = async (id, token) => {
  const res = await fetch(`${API_URL}/admin/locations/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Failed to delete location');
  return res.json();
};
