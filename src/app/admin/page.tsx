import React, { useState, useEffect } from 'react';
import { offers } from '../../data/offers';
import { useNavigate } from 'react-router-dom';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [disabledOffers, setDisabledOffers] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthed = sessionStorage.getItem('adminAuthed') === 'true';
    if (isAuthed) {
      setAuthed(true);
    }
    
    // Load disabled offers
    const stored = localStorage.getItem('campuscash_disabled_offers');
    if (stored) {
      try {
        setDisabledOffers(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse disabled offers", e);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'campus2026') {
      sessionStorage.setItem('adminAuthed', 'true');
      setAuthed(true);
    } else {
      alert('Incorrect password');
    }
  };

  const toggleOffer = (id: string) => {
    setDisabledOffers(prev => {
      const active = prev.includes(id);
      const newDisabledMode = active ? prev.filter(oId => oId !== id) : [...prev, id];
      localStorage.setItem('campuscash_disabled_offers', JSON.stringify(newDisabledMode));
      return newDisabledMode;
    });
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-dark-surface p-8 border border-dark-border rounded-2xl w-full max-w-sm">
          <h2 className="text-2xl font-display font-bold text-white mb-6 uppercase">Admin Access</h2>
          <label className="block text-sm font-bold text-gray-400 mb-2" htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-6 border border-dark-border rounded-lg bg-dark-bg text-white focus:ring-2 focus:ring-accent-500 outline-none"
          />
          <button type="submit" className="w-full py-3 bg-accent-400 text-black font-bold rounded-lg hover:bg-accent-500 transition-colors">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-display font-bold uppercase">Offer Management</h1>
          <button onClick={() => navigate('/')} className="px-4 py-2 border border-dark-border bg-dark-surface rounded-lg hover:bg-dark-border transition">
            Back to Site
          </button>
        </div>

        <div className="bg-dark-surface border border-dark-border rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-dark-bg/50 border-b border-dark-border text-xs uppercase tracking-widest text-gray-400">
                  <th className="p-4 font-bold">Name</th>
                  <th className="p-4 font-bold">Vertical</th>
                  <th className="p-4 font-bold">Countries</th>
                  <th className="p-4 font-bold">Badge</th>
                  <th className="p-4 font-bold text-right">Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-border">
                {offers.map(offer => {
                  const isDisabled = disabledOffers.includes(offer.id);
                  return (
                    <tr key={offer.id} className="hover:bg-dark-bg/30 transition-colors">
                      <td className="p-4 font-bold">{offer.name}</td>
                      <td className="p-4 text-gray-400 capitalize">{offer.vertical}</td>
                      <td className="p-4 text-gray-400 text-sm">
                        {offer.countries.join(', ')}
                      </td>
                      <td className="p-4 text-gray-400 text-sm">
                        {offer.badge || 'None'}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => toggleOffer(offer.id)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${!isDisabled ? 'bg-emerald-500' : 'bg-gray-600'}`}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${!isDisabled ? 'translate-x-6' : 'translate-x-1'}`} />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
