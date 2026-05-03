import { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { offers } from '../../data/offers';
import { Offer } from '../../types';
import { ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { SurveyIcon, CryptoIcon, SweepstakesIcon, BonusIcon } from '../../components/Icons';
import { useQuizStore } from '../../lib/quizState';

export default function BridgePage() {
  const { offerId } = useParams();
  const navigate = useNavigate();
  const [offer, setOffer] = useState<Offer | null>(null);
  const trackingParams = useQuizStore((state) => state.trackingParams);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    
    if (offerId) {
      const found = offers.find(o => o.id === offerId);
      if (found) {
        setOffer(found);
      } else {
        navigate('/'); // Invalid ID
      }
    }
  }, [offerId, navigate]);

  const finalUrl = useMemo(() => {
    if (!offer) return '#';
    let urlStr = offer.placeholderLink;
    
    // Replace template variables like {{ad.id}}
    for (const [key, value] of Object.entries(trackingParams)) {
        const regex = new RegExp(`{{${key}}}`, 'g');
        if (urlStr.match(regex)) {
            urlStr = urlStr.replace(regex, value);
        }
    }

    try {
      const url = new URL(urlStr);
      // For any remaining params that weren't templated, append them
      for (const [key, value] of Object.entries(trackingParams)) {
        // Skip template markers
        if(!urlStr.includes(`{{${key}}}`)) {
             url.searchParams.set(key, value);
        }
      }
      return url.toString();
    } catch(e) {
      // If it's just a hash placeholder like '#placeholder-offer'
      return urlStr;
    }
  }, [offer, trackingParams]);

  if (!offer) return null;

  const getOfferIcon = () => {
    const className = "w-8 h-8";
    switch (offer.vertical) {
      case 'surveys': return <SurveyIcon className={className} />;
      case 'crypto': return <CryptoIcon className={className} />;
      case 'sweepstakes': return <SweepstakesIcon className={className} />;
      case 'forex': return <CryptoIcon className={className} />;
      case 'casino': return <BonusIcon className={className} />;
      default: return <ShieldCheck className={className} />;
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-transparent py-8 px-4 md:py-16 relative overflow-hidden">
      <div className="w-full max-w-2xl mb-8 flex justify-between items-center relative z-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors bg-dark-surface backdrop-blur-md px-4 py-2 rounded-full border border-dark-border"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Results
        </button>
        <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-display font-bold text-xs tracking-widest uppercase text-gray-400">Secure Connection</span>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-dark-surface border border-dark-border shadow-2xl relative z-10 p-8 md:p-14 rounded-[2.5rem]"
      >
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-20 h-20 bg-dark-bg rounded-[1rem] border border-dark-border flex items-center justify-center text-accent-400 mb-6 relative group">
              {getOfferIcon()}
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-black mb-4 tracking-tighter text-white uppercase">You're almost there!</h1>
          <p className="text-lg text-gray-400 font-medium max-w-md mx-auto leading-relaxed">
            You are about to securely visit <span className="font-bold text-white">{offer.name}</span>.
          </p>
        </div>

        <div className="bg-dark-bg rounded-[1.25rem] p-8 md:p-10 mb-10 border border-dark-border shadow-sm relative overflow-hidden">
          <h3 className="font-bold mb-4 text-white flex items-center gap-2 text-lg">
            <span className="w-8 h-8 rounded-[0.5rem] bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4" strokeWidth={2.5} />
            </span>
            Why we recommended this
          </h3>
          <p className="text-gray-400 mb-8 leading-relaxed font-medium">
            Based on your quiz profile, {offer.name} is a strong match for your location and experience level. It provides the right balance for your goals.
          </p>
          
          <h4 className="font-bold mb-4 text-xs text-white uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-400" />
            What to expect next
          </h4>
          <ul className="space-y-4">
            {offer.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-4 text-gray-400 font-medium items-start">
                <div className="w-5 h-5 rounded-full bg-dark-surface border border-dark-border shadow-sm mt-0.5 flex items-center justify-center flex-shrink-0 text-white">
                    <span className="text-[10px] font-bold">{i + 1}</span>
                </div>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 items-center mt-auto">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(250, 204, 21, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            href={finalUrl} // In real app: target="_blank" rel="noopener noreferrer"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined') {
                if ((window as any).gtag) {
                  (window as any).gtag('event', 'offer_clicked', { offer_id: offer.id, offer_name: offer.name });
                }
                if ((window as any).fbq) {
                  (window as any).fbq('track', 'OfferClick', { offer_id: offer.id, offer_name: offer.name });
                }
                if (process.env.NODE_ENV === 'development') {
                  console.log('Analytics Event:', 'offer_clicked', { offer_id: offer.id, offer_name: offer.name });
                }
              }
            }}
            className="w-full sm:w-auto px-12 py-5 bg-accent-400 hover:bg-accent-500 text-black rounded-[0.75rem] font-bold text-lg flex items-center justify-center gap-3 shadow-md transition-all duration-300 group"
          >
            <span className="relative z-10">Continue to {offer.name}</span>
            <ExternalLink className="w-5 h-5 ml-1 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
          <p className="text-xs text-gray-400 font-bold tracking-widest uppercase flex items-center gap-1.5">
             <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
             Link opens securely in a new tab
          </p>
        </div>
      </motion.div>
    </div>
  );
}
