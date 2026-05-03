import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../../lib/quizState';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, ShieldCheck } from 'lucide-react';
import { cn } from '../../lib/utils';
import { SparklesIcon } from '../../components/Icons';

const COUNTRIES = [
  "United States", "Canada", "United Kingdom", "Australia", 
  "Ireland", "South Africa", "New Zealand", "Other"
];

export default function QuizPage() {
  const navigate = useNavigate();
  const { 
    step, nextStep, prevStep, setAnswer, 
    goal, country, experience, risk, time, 
    submitLead, email, firstName, results 
  } = useQuizStore();

  // If results are generated, push to results page
  useEffect(() => {
    if (results) {
      navigate('/dashboard');
    }
  }, [results, navigate]);

  const totalSteps = 6; // 0: Intro, 1-5: Qs, 6: Lead Capture
  const progressPercent = Math.max(0, (step / totalSteps) * 100);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <IntroStep key="intro" onNext={nextStep} />;
      case 1:
        return (
          <QuestionStep 
            key="q1"
            title="What are you mainly looking for right now?"
            options={[
              { label: 'Easy extra cash', desc: 'Best for surveys and simple rewards' },
              { label: 'Higher income potential', desc: 'Best for crypto and forex platforms' },
              { label: 'Prizes and giveaways', desc: 'Best for sweepstakes and reward offers' },
              { label: 'Betting or casino bonuses', desc: 'Best for gambling-related offers' },
              { label: "I'm open to the best option", desc: 'Let us recommend based on fit' },
            ]}
            selectedValue={goal}
            onSelect={(val) => { setAnswer('goal', val); setTimeout(nextStep, 350); }}
          />
        );
      case 2:
        return <CountryStep key="q2" selectedValue={country} onSelect={(val) => { setAnswer('country', val); setTimeout(nextStep, 350); }} />;
      case 3:
        return (
          <QuestionStep 
            key="q3"
            title="How experienced are you with online earning or trading?"
            options={[
              { label: 'Beginner', desc: "I'm just getting started" },
              { label: 'Intermediate', desc: "I've tried a few platforms before" },
              { label: 'Advanced', desc: "I'm comfortable with more complex options" }
            ]}
            selectedValue={experience}
            onSelect={(val) => { setAnswer('experience', val); setTimeout(nextStep, 350); }}
          />
        );
      case 4:
        return (
          <QuestionStep 
            key="q4"
            title="What level of risk are you comfortable with?"
            options={[
              { label: 'No risk', desc: "I want simple tasks or free offers" },
              { label: 'Low risk', desc: "I'm open to low-commitment opportunities" },
              { label: 'Medium risk', desc: "I can explore options with some uncertainty" },
              { label: 'High risk', desc: "I'm open to aggressive or speculative options" }
            ]}
            selectedValue={risk}
            onSelect={(val) => { setAnswer('risk', val); setTimeout(nextStep, 350); }}
          />
        );
      case 5:
        return (
          <QuestionStep 
            key="q5"
            title="How much time can you realistically spend?"
            options={[
              { label: '5–10 minutes a day' },
              { label: '30–60 minutes a day' },
              { label: 'A few hours a week' },
              { label: "I'm willing to invest serious time" }
            ]}
            selectedValue={time}
            onSelect={(val) => { setAnswer('time', val); setTimeout(nextStep, 350); }}
          />
        );
      case 6:
        return <LeadCaptureStep key="lead" onSubmit={submitLead} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent items-center justify-center py-6 px-4 relative overflow-hidden">
      
      {/* Quiz Header & Progress */}
      <div className="w-full max-w-2xl mb-8 flex flex-col gap-5 pt-8 md:pt-0 relative z-10">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => step > 0 ? prevStep() : navigate('/')}
            className="w-10 h-10 bg-dark-surface hover:bg-dark-border border border-dark-border shadow-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
        
        {/* Progress Bar */}
        {step > 0 && step < 6 && (
          <div className="w-full">
             <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Step {step} of 5
                </span>
                <span className="text-xs font-bold text-gray-400">{progressPercent.toFixed(0)}%</span>
             </div>
            <div className="w-full h-1.5 bg-dark-surface border border-dark-border rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent-400"
                initial={{ width: "0%" }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear", repeatDelay: 1 }}
                />
              </motion.div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-2xl flex-1 flex flex-col justify-start relative z-10">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>
    </div>
  );
}

function IntroStep({ onNext }: { onNext: () => void; key?: React.Key }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="text-center bg-dark-surface border border-dark-border p-8 md:p-14 rounded-[2.5rem] mt-4 shadow-2xl"
    >
      <div className="w-16 h-16 bg-dark-bg rounded-2xl flex items-center justify-center mx-auto mb-8 border border-dark-border text-accent-400">
        <SparklesIcon className="w-8 h-8" />
      </div>
      <h1 className="text-3xl md:text-5xl font-display font-black mb-6 tracking-tighter text-white uppercase">Let's find your match</h1>
      <p className="text-gray-400 text-lg font-medium mb-10 max-w-md mx-auto leading-relaxed">
        It takes less than a minute. We'll use your answers to recommend the best offers for your country, experience level, and goals.
      </p>
      <motion.button 
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(250, 204, 21, 0.3)" }}
        whileTap={{ scale: 0.98 }}
        onClick={onNext}
        className="w-full sm:w-auto px-12 py-4 bg-accent-400 hover:bg-accent-500 text-black rounded-[0.75rem] font-bold text-lg shadow-sm transition-all duration-200"
      >
        Start Matchmaking
      </motion.button>
      <p className="mt-6 text-sm text-gray-400 font-bold tracking-widest uppercase">No payment required</p>
    </motion.div>
  );
}

