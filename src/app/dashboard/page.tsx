import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../../lib/quizState';
import { Offer } from '../../types';
import { CheckCircle2, ChevronRight, Star, Settings, User, Filter, Gift, Zap, TrendingUp, ShieldCheck, Gamepad2, LineChart, Baby, Globe, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { SurveyIcon, CryptoIcon, SweepstakesIcon, BonusIcon, LogoIcon } from '../../components/Icons';
import { cn } from '../../lib/utils';

const COUNTRIES = [
  "United States", "Canada", "United Kingdom", "Australia", 
  "Ireland", "South Africa", "New Zealand", "Other"
];

export default function DashboardPage() {
  const navigate = useNavigate();
  const { results, firstName, resetQuiz, country, setAnswer, computeResults } = useQuizStore();

  useEffect(() => {
    if (!results) {
      navigate('/');
    }
  }, [results, navigate]);

  if (!results) return null;

  const { primary, secondary, crossSell } = results;

  const handleRetake = () => {
    resetQuiz();
    navigate('/');
  };

  const handleCountryFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnswer('country', e.target.value);
    computeResults();
  };

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen bg-transparent py-8 px-4 md:py-12 overflow-hidden">
      {/* Top Navbar */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-8 relative z-10 border-b border-dark-border pb-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="w-10 h-10 bg-dark-bg border border-dark-border rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.1)] text-accent-500">
            <LogoIcon className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-white uppercase">Campus Cash World</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <button 
            onClick={handleRetake}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white px-4 py-2 border border-dark-border bg-dark-bg hover:bg-dark-surface rounded-full transition-all"
          >
            Retake Quiz
          </button>
          <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-white bg-dark-surface px-4 py-2 rounded-full border border-dark-border shadow-sm backdrop-blur-md">
            <User className="w-4 h-4 text-accent-500" />
            {firstName ? `Hey, ${firstName}` : "Welcome"}
          </div>
          <button className="w-10 h-10 bg-dark-surface hover:bg-dark-border backdrop-blur-md border border-dark-border shadow-sm rounded-full flex items-center justify-center text-white transition-all">
             <Settings className="w-4 h-4 text-accent-500" />
          </button>
        </motion.div>
      </div>

      {/* Filter Bar */}
      <div className="w-full max-w-5xl mb-12 relative z-10 flex justify-end">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 bg-dark-surface px-4 py-2 rounded-[0.75rem] border border-dark-border shadow-sm"
        >
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Filter by Country:</span>
          <select 
            className="bg-transparent border-none outline-none text-white font-bold text-sm cursor-pointer appearance-none px-2 focus:ring-0"
            value={country || ""}
            onChange={handleCountryFilterChange}
          >
            <option value="" disabled className="text-black bg-white">Select Country</option>
            {COUNTRIES.map(c => (
              <option key={c} value={c} className="text-black bg-white">{c}</option>
            ))}
          </select>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-5xl space-y-12 mb-20 relative z-10">
        <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-4 text-white uppercase"
            >
              Your Unlocked Dashboard
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 max-w-2xl font-medium tracking-tight"
            >
              We've secured these offers based on your profile. These are verified and ready for you to claim.
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 text-sm font-bold rounded-[0.75rem] border border-emerald-500/20 uppercase tracking-widest">
               <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
               Profile Active
            </span>
          </motion.div>
        </div>

        {primary && (
          <motion.div key={`primary-${primary.id}-${country}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="text-sm font-bold mb-4 text-accent-400 uppercase tracking-widest pl-1">Your Top Match</h3>
            <PrimaryCard offer={primary} />
          </motion.div>
        )}

        {secondary.length > 0 && (
          <motion.div key={`secondary-${country}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="text-sm font-bold mb-4 text-gray-400 uppercase tracking-widest pl-1 mt-6 border-t border-dark-border pt-10">
              Other Hand-Picked Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondary.map((offer) => (
                <SecondaryCard key={offer.id} offer={offer} />
              ))}
            </div>
          </motion.div>
        )}

        {crossSell && (
          <motion.div key={`crosssell-${country}`} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
            <CrossSell bannerText={crossSell} onRetake={handleRetake} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function getIconForVertical(vertical: string, className: string = "w-10 h-10") {
  switch (vertical) {
    case 'surveys': return <SurveyIcon className={className} />;
    case 'crypto': return <CryptoIcon className={className} />;
    case 'sweepstakes': return <SweepstakesIcon className={className} />;
    case 'forex': return <LineChart className={className} />;
    case 'casino': return <Gamepad2 className={className} />;
    default: return <Star className={className} />;
  }
}

function OfferBadge({ text, type = 'default' }: { text: string, type?: 'default' | 'beginner' }) {
  if (!text) return null;
  
  const lowerText = text.toLowerCase();
  
  let bgClass = "bg-accent-400 text-black border-accent-400 shadow-[0_0_15px_rgba(250,204,21,0.4)]";
  let icon = <Star className="w-3.5 h-3.5" />;

  if (type === 'beginner' || lowerText.includes('beginner')) {
    bgClass = "bg-purple-500 text-white border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]";
    icon = <Baby className="w-3.5 h-3.5" />;
  } else if (lowerText.includes('fast') || lowerText.includes('quick')) {
    bgClass = "bg-orange-500 text-white border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]";
    icon = <Zap className="w-3.5 h-3.5" />;
  } else if (lowerText.includes('bonus') || lowerText.includes('reward')) {
    bgClass = "bg-pink-500 text-white border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.3)]";
    icon = <Gift className="w-3.5 h-3.5" />;
  } else if (lowerText.includes('exclusive') || lowerText.includes('top')) {
    bgClass = "bg-red-500 text-white border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]";
    icon = <Flame className="w-3.5 h-3.5" />;
  } else if (lowerText.includes('global') || lowerText.includes('popular')) {
    bgClass = "bg-sky-500 text-white border-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.3)]";
    icon = <Globe className="w-3.5 h-3.5" />;
  } else if (lowerText.includes('potential') || lowerText.includes('income') || lowerText.includes('verified')) {
    bgClass = "bg-emerald-500 text-white border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]";
    icon = <CheckCircle2 className="w-3.5 h-3.5" />;
  } else if (lowerText.includes('match') || lowerText.includes('choice')) {
    bgClass = "bg-accent-400 text-black border-accent-400 shadow-[0_0_15px_rgba(250,204,21,0.6)]";
    icon = <CheckCircle2 className="w-3.5 h-3.5" />;
  } else if (lowerText.includes('trusted') || lowerText.includes('secure')) {
    bgClass = "bg-blue-600 text-white border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)]";
    icon = <ShieldCheck className="w-3.5 h-3.5" />;
  } else if (lowerText.includes('advanced') || lowerText.includes('pro')) {
    bgClass = "bg-indigo-500 text-white border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)]";
    icon = <LineChart className="w-3.5 h-3.5" />;
  } else if (lowerText.includes('commitment')) {
    bgClass = "bg-teal-500 text-white border-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.3)]";
    icon = <CheckCircle2 className="w-3.5 h-3.5" />;
  }

  return (
    <span className={cn("inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black rounded-lg uppercase tracking-widest border shrink-0", bgClass)}>
      {icon}
      {text}
    </span>
  );
}

function PrimaryCard({ offer }: { offer: Offer; key?: React.Key }) {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className="rounded-[1.25rem] bg-dark-surface border border-dark-border shadow-2xl flex flex-col md:flex-row overflow-hidden relative group"
    >
      
      {/* Content Side */}
      <div className="p-8 md:p-12 flex-1 flex flex-col justify-center z-10">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <OfferBadge text={offer.badge || 'Top Pick'} />
          {offer.beginnerFriendly && (
            <OfferBadge text="Beginner Friendly" type="beginner" />
          )}
          <OfferBadge text="Verified Match" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-display font-black mb-4 tracking-tighter text-white uppercase">{offer.name}</h2>
        <p className="text-xl text-gray-400 font-medium mb-10 leading-relaxed max-w-lg">{offer.tagline}</p>
        
        <ul className="space-y-5 mb-12 border-t border-dark-border pt-8">
          {offer.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-4 text-gray-300 font-medium items-start">
              <span className="w-6 h-6 rounded-full bg-dark-bg border border-dark-border text-accent-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-3 h-3" strokeWidth={3} />
              </span>
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(250, 204, 21, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/bridge/${offer.id}`)}
            className="w-full sm:w-auto px-10 py-4 bg-accent-400 hover:bg-accent-500 text-black rounded-[0.75rem] font-bold text-lg flex items-center justify-center gap-3 shadow-md transition-all duration-300 group/btn"
          >
            <span className="relative z-10">{offer.ctaText}</span>
            <ChevronRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
          <p className="mt-5 text-sm text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Approved for your location
          </p>
        </div>
      </div>
      
      {/* Visual Side (Mockup/Image Area) */}
      <div className="hidden md:flex w-[40%] bg-dark-bg border-l border-dark-border flex-col items-center justify-center relative overflow-hidden shrink-0">
        {offer.image ? (
          <img src={offer.image} alt={offer.name} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
        ) : (
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-56 h-56 bg-dark-surface border border-dark-border rounded-[1.25rem] shadow-2xl flex items-center justify-center p-8 relative z-10"
          >
              <div className="text-center font-display text-white flex flex-col items-center">
                  {getIconForVertical(offer.vertical, "w-20 h-20 mb-6 drop-shadow-sm text-accent-400")}
                  <div className="font-bold text-2xl tracking-tighter text-white uppercase">{offer.name}</div>
              </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function SecondaryCard({ offer }: { offer: Offer; key?: React.Key }) {
  const navigate = useNavigate();

  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.02, boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.6)" }}
      className="bg-dark-surface border border-dark-border rounded-[1.25rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer hover:border-accent-400 overflow-hidden"
      onClick={() => navigate(`/bridge/${offer.id}`)}
    >
      {offer.image && (
        <div className="w-full h-32 relative overflow-hidden shrink-0">
          <img src={offer.image} alt={offer.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent" />
        </div>
      )}
      <div className={cn("p-8 flex flex-col flex-1", offer.image && "pt-4")}>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-[0.75rem] bg-dark-bg flex items-center justify-center text-accent-400 border border-dark-border group-hover:scale-110 transition-transform duration-300 shadow-sm shrink-0">
            {getIconForVertical(offer.vertical, "w-6 h-6")}
          </div>
          {offer.badge && (
            <OfferBadge text={offer.badge} />
          )}
          {offer.beginnerFriendly && (
            <OfferBadge text="Beginner" type="beginner" />
          )}
        </div>
        <h3 className="text-2xl font-display font-bold mb-3 tracking-tighter uppercase text-white">{offer.name}</h3>
        <p className="text-sm text-gray-400 font-medium mb-8 flex-1 line-clamp-2 leading-relaxed">{offer.tagline}</p>
        
        <div className="w-full py-4 bg-dark-bg border border-dark-border text-white rounded-[0.75rem] font-bold flex items-center justify-between px-6 group-hover:bg-accent-400 group-hover:border-[transparent] group-hover:text-black transition-all duration-300 overflow-hidden relative">
          <span className="relative z-10">View Details</span>
          <ChevronRight className="w-5 h-5 relative z-10 transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}

function CrossSell({ bannerText, onRetake }: { bannerText: string, onRetake: () => void }) {
  return (
    <div className="border border-dark-border shadow-lg rounded-[1.25rem] mt-10">
      <div className="bg-dark-surface text-white rounded-[1.25rem] p-10 md:p-16 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-3xl font-display font-black mb-4 tracking-tighter uppercase">{bannerText}</h3>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto font-medium">Curious about other top-tier options? Switch up your profile answers to unlock different categories like Surveys, Crypto, or Sweepstakes.</p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(250, 204, 21, 0.15)" }}
            whileTap={{ scale: 0.98 }}
            onClick={onRetake}
            className="px-10 py-4 bg-dark-bg text-accent-400 border border-dark-border rounded-[0.75rem] font-bold hover:bg-accent-400 hover:text-black transition-colors cursor-pointer"
          >
            Update Profile & Explore
          </motion.button>
        </div>
      </div>
    </div>
  );
}