function QuestionStep({ 
  title, options, selectedValue, onSelect 
}: { 
  title: string, 
  options: {label: string, desc?: string}[], 
  selectedValue: string | null, 
  onSelect: (val: string) => void;
  key?: React.Key;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full pb-20 pt-4"
    >
      <h2 className="text-3xl md:text-4xl font-display font-black mb-10 text-white tracking-tighter uppercase">{title}</h2>
      <div className="flex flex-col gap-4">
        {options.map((opt) => {
          const isSelected = selectedValue === opt.label;
          return (
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(250, 204, 21, 0.15)" }}
              whileTap={{ scale: 0.98 }}
              key={opt.label}
              onClick={() => onSelect(opt.label)}
              className={cn(
                "flex flex-col items-start p-6 rounded-[1.25rem] transition-all duration-200 text-left w-full",
                isSelected 
                  ? "bg-dark-surface border-2 border-accent-400 shadow-md" 
                  : "bg-dark-surface border-2 border-dark-border hover:border-accent-400/50 hover:shadow-sm"
              )}
            >
              <div className="flex justify-between items-center w-full relative z-10">
                <span className={cn("text-xl font-bold tracking-tight transition-colors", isSelected ? "text-accent-400" : "text-white")}>
                  {opt.label}
                </span>
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center transition-all",
                  isSelected ? "bg-accent-400 text-black shadow-sm" : "border-2 border-dark-border bg-transparent"
                )}>
                  {isSelected && <Check className="w-4 h-4" strokeWidth={3} />}
                </div>
              </div>
              {opt.desc && (
                <span className="text-sm text-gray-400 mt-1.5 font-medium relative z-10">{opt.desc}</span>
              )}
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}

function CountryStep({ 
  selectedValue, onSelect 
}: { 
  selectedValue: string | null, 
  onSelect: (val: string) => void;
  key?: React.Key;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full pb-20 pt-4"
    >
      <h2 className="text-3xl md:text-4xl font-display font-black mb-10 text-white tracking-tighter uppercase">Where are you located?</h2>
      
      <div className="bg-dark-surface border border-dark-border p-8 rounded-[1.25rem] mb-6">
        <label className="block text-sm font-bold tracking-widest text-gray-400 mb-3 uppercase">Select your country</label>
        <select 
          className="w-full p-4 border border-dark-border rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none font-bold text-lg appearance-none bg-dark-bg text-white transition-shadow"
          value={selectedValue || ""}
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value="" disabled className="text-black bg-white">Choose an option...</option>
          {COUNTRIES.map(c => <option key={c} value={c} className="text-black bg-white">{c}</option>)}
        </select>
        <div className="mt-10">
          <p className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Quick Picks</p>
          <div className="flex flex-wrap gap-2.5">
            {COUNTRIES.slice(0, 4).map(c => (
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(250, 204, 21, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                key={c}
                onClick={() => onSelect(c)}
                className="px-5 py-2.5 rounded-[0.5rem] border border-dark-border bg-dark-bg text-white text-sm font-bold hover:border-accent-400 hover:text-accent-400 transition-all"
              >
                {c}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function LeadCaptureStep({ onSubmit }: { onSubmit: (name: string, email: string) => void; key?: React.Key }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { goal, country, experience, risk, time } = useQuizStore();
  const answers = { goal, country, experience, risk, time };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const email = formData.get('email') as string;
    
    if (firstName && email) {
      setLoading(true);
      setError(null);
      
      try {
        // Fire-and-forget or brief await for generic webhook
        await fetch('https://httpbin.org/post', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: firstName,
            email,
            quizAnswers: answers
          }),
        });
        
        onSubmit(firstName, email);
      } catch (err) {
        console.error("Webhook failed", err);
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-dark-surface p-8 md:p-12 rounded-[2rem] mt-6 w-full max-w-xl mx-auto border border-dark-border shadow-2xl"
    >
      <div className="w-16 h-16 bg-dark-bg text-accent-400 border border-dark-border rounded-2xl flex items-center justify-center mx-auto mb-8">
        <SparklesIcon className="w-8 h-8" />
      </div>
      <h2 className="text-3xl md:text-4xl font-display font-black mb-4 text-center tracking-tighter text-white uppercase">Matches verified.</h2>
      <p className="text-gray-400 text-center mb-8 font-medium leading-relaxed">
        Let's get you set up. Create your free Campus Cash World account to securely unlock your personalized dashboard.
      </p>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-bold text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" htmlFor="firstName">First Name</label>
          <input 
            required 
            id="firstName"
            name="firstName"
            type="text" 
            placeholder="e.g. Alex"
            disabled={loading}
            className="w-full p-4 border border-dark-border bg-dark-bg text-white placeholder:text-gray-600 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all font-bold shadow-sm disabled:opacity-50"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" htmlFor="email">Email Address</label>
          <input 
            required 
            id="email"
            name="email"
            type="email" 
            placeholder="you@email.com"
            disabled={loading}
            className="w-full p-4 border border-dark-border bg-dark-bg text-white placeholder:text-gray-600 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all font-bold shadow-sm disabled:opacity-50"
          />
        </div>
        
        <label className="flex items-start gap-3 mt-3 cursor-pointer group p-2">
          <div className="relative flex items-center mt-0.5">
            <input required type="checkbox" className="peer sr-only " disabled={loading} />
            <div className="w-5 h-5 border-[2px] border-dark-border rounded-md peer-checked:bg-accent-400 peer-checked:border-accent-400 transition-colors flex items-center justify-center">
              <Check className="w-3 h-3 text-black opacity-0 peer-checked:opacity-100" strokeWidth={4} />
            </div>
          </div>
          <span className="text-xs text-gray-400 flex-1 leading-relaxed font-medium select-none">
            I agree to receive personalized updates and recommendations via email.
          </span>
        </label>

        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(250, 204, 21, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full py-4 mt-2 bg-accent-400 hover:bg-accent-500 disabled:bg-accent-400/50 text-black rounded-[0.75rem] font-bold text-lg shadow-sm transition-all duration-200 flex items-center justify-center"
        >
          {loading ? (
             <span className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
          ) : (
            "Unlock My Dashboard"
          )}
        </motion.button>
        <p className="text-center text-xs text-gray-400 font-bold mt-2 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Your data is never shared.
        </p>
      </form>
    </motion.div>
  )
}
